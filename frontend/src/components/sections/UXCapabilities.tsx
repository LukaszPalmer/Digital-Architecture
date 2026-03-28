// src/components/sections/UXCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "UX-01",
        category: "STRATEGIE",
        title: "Information Architecture",
        description:
            "Nutzerflows, Sitemaps und Content-Hierarchien werden aus Nutzerdaten konstruiert. Card-Sorting und Tree-Testing validieren die IA bevor ein Pixel gesetzt wird — keine Annahmen, nur Evidenz.",
        specs: ["Card Sorting", "Tree Testing", "Flow Mapping"],
    },
    {
        id: "UX-02",
        category: "PROTOTYPING",
        title: "Wireframe & Prototype",
        description:
            "Low-Fidelity für strukturelle Entscheidungen, High-Fidelity für User-Tests. Figma-Prototypen mit vollständiger Interaktionslogik — Users testen echte Flows, keine statischen Bilder.",
        specs: ["Lo-Fi Wireframes", "Hi-Fi Prototyping", "Interaction Flows"],
    },
    {
        id: "UX-03",
        category: "VISUAL",
        title: "Visual Design System",
        description:
            "Typografie-Hierarchie, Farb-Token-System und Spacing-Skala als Figma-Components. Konsistenz durch erzwungene Token-Nutzung — kein freies Styling, keine visuellen Inkonsistenzen.",
        specs: ["Figma Variables", "Component Library", "Style Guide"],
    },
    {
        id: "UX-04",
        category: "RESEARCH",
        title: "User Research & Testing",
        description:
            "Nutzerinterviews, Usability-Tests und Heatmap-Analysen als Grundlage für Design-Entscheidungen. Task-Completion-Rate und Error-Rate werden gemessen, nicht geraten.",
        specs: ["User Interviews", "Usability Tests", "Heatmap Analysis"],
    },
    {
        id: "UX-05",
        category: "MOTION",
        title: "Motion Design",
        description:
            "Page-Transitions, Micro-Interactions und Feedback-States als kohärentes Bewegungssystem. Alle Animationen respektieren `prefers-reduced-motion` — Inklusion als Design-Prinzip.",
        specs: ["Page Transitions", "Micro Interactions", "Reduced Motion"],
    },
    {
        id: "UX-06",
        category: "HANDOFF",
        title: "Developer Handoff",
        description:
            "Vollständige Figma-Dokumentation mit Inspect-Mode, Komponent-Annotationen und Token-Mapping zu Tailwind-Klassen. Kein Raten für Entwickler — jede Maßangabe ist messbar und implementierbar.",
        specs: ["Figma Inspect", "Token Mapping", "Dev Annotations"],
    },
];

export default function UXCapabilities() {
    return (
        <section
            aria-labelledby="ux-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Design Capabilities ]
                            </span>
                            <h2
                                id="ux-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was UX-Design
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    bedeutet.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Disziplinen, die ein Interface von einer
                            visuellen Übung zu einer messbaren
                            Business-Infrastruktur machen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── CAPABILITIES GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {CAPABILITIES.map((cap) => (
                        <div
                            key={cap.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                    {cap.category}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {cap.id}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.2rem,2.2vw,1.7rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {cap.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {cap.description}
                            </p>
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {cap.specs.map((spec) => (
                                    <li
                                        key={spec}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            {spec}
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
