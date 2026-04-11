"use client";

// Abschnitts-Trenner mit kleiner Monospace-Caption + optionalem Info-Icon.

import { Box, Divider, Typography } from "@mui/material";
import { MetricInfo } from "@/components/admin/MetricInfo";

interface Props {
    label:    string;
    tooltip?: string;
}

export function SectionLabel({ label, tooltip }: Props) {
    return (
        <Box display="flex" alignItems="center" gap={2}>
            <Box display="flex" alignItems="center" gap={1}>
                <Typography
                    sx={{
                        fontSize: "9px",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: "0.5em",
                        color: "rgba(0,0,0,0.35)",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                    }}
                >
                    {label}
                </Typography>
                {tooltip && <MetricInfo text={tooltip} />}
            </Box>
            <Divider sx={{ flex: 1 }} />
        </Box>
    );
}
