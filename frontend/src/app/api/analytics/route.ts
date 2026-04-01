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
    const days = parseInt(searchParams.get("days") ?? "30");
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
    ] = await Promise.all([
        // Total Pageviews
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

        // Device Breakdown
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$device", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Browser Breakdown
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$browser", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // OS Breakdown
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$os", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Referrer Breakdown
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$referrer", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]),

        // Country Breakdown
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$country", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]),

        // Event Breakdown
        PageView.aggregate([
            { $match: { timestamp: { $gte: since } } },
            { $group: { _id: "$event", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
        ]),

        // Pageviews over time (daily)
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

        // Average duration (nur events mit duration > 0)
        PageView.aggregate([
            { $match: { timestamp: { $gte: since }, duration: { $gt: 0 } } },
            { $group: { _id: null, avg: { $avg: "$duration" } } },
        ]),
    ]);

    return NextResponse.json({
        overview: {
            totalPageviews,
            uniqueSessions,
            avgDuration: Math.round(avgDuration[0]?.avg ?? 0),
            period: days,
        },
        topPages:      topPages.map(p => ({ page: p._id, count: p.count })),
        devices:       deviceBreakdown.map(d => ({ name: d._id, value: d.count })),
        browsers:      browserBreakdown.map(b => ({ name: b._id, value: b.count })),
        os:            osBreakdown.map(o => ({ name: o._id, value: o.count })),
        referrers:     referrerBreakdown.map(r => ({ name: r._id, count: r.count })),
        countries:     countryBreakdown.map(c => ({ name: c._id, count: c.count })),
        events:        eventBreakdown.map(e => ({ name: e._id, count: e.count })),
        pageviewsOverTime: pageviewsOverTime.map(p => ({
            date:  `${p._id.year}-${String(p._id.month).padStart(2, "0")}-${String(p._id.day).padStart(2, "0")}`,
            count: p.count,
        })),
    });
}
