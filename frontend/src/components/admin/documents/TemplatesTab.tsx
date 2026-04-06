"use client";

// Vorlagen-Tab: Rechnungsvorlagen erstellen, bearbeiten, als Basis für neue Dokumente nutzen.

import { useState, useEffect, useCallback } from "react";
import {
    Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip, Button, Chip, CircularProgress,
    Dialog, DialogTitle, DialogContent, DialogActions, TextField, Divider,
} from "@mui/material";
import AddIcon       from "@mui/icons-material/Add";
import EditIcon      from "@mui/icons-material/Edit";
import DeleteIcon    from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface TemplateRecord {
    _id: string;
    docType: string;
    docNumber: string;
    templateName: string;
    items: { title: string; description: string; unitPrice: number; quantity: number; totalPrice: number }[];
    total: number;
    introText: string;
    outroText: string;
    paymentTerms: string;
    createdAt: string;
}

const TYPE_LABELS: Record<string, string> = {
    invoice: "Rechnung",
    quote: "Angebot",
    confirmation: "Auftragsbestätigung",
};

function formatCurrency(cents: number): string {
    return (cents / 100).toLocaleString("de-DE", { minimumFractionDigits: 2 }) + " €";
}

export function TemplatesTab() {
    const [templates, setTemplates] = useState<TemplateRecord[]>([]);
    const [loading, setLoading]     = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editing, setEditing]     = useState<TemplateRecord | null>(null);

    // Form state
    const [templateName, setTemplateName] = useState("");
    const [docType, setDocType]           = useState("invoice");
    const [introText, setIntroText]       = useState("");
    const [outroText, setOutroText]       = useState("Freundliche Grüße");
    const [paymentTerms, setPaymentTerms] = useState("");
    const [items, setItems] = useState<{ title: string; description: string; unitPrice: number; quantity: number }[]>([
        { title: "", description: "", unitPrice: 0, quantity: 1 },
    ]);

    const fetchTemplates = useCallback(async () => {
        setLoading(true);
        const res = await fetch("/api/documents/docs?template=true");
        if (res.ok) setTemplates(await res.json());
        setLoading(false);
    }, []);

    useEffect(() => { fetchTemplates(); }, [fetchTemplates]);

    const openNew = () => {
        setEditing(null);
        setTemplateName("");
        setDocType("invoice");
        setIntroText("");
        setOutroText("Freundliche Grüße");
        setPaymentTerms("Die Rechnung ist sofort fällig. Bitte überweisen Sie innerhalb von 14 Tagen den Gesamtbetrag auf das unten angegebene Konto.");
        setItems([{ title: "", description: "", unitPrice: 0, quantity: 1 }]);
        setDialogOpen(true);
    };

    const openEdit = (t: TemplateRecord) => {
        setEditing(t);
        setTemplateName(t.templateName);
        setDocType(t.docType);
        setIntroText(t.introText || "");
        setOutroText(t.outroText || "Freundliche Grüße");
        setPaymentTerms(t.paymentTerms || "");
        setItems(t.items.map(it => ({ title: it.title, description: it.description, unitPrice: it.unitPrice, quantity: it.quantity })));
        setDialogOpen(true);
    };

    const handleSave = async () => {
        const payload = {
            docType,
            isTemplate: true,
            templateName,
            introText,
            outroText,
            paymentTerms,
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
        setDialogOpen(false);
        fetchTemplates();
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Vorlage wirklich löschen?")) return;
        await fetch(`/api/documents/docs/${id}`, { method: "DELETE" });
        fetchTemplates();
    };

    const handleDuplicate = async (t: TemplateRecord) => {
        await fetch("/api/documents/docs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                docType: t.docType,
                isTemplate: true,
                templateName: `${t.templateName} (Kopie)`,
                introText: t.introText,
                outroText: t.outroText,
                paymentTerms: t.paymentTerms,
                items: t.items,
            }),
        });
        fetchTemplates();
    };

    const addItem = () => setItems(prev => [...prev, { title: "", description: "", unitPrice: 0, quantity: 1 }]);
    const removeItem = (i: number) => setItems(prev => prev.filter((_, idx) => idx !== i));
    const updateItem = (i: number, key: string, value: string | number) => {
        setItems(prev => prev.map((item, idx) => idx === i ? { ...item, [key]: value } : item));
    };

    const cellSx = { borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 2, fontSize: "12px", fontFamily: "monospace" };
    const inputSx = { "& .MuiOutlinedInput-root": { borderRadius: 0, fontFamily: "monospace", fontSize: "13px" } };

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase" }}>
                    Vorlagen ({templates.length})
                </Typography>
                <Button
                    startIcon={<AddIcon />} onClick={openNew}
                    sx={{ borderRadius: 0, bgcolor: "#001F3F", color: "#fff", fontSize: "11px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", px: 3, "&:hover": { bgcolor: "#003366" } }}
                >
                    Neue Vorlage
                </Button>
            </Box>

            {loading ? (
                <Box display="flex" justifyContent="center" py={6}><CircularProgress sx={{ color: "#001F3F" }} /></Box>
            ) : (
                <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0 }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ "& th": { ...cellSx, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", fontSize: "10px" } }}>
                                <TableCell>Name</TableCell>
                                <TableCell>Typ</TableCell>
                                <TableCell>Positionen</TableCell>
                                <TableCell align="right">Betrag</TableCell>
                                <TableCell align="right">Aktionen</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {templates.map(t => (
                                <TableRow key={t._id} hover sx={{ "& td": cellSx }}>
                                    <TableCell sx={{ fontWeight: 600, color: "#001F3F" }}>{t.templateName || "—"}</TableCell>
                                    <TableCell>
                                        <Chip label={TYPE_LABELS[t.docType] || t.docType} size="small" sx={{ bgcolor: "rgba(0,31,63,0.08)", color: "#001F3F", fontFamily: "monospace", fontSize: "10px", fontWeight: 700, borderRadius: 0, height: 22 }} />
                                    </TableCell>
                                    <TableCell>{t.items.length}</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 700 }}>{formatCurrency(t.total)}</TableCell>
                                    <TableCell align="right">
                                        <Tooltip title="Duplizieren">
                                            <IconButton size="small" onClick={() => handleDuplicate(t)}><ContentCopyIcon sx={{ fontSize: 16 }} /></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Bearbeiten">
                                            <IconButton size="small" onClick={() => openEdit(t)}><EditIcon sx={{ fontSize: 16 }} /></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Löschen">
                                            <IconButton size="small" onClick={() => handleDelete(t._id)}><DeleteIcon sx={{ fontSize: 16, color: "#c53030" }} /></IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {templates.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} sx={{ textAlign: "center", py: 4, fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em" }}>
                                        Noch keine Vorlagen erstellt
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            )}

            {/* Dialog */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 0 } }}>
                <DialogTitle sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#001F3F" }}>
                    {editing ? "Vorlage bearbeiten" : "Neue Vorlage erstellen"}
                </DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap={2} mt={1}>
                        <Box display="flex" gap={2}>
                            <Box flex={2}>
                                <TextField fullWidth size="small" label="Vorlagenname *" value={templateName} onChange={e => setTemplateName(e.target.value)} sx={inputSx} />
                            </Box>
                            <Box flex={1}>
                                <TextField
                                    fullWidth size="small" label="Typ" select
                                    value={docType} onChange={e => setDocType(e.target.value)}
                                    sx={inputSx}
                                    slotProps={{ select: { native: true } }}
                                >
                                    <option value="invoice">Rechnung</option>
                                    <option value="quote">Angebot</option>
                                    <option value="confirmation">Auftragsbestätigung</option>
                                </TextField>
                            </Box>
                        </Box>

                        <TextField fullWidth size="small" label="Einleitungstext" multiline rows={2} value={introText} onChange={e => setIntroText(e.target.value)} sx={inputSx} />

                        <Divider />
                        <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
                            Standard-Positionen
                        </Typography>

                        {items.map((item, i) => (
                            <Box key={i} sx={{ display: "flex", gap: 1.5, alignItems: "center", p: 1.5, bgcolor: i % 2 === 0 ? "rgba(0,31,63,0.03)" : "transparent" }}>
                                <Box flex={3}>
                                    <TextField fullWidth size="small" label="Titel" value={item.title} onChange={e => updateItem(i, "title", e.target.value)} sx={inputSx} />
                                </Box>
                                <Box flex={1}>
                                    <TextField fullWidth size="small" label="Preis (€)" type="number" value={item.unitPrice ? (item.unitPrice / 100).toFixed(2) : ""} onChange={e => updateItem(i, "unitPrice", Math.round(parseFloat(e.target.value || "0") * 100))} sx={inputSx} />
                                </Box>
                                <Box sx={{ width: 60 }}>
                                    <TextField fullWidth size="small" label="Menge" type="number" value={item.quantity} onChange={e => updateItem(i, "quantity", parseInt(e.target.value || "1"))} sx={inputSx} />
                                </Box>
                                <IconButton size="small" onClick={() => removeItem(i)}><DeleteIcon sx={{ fontSize: 16, color: "#c53030" }} /></IconButton>
                            </Box>
                        ))}

                        <Button startIcon={<AddIcon />} onClick={addItem} sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px", color: "#001F3F", alignSelf: "flex-start" }}>
                            Position hinzufügen
                        </Button>

                        <Divider />
                        <TextField fullWidth size="small" label="Zahlungsbedingungen" multiline rows={2} value={paymentTerms} onChange={e => setPaymentTerms(e.target.value)} sx={inputSx} />
                        <TextField fullWidth size="small" label="Schlusstext" value={outroText} onChange={e => setOutroText(e.target.value)} sx={inputSx} />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={() => setDialogOpen(false)} sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}>Abbrechen</Button>
                    <Button
                        onClick={handleSave} disabled={!templateName}
                        sx={{ borderRadius: 0, bgcolor: "#001F3F", color: "#fff", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, "&:hover": { bgcolor: "#003366" }, "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" } }}
                    >
                        {editing ? "Speichern" : "Erstellen"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
