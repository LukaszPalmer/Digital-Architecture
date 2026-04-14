// src/components/sections/DesignCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: SOLUTION — Tailwind Design Ops als Antwort auf Design-Chaos.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "DSN-01",
        category: "TOKENS",
        title: "Design Token Architektur",
        description:
            "Dreistufige Token-Hierarchie: Primitive Werte (Hex-Farben, px-Größen) → semantische Aliase (color.brand.primary, spacing.section) → komponentenspezifische Tokens (btn.bg, card.padding). Eine Änderung im Brand-Token propagiert sich atomar durch das gesamte System — kein manuelles Nacharbeiten, keine vergessenen Stellen. Das ist der Kern von professionellem Webdesign: Konsistenz als technisches Artefakt, nicht als Konvention.",
        specs: ["Primitive Tokens", "Semantic Aliase", "Component Tokens", "TypeScript-typisiert"],
    },
    {
        id: "DSN-02",
        category: "KOMPONENTEN",
        title: "Atomic Component Library",
        description:
            "Atoms → Molecules → Organisms nach der Atomic Design Methodik. Jede Komponente ist isoliert entwickelt, vollständig in TypeScript typisiert und mit einem Varianten-Prop-System für maximale Kompositionsflexibilität ausgestattet. Ein Button existiert nicht als einzelne CSS-Klasse — er ist ein typisiertes Interface mit size, variant und state Props. Für Webdesigner und Entwickler gleichermaßen: Einmal definiert, überall perfekt.",
        specs: ["Atomic Design", "Variant Props", "Compound Components", "Regressions-Tests"],
    },
    {
        id: "DSN-03",
        category: "UTILITY-FIRST",
        title: "Tailwind CSS & PurgeCSS",
        description:
            "Utility-First CSS eliminiert die größte Schwäche traditioneller Stylesheets: toten Code. PurgeCSS scannt jeden Template-Pfad und entfernt ungenutzte Klassen — das Produktions-Bundle schrumpft auf unter 10 KB. Kein Inline-Styling, keine Spezifitätskonflikte, keine Runtime-Berechnung. Für Unternehmen, die ihre Webseite designen und dabei maximale Performance anstreben, ist Tailwind die effizienteste Lösung am Markt.",
        specs: ["PurgeCSS", "< 10 KB Bundle", "0ms Runtime", "Utility Composition"],
    },
    {
        id: "DSN-04",
        category: "LAYOUT",
        title: "Responsive Grid & Fluid Type",
        description:
            "Mobile-First Grid mit Fluid Typography via clamp()-Funktionen. Konsistente Spacing-Skala auf allen Breakpoints — von 320px bis 4K-Displays ohne ein einziges Media-Query im Component-Code. Das Grid-System wird nicht für jede Seite neu erfunden, sondern ist als Token-Set in der Tailwind-Konfiguration verankert. UI/UX Design, das auf jedem Gerät identisch funktioniert.",
        specs: ["Fluid Typography", "clamp() System", "Mobile-First", "Token-basiertes Spacing"],
    },
    {
        id: "DSN-05",
        category: "MOTION",
        title: "Animation & Interaction Design",
        description:
            "Scroll-Reveal-Animationen mit IntersectionObserver, Micro-Interactions auf Hover-States und Page-Transitions — alles als deklarative Utility-Klassen. Jede Animation respektiert prefers-reduced-motion als nicht-verhandelbare A11y-Anforderung. Performance-Budget: Animationen dürfen den Main Thread niemals blockieren. Das unterscheidet professionelles UI/UX Design von dekorativer Spielerei.",
        specs: ["Scroll Reveals", "Micro Interactions", "Reduced Motion", "0 TBT Impact"],
    },
    {
        id: "DSN-06",
        category: "A11Y",
        title: "Barrierefreiheit & WCAG AAA",
        description:
            "WCAG 2.1 AAA als nicht-verhandelbare Engineering-Anforderung. Kontrastverhältnisse über 7:1 auf allen Farbkombinationen, vollständige Keyboard-Navigation, semantisches HTML5 mit korrekter Heading-Hierarchie und ARIA-Patterns für jede interaktive Komponente. Axe-Core in der CI/CD-Pipeline blockiert jeden Deploy, der Standards verletzt. Barrierefreies Webdesign ist keine Option — es ist Pflicht.",
        specs: [">7:1 Kontrast", "Keyboard Nav", "ARIA Patterns", "Axe-Core CI/CD"],
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
                                [ Tailwind Design Ops — Die Lösung ]
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
                            Sechs Engineering-Disziplinen, die ein Design System
                            von einem Styleguide zu einer produktionskritischen
                            Infrastruktur machen. Unsere Architektur ist darauf
                            ausgelegt, Webseiten Design Kosten langfristig zu
                            senken und professionelles Webdesign zu skalieren.
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
