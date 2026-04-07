"use client";

// Dialog zum Verfassen und Senden einer direkten E-Mail an einen Kunden.
// Ohne Dokumentanhang — für allgemeine Kommunikation.

import { useState, useEffect } from "react";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Box, Button, TextField, Typography, Alert, Chip,
    Collapse, Divider,
} from "@mui/material";
import SendIcon       from "@mui/icons-material/Send";
import EmailIcon      from "@mui/icons-material/Email";
import PersonIcon     from "@mui/icons-material/Person";
import BusinessIcon   from "@mui/icons-material/Business";
import PhoneIcon      from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface Customer {
    _id: string;
    name: string;
    company: string;
    street: string;
    zip: string;
    city: string;
    email: string;
    phone: string;
    customerNumber: string;
    notes: string;
}

interface Props {
    open: boolean;
    onClose: () => void;
    customer: Customer;
}

export function ComposeEmailDialog({ open, onClose, customer }: Props) {
    const [email, setEmail]       = useState("");
    const [subject, setSubject]   = useState("");
    const [message, setMessage]   = useState("");
    const [sending, setSending]   = useState(false);
    const [error, setError]       = useState("");
    const [success, setSuccess]   = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    // Reset and auto-fill when dialog opens
    useEffect(() => {
        if (open && customer) {
            setEmail(customer.email);
            setSubject("");
            setMessage(
                `Sehr geehrte/r ${customer.name},\n\n\n\nFreundliche Grüße\nLukasz Palmer\nPalmer Digital Architecture`
            );
            setError("");
            setSuccess(false);
            setSending(false);
            setShowPreview(false);
        }
    }, [open, customer]);

    const handleSend = async () => {
        if (!email || !subject || !message) return;
        setSending(true);
        setError("");
        setSuccess(false);

        const res = await fetch(`/api/documents/customers/${customer._id}/email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, subject, message }),
        });

        if (res.ok) {
            setSuccess(true);
            setTimeout(() => { onClose(); }, 2000);
        } else {
            const data = await res.json();
            setError(data.error || "Fehler beim Senden");
        }
        setSending(false);
    };

    const inputSx = { "& .MuiOutlinedInput-root": { borderRadius: 0, fontFamily: "monospace", fontSize: "13px" } };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth slotProps={{ paper: { sx: { borderRadius: 0 } } }}>
            {/* Header */}
            <DialogTitle sx={{ pb: 1, display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{
                    width: 36, height: 36, bgcolor: "#001F3F", display: "flex",
                    alignItems: "center", justifyContent: "center",
                }}>
                    <EmailIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>
                <Box>
                    <Typography sx={{
                        fontFamily: "monospace", fontSize: "12px", fontWeight: 700,
                        letterSpacing: "0.2em", textTransform: "uppercase", color: "#001F3F",
                    }}>
                        E-Mail verfassen
                    </Typography>
                    <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)" }}>
                        Direkte Nachricht an Kunden
                    </Typography>
                </Box>
            </DialogTitle>

            <DialogContent>
                <Box display="flex" gap={3} mt={1}>
                    {/* Left: Form */}
                    <Box flex={1} display="flex" flexDirection="column" gap={2}>

                        {/* Sender info */}
                        <Box sx={{
                            display: "flex", alignItems: "center", gap: 1,
                            py: 1, px: 1.5, bgcolor: "rgba(0,150,0,0.04)",
                            border: "1px solid rgba(0,150,0,0.1)",
                        }}>
                            <EmailIcon sx={{ fontSize: 14, color: "rgba(0,150,0,0.6)" }} />
                            <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.5)" }}>
                                Von:
                            </Typography>
                            <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#001F3F" }}>
                                kontakt@palmer-digital.de
                            </Typography>
                        </Box>

                        {/* Recipient email */}
                        <TextField
                            fullWidth size="small" type="email"
                            label="Empfänger E-Mail *"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            helperText={email === customer.email ? "Automatisch aus Kundendaten befüllt" : undefined}
                            sx={inputSx}
                        />

                        {/* Subject */}
                        <TextField
                            fullWidth size="small"
                            label="Betreff *"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            placeholder="z.B. Projektupdate, Terminbestätigung..."
                            sx={inputSx}
                        />

                        {/* Message */}
                        <TextField
                            fullWidth size="small" multiline rows={10}
                            label="Nachricht *"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            sx={inputSx}
                        />

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
                            <Box sx={{
                                p: 2.5, bgcolor: "#fff",
                                border: "1px solid rgba(0,0,0,0.12)",
                                fontFamily: "Arial, sans-serif", fontSize: "13px",
                                color: "#1A202C",
                            }}>
                                <Typography sx={{ fontSize: "11px", color: "rgba(0,0,0,0.4)", mb: 0.5, fontFamily: "monospace" }}>
                                    Von: Palmer Digital &lt;kontakt@palmer-digital.de&gt;
                                </Typography>
                                <Typography sx={{ fontSize: "11px", color: "rgba(0,0,0,0.4)", mb: 0.5, fontFamily: "monospace" }}>
                                    An: {email || "—"}
                                </Typography>
                                <Typography sx={{ fontSize: "11px", color: "rgba(0,0,0,0.4)", mb: 2, fontFamily: "monospace" }}>
                                    Betreff: {subject || "—"}
                                </Typography>
                                <Divider sx={{ mb: 2 }} />
                                <Typography sx={{ fontFamily: "Arial, sans-serif", fontSize: "13px", whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
                                    {message}
                                </Typography>
                                <Divider sx={{ my: 2 }} />
                                <Typography sx={{ fontSize: "11px", color: "#718096" }}>
                                    Palmer Digital Architecture<br />
                                    E-Mail: kontakt@palmer-digital.de<br />
                                    Web: www.palmer-digital.de
                                </Typography>
                            </Box>
                        </Collapse>
                    </Box>

                    {/* Right: Customer Card */}
                    <Box sx={{
                        width: 260, flexShrink: 0,
                        p: 2.5, bgcolor: "rgba(0,31,63,0.02)",
                        border: "1px solid rgba(0,31,63,0.08)",
                        display: "flex", flexDirection: "column", gap: 2,
                        alignSelf: "flex-start",
                    }}>
                        <Box>
                            <Typography sx={{
                                fontFamily: "monospace", fontSize: "9px", fontWeight: 700,
                                letterSpacing: "0.4em", textTransform: "uppercase",
                                color: "rgba(0,0,0,0.3)", mb: 1.5,
                            }}>
                                Kundenprofil
                            </Typography>
                            <Chip
                                label={customer.customerNumber}
                                size="small"
                                sx={{
                                    bgcolor: "rgba(0,31,63,0.08)", color: "#001F3F",
                                    fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                    borderRadius: 0, height: 22,
                                }}
                            />
                        </Box>

                        <Divider />

                        <Box display="flex" flexDirection="column" gap={1.5}>
                            <Box display="flex" alignItems="flex-start" gap={1}>
                                <PersonIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)", mt: 0.2 }} />
                                <Box>
                                    <Typography sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#001F3F" }}>
                                        {customer.name}
                                    </Typography>
                                </Box>
                            </Box>

                            {customer.company && (
                                <Box display="flex" alignItems="flex-start" gap={1}>
                                    <BusinessIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)", mt: 0.2 }} />
                                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.6)" }}>
                                        {customer.company}
                                    </Typography>
                                </Box>
                            )}

                            <Box display="flex" alignItems="flex-start" gap={1}>
                                <LocationOnIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)", mt: 0.2 }} />
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.6)" }}>
                                    {customer.street}<br />
                                    {customer.zip} {customer.city}
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <EmailIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "#001F3F", fontWeight: 600 }}>
                                    {customer.email}
                                </Typography>
                            </Box>

                            {customer.phone && (
                                <Box display="flex" alignItems="center" gap={1}>
                                    <PhoneIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.6)" }}>
                                        {customer.phone}
                                    </Typography>
                                </Box>
                            )}
                        </Box>

                        {customer.notes && (
                            <>
                                <Divider />
                                <Box>
                                    <Typography sx={{
                                        fontFamily: "monospace", fontSize: "9px", fontWeight: 700,
                                        letterSpacing: "0.3em", textTransform: "uppercase",
                                        color: "rgba(0,0,0,0.3)", mb: 0.5,
                                    }}>
                                        Notizen
                                    </Typography>
                                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)", whiteSpace: "pre-wrap" }}>
                                        {customer.notes}
                                    </Typography>
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>

                {/* Status Messages */}
                <Box mt={2}>
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
                    disabled={!email || !subject || !message || sending}
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
