"use client";

// Panel: Leads (formerly "Form Conversion Rate").
// Zeigt Formular-Öffnungen → gesendete Leads + Quote.
// Business-relevante Hauptmetrik für ein Agentur-Dashboard.

import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { PanelHeader } from "./PanelHeader";

interface Props {
    data: { starts: number; submits: number; rate: number };
}

export function LeadsPanel({ data }: Props) {
    const { starts, submits, rate } = data;

    const steps = [
        { label: "Formular geöffnet", value: starts,  pct: 100 },
        { label: "Lead abgesendet",   value: submits, pct: starts > 0 ? (submits / starts) * 100 : 0 },
    ];

    // Farbskala für die Lead-Rate (gut/okay/schwach)
    const rateColor =
        rate >= 10 ? "#2E7D32"
      : rate >= 5  ? "#001F3F"
      : rate >= 1  ? "#005bb5"
      :              "rgba(0,0,0,0.4)";

    return (
        <Paper elevation={0} sx={{
            border: "1px solid rgba(0,0,0,0.10)", borderRadius: 0, height: "100%", p: 3,
        }}>
            <PanelHeader
                title="Leads & Formulare"
                tooltip="Deine Haupt-Business-Metrik: Wie viele Besucher öffnen das Kontaktformular und wie viele schicken es ab. Niedrige Quote = Formular zu lang oder missverständlich."
            />

            <Box display="flex" flexDirection="column" gap={2.5}>
                {steps.map((step, i) => (
                    <Box key={step.label}>
                        <Box display="flex" justifyContent="space-between" mb={0.75}>
                            <Typography sx={{
                                fontSize: "11px", fontFamily: "monospace",
                                color: "rgba(0,0,0,0.55)", fontWeight: 600,
                            }}>
                                {step.label}
                            </Typography>
                            <Typography sx={{
                                fontSize: "12px", fontFamily: "monospace",
                                fontWeight: 700, color: "#001F3F",
                            }}>
                                {step.value.toLocaleString("de-DE")}
                            </Typography>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={step.pct}
                            sx={{
                                height: 6, borderRadius: 0,
                                bgcolor: "rgba(0,31,63,0.07)",
                                "& .MuiLinearProgress-bar": {
                                    bgcolor: i === 0 ? "#001F3F" : "#005bb5",
                                    borderRadius: 0,
                                },
                            }}
                        />
                    </Box>
                ))}

                <Box mt={1} pt={2} sx={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography sx={{
                            fontSize: "10px", fontFamily: "monospace",
                            letterSpacing: "0.3em", textTransform: "uppercase",
                            color: "rgba(0,0,0,0.4)",
                        }}>
                            Lead Rate
                        </Typography>
                        <Typography sx={{
                            fontSize: "2rem", fontWeight: 900,
                            letterSpacing: "-0.03em", color: rateColor,
                        }}>
                            {rate}%
                        </Typography>
                    </Box>
                    <Typography sx={{
                        fontSize: "10px", fontFamily: "monospace",
                        color: "rgba(0,0,0,0.35)", mt: 0.5,
                    }}>
                        Von den User, die das Formular geöffnet haben
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}
