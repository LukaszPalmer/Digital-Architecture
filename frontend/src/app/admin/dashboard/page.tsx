"use client";

// src/app/admin/dashboard/page.tsx
// Palmer Digital — Analytics Dashboard.
//
// Das Dashboard ist user-zentriert ("1 Person = 1 User, egal wie oft sie
// kommt"), nur Deutsch (kein i18n-Overhead) und in thematische Sektionen
// aufgeteilt. Alle Panels wohnen in ./components/admin/dashboard.

import { useCallback, useEffect, useState } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";

import { LineChartWidget } from "@/components/admin/charts/LineChart";
import { PieChartWidget }  from "@/components/admin/charts/PieChart";

import { DashboardTopNav } from "@/components/admin/dashboard/DashboardTopNav";
import { ResetDialog }     from "@/components/admin/dashboard/ResetDialog";
import { SectionLabel }    from "@/components/admin/dashboard/SectionLabel";
import { KpiGrid }         from "@/components/admin/dashboard/KpiGrid";
import { LeadsPanel }      from "@/components/admin/dashboard/LeadsPanel";
import { TopPagesPanel }   from "@/components/admin/dashboard/TopPagesPanel";
import { CTAClicksPanel }  from "@/components/admin/dashboard/CTAClicksPanel";
import { UTMTable }        from "@/components/admin/dashboard/UTMTable";
import { EventsTable }     from "@/components/admin/dashboard/EventsTable";
import { GeoPanel }        from "@/components/admin/dashboard/GeoPanel";
import { EngagedPagesPanel } from "@/components/admin/dashboard/EngagedPagesPanel";
import {
    HourlyActivityPanel,
    WeekdayActivityPanel,
} from "@/components/admin/dashboard/ActivityPanels";

import type { AnalyticsData } from "@/components/admin/dashboard/types";

// Überschrift im Format "[ LABEL — LETZTE N TAGE ]"
function range(days: number) {
    return `[ Overview — Letzte ${days} Tage ]`;
}

