"use client";

// src/app/admin/documents/page.tsx
// Hauptseite für Rechnungswesen — 4 Tabs.

import { useState } from "react";
import { signOut } from "next-auth/react";
import {
    Box, Typography, Tabs, Tab, IconButton, Tooltip,
    Dialog, DialogTitle, DialogContent, DialogActions, Button, Alert,
} from "@mui/material";
import LogoutIcon       from "@mui/icons-material/Logout";
import DashboardIcon    from "@mui/icons-material/Dashboard";
import RestartAltIcon   from "@mui/icons-material/RestartAlt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import { CustomersTab }      from "@/components/admin/documents/CustomersTab";
import { DocumentsTab }      from "@/components/admin/documents/DocumentsTab";

const TABS = [
    { label: "Kunden",                 key: "customers" },
    { label: "Rechnungen",             key: "invoices" },
    { label: "Angebote",               key: "quotes" },
    { label: "Auftragsbestätigungen",  key: "confirmations" },
] as const;

type TabKey = typeof TABS[number]["key"];

export default function DocumentsPage() {
    const [activeTab, setActiveTab] = useState<TabKey>("customers");
    const [resetOpen, setResetOpen]       = useState(false);
    const [resetLoading, setResetLoading] = useState(false);
    const [resetError, setResetError]     = useState("");
    const [resetDone, setResetDone]       = useState(false);

    const handleReset = async () => {
        setResetLoading(true);
        setResetError("");
        try {
            const res = await fetch("/api/documents/reset", { method: "POST" });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setResetError(data.error || "Zurücksetzen fehlgeschlagen.");
            } else {
                setResetDone(true);
                setTimeout(() => {
                    setResetOpen(false);
                    setResetDone(false);
                    // Seite neu laden, damit alle Tabs die frischen (leeren)
                    // Listen vom Server holen.
                    window.location.reload();
                }, 1500);
            }
        } catch {
            setResetError("Netzwerkfehler.");
        } finally {
            setResetLoading(false);
        }
    };

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#F7F7F7", fontFamily: "var(--font-geist-sans)" }}>

            {/* ── TOP NAV ── */}
            <Box sx={{
                position: "sticky", top: 0, zIndex: 100,
                bgcolor: "#001F3F",
                px: { xs: 2, md: 4 }, py: 1.5,
                display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
                <Box display="flex" alignItems="center" gap={2}>
                    <Box>
                        <Typography sx={{
                            fontSize: "14px", fontWeight: 900, letterSpacing: "0.15em",
                            color: "#FFFFFF", textTransform: "uppercase", lineHeight: 1,
                        }}>
                            Palmer Digital
                        </Typography>
                        <Typography sx={{
                            fontSize: "8px", fontFamily: "monospace", letterSpacing: "0.35em",
                            color: "rgba(255,255,255,0.4)", textTransform: "uppercase",
                        }}>
                            Rechnungswesen
                        </Typography>
                    </Box>
                </Box>

                <Box display="flex" alignItems="center" gap={1.5}>
                    <Tooltip title="Dashboard">
                        <IconButton
                            href="/admin/dashboard"
                            size="small"
                            sx={{
                                borderRadius: 0, border: "1px solid rgba(255,255,255,0.2)",
                                p: 0.75, color: "rgba(255,255,255,0.6)",
                                "&:hover": { color: "#FFFFFF", borderColor: "rgba(255,255,255,0.5)" },
                            }}
                        >
                            <DashboardIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Alle Daten zurücksetzen">
                        <IconButton
                            onClick={() => setResetOpen(true)}
                            size="small"
                            sx={{
                                borderRadius: 0, border: "1px solid rgba(255,255,255,0.2)",
                                p: 0.75, color: "rgba(255,255,255,0.6)",
                                "&:hover": { color: "#FF6B6B", borderColor: "rgba(255,107,107,0.6)" },
                            }}
                        >
                            <RestartAltIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Abmelden">
                        <IconButton
                            onClick={() => signOut({ callbackUrl: "/admin/login" })}
                            size="small"
                            sx={{
                                borderRadius: 0, border: "1px solid rgba(255,255,255,0.2)",
                                p: 0.75, color: "rgba(255,255,255,0.6)",
                                "&:hover": { color: "#FFFFFF", borderColor: "rgba(255,255,255,0.5)" },
                            }}
                        >
                            <LogoutIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            {/* ── TABS ── */}
            <Box sx={{
                bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(0,0,0,0.08)",
                px: { xs: 2, md: 4 },
            }}>
                <Tabs
                    value={TABS.findIndex(t => t.key === activeTab)}
                    onChange={(_, i) => setActiveTab(TABS[i].key)}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        minHeight: 44,
                        "& .MuiTab-root": {
                            fontSize: "11px", fontFamily: "monospace", fontWeight: 700,
                            letterSpacing: "0.1em", textTransform: "uppercase",
                            minHeight: 44, color: "rgba(0,0,0,0.4)",
                        },
                        "& .Mui-selected": { color: "#001F3F !important" },
                        "& .MuiTabs-indicator": { bgcolor: "#001F3F", height: 2 },
                    }}
                >
                    {TABS.map(tab => (
                        <Tab key={tab.key} label={tab.label} />
                    ))}
                </Tabs>
            </Box>

            {/* ── CONTENT ── */}
            <Box sx={{ px: { xs: 2, md: 4 }, py: 3, maxWidth: 1440, mx: "auto" }}>
                {activeTab === "customers"     && <CustomersTab />}
                {activeTab === "invoices"       && <DocumentsTab docType="invoice" title="Rechnungen" />}
                {activeTab === "quotes"         && <DocumentsTab docType="quote" title="Angebote" />}
                {activeTab === "confirmations"  && <DocumentsTab docType="confirmation" title="Auftragsbestätigungen" />}
            </Box>

            {/* ── RESET-BESTÄTIGUNGSDIALOG ── */}
            <Dialog
                open={resetOpen}
                onClose={() => !resetLoading && setResetOpen(false)}
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
                            Alles zurücksetzen
                        </Typography>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)" }}>
                            Kunden, Dokumente und Zähler
                        </Typography>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Typography sx={{ fontSize: "13px", color: "rgba(0,0,0,0.7)", mb: 2 }}>
                        Diese Aktion löscht <strong>alle Kunden, Rechnungen, Angebote und
                        Auftragsbestätigungen</strong> und setzt die fortlaufenden Nummern
                        zurück. Der nächste Kunde startet wieder bei <code>KD-{new Date().getFullYear()}-0001</code>,
                        und jede neue Rechnung/Angebot/AB startet pro Kunde bei <code>0001</code>.
                    </Typography>
                    <Alert severity="warning" sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}>
                        Diese Aktion kann nicht rückgängig gemacht werden.
                    </Alert>
                    {resetError && (
                        <Alert severity="error" sx={{ borderRadius: 0, mt: 2 }}>{resetError}</Alert>
                    )}
                    {resetDone && (
                        <Alert severity="success" sx={{ borderRadius: 0, mt: 2 }}>
                            Zurücksetzung erfolgreich. Seite wird neu geladen…
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button
                        onClick={() => setResetOpen(false)}
                        disabled={resetLoading}
                        sx={{ borderRadius: 0, fontFamily: "monospace", fontSize: "11px" }}
                    >
                        Abbrechen
                    </Button>
                    <Button
                        onClick={handleReset}
                        disabled={resetLoading || resetDone}
                        sx={{
                            borderRadius: 0, bgcolor: "#C83200", color: "#fff",
                            fontFamily: "monospace", fontSize: "11px", fontWeight: 700, px: 3,
                            "&:hover": { bgcolor: "#a02800" },
                            "&:disabled": { bgcolor: "rgba(0,0,0,0.1)" },
                        }}
                    >
                        {resetLoading ? "Wird zurückgesetzt…" : "Ja, alles löschen"}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
