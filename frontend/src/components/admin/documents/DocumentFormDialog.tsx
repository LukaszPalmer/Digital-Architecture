"use client";

// Dialog zum Erstellen und Bearbeiten von Dokumenten (Rechnungen, Angebote, AB).

import { useState, useEffect, useCallback } from "react";
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Box, Button, TextField, Typography, IconButton, Tooltip,
    Autocomplete, Divider,
} from "@mui/material";
import AddIcon    from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import type { DocType, DocRecord } from "./DocumentsTab";

interface Customer {
    _id: string;
    name: string;
    company: string;
    street: string;
    zip: string;
    city: string;
    email: string;
    customerNumber: string;
}

interface LineItem {
    title: string;
    description: string;
    unitPrice: number;   // in Cent
    quantity: number;
}

const TYPE_LABELS: Record<DocType, string> = {
    invoice: "Rechnung",
    quote: "Angebot",
    confirmation: "Auftragsbestätigung",
};

// Feste Default-Einleitungstexte je Dokumenttyp.
// Werden beim Öffnen des Dialogs automatisch gesetzt, können aber überschrieben werden.
const DEFAULT_INTRO: Record<DocType, string> = {
    quote:
        "vielen Dank für Ihre Anfrage und Ihr Interesse an Palmer Digital. "
        + "Gerne unterbreiten wir Ihnen auf Basis unseres Gesprächs das folgende unverbindliche Angebot "
        + "für die gewünschten Leistungen:",
    invoice:
        "vielen Dank für Ihr Vertrauen in Palmer Digital. "
        + "Wir stellen Ihnen hiermit folgende Leistungen in Rechnung:",
    confirmation:
        "vielen Dank für Ihren Auftrag. Hiermit bestätigen wir Ihnen verbindlich die Beauftragung "
        + "der folgenden Leistungen:",
};

const DEFAULT_PAYMENT_TERMS =
    "Die Rechnung ist sofort fällig. Bitte überweisen Sie innerhalb von 14 Tagen "
    + "den Gesamtbetrag auf das unten angegebene Konto.";

interface Props {
    open: boolean;
    onClose: () => void;
    onSaved: () => void;
    docType: DocType;
    editing: DocRecord | null;
}

