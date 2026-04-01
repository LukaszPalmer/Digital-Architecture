"use client";

// src/app/admin/dashboard/page.tsx
// Analytics Dashboard — MUI + MUI X Charts.

import { useState, useEffect, useCallback } from "react";
import { signOut } from "next-auth/react";
import {
    Box, Grid, Typography, Select, MenuItem, FormControl,
    Paper, Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip, CircularProgress, Divider, LinearProgress,
} from "@mui/material";
import LogoutIcon   from "@mui/icons-material/Logout";
import RefreshIcon  from "@mui/icons-material/Refresh";
import TrendingUpIcon   from "@mui/icons-material/TrendingUp";
import PeopleAltIcon    from "@mui/icons-material/PeopleAlt";
import TimerIcon        from "@mui/icons-material/Timer";
import BoltIcon         from "@mui/icons-material/Bolt";
import { StatCard }        from "@/components/admin/StatCard";
import { LineChartWidget } from "@/components/admin/charts/LineChart";
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

// Section header helper
function SectionLabel({ label }: { label: string }) {
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Typography sx={{
                fontSize: "9px", fontFamily: "monospace", fontWeight: 700,
                letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase",
                whiteSpace: "nowrap",
            }}>
                {label}
            </Typography>
            <Divider sx={{ flex: 1 }} />
        </Box>
    );
}

