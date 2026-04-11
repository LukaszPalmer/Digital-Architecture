"use client";

// Kleine Statistik-Kachel für das Kundenprofil.

import { Box, Paper, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import { NAVY } from "./types";

interface Props {
    label: string;
    value: string;
    sub?: string;
    icon: typeof EuroIcon;
    color: string;
    onClick?: () => void;
}

export function StatCard({ label, value, sub, icon: Icon, color, onClick }: Props) {
    return (
        <Paper elevation={0} onClick={onClick} sx={{
            border: "1px solid rgba(0,0,0,0.08)", borderRadius: 0,
            p: 2, display: "flex", alignItems: "flex-start", gap: 1.5,
            transition: "all 0.2s",
            cursor: onClick ? "pointer" : "default",
            "&:hover": onClick
                ? { borderColor: color, bgcolor: `${color}08`, transform: "translateY(-1px)" }
                : { borderColor: "rgba(0,31,63,0.2)" },
        }}>
            <Box sx={{
                width: 36, height: 36, bgcolor: `${color}15`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
                <Icon sx={{ fontSize: 18, color }} />
            </Box>
            <Box>
                <Typography sx={{ fontFamily: "monospace", fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(0,0,0,0.35)" }}>
                    {label}
                </Typography>
                <Typography sx={{ fontFamily: "monospace", fontSize: "18px", fontWeight: 900, color: NAVY, lineHeight: 1.2, mt: 0.3 }}>
                    {value}
                </Typography>
                {sub && (
                    <Typography sx={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(0,0,0,0.4)", mt: 0.3 }}>
                        {sub}
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}
