"use client";

// Professionelles KPI-Grid — 12 Kennzahlen, User-zentriert.
// "Users" ist die primäre Metrik und bekommt daher die Accent-Variante.

import { Grid } from "@mui/material";
import PeopleAltIcon    from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon   from "@mui/icons-material/TrendingUp";
import LayersIcon       from "@mui/icons-material/Layers";
import BoltIcon         from "@mui/icons-material/Bolt";
import VisibilityIcon   from "@mui/icons-material/Visibility";
import TimerIcon        from "@mui/icons-material/Timer";
import CrisisAlertIcon  from "@mui/icons-material/CrisisAlert";
import ThumbUpAltIcon   from "@mui/icons-material/ThumbUpAlt";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AutorenewIcon    from "@mui/icons-material/Autorenew";
import PercentIcon      from "@mui/icons-material/Percent";
import PublicIcon       from "@mui/icons-material/Public";

import { StatCard } from "@/components/admin/StatCard";
import { formatDuration, type AnalyticsOverview } from "./types";

interface Props {
    overview: AnalyticsOverview;
    topEvent: { name: string; count: number } | undefined;
}

// Zentrale Icon-Größe — hält die Cards visuell einheitlich.
const ICON = { fontSize: 16 } as const;

export function KpiGrid({ overview, topEvent }: Props) {
    const fmt = (n: number) => n.toLocaleString("de-DE");

    return (
        <Grid container spacing={2}>
            {/* ── Primary: Users ──────────────────────────────────────── */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Users"
                    value={fmt(overview.uniqueUsers)}
                    sub="Eindeutige Personen"
                    icon={<PeopleAltIcon sx={ICON} />}
                    tooltip="Eindeutige Personen im Zeitraum. Eine Person zählt unabhängig davon, wie oft sie wiederkommt — genau wie bei Plausible oder Fathom."
                    accent
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Leads"
                    value={fmt(overview.leads)}
                    sub={`${overview.leadRate}% der User`}
                    icon={<MarkEmailReadIcon sx={ICON} />}
                    tooltip="Gesendete Formular-Anfragen im Zeitraum. Jeder Lead ist ein abgesendetes Kontaktformular."
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="New Users"
                    value={fmt(overview.newUsers)}
                    sub="Erstbesucher"
                    icon={<TrendingUpIcon sx={ICON} />}
                    tooltip="Personen, die die Website im Zeitraum zum ersten Mal besucht haben."
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Returning"
                    value={fmt(overview.returningUsers)}
                    sub={`${overview.returningRate}% kommen wieder`}
                    icon={<AutorenewIcon sx={ICON} />}
                    tooltip="Personen, die bereits früher auf der Website waren und jetzt wiedergekommen sind. Hohe Rate = Wiedererkennungswert."
                />
            </Grid>

            {/* ── Reichweite ──────────────────────────────────────────── */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Sessions"
                    value={fmt(overview.uniqueSessions)}
                    sub="Sitzungen im Zeitraum"
                    icon={<BoltIcon sx={ICON} />}
                    tooltip="Eine Session ist ein zusammenhängender Besuch (ein Tab, eine Sitzung). Eine Person kann pro Tag mehrere Sessions erzeugen."
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Pageviews"
                    value={fmt(overview.totalPageviews)}
                    sub={`Ø ${overview.avgPagesPerUser} je User`}
                    icon={<VisibilityIcon sx={ICON} />}
                    tooltip="Gesamte Seitenaufrufe im Zeitraum. Mehrfach-Aufrufe derselben Person werden mitgezählt."
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Ø Session-Dauer"
                    value={formatDuration(overview.avgDuration)}
                    sub="Ø Zeit pro Sitzung"
                    icon={<TimerIcon sx={ICON} />}
                    tooltip="Durchschnittliche Verweildauer einer Session. Berechnet aus pageleave-Events mit gemessener Zeit."
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Seiten / Session"
                    value={overview.pagesPerSession.toLocaleString("de-DE")}
                    sub="Tiefe des Besuchs"
                    icon={<LayersIcon sx={ICON} />}
                    tooltip="Wie viele Seiten pro Session durchschnittlich aufgerufen werden. Höher = mehr Engagement."
                />
            </Grid>

            {/* ── Qualität ────────────────────────────────────────────── */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Engagement Rate"
                    value={`${overview.engagementRate}%`}
                    sub="≥ 2 Seiten oder ≥ 30s"
                    icon={<ThumbUpAltIcon sx={ICON} />}
                    tooltip="Anteil der Sessions, die entweder mindestens 2 Seiten oder 30 Sekunden umfassen. Das ist die GA4-Definition von 'engaged sessions'."
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Bounce Rate"
                    value={`${overview.bounceRate}%`}
                    sub="Nur 1 Seite angesehen"
                    icon={<CrisisAlertIcon sx={ICON} />}
                    tooltip="Anteil der Sessions mit nur einer Seite. Niedriger ist besser — unter 60% gilt als gut."
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Lead Rate"
                    value={`${overview.leadRate}%`}
                    sub="User → Lead"
                    icon={<PercentIcon sx={ICON} />}
                    tooltip="Anteil der User, die ein Formular abgeschickt haben. Deine Haupt-Business-Metrik: wie viele Besucher werden zu Anfragen."
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <StatCard
                    label="Top Event"
                    value={topEvent?.name ?? "—"}
                    sub={`${fmt(topEvent?.count ?? 0)} × ausgelöst`}
                    icon={<PublicIcon sx={ICON} />}
                    tooltip="Das am häufigsten getrackte Event im gewählten Zeitraum."
                />
            </Grid>
        </Grid>
    );
}
