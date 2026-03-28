// src/components/sections/UXUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "SAAS",
        title: "Produkt-Redesign",
        description:
            "Vollständiges Redesign eines bestehenden SaaS-Produkts — von der IA-Analyse über Usability-Tests mit echten Nutzern bis zum produktionsreifen Design System. Messbares Ziel: Bounce-Rate −40%.",
        metrics: ["Full IA Rebuild", "Usability Tests", "−40% Bounce"],
    },
    {
        id: "UC-02",
        segment: "MOBILE",
        title: "Native App Design",
        description:
            "iOS und Android-Designs aus einer Figma-Quelle — mit Platform-Conventions für beide Systeme. Gestures, Bottom-Sheets und Navigation-Patterns folgen jeweils den nativen Erwartungen der User.",
        metrics: ["iOS + Android", "Platform Patterns", "Gesture Design"],
    },
    {
        id: "UC-03",
        segment: "LAUNCH",
        title: "New Product Launch",
        description:
            "Zero-to-One-Design für neue Produkte: von der Vision zum ersten produktionsreifen Screen. Kein Design ohne User-Research — jede Interface-Entscheidung ist durch Interviews oder Tests validiert.",
        metrics: ["Zero to One", "Research-First", "Launch-Ready"],
    },
    {
        id: "UC-04",
        segment: "SYSTEM",
        title: "Design System Aufbau",
        description:
            "Aufbau eines unternehmensweiten Design Systems mit Figma Variables, Component Library und Developer-Handoff-Protokoll. Skaliert von einem auf hundert Entwickler ohne visuelle Inkonsistenz.",
        metrics: ["Figma Variables", "Component Lib", "Multi-Team Scale"],
    },
    {
        id: "UC-05",
        segment: "E-COMMERCE",
        title: "Conversion-UX Optimierung",
        description:
            "A/B-Test-basierte UX-Optimierung für Produktseiten, Checkout-Flows und Warenkorb. Hypothesen werden durch Heatmaps und Session-Recordings generiert — kein Design ohne Conversion-Daten.",
        metrics: ["A/B Test Design", "Heatmap Analysis", "+120% Conversion"],
    },
    {
        id: "UC-06",
        segment: "ONBOARDING",
        title: "SaaS Onboarding Flows",
        description:
            "Aktivierungs-optimierte Onboarding-Flows, die neue Nutzer zum ersten Aha-Moment führen. Jeder Screen wird gemessen — Drop-off-Rate pro Schritt ist der einzige relevante Erfolgsindikator.",
        metrics: ["Activation Metric", "Drop-off Tracking", "Aha Moment"],
    },
];

export default function UXUseCases() {
    return (
        <section
            aria-labelledby="ux-uc-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Production Use Cases ]
                            </span>
                            <h2
                                id="ux-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wo UX-Design
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    den Unterschied macht.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Szenarien, in denen präzises Interface-
                            Design messbare Business-Ergebnisse
                            produziert — nicht nur visuelle Verbesserungen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── USE CASE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {USE_CASES.map((uc) => (
                        <div
                            key={uc.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {uc.segment}
                                </span>
                                <span className="text-[12px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {uc.id}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.1rem,2vw,1.6rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {uc.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {uc.description}
                            </p>
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {uc.metrics.map((metric) => (
                                    <li
                                        key={metric}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            {metric}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
