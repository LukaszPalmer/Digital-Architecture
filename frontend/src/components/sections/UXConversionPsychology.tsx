// src/components/sections/UXConversionPsychology.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// E-E-A-T: Wissenschaftliche Tiefe — Hick's Law, Fitts's Law, Gestaltgesetze.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PSYCHOLOGY_PRINCIPLES = [
    {
        id: "PSY-01",
        category: "ENTSCHEIDUNG",
        title: "Hick's Law",
        subtitle: "Weniger Optionen = schnellere Entscheidungen",
        description:
            "Die Entscheidungszeit steigt logarithmisch mit der Anzahl der Optionen. Ein Onlineshop mit 12 Navigationseintraegen ueberfordert — einer mit 5 klar strukturierten Kategorien konvertiert. Wir reduzieren Choices auf das Wesentliche und strukturieren Informationsarchitekturen so, dass Nutzer in unter 3 Sekunden zum naechsten Schritt finden.",
        formula: "RT = a + b · log₂(n)",
        application: "Navigation, Filter, CTA-Platzierung",
    },
    {
        id: "PSY-02",
        category: "INTERAKTION",
        title: "Fitts's Law",
        subtitle: "Groesse und Distanz bestimmen die Klickrate",
        description:
            "Die Zeit, um ein Ziel zu erreichen, haengt von seiner Groesse und Entfernung ab. Kleine Buttons in der Ecke werden seltener geklickt als prominente CTAs im primaeren Viewport. Wir dimensionieren interaktive Elemente nach Fitts's Law — Touch-Targets mindestens 44×44px, primaere Aktionen im Daumenbereich auf Mobile.",
        formula: "MT = a + b · log₂(1 + D/W)",
        application: "Button-Sizing, Mobile Touch-Targets, CTA-Platzierung",
    },
    {
        id: "PSY-03",
        category: "WAHRNEHMUNG",
        title: "Gestaltgesetze",
        subtitle: "Visuelle Hierarchie steuert den Blickverlauf",
        description:
            "Naahe, Aehnlichkeit, Geschlossenheit und Kontinuitaet — die Gestaltgesetze bestimmen, wie Nutzer visuelle Informationen gruppieren und priorisieren. Wir nutzen Proximity fuer logische Content-Gruppierung, Kontrast fuer Visual Hierarchy und Whitespace als aktives Design-Element. Das Ergebnis: Nutzer scannen Ihre Seite in der beabsichtigten Reihenfolge.",
        formula: "Proximity + Similarity + Closure",
        application: "Layout-Struktur, Card-Design, Content-Gruppierung",
    },
    {
        id: "PSY-04",
        category: "VERTRAUEN",
        title: "Aesthetic-Usability Effect",
        subtitle: "Schoenes Design wird als funktionaler wahrgenommen",
        description:
            "Nutzer tolerieren kleinere Usability-Probleme bei aesthetisch ansprechenden Interfaces — und bewerten sie als einfacher zu bedienen, auch wenn die objektive Usability identisch ist. Professionelles Visual Design ist kein Luxus, sondern ein messbarer Vertrauensfaktor: Studien zeigen, dass aesthetische Webseiten 75 % mehr Glaubwuerdigkeit erzeugen.",
        formula: "Aesthetik → Vertrauen → Conversion",
        application: "Brand-Design, Landing Pages, Produktseiten",
    },
];

const DESIGN_SYSTEM_BENEFITS = [
    {
        metric: "−67 %",
        label: "Weniger Inkonsistenzen",
        description: "Skalierbare Komponenten-Bibliotheken (Figma zu React) eliminieren visuelle Abweichungen.",
    },
    {
        metric: "−40 %",
        label: "Schnellere Entwicklung",
        description: "Wiederverwendbare UI-Components reduzieren die Entwicklungszeit fuer neue Features.",
    },
    {
        metric: "+120 %",
        label: "Hoehere Conversion",
        description: "Konsistentes, psychologisch optimiertes Design steigert die Conversion messbar.",
    },
    {
        metric: "0",
        label: "Design-Schulden",
        description: "Token-basierte Design Systems verhindern technische und visuelle Schulden langfristig.",
    },
];

