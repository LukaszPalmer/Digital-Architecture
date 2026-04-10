// src/lib/email/template.ts
// Professionelles E-Mail-Template für Palmer Digital Architecture.
// Design angelehnt an das Rechnungs-PDF — rechtskonform mit Impressum.
// Kleinunternehmerregelung §19 UStG — keine Umsatzsteuer.

// ── Firmendaten ────────────────────────────────────────────────────────────

const COMPANY = {
    name:     "Palmer Digital",
    owner:    "Lukasz Palmer",
    street:   "Lippestraße 1",
    zip:      "40221",
    city:     "Düsseldorf",
    phone:    "+49 123 4567890 ",
    email:    "kontakt@palmer-digital.de",
    web:      "www.palmer-digital.de",
    bank:     "Musterbank",
    iban:     "DE00 0000 0000 0000 0000 00",
    bic:      "XXXXXXXXXXXX",
    taxId:    "000/000/00000",
};

const LOGO_URL = "https://palmer-digital.de/media/logo.png";
const SITE_URL = "https://palmer-digital.de";

// ── Farben ─────────────────────────────────────────────────────────────────

const NAVY       = "#001F3F";
const TEXT_DARK  = "#1A202C";
const TEXT_GRAY  = "#4A5568";
const LIGHT_BG   = "#F7F8FA";
const BORDER     = "#CBD5E0";
const WHITE      = "#FFFFFF";

// ── Helpers ────────────────────────────────────────────────────────────────

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function textToHtml(text: string): string {
    return text
        .split("\n")
        .map(line => {
            const escaped = escapeHtml(line);
            return escaped.trim() === ""
                ? "<br>"
                : `<p style="margin:0 0 6px 0;font-size:14px;line-height:1.6;color:${TEXT_DARK};">${escaped}</p>`;
        })
        .join("\n");
}

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

// ── Dokument-Info Block (für Dokument-Emails) ──────────────────────────────

interface LineItem {
    position: number;
    title: string;
    description: string;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
}

interface DocumentInfo {
    docType: string;
    docNumber: string;
    customerName: string;
    customerCompany: string;
    issueDate: Date | string;
    total: number;
    items?: LineItem[];
    subtotal?: number;
}

function buildLineItemsBlock(items: LineItem[]): string {
    const rows = items.map((item, idx) => {
        const descHtml = item.description
            ? `<br><span style="font-family:Arial,sans-serif;font-size:11px;color:${TEXT_GRAY};line-height:1.5;">${escapeHtml(item.description).replace(/\n/g, "<br>")}</span>`
            : "";
        const rowBg = idx % 2 === 0 ? WHITE : LIGHT_BG;
        return `
            <tr>
                <td style="font-family:Arial,sans-serif;font-size:12px;color:${TEXT_GRAY};padding:10px 8px;border-bottom:1px solid ${BORDER};background-color:${rowBg};vertical-align:top;text-align:center;width:32px;">${item.position}</td>
                <td style="font-family:Arial,sans-serif;font-size:12px;color:${TEXT_DARK};padding:10px 8px;border-bottom:1px solid ${BORDER};background-color:${rowBg};vertical-align:top;">
                    <span style="font-weight:bold;">${escapeHtml(item.title)}</span>${descHtml}
                </td>
                <td style="font-family:Arial,sans-serif;font-size:12px;color:${TEXT_GRAY};padding:10px 8px;border-bottom:1px solid ${BORDER};background-color:${rowBg};vertical-align:top;text-align:right;white-space:nowrap;">${item.quantity}</td>
                <td style="font-family:Arial,sans-serif;font-size:12px;color:${TEXT_GRAY};padding:10px 8px;border-bottom:1px solid ${BORDER};background-color:${rowBg};vertical-align:top;text-align:right;white-space:nowrap;">${formatCurrency(item.unitPrice)}</td>
                <td style="font-family:Arial,sans-serif;font-size:12px;color:${NAVY};font-weight:bold;padding:10px 8px;border-bottom:1px solid ${BORDER};background-color:${rowBg};vertical-align:top;text-align:right;white-space:nowrap;">${formatCurrency(item.totalPrice)}</td>
            </tr>
        `;
    }).join("");

    return `
        <!-- Positionen -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
            <tr>
                <td style="padding-bottom:10px;">
                    <span style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${TEXT_GRAY};">
                        POSITIONEN
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BORDER};">
                        <thead>
                            <tr style="background-color:${NAVY};">
                                <th style="font-family:Arial,sans-serif;font-size:10px;color:${WHITE};font-weight:bold;text-transform:uppercase;letter-spacing:1px;padding:10px 8px;text-align:center;width:32px;">#</th>
                                <th style="font-family:Arial,sans-serif;font-size:10px;color:${WHITE};font-weight:bold;text-transform:uppercase;letter-spacing:1px;padding:10px 8px;text-align:left;">Beschreibung</th>
                                <th style="font-family:Arial,sans-serif;font-size:10px;color:${WHITE};font-weight:bold;text-transform:uppercase;letter-spacing:1px;padding:10px 8px;text-align:right;">Menge</th>
                                <th style="font-family:Arial,sans-serif;font-size:10px;color:${WHITE};font-weight:bold;text-transform:uppercase;letter-spacing:1px;padding:10px 8px;text-align:right;">Einzelpreis</th>
                                <th style="font-family:Arial,sans-serif;font-size:10px;color:${WHITE};font-weight:bold;text-transform:uppercase;letter-spacing:1px;padding:10px 8px;text-align:right;">Gesamt</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </td>
            </tr>
        </table>
    `;
}

