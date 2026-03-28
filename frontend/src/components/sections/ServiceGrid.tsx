// src/components/sections/ServiceGrid.tsx
// Server Component — RSC-First, 0 TBT. Tooltip ist isolierte Client-Insel.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Tooltip } from "@/components/ui/Tooltip";
import { ServiceDetail } from "@/types/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const SERVICES: ServiceDetail[] = [
    {
        id: "01",
        label: "CLOUD INFRASTRUCTURE",
        title: "High-Availability Clusters",
        description:
            "Konstruktion von global verteilten MongoDB Atlas Clustern mit automatisiertem Sharding für unbegrenzte Skalierbarkeit.",
        technicalSpecs: ["Multi-Region Sharding", "Oplog-Monitoring", "ACID Compliance"],
        tooltip: {
            term: "Cluster-Sharding",
            explanation:
                "Die Aufteilung großer Datensätze auf mehrere Server-Knoten, um Lastspitzen abzufangen.",
            benefit: "Lineare Performance-Skalierung weltweit.",
        },
    },
    {
        id: "02",
        label: "RUNTIME ENGINEERING",
        title: "Next.js 15 Edge Systems",
        description:
            "Entwicklung von Applikationen, die auf der Edge Runtime laufen – physisch nah am Nutzer für LCP < 0.8s.",
        technicalSpecs: ["Partial Prerendering", "React 19 Compiler", "Edge Functions"],
        tooltip: {
            term: "Edge Runtime",
            explanation:
                "Code wird weltweit in Rechenzentren nahe dem User ausgeführt, nicht zentral.",
            benefit: "Minimale Latenz für globale Marktführer.",
        },
    },
    {
        id: "03",
        label: "FINANCIAL ASSETS",
        title: "Stripe Connect Pipelines",
        description:
            "Deep Integration von Zahlungsströmen, inklusive automatisierter Steuerlogik und Echtzeit-Webhook-Verarbeitung.",
        technicalSpecs: ["Custom Flow Logic", "Idempotency Keys", "SCA Compliance"],
        tooltip: {
            term: "Webhook-Pipeline",
            explanation:
                "Echtzeit-Signale von Zahlungsanbietern für sofortige Systemreaktionen.",
            benefit: "Vollautomatische buchhalterische Prozesse.",
        },
    },
    {
        id: "04",
        label: "DATA STRATEGY",
        title: "Aggregation Pipelines",
        description:
            "Transformation komplexer Datenmengen in Echtzeit-Insights durch optimierte Datenbank-Abfragen.",
        technicalSpecs: ["Compute-Optimierung", "Index-Strategy", "Cache-Layering"],
        tooltip: {
            term: "Aggregation Pipeline",
            explanation:
                "Hocheffizienter Prozess zur Datenverarbeitung innerhalb der Datenbank.",
            benefit: "Massive CPU-Einsparung und schnellere Dashboards.",
        },
    },
];

export default function ServiceGrid() {
    return (
        <section
            aria-labelledby="services-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ System_Capabilities // 2026 ]
                            </span>
                            <h2
                                id="services-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Digitale Infrastruktur
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    auf Ingenieurs-Niveau.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/65 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Keine Agentur-Lösungen. Jedes System wird von Grund auf
                            für maximale Performance und Skalierbarkeit konstruiert.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── SERVICE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#000000]">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-130 transition-colors duration-300 hover:bg-[#001F3F] cursor-crosshair"
                        >
                            {/* ID + Label */}
                            <span className="block text-[10px] font-mono font-bold tracking-[0.3em] text-[#001F3F] group-hover:text-[#FFFFFF]/55 mb-10 transition-colors uppercase">
                                [{service.id}] {service.label}
                            </span>

                            {/* Title with Tooltip */}
                            <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-black mb-8 leading-tight transition-colors uppercase tracking-tighter text-[#000000] group-hover:text-[#FFFFFF]">
                                <Tooltip
                                    term={service.tooltip.term}
                                    explanation={service.tooltip.explanation}
                                    benefit={service.tooltip.benefit}
                                >
                                    {service.title}
                                </Tooltip>
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-5 mb-10">
                                {service.description}
                            </p>

                            {/* Tech Specs */}
                            <div className="mt-auto pt-8 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors">
                                <ul className="space-y-3" role="list">
                                    {service.technicalSpecs.map((spec) => (
                                        <li
                                            key={spec}
                                            className="flex items-center gap-3 text-[11px] font-black tracking-[0.15em] uppercase"
                                        >
                                            <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                            <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/85 transition-colors">
                                                {spec}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
