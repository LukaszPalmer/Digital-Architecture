// src/app/api/documents/docs/[id]/route.ts
// Einzelnes Dokument — GET, PUT, DELETE.

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import DocModel from "@/lib/db/models/Document";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await connectDB();
    const doc = await DocModel.findById(id).lean();
    if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(doc);
}

export async function PUT(req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await connectDB();
    const body = await req.json();

    // Positionen neu berechnen
    if (body.items) {
        body.items = body.items.map((item: { unitPrice: number; quantity: number }, i: number) => ({
            ...item,
            position: i + 1,
            totalPrice: item.unitPrice * item.quantity,
        }));
        body.subtotal = body.items.reduce((sum: number, item: { totalPrice: number }) => sum + item.totalPrice, 0);
        body.taxAmount = 0;
        body.total = body.subtotal;
    }

    const doc = await DocModel.findByIdAndUpdate(id, body, { new: true }).lean();
    if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(doc);
}

export async function DELETE(_req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await connectDB();
    const doc = await DocModel.findByIdAndDelete(id);
    if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json({ success: true });
}
