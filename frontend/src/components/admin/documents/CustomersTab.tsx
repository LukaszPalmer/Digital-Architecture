"use client";

// Kunden-Tab: Professionelles Layout mit Kundenliste, Detailansicht,
// Dokumentenhistorie und Statistiken pro Kunde.
//
// Diese Datei orchestriert nur noch — die einzelnen Teile liegen in
// ./customers/ (CustomerProfile, CustomerFormDialog, CustomerTable, ...).

import { useState, useEffect, useCallback } from "react";
import {
    Box, Button, CircularProgress, InputAdornment, Paper, TextField, Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import { ComposeEmailDialog } from "./ComposeEmailDialog";
import { SendEmailDialog } from "./SendEmailDialog";
import type { DocRecord } from "./DocumentsTab";

import { Customer, EMPTY_CUSTOMER, NAVY } from "./customers/types";
import { CustomerProfile } from "./customers/CustomerProfile";
import { CustomerFormDialog } from "./customers/CustomerFormDialog";
import { CustomerTable } from "./customers/CustomerTable";

export function CustomersTab() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editing, setEditing] = useState<Customer | null>(null);
    const [form, setForm] = useState(EMPTY_CUSTOMER);
    const [search, setSearch] = useState("");
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [customerDocs, setCustomerDocs] = useState<DocRecord[]>([]);
    const [docsLoading, setDocsLoading] = useState(false);
    const [emailCustomer, setEmailCustomer] = useState<Customer | null>(null);
    const [emailOpen, setEmailOpen] = useState(false);
    const [sendDoc, setSendDoc] = useState<DocRecord | null>(null);
    const [sendOpen, setSendOpen] = useState(false);
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
        setForm(EMPTY_CUSTOMER);
        setDialogOpen(true);
    };

    const openEdit = (c: Customer) => {
        setEditing(c);
        setForm({
            name: c.name, company: c.company, street: c.street, zip: c.zip,
            city: c.city, email: c.email, phone: c.phone, notes: c.notes,
        });
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

    const handleTogglePaid = async (doc: DocRecord) => {
        const newStatus = doc.status === "paid" ? "sent" : "paid";
        const res = await fetch(`/api/documents/docs/${doc._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
        });
        if (res.ok && selectedCustomer) {
            fetchCustomerDocs(selectedCustomer._id);
        }
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

    return (
        <Box>
            {/* Header mit Suche und "Neuer Kunde"-Button */}
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

            {/* Ausgewähltes Kundenprofil */}
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
                            onTogglePaid={handleTogglePaid}
                        />
                    )}
                </Box>
            )}

            {/* Kundenliste */}
            {loading ? (
                <Box display="flex" justifyContent="center" py={6}>
                    <CircularProgress sx={{ color: NAVY }} />
                </Box>
            ) : (
                <CustomerTable
                    customers={filtered}
                    selectedId={selectedCustomer?._id}
                    emptyMessage={search ? "Keine Kunden gefunden" : "Noch keine Kunden angelegt"}
                    onSelect={selectCustomer}
                    onEmail={openEmail}
                    onEdit={openEdit}
                    onDelete={handleDelete}
                />
            )}

            {/* Kunde anlegen / bearbeiten */}
            <CustomerFormDialog
                open={dialogOpen}
                editing={editing}
                form={form}
                onChange={setForm}
                onClose={() => setDialogOpen(false)}
                onSave={handleSave}
            />

            {/* E-Mail an Kunden verfassen */}
            {emailCustomer && (
                <ComposeEmailDialog
                    open={emailOpen}
                    onClose={() => { setEmailOpen(false); setEmailCustomer(null); }}
                    customer={emailCustomer}
                />
            )}

            {/* Dokument per E-Mail versenden */}
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