function buildDocumentInfoBlock(doc: DocumentInfo): string {
    const typeLabels: Record<string, string> = {
        invoice: "Rechnung",
        quote: "Angebot",
        confirmation: "Auftragsbestätigung",
    };
    const typeLabel = typeLabels[doc.docType] || doc.docType;

    return `
        <!-- Document Info Card -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
            <tr>
                <td style="background-color:${LIGHT_BG};border:1px solid ${BORDER};border-radius:0;padding:20px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td style="padding-bottom:8px;border-bottom:1px solid ${BORDER};">
                                <span style="font-family:'Courier New',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${TEXT_GRAY};">
                                    DOKUMENTDETAILS
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top:12px;">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${TEXT_GRAY};padding:4px 0;">Typ</td>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${NAVY};font-weight:bold;text-align:right;padding:4px 0;">${typeLabel}</td>
                                    </tr>
                                    <tr>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${TEXT_GRAY};padding:4px 0;">Nummer</td>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${NAVY};font-weight:bold;text-align:right;padding:4px 0;">${escapeHtml(doc.docNumber)}</td>
                                    </tr>
                                    <tr>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${TEXT_GRAY};padding:4px 0;">Kunde</td>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${NAVY};font-weight:bold;text-align:right;padding:4px 0;">${escapeHtml(doc.customerCompany || doc.customerName)}</td>
                                    </tr>
                                    <tr>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${TEXT_GRAY};padding:4px 0;">Datum</td>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${NAVY};font-weight:bold;text-align:right;padding:4px 0;">${formatDate(doc.issueDate)}</td>
                                    </tr>
                                    <tr>
                                        <td style="font-family:Arial,sans-serif;font-size:13px;color:${TEXT_GRAY};padding:6px 0 0;">Gesamtbetrag</td>
                                        <td style="font-family:Arial,sans-serif;font-size:18px;color:${NAVY};font-weight:900;text-align:right;padding:6px 0 0;">${formatCurrency(doc.total)}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <!-- Kleinunternehmer Hinweis -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
            <tr>
                <td style="font-family:Arial,sans-serif;font-size:11px;color:${TEXT_GRAY};font-style:italic;padding:8px 12px;background-color:#FFFDF5;border-left:3px solid #E2B93B;">
                    Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet.
                </td>
            </tr>
        </table>
    `;
}

// ── Anhang-Info Block ──────────────────────────────────────────────────────

