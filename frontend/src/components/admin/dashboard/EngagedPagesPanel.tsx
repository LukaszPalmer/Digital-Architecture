"use client";

// Panel: Seiten mit der längsten Ø Verweildauer.
// Ergänzt "Top Pages nach Views" um die "Qualitäts-Sicht".

import { Box, Paper, Typography } from "@mui/material";
import { PanelHeader } from "./PanelHeader";
import { formatDuration } from "./types";

interface Props {
    data: { page: string; avgTime: number; visits: number }[];
}

export function EngagedPagesPanel({ data }: Props) {
    return (
        <Paper elevation={0} sx={{
            border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, p: 3, height: "100%",
        }}>
            <PanelHeader
                title="Seiten mit längster Verweildauer"
                tooltip="Wo verbringen deine Besucher die meiste Zeit? Dies sind die Seiten, die inhaltlich funktionieren — gute Kandidaten für mehr Traffic."
            />
            {data.length === 0 ? (
                <Typography sx={{
                    fontSize: "10px", fontFamily: "monospace",
                    color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em",
                }}>
                    Noch nicht genug Daten
                </Typography>
            ) : (
                <Box display="flex" flexDirection="column" gap={1.25}>
                    {data.map((p, i) => (
                        <Box
                            key={p.page}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="baseline"
                            gap={2}
                            sx={{
                                borderBottom: i === data.length - 1 ? "none" : "1px dashed rgba(0,0,0,0.08)",
                                pb: 1,
                            }}
                        >
                            <Box sx={{ overflow: "hidden", minWidth: 0 }}>
                                <Typography sx={{
                                    fontSize: "11px", fontWeight: 600,
                                    color: "#001F3F", fontFamily: "monospace",
                                    overflow: "hidden", textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>
                                    {p.page}
                                </Typography>
                                <Typography sx={{
                                    fontSize: "9px", fontFamily: "monospace",
                                    color: "rgba(0,0,0,0.4)",
                                }}>
                                    {p.visits} Besuche
                                </Typography>
                            </Box>
                            <Typography sx={{
                                fontSize: "13px", fontWeight: 800,
                                color: "#001F3F", fontFamily: "monospace",
                                whiteSpace: "nowrap",
                            }}>
                                {formatDuration(p.avgTime)}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}
        </Paper>
    );
}
