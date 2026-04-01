"use client";

import { LineChart as MuiLineChart } from "@mui/x-charts/LineChart";
import { Paper, Typography } from "@mui/material";

interface Props {
    title: string;
    data: { date: string; count: number }[];
}

export function LineChartWidget({ title, data }: Props) {
    const dates  = data.map(d => d.date);
    const counts = data.map(d => d.count);

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
            <MuiLineChart
                xAxis={[{ scaleType: "point", data: dates }]}
                series={[{ data: counts, color: "#001F3F", area: true, showMark: false }]}
                height={260}
                margin={{ top: 10, bottom: 40, left: 40, right: 10 }}
                sx={{
                    "& .MuiAreaElement-root": { fill: "rgba(0,31,63,0.08)" },
                    "& .MuiChartsAxis-tickLabel": { fontSize: "10px" },
                }}
            />
        </Paper>
    );
}
