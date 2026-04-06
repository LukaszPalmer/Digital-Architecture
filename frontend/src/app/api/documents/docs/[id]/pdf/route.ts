// src/app/api/documents/docs/[id]/pdf/route.ts
// PDF-Download für ein Dokument.

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db/mongodb";
import DocModel, { IDocument, DOC_TYPE_LABELS } from "@/lib/db/models/Document";
import { generatePDF } from "@/lib/pdf/generator";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
    const session = await auth();
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    await connectDB();
    const doc = await DocModel.findById(id) as IDocument | null;
    if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const pdfBuffer = await generatePDF(doc);
    const fileName = `${DOC_TYPE_LABELS[doc.docType]}_${doc.docNumber}.pdf`
        .replace(/\s+/g, "_");

    return new NextResponse(new Uint8Array(pdfBuffer), {
        status: 200,
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${fileName}"`,
            "Content-Length": String(pdfBuffer.length),
        },
    });
}
