// src/components/sections/DesignUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "FINTECH",
        title: "Regulierte UI-Systeme",
        description:
            "Strikte A11y-Konformität und konsistente Formular-Patterns für Zahlungs- und Banking-Interfaces. Token-System stellt sicher, dass Kontrastverhältnisse und Focus-States niemals verletzt werden.",
        metrics: ["WCAG AAA", "Form Patterns", "Audit-Proof"],
    },
    {
        id: "UC-02",
        segment: "HEALTHCARE",
        title: "Medizinische Dashboards",
        description:
            "Komplexe Datenhierarchien in zugängliche UI-Strukturen übersetzt. Farbkodierung für kritische Informationen nach WCAG — Barrierefreiheit ist hier keine Option, sondern gesetzliche Pflicht.",
        metrics: ["WCAG 2.1 AAA", "Data Hierarchy", "Color Coding"],
    },
    {
        id: "UC-03",
        segment: "E-COMMERCE",
        title: "Conversion-optimierte UI",
        description:
            "Produktseiten, Checkout-Flows und PDP-Komponenten als konsistentes System. A/B-Test-Varianten über Token-Aliase — kein Code-Change für Farb-Experimente im Marketing.",
        metrics: ["Token A/B Tests", "Checkout System", "+40% Conversion"],
    },
    {
        id: "UC-04",
        segment: "SAAS",
        title: "Skalierbare App-Systeme",
        description:
            "Multi-Produkt-Unternehmen mit einem zentralen Token-System. Feature-Teams entwickeln autonom, bleiben aber visuell konsistent — eine Wahrheitsquelle für hunderte Entwickler.",
        metrics: ["Multi-Team", "One Token System", "Visual Consistency"],
    },
    {
        id: "UC-05",
        segment: "MEDIA",
        title: "Content-Plattformen",
        description:
            "Rich-Text-Rendering, Artikel-Layouts und Autor-Profile als konsistentes System. Dark Mode per CSS-Variable ohne JS — sofortiges Theme-Switching für maximalen Leserkomfort.",
        metrics: ["Dark Mode", "Rich Typography", "CSS Variables"],
    },
    {
        id: "UC-06",
        segment: "ENTERPRISE",
        title: "Interne Tool-Systeme",
        description:
            "Admin-Panels, Ops-Dashboards und Mitarbeiter-Tools mit einheitlichem Design-Vokabular. Schulungsaufwand sinkt drastisch, wenn alle Oberflächen denselben Mustern folgen.",
        metrics: ["Consistent UX", "Low Training", "Component Reuse"],
    },
];

export default function DesignUseCases() {
    return (
        <section
            aria-labelledby="design-uc-heading"
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
                                id="design-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wo das System
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    entscheidend ist.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Produktionsszenarien, in denen ein
                            professionelles Design System den Unterschied
                            zwischen Chaos und Skalierung definiert.
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
