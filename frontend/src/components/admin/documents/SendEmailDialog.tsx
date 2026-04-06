"use client";

// Dialog zum Versenden eines Dokuments per E-Mail.

import { useState } from "react";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Box, Button, TextField, Typography, Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import type { DocRecord } from "./DocumentsTab";

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
}

export function SendEmailDialog({ open, onClose, onSent, doc }: Props) {
    const [email, setEmail]     = useState(doc.sentTo || "");
    const [sending, setSending] = useState(false);
    const [error, setError]     = useState("");
    const [success, setSuccess] = useState(false);

    const handleSend = async () => {
        if (!email) return;
        setSending(true);
        setError("");
        setSuccess(false);

        const res = await fetch(`/api/documents/docs/${doc._id}/send`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
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

    const typeLabel = TYPE_LABELS[doc.docType] || doc.docType;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 0 } }}>
            <DialogTitle sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#001F3F" }}>
                {typeLabel} per E-Mail senden
            </DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2} mt={1}>
                    <Box sx={{ p: 2, bgcolor: "rgba(0,31,63,0.04)" }}>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                            Dokument: <strong style={{ color: "#001F3F" }}>{doc.docNumber}</strong>
                        </Typography>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                            Kunde: <strong style={{ color: "#001F3F" }}>{doc.customerCompany || doc.customerName}</strong>
                        </Typography>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                            Betrag: <strong style={{ color: "#001F3F" }}>
                                {(doc.total / 100).toLocaleString("de-DE", { minimumFractionDigits: 2 })} €
                            </strong>
                        </Typography>
                    </Box>

                    <TextField
                        fullWidth size="small" type="email"
                        label="Empfänger E-Mail-Adresse *"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="kunde@beispiel.de"
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0, fontFamily: "monospace", fontSize: "13px" } }}
                    />

                    <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.35)" }}>
                        Das PDF wird automatisch als Anhang beigefügt. Die E-Mail wird von kontakt@palmer-digital.de gesendet.
                    </Typography>

                    {error && <Alert severity="error" sx={{ borderRadius: 0 }}>{error}</Alert>}
                    {success && <Alert severity="success" sx={{ borderRadius: 0 }}>E-Mail erfolgreich gesendet!</Alert>}
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
                        "&:hover": { bgcolor: "#003366" }, "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" },
                    }}
                >
                    {sending ? "Wird gesendet..." : "Senden"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
