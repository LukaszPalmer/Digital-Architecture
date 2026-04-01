"use client";

import { LineChart as MuiLineChart } from "@mui/x-charts/LineChart";
import { Paper, Typography, Box } from "@mui/material";
import { MetricInfo } from "@/components/admin/MetricInfo";

interface Props {
    title:   string;
    data:    { date: string; count: number }[];
    tooltip?: string;
}

function fmtDate(iso: string): string {
    const [, m, d] = iso.split("-");
    const months = ["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];
    return `${parseInt(d)}. ${months[parseInt(m) - 1]}`;
}

// Only show every Nth label so the axis doesn't crowd
function sparseDates(dates: string[]): string[] {
    const n = dates.length;
    if (n <= 14) return dates.map(fmtDate);
    const step = Math.ceil(n / 12);
    return dates.map((d, i) => (i % step === 0 ? fmtDate(d) : ""));
}

export function LineChartWidget({ title, data, tooltip }: Props) {
    const dates  = sparseDates(data.map(d => d.date));
    const counts = data.map(d => d.count);
    const max    = Math.max(...counts, 1);

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3, pt: 2.5,
                border: "1px solid rgba(0,0,0,0.10)",
                borderRadius: 0,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Gradient definition for the area fill */}
            <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
                <defs>
                    <linearGradient id="pdaLineGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%"   stopColor="#001F3F" stopOpacity="0.22" />
                        <stop offset="75%"  stopColor="#001F3F" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#001F3F" stopOpacity="0"    />
                    </linearGradient>
                </defs>
            </svg>

            {/* Header */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography sx={{
                    fontSize: "9px", fontFamily: "monospace", fontWeight: 700,
                    letterSpacing: "0.4em", textTransform: "uppercase",
                    color: "rgba(0,0,0,0.45)",
                }}>
                    {title}
                </Typography>
                {tooltip && <MetricInfo text={tooltip} />}
            </Box>

            {/* Peak label */}
            {counts.length > 0 && (
                <Typography sx={{
                    fontSize: "11px", fontFamily: "monospace",
                    color: "rgba(0,0,0,0.35)", letterSpacing: "0.15em", mb: 1,
                }}>
                    Peak: <strong style={{ color: "#001F3F" }}>{max.toLocaleString("de-DE")}</strong>
                </Typography>
            )}

            <MuiLineChart
                xAxis={[{
                    scaleType: "point",
                    data: dates,
                    tickLabelStyle: {
                        fontSize: 9,
                        fill: "rgba(0,0,0,0.35)",
                        fontFamily: "monospace",
                    },
                }]}
                yAxis={[{
                    tickLabelStyle: {
                        fontSize: 9,
                        fill: "rgba(0,0,0,0.35)",
                        fontFamily: "monospace",
                    },
                }]}
                series={[{
                    data:            counts,
                    color:           "#001F3F",
                    area:            true,
                    showMark:        false,
                    valueFormatter:  (v: number | null) => v != null ? v.toLocaleString("de-DE") : "—",
                }]}
                height={300}
                margin={{ top: 20, bottom: 48, left: 48, right: 16 }}
                grid={{ horizontal: true }}
                sx={{
                    // Gradient area fill
                    "& .MuiAreaElement-root": {
                        fill: "url(#pdaLineGradient)",
                    },
                    // Thick smooth line
                    "& .MuiLineElement-root": {
                        strokeWidth: 2.5,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                    },
                    // Axis lines subtle
                    "& .MuiChartsAxis-line": {
                        stroke: "rgba(0,0,0,0.08)",
                    },
                    "& .MuiChartsAxis-tick": {
                        stroke: "rgba(0,0,0,0.08)",
                    },
                    // Dashed horizontal gridlines
                    "& .MuiChartsGrid-line": {
                        stroke: "rgba(0,0,0,0.06)",
                        strokeDasharray: "4 4",
                    },
                    // Smooth tooltip crosshair
                    "& .MuiChartsAxisHighlight-root": {
                        stroke: "rgba(0,31,63,0.15)",
                        strokeWidth: 1,
                        strokeDasharray: "4 4",
                    },
                }}
            />
        </Paper>
    );
}
