"use client";

import { Paper, Typography, Box } from "@mui/material";
import type { ReactNode } from "react";

interface StatCardProps {
    label: string;
    value: string | number;
    sub?: string;
    accent?: boolean;
    icon?: ReactNode;
}

export function StatCard({ label, value, sub, accent = false, icon }: StatCardProps) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: "1px solid",
                borderColor: accent ? "#001F3F" : "rgba(0,0,0,0.10)",
                borderRadius: 0,
                bgcolor: accent ? "#001F3F" : "#FFFFFF",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                transition: "box-shadow 0.2s, border-color 0.2s",
                "&:hover": { borderColor: "#001F3F", boxShadow: "0 4px 24px rgba(0,31,63,0.08)" },
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Typography
                    sx={{
                        fontSize: "9px",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        color: accent ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)",
                    }}
                >
                    {label}
                </Typography>
                {icon && (
                    <Box sx={{ color: accent ? "rgba(255,255,255,0.35)" : "rgba(0,31,63,0.25)" }}>
                        {icon}
                    </Box>
                )}
            </Box>
            <Typography
                sx={{
                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: accent ? "#FFFFFF" : "#001F3F",
                    mt: 0.5,
                }}
            >
                {value}
            </Typography>
            {sub && (
                <Typography
                    sx={{
                        fontSize: "11px",
                        fontFamily: "monospace",
                        color: accent ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.35)",
                        letterSpacing: "0.1em",
                    }}
                >
                    {sub}
                </Typography>
            )}
        </Paper>
    );
}
