// src/app/api/analytics/route.ts
// Dashboard-Daten API — nur für authentifizierte Admins.
// Metriken sind user-zentriert (unique anonymousId), nicht visit-zentriert.

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
        uniqueUsersArr,
        topPages,
        deviceBreakdown,
        browserBreakdown,
        osBreakdown,
        referrerBreakdown,
        countryBreakdown,
        eventBreakdown,
        pageviewsOverTime,
        avgDuration,
        bounceData,
        newVsReturningData,
        utmCampaignsData,
        scrollDepthData,
        ctaClicksData,
        formFunnelData,
    ] = await Promise.all([

        // Total Pageviews
        PageView.countDocuments({ timestamp: { $gte: since }, event: "pageview" }),

        // Unique Sessions (short-lived, per tab)
        PageView.distinct("sessionId", { timestamp: { $gte: since } }).then(r => r.length),

        // Unique Users (persistent anonymousId — same person returning = 1 user)
        PageView.distinct("anonymousId", { timestamp: { $gte: since } }),

        // Top Pages (by pageviews)
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$page", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]),

        // Devices — per unique user to avoid inflation
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", device: { $first: "$device" } } },
            { $group: { _id: "$device", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Browsers — per unique user
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", browser: { $first: "$browser" } } },
            { $group: { _id: "$browser", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // OS — per unique user
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", os: { $first: "$os" } } },
            { $group: { _id: "$os", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Traffic Sources — per unique user
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", referrer: { $first: "$referrer" } } },
            { $group: { _id: "$referrer", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]),

        // Countries — per unique user
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $group: { _id: "$anonymousId", country: { $first: "$country" } } },
            { $group: { _id: "$country", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]),

        // Event counts (raw totals, not user-deduped — these are action counts)
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$event", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Pageviews per day (trend)
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

        // Avg session duration (from pageleave events with duration > 0)
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageleave", duration: { $gt: 0 } } },
            { $group: { _id: "$sessionId", sessionDuration: { $sum: "$duration" } } },
            { $group: { _id: null, avg: { $avg: "$sessionDuration" } } },
        ]),

        // Bounce Rate: sessions with only 1 pageview
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

        // New vs. Returning Users — based on anonymousId + isNewVisitor flag
        // A user is "new" if any pageview in the period has isNewVisitor = true.
        // We take $first to deduplicate per user.
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "pageview" } },
            { $sort: { timestamp: 1 } },
            { $group: { _id: "$anonymousId", isNew: { $first: "$isNewVisitor" } } },
            { $group: { _id: "$isNew", count: { $sum: 1 } } },
        ]),

        // UTM Campaigns
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

        // Scroll Depth milestones
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "scroll_depth" } },
            { $group: { _id: "$eventTarget", count: { $sum: 1 } } },
            { $sort: { _id: 1 } },
        ]),

        // CTA Clicks
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, event: "cta_click" } },
            { $group: { _id: "$eventTarget", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Form Funnel: form_start vs form_submit
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

    const uniqueUsers    = uniqueUsersArr.filter(id => id && id !== "user_unknown").length;

    // Bounce Rate
    const bounceTotal   = bounceData[0]?.total   ?? 0;
    const bounceCount   = bounceData[0]?.bounced  ?? 0;
    const bounceRate    = bounceTotal > 0 ? Math.round((bounceCount / bounceTotal) * 100) : 0;

    // Pages per Session
    const pagesPerSession = uniqueSessions > 0
        ? Math.round((totalPageviews / uniqueSessions) * 10) / 10
        : 0;

    // New vs. Returning Users
    const newUsersCount       = newVsReturningData.find((d: { _id: boolean }) => d._id === true)?.count  ?? 0;
    const returningUsersCount = newVsReturningData.find((d: { _id: boolean }) => d._id === false)?.count ?? 0;

    return NextResponse.json({
        overview: {
            totalPageviews,
            uniqueUsers,
            uniqueSessions,
            newUsers:       newUsersCount,
            returningUsers: returningUsersCount,
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
        newVsReturning: [
            { name: "New Users",       value: newUsersCount },
            { name: "Returning Users", value: returningUsersCount },
        ],
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
                name:  "Form Submit",
                value: formFunnelData.find((d: { _id: string }) => d._id === "form_submit")?.count ?? 0,
            },
        ],
    });
}
