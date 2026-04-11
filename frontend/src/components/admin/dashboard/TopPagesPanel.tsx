"use client";

// Panel: Top-Seiten (rangiert nach Pageviews).

import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { PanelHeader } from "./PanelHeader";

interface Props {
    data:     { page: string; count: number }[];
    title?:   string;
    tooltip?: string;
    limit?:   number;
}

export function TopPagesPanel({
    data,
    title   = "Top Seiten",
    tooltip = "Die meistbesuchten Seiten im Zeitraum — sortiert nach Seitenaufrufen.",
    limit   = 10,
}: Props) {
    const max = data[0]?.count ?? 1;

    return (
        <Paper elevation={0} sx={{
            border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%", p: 3,
        }}>
            <PanelHeader title={title} tooltip={tooltip} />
            <Box display="flex" flexDirection="column" gap={1.5}>
                {data.length === 0 && (
                    <Typography sx={{
                        fontSize: "10px", fontFamily: "monospace",
                        color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em",
                    }}>
                        Noch keine Daten
                    </Typography>
                )}
                {data.slice(0, limit).map((p, i) => (
                    <Box key={p.page}>
                        <Box display="flex" justifyContent="space-between" mb={0.5}>
                            <Typography sx={{
                                fontSize: "11px", fontWeight: 600,
                                color: "#001F3F", fontFamily: "monospace",
                                overflow: "hidden", textOverflow: "ellipsis",
                                whiteSpace: "nowrap", maxWidth: "72%",
                            }}>
                                <span style={{ color: "rgba(0,0,0,0.25)", marginRight: 8 }}>
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                {p.page}
                            </Typography>
                            <Typography sx={{
                                fontSize: "11px", fontWeight: 700,
                                color: "#001F3F", fontFamily: "monospace",
                            }}>
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
                                    bgcolor: i === 0 ? "#001F3F" : `rgba(0,31,63,${Math.max(0.2, 0.75 - i * 0.06)})`,
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
