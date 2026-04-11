"use client";

// Zwei schlanke Bar-Panels:
//  1. Aktivität pro Stunde (0..23 Uhr)
//  2. Aktivität pro Wochentag (Mo..So)
//
// Zeigt, wann deine Besucher tatsächlich kommen — hilfreich für
// Redaktions- und Kampagnen-Timing.

import { Box, Paper, Typography } from "@mui/material";
import { PanelHeader } from "./PanelHeader";

function Column({
    value, max, label, compact,
}: {
    value:   number;
    max:     number;
    label:   string;
    compact: boolean;
}) {
    const pct = max > 0 ? (value / max) * 100 : 0;

    return (
        <Box sx={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 0.5, flex: 1, minWidth: compact ? 0 : 18,
        }}>
            <Box sx={{
                width: "100%",
                height: 120,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
            }}>
                <Box sx={{
                    width: "70%",
                    height: `${pct}%`,
                    minHeight: value > 0 ? 2 : 0,
                    bgcolor: value === max && max > 0 ? "#001F3F" : "rgba(0,31,63,0.35)",
                    transition: "height 0.3s",
                }} />
            </Box>
            <Typography sx={{
                fontSize: "9px", fontFamily: "monospace",
                color: "rgba(0,0,0,0.45)", letterSpacing: "0.05em",
            }}>
                {label}
            </Typography>
        </Box>
    );
}

export function HourlyActivityPanel({
    data,
}: {
    data: { hour: number; count: number }[];
}) {
    const max = Math.max(...data.map(d => d.count), 1);
    const peak = data.reduce((a, b) => (b.count > a.count ? b : a), { hour: 0, count: 0 });

    return (
        <Paper elevation={0} sx={{
            border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, p: 3, height: "100%",
        }}>
            <PanelHeader
                title="Aktivität nach Stunde"
                tooltip="Verteilung aller Pageviews über den Tag. Hilft beim Timing von Newsletters, Social-Posts oder Kampagnen-Starts."
                right={
                    peak.count > 0 && (
                        <Typography sx={{
                            fontSize: "10px", fontFamily: "monospace",
                            color: "rgba(0,0,0,0.5)",
                        }}>
                            Peak: <strong style={{ color: "#001F3F" }}>{peak.hour}:00</strong>
                        </Typography>
                    )
                }
            />
            <Box sx={{ display: "flex", gap: 0.3, alignItems: "flex-end", mt: 1 }}>
                {data.map(d => (
                    <Column
                        key={d.hour}
                        value={d.count}
                        max={max}
                        label={d.hour % 3 === 0 ? String(d.hour).padStart(2, "0") : ""}
                        compact
                    />
                ))}
            </Box>
        </Paper>
    );
}

export function WeekdayActivityPanel({
    data,
}: {
    data: { day: string; count: number }[];
}) {
    const max = Math.max(...data.map(d => d.count), 1);
    const peak = data.reduce((a, b) => (b.count > a.count ? b : a), { day: "", count: 0 });

    return (
        <Paper elevation={0} sx={{
            border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, p: 3, height: "100%",
        }}>
            <PanelHeader
                title="Aktivität nach Wochentag"
                tooltip="Pageviews pro Wochentag. Zeigt, ob deine Besucher eher unter der Woche oder am Wochenende aktiv sind."
                right={
                    peak.count > 0 && (
                        <Typography sx={{
                            fontSize: "10px", fontFamily: "monospace",
                            color: "rgba(0,0,0,0.5)",
                        }}>
                            Peak: <strong style={{ color: "#001F3F" }}>{peak.day}</strong>
                        </Typography>
                    )
                }
            />
            <Box sx={{ display: "flex", gap: 1, alignItems: "flex-end", mt: 1 }}>
                {data.map(d => (
                    <Column
                        key={d.day}
                        value={d.count}
                        max={max}
                        label={d.day}
                        compact={false}
                    />
                ))}
            </Box>
        </Paper>
    );
}
