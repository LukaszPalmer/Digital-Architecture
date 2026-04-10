// src/app/api/documents/docs/[id]/send/route.ts
// Dokument per E-Mail versenden (PDF als Anhang).
// Professionelles Template mit Logo, Firmendaten und §19 UStG Hinweis.

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import { Resend } from "resend";
import DocModel, { IDocument, DOC_TYPE_LABELS } from "@/lib/db/models/Document";
import { generatePDF } from "@/lib/pdf/generator";
import { buildDocumentEmailHtml } from "@/lib/email/template";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type Params = { params: Promise<{ id: string }> };

export async function POST(req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const body = await req.json();
    const recipientEmail = body.email as string;
    const customSubject = body.subject as string | undefined;
    const customMessage = body.message as string | undefined;

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
    const subject = customSubject || `${typeLabel} ${doc.docNumber} — Palmer Digital Architecture`;

    const messageText = customMessage
        || `Sehr geehrte/r ${doc.customerName || "Kunde/Kundin"},\n\nim Anhang finden Sie Ihre ${typeLabel} Nr. ${doc.docNumber}.\n\nBei Fragen stehen wir Ihnen gerne zur Verfügung.\n\nFreundliche Grüße\nLukasz Palmer\nPalmer Digital Architecture`;

    const html = buildDocumentEmailHtml(
        messageText,
        {
            docType: doc.docType,
            docNumber: doc.docNumber,
            customerName: doc.customerName,
            customerCompany: doc.customerCompany,
            issueDate: doc.issueDate,
            total: doc.total,
            subtotal: doc.subtotal,
            items: doc.items.map(i => ({
                position: i.position,
                title: i.title,
                description: i.description,
                unitPrice: i.unitPrice,
                quantity: i.quantity,
                totalPrice: i.totalPrice,
            })),
        },
        fileName,
    );

    const { error } = await resend.emails.send({
        from: `Palmer Digital <${fromAddress}>`,
        to: [recipientEmail],
        subject,
        html,
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

    await DocModel.findByIdAndUpdate(id, {
        status: "sent",
        sentAt: new Date(),
        sentTo: recipientEmail,
    });

    return NextResponse.json({ success: true, sentTo: recipientEmail });
}
