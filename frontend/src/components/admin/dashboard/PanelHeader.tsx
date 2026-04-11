"use client";

// Kopfzeile für Panel-Container (Monospace-Caption + Tooltip-Icon).
// Alle Chart/Table-Widgets nutzen dieselbe Optik.

import { Box, Typography } from "@mui/material";
import { MetricInfo } from "@/components/admin/MetricInfo";
import type { ReactNode } from "react";

interface Props {
    title:    string;
    tooltip?: string;
    right?:   ReactNode;
}

export function PanelHeader({ title, tooltip, right }: Props) {
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Box display="flex" alignItems="center" gap={0.75}>
                <Typography
                    sx={{
                        fontSize: "9px",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: "0.4em",
                        textTransform: "uppercase",
                        color: "rgba(0,0,0,0.45)",
                    }}
                >
                    {title}
                </Typography>
                {tooltip && <MetricInfo text={tooltip} />}
            </Box>
            {right}
        </Box>
    );
}
