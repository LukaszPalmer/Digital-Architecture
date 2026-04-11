"use client";

// Bestätigungs-Dialog für den Analytics-Reset.
// Löscht serverseitig alle PageView-Rohdaten und lädt das Dashboard neu.

import { useState } from "react";
import {
    Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions,
    Button, Alert,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

interface Props {
    open:    boolean;
    onClose: () => void;
    onDone:  () => void;
}

export function ResetDialog({ open, onClose, onDone }: Props) {
    const [loading, setLoading] = useState(false);
    const [error,   setError]   = useState("");
    const [done,    setDone]    = useState(false);

    async function handleReset() {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/analytics/reset", { method: "POST" });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || "Zurücksetzen fehlgeschlagen.");
            } else {
                setDone(true);
                setTimeout(() => {
                    setDone(false);
                    onDone();
                }, 1200);
            }
        } catch {
            setError("Netzwerkfehler.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog
            open={open}
            onClose={() => !loading && onClose()}
            maxWidth="xs"
            fullWidth
            slotProps={{ paper: { sx: { borderRadius: 0 } } }}
        >
            <DialogTitle sx={{ pb: 1, display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{
                    width: 36, height: 36, bgcolor: "#C83200", display: "flex",
                    alignItems: "center", justifyContent: "center",
                }}>
                    <WarningAmberIcon sx={{ fontSize: 18, color: "#fff" }} />
                </Box>
                <Box>
                    <Typography sx={{
                        fontFamily: "monospace", fontSize: "12px", fontWeight: 700,
                        letterSpacing: "0.2em", textTransform: "uppercase", color: "#001F3F",
                    }}>
                        Analytics zurücksetzen
                    </Typography>
                    <Typography sx={{
                        fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)",
                    }}>
                        Alle Tracking-Daten werden gelöscht
                    </Typography>
                </Box>
            </DialogTitle>

            <DialogContent>
                <Typography sx={{ fontSize: "13px", color: "rgba(0,0,0,0.7)", mb: 2 }}>
                    Diese Aktion löscht <strong>alle Pageviews, Sessions, Events und
                    Leads</strong>. Das Dashboard zeigt danach wieder alle Werte auf{" "}
                    <code>0</code>. Neue Besuche werden weiterhin gezählt.
                </Typography>
                <Alert severity="warning" sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}>
                    Diese Aktion kann nicht rückgängig gemacht werden.
                </Alert>
                {error && <Alert severity="error"   sx={{ borderRadius: 0, mt: 2 }}>{error}</Alert>}
                {done  && <Alert severity="success" sx={{ borderRadius: 0, mt: 2 }}>
                    Zurücksetzung erfolgreich. Dashboard wird neu geladen…
                </Alert>}
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button
                    onClick={onClose}
                    disabled={loading}
                    sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}
                >
                    Abbrechen
                </Button>
                <Button
                    onClick={handleReset}
                    disabled={loading || done}
                    sx={{
                        borderRadius: 0, bgcolor: "#C83200", color: "#fff",
                        fontFamily: "monospace", fontSize: "11px", fontWeight: 700, px: 3,
                        "&:hover":   { bgcolor: "#a02800" },
                        "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" },
                    }}
                >
                    {loading ? "Wird zurückgesetzt…" : "Ja, alles löschen"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
