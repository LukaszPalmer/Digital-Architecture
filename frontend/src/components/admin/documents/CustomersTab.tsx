"use client";

// Kunden-Tab: Liste mit E-Mail-Aktion, Erstellen, Bearbeiten, Detailansicht.

import { useState, useEffect, useCallback, Fragment } from "react";
import {
    Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip, Button, TextField, Dialog, DialogTitle, DialogContent,
    DialogActions, CircularProgress, Chip, Collapse, InputAdornment,
} from "@mui/material";
import AddIcon        from "@mui/icons-material/Add";
import EditIcon       from "@mui/icons-material/Edit";
import DeleteIcon     from "@mui/icons-material/Delete";
import EmailIcon      from "@mui/icons-material/Email";
import SearchIcon     from "@mui/icons-material/Search";
import PersonIcon     from "@mui/icons-material/Person";
import BusinessIcon   from "@mui/icons-material/Business";
import PhoneIcon      from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotesIcon      from "@mui/icons-material/Notes";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon   from "@mui/icons-material/KeyboardArrowUp";

import { ComposeEmailDialog } from "./ComposeEmailDialog";

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

const EMPTY: Omit<Customer, "_id" | "customerNumber"> = {
    name: "", company: "", street: "", zip: "", city: "",
    email: "", phone: "", notes: "",
};

// ── Customer Detail Row ────────────────────────────────────────────────────

