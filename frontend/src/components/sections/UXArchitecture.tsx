// src/components/sections/UXArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Design Process Flow + Figma Component Hierarchy.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const DESIGN_PHASES = [
    {
        phase: "01",
        label: "DISCOVERY",
        desc: "Stakeholder Interviews, Competitor Analysis",
        output: "Brief + Scope",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        phase: "02",
        label: "RESEARCH",
        desc: "User Interviews, Heatmap Analysis",
        output: "Persona + Journey Map",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        phase: "03",
        label: "IA",
        desc: "Sitemap, User Flows, Card Sorting",
        output: "Navigation Structure",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        phase: "04",
        label: "WIREFRAME",
        desc: "Lo-Fi Layouts, Component Sketches",
        output: "Structure Validated",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        phase: "05",
        label: "VISUAL",
        desc: "Hi-Fi Designs, Token System",
        output: "Brand-True UI",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        phase: "06",
        label: "HANDOFF",
        desc: "Figma Inspect, Dev Annotations",
        output: "Zero-Ambiguity Specs",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
];

const FIGMA_LAYERS = [
    {
        label: "VARIABLES",
        desc: "Color, Typography, Spacing Tokens als Figma Variables",
        count: "1 Source of Truth",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        label: "COMPONENTS",
        desc: "Atomic Library: Buttons, Inputs, Cards, Icons",
        count: "Variant-System",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        label: "PAGES",
        desc: "Assembled Screens aus Components + Variables",
        count: "Auto-Update on Token Change",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
];

const INTEGRATION_SPECS = [
    {
        id: "UX-INT-01",
        title: "Figma → Tailwind Mapping",
        description:
            "Jede Figma Variable wird auf eine Tailwind-Klasse gemappt — dokumentiert in der Handoff-Datei. Entwickler implementieren ohne zu raten: `bg-primary` entspricht exakt dem Figma-Token.",
        spec: "1:1 TOKEN MAPPING",
    },
    {
        id: "UX-INT-02",
        title: "A11y Compliance Check",
        description:
            "Alle Farbkombinationen werden gegen WCAG 2.1 AAA (>7:1) geprüft. Figma A11y-Plugin dokumentiert Kontrastverhältnisse — keine Non-Compliant-Kombination verlässt das Design-File.",
        spec: "WCAG AAA VERIFIED",
    },
    {
        id: "UX-INT-03",
        title: "Usability Test Protokoll",
        description:
            "Vor jedem Major-Release wird ein Usability-Test mit 5 repräsentativen Nutzern durchgeführt. Task-Completion-Rate und Error-Rate werden gemessen — Erkenntnisse fließen direkt in die nächste Iteration.",
        spec: "EVIDENCE-BASED",
    },
];

export default function UXArchitecture() {
    return (
        <section
            aria-labelledby="ux-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Design Process & Figma Blueprint ]
                            </span>
                            <h2
                                id="ux-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Prozess
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    im Detail.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Der vollständige Design-Prozess von Discovery
                            bis Handoff — und die Figma-Architektur,
                            die Developer-Handoff zu einer präzisen Übergabe macht.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── DESIGN PROCESS DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Design Process — 6 Phase Pipeline ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        UX/UI Design Pipeline — Figma Native
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Evidence-Based
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[#000000]">
                                {DESIGN_PHASES.map((phase) => (
                                    <div key={phase.phase} className={`${phase.bg} p-5 md:p-6 flex flex-col gap-2`}>
                                        <span className={`text-[9px] font-mono font-black tracking-[0.3em] uppercase ${phase.subColor}`}>
                                            PHASE {phase.phase}
                                        </span>
                                        <p className={`text-[12px] font-black tracking-tight uppercase leading-tight ${phase.textColor}`}>
                                            {phase.label}
                                        </p>
                                        <p className={`text-[10px] leading-snug ${phase.subColor}`}>
                                            {phase.desc}
                                        </p>
                                        <div className={`inline-flex self-start border border-current border-opacity-20 px-2 py-0.5 mt-1`}>
                                            <span className={`text-[8px] font-mono font-black tracking-widest uppercase ${phase.subColor}`}>
                                                {phase.output}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Jede Phase hat validiertes Output
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Usability Tests in Phase 4 + 5
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── FIGMA ARCHITECTURE ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Figma Architecture — Variable & Component System ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Figma Design System Architecture
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Tailwind Token Mapping
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                                {FIGMA_LAYERS.map((layer) => (
                                    <div key={layer.label} className={`${layer.bg} p-8 md:p-10 flex flex-col gap-4`}>
                                        <span className={`text-[clamp(1.3rem,2.5vw,1.8rem)] font-black tracking-tighter uppercase ${layer.textColor}`}>
                                            {layer.label}
                                        </span>
                                        <p className={`text-[13px] leading-relaxed ${layer.subColor}`}>
                                            {layer.desc}
                                        </p>
                                        <div className={`inline-flex self-start border ${layer.bg === "bg-[#FFFFFF]" ? "border-[#000000]" : "border-current border-opacity-30"} px-3 py-1.5`}>
                                            <span className={`text-[9px] font-mono font-black tracking-widest uppercase ${layer.subColor}`}>
                                                {layer.count}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Variables propagieren automatisch
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        1:1 Tailwind Token Mapping
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── INTEGRATION SPECS ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]">
                    {INTEGRATION_SPECS.map((spec) => (
                        <div
                            key={spec.id}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] flex flex-col min-h-72 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-6 transition-colors">
                                {spec.id}
                            </span>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {spec.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-6">
                                {spec.description}
                            </p>
                            <div className="mt-auto">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {spec.spec}
                                </span>
                            </div>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
