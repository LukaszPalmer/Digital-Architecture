"use client";

// Kunden-Tab: Professionelles Layout mit Kundenliste, Detailansicht,
// Dokumentenhistorie und Statistiken pro Kunde.

import { useState, useEffect, useCallback, Fragment } from "react";
import {
    Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip, Button, TextField, Dialog, DialogTitle, DialogContent,
    DialogActions, CircularProgress, Chip, Collapse, InputAdornment, Grid,
    LinearProgress, Divider,
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
import ReceiptIcon    from "@mui/icons-material/Receipt";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SendIcon       from "@mui/icons-material/Send";
import EuroIcon       from "@mui/icons-material/Euro";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon   from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";

import { ComposeEmailDialog } from "./ComposeEmailDialog";
import { SendEmailDialog } from "./SendEmailDialog";
import type { DocRecord } from "./DocumentsTab";

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
    createdAt?: string;
}

const EMPTY: Omit<Customer, "_id" | "customerNumber" | "createdAt"> = {
    name: "", company: "", street: "", zip: "", city: "",
    email: "", phone: "", notes: "",
};

const NAVY = "#001F3F";

const TYPE_LABELS: Record<string, string> = {
    invoice: "Rechnung",
    quote: "Angebot",
    confirmation: "Auftragsbestätigung",
};

const TYPE_ICONS: Record<string, typeof ReceiptIcon> = {
    invoice: ReceiptIcon,
    quote: DescriptionIcon,
    confirmation: AssignmentIcon,
};

const STATUS_LABELS: Record<string, string> = {
    draft: "Entwurf", sent: "Versendet", paid: "Bezahlt",
    overdue: "Überfällig", cancelled: "Storniert",
};

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
    draft:     { bg: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.5)" },
    sent:      { bg: "rgba(0,100,200,0.1)", color: "#0064C8" },
    paid:      { bg: "rgba(0,150,0,0.1)", color: "#009600" },
    overdue:   { bg: "rgba(200,50,0,0.1)", color: "#C83200" },
    cancelled: { bg: "rgba(0,0,0,0.04)", color: "rgba(0,0,0,0.35)" },
};

