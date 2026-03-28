// src/components/sections/DashProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Requirements Workshop",
        description:
            "Definition von Benutzerrollen, Datensources, KPI-Definitionen und kritischen User Flows. Welche Metriken sind entscheidungsrelevant? Wie granular muss das RBAC-System sein?",
        duration: "TAGE 1–2",
        tag: "ANALYSE",
    },
    {
        step: "02",
        title: "Theme Engineering",
        description:
            "Custom MUI Theme mit Brand-Token-System — Material-Defaults werden vollständig überschrieben. Farbpalette, Typografie, Spacing und Component-Variants werden als typisiertes Theme-Objekt definiert.",
        duration: "TAGE 3–4",
        tag: "DESIGN",
    },
    {
        step: "03",
        title: "Component Build",
        description:
            "Systematischer Aufbau: DataGrid-Konfiguration, Chart-Komponenten, KPI-Cards, Formular-Systeme und Navigation. RBAC-Gates werden auf jede kritische Aktion und Ansicht angewendet.",
        duration: "TAGE 5–12",
        tag: "ENTWICKLUNG",
    },
    {
        step: "04",
        title: "Data Integration",
        description:
            "Anbindung der Backends via React Query: REST-Endpoints für CRUD, WebSocket-Subscriptions für Echtzeit-Daten, MongoDB-Aggregation-Pipelines für Analytics-Queries.",
        duration: "TAGE 13–15",
        tag: "INTEGRATION",
    },
];

export default function DashProcess() {
    return (
        <section
            aria-labelledby="dash-process-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/50 uppercase block mb-8">
                                [ Dashboard Protocol ]
                            </span>
                            <h2
                                id="dash-process-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Von Anforderung zu
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/50">
                                    Live Dashboard.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/25 pl-6">
                            Vier Phasen vom Requirements-Workshop bis
                            zum produktiven Enterprise-Dashboard mit
                            Echtzeit-Daten und vollständigem RBAC-System.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PROCESS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#FFFFFF]/20">
                    {PROCESS_STEPS.map((item) => (
                        <div
                            key={item.step}
                            className="group relative p-8 md:p-10 border-r border-b border-[#FFFFFF]/20 flex flex-col min-h-100 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <span
                                className="absolute top-6 right-6 text-[clamp(3rem,5vw,4.5rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#001F3F]/08 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {item.step}
                            </span>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="bg-[#FFFFFF]/15 group-hover:bg-[#001F3F]/10 px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {item.tag}
                                </span>
                                <span className="text-[9px] font-mono font-bold text-[#FFFFFF]/45 group-hover:text-[#001F3F]/55 tracking-[0.3em] uppercase transition-colors">
                                    {item.duration}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-5">
                                {item.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/70 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/25 group-hover:border-[#001F3F]/30 pl-4 mt-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
