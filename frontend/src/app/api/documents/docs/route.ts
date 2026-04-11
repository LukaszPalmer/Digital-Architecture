// src/app/api/documents/docs/route.ts
// Dokumente CRUD — GET (Liste mit Filter) & POST (erstellen).

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import DocModel, { DocType, DOC_TYPE_PREFIX } from "@/lib/db/models/Document";
import { getNextNumber } from "@/lib/db/models/Counter";

export async function GET(req: NextRequest) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { searchParams } = req.nextUrl;
    const docType    = searchParams.get("type") as DocType | null;
    const status     = searchParams.get("status");
    const isTemplate = searchParams.get("template") === "true";

    await connectDB();

    const filter: Record<string, unknown> = { isTemplate };
    if (docType) filter.docType = docType;
    if (status)  filter.status = status;

    const docs = await DocModel.find(filter).sort({ createdAt: -1 }).lean();
    return NextResponse.json(docs);
}

export async function POST(req: NextRequest) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const body = await req.json();

    const docType = body.docType as DocType;
    if (!docType || !DOC_TYPE_PREFIX[docType]) {
        return NextResponse.json({ error: "Invalid docType" }, { status: 400 });
    }

    // Fortlaufende Nummer generieren (nicht für Templates).
    // Pro Kunde eigener Zähler → jede RE/AN/AB eines Kunden startet bei 0001.
    let docNumber = body.docNumber;
    if (!body.isTemplate && !docNumber) {
        docNumber = await getNextNumber(
            docType,
            DOC_TYPE_PREFIX[docType],
            new Date().getFullYear(),
            body.customerNumber || body.customerId,
        );
    }
    if (body.isTemplate && !docNumber) {
        docNumber = `TPL-${Date.now()}`;
    }

    // Positionen berechnen
    const items = (body.items || []).map((item: { unitPrice: number; quantity: number }, i: number) => ({
        ...item,
        position: i + 1,
        totalPrice: item.unitPrice * item.quantity,
    }));
    const subtotal = items.reduce((sum: number, item: { totalPrice: number }) => sum + item.totalPrice, 0);

    const doc = await DocModel.create({
        ...body,
        docNumber,
        items,
        subtotal,
        taxRate: 0,
        taxAmount: 0,
        total: subtotal,
    });

    return NextResponse.json(doc, { status: 201 });
}
