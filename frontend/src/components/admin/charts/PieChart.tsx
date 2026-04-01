"use client";

import { PieChart as MuiPieChart } from "@mui/x-charts/PieChart";
import { Paper, Typography } from "@mui/material";

interface Props {
    title: string;
    data: { name: string; value: number }[];
}

const COLORS = ["#001F3F", "#003d7a", "#005bb5", "#0077f0", "#3399ff", "#66b3ff"];

export function PieChartWidget({ title, data }: Props) {
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
            <Typography
                sx={{
                    fontSize: "9px", fontFamily: "monospace", fontWeight: 700,
                    letterSpacing: "0.4em", textTransform: "uppercase",
                    color: "rgba(0,0,0,0.45)", mb: 2,
                }}
            >
                {title}
            </Typography>
            <MuiPieChart
                series={[{
                    data: mapped,
                    innerRadius: 40,
                    outerRadius: 90,
                    paddingAngle: 2,
                    cornerRadius: 0,
                }]}
                height={220}
                slotProps={{ legend: { position: { vertical: "middle", horizontal: "right" }, itemMarkWidth: 10, itemMarkHeight: 10, labelStyle: { fontSize: 11 } } }}
            />
        </Paper>
    );
}
