"use client";

// Tabelle: UTM-Kampagnen. Source / Medium / Kampagne + Klicks + Users.

import {
    Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography, Chip,
} from "@mui/material";
import { PanelHeader } from "./PanelHeader";

interface Props {
    data: {
        source:   string;
        medium:   string;
        campaign: string;
        count:    number;
        users:    number;
    }[];
}

export function UTMTable({ data }: Props) {
    return (
        <Paper elevation={0} sx={{ border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, p: 3, pb: 0 }}>
            <PanelHeader
                title="UTM Kampagnen"
                tooltip="Traffic aus bezahlten Kampagnen. Füge utm_source, utm_medium und utm_campaign zu deinen Werbe-Links hinzu, um Kampagnen hier zu tracken."
            />
            {data.length === 0 ? (
                <Box py={4}>
                    <Typography sx={{
                        fontSize: "10px", fontFamily: "monospace",
                        color: "rgba(0,0,0,0.3)",
                        letterSpacing: "0.15em", textAlign: "center",
                    }}>
                        Noch keine UTM-Parameter erfasst.
                    </Typography>
                </Box>
            ) : (
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
                            <TableCell>Source</TableCell>
                            <TableCell>Medium</TableCell>
                            <TableCell>Kampagne</TableCell>
                            <TableCell align="right">Users</TableCell>
                            <TableCell align="right">Events</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, i) => (
                            <TableRow key={i} hover sx={{
                                "& td": { borderColor: "rgba(0,0,0,0.06)", py: 1.2, px: 3 },
                            }}>
                                <TableCell>
                                    <Chip
                                        label={row.source}
                                        size="small"
                                        sx={{
                                            bgcolor: "rgba(0,31,63,0.08)", color: "#001F3F",
                                            fontFamily: "monospace", fontSize: "10px", fontWeight: 700,
                                            borderRadius: 0, height: 20,
                                        }}
                                    />
                                </TableCell>
                                <TableCell sx={{ fontSize: "11px", fontFamily: "monospace", color: "rgba(0,0,0,0.6)" }}>
                                    {row.medium}
                                </TableCell>
                                <TableCell sx={{ fontSize: "11px", fontWeight: 600, color: "#001F3F" }}>
                                    {row.campaign}
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: "12px", fontWeight: 700, color: "#001F3F" }}>
                                    {row.users.toLocaleString("de-DE")}
                                </TableCell>
                                <TableCell align="right" sx={{ fontSize: "12px", fontWeight: 700, color: "rgba(0,0,0,0.55)" }}>
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
