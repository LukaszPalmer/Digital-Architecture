"use client";

// src/app/admin/dashboard/page.tsx
// Analytics Dashboard — MUI + MUI X Charts.

import { useState, useEffect, useCallback } from "react";
import { signOut } from "next-auth/react";
import {
    Box, Grid, Typography, Select, MenuItem, FormControl,
    Paper, Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip, CircularProgress, Divider,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import RefreshIcon from "@mui/icons-material/Refresh";
import { StatCard }        from "@/components/admin/StatCard";
import { LineChartWidget } from "@/components/admin/charts/LineChart";
import { BarChartWidget }  from "@/components/admin/charts/BarChart";
import { PieChartWidget }  from "@/components/admin/charts/PieChart";

interface AnalyticsData {
    overview:          { totalPageviews: number; uniqueSessions: number; avgDuration: number; period: number };
    topPages:          { page: string; count: number }[];
    devices:           { name: string; value: number }[];
    browsers:          { name: string; value: number }[];
    os:                { name: string; value: number }[];
    referrers:         { name: string; count: number }[];
    countries:         { name: string; count: number }[];
    events:            { name: string; count: number }[];
    pageviewsOverTime: { date: string; count: number }[];
}

const PERIOD_OPTIONS = [
    { label: "Letzte 7 Tage",  value: 7 },
    { label: "Letzte 30 Tage", value: 30 },
    { label: "Letzte 90 Tage", value: 90 },
];

function formatDuration(seconds: number): string {
    if (seconds < 60) return `${seconds}s`;
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

export default function DashboardPage() {
    const [days, setDays]       = useState(30);
    const [data, setData]       = useState<AnalyticsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/analytics?days=${days}`);
            if (res.ok) {
                setData(await res.json());
                setLastUpdate(new Date());
            }
        } finally {
            setLoading(false);
        }
    }, [days]);

    useEffect(() => { fetchData(); }, [fetchData]);

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#FAFAFA", fontFamily: "var(--font-geist-sans)" }}>

            {/* ── TOP NAV ── */}
            <Box
                sx={{
                    position: "sticky", top: 0, zIndex: 100,
                    bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(0,0,0,0.10)",
                    px: { xs: 2, md: 4 }, py: 1.5,
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
            >
                <Box display="flex" alignItems="center" gap={1.5}>
                    <Box>
                        <Typography sx={{ fontSize: "16px", fontWeight: 900, letterSpacing: "-0.03em", color: "#001F3F", textTransform: "uppercase", lineHeight: 1 }}>
                            PALMER
                        </Typography>
                        <Typography sx={{ fontSize: "8px", fontFamily: "monospace", letterSpacing: "0.3em", color: "rgba(0,31,63,0.45)", textTransform: "uppercase" }}>
                            Analytics
                        </Typography>
                    </Box>
                    <Box sx={{ width: "1px", height: 28, bgcolor: "rgba(0,0,0,0.10)", mx: 1 }} />
                    <Typography sx={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(0,0,0,0.4)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                        Zuletzt: {lastUpdate.toLocaleTimeString("de-DE")}
                    </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                    <FormControl size="small">
                        <Select
                            value={days}
                            onChange={e => setDays(Number(e.target.value))}
                            sx={{ fontSize: "11px", fontFamily: "monospace", borderRadius: 0, minWidth: 150, "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(0,0,0,0.15)" } }}
                        >
                            {PERIOD_OPTIONS.map(o => (
                                <MenuItem key={o.value} value={o.value} sx={{ fontSize: "11px", fontFamily: "monospace" }}>
                                    {o.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Tooltip title="Aktualisieren">
                        <IconButton onClick={fetchData} size="small" sx={{ borderRadius: 0, border: "1px solid rgba(0,0,0,0.12)", p: 0.75 }}>
                            <RefreshIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Abmelden">
                        <IconButton onClick={() => signOut({ callbackUrl: "/admin/login" })} size="small" sx={{ borderRadius: 0, border: "1px solid rgba(0,0,0,0.12)", p: 0.75 }}>
                            <LogoutIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            {/* ── CONTENT ── */}
            <Box sx={{ px: { xs: 2, md: 4 }, py: 4, maxWidth: 1440, mx: "auto" }}>

                {loading && !data ? (
                    <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
                        <CircularProgress sx={{ color: "#001F3F" }} />
                    </Box>
                ) : data ? (
                    <Box display="flex" flexDirection="column" gap={4}>

                        {/* ── SECTION LABEL ── */}
                        <Box display="flex" alignItems="center" gap={2}>
                            <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase" }}>
                                [ Overview — Letzte {days} Tage ]
                            </Typography>
                            <Divider sx={{ flex: 1 }} />
                        </Box>

                        {/* ── KPI CARDS ── */}
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <StatCard label="Pageviews" value={data.overview.totalPageviews.toLocaleString("de-DE")} sub="Gesamt im Zeitraum" accent />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <StatCard label="Unique Sessions" value={data.overview.uniqueSessions.toLocaleString("de-DE")} sub="Individuelle Besucher" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <StatCard label="Ø Verweildauer" value={formatDuration(data.overview.avgDuration)} sub="Pro Session" />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <StatCard label="Top Event" value={data.events[0]?.name ?? "—"} sub={`${data.events[0]?.count ?? 0} mal`} />
                            </Grid>
                        </Grid>

                        {/* ── PAGEVIEWS OVER TIME ── */}
                        <Box display="flex" alignItems="center" gap={2}>
                            <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase" }}>
                                [ Traffic Verlauf ]
                            </Typography>
                            <Divider sx={{ flex: 1 }} />
                        </Box>
                        <LineChartWidget title="Pageviews pro Tag" data={data.pageviewsOverTime} />

                        {/* ── DEVICES + BROWSERS ── */}
                        <Box display="flex" alignItems="center" gap={2}>
                            <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase" }}>
                                [ Geräte & Browser ]
                            </Typography>
                            <Divider sx={{ flex: 1 }} />
                        </Box>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget title="Gerätetyp" data={data.devices} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget title="Browser" data={data.browsers} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget title="Betriebssystem" data={data.os} />
                            </Grid>
                        </Grid>

                        {/* ── TRAFFIC SOURCES + COUNTRIES ── */}
                        <Box display="flex" alignItems="center" gap={2}>
                            <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase" }}>
                                [ Herkunft ]
                            </Typography>
                            <Divider sx={{ flex: 1 }} />
                        </Box>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <BarChartWidget title="Traffic-Quellen" data={data.referrers} color="#001F3F" />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <BarChartWidget title="Länder" data={data.countries} color="#003d7a" />
                            </Grid>
                        </Grid>

                        {/* ── TOP PAGES + EVENTS ── */}
                        <Box display="flex" alignItems="center" gap={2}>
                            <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase" }}>
                                [ Top Content & Events ]
                            </Typography>
                            <Divider sx={{ flex: 1 }} />
                        </Box>
                        <Grid container spacing={2}>
                            {/* Top Pages Table */}
                            <Grid size={{ xs: 12, md: 7 }}>
                                <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0 }}>
                                    <Box px={3} pt={2.5} pb={1}>
                                        <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                                            Top Seiten
                                        </Typography>
                                    </Box>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow sx={{ "& th": { borderColor: "rgba(0,0,0,0.08)", fontSize: "10px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", py: 1.5 } }}>
                                                <TableCell>#</TableCell>
                                                <TableCell>Seite</TableCell>
                                                <TableCell align="right">Aufrufe</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.topPages.map((p, i) => (
                                                <TableRow key={p.page} hover sx={{ "& td": { borderColor: "rgba(0,0,0,0.06)", py: 1.2 } }}>
                                                    <TableCell sx={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(0,0,0,0.35)", width: 32 }}>
                                                        {String(i + 1).padStart(2, "0")}
                                                    </TableCell>
                                                    <TableCell sx={{ fontSize: "12px", fontWeight: 600, color: "#001F3F" }}>
                                                        {p.page}
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontSize: "12px", fontWeight: 700 }}>
                                                        {p.count.toLocaleString("de-DE")}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Grid>

                            {/* Events Table */}
                            <Grid size={{ xs: 12, md: 5 }}>
                                <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0 }}>
                                    <Box px={3} pt={2.5} pb={1}>
                                        <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                                            Events
                                        </Typography>
                                    </Box>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow sx={{ "& th": { borderColor: "rgba(0,0,0,0.08)", fontSize: "10px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", py: 1.5 } }}>
                                                <TableCell>Event</TableCell>
                                                <TableCell align="right">Anzahl</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.events.map(ev => (
                                                <TableRow key={ev.name} hover sx={{ "& td": { borderColor: "rgba(0,0,0,0.06)", py: 1.2 } }}>
                                                    <TableCell sx={{ fontSize: "12px", fontWeight: 600, color: "#001F3F", fontFamily: "monospace" }}>
                                                        {ev.name}
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontSize: "12px", fontWeight: 700 }}>
                                                        {ev.count.toLocaleString("de-DE")}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Grid>
                        </Grid>

                    </Box>
                ) : (
                    <Box display="flex" justifyContent="center" py={8}>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                            Noch keine Daten vorhanden
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
