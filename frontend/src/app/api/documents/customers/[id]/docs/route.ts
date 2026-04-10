// src/app/api/documents/customers/[id]/docs/route.ts
// Alle Dokumente eines Kunden abrufen.

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

    const docs = await DocModel.find({ customerId: id, isTemplate: false })
        .sort({ createdAt: -1 })
        .lean();

    return NextResponse.json(docs);
}
