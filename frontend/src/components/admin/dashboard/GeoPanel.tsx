"use client";

// Geo-Panel: Länder + (optional) Städte.
// Städte kommen nur von Vercel's Edge-Header — lokal bleibt die Liste leer.

import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { PanelHeader } from "./PanelHeader";

interface GeoPanelProps {
    countries: { name: string; count: number }[];
    cities:    { city: string; country: string; count: number }[];
}

function Bar({ value, max }: { value: number; max: number }) {
    return (
        <LinearProgress
            variant="determinate"
            value={(value / max) * 100}
            sx={{
                height: 3, borderRadius: 0,
                bgcolor: "rgba(0,31,63,0.07)",
                "& .MuiLinearProgress-bar": {
                    bgcolor: "#001F3F", borderRadius: 0,
                },
            }}
        />
    );
}

function List({
    items,
    emptyLabel,
}: {
    items: { label: string; sub?: string; count: number }[];
    emptyLabel: string;
}) {
    const max = items[0]?.count ?? 1;

    if (items.length === 0) {
        return (
            <Typography sx={{
                fontSize: "10px", fontFamily: "monospace",
                color: "rgba(0,0,0,0.3)", letterSpacing: "0.2em",
            }}>
                {emptyLabel}
            </Typography>
        );
    }

    return (
        <Box display="flex" flexDirection="column" gap={1.25}>
            {items.map((it, i) => (
                <Box key={`${it.label}-${i}`}>
                    <Box display="flex" justifyContent="space-between" mb={0.5}>
                        <Box display="flex" alignItems="baseline" gap={1} sx={{
                            overflow: "hidden", maxWidth: "80%",
                        }}>
                            <Typography sx={{
                                fontSize: "11px", fontWeight: 600,
                                color: "#001F3F", fontFamily: "monospace",
                                overflow: "hidden", textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}>
                                {it.label || "—"}
                            </Typography>
                            {it.sub && (
                                <Typography sx={{
                                    fontSize: "9px", fontFamily: "monospace",
                                    color: "rgba(0,0,0,0.35)",
                                }}>
                                    {it.sub}
                                </Typography>
                            )}
                        </Box>
                        <Typography sx={{
                            fontSize: "11px", fontWeight: 700,
                            color: "#001F3F", fontFamily: "monospace",
                        }}>
                            {it.count.toLocaleString("de-DE")}
                        </Typography>
                    </Box>
                    <Bar value={it.count} max={max} />
                </Box>
            ))}
        </Box>
    );
}

export function GeoPanel({ countries, cities }: GeoPanelProps) {
    return (
        <Box sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
        }}>
            <Paper elevation={0} sx={{
                border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, p: 3,
            }}>
                <PanelHeader
                    title="Länder"
                    tooltip="Aus welchen Ländern deine Nutzer kommen — per IP-Geolocation (nur auf Vercel) mit Fallback auf die Browser-Sprache. Eine Person zählt als 1."
                />
                <List
                    items={countries.map(c => ({ label: c.name || "Unbekannt", count: c.count }))}
                    emptyLabel="Noch keine Länder-Daten"
                />
            </Paper>

            <Paper elevation={0} sx={{
                border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, p: 3,
            }}>
                <PanelHeader
                    title="Städte"
                    tooltip="Städte werden — sofern erlaubt — aus den Vercel-Edge-Headern gelesen (keine IP gespeichert). Lokal oder ohne Vercel bleibt die Liste leer."
                />
                <List
                    items={cities.map(c => ({
                        label: c.city,
                        sub:   c.country,
                        count: c.count,
                    }))}
                    emptyLabel="Städte-Daten erst in Produktion verfügbar"
                />
            </Paper>
        </Box>
    );
}
