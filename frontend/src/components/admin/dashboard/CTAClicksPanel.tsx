"use client";

// Panel: Klicks auf CTA-Buttons (z.B. Preis-Pakete, "Kontakt aufnehmen" …).

import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { PanelHeader } from "./PanelHeader";

interface Props {
    data: { name: string; count: number }[];
}

export function CTAClicksPanel({ data }: Props) {
    const max = data[0]?.count ?? 1;

    return (
        <Paper elevation={0} sx={{
            border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%", p: 3,
        }}>
            <PanelHeader
                title="CTA Klicks"
                tooltip="Klicks auf CTA-Buttons wie Preispakete, 'Kontakt aufnehmen' oder 'Projekt starten'. Zeigt, welche Angebote das meiste Interesse wecken."
            />
            {data.length === 0 ? (
                <Typography sx={{
                    fontSize: "10px", fontFamily: "monospace",
                    color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em",
                }}>
                    Noch keine Klicks erfasst
                </Typography>
            ) : (
                <Box display="flex" flexDirection="column" gap={1.5}>
                    {data.map(cta => (
                        <Box key={cta.name}>
                            <Box display="flex" justifyContent="space-between" mb={0.5}>
                                <Typography sx={{
                                    fontSize: "11px", fontFamily: "monospace",
                                    color: "#001F3F", fontWeight: 600,
                                }}>
                                    {cta.name}
                                </Typography>
                                <Typography sx={{
                                    fontSize: "11px", fontFamily: "monospace", fontWeight: 700,
                                }}>
                                    {cta.count}
                                </Typography>
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={(cta.count / max) * 100}
                                sx={{
                                    height: 4, borderRadius: 0,
                                    bgcolor: "rgba(0,31,63,0.07)",
                                    "& .MuiLinearProgress-bar": {
                                        bgcolor: "#003d7a", borderRadius: 0,
                                    },
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            )}
        </Paper>
    );
}
