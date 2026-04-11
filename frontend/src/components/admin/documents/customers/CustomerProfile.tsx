"use client";

// Kundenprofil: Header, Kennzahlen, Kontaktdaten und Dokumentenliste.

import { useState } from "react";
import {
    Box, Button, Chip, Divider, Grid, IconButton, Paper, Tooltip, Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import EuroIcon from "@mui/icons-material/Euro";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DescriptionIcon from "@mui/icons-material/Description";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SendIcon from "@mui/icons-material/Send";

import type { DocRecord } from "../DocumentsTab";
import {
    Customer, NAVY, TYPE_LABELS, TYPE_ICONS, STATUS_LABELS, STATUS_COLORS,
    formatCurrency, formatDate,
} from "./types";
import { StatCard } from "./StatCard";
import { InvoiceStatusDialog } from "./InvoiceStatusDialog";

interface Props {
    customer: Customer;
    docs: DocRecord[];
    onEmail: () => void;
    onEdit: () => void;
    onClose: () => void;
    onSendDoc: (doc: DocRecord) => void;
    onTogglePaid: (doc: DocRecord) => void;
}

export function CustomerProfile({
    customer, docs, onEmail, onEdit, onClose, onSendDoc, onTogglePaid,
}: Props) {
    const [openInvoicesDialog, setOpenInvoicesDialog] = useState(false);
    const [paidInvoicesDialog, setPaidInvoicesDialog] = useState(false);

    const invoices = docs.filter(d => d.docType === "invoice");
    const quotes = docs.filter(d => d.docType === "quote");
    const confirmations = docs.filter(d => d.docType === "confirmation");

    const paidInvoices = invoices.filter(d => d.status === "paid");
    const totalRevenue = paidInvoices.reduce((sum, d) => sum + d.total, 0);

    const openInvoices = invoices.filter(d => d.status === "sent" || d.status === "overdue");
    const totalOpen = openInvoices.reduce((sum, d) => sum + d.total, 0);

    const totalAll = invoices.reduce((sum, d) => sum + d.total, 0);

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
                        <StatCard
                            label="Umsatz (bezahlt)"
                            value={formatCurrency(totalRevenue)}
                            sub={paidInvoices.length > 0 ? `${paidInvoices.length} bezahlt — Klicken zum Rückgängig` : undefined}
                            icon={EuroIcon}
                            color="#009600"
                            onClick={paidInvoices.length > 0 ? () => setPaidInvoicesDialog(true) : undefined}
                        />
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <StatCard
                            label="Offen"
                            value={formatCurrency(totalOpen)}
                            sub={openInvoices.length > 0 ? `${openInvoices.length} offen — Klicken zum Markieren` : undefined}
                            icon={TrendingUpIcon}
                            color="#C83200"
                            onClick={openInvoices.length > 0 ? () => setOpenInvoicesDialog(true) : undefined}
                        />
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

            <InvoiceStatusDialog
                open={openInvoicesDialog}
                onClose={() => setOpenInvoicesDialog(false)}
                mode="markPaid"
                invoices={openInvoices}
                onToggle={onTogglePaid}
            />
            <InvoiceStatusDialog
                open={paidInvoicesDialog}
                onClose={() => setPaidInvoicesDialog(false)}
                mode="markOpen"
                invoices={paidInvoices}
                onToggle={onTogglePaid}
            />
        </Paper>
    );
}