export default function UXConversionPsychology() {
    return (
        <section
            aria-labelledby="ux-psychology-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Psychologie der Conversion — E-E-A-T Deep Dive ]
                            </span>
                            <h2
                                id="ux-psychology-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Warum Nutzer
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    kaufen — oder gehen.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            UX Design ist angewandte Psychologie. Vier
                            wissenschaftlich fundierte Prinzipien, die den
                            Unterschied zwischen Bounce und Conversion
                            bestimmen — und wie wir sie in jedem Interface
                            implementieren.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── UI vs UX EXPLAINER ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-16 md:mb-24 border border-[#000000]">
                        <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                            <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                UI vs. UX — Der entscheidende Unterschied
                            </span>
                            <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                Semantic SEO
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                            <div className="p-8 md:p-10 bg-[#FFFFFF]">
                                <span className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-black tracking-tighter uppercase text-[#001F3F] block mb-4">
                                    UI — User Interface
                                </span>
                                <p className="text-[14px] leading-relaxed text-[#000000]/70 mb-4">
                                    UI Design ist die visuelle Schicht: Typografie, Farben,
                                    Spacing, Icons und Layout. Es bestimmt, wie ein
                                    Interface aussieht — die aesthetische Identitaet
                                    Ihres digitalen Produkts.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Typografie", "Farbsystem", "Icons", "Layout", "Visual Hierarchy"].map((tag) => (
                                        <span key={tag} className="bg-[#001F3F]/08 px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest text-[#001F3F] uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 md:p-10 bg-[#001F3F]">
                                <span className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-black tracking-tighter uppercase text-[#FFFFFF] block mb-4">
                                    UX — User Experience
                                </span>
                                <p className="text-[14px] leading-relaxed text-[#FFFFFF]/70 mb-4">
                                    UX Design ist die Psychologie dahinter: Nutzerforschung,
                                    Informationsarchitektur, Usability-Tests und Conversion-
                                    Optimierung. Es bestimmt, wie ein Interface funktioniert
                                    und wie Nutzer sich dabei fuehlen.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["User Research", "IA", "Usability", "Conversion", "Accessibility"].map((tag) => (
                                        <span key={tag} className="bg-[#FFFFFF]/10 px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest text-[#FFFFFF] uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                    UI ohne UX = Dekoration
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                    UX ohne UI = Wireframe
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── PSYCHOLOGY PRINCIPLES ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#000000]">
                    {PSYCHOLOGY_PRINCIPLES.map((principle) => (
                        <div
                            key={principle.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {principle.category}
                                </span>
                                <span className="text-[12px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {principle.id}
                                </span>
                            </div>

                            <h3 className="text-[clamp(1.2rem,2.2vw,1.7rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-2">
                                {principle.title}
                            </h3>
                            <p className="text-[13px] font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/70 transition-colors mb-4">
                                {principle.subtitle}
                            </p>

                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-6">
                                {principle.description}
                            </p>

                            <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors">
                                <code className="text-[11px] font-mono text-[#001F3F]/60 group-hover:text-[#FFFFFF]/50 transition-colors">
                                    {principle.formula}
                                </code>
                                <span className="text-[10px] font-mono font-bold text-[#000000]/50 group-hover:text-[#FFFFFF]/60 tracking-[0.15em] uppercase transition-colors">
                                    Anwendung: {principle.application}
                                </span>
                            </div>
                        </div>
                    ))}
                </RevealGrid>

                {/* ── DESIGN SYSTEM VS TEMPLATES ── */}
                <ScrollReveal delay={100}>
                    <div className="mt-20 md:mt-28">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-4">
                            [ Design Systems vs. statische Templates ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#000000] tracking-[-0.02em] uppercase leading-[0.92] mb-6">
                            Skalierbare Systeme
                            <span className="italic font-normal text-[#001F3F]"> statt Einweg-Designs.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#000000]/65 max-w-3xl mb-12">
                            Statische Templates machen jede Aenderung zum teuren
                            Eingriff. Ein skalierbares Design System mit Figma
                            Variables und React Component Library spart langfristig
                            Entwicklungskosten — weil neue Features auf bestehenden
                            Bausteinen aufbauen, statt von Null zu starten. Die
                            Design-to-Code Pipeline von Figma zu Tailwind eliminiert
                            Interpretationsfehler im Handoff.
                        </p>
                    </div>
                </ScrollReveal>

                <RevealGrid className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#000000]">
                    {DESIGN_SYSTEM_BENEFITS.map((item) => (
                        <div
                            key={item.label}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] flex flex-col gap-3 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <span className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-black text-[#001F3F] group-hover:text-[#FFFFFF] tracking-tighter transition-colors leading-none">
                                {item.metric}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#000000]/65 group-hover:text-[#FFFFFF]/65 tracking-[0.3em] uppercase transition-colors">
                                {item.label}
                            </span>
                            <p className="text-[12px] leading-relaxed text-[#000000]/55 group-hover:text-[#FFFFFF]/60 transition-colors">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
