// src/app/api/documents/reset/route.ts
// Reset-Endpoint: löscht Kunden, Dokumente und setzt die fortlaufenden
// Nummern-Zähler zurück. Nur eingeloggt erreichbar.
//
// Aufruf (aus dem Admin-Bereich oder per Terminal):
//   POST /api/documents/reset                    -> alles zurücksetzen
//   POST /api/documents/reset?scope=counters     -> nur Zähler
//   POST /api/documents/reset?scope=docs         -> nur Dokumente + Zähler
//   POST /api/documents/reset?scope=customers    -> nur Kunden + Kunden-Zähler

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import Customer from "@/lib/db/models/Customer";
import DocModel from "@/lib/db/models/Document";
import Counter from "@/lib/db/models/Counter";

export async function POST(req: NextRequest) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const scope = req.nextUrl.searchParams.get("scope") || "all";

    await connectDB();

    const result: Record<string, number> = {};

    if (scope === "all" || scope === "customers") {
        const r = await Customer.deleteMany({});
        result.customers = r.deletedCount ?? 0;
    }

    if (scope === "all" || scope === "docs") {
        // Collection komplett droppen, damit auch alte Indexe (z.B. der frühere
        // globale unique-Index auf docNumber) entfernt werden. Beim nächsten
        // Zugriff legt Mongoose die Collection mit dem aktuellen Schema neu an.
        try {
            await DocModel.collection.drop();
        } catch {
            // Collection existiert evtl. noch nicht — kein Problem.
        }
        // Indexe aus dem aktuellen Schema synchronisieren (Per-Kunde-Unique).
        await DocModel.syncIndexes();
        result.documents = -1;  // dropped
    }

    // Zähler immer zurücksetzen, damit die Nummerierung wieder bei 1 startet.
    const c = await Counter.deleteMany({});
    result.counters = c.deletedCount ?? 0;

    return NextResponse.json({
        ok: true,
        scope,
        result,
        message:
            "Zurücksetzung erfolgreich. Die nächste angelegte Rechnung/Angebot/"
            + "Auftragsbestätigung/Kunde startet wieder bei Nummer 0001.",
    });
}