function buildAttachmentBlock(fileName: string): string {
    return `
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
            <tr>
                <td style="background-color:${LIGHT_BG};border:1px solid ${BORDER};padding:14px 16px;">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tr>
                            <td style="padding-right:10px;vertical-align:middle;">
                                <div style="width:32px;height:32px;background-color:#C53030;text-align:center;line-height:32px;">
                                    <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:white;">PDF</span>
                                </div>
                            </td>
                            <td style="vertical-align:middle;">
                                <span style="font-family:Arial,sans-serif;font-size:12px;font-weight:bold;color:${TEXT_DARK};">${escapeHtml(fileName)}</span>
                                <br>
                                <span style="font-family:Arial,sans-serif;font-size:11px;color:${TEXT_GRAY};">PDF-Dokument als Anhang beigefügt</span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    `;
}

// ── Haupt-Template ─────────────────────────────────────────────────────────

interface EmailTemplateOptions {
    messageHtml: string;
    documentInfo?: DocumentInfo;
    attachmentFileName?: string;
}

export function buildEmailHtml(options: EmailTemplateOptions): string {
    const { messageHtml, documentInfo, attachmentFileName } = options;

    return `
<!DOCTYPE html>
<html lang="de" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Palmer Digital Architecture</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F0F0F0;font-family:Arial,Helvetica,sans-serif;">

    <!-- Outer wrapper -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0F0F0;">
        <tr>
            <td align="center" style="padding:32px 16px;">

                <!-- Main container 600px -->
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:${WHITE};max-width:600px;width:100%;">

                    <!-- Navy Header Bar -->
                    <tr>
                        <td style="background-color:${NAVY};padding:0;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <!-- Left blue accent stripe -->
                                    <td width="6" style="background-color:#003366;"></td>
                                    <td style="padding:24px 30px;">
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td style="vertical-align:middle;">
                                                    <!-- Logo -->
                                                    <img src="${LOGO_URL}" alt="Palmer Digital" width="120" height="45"
                                                         style="display:block;border:0;outline:none;max-width:120px;height:auto;" />
                                                </td>
                                                <td style="text-align:right;vertical-align:middle;">
                                                    <span style="font-family:'Courier New',monospace;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.5);">
                                                        GESCHÄFTSKORRESPONDENZ
                                                    </span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Sender Info Bar -->
                    <tr>
                        <td style="background-color:${LIGHT_BG};padding:10px 36px;border-bottom:1px solid ${BORDER};">
                            <span style="font-family:'Courier New',monospace;font-size:10px;color:${TEXT_GRAY};letter-spacing:0.5px;">
                                ${escapeHtml(COMPANY.name)} — ${escapeHtml(COMPANY.owner)} — ${escapeHtml(COMPANY.street)} — ${COMPANY.zip} ${escapeHtml(COMPANY.city)}
                            </span>
                        </td>
                    </tr>

                    <!-- Main Content Area -->
                    <tr>
                        <td style="padding:32px 36px 24px 36px;">

                            <!-- Message Content -->
                            ${messageHtml}

                        </td>
                    </tr>

                    ${documentInfo ? `
                    <!-- Document Info Section -->
                    <tr>
                        <td style="padding:0 36px 8px 36px;">
                            ${buildDocumentInfoBlock(documentInfo)}
                        </td>
                    </tr>
                    ` : ""}

                    ${documentInfo && documentInfo.items && documentInfo.items.length > 0 ? `
                    <!-- Line Items Section -->
                    <tr>
                        <td style="padding:0 36px 8px 36px;">
                            ${buildLineItemsBlock(documentInfo.items)}
                        </td>
                    </tr>
                    ` : ""}

                    ${attachmentFileName ? `
                    <!-- Attachment Section -->
                    <tr>
                        <td style="padding:0 36px 24px 36px;">
                            ${buildAttachmentBlock(attachmentFileName)}
                        </td>
                    </tr>
                    ` : ""}

                    <!-- Divider -->
                    <tr>
                        <td style="padding:0 36px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="border-top:2px solid ${NAVY};"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer: Company Information (4 columns) -->
                    <tr>
                        <td style="padding:20px 36px 16px 36px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <!-- Col 1: Firma -->
                                    <td width="25%" style="vertical-align:top;padding-right:8px;">
                                        <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${TEXT_DARK};display:block;margin-bottom:4px;">
                                            ${escapeHtml(COMPANY.name)}
                                        </span>
                                        <span style="font-family:Arial,sans-serif;font-size:9px;color:${TEXT_GRAY};line-height:1.5;">
                                            ${escapeHtml(COMPANY.street)}<br>
                                            ${COMPANY.zip} ${escapeHtml(COMPANY.city)}
                                        </span>
                                    </td>

                                    <!-- Col 2: Kontakt -->
                                    <td width="25%" style="vertical-align:top;padding-right:8px;">
                                        <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${TEXT_DARK};display:block;margin-bottom:4px;">
                                            Kontakt
                                        </span>
                                        <span style="font-family:Arial,sans-serif;font-size:9px;color:${TEXT_GRAY};line-height:1.5;">
                                            Tel.: ${escapeHtml(COMPANY.phone)}<br>
                                            ${escapeHtml(COMPANY.email)}<br>
                                            ${escapeHtml(COMPANY.web)}
                                        </span>
                                    </td>

                                    <!-- Col 3: Bankverbindung -->
                                    <td width="25%" style="vertical-align:top;padding-right:8px;">
                                        <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${TEXT_DARK};display:block;margin-bottom:4px;">
                                            Bankverbindung
                                        </span>
                                        <span style="font-family:Arial,sans-serif;font-size:9px;color:${TEXT_GRAY};line-height:1.5;">
                                            ${escapeHtml(COMPANY.bank)}<br>
                                            IBAN: ${escapeHtml(COMPANY.iban)}<br>
                                            BIC: ${escapeHtml(COMPANY.bic)}
                                        </span>
                                    </td>

                                    <!-- Col 4: Geschäftsführer -->
                                    <td width="25%" style="vertical-align:top;">
                                        <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:bold;color:${TEXT_DARK};display:block;margin-bottom:4px;">
                                            Geschäftsführer
                                        </span>
                                        <span style="font-family:Arial,sans-serif;font-size:9px;color:${TEXT_GRAY};line-height:1.5;">
                                            ${escapeHtml(COMPANY.owner)}<br>
                                            St.-Nr.: ${escapeHtml(COMPANY.taxId)}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Legal Note -->
                    <tr>
                        <td style="padding:0 36px 12px 36px;">
                            <span style="font-family:Arial,sans-serif;font-size:9px;color:${TEXT_GRAY};font-style:italic;">
                                Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet.
                            </span>
                        </td>
                    </tr>

                    <!-- Bottom Navy Bar -->
                    <tr>
                        <td style="background-color:${NAVY};padding:12px 36px;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="font-family:'Courier New',monospace;font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:1px;">
                                        &copy; ${new Date().getFullYear()} ${escapeHtml(COMPANY.name)}
                                    </td>
                                    <td style="text-align:right;">
                                        <a href="${SITE_URL}" style="font-family:'Courier New',monospace;font-size:9px;color:rgba(255,255,255,0.5);text-decoration:none;letter-spacing:1px;">
                                            ${escapeHtml(COMPANY.web)}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
                <!-- /Main container -->

            </td>
        </tr>
    </table>

</body>
</html>
    `.trim();
}

// ── Convenience: Document Email ────────────────────────────────────────────

export function buildDocumentEmailHtml(
    message: string,
    doc: DocumentInfo,
    attachmentFileName?: string,
): string {
    return buildEmailHtml({
        messageHtml: textToHtml(message),
        documentInfo: doc,
        attachmentFileName,
    });
}

export type { LineItem as EmailLineItem, DocumentInfo as EmailDocumentInfo };

// ── Convenience: Direct Customer Email ─────────────────────────────────────

export function buildDirectEmailHtml(message: string): string {
    return buildEmailHtml({
        messageHtml: textToHtml(message),
    });
}
