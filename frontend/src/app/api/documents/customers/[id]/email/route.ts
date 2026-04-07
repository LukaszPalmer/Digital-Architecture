// src/app/api/documents/customers/[id]/email/route.ts
// Direkte E-Mail an einen Kunden senden (ohne Dokumentanhang).
// Professionelles Template mit Logo, Firmendaten und §19 UStG Hinweis.

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import { Resend } from "resend";
import Customer from "@/lib/db/models/Customer";
import { buildDirectEmailHtml } from "@/lib/email/template";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type Params = { params: Promise<{ id: string }> };

export async function POST(req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const { email, subject, message } = body as {
        email: string;
        subject: string;
        message: string;
    };

    if (!email) {
        return NextResponse.json({ error: "E-Mail-Adresse fehlt" }, { status: 400 });
    }
    if (!subject) {
        return NextResponse.json({ error: "Betreff fehlt" }, { status: 400 });
    }
    if (!message) {
        return NextResponse.json({ error: "Nachricht fehlt" }, { status: 400 });
    }

    await connectDB();
    const customer = await Customer.findById(id);
    if (!customer) return NextResponse.json({ error: "Kunde nicht gefunden" }, { status: 404 });

    const fromAddress = process.env.RESEND_FROM_ADDRESS || "kontakt@palmer-digital.de";

    const html = buildDirectEmailHtml(message);

    const { error } = await resend.emails.send({
        from: `Palmer Digital <${fromAddress}>`,
        to: [email],
        subject,
        html,
    });

    if (error) {
        return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden", details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, sentTo: email });
}
