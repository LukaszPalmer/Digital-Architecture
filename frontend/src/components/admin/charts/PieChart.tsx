"use client";

import { PieChart as MuiPieChart } from "@mui/x-charts/PieChart";
import { Paper, Typography, Box } from "@mui/material";
import { MetricInfo } from "@/components/admin/MetricInfo";

interface Props {
    title:    string;
    data:     { name: string; value: number }[];
    tooltip?: string;
}

const COLORS = ["#001F3F", "#003d7a", "#005bb5", "#0077f0", "#3399ff", "#66b3ff", "#99ccff"];

export function PieChartWidget({ title, data, tooltip }: Props) {
    const mapped = data.map((d, i) => ({
        id:    i,
        value: d.value,
        label: d.name,
        color: COLORS[i % COLORS.length],
    }));

    return (
        <Paper
            elevation={0}
            sx={{ p: 3, border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%" }}
        >
            <Box display="flex" alignItems="center" gap={0.75} mb={2}>
                <Typography
                    sx={{
                        fontSize: "9px", fontFamily: "monospace", fontWeight: 700,
                        letterSpacing: "0.4em", textTransform: "uppercase",
                        color: "rgba(0,0,0,0.45)",
                    }}
                >
                    {title}
                </Typography>
                {tooltip && <MetricInfo text={tooltip} />}
            </Box>
            <MuiPieChart
                series={[{
                    data:         mapped,
                    innerRadius:  40,
                    outerRadius:  85,
                    paddingAngle: 2,
                    cornerRadius: 0,
                    valueFormatter: (item) =>
                        `${item.value.toLocaleString("de-DE")}`,
                }]}
                height={220}
            />
        </Paper>
    );
}