function formatCurrency(cents: number): string {
    return (cents / 100).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

function formatDate(dateStr: string): string {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("de-DE");
}

// ── Stat Card ──────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, icon: Icon, color }: {
    label: string; value: string; sub?: string;
    icon: typeof EuroIcon; color: string;
}) {
    return (
        <Paper elevation={0} sx={{
            border: "1px solid rgba(0,0,0,0.08)", borderRadius: 0,
            p: 2, display: "flex", alignItems: "flex-start", gap: 1.5,
            transition: "border-color 0.2s",
            "&:hover": { borderColor: "rgba(0,31,63,0.2)" },
        }}>
            <Box sx={{
                width: 36, height: 36, bgcolor: `${color}15`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
                <Icon sx={{ fontSize: 18, color }} />
            </Box>
            <Box>
                <Typography sx={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
                    {label}
                </Typography>
                <Typography sx={{ fontFamily: "monospace", fontSize: "18px", fontWeight: 900, color: NAVY, lineHeight: 1.2, mt: 0.3 }}>
                    {value}
                </Typography>
                {sub && (
                    <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)", mt: 0.3 }}>
                        {sub}
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}

// ── Customer Profile Panel ─────────────────────────────────────────────────

function CustomerProfile({ customer, docs, onEmail, onEdit, onClose, onSendDoc }: {
    customer: Customer;
    docs: DocRecord[];
    onEmail: () => void;
    onEdit: () => void;
    onClose: () => void;
    onSendDoc: (doc: DocRecord) => void;
}) {
    const invoices = docs.filter(d => d.docType === "invoice");
    const quotes = docs.filter(d => d.docType === "quote");
    const confirmations = docs.filter(d => d.docType === "confirmation");

    const totalRevenue = invoices
        .filter(d => d.status === "paid")
        .reduce((sum, d) => sum + d.total, 0);

    const totalOpen = invoices
        .filter(d => d.status === "sent" || d.status === "overdue")
        .reduce((sum, d) => sum + d.total, 0);

    const totalAll = docs.reduce((sum, d) => sum + d.total, 0);

    return (
        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 0, overflow: "hidden" }}>
            {/* Profile Header */}
            <Box sx={{ bgcolor: NAVY, px: 3, py: 2.5, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box display="flex" alignItems="center" gap={2}>
                    <Box sx={{ width: 44, height: 44, bgcolor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", mr: 2 }}>
                        <PersonIcon sx={{ fontSize: 22, color: "rgba(255,255,255,0.7)" }} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: "15px", fontWeight: 800, color: "#fff", letterSpacing: "0.03em" }}>
                            {customer.company || customer.name}
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1} mt={0.3}>
                            <Chip label={customer.customerNumber} size="small" sx={{
                                bgcolor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)",
                                fontFamily: "monospace", fontSize: "10px", fontWeight: 700, borderRadius: 0, height: 20,
                            }} />
                            {customer.company && (
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
                                    {customer.name}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>
                <IconButton onClick={onClose} sx={{ color: "rgba(255,255,255,0.5)", "&:hover": { color: "#fff" } }}>
                    <CloseIcon sx={{ fontSize: 18 }} />
                </IconButton>
            </Box>

            {/* Stats Row */}
            <Box sx={{ px: 3, py: 2, bgcolor: "rgba(0,31,63,0.02)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <StatCard label="Umsatz (bezahlt)" value={formatCurrency(totalRevenue)} icon={EuroIcon} color="#009600" />
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <StatCard label="Offen" value={formatCurrency(totalOpen)} icon={TrendingUpIcon} color="#C83200" />
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <StatCard label="Dokumente" value={String(docs.length)} sub={`${invoices.length} RE / ${quotes.length} AN / ${confirmations.length} AB`} icon={DescriptionIcon} color={NAVY} />
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <StatCard label="Gesamtvolumen" value={formatCurrency(totalAll)} icon={ReceiptIcon} color="#6B46C1" />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ display: "flex" }}>
                {/* Left: Contact Info */}
                <Box sx={{ width: 280, flexShrink: 0, borderRight: "1px solid rgba(0,0,0,0.06)", p: 3 }}>
                    <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mb: 2 }}>
                        Kontaktdaten
                    </Typography>

                    <Box display="flex" flexDirection="column" gap={1.8}>
                        <Box display="flex" alignItems="center" gap={1.5}>
                            <LocationOnIcon sx={{ fontSize: 16, color: "rgba(0,0,0,0.25)" }} />
                            <Box>
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: NAVY, fontWeight: 600 }}>
                                    {customer.street}
                                </Typography>
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)" }}>
                                    {customer.zip} {customer.city}
                                </Typography>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" gap={1.5}>
                            <EmailIcon sx={{ fontSize: 16, color: "rgba(0,0,0,0.25)" }} />
                            <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: NAVY, fontWeight: 600 }}>
                                {customer.email}
                            </Typography>
                        </Box>

                        {customer.phone && (
                            <Box display="flex" alignItems="center" gap={1.5}>
                                <PhoneIcon sx={{ fontSize: 16, color: "rgba(0,0,0,0.25)" }} />
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.6)" }}>
                                    {customer.phone}
                                </Typography>
                            </Box>
                        )}

                        {customer.createdAt && (
                            <Box display="flex" alignItems="center" gap={1.5}>
                                <CalendarTodayIcon sx={{ fontSize: 16, color: "rgba(0,0,0,0.25)" }} />
                                <Box>
                                    <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.35)" }}>
                                        Kunde seit
                                    </Typography>
                                    <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.6)" }}>
                                        {formatDate(customer.createdAt)}
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>

                    {customer.notes && (
                        <>
                            <Divider sx={{ my: 2 }} />
                            <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mb: 1 }}>
                                Notizen
                            </Typography>
                            <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.5)", whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
                                {customer.notes}
                            </Typography>
                        </>
                    )}

                    <Divider sx={{ my: 2 }} />

                    {/* Quick Actions */}
                    <Box display="flex" flexDirection="column" gap={1}>
                        <Button
                            startIcon={<EmailIcon />} fullWidth onClick={onEmail}
                            sx={{
                                borderRadius: 0, bgcolor: NAVY, color: "#fff", justifyContent: "flex-start",
                                fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                letterSpacing: "0.05em", textTransform: "uppercase",
                                "&:hover": { bgcolor: "#003366" },
                            }}
                        >
                            E-Mail senden
                        </Button>
                        <Button
                            startIcon={<EditIcon />} fullWidth onClick={onEdit}
                            sx={{
                                borderRadius: 0, border: "1px solid rgba(0,0,0,0.12)", justifyContent: "flex-start",
                                fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                letterSpacing: "0.05em", textTransform: "uppercase", color: NAVY,
                            }}
                        >
                            Bearbeiten
                        </Button>
                    </Box>
                </Box>

                {/* Right: Document History */}
                <Box sx={{ flex: 1, p: 3 }}>
                    <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", mb: 2 }}>
                        Dienstleistungen & Dokumente ({docs.length})
                    </Typography>

                    {docs.length === 0 ? (
                        <Box sx={{ py: 4, textAlign: "center" }}>
                            <DescriptionIcon sx={{ fontSize: 32, color: "rgba(0,0,0,0.1)", mb: 1 }} />
                            <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.3)" }}>
                                Noch keine Dokumente vorhanden
                            </Typography>
                        </Box>
                    ) : (
                        <Box display="flex" flexDirection="column" gap={1}>
                            {docs.map((doc) => {
                                const Icon = TYPE_ICONS[doc.docType] || DescriptionIcon;
                                const statusStyle = STATUS_COLORS[doc.status] || STATUS_COLORS.draft;
                                return (
                                    <Paper key={doc._id} elevation={0} sx={{
                                        border: "1px solid rgba(0,0,0,0.06)", borderRadius: 0,
                                        p: 1.5, display: "flex", alignItems: "center", gap: 1.5,
                                        transition: "all 0.15s",
                                        "&:hover": { borderColor: "rgba(0,31,63,0.15)", bgcolor: "rgba(0,31,63,0.01)" },
                                    }}>
                                        <Box sx={{
                                            width: 32, height: 32,
                                            bgcolor: "rgba(0,31,63,0.05)", display: "flex",
                                            alignItems: "center", justifyContent: "center", flexShrink: 0,
                                        }}>
                                            <Icon sx={{ fontSize: 16, color: NAVY }} />
                                        </Box>

                                        <Box flex={1} minWidth={0}>
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Chip label={doc.docNumber} size="small" sx={{
                                                    bgcolor: "rgba(0,31,63,0.06)", color: NAVY,
                                                    fontFamily: "monospace", fontSize: "9px", fontWeight: 700, borderRadius: 0, height: 18,
                                                }} />
                                                <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)" }}>
                                                    {TYPE_LABELS[doc.docType]}
                                                </Typography>
                                            </Box>
                                            <Box display="flex" alignItems="center" gap={1} mt={0.3}>
                                                {doc.items.slice(0, 2).map((item, i) => (
                                                    <Typography key={i} sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.5)" }}>
                                                        {item.title}{i < Math.min(doc.items.length, 2) - 1 ? "," : ""}
                                                    </Typography>
                                                ))}
                                                {doc.items.length > 2 && (
                                                    <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.3)" }}>
                                                        +{doc.items.length - 2} weitere
                                                    </Typography>
                                                )}
                                            </Box>
                                        </Box>

                                        <Box textAlign="right" sx={{ minWidth: 80 }}>
                                            <Typography sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, color: NAVY }}>
                                                {formatCurrency(doc.total)}
                                            </Typography>
                                            <Typography sx={{ fontFamily: "monospace", fontSize: "9px", color: "rgba(0,0,0,0.35)" }}>
                                                {formatDate(doc.issueDate)}
                                            </Typography>
                                        </Box>

                                        <Chip
                                            label={STATUS_LABELS[doc.status] || doc.status}
                                            size="small"
                                            sx={{
                                                bgcolor: statusStyle.bg, color: statusStyle.color,
                                                fontFamily: "monospace", fontSize: "9px", fontWeight: 700,
                                                borderRadius: 0, height: 20, minWidth: 70,
                                            }}
                                        />

                                        <Box display="flex" gap={0.3}>
                                            <Tooltip title="PDF">
                                                <IconButton size="small" onClick={() => window.open(`/api/documents/docs/${doc._id}/pdf`, "_blank")}>
                                                    <PictureAsPdfIcon sx={{ fontSize: 14, color: "#c53030" }} />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Senden">
                                                <IconButton size="small" onClick={() => onSendDoc(doc)}>
                                                    <SendIcon sx={{ fontSize: 14, color: NAVY }} />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </Paper>
                                );
                            })}
                        </Box>
                    )}
                </Box>
            </Box>
        </Paper>
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
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [customerDocs, setCustomerDocs]         = useState<DocRecord[]>([]);
    const [docsLoading, setDocsLoading]           = useState(false);
    const [emailCustomer, setEmailCustomer]       = useState<Customer | null>(null);
    const [emailOpen, setEmailOpen]     = useState(false);
    const [sendDoc, setSendDoc]         = useState<DocRecord | null>(null);
    const [sendOpen, setSendOpen]       = useState(false);
    const [customerEmails, setCustomerEmails] = useState<Record<string, string>>({});

    const fetchCustomers = useCallback(async () => {
        setLoading(true);
        const res = await fetch("/api/documents/customers");
        if (res.ok) {
            const data = await res.json();
            setCustomers(data);
            const emailMap: Record<string, string> = {};
            for (const c of data) emailMap[c._id] = c.email;
            setCustomerEmails(emailMap);
        }
        setLoading(false);
    }, []);

    useEffect(() => { fetchCustomers(); }, [fetchCustomers]);

    const fetchCustomerDocs = useCallback(async (customerId: string) => {
        setDocsLoading(true);
        const res = await fetch(`/api/documents/customers/${customerId}/docs`);
        if (res.ok) setCustomerDocs(await res.json());
        setDocsLoading(false);
    }, []);

    const selectCustomer = (c: Customer) => {
        setSelectedCustomer(c);
        fetchCustomerDocs(c._id);
    };

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
        if (selectedCustomer?._id === id) setSelectedCustomer(null);
        fetchCustomers();
    };

    const openEmail = (c: Customer) => {
        setEmailCustomer(c);
        setEmailOpen(true);
    };

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
    };

    return (
        <Box>
            {/* Header with search and add button */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2.5} gap={2}>
                <Box display="flex" alignItems="center" gap={2} flex={1}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box sx={{ width: 32, height: 32, bgcolor: NAVY, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <PersonIcon sx={{ fontSize: 16, color: "#fff" }} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: "12px", fontFamily: "monospace", fontWeight: 800, letterSpacing: "0.15em", color: NAVY, textTransform: "uppercase", lineHeight: 1 }}>
                                Kundenstamm
                            </Typography>
                            <Typography sx={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(0,0,0,0.35)" }}>
                                {filtered.length} {filtered.length === 1 ? "Kunde" : "Kunden"}
                            </Typography>
                        </Box>
                    </Box>
                    <TextField
                        size="small"
                        placeholder="Suchen nach Name, Firma, E-Mail, KD-Nr..."
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
                            maxWidth: 340,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: 0, fontFamily: "monospace", fontSize: "12px",
                                height: 36,
                            },
                        }}
                    />
                </Box>
                <Button
                    startIcon={<AddIcon />}
                    onClick={openNew}
                    sx={{
                        borderRadius: 0, bgcolor: NAVY, color: "#fff",
                        fontSize: "11px", fontFamily: "monospace", fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase", px: 3, height: 36,
                        "&:hover": { bgcolor: "#003366" },
                    }}
                >
                    Neuer Kunde
                </Button>
            </Box>

            {/* Selected Customer Profile */}
            {selectedCustomer && (
                <Box mb={3}>
                    {docsLoading ? (
                        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 0, p: 4 }}>
                            <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                                <CircularProgress size={20} sx={{ color: NAVY }} />
                                <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.4)" }}>
                                    Lade Kundenprofil...
                                </Typography>
                            </Box>
                        </Paper>
                    ) : (
                        <CustomerProfile
                            customer={selectedCustomer}
                            docs={customerDocs}
                            onEmail={() => openEmail(selectedCustomer)}
                            onEdit={() => openEdit(selectedCustomer)}
                            onClose={() => setSelectedCustomer(null)}
                            onSendDoc={(doc) => { setSendDoc(doc); setSendOpen(true); }}
                        />
                    )}
                </Box>
            )}

            {/* Customer Table */}
            {loading ? (
                <Box display="flex" justifyContent="center" py={6}>
                    <CircularProgress sx={{ color: NAVY }} />
                </Box>
            ) : (
                <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, overflowX: "auto" }}>
                    <Table size="small" sx={{ minWidth: 700 }}>
                        <TableHead>
                            <TableRow sx={{ "& th": { ...cellSx, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", fontSize: "10px", bgcolor: "rgba(0,31,63,0.02)" } }}>
                                <TableCell sx={{ width: 100 }}>KD-Nr.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Firma</TableCell>
                                <TableCell>E-Mail</TableCell>
                                <TableCell sx={{ width: 100 }}>Stadt</TableCell>
                                <TableCell align="right" sx={{ width: 140 }}>Aktionen</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filtered.map(c => (
                                <TableRow
                                    key={c._id}
                                    hover
                                    sx={{
                                        "& td": cellSx,
                                        cursor: "pointer",
                                        bgcolor: selectedCustomer?._id === c._id ? "rgba(0,31,63,0.04)" : "transparent",
                                        transition: "background-color 0.15s",
                                        "&:hover": { bgcolor: "rgba(0,31,63,0.03)" },
                                    }}
                                    onClick={() => selectCustomer(c)}
                                >
                                    <TableCell>
                                        <Chip
                                            label={c.customerNumber}
                                            size="small"
                                            sx={{ bgcolor: "rgba(0,31,63,0.08)", color: NAVY, fontFamily: "monospace", fontSize: "10px", fontWeight: 700, borderRadius: 0, height: 22 }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: NAVY }}>{c.name}</TableCell>
                                    <TableCell>{c.company || "—"}</TableCell>
                                    <TableCell>
                                        <Box display="flex" alignItems="center" gap={0.5}>
                                            <EmailIcon sx={{ fontSize: 12, color: "rgba(0,0,0,0.25)" }} />
                                            {c.email}
                                        </Box>
                                    </TableCell>
                                    <TableCell>{c.city}</TableCell>
                                    <TableCell align="right" onClick={e => e.stopPropagation()}>
                                        <Tooltip title="E-Mail senden">
                                            <IconButton size="small" onClick={() => openEmail(c)}>
                                                <EmailIcon sx={{ fontSize: 16, color: NAVY }} />
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
                            ))}
                            {filtered.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} sx={{ textAlign: "center", py: 4, fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em" }}>
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
                    <Button onClick={() => setDialogOpen(false)} sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}>
                        Abbrechen
                    </Button>
                    <Button
                        onClick={handleSave}
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

            {/* ── ComposeEmailDialog ── */}
            {emailCustomer && (
                <ComposeEmailDialog
                    open={emailOpen}
                    onClose={() => { setEmailOpen(false); setEmailCustomer(null); }}
                    customer={emailCustomer}
                />
            )}

            {/* ── SendEmailDialog for doc from profile ── */}
            {sendDoc && (
                <SendEmailDialog
                    open={sendOpen}
                    onClose={() => { setSendOpen(false); setSendDoc(null); }}
                    onSent={() => { if (selectedCustomer) fetchCustomerDocs(selectedCustomer._id); }}
                    doc={sendDoc}
                    customerEmail={customerEmails[sendDoc.customerId] || ""}
                />
            )}
        </Box>
    );
}
