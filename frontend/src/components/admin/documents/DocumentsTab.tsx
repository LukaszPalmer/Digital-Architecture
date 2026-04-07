"use client";

// Dokumente-Tab: Liste + Erstellen/Bearbeiten Dialog.
// Wird für Rechnungen, Angebote und Auftragsbestätigungen verwendet.

import { useState, useEffect, useCallback } from "react";
import {
    Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip, Button, Chip, CircularProgress,
} from "@mui/material";
import AddIcon          from "@mui/icons-material/Add";
import EditIcon         from "@mui/icons-material/Edit";
import DeleteIcon       from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SendIcon         from "@mui/icons-material/Send";

import { DocumentFormDialog } from "./DocumentFormDialog";
import { SendEmailDialog }    from "./SendEmailDialog";

interface CustomerRef {
    _id: string;
    email: string;
}

export type DocType = "invoice" | "quote" | "confirmation";

interface DocItem {
    position: number;
    title: string;
    description: string;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
}

export interface DocRecord {
    _id: string;
    docType: DocType;
    docNumber: string;
    status: string;
    customerId: string;
    customerName: string;
    customerCompany: string;
    customerStreet: string;
    customerZip: string;
    customerCity: string;
    customerNumber: string;
    issueDate: string;
    deliveryDate: string;
    dueDate: string;
    validUntil: string;
    items: DocItem[];
    subtotal: number;
    total: number;
    introText: string;
    outroText: string;
    paymentTerms: string;
    notes: string;
    sentAt: string | null;
    sentTo: string;
    isTemplate: boolean;
    createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
    draft:     "rgba(0,0,0,0.08)",
    sent:      "rgba(0,100,200,0.12)",
    paid:      "rgba(0,150,0,0.12)",
    overdue:   "rgba(200,50,0,0.12)",
    cancelled: "rgba(0,0,0,0.05)",
};

const STATUS_LABELS: Record<string, string> = {
    draft:     "Entwurf",
    sent:      "Versendet",
    paid:      "Bezahlt",
    overdue:   "Überfällig",
    cancelled: "Storniert",
};

function formatCurrency(cents: number): string {
    return (cents / 100).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}

function formatDate(dateStr: string): string {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("de-DE");
}

interface Props {
    docType: DocType;
    title: string;
}

export function DocumentsTab({ docType, title }: Props) {
    const [docs, setDocs]           = useState<DocRecord[]>([]);
    const [loading, setLoading]     = useState(true);
    const [formOpen, setFormOpen]   = useState(false);
    const [editing, setEditing]     = useState<DocRecord | null>(null);
    const [sendOpen, setSendOpen]   = useState(false);
    const [sendDoc, setSendDoc]     = useState<DocRecord | null>(null);
    const [customerEmails, setCustomerEmails] = useState<Record<string, string>>({});

    const fetchDocs = useCallback(async () => {
        setLoading(true);
        const res = await fetch(`/api/documents/docs?type=${docType}&template=false`);
        if (res.ok) setDocs(await res.json());
        setLoading(false);
    }, [docType]);

    // Fetch customer emails for auto-fill
    const fetchCustomerEmails = useCallback(async () => {
        const res = await fetch("/api/documents/customers");
        if (res.ok) {
            const customers: CustomerRef[] = await res.json();
            const emailMap: Record<string, string> = {};
            for (const c of customers) emailMap[c._id] = c.email;
            setCustomerEmails(emailMap);
        }
    }, []);

    useEffect(() => { fetchDocs(); fetchCustomerEmails(); }, [fetchDocs, fetchCustomerEmails]);

    const openNew = () => {
        setEditing(null);
        setFormOpen(true);
    };

    const openEdit = (d: DocRecord) => {
        setEditing(d);
        setFormOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Dokument wirklich löschen?")) return;
        await fetch(`/api/documents/docs/${id}`, { method: "DELETE" });
        fetchDocs();
    };

    const handleDownloadPDF = (id: string) => {
        window.open(`/api/documents/docs/${id}/pdf`, "_blank");
    };

    const handleOpenSend = (d: DocRecord) => {
        setSendDoc(d);
        setSendOpen(true);
    };

    const handleStatusChange = async (id: string, status: string) => {
        await fetch(`/api/documents/docs/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
        fetchDocs();
    };

    const cellSx = {
        borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 2,
        fontSize: "12px", fontFamily: "monospace",
    };

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase" }}>
                    {title} ({docs.length})
                </Typography>
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
                    Neu erstellen
                </Button>
            </Box>

            {loading ? (
                <Box display="flex" justifyContent="center" py={6}>
                    <CircularProgress sx={{ color: "#001F3F" }} />
                </Box>
            ) : (
                <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0 }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ "& th": { ...cellSx, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", fontSize: "10px" } }}>
                                <TableCell>Nummer</TableCell>
                                <TableCell>Kunde</TableCell>
                                <TableCell>Datum</TableCell>
                                <TableCell align="right">Betrag</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Aktionen</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {docs.map(d => (
                                <TableRow key={d._id} hover sx={{ "& td": cellSx }}>
                                    <TableCell>
                                        <Chip
                                            label={d.docNumber}
                                            size="small"
                                            sx={{ bgcolor: "rgba(0,31,63,0.08)", color: "#001F3F", fontFamily: "monospace", fontSize: "10px", fontWeight: 700, borderRadius: 0, height: 22 }}
                                        />
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#001F3F" }}>
                                        {d.customerCompany || d.customerName || "—"}
                                    </TableCell>
                                    <TableCell>{formatDate(d.issueDate)}</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 700, color: "#001F3F" }}>
                                        {formatCurrency(d.total)}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={STATUS_LABELS[d.status] || d.status}
                                            size="small"
                                            onClick={() => {
                                                const states = ["draft", "sent", "paid", "overdue", "cancelled"];
                                                const next = states[(states.indexOf(d.status) + 1) % states.length];
                                                handleStatusChange(d._id, next);
                                            }}
                                            sx={{
                                                bgcolor: STATUS_COLORS[d.status] || "rgba(0,0,0,0.05)",
                                                fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                                borderRadius: 0, height: 22, cursor: "pointer",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Tooltip title="PDF herunterladen">
                                            <IconButton size="small" onClick={() => handleDownloadPDF(d._id)}>
                                                <PictureAsPdfIcon sx={{ fontSize: 16, color: "#c53030" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Per E-Mail senden">
                                            <IconButton size="small" onClick={() => handleOpenSend(d)}>
                                                <SendIcon sx={{ fontSize: 16, color: "#001F3F" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Bearbeiten">
                                            <IconButton size="small" onClick={() => openEdit(d)}>
                                                <EditIcon sx={{ fontSize: 16 }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Löschen">
                                            <IconButton size="small" onClick={() => handleDelete(d._id)}>
                                                <DeleteIcon sx={{ fontSize: 16, color: "#c53030" }} />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {docs.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} sx={{ textAlign: "center", py: 4, fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em" }}>
                                        Noch keine {title} vorhanden
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            )}

            {/* Dokument erstellen/bearbeiten */}
            <DocumentFormDialog
                open={formOpen}
                onClose={() => setFormOpen(false)}
                onSaved={fetchDocs}
                docType={docType}
                editing={editing}
            />

            {/* E-Mail senden */}
            {sendDoc && (
                <SendEmailDialog
                    open={sendOpen}
                    onClose={() => { setSendOpen(false); setSendDoc(null); }}
                    onSent={fetchDocs}
                    doc={sendDoc}
                    customerEmail={customerEmails[sendDoc.customerId] || ""}
                />
            )}
        </Box>
    );
}
