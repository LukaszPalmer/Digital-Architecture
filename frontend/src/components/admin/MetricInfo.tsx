"use client";

import { Tooltip } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface Props {
    text:    string;
    accent?: boolean; // white icon on dark background
}

export function MetricInfo({ text, accent = false }: Props) {
    return (
        <Tooltip
            title={text}
            placement="top"
            arrow
            componentsProps={{
                tooltip: {
                    sx: {
                        bgcolor: "#001F3F",
                        color: "#FFFFFF",
                        fontSize: "11px",
                        fontFamily: "monospace",
                        lineHeight: 1.6,
                        maxWidth: 260,
                        p: "8px 12px",
                        borderRadius: 0,
                        "& .MuiTooltip-arrow": { color: "#001F3F" },
                    },
                },
            }}
        >
            <InfoOutlinedIcon
                sx={{
                    fontSize: 13,
                    color: accent ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)",
                    cursor: "help",
                    flexShrink: 0,
                    "&:hover": {
                        color: accent ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.55)",
                    },
                }}
            />
        </Tooltip>
    );
}
