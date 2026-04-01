// src/app/api/cron/aggregate/route.ts
// Nightly Cron Job — läuft täglich um 03:00 UTC (via Vercel Cron).
//
// Was dieser Job macht:
//   1. Aggregiert die Rohdaten von gestern zu einem DailySummary (~2 KB)
//   2. Schreibt einen DeletionLog-Eintrag als DSGVO-Nachweis für die TTL-Löschung
//   3. Die rohen PageView-Events werden automatisch nach 30 Tagen vom
//      MongoDB TTL-Index gelöscht — dieser Job dokumentiert das lückenlos.
//
// Vercel Cron Security: nur Aufrufe mit korrektem CRON_SECRET werden verarbeitet.

import { NextRequest, NextResponse } from "next/server";
import { connectDB }   from "@/lib/db/mongodb";
import PageView        from "@/lib/db/models/PageView";
import DailySummary    from "@/lib/db/models/DailySummary";
import DeletionLog     from "@/lib/db/models/DeletionLog";

function startOfDay(d: Date): Date {
    return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

export async function GET(req: NextRequest) {
    // ── Auth: nur Vercel Cron darf diesen Endpunkt aufrufen ──
    const secret = process.env.CRON_SECRET;
    const auth   = req.headers.get("authorization");
    if (!secret || auth !== `Bearer ${secret}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const now       = new Date();
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const dayStart  = startOfDay(yesterday);
    const dayEnd    = startOfDay(now); // exclusive upper bound

    // ── 1. DailySummary nur einmal erstellen ──
    const existing = await DailySummary.findOne({ date: dayStart });
    if (!existing) {
        // Alle Aggregationen parallel für gestern
        const [
            totalPageviews,
            sessions,
            avgDurationData,
            bounceData,
            newVisitorData,
            topPages,
            devices,
            browsers,
            os,
            countries,
            referrers,
            events,
            scrollDepth,
            ctaClicks,
            formFunnelData,
        ] = await Promise.all([

            PageView.countDocuments({ timestamp: { $gte: dayStart, $lt: dayEnd }, event: "pageview" }),

            PageView.distinct("sessionId", { timestamp: { $gte: dayStart, $lt: dayEnd } })
                .then(r => r.length),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd }, duration: { $gt: 0 } } },
                { $group: { _id: null, avg: { $avg: "$duration" } } },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd }, event: "pageview" } },
                { $group: { _id: "$sessionId", pvCount: { $sum: 1 } } },
                { $group: {
                    _id: null,
                    total:   { $sum: 1 },
                    bounced: { $sum: { $cond: [{ $eq: ["$pvCount", 1] }, 1, 0] } },
                }},
            ]),

            PageView.countDocuments({ timestamp: { $gte: dayStart, $lt: dayEnd }, event: "pageview", isNewVisitor: true }),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd }, event: "pageview" } },
                { $group: { _id: "$page", count: { $sum: 1 } } },
                { $sort: { count: -1 } }, { $limit: 10 },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd } } },
                { $group: { _id: "$device", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd } } },
                { $group: { _id: "$browser", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd } } },
                { $group: { _id: "$os", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd } } },
                { $group: { _id: "$country", count: { $sum: 1 } } },
                { $sort: { count: -1 } }, { $limit: 10 },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd } } },
                { $group: { _id: "$referrer", count: { $sum: 1 } } },
                { $sort: { count: -1 } }, { $limit: 10 },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd } } },
                { $group: { _id: "$event", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd }, event: "scroll_depth" } },
                { $group: { _id: "$eventTarget", count: { $sum: 1 } } },
                { $sort: { _id: 1 } },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd }, event: "cta_click" } },
                { $group: { _id: "$eventTarget", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
            ]),

            PageView.aggregate([
                { $match: { timestamp: { $gte: dayStart, $lt: dayEnd }, event: { $in: ["form_start", "form_submit"] } } },
                { $group: { _id: "$event", count: { $sum: 1 } } },
            ]),
        ]);

        const bounceTotal = bounceData[0]?.total   ?? 0;
        const bounceCount = bounceData[0]?.bounced  ?? 0;
        const uniqueSessions = sessions;
        const bounceRate    = bounceTotal > 0 ? Math.round((bounceCount / bounceTotal) * 100) : 0;
        const pagesPerSession = uniqueSessions > 0
            ? Math.round((totalPageviews / uniqueSessions) * 10) / 10 : 0;

        await DailySummary.create({
            date:            dayStart,
            pageviews:       totalPageviews,
            uniqueSessions,
            newVisitors:     newVisitorData,
            avgDuration:     Math.round(avgDurationData[0]?.avg ?? 0),
            bounceRate,
            pagesPerSession,
            formStarts:  formFunnelData.find((d: { _id: string }) => d._id === "form_start")?.count ?? 0,
            formSubmits: formFunnelData.find((d: { _id: string }) => d._id === "form_submit")?.count ?? 0,
            topPages:    topPages.map(p    => ({ name: p._id, count: p.count })),
            devices:     devices.map(d     => ({ name: d._id, count: d.count })),
            browsers:    browsers.map(b    => ({ name: b._id, count: b.count })),
            os:          os.map(o          => ({ name: o._id, count: o.count })),
            countries:   countries.map(c   => ({ name: c._id, count: c.count })),
            referrers:   referrers.map(r   => ({ name: r._id, count: r.count })),
            events:      events.map(e      => ({ name: e._id, count: e.count })),
            scrollDepth: scrollDepth.map(s => ({ name: s._id, count: s.count })),
            ctaClicks:   ctaClicks.map(c   => ({ name: c._id, count: c.count })),
        });
    }

    // ── 2. DSGVO Audit-Log: dokumentiere die bevorstehende TTL-Löschung ──
    // MongoDB löscht Dokumente automatisch nach 30 Tagen.
    // Dieser Eintrag ist der schriftliche Nachweis dafür (Art. 5 Abs. 1e DSGVO).
    const cutoff       = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const toBeDeleted  = await PageView.countDocuments({ timestamp: { $lt: cutoff } });

    if (toBeDeleted > 0) {
        await DeletionLog.create({
            sessionId:    "ttl_batch",
            reason:       "ttl_auto",
            deletedCount: toBeDeleted,
            note:         `Automatische TTL-Löschung: ${toBeDeleted} Rohdaten-Events älter als 30 Tage werden von MongoDB gelöscht. Aggregierte DailySummary bleibt 2 Jahre erhalten.`,
        });
    }

    return NextResponse.json({
        ok:            true,
        date:          dayStart.toISOString().split("T")[0],
        summarized:    !existing,
        ttlPending:    toBeDeleted,
    });
}
