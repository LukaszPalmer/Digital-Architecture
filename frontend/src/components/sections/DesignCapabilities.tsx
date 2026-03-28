// src/components/sections/DesignCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "DSN-01",
        category: "TOKENS",
        title: "Design Token Architektur",
        description:
            "Dreistufige Token-Hierarchie: Primitive Werte → semantische Aliase → Komponent-spezifische Tokens. Eine Änderung im Brand-Token propagiert sich atomar durch das gesamte System.",
        specs: ["Primitive Tokens", "Semantic Aliase", "Component Tokens"],
    },
    {
        id: "DSN-02",
        category: "KOMPONENTEN",
        title: "Atomic Component Library",
        description:
            "Atoms → Molecules → Organisms nach Atomic Design. Jede Komponente ist isoliert entwickelt, vollständig typisiert und mit Varianten-Prop-System für maximale Kompositionsflexibilität.",
        specs: ["Atomic Design", "Variant Props", "Compound Components"],
    },
    {
        id: "DSN-03",
        category: "LAYOUT",
        title: "Responsive Grid System",
        description:
            "Mobile-First Grid mit fluid Typography via `clamp()`. Konsistente Spacing-Skala auf allen 6 Breakpoints — von 320px bis 4K ohne ein einziges Media-Query im Component-Code.",
        specs: ["Fluid Typography", "clamp() System", "6 Breakpoints"],
    },
    {
        id: "DSN-04",
        category: "MOTION",
        title: "Motion & Animation System",
        description:
            "Scroll-Reveal-Animationen mit `IntersectionObserver`, Micro-Interactions auf Hover-States und Page-Transitions. Alle Animationen respektieren `prefers-reduced-motion` — A11y first.",
        specs: ["Scroll Reveals", "Micro Interactions", "Reduced Motion"],
    },
    {
        id: "DSN-05",
        category: "THEMING",
        title: "Dark Mode Architektur",
        description:
            "CSS Custom Properties als Token-Layer — kein JavaScript für Theme-Switching. `prefers-color-scheme` Media Query triggert automatisch, manuelle Umschaltung via `data-theme` Attribut.",
        specs: ["CSS Variables", "Zero JS Switch", "System + Manual"],
    },
    {
        id: "DSN-06",
        category: "A11Y",
        title: "Accessibility Engineering",
        description:
            "WCAG 2.1 AAA als nicht-verhandelbare Anforderung. Kontrastverhältnisse >7:1, vollständige Keyboard-Navigation, semantisches HTML, ARIA-Patterns für jede interaktive Komponente.",
        specs: [">7:1 Kontrast", "Keyboard Nav", "ARIA Patterns"],
    },
];

export default function DesignCapabilities() {
    return (
        <section
            aria-labelledby="design-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Design System Capabilities ]
                            </span>
                            <h2
                                id="design-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was das System
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    leistet.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Engineering-Disziplinen, die ein
                            Design System von einem Styleguide zu einer
                            produktionskritischen Infrastruktur machen.
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
