// src/app/api/documents/docs/[id]/send/route.ts
// Dokument per E-Mail versenden (PDF als Anhang).

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import { Resend } from "resend";
import DocModel, { IDocument, DOC_TYPE_LABELS } from "@/lib/db/models/Document";
import { generatePDF } from "@/lib/pdf/generator";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type Params = { params: Promise<{ id: string }> };

export async function POST(req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const recipientEmail = body.email as string;

    if (!recipientEmail) {
        return NextResponse.json({ error: "E-Mail-Adresse fehlt" }, { status: 400 });
    }

    await connectDB();
    const doc = await DocModel.findById(id) as IDocument | null;
    if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const pdfBuffer = await generatePDF(doc);
    const typeLabel = DOC_TYPE_LABELS[doc.docType];
    const fileName = `${typeLabel}_${doc.docNumber}.pdf`.replace(/\s+/g, "_");

    const fromAddress = process.env.RESEND_FROM_ADDRESS || "kontakt@palmer-digital.de";

    const { error } = await resend.emails.send({
        from: `Palmer Digital <${fromAddress}>`,
        to: [recipientEmail],
        subject: `${typeLabel} ${doc.docNumber} — Palmer Digital Architecture`,
        html: `
            <div style="font-family: Arial, sans-serif; color: #1A202C;">
                <h2 style="color: #001F3F;">${typeLabel} ${doc.docNumber}</h2>
                <p>Sehr geehrte/r ${doc.customerName || "Kunde/Kundin"},</p>
                <p>im Anhang finden Sie Ihre ${typeLabel} Nr. ${doc.docNumber}.</p>
                <p>Bei Fragen stehen wir Ihnen gerne zur Verfügung.</p>
                <br>
                <p>Freundliche Grüße<br><strong>Lukasz Palmer</strong><br>Palmer Digital Architecture</p>
                <hr style="border: none; border-top: 1px solid #CBD5E0; margin: 20px 0;">
                <p style="font-size: 11px; color: #718096;">
                    Palmer Digital Architecture<br>
                    E-Mail: kontakt@palmer-digital.de<br>
                    Web: www.palmer-digital.de
                </p>
            </div>
        `,
        attachments: [
            {
                filename: fileName,
                content: pdfBuffer,
            },
        ],
    });

    if (error) {
        return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden", details: error }, { status: 500 });
    }

    // Status und sentAt/sentTo aktualisieren
    await DocModel.findByIdAndUpdate(id, {
        status: "sent",
        sentAt: new Date(),
        sentTo: recipientEmail,
    });

    return NextResponse.json({ success: true, sentTo: recipientEmail });
}
