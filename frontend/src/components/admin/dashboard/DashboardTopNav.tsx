"use client";

// Sticky Top-Bar des Admin Dashboards.
// Enthält: Brand, Zeitraum-Wähler, Refresh, Link → Dokumente,
// Reset-Button, Logout.

import {
    Box, Typography, Select, MenuItem, FormControl,
    IconButton, Tooltip, CircularProgress,
} from "@mui/material";
import RefreshIcon       from "@mui/icons-material/Refresh";
import LogoutIcon        from "@mui/icons-material/Logout";
import DescriptionIcon   from "@mui/icons-material/Description";
import RestartAltIcon    from "@mui/icons-material/RestartAlt";
import { signOut }       from "next-auth/react";

const BTN_SX = {
    borderRadius: 0,
    border: "1px solid rgba(255,255,255,0.2)",
    p: 0.75,
    color: "rgba(255,255,255,0.6)",
    "&:hover": { color: "#FFFFFF", borderColor: "rgba(255,255,255,0.5)" },
} as const;

const PERIODS = [
    { value: 7,  label: "Letzte 7 Tage" },
    { value: 14, label: "Letzte 14 Tage" },
    { value: 30, label: "Letzte 30 Tage" },
    { value: 90, label: "Letzte 90 Tage" },
];

interface Props {
    days:       number;
    onDays:     (n: number) => void;
    lastUpdate: Date;
    loading:    boolean;
    onRefresh:  () => void;
    onReset:    () => void;
}

export function DashboardTopNav({
    days, onDays, lastUpdate, loading, onRefresh, onReset,
}: Props) {
    return (
        <Box
            sx={{
                position: "sticky", top: 0, zIndex: 100,
                bgcolor: "#001F3F",
                px: { xs: 2, md: 4 }, py: 1.5,
                display: "flex", alignItems: "center", justifyContent: "space-between",
            }}
        >
            {/* ── Brand + Stand ────────────────────────────────────── */}
            <Box display="flex" alignItems="center" gap={2}>
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px", fontWeight: 900, letterSpacing: "0.15em",
                            color: "#FFFFFF", textTransform: "uppercase", lineHeight: 1,
                        }}
                    >
                        Palmer Digital
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "8px", fontFamily: "monospace", letterSpacing: "0.35em",
                            color: "rgba(255,255,255,0.4)", textTransform: "uppercase",
                        }}
                    >
                        Analytics
                    </Typography>
                </Box>
                <Box sx={{ width: "1px", height: 28, bgcolor: "rgba(255,255,255,0.15)", mx: 0.5 }} />
                <Typography
                    sx={{
                        fontSize: "10px", fontFamily: "monospace",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.15em", textTransform: "uppercase",
                    }}
                >
                    Stand: {lastUpdate.toLocaleTimeString("de-DE")}
                </Typography>
                {loading && (
                    <CircularProgress size={12} sx={{ color: "rgba(255,255,255,0.4)", ml: 1 }} />
                )}
            </Box>

            {/* ── Actions ──────────────────────────────────────────── */}
            <Box display="flex" alignItems="center" gap={1.5}>
                <FormControl size="small">
                    <Select
                        value={days}
                        onChange={e => onDays(Number(e.target.value))}
                        sx={{
                            fontSize: "11px", fontFamily: "monospace", borderRadius: 0,
                            minWidth: 150, color: "#FFFFFF",
                            "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.2)" },
                            "& .MuiSvgIcon-root": { color: "rgba(255,255,255,0.5)" },
                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.4)" },
                        }}
                    >
                        {PERIODS.map(p => (
                            <MenuItem key={p.value} value={p.value}
                                      sx={{ fontSize: "11px", fontFamily: "monospace" }}>
                                {p.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Tooltip title="Aktualisieren">
                    <IconButton onClick={onRefresh} size="small" sx={BTN_SX}>
                        <RefreshIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Dokumente / Rechnungswesen">
                    <IconButton href="/admin/documents" size="small" sx={BTN_SX}>
                        <DescriptionIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Analytics zurücksetzen (alle Daten auf 0)">
                    <IconButton
                        onClick={onReset}
                        size="small"
                        sx={{
                            ...BTN_SX,
                            "&:hover": {
                                color: "#FF6B6B",
                                borderColor: "rgba(255,107,107,0.6)",
                            },
                        }}
                    >
                        <RestartAltIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Abmelden">
                    <IconButton
                        onClick={() => signOut({ callbackUrl: "/admin/login" })}
                        size="small"
                        sx={BTN_SX}
                    >
                        <LogoutIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
}