function CustomerDetailRow({ customer }: { customer: Customer }) {
    return (
        <Box sx={{ display: "flex", gap: 4, py: 2, px: 1 }}>
            <Box display="flex" flexDirection="column" gap={1.2} flex={1}>
                <Box display="flex" alignItems="center" gap={1}>
                    <PersonIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                        Name
                    </Typography>
                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#001F3F", ml: "auto" }}>
                        {customer.name}
                    </Typography>
                </Box>
                {customer.company && (
                    <Box display="flex" alignItems="center" gap={1}>
                        <BusinessIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                            Firma
                        </Typography>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 600, color: "#001F3F", ml: "auto" }}>
                            {customer.company}
                        </Typography>
                    </Box>
                )}
                <Box display="flex" alignItems="center" gap={1}>
                    <LocationOnIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                        Adresse
                    </Typography>
                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "#001F3F", ml: "auto", textAlign: "right" }}>
                        {customer.street}, {customer.zip} {customer.city}
                    </Typography>
                </Box>
            </Box>

            <Box display="flex" flexDirection="column" gap={1.2} flex={1}>
                <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                        E-Mail
                    </Typography>
                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, color: "#001F3F", ml: "auto" }}>
                        {customer.email}
                    </Typography>
                </Box>
                {customer.phone && (
                    <Box display="flex" alignItems="center" gap={1}>
                        <PhoneIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)" }} />
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                            Telefon
                        </Typography>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "#001F3F", ml: "auto" }}>
                            {customer.phone}
                        </Typography>
                    </Box>
                )}
                {customer.notes && (
                    <Box display="flex" alignItems="flex-start" gap={1}>
                        <NotesIcon sx={{ fontSize: 14, color: "rgba(0,0,0,0.3)", mt: 0.2 }} />
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                            Notizen
                        </Typography>
                        <Typography sx={{
                            fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.6)",
                            ml: "auto", textAlign: "right", whiteSpace: "pre-wrap", maxWidth: 200,
                        }}>
                            {customer.notes}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

// ── Main CustomersTab ──────────────────────────────────────────────────────

export function CustomersTab() {
    const [customers, setCustomers]     = useState<Customer[]>([]);
    const [loading, setLoading]         = useState(true);
    const [dialogOpen, setDialogOpen]   = useState(false);
    const [editing, setEditing]         = useState<Customer | null>(null);
    const [form, setForm]               = useState(EMPTY);
    const [search, setSearch]           = useState("");
    const [expandedId, setExpandedId]   = useState<string | null>(null);
    const [emailCustomer, setEmailCustomer] = useState<Customer | null>(null);
    const [emailOpen, setEmailOpen]     = useState(false);

    const fetchCustomers = useCallback(async () => {
        setLoading(true);
        const res = await fetch("/api/documents/customers");
        if (res.ok) setCustomers(await res.json());
        setLoading(false);
    }, []);

    useEffect(() => { fetchCustomers(); }, [fetchCustomers]);

    const openNew = () => {
        setEditing(null);
        setForm(EMPTY);
        setDialogOpen(true);
    };

    const openEdit = (c: Customer) => {
        setEditing(c);
        setForm({ name: c.name, company: c.company, street: c.street, zip: c.zip, city: c.city, email: c.email, phone: c.phone, notes: c.notes });
        setDialogOpen(true);
    };

    const handleSave = async () => {
        if (editing) {
            await fetch(`/api/documents/customers/${editing._id}`, {
                method: "PUT", headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
        } else {
            await fetch("/api/documents/customers", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
        }
        setDialogOpen(false);
        fetchCustomers();
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Kunde wirklich löschen?")) return;
        await fetch(`/api/documents/customers/${id}`, { method: "DELETE" });
        fetchCustomers();
    };

    const openEmail = (c: Customer) => {
        setEmailCustomer(c);
        setEmailOpen(true);
    };

    const toggleExpand = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    // Filter customers
    const filtered = customers.filter(c => {
        if (!search) return true;
        const q = search.toLowerCase();
        return (
            c.name.toLowerCase().includes(q) ||
            c.company.toLowerCase().includes(q) ||
            c.email.toLowerCase().includes(q) ||
            c.customerNumber.toLowerCase().includes(q) ||
            c.city.toLowerCase().includes(q)
        );
    });

    const field = (label: string, key: keyof typeof EMPTY, options?: { multiline?: boolean; type?: string; placeholder?: string }) => (
        <TextField
            fullWidth size="small" label={label}
            multiline={options?.multiline} rows={options?.multiline ? 3 : 1}
            type={options?.type || "text"}
            placeholder={options?.placeholder}
            value={form[key]} onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0, fontFamily: "monospace", fontSize: "13px" } }}
        />
    );

    const cellSx = {
        borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 2,
        fontSize: "12px", fontFamily: "monospace",
        whiteSpace: "nowrap" as const,
        overflow: "hidden",
        textOverflow: "ellipsis",
    };

    /* Fixed column widths for consistent alignment */
    const colWidths = {
        expand:  40,
        kdNr:    100,
        name:    "22%",
        firma:   "22%",
        email:   "24%",
        city:    "14%",
        actions: 120,
    };

    return (
        <Box>
            {/* Header with search and add button */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} gap={2}>
                <Box display="flex" alignItems="center" gap={2} flex={1}>
                    <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                        Kundenstamm ({filtered.length})
                    </Typography>
                    <TextField
                        size="small"
                        placeholder="Suchen..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon sx={{ fontSize: 16, color: "rgba(0,0,0,0.3)" }} />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{
                            maxWidth: 280,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 0, fontFamily: "monospace", fontSize: "12px",
                                height: 34,
                            },
                        }}
                    />
                </Box>
                <Button
                    startIcon={<AddIcon />}
                    onClick={openNew}
                    sx={{
                        borderRadius: 0, bgcolor: "#001F3F", color: "#fff",
                        fontSize: "11px", fontFamily: "monospace", fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase", px: 3,
                        "&:hover": { bgcolor: "#003366" },
                    }}
                >
                    Neuer Kunde
                </Button>
            </Box>

            {loading ? (
                <Box display="flex" justifyContent="center" py={6}>
                    <CircularProgress sx={{ color: "#001F3F" }} />
                </Box>
            ) : (
                <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, overflowX: "auto" }}>
                    <Table size="small" sx={{ tableLayout: "fixed", minWidth: 720 }}>
                        <colgroup>
                            <col style={{ width: colWidths.expand }} />
                            <col style={{ width: colWidths.kdNr }} />
                            <col style={{ width: colWidths.name }} />
                            <col style={{ width: colWidths.firma }} />
                            <col style={{ width: colWidths.email }} />
                            <col style={{ width: colWidths.city }} />
                            <col style={{ width: colWidths.actions }} />
                        </colgroup>
                        <TableHead>
                            <TableRow sx={{ "& th": { ...cellSx, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", fontSize: "10px", bgcolor: "rgba(0,31,63,0.02)" } }}>
                                <TableCell />
                                <TableCell>KD-Nr.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Firma</TableCell>
                                <TableCell>E-Mail</TableCell>
                                <TableCell>Stadt</TableCell>
                                <TableCell align="right">Aktionen</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filtered.map(c => (
                                <Fragment key={c._id}>
                                    <TableRow
                                        hover
                                        sx={{
                                            "& td": cellSx,
                                            cursor: "pointer",
                                            bgcolor: expandedId === c._id ? "rgba(0,31,63,0.02)" : "transparent",
                                            transition: "background-color 0.15s",
                                        }}
                                        onClick={() => toggleExpand(c._id)}
                                    >
                                        <TableCell sx={{ px: 1, textAlign: "center" }}>
                                            <IconButton size="small" sx={{ p: 0.3 }}>
                                                {expandedId === c._id
                                                    ? <KeyboardArrowUpIcon sx={{ fontSize: 16, color: "rgba(0,0,0,0.3)" }} />
                                                    : <KeyboardArrowDownIcon sx={{ fontSize: 16, color: "rgba(0,0,0,0.3)" }} />
                                                }
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                label={c.customerNumber}
                                                size="small"
                                                sx={{ bgcolor: "rgba(0,31,63,0.08)", color: "#001F3F", fontFamily: "monospace", fontSize: "10px", fontWeight: 700, borderRadius: 0, height: 22 }}
                                            />
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: 600, color: "#001F3F" }}>{c.name}</TableCell>
                                        <TableCell sx={{ color: "rgba(0,0,0,0.55)" }}>{c.company || "—"}</TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center" gap={0.5} sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                                                <EmailIcon sx={{ fontSize: 12, color: "rgba(0,0,0,0.25)", flexShrink: 0 }} />
                                                <Box component="span" sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>{c.email}</Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>{c.city}</TableCell>
                                        <TableCell align="right" onClick={e => e.stopPropagation()} sx={{ whiteSpace: "nowrap" }}>
                                            <Tooltip title="E-Mail senden">
                                                <IconButton size="small" onClick={() => openEmail(c)}>
                                                    <EmailIcon sx={{ fontSize: 16, color: "#001F3F" }} />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Bearbeiten">
                                                <IconButton size="small" onClick={() => openEdit(c)}>
                                                    <EditIcon sx={{ fontSize: 16 }} />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Löschen">
                                                <IconButton size="small" onClick={() => handleDelete(c._id)}>
                                                    <DeleteIcon sx={{ fontSize: 16, color: "#c53030" }} />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>

                                    {/* Expandable detail — full-width row below */}
                                    <TableRow>
                                        <TableCell
                                            colSpan={7}
                                            sx={{
                                                py: 0, px: 0,
                                                borderBottom: expandedId === c._id ? "1px solid rgba(0,0,0,0.06)" : "none",
                                            }}
                                        >
                                            <Collapse in={expandedId === c._id} timeout="auto" unmountOnExit>
                                                <Box sx={{
                                                    py: 2, px: 3,
                                                    bgcolor: "rgba(0,31,63,0.015)",
                                                    borderLeft: "3px solid #001F3F",
                                                    mx: 2, my: 1,
                                                }}>
                                                    <CustomerDetailRow customer={c} />

                                                    {/* Quick action bar */}
                                                    <Box display="flex" gap={1} mt={2} pt={2} borderTop="1px solid rgba(0,0,0,0.06)">
                                                        <Button
                                                            startIcon={<EmailIcon />}
                                                            onClick={() => openEmail(c)}
                                                            size="small"
                                                            sx={{
                                                                borderRadius: 0, bgcolor: "#001F3F", color: "#fff",
                                                                fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                                                letterSpacing: "0.05em", textTransform: "uppercase",
                                                                "&:hover": { bgcolor: "#003366" },
                                                            }}
                                                        >
                                                            E-Mail senden
                                                        </Button>
                                                        <Button
                                                            startIcon={<EditIcon />}
                                                            onClick={() => openEdit(c)}
                                                            size="small"
                                                            sx={{
                                                                borderRadius: 0, border: "1px solid rgba(0,0,0,0.15)",
                                                                fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                                                letterSpacing: "0.05em", textTransform: "uppercase",
                                                                color: "#001F3F",
                                                            }}
                                                        >
                                                            Bearbeiten
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Collapse>
                                        </TableCell>
                                    </TableRow>
                                </Fragment>
                            ))}
                            {filtered.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={7} sx={{ textAlign: "center", py: 4, fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em" }}>
                                        {search ? "Keine Kunden gefunden" : "Noch keine Kunden angelegt"}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            )}

            {/* ── Dialog: Erstellen / Bearbeiten ── */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth slotProps={{ paper: { sx: { borderRadius: 0 } } }}>
                <DialogTitle sx={{ pb: 1, display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box sx={{
                        width: 36, height: 36, bgcolor: "#001F3F", display: "flex",
                        alignItems: "center", justifyContent: "center",
                    }}>
                        <PersonIcon sx={{ fontSize: 18, color: "#fff" }} />
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: "monospace", fontSize: "12px", fontWeight: 700,
                            letterSpacing: "0.2em", textTransform: "uppercase", color: "#001F3F",
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
                        {/* Contact section */}
                        <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mt: 1 }}>
                            Kontaktdaten
                        </Typography>
                        {field("Name *", "name")}
                        {field("Firma", "company")}

                        {/* Address section */}
                        <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mt: 1 }}>
                            Adresse
                        </Typography>
                        {field("Straße *", "street")}
                        <Box display="flex" gap={2}>
                            <Box flex={1}>{field("PLZ *", "zip")}</Box>
                            <Box flex={2}>{field("Stadt *", "city")}</Box>
                        </Box>

                        {/* Communication section */}
                        <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mt: 1 }}>
                            Kommunikation
                        </Typography>
                        {field("E-Mail *", "email", { type: "email", placeholder: "kunde@beispiel.de" })}

                        {/* Email info hint */}
                        <Box sx={{
                            display: "flex", alignItems: "center", gap: 1,
                            py: 1, px: 1.5, bgcolor: "rgba(0,100,200,0.04)",
                            border: "1px solid rgba(0,100,200,0.1)",
                            mt: -1,
                        }}>
                            <EmailIcon sx={{ fontSize: 14, color: "rgba(0,100,200,0.5)" }} />
                            <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.45)" }}>
                                Diese E-Mail wird als Empfänger-Adresse beim Versand von Dokumenten und Nachrichten verwendet.
                            </Typography>
                        </Box>

                        {field("Telefon", "phone")}

                        {/* Notes */}
                        <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mt: 1 }}>
                            Sonstiges
                        </Typography>
                        {field("Notizen", "notes", { multiline: true })}
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button onClick={() => setDialogOpen(false)} sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}>
                        Abbrechen
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={!form.name || !form.street || !form.zip || !form.city || !form.email}
                        sx={{
                            borderRadius: 0, bgcolor: "#001F3F", color: "#fff",
                            fontFamily: "monospace", fontSize: "11px", fontWeight: 700,
                            px: 3,
                            "&:hover": { bgcolor: "#003366" }, "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" },
                        }}
                    >
                        {editing ? "Speichern" : "Anlegen"}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* ── ComposeEmailDialog ── */}
            {emailCustomer && (
                <ComposeEmailDialog
                    open={emailOpen}
                    onClose={() => { setEmailOpen(false); setEmailCustomer(null); }}
                    customer={emailCustomer}
                />
            )}
        </Box>
    );
}
