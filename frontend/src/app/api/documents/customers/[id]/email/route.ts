// src/app/api/documents/customers/[id]/email/route.ts
// Direkte E-Mail an einen Kunden senden (ohne Dokumentanhang).

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import { Resend } from "resend";
import Customer from "@/lib/db/models/Customer";

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

    const messageHtml = message
        .split("\n")
        .map((line: string) => line.trim() === "" ? "<br>" : `<p style="margin:0 0 4px 0;">${line}</p>`)
        .join("");

    const { error } = await resend.emails.send({
        from: `Palmer Digital <${fromAddress}>`,
        to: [email],
        subject,
        html: `
            <div style="font-family: Arial, sans-serif; color: #1A202C; max-width: 600px;">
                ${messageHtml}
                <hr style="border: none; border-top: 1px solid #CBD5E0; margin: 24px 0;">
                <p style="font-size: 11px; color: #718096;">
                    Palmer Digital Architecture<br>
                    E-Mail: kontakt@palmer-digital.de<br>
                    Web: www.palmer-digital.de
                </p>
            </div>
        `,
    });

    if (error) {
        return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden", details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, sentTo: email });
}