// Top-pages bar (visual bar instead of plain table)
function TopPagesPanel({ data }: { data: { page: string; count: number }[] }) {
    const max = data[0]?.count ?? 1;
    return (
        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%" }}>
            <Box px={3} pt={2.5} pb={1.5}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                    Top Seiten
                </Typography>
            </Box>
            <Box px={3} pb={2.5} display="flex" flexDirection="column" gap={1.5}>
                {data.slice(0, 8).map((p, i) => (
                    <Box key={p.page}>
                        <Box display="flex" justifyContent="space-between" mb={0.5}>
                            <Typography sx={{ fontSize: "11px", fontWeight: 600, color: "#001F3F", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "70%" }}>
                                <span style={{ color: "rgba(0,0,0,0.25)", marginRight: 8 }}>{String(i + 1).padStart(2, "0")}</span>
                                {p.page}
                            </Typography>
                            <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#001F3F", fontFamily: "monospace" }}>
                                {p.count.toLocaleString("de-DE")}
                            </Typography>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={(p.count / max) * 100}
                            sx={{
                                height: 3, borderRadius: 0,
                                bgcolor: "rgba(0,31,63,0.07)",
                                "& .MuiLinearProgress-bar": {
                                    bgcolor: i === 0 ? "#001F3F" : `rgba(0,31,63,${0.75 - i * 0.08})`,
                                    borderRadius: 0,
                                },
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}

// Events panel
function EventsPanel({ data }: { data: { name: string; count: number }[] }) {
    const max = data[0]?.count ?? 1;
    return (
        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%" }}>
            <Box px={3} pt={2.5} pb={1.5}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                    Events
                </Typography>
            </Box>
            <Table size="small">
                <TableHead>
                    <TableRow sx={{ "& th": { borderColor: "rgba(0,0,0,0.08)", fontSize: "10px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", py: 1.5, px: 3 } }}>
                        <TableCell>Event</TableCell>
                        <TableCell align="right">Anzahl</TableCell>
                        <TableCell sx={{ width: 80 }} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(ev => (
                        <TableRow key={ev.name} hover sx={{ "& td": { borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 3 } }}>
                            <TableCell sx={{ fontSize: "12px", fontWeight: 600, color: "#001F3F", fontFamily: "monospace" }}>
                                {ev.name}
                            </TableCell>
                            <TableCell align="right" sx={{ fontSize: "12px", fontWeight: 700 }}>
                                {ev.count.toLocaleString("de-DE")}
                            </TableCell>
                            <TableCell>
                                <LinearProgress
                                    variant="determinate"
                                    value={(ev.count / max) * 100}
                                    sx={{
                                        height: 3, borderRadius: 0,
                                        bgcolor: "rgba(0,31,63,0.07)",
                                        "& .MuiLinearProgress-bar": { bgcolor: "#001F3F", borderRadius: 0 },
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default function DashboardPage() {
    const [days, setDays]             = useState(30);
    const [data, setData]             = useState<AnalyticsData | null>(null);
    const [loading, setLoading]       = useState(true);
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
                        <Typography sx={{ fontSize: "14px", fontWeight: 900, letterSpacing: "0.15em", color: "#FFFFFF", textTransform: "uppercase", lineHeight: 1 }}>
                            PALMER
                        </Typography>
                        <Typography sx={{ fontSize: "8px", fontFamily: "monospace", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
                            Analytics
                        </Typography>
                    </Box>
                    <Box sx={{ width: "1px", height: 28, bgcolor: "rgba(255,255,255,0.15)", mx: 0.5 }} />
                    <Typography sx={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                        Stand: {lastUpdate.toLocaleTimeString("de-DE")}
                    </Typography>
                    {loading && <CircularProgress size={12} sx={{ color: "rgba(255,255,255,0.4)", ml: 1 }} />}
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                    <FormControl size="small">
                        <Select
                            value={days}
                            onChange={e => setDays(Number(e.target.value))}
                            sx={{
                                fontSize: "11px", fontFamily: "monospace", borderRadius: 0,
                                minWidth: 150, color: "#FFFFFF",
                                "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.2)" },
                                "& .MuiSvgIcon-root": { color: "rgba(255,255,255,0.5)" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.4)" },
                            }}
                        >
                            {PERIOD_OPTIONS.map(o => (
                                <MenuItem key={o.value} value={o.value} sx={{ fontSize: "11px", fontFamily: "monospace" }}>
                                    {o.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Tooltip title="Aktualisieren">
                        <IconButton onClick={fetchData} size="small" sx={{ borderRadius: 0, border: "1px solid rgba(255,255,255,0.2)", p: 0.75, color: "rgba(255,255,255,0.6)", "&:hover": { color: "#FFFFFF", borderColor: "rgba(255,255,255,0.5)" } }}>
                            <RefreshIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Abmelden">
                        <IconButton onClick={() => signOut({ callbackUrl: "/admin/login" })} size="small" sx={{ borderRadius: 0, border: "1px solid rgba(255,255,255,0.2)", p: 0.75, color: "rgba(255,255,255,0.6)", "&:hover": { color: "#FFFFFF", borderColor: "rgba(255,255,255,0.5)" } }}>
                            <LogoutIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            {/* ── CONTENT ── */}
            <Box sx={{ px: { xs: 2, md: 4 }, py: 4, maxWidth: 1440, mx: "auto" }}>

                {loading && !data ? (
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight={400} gap={2}>
                        <CircularProgress sx={{ color: "#001F3F" }} />
                        <Typography sx={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.3)" }}>
                            Lade Daten…
                        </Typography>
                    </Box>
                ) : data ? (
                    <Box display="flex" flexDirection="column" gap={4}>

                        {/* ── KPI OVERVIEW ── */}
                        <SectionLabel label={`[ Overview — Letzte ${days} Tage ]`} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <StatCard
                                    label="Pageviews"
                                    value={data.overview.totalPageviews.toLocaleString("de-DE")}
                                    sub="Gesamt im Zeitraum"
                                    icon={<TrendingUpIcon sx={{ fontSize: 16 }} />}
                                    accent
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <StatCard
                                    label="Unique Sessions"
                                    value={data.overview.uniqueSessions.toLocaleString("de-DE")}
                                    sub="Individuelle Besucher"
                                    icon={<PeopleAltIcon sx={{ fontSize: 16 }} />}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <StatCard
                                    label="Ø Verweildauer"
                                    value={formatDuration(data.overview.avgDuration)}
                                    sub="Pro Session"
                                    icon={<TimerIcon sx={{ fontSize: 16 }} />}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                <StatCard
                                    label="Top Event"
                                    value={data.events[0]?.name ?? "—"}
                                    sub={`${(data.events[0]?.count ?? 0).toLocaleString("de-DE")} mal ausgelöst`}
                                    icon={<BoltIcon sx={{ fontSize: 16 }} />}
                                />
                            </Grid>
                        </Grid>

                        {/* ── TRAFFIC OVER TIME ── */}
                        <SectionLabel label="[ Traffic Verlauf ]" />
                        <LineChartWidget title="Pageviews pro Tag" data={data.pageviewsOverTime} />

                        {/* ── DEVICES / BROWSERS / OS ── */}
                        <SectionLabel label="[ Geräte & Browser ]" />
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
                        <SectionLabel label="[ Herkunft ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <PieChartWidget
                                    title="Traffic-Quellen"
                                    data={data.referrers.map(r => ({ name: r.name || "Direkt", value: r.count }))}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <PieChartWidget
                                    title="Länder"
                                    data={data.countries.map(c => ({ name: c.name || "Unbekannt", value: c.count }))}
                                />
                            </Grid>
                        </Grid>

                        {/* ── TOP PAGES + EVENTS ── */}
                        <SectionLabel label="[ Top Content & Events ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <TopPagesPanel data={data.topPages} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <EventsPanel data={data.events} />
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
