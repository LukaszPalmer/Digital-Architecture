// src/app/api/analytics/route.ts
// Dashboard-Daten API — nur für authentifizierte Admins.
//
// Zentrale Idee: Alle Metriken sind USER-zentriert (unique anonymousId).
// "Professional" heisst hier: eine Person zählt als 1, egal wie oft sie
// wiederkommt. Nur wenige Ausnahmen (Pageviews, Sessions, Event-Counts)
// sind bewusst als Aktions-Zähler implementiert.

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import PageView from "@/lib/db/models/PageView";

// ── Response-Typen (werden vom Dashboard ebenfalls konsumiert) ───────────────

export interface AnalyticsOverview {
    totalPageviews:   number;
    uniqueUsers:      number;
    uniqueSessions:   number;
    newUsers:         number;
    returningUsers:   number;
    avgDuration:      number;    // Sek. pro Session
    avgPagesPerUser:  number;    // Ø Seiten je Person
    pagesPerSession:  number;    // Ø Seiten je Session
    bounceRate:       number;    // %
    engagementRate:   number;    // % Sessions mit ≥ 2 Pageviews oder ≥ 30 Sek
    leads:            number;    // Anzahl form_submit Events
    leadRate:         number;    // % Users → Leads
    period:           number;
    peakDay:          { date: string; count: number } | null;
    returningRate:    number;    // % der User, die bereits vorher da waren
}

