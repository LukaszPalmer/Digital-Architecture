"use client";

// Professionelle E-Mail-Vorschau — spiegelt das tatsächliche E-Mail-Template wider.
// Zeigt Logo, Firmendaten, Dokumentdetails und rechtlichen Footer.

import { Box, Typography, Divider } from "@mui/material";

const NAVY = "#001F3F";
const TEXT_GRAY = "#4A5568";
const LIGHT_BG = "#F7F8FA";
const BORDER = "#CBD5E0";

const COMPANY = {
    name: "Palmer Digital Architecture",
    owner: "Lukasz Palmer",
    street: "Musterstraße 1",
    zip: "12345",
    city: "Berlin",
    phone: "+49 123 4567890",
    email: "kontakt@palmer-digital.de",
    web: "www.palmer-digital.de",
    bank: "Musterbank",
    iban: "DE00 0000 0000 0000 0000 00",
    bic: "XXXXXXXXXXXX",
    taxId: "000/000/00000",
};

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
    issueDate: string;
    total: number;
    items?: LineItem[];
    subtotal?: number;
}

interface Props {
    email: string;
    subject: string;
    message: string;
    documentInfo?: DocumentInfo;
    attachmentFileName?: string;
}

const TYPE_LABELS: Record<string, string> = {
    invoice: "Rechnung",
    quote: "Angebot",
    confirmation: "Auftragsbestätigung",
};

function formatDate(dateStr: string): string {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("de-DE");
}

