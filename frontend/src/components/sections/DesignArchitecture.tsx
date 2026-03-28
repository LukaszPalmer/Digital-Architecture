// src/components/sections/DesignArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Token Cascade + Component Hierarchy.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const TOKEN_LAYERS = [
    {
        level: "01",
        name: "Brand Primitives",
        desc: "Rohe Werte: Hex-Farben, px-Größen, font-weights",
        examples: ["#001F3F", "#FFFFFF", "16px", "700"],
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        exampleColor: "text-[#FFFFFF]/55",
    },
    {
        level: "02",
        name: "Semantic Tokens",
        desc: "Bedeutungsgebundene Aliase auf Primitive",
        examples: ["color.primary", "spacing.md", "text.heading"],
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        exampleColor: "text-[#000000]/55",
    },
    {
        level: "03",
        name: "Component Tokens",
        desc: "Komponent-spezifische Token-Bindungen",
        examples: ["btn.bg", "card.padding", "nav.height"],
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        exampleColor: "text-[#FFFFFF]/55",
    },
    {
        level: "04",
        name: "Tailwind Config",
        desc: "Token-System als Tailwind-Erweiterung exportiert",
        examples: ["extend.colors", "extend.spacing", "extend.fontFamily"],
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        exampleColor: "text-[#FFFFFF]/55",
    },
];

const COMPONENT_LEVELS = [
    {
        level: "ATOMS",
        desc: "Button, Input, Badge, Icon, Label",
        count: "20–40 Komponenten",
        bg: "bg-[#FFFFFF]",
        border: "border-[#000000]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        level: "MOLECULES",
        desc: "SearchBar, FormField, Card, NavItem",
        count: "15–25 Komponenten",
        bg: "bg-[#001F3F]",
        border: "border-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        level: "ORGANISMS",
        desc: "Navbar, Footer, Hero, Pricing, Forms",
        count: "10–20 Sektionen",
        bg: "bg-[#000000]",
        border: "border-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
];

const INTEGRATION_SPECS = [
    {
        id: "DSN-INT-01",
        title: "Tailwind v4 Config",
        description:
            "Token-System als `tailwind.config.ts` exportiert — alle Farben, Spacing-Werte und Typografie-Skalen direkt als Utility-Klassen verfügbar. Kein Inline-Styling, kein CSS-Chaos.",
        spec: "ZERO INLINE CSS",
    },
    {
        id: "DSN-INT-02",
        title: "TypeScript Token Types",
        description:
            "Vollständig typisierte Token-Interfaces in TypeScript — Autocomplete für jeden Designwert im Editor. Falsche Token-Namen werden zur Compile-Zeit gefunden, nicht zur Runtime.",
        spec: "TYPE-SAFE TOKENS",
    },
    {
        id: "DSN-INT-03",
        title: "A11y Automatisierung",
        description:
            "Axe-Core in CI/CD-Pipeline integriert — WCAG-Verstöße blockieren den Deploy. Kontrastverhältnisse werden automatisch gegen >4.5:1 (AA) und >7:1 (AAA) geprüft.",
        spec: "AUTO A11Y CHECK",
    },
];

export default function DesignArchitecture() {
    return (
        <section
            aria-labelledby="design-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Token Cascade & Component Blueprint ]
                            </span>
                            <h2
                                id="design-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Architektur
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    im Detail.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Die Token-Cascade von Brand-Primitiven bis
                            zur Tailwind-Konfiguration — und die
                            Atomic-Design-Hierarchie als Fundament.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── TOKEN CASCADE DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Token Cascade — 4 Layer Architecture ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        Design Token Pipeline
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Single Source of Truth
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#000000]">
                                {TOKEN_LAYERS.map((layer) => (
                                    <div key={layer.level} className={`${layer.bg} p-6 md:p-8 flex flex-col gap-3`}>
                                        <span className={`text-[9px] font-mono font-black tracking-[0.4em] uppercase ${layer.exampleColor}`}>
                                            LAYER {layer.level}
                                        </span>
                                        <p className={`text-[clamp(0.9rem,2vw,1.2rem)] font-black tracking-tight uppercase leading-tight ${layer.textColor}`}>
                                            {layer.name}
                                        </p>
                                        <p className={`text-[12px] leading-snug ${layer.exampleColor}`}>
                                            {layer.desc}
                                        </p>
                                        <div className="flex flex-col gap-1 mt-2">
                                            {layer.examples.map((ex) => (
                                                <span key={ex} className={`text-[10px] font-mono ${layer.exampleColor} tracking-wide`}>
                                                    {ex}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Unidirektionale Abhängigkeit
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Änderung propagiert atomar
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── ATOMIC DESIGN HIERARCHY ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Atomic Design — Component Hierarchy ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Atoms → Molecules → Organisms
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Kompositions-Hierarchie
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                                {COMPONENT_LEVELS.map((lvl) => (
                                    <div key={lvl.level} className={`${lvl.bg} p-8 md:p-10 flex flex-col gap-4`}>
                                        <span className={`text-[clamp(1.6rem,3vw,2.4rem)] font-black tracking-tighter ${lvl.textColor}`}>
                                            {lvl.level}
                                        </span>
                                        <p className={`text-[12px] leading-relaxed ${lvl.subColor}`}>
                                            {lvl.desc}
                                        </p>
                                        <div className={`inline-flex self-start border ${lvl.border} px-3 py-1.5`}>
                                            <span className={`text-[9px] font-mono font-black tracking-widest uppercase ${lvl.subColor}`}>
                                                {lvl.count}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Jede Komponente isoliert entwickelt
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        100% TypeScript typisiert
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
