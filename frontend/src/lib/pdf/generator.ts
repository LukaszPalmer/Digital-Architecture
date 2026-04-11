// src/lib/pdf/generator.ts
// PDF-Generator für Rechnungen, Angebote, Auftragsbestätigungen.
// Layout orientiert sich am professionellen deutschen Rechnungsdesign.
// Kleinunternehmerregelung §19 UStG — keine Umsatzsteuer.

import PDFDocument from "pdfkit";
import path from "path";
import { IDocument, DOC_TYPE_LABELS } from "@/lib/db/models/Document";

// ── Farben ──────────────────────────────────────────────────────────────────

const NAVY      = "#001F3F";
const LIGHT_BG  = "#EDF2F7";
const WHITE     = "#FFFFFF";
const TEXT_DARK  = "#1A202C";
const TEXT_GRAY  = "#4A5568";
const BORDER     = "#CBD5E0";

// ── Firmen-Daten (Palmer Digital) ───────────────────────────────────────────

const COMPANY = {
    name:     "Palmer Digital",
    owner:    "Lukasz Palmer",
    street:   "Lippestraße 1",          // TODO: Echte Adresse eintragen (bereits echt)
    zip:      "40221",
    city:     "Düsseldorf",
    phone:    "+49 123 4567890",
    email:    "kontakt@palmer-digital.de",
    web:      "www.palmer-digital.de",
    bank:     "Musterbank",
    iban:     "DE00 0000 0000 0000 0000 00",  // TODO: Echte IBAN eintragen
    bic:      "XXXXXXXXXXXX",
    taxId:    "000/000/00000",                 // TODO: Echte Steuernummer eintragen
};

// ── Helpers ─────────────────────────────────────────────────────────────────

function formatCurrency(cents: number): string {
    return (cents / 100).toLocaleString("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) + " €";
}

function formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
}

// ── PDF Generator ───────────────────────────────────────────────────────────

