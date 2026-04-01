// src/app/api/analytics/route.ts
// Dashboard-Daten API — nur für authentifizierte Admins.

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import PageView from "@/lib/db/models/PageView";

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
        topPages,
        deviceBreakdown,
        browserBreakdown,
        osBreakdown,
        referrerBreakdown,
        countryBreakdown,
        eventBreakdown,
        pageviewsOverTime,
        avgDuration,
        // ── NEU ──
        bounceData,
        newVsReturningData,
        utmCampaignsData,
        scrollDepthData,
        ctaClicksData,
        formFunnelData,
    ] = await Promise.all([

        // Gesamt-Pageviews
        PageView.countDocuments({ timestamp: { $gte: since }, event: "pageview" }),

        // Unique Sessions
        PageView.distinct("sessionId", { timestamp: { $gte: since } }).then(r => r.length),

        // Top Pages
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$page", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]),

        // Geräte
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$device", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Browser
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$browser", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Betriebssystem
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$os", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Traffic-Quellen
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$referrer", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]),

        // Länder
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$country", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]),

        // Event-Typen
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$event", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Pageviews pro Tag (Zeitreihe)
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

        // Durchschnittliche Verweildauer
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, duration: { $gt: 0 } } },
            { $group: { _id: null, avg: { $avg: "$duration" } } },
        ]),

        // ── Bounce Rate: Sessions mit nur 1 Pageview ──
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

        // ── Neu vs. Wiederkehrend ──
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$sessionId", isNew: { $first: "$isNewVisitor" } } },
            { $group: { _id: "$isNew", count: { $sum: 1 } } },
        ]),

        // ── UTM Kampagnen ──
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
                },
            },
            { $sort: { count: -1 } },
            { $limit: 20 },
        ]),

        // ── Scroll-Tiefe Milestones ──
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "scroll_depth" } },
            { $group: { _id: "$eventTarget", count: { $sum: 1 } } },
            { $sort: { _id: 1 } },
        ]),

        // ── CTA Klicks ──
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "cta_click" } },
            { $group: { _id: "$eventTarget", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // ── Form Funnel: form_start vs form_submit ──
        PageView.aggregate([
            {
                $match: {
                    timestamp: { $gte: since },
                    event:     { $in: ["form_start", "form_submit"] },
                },
            },
            { $group: { _id: "$event", count: { $sum: 1 } } },
        ]),
    ]);

    // Bounce-Rate berechnen
    const bounceTotal   = bounceData[0]?.total   ?? 0;
    const bounceCount   = bounceData[0]?.bounced  ?? 0;
    const bounceRate    = bounceTotal > 0 ? Math.round((bounceCount / bounceTotal) * 100) : 0;
    const pagesPerSession = uniqueSessions > 0
        ? Math.round((totalPageviews / uniqueSessions) * 10) / 10
        : 0;

    return NextResponse.json({
        overview: {
            totalPageviews,
            uniqueSessions,
            avgDuration:    Math.round(avgDuration[0]?.avg ?? 0),
            period:         days,
            bounceRate,
            pagesPerSession,
        },
        topPages:      topPages.map(p       => ({ page: p._id,                      count: p.count })),
        devices:       deviceBreakdown.map(d  => ({ name: d._id,                     value: d.count })),
        browsers:      browserBreakdown.map(b => ({ name: b._id,                     value: b.count })),
        os:            osBreakdown.map(o      => ({ name: o._id,                     value: o.count })),
        referrers:     referrerBreakdown.map(r => ({ name: r._id,                    count: r.count })),
        countries:     countryBreakdown.map(c  => ({ name: c._id,                    count: c.count })),
        events:        eventBreakdown.map(e    => ({ name: e._id,                    count: e.count })),
        pageviewsOverTime: pageviewsOverTime.map(p => ({
            date:  `${p._id.year}-${String(p._id.month).padStart(2, "0")}-${String(p._id.day).padStart(2, "0")}`,
            count: p.count,
        })),
        // Neu:
        newVsReturning: newVsReturningData.map(d => ({
            name:  d._id === true ? "Neu" : "Wiederkehrend",
            value: d.count,
        })),
        utmCampaigns: utmCampaignsData.map(u => ({
            source:   u._id.source   || "—",
            medium:   u._id.medium   || "—",
            campaign: u._id.campaign || "—",
            count:    u.count,
        })),
        scrollDepth: scrollDepthData.map(s => ({
            name:  s._id,
            value: s.count,
        })),
        ctaClicks: ctaClicksData.map(c => ({
            name:  c._id,
            count: c.count,
        })),
        formFunnel: [
            {
                name:  "Form Start",
                value: formFunnelData.find((d: { _id: string }) => d._id === "form_start")?.count ?? 0,
            },
            {
                name:  "Abgesendet",
                value: formFunnelData.find((d: { _id: string }) => d._id === "form_submit")?.count ?? 0,
            },
        ],
    });
}