export function EmailPreview({ email, subject, message, documentInfo, attachmentFileName }: Props) {
    return (
        <Box sx={{ bgcolor: "#F0F0F0", p: 2 }}>
            {/* Meta info */}
            <Box sx={{ mb: 1.5, px: 1 }}>
                <Typography sx={{ fontSize: "10px", color: "rgba(0,0,0,0.4)", fontFamily: "monospace", mb: 0.3 }}>
                    Von: Palmer Digital &lt;kontakt@palmer-digital.de&gt;
                </Typography>
                <Typography sx={{ fontSize: "10px", color: "rgba(0,0,0,0.4)", fontFamily: "monospace", mb: 0.3 }}>
                    An: {email || "—"}
                </Typography>
                <Typography sx={{ fontSize: "10px", color: "rgba(0,0,0,0.4)", fontFamily: "monospace" }}>
                    Betreff: {subject || "—"}
                </Typography>
            </Box>

            {/* Email body */}
            <Box sx={{ bgcolor: "#fff", maxWidth: 520, mx: "auto" }}>

                {/* Navy Header */}
                <Box sx={{
                    bgcolor: NAVY, px: 2.5, py: 2,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    borderLeft: "4px solid #003366",
                }}>
                    <Box
                        component="img"
                        src="/media/logo.png"
                        alt="Palmer Digital"
                        sx={{ height: 28, width: "auto", display: "block" }}
                    />
                    <Typography sx={{
                        fontFamily: "monospace", fontSize: "7px",
                        letterSpacing: "2px", textTransform: "uppercase",
                        color: "rgba(255,255,255,0.4)",
                    }}>
                        GESCHÄFTSKORRESPONDENZ
                    </Typography>
                </Box>

                {/* Sender bar */}
                <Box sx={{
                    bgcolor: LIGHT_BG, px: 2.5, py: 0.8,
                    borderBottom: `1px solid ${BORDER}`,
                }}>
                    <Typography sx={{
                        fontFamily: "monospace", fontSize: "8px",
                        color: TEXT_GRAY, letterSpacing: "0.3px",
                    }}>
                        {COMPANY.name} — {COMPANY.owner} — {COMPANY.street} — {COMPANY.zip} {COMPANY.city}
                    </Typography>
                </Box>

                {/* Message content */}
                <Box sx={{ px: 2.5, py: 2.5 }}>
                    <Typography sx={{
                        fontFamily: "Arial, sans-serif", fontSize: "12px",
                        whiteSpace: "pre-wrap", lineHeight: 1.7,
                        color: "#1A202C",
                    }}>
                        {message}
                    </Typography>
                </Box>

                {/* Document Info (if applicable) */}
                {documentInfo && (
                    <Box sx={{ px: 2.5, pb: 1 }}>
                        <Box sx={{
                            bgcolor: LIGHT_BG, border: `1px solid ${BORDER}`, p: 1.5,
                        }}>
                            <Typography sx={{
                                fontFamily: "monospace", fontSize: "8px",
                                letterSpacing: "1.5px", textTransform: "uppercase",
                                color: TEXT_GRAY, mb: 1,
                                pb: 0.8, borderBottom: `1px solid ${BORDER}`,
                            }}>
                                DOKUMENTDETAILS
                            </Typography>
                            {[
                                ["Typ", TYPE_LABELS[documentInfo.docType] || documentInfo.docType],
                                ["Nummer", documentInfo.docNumber],
                                ["Kunde", documentInfo.customerCompany || documentInfo.customerName],
                                ["Datum", formatDate(documentInfo.issueDate)],
                            ].map(([label, value]) => (
                                <Box key={label} display="flex" justifyContent="space-between" sx={{ py: 0.3 }}>
                                    <Typography sx={{ fontSize: "10px", color: TEXT_GRAY }}>{label}</Typography>
                                    <Typography sx={{ fontSize: "10px", fontWeight: 700, color: NAVY }}>{value}</Typography>
                                </Box>
                            ))}
                            <Box display="flex" justifyContent="space-between" sx={{ pt: 0.5 }}>
                                <Typography sx={{ fontSize: "10px", color: TEXT_GRAY }}>Gesamtbetrag</Typography>
                                <Typography sx={{ fontSize: "14px", fontWeight: 900, color: NAVY }}>
                                    {(documentInfo.total / 100).toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
                                </Typography>
                            </Box>
                        </Box>

                        {/* Kleinunternehmer note */}
                        <Box sx={{
                            mt: 1, py: 0.6, px: 1,
                            bgcolor: "#FFFDF5", borderLeft: "2px solid #E2B93B",
                        }}>
                            <Typography sx={{ fontSize: "8px", color: TEXT_GRAY, fontStyle: "italic" }}>
                                Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet.
                            </Typography>
                        </Box>
                    </Box>
                )}

                {/* Line Items (Positionen) */}
                {documentInfo && documentInfo.items && documentInfo.items.length > 0 && (
                    <Box sx={{ px: 2.5, pb: 2 }}>
                        <Typography sx={{
                            fontFamily: "monospace", fontSize: "8px",
                            letterSpacing: "1.5px", textTransform: "uppercase",
                            color: TEXT_GRAY, mb: 0.8,
                        }}>
                            POSITIONEN
                        </Typography>
                        <Box sx={{ border: `1px solid ${BORDER}` }}>
                            {/* Header */}
                            <Box sx={{
                                display: "grid",
                                gridTemplateColumns: "20px 1fr 28px 52px 56px",
                                bgcolor: NAVY,
                                px: 0.8, py: 0.6, gap: 0.5,
                            }}>
                                {["#", "Beschreibung", "Menge", "Einzel", "Gesamt"].map((h, i) => (
                                    <Typography key={h} sx={{
                                        fontSize: "7px", fontWeight: 700, color: "#fff",
                                        letterSpacing: "0.5px", textTransform: "uppercase",
                                        textAlign: i === 0 ? "center" : i === 1 ? "left" : "right",
                                    }}>
                                        {h}
                                    </Typography>
                                ))}
                            </Box>
                            {/* Rows */}
                            {documentInfo.items.map((item, idx) => (
                                <Box key={idx} sx={{
                                    display: "grid",
                                    gridTemplateColumns: "20px 1fr 28px 52px 56px",
                                    bgcolor: idx % 2 === 0 ? "#fff" : LIGHT_BG,
                                    px: 0.8, py: 0.6, gap: 0.5,
                                    borderTop: `1px solid ${BORDER}`,
                                }}>
                                    <Typography sx={{ fontSize: "9px", color: TEXT_GRAY, textAlign: "center" }}>
                                        {item.position}
                                    </Typography>
                                    <Box>
                                        <Typography sx={{ fontSize: "9px", fontWeight: 700, color: "#1A202C" }}>
                                            {item.title}
                                        </Typography>
                                        {item.description && (
                                            <Typography sx={{ fontSize: "8px", color: TEXT_GRAY, whiteSpace: "pre-wrap", lineHeight: 1.4 }}>
                                                {item.description}
                                            </Typography>
                                        )}
                                    </Box>
                                    <Typography sx={{ fontSize: "9px", color: TEXT_GRAY, textAlign: "right" }}>
                                        {item.quantity}
                                    </Typography>
                                    <Typography sx={{ fontSize: "9px", color: TEXT_GRAY, textAlign: "right" }}>
                                        {(item.unitPrice / 100).toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
                                    </Typography>
                                    <Typography sx={{ fontSize: "9px", fontWeight: 700, color: NAVY, textAlign: "right" }}>
                                        {(item.totalPrice / 100).toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {/* Attachment */}
                {attachmentFileName && (
                    <Box sx={{ px: 2.5, pb: 2 }}>
                        <Box sx={{
                            bgcolor: LIGHT_BG, border: `1px solid ${BORDER}`,
                            p: 1.2, display: "flex", alignItems: "center", gap: 1,
                        }}>
                            <Box sx={{
                                width: 24, height: 24, bgcolor: "#C53030",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexShrink: 0,
                            }}>
                                <Typography sx={{ fontSize: "7px", fontWeight: 700, color: "#fff" }}>PDF</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "10px", fontWeight: 700, color: "#1A202C" }}>
                                    {attachmentFileName}
                                </Typography>
                                <Typography sx={{ fontSize: "8px", color: TEXT_GRAY }}>
                                    PDF-Dokument als Anhang beigefügt
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                )}

                {/* Footer divider */}
                <Box sx={{ px: 2.5 }}>
                    <Divider sx={{ borderColor: NAVY, borderWidth: 1 }} />
                </Box>

                {/* Footer: 4 columns */}
                <Box sx={{ px: 2.5, py: 1.5 }}>
                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 1 }}>
                        {/* Col 1 */}
                        <Box>
                            <Typography sx={{ fontSize: "7px", fontWeight: 700, color: "#1A202C", mb: 0.3 }}>
                                {COMPANY.name}
                            </Typography>
                            <Typography sx={{ fontSize: "7px", color: TEXT_GRAY, lineHeight: 1.4 }}>
                                {COMPANY.street}<br />{COMPANY.zip} {COMPANY.city}
                            </Typography>
                        </Box>
                        {/* Col 2 */}
                        <Box>
                            <Typography sx={{ fontSize: "7px", fontWeight: 700, color: "#1A202C", mb: 0.3 }}>
                                Kontakt
                            </Typography>
                            <Typography sx={{ fontSize: "7px", color: TEXT_GRAY, lineHeight: 1.4 }}>
                                Tel.: {COMPANY.phone}<br />{COMPANY.email}<br />{COMPANY.web}
                            </Typography>
                        </Box>
                        {/* Col 3 */}
                        <Box>
                            <Typography sx={{ fontSize: "7px", fontWeight: 700, color: "#1A202C", mb: 0.3 }}>
                                Bankverbindung
                            </Typography>
                            <Typography sx={{ fontSize: "7px", color: TEXT_GRAY, lineHeight: 1.4 }}>
                                {COMPANY.bank}<br />IBAN: {COMPANY.iban}<br />BIC: {COMPANY.bic}
                            </Typography>
                        </Box>
                        {/* Col 4 */}
                        <Box>
                            <Typography sx={{ fontSize: "7px", fontWeight: 700, color: "#1A202C", mb: 0.3 }}>
                                Geschäftsführer
                            </Typography>
                            <Typography sx={{ fontSize: "7px", color: TEXT_GRAY, lineHeight: 1.4 }}>
                                {COMPANY.owner}<br />St.-Nr.: {COMPANY.taxId}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Legal note */}
                <Box sx={{ px: 2.5, pb: 1 }}>
                    <Typography sx={{ fontSize: "7px", color: TEXT_GRAY, fontStyle: "italic" }}>
                        Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet.
                    </Typography>
                </Box>

                {/* Bottom navy bar */}
                <Box sx={{
                    bgcolor: NAVY, px: 2.5, py: 1,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                    <Typography sx={{ fontFamily: "monospace", fontSize: "7px", color: "rgba(255,255,255,0.4)" }}>
                        © {new Date().getFullYear()} {COMPANY.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "monospace", fontSize: "7px", color: "rgba(255,255,255,0.4)" }}>
                        {COMPANY.web}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
