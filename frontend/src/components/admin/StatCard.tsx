"use client";

import { Paper, Typography, Box } from "@mui/material";
import { MetricInfo } from "@/components/admin/MetricInfo";
import type { ReactNode } from "react";

interface StatCardProps {
    label:    string;
    value:    string | number;
    sub?:     string;
    accent?:  boolean;
    icon?:    ReactNode;
    tooltip?: string;
}

export function StatCard({ label, value, sub, accent = false, icon, tooltip }: StatCardProps) {
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
            {/* Label row: text + tooltip icon + optional metric icon */}
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={0.75}>
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
                    {tooltip && <MetricInfo text={tooltip} accent={accent} />}
                </Box>
                {icon && (
                    <Box sx={{ color: accent ? "rgba(255,255,255,0.3)" : "rgba(0,31,63,0.2)" }}>
                        {icon}
                    </Box>
                )}
            </Box>

            {/* Value */}
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
