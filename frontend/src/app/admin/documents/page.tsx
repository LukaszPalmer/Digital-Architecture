"use client";

// src/app/admin/documents/page.tsx
// Hauptseite für Rechnungswesen — 5 Tabs.

import { useState } from "react";
import { signOut } from "next-auth/react";
import {
    Box, Typography, Tabs, Tab, IconButton, Tooltip,
} from "@mui/material";
import LogoutIcon       from "@mui/icons-material/Logout";
import DashboardIcon    from "@mui/icons-material/Dashboard";

import { CustomersTab }      from "@/components/admin/documents/CustomersTab";
import { DocumentsTab }      from "@/components/admin/documents/DocumentsTab";
import { TemplatesTab }       from "@/components/admin/documents/TemplatesTab";

const TABS = [
    { label: "Kunden",                 key: "customers" },
    { label: "Rechnungen",             key: "invoices" },
    { label: "Angebote",               key: "quotes" },
    { label: "Auftragsbestätigungen",  key: "confirmations" },
    { label: "Vorlagen",               key: "templates" },
] as const;

type TabKey = typeof TABS[number]["key"];

export default function DocumentsPage() {
    const [activeTab, setActiveTab] = useState<TabKey>("customers");

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
                {activeTab === "templates"      && <TemplatesTab />}
            </Box>
        </Box>
    );
}
