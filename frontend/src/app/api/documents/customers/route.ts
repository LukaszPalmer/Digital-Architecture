// src/app/api/documents/customers/route.ts
// Kunden CRUD — GET (Liste) & POST (erstellen).

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import Customer from "@/lib/db/models/Customer";
import { getNextNumber } from "@/lib/db/models/Counter";

export async function GET() {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const customers = await Customer.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(customers);
}

export async function POST(req: NextRequest) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const body = await req.json();

    const customerNumber = await getNextNumber("customer", "KD-");
    const customer = await Customer.create({ ...body, customerNumber });

    return NextResponse.json(customer, { status: 201 });
}