export async function generatePDF(doc: IDocument): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const pdf = new PDFDocument({
            size: "A4",
            // bottom: 0 verhindert, dass pdfkit beim Footer automatisch eine
            // neue Seite anlegt. Wir positionieren den Footer selbst absolut.
            margins: { top: 40, bottom: 0, left: 50, right: 50 },
            info: {
                Title: `${DOC_TYPE_LABELS[doc.docType]} ${doc.docNumber}`,
                Author: COMPANY.name,
            },
        });

        const chunks: Buffer[] = [];
        pdf.on("data", (chunk: Buffer) => chunks.push(chunk));
        pdf.on("end", () => resolve(Buffer.concat(chunks)));
        pdf.on("error", reject);

        const pageWidth  = 595.28;  // A4
        const leftMargin = 50;
        const rightMargin = 50;
        const contentWidth = pageWidth - leftMargin - rightMargin;

        // ── Linker blauer Streifen ──────────────────────────────────────
        pdf.rect(0, 0, 8, 841.89).fill(NAVY);

        // ── Header: Titel + Logo ────────────────────────────────────────
        pdf.font("Helvetica-Bold").fontSize(28).fillColor(NAVY);
        pdf.text(DOC_TYPE_LABELS[doc.docType].toUpperCase(), leftMargin, 45);

        // Logo
        try {
            const logoPath = path.join(process.cwd(), "public", "media", "logo.png");
            pdf.image(logoPath, pageWidth - rightMargin - 100, 35, { width: 100 });
        } catch {
            // Logo nicht gefunden — Fallback Text
            pdf.font("Helvetica-Bold").fontSize(10).fillColor(NAVY);
            pdf.text("PALMER DIGITAL", pageWidth - rightMargin - 100, 45, { width: 100, align: "right" });
        }

        // ── Absender-Zeile (klein) ──────────────────────────────────────
        const senderY = 90;
        pdf.font("Helvetica").fontSize(7).fillColor(TEXT_GRAY);
        pdf.text(
            `${COMPANY.name} — ${COMPANY.owner} — ${COMPANY.street} — ${COMPANY.zip} ${COMPANY.city}`,
            leftMargin, senderY, { underline: true }
        );

        // ── Empfänger-Adresse ───────────────────────────────────────────
        const recipientY = 110;
        pdf.font("Helvetica-Bold").fontSize(10).fillColor(TEXT_DARK);
        if (doc.customerCompany) {
            pdf.text(doc.customerCompany, leftMargin, recipientY);
        }
        pdf.font("Helvetica").fontSize(10);
        pdf.text(doc.customerName, leftMargin, doc.customerCompany ? recipientY + 14 : recipientY);
        pdf.text(doc.customerStreet);
        pdf.text(`${doc.customerZip} ${doc.customerCity}`);

        // ── Rechts: Metadaten ───────────────────────────────────────────
        const metaX = 370;
        const metaLabelX = metaX;
        const metaValueX = 480;
        let metaY = 110;
        const metaLineH = 16;

        const typeLabel = doc.docType === "invoice" ? "Rechnung"
            : doc.docType === "quote" ? "Angebot" : "Bestätigung";

        const metaFields: [string, string][] = [
            [`${typeLabel} Nummer:`, doc.docNumber],
            [`${typeLabel}sdatum:`, formatDate(doc.issueDate)],
        ];

        if (doc.docType === "invoice" && doc.deliveryDate) {
            metaFields.push(["Lieferdatum:", formatDate(doc.deliveryDate)]);
        }
        if (doc.docType === "quote" && doc.validUntil) {
            metaFields.push(["Gültig bis:", formatDate(doc.validUntil)]);
        }
        if (doc.customerNumber) {
            metaFields.push(["Kundennummer:", doc.customerNumber]);
        }

        metaFields.forEach(([label, value]) => {
            pdf.font("Helvetica-Bold").fontSize(8).fillColor(TEXT_GRAY);
            pdf.text(label, metaLabelX, metaY, { width: 100, align: "right" });
            pdf.font("Helvetica").fontSize(8).fillColor(TEXT_DARK);
            pdf.text(value, metaValueX, metaY, { width: 70, align: "right" });
            metaY += metaLineH;
        });

        // ── Betreff-Zeile ───────────────────────────────────────────────
        const subjectY = 195;
        pdf.font("Helvetica-Bold").fontSize(11).fillColor(TEXT_DARK);
        pdf.text(`${DOC_TYPE_LABELS[doc.docType]} Nummer ${doc.docNumber}`, leftMargin, subjectY);

        // Datum rechts
        pdf.font("Helvetica").fontSize(9).fillColor(TEXT_GRAY);
        pdf.text(formatDate(doc.issueDate), metaValueX, subjectY, { width: 70, align: "right" });

        // ── Begrüßung / Intro ───────────────────────────────────────────
        const introY = 220;
        pdf.font("Helvetica").fontSize(9).fillColor(TEXT_DARK);

        const greeting = doc.customerName ? `Sehr geehrte/r ${doc.customerName},` : "Sehr geehrte Damen und Herren,";
        pdf.text(greeting, leftMargin, introY);

        const introText = doc.introText ||
            `Vielen Dank für Ihr Vertrauen in ${COMPANY.name}. Wir stellen Ihnen hiermit folgende Leistungen in Rechnung:`;
        pdf.text(introText, leftMargin, introY + 18, { width: contentWidth });

        // ── Tabelle: Header ─────────────────────────────────────────────
        const tableY = introY + 55;
        const colX = {
            pos:   leftMargin,
            desc:  leftMargin + 30,
            price: 350,
            qty:   420,
            total: 480,
        };

        // Header-Hintergrund
        pdf.rect(leftMargin, tableY, contentWidth, 22).fill(NAVY);

        pdf.font("Helvetica-Bold").fontSize(8).fillColor(WHITE);
        pdf.text("#",            colX.pos + 5,   tableY + 6);
        pdf.text("Beschreibung", colX.desc + 5,  tableY + 6);
        pdf.text("Einzelpreis",  colX.price,     tableY + 6, { width: 65, align: "right" });
        pdf.text("Anzahl",       colX.qty,       tableY + 6, { width: 45, align: "center" });
        pdf.text("Gesamtpreis",  colX.total,     tableY + 6, { width: 65, align: "right" });

        // ── Tabelle: Zeilen ─────────────────────────────────────────────
        let rowY = tableY + 22;
        const rowHeight = 36;

        doc.items.forEach((item, i) => {
            // Abwechselnde Farbe
            if (i % 2 === 0) {
                pdf.rect(leftMargin, rowY, contentWidth, rowHeight).fill(LIGHT_BG);
            } else {
                pdf.rect(leftMargin, rowY, contentWidth, rowHeight).fill(WHITE);
            }

            // Trennlinie
            pdf.moveTo(leftMargin, rowY + rowHeight)
               .lineTo(leftMargin + contentWidth, rowY + rowHeight)
               .strokeColor(BORDER).lineWidth(0.5).stroke();

            const textY = rowY + 6;

            // Position
            pdf.font("Helvetica").fontSize(8).fillColor(TEXT_GRAY);
            pdf.text(String(item.position), colX.pos + 5, textY);

            // Titel (bold) + Beschreibung
            pdf.font("Helvetica-Bold").fontSize(8.5).fillColor(TEXT_DARK);
            pdf.text(item.title, colX.desc + 5, textY, { width: 190 });
            if (item.description) {
                pdf.font("Helvetica").fontSize(7.5).fillColor(TEXT_GRAY);
                pdf.text(item.description, colX.desc + 5, textY + 12, { width: 190 });
            }

            // Preise
            pdf.font("Helvetica").fontSize(8.5).fillColor(TEXT_DARK);
            pdf.text(formatCurrency(item.unitPrice), colX.price, textY, { width: 65, align: "right" });
            pdf.text(String(item.quantity),           colX.qty,   textY, { width: 45, align: "center" });
            pdf.font("Helvetica-Bold");
            pdf.text(formatCurrency(item.totalPrice), colX.total, textY, { width: 65, align: "right" });

            rowY += rowHeight;
        });

        // ── Summen-Block ────────────────────────────────────────────────
        const sumY = rowY + 15;
        const sumLabelX = 350;
        const sumValueX = 480;
        const sumW = 65;

        // Hintergrund für Summenblock
        pdf.rect(sumLabelX - 10, sumY - 5, contentWidth - (sumLabelX - leftMargin) + 10, 60)
           .fill(LIGHT_BG);

        pdf.font("Helvetica").fontSize(9).fillColor(TEXT_DARK);
        pdf.text("Summe der Nettobeträge", sumLabelX, sumY, { width: 120, align: "right" });
        pdf.text(formatCurrency(doc.subtotal), sumValueX, sumY, { width: sumW, align: "right" });

        pdf.text("Zzgl. 0 % Umsatzsteuer", sumLabelX, sumY + 16, { width: 120, align: "right" });
        pdf.text("0,00 €", sumValueX, sumY + 16, { width: sumW, align: "right" });

        // Gesamtbetrag (bold, mit Linie)
        pdf.moveTo(sumLabelX - 10, sumY + 34)
           .lineTo(leftMargin + contentWidth, sumY + 34)
           .strokeColor(NAVY).lineWidth(1).stroke();

        pdf.font("Helvetica-Bold").fontSize(10).fillColor(NAVY);
        pdf.text("Gesamtbetrag", sumLabelX, sumY + 40, { width: 120, align: "right" });
        pdf.text(formatCurrency(doc.total), sumValueX, sumY + 40, { width: sumW, align: "right" });

        // ── §19 UStG Hinweis ────────────────────────────────────────────
        const taxY = sumY + 70;
        pdf.font("Helvetica-Bold").fontSize(9).fillColor(TEXT_DARK);
        pdf.text(
            "Gemäß § 19 UStG nach Kleinunternehmerregelung wird keine Umsatzsteuer berechnet.",
            leftMargin, taxY, { width: contentWidth }
        );

        // ── Zahlungsbedingungen ─────────────────────────────────────────
        const payY = taxY + 25;
        pdf.font("Helvetica").fontSize(8.5).fillColor(TEXT_GRAY);
        pdf.text(doc.paymentTerms || "", leftMargin, payY, { width: contentWidth });

        // ── Outro / Grüße ───────────────────────────────────────────────
        const outroY = payY + 35;
        pdf.font("Helvetica").fontSize(9).fillColor(TEXT_DARK);
        pdf.text(doc.outroText || "Freundliche Grüße", leftMargin, outroY);

        // Unterschrift-Bereich
        pdf.font("Helvetica").fontSize(9).fillColor(TEXT_DARK);
        pdf.text(COMPANY.owner, leftMargin, outroY + 35);

        // ── Footer ──────────────────────────────────────────────────────
        // Absolute Positionierung, damit alle 4 Spalten garantiert auf Seite 1
        // nebeneinander stehen. Mit bottom-margin:0 kann pdfkit nicht mehr
        // automatisch umbrechen.
        const footerY = 760;

        // Trennlinie
        pdf.moveTo(leftMargin, footerY)
           .lineTo(pageWidth - rightMargin, footerY)
           .strokeColor(NAVY).lineWidth(1.5).stroke();

        const footerColW = contentWidth / 4;
        const fs = 6;               // Footer-Fontgröße
        const lineH = 9;            // Zeilenabstand
        const lineOpts = { width: footerColW, lineBreak: false, height: 10 } as const;

        const drawCol = (x: number, title: string, lines: string[]) => {
            pdf.font("Helvetica-Bold").fontSize(fs).fillColor(TEXT_DARK);
            pdf.text(title, x, footerY + 8, lineOpts);
            pdf.font("Helvetica").fontSize(fs).fillColor(TEXT_GRAY);
            lines.forEach((l, i) => {
                pdf.text(l, x, footerY + 8 + lineH * (i + 1), lineOpts);
            });
        };

        // Spalte 1: Firma & Adresse
        drawCol(leftMargin, COMPANY.name, [
            `Inh. ${COMPANY.owner}`,
            COMPANY.street,
            `${COMPANY.zip} ${COMPANY.city}`,
        ]);

        // Spalte 2: Kontakt
        drawCol(leftMargin + footerColW, "Kontakt", [
            `Tel.: ${COMPANY.phone}`,
            `E-Mail: ${COMPANY.email}`,
            `Web: ${COMPANY.web}`,
        ]);

        // Spalte 3: Geschäftskonto
        drawCol(leftMargin + footerColW * 2, "Geschäftskonto", [
            COMPANY.bank,
            `IBAN: ${COMPANY.iban}`,
            `BIC: ${COMPANY.bic}`,
        ]);

        // Spalte 4: Steuerliches
        drawCol(leftMargin + footerColW * 3, "Steuerliches", [
            `St.-Nr.: ${COMPANY.taxId}`,
            "Kleinunternehmer",
            "gem. § 19 UStG",
        ]);

        pdf.end();
    });
}