export function DocumentFormDialog({ open, onClose, onSaved, docType, editing }: Props) {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const [issueDate, setIssueDate]       = useState(new Date().toISOString().slice(0, 10));
    const [deliveryDate, setDeliveryDate] = useState(new Date().toISOString().slice(0, 10));
    const [dueDate, setDueDate]           = useState("");
    const [validUntil, setValidUntil]     = useState("");
    const [introText, setIntroText]       = useState("");
    const [outroText, setOutroText]       = useState("Freundliche Grüße");
    const [paymentTerms, setPaymentTerms] = useState(DEFAULT_PAYMENT_TERMS);
    const [notes, setNotes] = useState("");
    const [items, setItems] = useState<LineItem[]>([
        { title: "", description: "", unitPrice: 0, quantity: 1 },
    ]);

    const [saving, setSaving] = useState(false);

    const fetchCustomers = useCallback(async () => {
        const res = await fetch("/api/documents/customers");
        if (res.ok) setCustomers(await res.json());
    }, []);

    useEffect(() => {
        if (open) fetchCustomers();
    }, [open, fetchCustomers]);

    // Editing mode: populate form
    useEffect(() => {
        if (editing && open) {
            setIssueDate(editing.issueDate ? new Date(editing.issueDate).toISOString().slice(0, 10) : "");
            setDeliveryDate(editing.deliveryDate ? new Date(editing.deliveryDate).toISOString().slice(0, 10) : "");
            setDueDate(editing.dueDate ? new Date(editing.dueDate).toISOString().slice(0, 10) : "");
            setValidUntil(editing.validUntil ? new Date(editing.validUntil).toISOString().slice(0, 10) : "");
            setIntroText(editing.introText || "");
            setOutroText(editing.outroText || "Freundliche Grüße");
            setPaymentTerms(editing.paymentTerms || "");
            setNotes(editing.notes || "");
            setItems(editing.items.length > 0
                ? editing.items.map(it => ({ title: it.title, description: it.description, unitPrice: it.unitPrice, quantity: it.quantity }))
                : [{ title: "", description: "", unitPrice: 0, quantity: 1 }]);
            // Find customer
            const cust = customers.find(c => c._id === editing.customerId);
            if (cust) setSelectedCustomer(cust);
        } else if (!editing && open) {
            // Reset
            const today = new Date();
            const in14Days = new Date(today);
            in14Days.setDate(in14Days.getDate() + 14);

            setIssueDate(today.toISOString().slice(0, 10));
            setDeliveryDate(today.toISOString().slice(0, 10));
            setDueDate("");
            // Für Angebote: Gültigkeit standardmäßig 14 Tage (§ 145 BGB Bindungsfrist)
            setValidUntil(docType === "quote" ? in14Days.toISOString().slice(0, 10) : "");
            setIntroText(DEFAULT_INTRO[docType]);
            setOutroText("Freundliche Grüße");
            // Zahlungsbedingungen nur für Rechnungen relevant
            setPaymentTerms(docType === "invoice" ? DEFAULT_PAYMENT_TERMS : "");
            setNotes("");
            setItems([{ title: "", description: "", unitPrice: 0, quantity: 1 }]);
            setSelectedCustomer(null);
        }
    }, [editing, open, customers, docType]);

    const addItem = () => setItems(prev => [...prev, { title: "", description: "", unitPrice: 0, quantity: 1 }]);

    const removeItem = (i: number) => setItems(prev => prev.filter((_, idx) => idx !== i));

    const updateItem = (i: number, key: keyof LineItem, value: string | number) => {
        setItems(prev => prev.map((item, idx) => idx === i ? { ...item, [key]: value } : item));
    };

    const total = items.reduce((sum, it) => sum + it.unitPrice * it.quantity, 0);

    const handleSave = async () => {
        if (!selectedCustomer) return;
        setSaving(true);

        const payload = {
            docType,
            customerId:      selectedCustomer._id,
            customerName:    selectedCustomer.name,
            customerCompany: selectedCustomer.company,
            customerStreet:  selectedCustomer.street,
            customerZip:     selectedCustomer.zip,
            customerCity:    selectedCustomer.city,
            customerNumber:  selectedCustomer.customerNumber,
            issueDate,
            deliveryDate,
            dueDate:    dueDate || undefined,
            validUntil: validUntil || undefined,
            introText,
            outroText,
            paymentTerms,
            notes,
            items: items.filter(it => it.title.trim()),
        };

        if (editing) {
            await fetch(`/api/documents/docs/${editing._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        } else {
            await fetch("/api/documents/docs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
        }

        setSaving(false);
        onClose();
        onSaved();
    };

    const formatEuro = (cents: number) =>
        (cents / 100).toLocaleString("de-DE", { minimumFractionDigits: 2 }) + " €";

    const inputSx = { "& .MuiOutlinedInput-root": { borderRadius: 0, fontFamily: "monospace", fontSize: "13px" } };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 0 } }}>
            <DialogTitle sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#001F3F" }}>
                {editing ? `${TYPE_LABELS[docType]} bearbeiten` : `Neue ${TYPE_LABELS[docType]} erstellen`}
            </DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2.5} mt={1}>

                    {/* Kunde auswählen */}
                    <Autocomplete
                        options={customers}
                        value={selectedCustomer}
                        onChange={(_, val) => setSelectedCustomer(val)}
                        getOptionLabel={(c) => `${c.customerNumber} — ${c.company ? c.company + " | " : ""}${c.name}`}
                        renderInput={(params) => (
                            <TextField {...params} label="Kunde auswählen *" size="small" sx={inputSx} />
                        )}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
                    />

                    {/* Datum-Felder */}
                    <Box display="flex" gap={2}>
                        <TextField
                            fullWidth size="small" type="date" label={`${TYPE_LABELS[docType]}sdatum`}
                            value={issueDate} onChange={e => setIssueDate(e.target.value)}
                            slotProps={{ inputLabel: { shrink: true } }} sx={inputSx}
                        />
                        {docType === "invoice" && (
                            <TextField
                                fullWidth size="small" type="date" label="Lieferdatum"
                                value={deliveryDate} onChange={e => setDeliveryDate(e.target.value)}
                                slotProps={{ inputLabel: { shrink: true } }} sx={inputSx}
                            />
                        )}
                        {docType === "invoice" && (
                            <TextField
                                fullWidth size="small" type="date" label="Zahlungsziel"
                                value={dueDate} onChange={e => setDueDate(e.target.value)}
                                slotProps={{ inputLabel: { shrink: true } }} sx={inputSx}
                            />
                        )}
                        {docType === "quote" && (
                            <TextField
                                fullWidth size="small" type="date" label="Gültig bis"
                                value={validUntil} onChange={e => setValidUntil(e.target.value)}
                                slotProps={{ inputLabel: { shrink: true } }} sx={inputSx}
                            />
                        )}
                    </Box>

                    {/* Intro-Text — wird automatisch je Dokumenttyp vorbelegt,
                        kann aber individuell überschrieben werden. */}
                    <TextField
                        fullWidth size="small" label="Einleitungstext" multiline rows={3}
                        value={introText} onChange={e => setIntroText(e.target.value)}
                        sx={inputSx}
                    />

                    {/* ── Positionen ── */}
                    <Divider />
                    <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
                        Positionen
                    </Typography>

                    {items.map((item, i) => (
                        <Box key={i} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start", p: 2, bgcolor: i % 2 === 0 ? "rgba(0,31,63,0.03)" : "transparent" }}>
                            <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "rgba(0,0,0,0.3)", mt: 1, minWidth: 20 }}>
                                {i + 1}
                            </Typography>
                            <Box flex={3} display="flex" flexDirection="column" gap={1}>
                                <TextField
                                    fullWidth size="small" label="Titel *"
                                    value={item.title} onChange={e => updateItem(i, "title", e.target.value)}
                                    sx={inputSx}
                                />
                                <TextField
                                    fullWidth size="small" label="Beschreibung"
                                    value={item.description} onChange={e => updateItem(i, "description", e.target.value)}
                                    sx={inputSx}
                                />
                            </Box>
                            <Box flex={1}>
                                <TextField
                                    fullWidth size="small" label="Preis (€)" type="number"
                                    value={item.unitPrice ? item.unitPrice / 100 : ""}
                                    onChange={e => updateItem(i, "unitPrice", Math.round(parseFloat(e.target.value || "0") * 100))}
                                    slotProps={{ htmlInput: { step: "0.01", min: "0" } }}
                                    sx={inputSx}
                                />
                            </Box>
                            <Box sx={{ width: 70 }}>
                                <TextField
                                    fullWidth size="small" label="Menge" type="number"
                                    value={item.quantity} onChange={e => updateItem(i, "quantity", parseInt(e.target.value || "1"))}
                                    sx={inputSx}
                                />
                            </Box>
                            <Box sx={{ minWidth: 80, textAlign: "right", mt: 1 }}>
                                <Typography sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: "#001F3F" }}>
                                    {formatEuro(item.unitPrice * item.quantity)}
                                </Typography>
                            </Box>
                            <Tooltip title="Position entfernen">
                                <IconButton size="small" onClick={() => removeItem(i)} sx={{ mt: 0.5 }}>
                                    <DeleteIcon sx={{ fontSize: 16, color: "#c53030" }} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    ))}

                    <Button
                        startIcon={<AddIcon />}
                        onClick={addItem}
                        sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px", color: "#001F3F", alignSelf: "flex-start" }}
                    >
                        Position hinzufügen
                    </Button>

                    {/* Summe */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 3, p: 2, bgcolor: "rgba(0,31,63,0.04)" }}>
                        <Box textAlign="right">
                            <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)", letterSpacing: "0.1em" }}>
                                NETTO / GESAMT (0% USt.)
                            </Typography>
                            <Typography sx={{ fontFamily: "monospace", fontSize: "18px", fontWeight: 900, color: "#001F3F" }}>
                                {formatEuro(total)}
                            </Typography>
                        </Box>
                    </Box>

                    <Divider />

                    {/* Zahlungsbedingungen — nur bei Rechnungen.
                        Angebote und Auftragsbestätigungen brauchen keine Überweisungs-Infos. */}
                    {docType === "invoice" && (
                        <TextField
                            fullWidth size="small" label="Zahlungsbedingungen" multiline rows={2}
                            value={paymentTerms} onChange={e => setPaymentTerms(e.target.value)}
                            sx={inputSx}
                        />
                    )}

                    {/* Outro */}
                    <TextField
                        fullWidth size="small" label="Schlusstext / Grüße"
                        value={outroText} onChange={e => setOutroText(e.target.value)}
                        sx={inputSx}
                    />

                    {/* Notizen */}
                    <TextField
                        fullWidth size="small" label="Interne Notizen" multiline rows={2}
                        value={notes} onChange={e => setNotes(e.target.value)}
                        sx={inputSx}
                    />
                </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={onClose} sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}>
                    Abbrechen
                </Button>
                <Button
                    onClick={handleSave}
                    disabled={!selectedCustomer || items.every(it => !it.title.trim()) || saving}
                    sx={{
                        borderRadius: 0, bgcolor: "#001F3F", color: "#fff",
                        fontFamily: "monospace", fontSize: "11px", fontWeight: 700,
                        "&:hover": { bgcolor: "#003366" }, "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" },
                    }}
                >
                    {saving ? "Speichert..." : editing ? "Speichern" : "Erstellen"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
