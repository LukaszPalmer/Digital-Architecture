"use client";

import { BarChart as MuiBarChart } from "@mui/x-charts/BarChart";
import { Paper, Typography } from "@mui/material";

interface Props {
    title: string;
    data: { name: string; count: number }[];
    color?: string;
}

export function BarChartWidget({ title, data, color = "#001F3F" }: Props) {
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
            <MuiBarChart
                dataset={data}
                xAxis={[{ scaleType: "band", dataKey: "name" }]}
                series={[{ dataKey: "count", color }]}
                height={220}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                sx={{ "& .MuiChartsAxis-line": { stroke: "rgba(0,0,0,0.12)" } }}
            />
        </Paper>
    );
}