export default function DashboardPage() {
    const [days, setDays]             = useState(30);
    const [data, setData]             = useState<AnalyticsData | null>(null);
    const [loading, setLoading]       = useState(true);
    const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
    const [resetOpen, setResetOpen]   = useState(false);

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

            <DashboardTopNav
                days={days}
                onDays={setDays}
                lastUpdate={lastUpdate}
                loading={loading}
                onRefresh={fetchData}
                onReset={() => setResetOpen(true)}
            />

            <ResetDialog
                open={resetOpen}
                onClose={() => setResetOpen(false)}
                onDone={() => {
                    setResetOpen(false);
                    fetchData();
                }}
            />

            <Box sx={{ px: { xs: 2, md: 4 }, py: 4, maxWidth: 1440, mx: "auto" }}>

                {loading && !data ? (
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        minHeight={400}
                        gap={2}
                    >
                        <CircularProgress sx={{ color: "#001F3F" }} />
                        <Typography sx={{
                            fontFamily: "monospace", fontSize: "10px",
                            letterSpacing: "0.3em", textTransform: "uppercase",
                            color: "rgba(0,0,0,0.3)",
                        }}>
                            Lade Daten …
                        </Typography>
                    </Box>
                ) : data ? (
                    <Box display="flex" flexDirection="column" gap={4}>

                        {/* ── 1. KPI OVERVIEW ─────────────────────────────── */}
                        <SectionLabel
                            label={range(days)}
                            tooltip="Alle Metriken sind user-zentriert: Dieselbe Person zählt als 1, egal wie oft sie wiederkommt. Sessions und Pageviews sind bewusst Aktions-Zähler."
                        />
                        <KpiGrid overview={data.overview} topEvent={data.events[0]} />

                        {/* ── 2. TRAFFIC-VERLAUF ──────────────────────────── */}
                        <SectionLabel label="[ Traffic-Verlauf ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 8 }}>
                                <LineChartWidget
                                    title="Pageviews pro Tag"
                                    data={data.pageviewsOverTime}
                                    tooltip="Tägliche Pageview-Entwicklung. Zeigt Traffic-Spitzen und hilft, Kampagnen zeitlich auszuwerten."
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <LineChartWidget
                                    title="Unique Users pro Tag"
                                    data={data.usersOverTime}
                                    tooltip="Eindeutige Personen pro Tag. Zeigt die reale Reichweite — eine Person zählt pro Tag nur einmal."
                                />
                            </Grid>
                        </Grid>

                        {/* ── 3. AKTIVITÄT (WANN KOMMEN BESUCHER) ─────────── */}
                        <SectionLabel label="[ Aktivitäts-Muster ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <HourlyActivityPanel data={data.hourlyActivity} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <WeekdayActivityPanel data={data.weekdayActivity} />
                            </Grid>
                        </Grid>

                        {/* ── 4. GERÄTE ──────────────────────────────────── */}
                        <SectionLabel label="[ Geräte & Browser ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget
                                    title="Gerätetyp"
                                    data={data.devices}
                                    tooltip="Aufschlüsselung nach Endgerät — pro eindeutigem User, nicht pro Pageview."
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget
                                    title="Browser"
                                    data={data.browsers}
                                    tooltip="Welche Browser deine Nutzer verwenden — pro eindeutigem User."
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <PieChartWidget
                                    title="Betriebssystem"
                                    data={data.os}
                                    tooltip="Welche Betriebssysteme deine Nutzer nutzen — pro eindeutigem User."
                                />
                            </Grid>
                        </Grid>

                        {/* ── 5. NUTZER-VERHALTEN ────────────────────────── */}
                        <SectionLabel label="[ Nutzer-Verhalten ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <PieChartWidget
                                    title="Neue vs. Wiederkehrende"
                                    data={data.newVsReturning}
                                    tooltip="Erstbesucher vs. Wiederkehrende — dedupliziert per User-ID. Gute Balance: 30–50% wiederkehrend."
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <PieChartWidget
                                    title="Scroll-Tiefe"
                                    data={
                                        data.scrollDepth.length > 0
                                            ? data.scrollDepth
                                            : [{ name: "—", value: 1 }]
                                    }
                                    tooltip="Wie weit Besucher scrollen. 100% = Seite komplett gelesen. Zeigt, wo Nutzer abspringen."
                                />
                            </Grid>
                        </Grid>

                        {/* ── 6. TRAFFIC-HERKUNFT ────────────────────────── */}
                        <SectionLabel label="[ Traffic-Herkunft ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 5 }}>
                                <PieChartWidget
                                    title="Quellen"
                                    tooltip="Woher die Nutzer kommen: direkt, Google, Social Media, andere Seiten. Dedupliziert per User."
                                    data={data.referrers.map(r => ({
                                        name:  r.name || "direkt",
                                        value: r.count,
                                    }))}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 7 }}>
                                <GeoPanel countries={data.countries} cities={data.cities} />
                            </Grid>
                        </Grid>

                        {/* ── 7. KAMPAGNEN ───────────────────────────────── */}
                        <SectionLabel label="[ UTM Kampagnen ]" />
                        <UTMTable data={data.utmCampaigns} />

                        {/* ── 8. CONTENT-PERFORMANCE ─────────────────────── */}
                        <SectionLabel label="[ Content Performance ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TopPagesPanel data={data.topPages} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <EngagedPagesPanel data={data.topEngagedPages} />
                            </Grid>
                        </Grid>

                        {/* ── 9. CONVERSIONS ─────────────────────────────── */}
                        <SectionLabel label="[ Conversions & CTAs ]" />
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <CTAClicksPanel data={data.ctaClicks} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <LeadsPanel data={data.leads} />
                            </Grid>
                        </Grid>

                        {/* ── 10. ROH-EVENTS ─────────────────────────────── */}
                        <SectionLabel label="[ Alle Events ]" />
                        <EventsTable data={data.events} />

                    </Box>
                ) : (
                    <Box display="flex" justifyContent="center" py={8}>
                        <Typography sx={{
                            fontFamily: "monospace", fontSize: "11px",
                            color: "rgba(0,0,0,0.35)",
                            letterSpacing: "0.3em", textTransform: "uppercase",
                        }}>
                            Noch keine Daten vorhanden
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
