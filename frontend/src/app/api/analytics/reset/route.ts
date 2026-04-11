// src/app/api/analytics/reset/route.ts
// Löscht alle Analytics-Rohdaten (PageView-Collection) auf Admin-Anforderung.
// Alles im Dashboard steht danach wieder auf 0.
//
//   POST /api/analytics/reset

import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import PageView from "@/lib/db/models/PageView";
import DeletionLog from "@/lib/db/models/DeletionLog";

export async function POST() {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();

    const before = await PageView.estimatedDocumentCount();
    const res    = await PageView.deleteMany({});

    // DSGVO-Audit: Ein Admin-initiierter Full-Wipe wird ebenfalls protokolliert.
    await DeletionLog.create({
        sessionId:    "admin_dashboard_reset",
        reason:       "admin_reset",
        deletedCount: res.deletedCount ?? 0,
        note:
            "Admin hat das Analytics-Dashboard vollständig zurückgesetzt. "
            + "Alle PageView-Rohdaten wurden gelöscht.",
    });

    return NextResponse.json({
        ok: true,
        before,
        deletedCount: res.deletedCount ?? 0,
        message:
            "Analytics zurückgesetzt. Das Dashboard zeigt wieder alle Werte auf 0.",
    });
}
