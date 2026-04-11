"use client";

// Dialog zum Erstellen / Bearbeiten eines Kunden.

import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
    TextField, Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import type { Customer, CustomerForm } from "./types";
import { NAVY } from "./types";

interface Props {
    open: boolean;
    editing: Customer | null;
    form: CustomerForm;
    onChange: (form: CustomerForm) => void;
    onClose: () => void;
    onSave: () => void;
}

export function CustomerFormDialog({ open, editing, form, onChange, onClose, onSave }: Props) {
    const setField = (key: keyof CustomerForm, value: string) =>
        onChange({ ...form, [key]: value });

    const field = (
        label: string,
        key: keyof CustomerForm,
        options?: { multiline?: boolean; type?: string; placeholder?: string },
    ) => (
        <TextField
            fullWidth size="small" label={label}
            multiline={options?.multiline} rows={options?.multiline ? 3 : 1}
            type={options?.type || "text"}
            placeholder={options?.placeholder}
            value={form[key]}
            onChange={e => setField(key, e.target.value)}
            sx={{
                "& .MuiOutlinedInput-root": { borderRadius: 0, fontFamily: "monospace", fontSize: "13px" },
                "& .MuiInputLabel-root": { fontFamily: "monospace", fontSize: "13px" },
            }}
        />
    );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth slotProps={{ paper: { sx: { borderRadius: 0 } } }}>
            <DialogTitle sx={{ pb: 1, display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{
                    width: 40, height: 40, bgcolor: NAVY, display: "flex",
                    alignItems: "center", justifyContent: "center",
                }}>
                    <PersonIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Box>
                <Box>
                    <Typography sx={{
                        fontFamily: "monospace", fontSize: "13px", fontWeight: 700,
                        letterSpacing: "0.15em", textTransform: "uppercase", color: NAVY,
                    }}>
                        {editing ? "Kunde bearbeiten" : "Neuen Kunden anlegen"}
                    </Typography>
                    <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)" }}>
                        {editing ? `${editing.customerNumber}` : "Kundenstammdaten erfassen"}
                    </Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2} mt={1}>
                    <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mt: 1 }}>
                        Kontaktdaten
                    </Typography>
                    {field("Name *", "name")}
                    {field("Firma", "company")}

                    <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mt: 1 }}>
                        Adresse
                    </Typography>
                    {field("Straße *", "street")}
                    <Box display="flex" gap={2}>
                        <Box flex={1}>{field("PLZ *", "zip")}</Box>
                        <Box flex={2}>{field("Stadt *", "city")}</Box>
                    </Box>

                    <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mt: 1 }}>
                        Kommunikation
                    </Typography>
                    {field("E-Mail *", "email", { type: "email", placeholder: "kunde@beispiel.de" })}

                    <Box sx={{
                        display: "flex", alignItems: "center", gap: 1,
                        py: 1, px: 1.5, bgcolor: "rgba(0,100,200,0.04)",
                        border: "1px solid rgba(0,100,200,0.1)", mt: -1,
                    }}>
                        <EmailIcon sx={{ fontSize: 14, color: "rgba(0,100,200,0.5)" }} />
                        <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.45)" }}>
                            Diese E-Mail wird als Empfänger-Adresse beim Versand von Dokumenten und Nachrichten verwendet.
                        </Typography>
                    </Box>

                    {field("Telefon", "phone")}

                    <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mt: 1 }}>
                        Sonstiges
                    </Typography>
                    {field("Notizen", "notes", { multiline: true })}
                </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={onClose} sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}>
                    Abbrechen
                </Button>
                <Button
                    onClick={onSave}
                    disabled={!form.name || !form.street || !form.zip || !form.city || !form.email}
                    sx={{
                        borderRadius: 0, bgcolor: NAVY, color: "#fff",
                        fontFamily: "monospace", fontSize: "11px", fontWeight: 700, px: 3,
                        "&:hover": { bgcolor: "#003366" }, "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" },
                    }}
                >
                    {editing ? "Speichern" : "Anlegen"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
