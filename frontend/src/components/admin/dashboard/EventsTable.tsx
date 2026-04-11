"use client";

// Tabelle: alle Events + Häufigkeit als Balken.

import {
    LinearProgress, Paper, Table, TableBody, TableCell, TableHead, TableRow,
} from "@mui/material";
import { PanelHeader } from "./PanelHeader";

interface Props {
    data: { name: string; count: number }[];
}

export function EventsTable({ data }: Props) {
    const max = data[0]?.count ?? 1;

    return (
        <Paper elevation={0} sx={{
            border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, p: 3, pb: 0,
        }}>
            <PanelHeader
                title="Alle Events"
                tooltip="Jedes getrackte Event (pageview, pageleave, scroll_depth, cta_click, form_start, form_submit …) mit seiner Auslöse-Häufigkeit."
            />
            <Table size="small" sx={{ mx: -3, width: "calc(100% + 48px)" }}>
                <TableHead>
                    <TableRow sx={{
                        "& th": {
                            borderColor: "rgba(0,0,0,0.08)",
                            fontSize: "10px", fontFamily: "monospace", fontWeight: 700,
                            letterSpacing: "0.2em", textTransform: "uppercase",
                            color: "rgba(0,0,0,0.4)", py: 1.5, px: 3,
                        },
                    }}>
                        <TableCell>Event</TableCell>
                        <TableCell align="right">Anzahl</TableCell>
                        <TableCell sx={{ width: 180 }} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(ev => (
                        <TableRow key={ev.name} hover sx={{
                            "& td": { borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 3 },
                        }}>
                            <TableCell sx={{
                                fontSize: "12px", fontWeight: 600,
                                color: "#001F3F", fontFamily: "monospace",
                            }}>
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
                                        "& .MuiLinearProgress-bar": {
                                            bgcolor: "#001F3F", borderRadius: 0,
                                        },
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
