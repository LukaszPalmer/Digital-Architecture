"use client";

// Dialog zum Umschalten des Rechnungs-Status (offen <-> bezahlt).
// Wird zweimal instanziiert: einmal für offene, einmal für bezahlte Rechnungen.

import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UndoIcon from "@mui/icons-material/Undo";
import type { DocRecord } from "../DocumentsTab";
import { NAVY, formatCurrency, formatDate } from "./types";

interface Props {
    open: boolean;
    onClose: () => void;
    mode: "markPaid" | "markOpen";
    invoices: DocRecord[];
    onToggle: (doc: DocRecord) => void;
}

export function InvoiceStatusDialog({ open, onClose, mode, invoices, onToggle }: Props) {
    const isMarkPaid = mode === "markPaid";
    const title = isMarkPaid
        ? `Offene Rechnungen (${invoices.length})`
        : `Bezahlte Rechnungen (${invoices.length})`;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            slotProps={{ paper: { sx: { borderRadius: 0 } } }}
        >
            <DialogTitle sx={{
                fontFamily: "monospace", fontSize: "12px", fontWeight: 800,
                letterSpacing: "0.15em", textTransform: "uppercase", color: NAVY,
                borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}>
                {title}
            </DialogTitle>
            <DialogContent sx={{ p: 0 }}>
                {invoices.length === 0 ? (
                    <Box sx={{ py: 5, textAlign: "center" }}>
                        {isMarkPaid && <CheckCircleIcon sx={{ fontSize: 40, color: "#009600", mb: 1 }} />}
                        <Typography sx={{ fontFamily: "monospace", fontSize: "12px", color: "rgba(0,0,0,0.5)" }}>
                            {isMarkPaid ? "Alle Rechnungen sind bezahlt!" : "Keine bezahlten Rechnungen vorhanden."}
                        </Typography>
                    </Box>
                ) : (
                    <Box>
                        {invoices.map((doc) => (
                            <Box
                                key={doc._id}
                                sx={{
                                    px: 3, py: 2, display: "flex", alignItems: "center", gap: 2,
                                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                                    "&:last-child": { borderBottom: "none" },
                                }}
                            >
                                <Box flex={1} minWidth={0}>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <Chip label={doc.docNumber} size="small" sx={{
                                            bgcolor: "rgba(0,31,63,0.06)", color: NAVY,
                                            fontFamily: "monospace", fontSize: "9px", fontWeight: 700,
                                            borderRadius: 0, height: 18,
                                        }} />
                                        <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)" }}>
                                            {formatDate(doc.issueDate)}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ fontFamily: "monospace", fontSize: "14px", fontWeight: 700, color: NAVY, mt: 0.5 }}>
                                        {formatCurrency(doc.total)}
                                    </Typography>
                                </Box>
                                <Button
                                    size="small"
                                    startIcon={isMarkPaid
                                        ? <CheckCircleIcon sx={{ fontSize: 16 }} />
                                        : <UndoIcon sx={{ fontSize: 16 }} />}
                                    onClick={() => onToggle(doc)}
                                    sx={{
                                        borderRadius: 0,
                                        bgcolor: isMarkPaid ? "#009600" : "#C83200", color: "#fff",
                                        fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                        letterSpacing: "0.05em", textTransform: "uppercase", px: 2,
                                        "&:hover": { bgcolor: isMarkPaid ? "#007a00" : "#a02800" },
                                    }}
                                >
                                    {isMarkPaid ? "Bezahlt" : "Offen"}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                )}
            </DialogContent>
            <DialogActions sx={{ borderTop: "1px solid rgba(0,0,0,0.08)", px: 2, py: 1.5 }}>
                <Button
                    onClick={onClose}
                    sx={{
                        borderRadius: 0, fontFamily: "monospace", fontSize: "10px",
                        fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase",
                        color: "rgba(0,0,0,0.6)",
                    }}
                >
                    Schließen
                </Button>
            </DialogActions>
        </Dialog>
    );
}
