"use client";

// src/app/admin/dashboard/page.tsx

import { useState, useEffect, useCallback } from "react";
import { signOut } from "next-auth/react";
import {
    Box, Grid, Typography, Select, MenuItem, FormControl,
    Paper, Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip, CircularProgress, Divider, LinearProgress, Chip,
} from "@mui/material";
import LogoutIcon      from "@mui/icons-material/Logout";
import RefreshIcon     from "@mui/icons-material/Refresh";
import TrendingUpIcon  from "@mui/icons-material/TrendingUp";
import PeopleAltIcon   from "@mui/icons-material/PeopleAlt";
import TimerIcon       from "@mui/icons-material/Timer";
import BoltIcon        from "@mui/icons-material/Bolt";
import LayersIcon      from "@mui/icons-material/Layers";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";

import { StatCard }        from "@/components/admin/StatCard";
import { LineChartWidget } from "@/components/admin/charts/LineChart";
import { PieChartWidget }  from "@/components/admin/charts/PieChart";
import { MetricInfo }      from "@/components/admin/MetricInfo";
import {
    DashboardI18nProvider,
    LanguageSwitcher,
    useT,
} from "@/components/admin/DashboardI18n";

// ── Types ────────────────────────────────────────────────────────────────────

interface AnalyticsData {
    overview: {
        totalPageviews:  number;
        uniqueSessions:  number;
        avgDuration:     number;
        period:          number;
        bounceRate:      number;
        pagesPerSession: number;
    };
    topPages:          { page: string;   count: number }[];
    devices:           { name: string;   value: number }[];
    browsers:          { name: string;   value: number }[];
    os:                { name: string;   value: number }[];
    referrers:         { name: string;   count: number }[];
    countries:         { name: string;   count: number }[];
    events:            { name: string;   count: number }[];
    pageviewsOverTime: { date: string;   count: number }[];
    newVsReturning:    { name: string;   value: number }[];
    utmCampaigns:      { source: string; medium: string; campaign: string; count: number }[];
    scrollDepth:       { name: string;   value: number }[];
    ctaClicks:         { name: string;   count: number }[];
    formFunnel:        { name: string;   value: number }[];
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatDuration(seconds: number): string {
    if (seconds < 60) return `${seconds}s`;
    return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
}

// ── Sub-components (defined outside to avoid re-creation) ────────────────────

function SectionLabel({ label, tooltip }: { label: string; tooltip?: string }) {
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center" gap={1}>
                <Typography sx={{
                    fontSize: "9px", fontFamily: "monospace", fontWeight: 700,
                    letterSpacing: "0.5em", color: "rgba(0,0,0,0.35)",
                    textTransform: "uppercase", whiteSpace: "nowrap",
                }}>
                    {label}
                </Typography>
                {tooltip && <MetricInfo text={tooltip} />}
            </Box>
            <Divider sx={{ flex: 1 }} />
        </Box>
    );
}

function TopPagesPanel({
    data, title, tooltip,
}: {
    data:     { page: string; count: number }[];
    title:    string;
    tooltip?: string;
}) {
    const max = data[0]?.count ?? 1;
    return (
        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%" }}>
            <Box px={3} pt={2.5} pb={1.5} display="flex" alignItems="center" gap={0.75}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                    {title}
                </Typography>
                {tooltip && <MetricInfo text={tooltip} />}
            </Box>
            <Box px={3} pb={2.5} display="flex" flexDirection="column" gap={1.5}>
                {data.slice(0, 8).map((p, i) => (
                    <Box key={p.page}>
                        <Box display="flex" justifyContent="space-between" mb={0.5}>
                            <Typography sx={{ fontSize: "11px", fontWeight: 600, color: "#001F3F", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "72%" }}>
                                <span style={{ color: "rgba(0,0,0,0.25)", marginRight: 8 }}>{String(i + 1).padStart(2, "0")}</span>
                                {p.page}
                            </Typography>
                            <Typography sx={{ fontSize: "11px", fontWeight: 700, color: "#001F3F", fontFamily: "monospace" }}>
                                {p.count.toLocaleString("de-DE")}
                            </Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={(p.count / max) * 100} sx={{
                            height: 3, borderRadius: 0,
                            bgcolor: "rgba(0,31,63,0.07)",
                            "& .MuiLinearProgress-bar": {
                                bgcolor: i === 0 ? "#001F3F" : `rgba(0,31,63,${0.75 - i * 0.07})`,
                                borderRadius: 0,
                            },
                        }} />
                    </Box>
                ))}
            </Box>
        </Paper>
    );
}

