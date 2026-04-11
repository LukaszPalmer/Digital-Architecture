"use client";

// Dialog zum Versenden eines Dokuments per E-Mail — mit automatischer Kundenemail-Befüllung,
// Betreff/Nachricht-Anpassung und E-Mail-Vorschau.

import { useState, useEffect } from "react";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Box, Button, TextField, Typography, Alert, Chip,
    Collapse,
} from "@mui/material";
import SendIcon        from "@mui/icons-material/Send";
import ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
import ExpandLessIcon  from "@mui/icons-material/ExpandLess";
import AttachFileIcon  from "@mui/icons-material/AttachFile";
import EmailIcon       from "@mui/icons-material/Email";
import PersonIcon      from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import EuroIcon        from "@mui/icons-material/Euro";
import type { DocRecord } from "./DocumentsTab";
import { EmailPreview } from "./EmailPreview";

const TYPE_LABELS: Record<string, string> = {
    invoice: "Rechnung",
    quote: "Angebot",
    confirmation: "Auftragsbestätigung",
};

interface Props {
    open: boolean;
    onClose: () => void;
    onSent: () => void;
    doc: DocRecord;
    customerEmail?: string;
}

export function SendEmailDialog({ open, onClose, onSent, doc, customerEmail }: Props) {
    const [email, setEmail]       = useState("");
    const [subject, setSubject]   = useState("");
    const [message, setMessage]   = useState("");
    const [sending, setSending]   = useState(false);
    const [error, setError]       = useState("");
    const [success, setSuccess]   = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const typeLabel = TYPE_LABELS[doc.docType] || doc.docType;

    // Auto-fill email and default subject/message when dialog opens
    useEffect(() => {
        if (open) {
            setEmail(doc.sentTo || customerEmail || "");
            setSubject(`${typeLabel} ${doc.docNumber} — Palmer Digital`);
            setMessage(
                `Sehr geehrte/r ${doc.customerName || "Kunde/Kundin"},\n\nim Anhang finden Sie Ihre ${typeLabel} Nr. ${doc.docNumber}.\n\nBei Fragen stehen wir Ihnen gerne zur Verfügung.\n\nFreundliche Grüße\nLukasz Palmer\nPalmer Digital`
            );
            setError("");
            setSuccess(false);
            setShowPreview(false);
        }
    }, [open, doc, customerEmail, typeLabel]);

    const handleSend = async () => {
        if (!email) return;
        setSending(true);
        setError("");
        setSuccess(false);

        const res = await fetch(`/api/documents/docs/${doc._id}/send`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, subject, message }),
        });

        if (res.ok) {
            setSuccess(true);
            setTimeout(() => {
                onClose();
                onSent();
            }, 1500);
        } else {
            const data = await res.json();
            setError(data.error || "Fehler beim Senden");
        }
        setSending(false);
    };

    const inputSx = { "& .MuiOutlinedInput-root": { borderRadius: 0, fontFamily: "monospace", fontSize: "13px" } };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth slotProps={{ paper: { sx: { borderRadius: 0 } } }}>
            {/* Header */}
            <DialogTitle sx={{ pb: 1, display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{
                    width: 36, height: 36, bgcolor: "#001F3F", display: "flex",
                    alignItems: "center", justifyContent: "center",
                }}>
                    <SendIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>
                <Box>
                    <Typography sx={{
                        fontFamily: "monospace", fontSize: "12px", fontWeight: 700,
                        letterSpacing: "0.2em", textTransform: "uppercase", color: "#001F3F",
                    }}>
                        {typeLabel} versenden
                    </Typography>
                    <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)" }}>
                        per E-Mail mit PDF-Anhang
                    </Typography>
                </Box>
            </DialogTitle>

            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2} mt={1}>

                    {/* Document Info Card */}
                    <Box sx={{
                        p: 2, bgcolor: "rgba(0,31,63,0.03)",
                        border: "1px solid rgba(0,31,63,0.08)",
                    }}>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Box display="flex" alignItems="center" gap={1}>
                                <DescriptionIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                                    Dokument
                                </Typography>
                                <Chip
                                    label={doc.docNumber}
                                    size="small"
                                    sx={{
                                        bgcolor: "rgba(0,31,63,0.08)", color: "#001F3F",
                                        fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                        borderRadius: 0, height: 22, ml: "auto",
                                    }}
                                />
                            </Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <PersonIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                                    Kunde
                                </Typography>
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#001F3F", ml: "auto" }}>
                                    {doc.customerCompany || doc.customerName}
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <EuroIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                                    Betrag
                                </Typography>
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#001F3F", ml: "auto" }}>
                                    {(doc.total / 100).toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Sender info */}
                    <Box sx={{
                        display: "flex", alignItems: "center", gap: 1,
                        py: 1, px: 1.5, bgcolor: "rgba(0,150,0,0.04)",
                        border: "1px solid rgba(0,150,0,0.1)",
                    }}>
                        <EmailIcon sx={{ fontSize: 14, color: "rgba(0,150,0,0.6)" }} />
                        <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.5)" }}>
                            Absender:
                        </Typography>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#001F3F" }}>
                            kontakt@palmer-digital.de
                        </Typography>
                    </Box>

                    {/* Recipient email */}
                    <TextField
                        fullWidth size="small" type="email"
                        label="Empfänger E-Mail-Adresse *"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="kunde@beispiel.de"
                        helperText={customerEmail && email === customerEmail ? "Automatisch aus Kundendaten befüllt" : undefined}
                        sx={inputSx}
                    />

                    {/* Subject */}
                    <TextField
                        fullWidth size="small"
                        label="Betreff"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        sx={inputSx}
                    />

                    {/* Message */}
                    <TextField
                        fullWidth size="small" multiline rows={5}
                        label="Nachricht"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        sx={inputSx}
                    />

                    {/* Attachment info */}
                    <Box sx={{
                        display: "flex", alignItems: "center", gap: 1,
                        py: 1, px: 1.5, bgcolor: "rgba(200,50,0,0.04)",
                        border: "1px solid rgba(200,50,0,0.1)",
                    }}>
                        <AttachFileIcon sx={{ fontSize: 14, color: "rgba(200,50,0,0.6)" }} />
                        <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.5)" }}>
                            Anhang:
                        </Typography>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 600, color: "#001F3F" }}>
                            {typeLabel}_{doc.docNumber}.pdf
                        </Typography>
                    </Box>

                    {/* Email Preview Toggle */}
                    <Button
                        onClick={() => setShowPreview(!showPreview)}
                        endIcon={showPreview ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        sx={{
                            borderRadius: 0, fontFamily: "monospace", fontSize: "10px",
                            color: "rgba(0,0,0,0.4)", textTransform: "uppercase",
                            letterSpacing: "0.1em", alignSelf: "flex-start",
                        }}
                    >
                        E-Mail-Vorschau
                    </Button>

                    <Collapse in={showPreview}>
                        <EmailPreview
                            email={email}
                            subject={subject}
                            message={message}
                            documentInfo={{
                                docType: doc.docType,
                                docNumber: doc.docNumber,
                                customerName: doc.customerName,
                                customerCompany: doc.customerCompany,
                                issueDate: doc.issueDate,
                                total: doc.total,
                                subtotal: doc.subtotal,
                                items: doc.items,
                            }}
                            attachmentFileName={`${typeLabel}_${doc.docNumber}.pdf`}
                        />
                    </Collapse>

                    {/* Status Messages */}
                    {error && <Alert severity="error" sx={{ borderRadius: 0 }}>{error}</Alert>}
                    {success && (
                        <Alert severity="success" sx={{ borderRadius: 0 }}>
                            E-Mail erfolgreich an <strong>{email}</strong> gesendet!
                        </Alert>
                    )}
                </Box>
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={onClose} sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}>
                    Abbrechen
                </Button>
                <Button
                    startIcon={<SendIcon />}
                    onClick={handleSend}
                    disabled={!email || sending}
                    sx={{
                        borderRadius: 0, bgcolor: "#001F3F", color: "#fff",
                        fontFamily: "monospace", fontSize: "11px", fontWeight: 700,
                        px: 3,
                        "&:hover": { bgcolor: "#003366" },
                        "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" },
                    }}
                >
                    {sending ? "Wird gesendet..." : "Jetzt senden"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
