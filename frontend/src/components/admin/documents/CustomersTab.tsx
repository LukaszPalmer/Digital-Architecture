"use client";

// Kunden-Tab: Liste, Erstellen, Bearbeiten.

import { useState, useEffect, useCallback } from "react";
import {
    Box, Typography, Paper, Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip, Button, TextField, Dialog, DialogTitle, DialogContent,
    DialogActions, CircularProgress, Chip,
} from "@mui/material";
import AddIcon    from "@mui/icons-material/Add";
import EditIcon   from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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

export function CustomersTab() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading]     = useState(true);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editing, setEditing]     = useState<Customer | null>(null);
    const [form, setForm]           = useState(EMPTY);

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

    const field = (label: string, key: keyof typeof EMPTY, multiline = false) => (
        <TextField
            fullWidth size="small" label={label} multiline={multiline} rows={multiline ? 3 : 1}
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
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase" }}>
                    Bestehende Kunden ({customers.length})
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
                    Neuer Kunde
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
                                <TableCell>KD-Nr.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Firma</TableCell>
                                <TableCell>E-Mail</TableCell>
                                <TableCell>Stadt</TableCell>
                                <TableCell align="right">Aktionen</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map(c => (
                                <TableRow key={c._id} hover sx={{ "& td": cellSx }}>
                                    <TableCell>
                                        <Chip label={c.customerNumber} size="small" sx={{ bgcolor: "rgba(0,31,63,0.08)", color: "#001F3F", fontFamily: "monospace", fontSize: "10px", fontWeight: 700, borderRadius: 0, height: 22 }} />
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: 600, color: "#001F3F" }}>{c.name}</TableCell>
                                    <TableCell>{c.company || "—"}</TableCell>
                                    <TableCell>{c.email}</TableCell>
                                    <TableCell>{c.city}</TableCell>
                                    <TableCell align="right">
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
                            {customers.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={6} sx={{ textAlign: "center", py: 4, fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em" }}>
                                        Noch keine Kunden angelegt
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            )}

            {/* ── Dialog: Erstellen / Bearbeiten ── */}
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 0 } }}>
                <DialogTitle sx={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#001F3F" }}>
                    {editing ? "Kunde bearbeiten" : "Neuen Kunden anlegen"}
                </DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap={2} mt={1}>
                        {field("Name *", "name")}
                        {field("Firma", "company")}
                        {field("Straße *", "street")}
                        <Box display="flex" gap={2}>
                            <Box flex={1}>{field("PLZ *", "zip")}</Box>
                            <Box flex={2}>{field("Stadt *", "city")}</Box>
                        </Box>
                        {field("E-Mail *", "email")}
                        {field("Telefon", "phone")}
                        {field("Notizen", "notes", true)}
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
                            "&:hover": { bgcolor: "#003366" }, "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" },
                        }}
                    >
                        {editing ? "Speichern" : "Anlegen"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
