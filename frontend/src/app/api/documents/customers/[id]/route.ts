// src/app/api/documents/customers/[id]/route.ts
// Einzelner Kunde — GET, PUT, DELETE.

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import Customer from "@/lib/db/models/Customer";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await connectDB();
    const customer = await Customer.findById(id).lean();
    if (!customer) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(customer);
}

export async function PUT(req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await connectDB();
    const body = await req.json();
    const customer = await Customer.findByIdAndUpdate(id, body, { new: true }).lean();
    if (!customer) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json(customer);
}

export async function DELETE(_req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await connectDB();
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) return NextResponse.json({ error: "Not found" }, { status: 404 });

    return NextResponse.json({ success: true });
}