function FormFunnelPanel({
    data, labels, tooltip,
}: {
    data: { name: string; value: number }[];
    labels: { title: string; opened: string; sent: string; rate: string };
    tooltip?: string;
}) {
    const starts  = data.find(d => d.name === "Form Start")?.value  ?? 0;
    const submits = data.find(d => d.name === "Abgesendet")?.value  ?? 0;
    const rate    = starts > 0 ? Math.round((submits / starts) * 100) : 0;

    return (
        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%", p: 3 }}>
            <Box display="flex" alignItems="center" gap={0.75} mb={3}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                    {labels.title}
                </Typography>
                {tooltip && <MetricInfo text={tooltip} />}
            </Box>
            <Box display="flex" flexDirection="column" gap={2.5}>
                {[
                    { label: labels.opened, value: starts,  pct: 100 },
                    { label: labels.sent,   value: submits, pct: starts > 0 ? (submits / starts) * 100 : 0 },
                ].map((step, i) => (
                    <Box key={step.label}>
                        <Box display="flex" justifyContent="space-between" mb={0.75}>
                            <Typography sx={{ fontSize: "11px", fontFamily: "monospace", color: "rgba(0,0,0,0.55)", fontWeight: 600 }}>{step.label}</Typography>
                            <Typography sx={{ fontSize: "12px", fontFamily: "monospace", fontWeight: 700, color: "#001F3F" }}>
                                {step.value.toLocaleString("de-DE")}
                            </Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={step.pct} sx={{
                            height: 6, borderRadius: 0,
                            bgcolor: "rgba(0,31,63,0.07)",
                            "& .MuiLinearProgress-bar": { bgcolor: i === 0 ? "#001F3F" : "#005bb5", borderRadius: 0 },
                        }} />
                    </Box>
                ))}
                <Box mt={1} pt={2} sx={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography sx={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>
                            {labels.rate}
                        </Typography>
                        <Typography sx={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.03em", color: rate >= 10 ? "#001F3F" : rate >= 5 ? "#005bb5" : "rgba(0,0,0,0.4)" }}>
                            {rate}%
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
}

function CTAClicksPanel({
    data, title, noDataLabel, tooltip,
}: {
    data:         { name: string; count: number }[];
    title:        string;
    noDataLabel:  string;
    tooltip?:     string;
}) {
    const max = data[0]?.count ?? 1;
    return (
        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%", p: 3 }}>
            <Box display="flex" alignItems="center" gap={0.75} mb={2.5}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                    {title}
                </Typography>
                {tooltip && <MetricInfo text={tooltip} />}
            </Box>
            {data.length === 0 ? (
                <Typography sx={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em" }}>
                    {noDataLabel}
                </Typography>
            ) : (
                <Box display="flex" flexDirection="column" gap={1.5}>
                    {data.map(cta => (
                        <Box key={cta.name}>
                            <Box display="flex" justifyContent="space-between" mb={0.5}>
                                <Typography sx={{ fontSize: "11px", fontFamily: "monospace", color: "#001F3F", fontWeight: 600 }}>
                                    {cta.name}
                                </Typography>
                                <Typography sx={{ fontSize: "11px", fontFamily: "monospace", fontWeight: 700 }}>
                                    {cta.count}
                                </Typography>
                            </Box>
                            <LinearProgress variant="determinate" value={(cta.count / max) * 100} sx={{
                                height: 4, borderRadius: 0,
                                bgcolor: "rgba(0,31,63,0.07)",
                                "& .MuiLinearProgress-bar": { bgcolor: "#003d7a", borderRadius: 0 },
                            }} />
                        </Box>
                    ))}
                </Box>
            )}
        </Paper>
    );
}

function UTMTable({
    data, labels,
}: {
    data: { source: string; medium: string; campaign: string; count: number }[];
    labels: { title: string; source: string; medium: string; campaign: string; clicks: string; empty: string; tooltip: string };
}) {
    return (
        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0 }}>
            <Box px={3} pt={2.5} pb={1} display="flex" alignItems="center" gap={0.75}>
                <Typography sx={{ fontSize: "9px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(0,0,0,0.45)" }}>
                    {labels.title}
                </Typography>
                <MetricInfo text={labels.tooltip} />
            </Box>
            {data.length === 0 ? (
                <Box px={3} py={4}>
                    <Typography sx={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(0,0,0,0.3)", letterSpacing: "0.15em", textAlign: "center" }}>
                        {labels.empty}
                    </Typography>
                </Box>
            ) : (
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{ "& th": { borderColor: "rgba(0,0,0,0.08)", fontSize: "10px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", py: 1.5, px: 3 } }}>
                            <TableCell>{labels.source}</TableCell>
                            <TableCell>{labels.medium}</TableCell>
                            <TableCell>{labels.campaign}</TableCell>
                            <TableCell align="right">{labels.clicks}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={i} hover sx={{ "& td": { borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 3 } }}>
                                <TableCell>
                                    <Chip label={row.source} size="small" sx={{ bgcolor: "rgba(0,31,63,0.08)", color: "#001F3F", fontFamily: "monospace", fontSize: "10px", fontWeight: 700, borderRadius: 0, height: 20 }} />
                                </TableCell>
                                <TableCell sx={{ fontSize: "11px", fontFamily: "monospace", color: "rgba(0,0,0,0.6)" }}>{row.medium}</TableCell>
                                <TableCell sx={{ fontSize: "11px", fontWeight: 600, color: "#001F3F" }}>{row.campaign}</TableCell>
                                <TableCell align="right" sx={{ fontSize: "12px", fontWeight: 700, color: "#001F3F" }}>
                                    {row.count.toLocaleString("de-DE")}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </Paper>
    );
}

// ── Main Dashboard (uses translations) ───────────────────────────────────────

function DashboardContent() {
    const { t } = useT();

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

    const periodOptions = [
        { label: t.last7,  value: 7 },
        { label: t.last30, value: 30 },
        { label: t.last90, value: 90 },
    ];

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
                            {t.brand}
                        </Typography>
                        <Typography sx={{ fontSize: "8px", fontFamily: "monospace", letterSpacing: "0.35em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
                            {t.brandSub}
                        </Typography>
                    </Box>
                    <Box sx={{ width: "1px", height: 28, bgcolor: "rgba(255,255,255,0.15)", mx: 0.5 }} />
                    <Typography sx={{ fontSize: "10px", fontFamily: "monospace", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                        {t.updatedAt}: {lastUpdate.toLocaleTimeString("de-DE")}
                    </Typography>
                    {loading && <CircularProgress size={12} sx={{ color: "rgba(255,255,255,0.4)", ml: 1 }} />}
                </Box>

                <Box display="flex" alignItems="center" gap={1.5}>
                    {/* Language Switcher */}
                    <LanguageSwitcher />

                    <Box sx={{ width: "1px", height: 20, bgcolor: "rgba(255,255,255,0.15)" }} />

                    {/* Period selector */}
                    <FormControl size="small">
                        <Select
                            value={days}
                            onChange={e => setDays(Number(e.target.value))}
                            sx={{
                                fontSize: "11px", fontFamily: "monospace", borderRadius: 0,
                                minWidth: 140, color: "#FFFFFF",
                                "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.2)" },
                                "& .MuiSvgIcon-root": { color: "rgba(255,255,255,0.5)" },
                                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.4)" },
                            }}
                        >
                            {periodOptions.map(o => (
                                <MenuItem key={o.value} value={o.value} sx={{ fontSize: "11px", fontFamily: "monospace" }}>
                                    {o.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Tooltip title={t.refresh}>
                        <IconButton onClick={fetchData} size="small" sx={{ borderRadius: 0, border: "1px solid rgba(255,255,255,0.2)", p: 0.75, color: "rgba(255,255,255,0.6)", "&:hover": { color: "#FFFFFF", borderColor: "rgba(255,255,255,0.5)" } }}>
                            <RefreshIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={t.logout}>
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
                            {t.loading}
                        </Typography>
                    </Box>
                ) : data ? (
                    <Box display="flex" flexDirection="column" gap={4}>

                        {/* ── 1. KPI OVERVIEW ── */}
                        <SectionLabel label={`[ ${t.secOverview} — ${t.last30.replace("30", String(days))} ]`} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <StatCard label={t.pageviews} value={data.overview.totalPageviews.toLocaleString("de-DE")} sub={t.subPageviews} icon={<TrendingUpIcon sx={{ fontSize: 16 }} />} tooltip={t.ttPageviews} accent />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <StatCard label={t.sessions} value={data.overview.uniqueSessions.toLocaleString("de-DE")} sub={t.subSessions} icon={<PeopleAltIcon sx={{ fontSize: 16 }} />} tooltip={t.ttSessions} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <StatCard label={t.avgDuration} value={formatDuration(data.overview.avgDuration)} sub={t.subDuration} icon={<TimerIcon sx={{ fontSize: 16 }} />} tooltip={t.ttDuration} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <StatCard label={t.bounceRate} value={`${data.overview.bounceRate}%`} sub={t.subBounce} icon={<CrisisAlertIcon sx={{ fontSize: 16 }} />} tooltip={t.ttBounce} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <StatCard label={t.pagesPerSession} value={data.overview.pagesPerSession.toLocaleString("de-DE")} sub={t.subPages} icon={<LayersIcon sx={{ fontSize: 16 }} />} tooltip={t.ttPagesPerSession} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <StatCard label={t.topEvent} value={data.events[0]?.name ?? "—"} sub={`${(data.events[0]?.count ?? 0).toLocaleString("de-DE")} ${t.subEvent}`} icon={<BoltIcon sx={{ fontSize: 16 }} />} tooltip={t.ttTopEvent} />
                            </Grid>
                        </Grid>

                        {/* ── 2. TRAFFIC VERLAUF ── */}
                        <SectionLabel label={`[ ${t.secTraffic} ]`} />
                        <LineChartWidget title={t.chartPageviews} data={data.pageviewsOverTime} tooltip={t.ttLineChart} />

                        {/* ── 3. GERÄTE ── */}
                        <SectionLabel label={`[ ${t.secDevices} ]`} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget title={t.chartDevices}  data={data.devices}  tooltip={t.ttDevices} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget title={t.chartBrowser}  data={data.browsers} tooltip={t.ttBrowser} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget title={t.chartOS}       data={data.os}       tooltip={t.ttOS} />
                            </Grid>
                        </Grid>

                        {/* ── 4. NUTZER-VERHALTEN ── */}
                        <SectionLabel label={`[ ${t.secBehavior} ]`} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget title={t.chartNewReturn} data={data.newVsReturning} tooltip={t.ttNewReturn} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget
                                    title={t.chartScroll}
                                    tooltip={t.ttScroll}
                                    data={data.scrollDepth.length > 0 ? data.scrollDepth : [{ name: "—", value: 1 }]}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <FormFunnelPanel
                                    data={data.formFunnel}
                                    tooltip={t.ttFormFunnel}
                                    labels={{ title: t.chartFormFunnel, opened: t.funnelOpened, sent: t.funnelSent, rate: t.funnelRate }}
                                />
                            </Grid>
                        </Grid>

                        {/* ── 5. HERKUNFT ── */}
                        <SectionLabel label={`[ ${t.secAcquisition} ]`} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <PieChartWidget
                                    title={t.chartSources}
                                    tooltip={t.ttSources}
                                    data={data.referrers.map(r => ({ name: r.name || "Direkt", value: r.count }))}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <PieChartWidget
                                    title={t.chartCountries}
                                    tooltip={t.ttCountries}
                                    data={data.countries.map(c => ({ name: c.name || "—", value: c.count }))}
                                />
                            </Grid>
                        </Grid>

                        {/* ── 6. UTM KAMPAGNEN ── */}
                        <SectionLabel label={`[ ${t.secUTM} ]`} />
                        <UTMTable
                            data={data.utmCampaigns}
                            labels={{
                                title:    t.secUTM,
                                source:   t.utmSource,
                                medium:   t.utmMedium,
                                campaign: t.utmCampaign,
                                clicks:   t.utmClicks,
                                empty:    t.utmEmpty,
                                tooltip:  t.ttUTM,
                            }}
                        />

                        {/* ── 7. CONVERSIONS ── */}
                        <SectionLabel label={`[ ${t.secConversions} ]`} />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <CTAClicksPanel data={data.ctaClicks} title={t.chartCTA} noDataLabel={t.noCtaData} tooltip={t.ttCTA} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TopPagesPanel data={data.topPages} title={t.chartTopPages} tooltip={t.ttTopPages} />
                            </Grid>
                        </Grid>

                        {/* ── 8. ALLE EVENTS ── */}
                        <SectionLabel label={`[ ${t.secEvents} ]`} />
                        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0 }}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow sx={{ "& th": { borderColor: "rgba(0,0,0,0.08)", fontSize: "10px", fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", py: 1.5, px: 3 } }}>
                                        <TableCell>{t.eventLabel}</TableCell>
                                        <TableCell align="right">{t.countLabel}</TableCell>
                                        <TableCell sx={{ width: 120 }} />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.events.map(ev => (
                                        <TableRow key={ev.name} hover sx={{ "& td": { borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 3 } }}>
                                            <TableCell sx={{ fontSize: "12px", fontWeight: 600, color: "#001F3F", fontFamily: "monospace" }}>
                                                {ev.name}
                                            </TableCell>
                                            <TableCell align="right" sx={{ fontSize: "12px", fontWeight: 700 }}>
                                                {ev.count.toLocaleString("de-DE")}
                                            </TableCell>
                                            <TableCell>
                                                <LinearProgress variant="determinate" value={((ev.count) / (data.events[0]?.count ?? 1)) * 100} sx={{
                                                    height: 3, borderRadius: 0,
                                                    bgcolor: "rgba(0,31,63,0.07)",
                                                    "& .MuiLinearProgress-bar": { bgcolor: "#001F3F", borderRadius: 0 },
                                                }} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>

                    </Box>
                ) : (
                    <Box display="flex" justifyContent="center" py={8}>
                        <Typography sx={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.35)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                            {t.noData}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

// ── Export wrapped with i18n provider ────────────────────────────────────────

export default function DashboardPage() {
    return (
        <DashboardI18nProvider>
            <DashboardContent />
        </DashboardI18nProvider>
    );
}