// ── Handler ──────────────────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = req.nextUrl;
    const days  = parseInt(searchParams.get("days") ?? "30");
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    await connectDB();

    const [
        totalPageviews,
        uniqueSessions,
        uniqueUsersArr,
        topPages,
        deviceBreakdown,
        browserBreakdown,
        osBreakdown,
        referrerBreakdown,
        countryBreakdown,
        cityBreakdown,
        eventBreakdown,
        pageviewsOverTime,
        usersOverTime,
        hourlyActivity,
        weekdayActivity,
        avgDuration,
        bounceData,
        engagementData,
        newVsReturningData,
        utmCampaignsData,
        scrollDepthData,
        ctaClicksData,
        formFunnelData,
        topEngagedPages,
    ] = await Promise.all([

        // ── Pageviews gesamt (Aktions-Zähler) ─────────────────────────────
        PageView.countDocuments({ timestamp: { $gte: since }, event: "pageview" }),

        // ── Sessions gesamt (Aktions-Zähler) ──────────────────────────────
        PageView.distinct("sessionId", { timestamp: { $gte: since } }).then(r => r.length),

        // ── Unique Users (persistente anonymousId) ────────────────────────
        PageView.distinct("anonymousId", { timestamp: { $gte: since } }),

        // ── Top Pages (nach Pageviews) ────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$page", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 12 },
        ]),

        // ── Devices — pro unique user ────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", device: { $first: "$device" } } },
            { $group: { _id: "$device", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // ── Browsers — pro unique user ───────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", browser: { $first: "$browser" } } },
            { $group: { _id: "$browser", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // ── OS — pro unique user ─────────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", os: { $first: "$os" } } },
            { $group: { _id: "$os", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // ── Referrer — pro unique user ───────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", referrer: { $first: "$referrer" } } },
            { $group: { _id: "$referrer", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 12 },
        ]),

        // ── Länder — pro unique user ─────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", country: { $first: "$country" } } },
            { $group: { _id: "$country", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 20 },
        ]),

        // ── Städte — pro unique user (nur wenn gesetzt) ──────────────────
        PageView.aggregate([
            {
                $match: {
                    timestamp: { $gte: since },
                    event: "pageview",
                    city:  { $nin: ["", null] },
                },
            },
            {
                $group: {
                    _id: "$anonymousId",
                    city:    { $first: "$city" },
                    country: { $first: "$country" },
                },
            },
            {
                $group: {
                    _id:     { city: "$city", country: "$country" },
                    count:   { $sum: 1 },
                },
            },
            { $sort: { count: -1 } },
            { $limit: 15 },
        ]),

        // ── Event Counts (Aktions-Zähler, nicht dedupliziert) ────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$event", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // ── Pageviews pro Tag ────────────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            {
                $group: {
                    _id: {
                        year:  { $year: "$timestamp" },
                        month: { $month: "$timestamp" },
                        day:   { $dayOfMonth: "$timestamp" },
                    },
                    count: { $sum: 1 },
                },
            },
            { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
        ]),

        // ── Unique Users pro Tag (für "Visitor Trend") ───────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            {
                $group: {
                    _id: {
                        year:  { $year: "$timestamp" },
                        month: { $month: "$timestamp" },
                        day:   { $dayOfMonth: "$timestamp" },
                        user:  "$anonymousId",
                    },
                },
            },
            {
                $group: {
                    _id: {
                        year:  "$_id.year",
                        month: "$_id.month",
                        day:   "$_id.day",
                    },
                    count: { $sum: 1 },
                },
            },
            { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
        ]),

        // ── Aktivität pro Stunde (0..23, Pageviews) ──────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            {
                $group: {
                    _id:   { $hour: "$timestamp" },
                    count: { $sum: 1 },
                },
            },
            { $sort: { _id: 1 } },
        ]),

        // ── Aktivität pro Wochentag (1=So..7=Sa im MongoDB-Standard) ─────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            {
                $group: {
                    _id:   { $dayOfWeek: "$timestamp" },
                    count: { $sum: 1 },
                },
            },
            { $sort: { _id: 1 } },
        ]),

        // ── Ø Session-Dauer ──────────────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageleave", duration: { $gt: 0 } } },
            { $group: { _id: "$sessionId", sessionDuration: { $sum: "$duration" } } },
            { $group: { _id: null, avg: { $avg: "$sessionDuration" } } },
        ]),

        // ── Bounce Rate ──────────────────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$sessionId", pvCount: { $sum: 1 } } },
            {
                $group: {
                    _id: null,
                    total:   { $sum: 1 },
                    bounced: { $sum: { $cond: [{ $eq: ["$pvCount", 1] }, 1, 0] } },
                },
            },
        ]),

        // ── Engagement Rate (Sessions ≥ 2 PV ODER ≥ 30 Sek Dauer) ────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: { $in: ["pageview", "pageleave"] } } },
            {
                $group: {
                    _id: "$sessionId",
                    pvCount:  { $sum: { $cond: [{ $eq: ["$event", "pageview"] }, 1, 0] } },
                    duration: { $sum: "$duration" },
                },
            },
            {
                $group: {
                    _id: null,
                    total:    { $sum: 1 },
                    engaged:  {
                        $sum: {
                            $cond: [
                                { $or: [{ $gte: ["$pvCount", 2] }, { $gte: ["$duration", 30] }] },
                                1,
                                0,
                            ],
                        },
                    },
                },
            },
        ]),

        // ── New vs. Returning (per anonymousId) ──────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $sort: { timestamp: 1 } },
            { $group: { _id: "$anonymousId", isNew: { $first: "$isNewVisitor" } } },
            { $group: { _id: "$isNew", count: { $sum: 1 } } },
        ]),

        // ── UTM Campaigns ────────────────────────────────────────────────
        PageView.aggregate([
            {
                $match: {
                    timestamp: { $gte: since },
                    $or: [
                        { utmSource:   { $nin: ["", null] } },
                        { utmCampaign: { $nin: ["", null] } },
                    ],
                },
            },
            {
                $group: {
                    _id: {
                        source:   "$utmSource",
                        medium:   "$utmMedium",
                        campaign: "$utmCampaign",
                    },
                    count: { $sum: 1 },
                    users: { $addToSet: "$anonymousId" },
                },
            },
            {
                $project: {
                    count: 1,
                    users: { $size: "$users" },
                },
            },
            { $sort: { count: -1 } },
            { $limit: 20 },
        ]),

        // ── Scroll Depth ─────────────────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "scroll_depth" } },
            { $group: { _id: "$eventTarget", count: { $sum: 1 } } },
            { $sort: { _id: 1 } },
        ]),

        // ── CTA Klicks ───────────────────────────────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "cta_click" } },
            { $group: { _id: "$eventTarget", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // ── Form Funnel (form_start vs form_submit) ──────────────────────
        PageView.aggregate([
            {
                $match: {
                    timestamp: { $gte: since },
                    event:     { $in: ["form_start", "form_submit"] },
                },
            },
            { $group: { _id: "$event", count: { $sum: 1 } } },
        ]),

        // ── Seiten mit längster Ø Verweildauer ───────────────────────────
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageleave", duration: { $gt: 0 } } },
            {
                $group: {
                    _id:      "$page",
                    avgTime:  { $avg: "$duration" },
                    visits:   { $sum: 1 },
                },
            },
            { $match: { visits: { $gte: 2 } } },
            { $sort: { avgTime: -1 } },
            { $limit: 8 },
        ]),
    ]);

    // ── Abgeleitete Metriken ─────────────────────────────────────────────────

    const uniqueUsers = uniqueUsersArr.filter(id => id && id !== "user_unknown").length;

    // Bounce Rate
    const bounceTotal = bounceData[0]?.total   ?? 0;
    const bounceCount = bounceData[0]?.bounced ?? 0;
    const bounceRate  = bounceTotal > 0 ? Math.round((bounceCount / bounceTotal) * 100) : 0;

    // Engagement Rate
    const engTotal   = engagementData[0]?.total   ?? 0;
    const engReached = engagementData[0]?.engaged ?? 0;
    const engagementRate = engTotal > 0 ? Math.round((engReached / engTotal) * 100) : 0;

    // Seiten pro Session / User
    const pagesPerSession = uniqueSessions > 0
        ? Math.round((totalPageviews / uniqueSessions) * 10) / 10
        : 0;
    const avgPagesPerUser = uniqueUsers > 0
        ? Math.round((totalPageviews / uniqueUsers) * 10) / 10
        : 0;

    // New vs. Returning
    const newUsersCount       = newVsReturningData.find((d: { _id: boolean }) => d._id === true)?.count  ?? 0;
    const returningUsersCount = newVsReturningData.find((d: { _id: boolean }) => d._id === false)?.count ?? 0;
    const returningRate       = uniqueUsers > 0
        ? Math.round((returningUsersCount / uniqueUsers) * 100)
        : 0;

    // Leads (= Formular-Submits)
    const leadsCount = formFunnelData.find((d: { _id: string }) => d._id === "form_submit")?.count ?? 0;
    const leadRate   = uniqueUsers > 0
        ? Math.round((leadsCount / uniqueUsers) * 1000) / 10     // eine Nachkomma
        : 0;

    // Peak-Tag (meist-getroffener Tag)
    let peakDay: { date: string; count: number } | null = null;
    for (const p of pageviewsOverTime) {
        const date = `${p._id.year}-${String(p._id.month).padStart(2, "0")}-${String(p._id.day).padStart(2, "0")}`;
        if (!peakDay || p.count > peakDay.count) peakDay = { date, count: p.count };
    }

    // Timeline-Daten in ein sauberes Format bringen
    const fmtDate = (y: number, m: number, d: number) =>
        `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

    return NextResponse.json({
        overview: {
            totalPageviews,
            uniqueUsers,
            uniqueSessions,
            newUsers:         newUsersCount,
            returningUsers:   returningUsersCount,
            avgDuration:      Math.round(avgDuration[0]?.avg ?? 0),
            avgPagesPerUser,
            pagesPerSession,
            bounceRate,
            engagementRate,
            leads:            leadsCount,
            leadRate,
            period:           days,
            peakDay,
            returningRate,
        } satisfies AnalyticsOverview,

        topPages:   topPages.map(p          => ({ page: p._id,  count: p.count })),
        devices:    deviceBreakdown.map(d   => ({ name: d._id,  value: d.count })),
        browsers:   browserBreakdown.map(b  => ({ name: b._id,  value: b.count })),
        os:         osBreakdown.map(o       => ({ name: o._id,  value: o.count })),
        referrers:  referrerBreakdown.map(r => ({ name: r._id,  count: r.count })),
        countries:  countryBreakdown.map(c  => ({ name: c._id,  count: c.count })),
        cities:     cityBreakdown.map(c     => ({
            city:    c._id.city,
            country: c._id.country,
            count:   c.count,
        })),
        events:     eventBreakdown.map(e    => ({ name: e._id,  count: e.count })),

        pageviewsOverTime: pageviewsOverTime.map(p => ({
            date:  fmtDate(p._id.year, p._id.month, p._id.day),
            count: p.count,
        })),
        usersOverTime: usersOverTime.map(p => ({
            date:  fmtDate(p._id.year, p._id.month, p._id.day),
            count: p.count,
        })),
        hourlyActivity: Array.from({ length: 24 }, (_, h) => ({
            hour:  h,
            count: hourlyActivity.find((x: { _id: number }) => x._id === h)?.count ?? 0,
        })),
        // MongoDB: 1=Sonntag ... 7=Samstag → nach deutschem Wochen-Start (Mo..So)
        weekdayActivity: [2, 3, 4, 5, 6, 7, 1].map((dow, i) => ({
            day:    ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"][i],
            count:  weekdayActivity.find((x: { _id: number }) => x._id === dow)?.count ?? 0,
        })),

        newVsReturning: [
            { name: "Neue Besucher",  value: newUsersCount },
            { name: "Wiederkehrende", value: returningUsersCount },
        ],

        utmCampaigns: utmCampaignsData.map(u => ({
            source:   u._id.source   || "—",
            medium:   u._id.medium   || "—",
            campaign: u._id.campaign || "—",
            count:    u.count,
            users:    u.users ?? 0,
        })),

        scrollDepth: scrollDepthData.map(s => ({
            name:  s._id,
            value: s.count,
        })),

        ctaClicks: ctaClicksData.map(c => ({
            name:  c._id,
            count: c.count,
        })),

        leads: {
            starts:  formFunnelData.find((d: { _id: string }) => d._id === "form_start")?.count  ?? 0,
            submits: leadsCount,
            rate:    leadRate,
        },

        topEngagedPages: topEngagedPages.map(p => ({
            page:     p._id,
            avgTime:  Math.round(p.avgTime),
            visits:   p.visits,
        })),
    });
}
