"use client";

// Übersichts-Tabelle der Kundenliste.

import {
    Box, Chip, IconButton, Paper, Table, TableBody, TableCell, TableHead,
    TableRow, Tooltip, Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Customer } from "./types";
import { NAVY } from "./types";

const cellSx = {
    borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 2,
    fontSize: "12px", fontFamily: "monospace",
};

interface Props {
    customers: Customer[];
    selectedId?: string | null;
    emptyMessage: string;
    onSelect: (c: Customer) => void;
    onEmail: (c: Customer) => void;
    onEdit: (c: Customer) => void;
    onDelete: (id: string) => void;
}

export function CustomerTable({
    customers, selectedId, emptyMessage, onSelect, onEmail, onEdit, onDelete,
}: Props) {
    return (
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
                    {customers.map(c => (
                        <TableRow
                            key={c._id}
                            hover
                            sx={{
                                "& td": cellSx,
                                cursor: "pointer",
                                bgcolor: selectedId === c._id ? "rgba(0,31,63,0.04)" : "transparent",
                                transition: "background-color 0.15s",
                                "&:hover": { bgcolor: "rgba(0,31,63,0.03)" },
                            }}
                            onClick={() => onSelect(c)}
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
                                    <IconButton size="small" onClick={() => onEmail(c)}>
                                        <EmailIcon sx={{ fontSize: 16, color: NAVY }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Bearbeiten">
                                    <IconButton size="small" onClick={() => onEdit(c)}>
                                        <EditIcon sx={{ fontSize: 16 }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Löschen">
                                    <IconButton size="small" onClick={() => onDelete(c._id)}>
                                        <DeleteIcon sx={{ fontSize: 16, color: "#c53030" }} />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                    {customers.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={6} sx={{ textAlign: "center", py: 4, fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em" }}>
                                <Typography component="span">{emptyMessage}</Typography>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Paper>
    );
}
