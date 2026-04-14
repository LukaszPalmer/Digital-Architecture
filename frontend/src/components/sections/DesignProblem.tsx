// src/components/sections/DesignProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: AGITATION — Warum manuelles CSS und Page-Builder 2026 scheitern.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "68 %",
        title: "Design-Inkonsistenz in Unternehmen",
        description:
            "Zwei Drittel aller Unternehmenswebsites haben keine einheitliche Designsprache. Jede neue Seite wird von einem anderen Webdesigner mit anderen Abständen, Farbtönen und Schriftgrößen gebaut. Das Ergebnis: Eine Webseite, die aussieht wie ein Flickenteppich — und Besucher instinktiv misstrauen lässt. Professionelles Webdesign beginnt dort, wo visuelle Willkür endet.",
    },
    {
        id: "PAIN-02",
        stat: "4x",
        title: "Kosten bei Design-Schulden",
        description:
            "Ohne Design System kosten UI-Änderungen bis zu viermal mehr als nötig. Jeder Button, jede Farbanpassung, jedes neue Feature erfordert manuelles Nacharbeiten an dutzenden Stellen. Die Webseiten Design Kosten explodieren nicht beim Launch — sie explodieren bei jeder Iteration danach. Für Düsseldorfer Unternehmen mit wachsenden digitalen Produkten wird das schnell zum Engpass.",
    },
    {
        id: "PAIN-03",
        stat: "92 %",
        title: "Ungenutztes CSS im Produktions-Bundle",
        description:
            "Herkömmliches CSS wächst mit jeder Seite — wird aber nie kleiner. Eine durchschnittliche Website lädt über 300 KB CSS, von denen bis zu 92 % nie verwendet werden. Das blockiert den Rendering-Pfad, erhöht die Ladezeit und schadet direkt dem Google-Ranking. PurgeCSS und Utility-First Ansätze wie Tailwind eliminieren dieses Problem vollständig.",
    },
    {
        id: "PAIN-04",
        stat: "0",
        title: "Barrierefreiheit bei Page-Buildern",
        description:
            "Die meisten Baukasten-Systeme und Page-Builder ignorieren WCAG-Konformität. Fehlende ARIA-Labels, unzureichende Kontrastverhältnisse und nicht navigierbare Formulare schließen Menschen mit Einschränkungen aus — und verstoßen zunehmend gegen EU-Richtlinien. Professionelles UI/UX Design muss Barrierefreiheit als Fundament begreifen, nicht als Addon.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Manuelles CSS / BEM / SCSS",
        problem: "Jeder neue Webdesigner interpretiert die Naming-Konventionen anders. Spezifitätskonflikte werden mit !important erschlagen. Das Stylesheet wächst monoton — Refactoring wird zum Risiko, weil niemand weiß, welche Klassen noch verwendet werden. Professionelles Webdesign sieht anders aus.",
    },
    {
        label: "Page-Builder (Elementor, Divi, Webflow)",
        problem: "Proprietärer, aufgeblähter Output-Code. Kein Zugang zu Design Tokens, keine programmatische Kontrolle über Konsistenz. Jede Seite ist ein Einzelstück — Skalierung bedeutet manuelles Kopieren und Anpassen. Die Webseiten Design Kosten steigen linear mit jeder neuen Unterseite.",
    },
    {
        label: "CSS-in-JS (Styled Components, Emotion)",
        problem: "Runtime-CSS-Berechnung auf dem Main Thread. Jede Komponente generiert CSS zur Laufzeit — das kostet Millisekunden pro Render. Auf Low-End-Mobilgeräten mit gedrosselter CPU summiert sich das zu spürbaren Verzögerungen. Tailwind kompiliert CSS zur Build-Zeit: 0ms Runtime-Overhead.",
    },
    {
        label: "Design ohne System (Figma → Dev Freestyle)",
        problem: "Der Webdesigner liefert Figma-Screens, die Entwickler interpretieren sie frei. Abstände weichen ab, Farben stimmen nicht exakt, Hover-States sind Glückssache. Ohne Design Tokens als Vertrag zwischen Design und Code entsteht bei jedem Handoff ein stiller Qualitätsverlust.",
    },
];

export default function DesignProblem() {
    return (
        <section
            aria-labelledby="design-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Warum Design-Chaos teuer wird ]
                            </span>
                            <h2
                                id="design-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Inkonsistentes Design
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    & steigende Kosten.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Ihre Webseite sieht auf jeder Unterseite anders aus?</strong>{" "}
                            Das ist kein ästhetisches Problem — es ist ein systematisches Versagen.
                            Design-Schulden akkumulieren sich mit jeder Seite, jedem Feature, jedem
                            neuen Webdesigner, der ohne einheitliche Regeln arbeitet. Die Kosten
                            dafür zahlen Sie bei jeder einzelnen Änderung.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-8">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block">
                            [ Die versteckten Kosten von Design ohne System ]
                        </span>
                    </div>
                </ScrollReveal>

                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#FFFFFF]/15">
                    {PAIN_POINTS.map((pain) => (
                        <div
                            key={pain.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#FFFFFF]/15 flex flex-col min-h-72 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <span
                                className="absolute top-6 right-6 text-[clamp(2.5rem,5vw,4rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#000000]/08 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {pain.stat}
                            </span>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-[#FFFFFF]/10 group-hover:bg-[#001F3F] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#FFFFFF] uppercase transition-colors duration-300">
                                    {pain.id}
                                </span>
                                <span className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter text-[#FFFFFF] group-hover:text-[#001F3F] transition-colors">
                                    {pain.stat}
                                </span>
                            </div>

                            <h3 className="text-[clamp(1rem,1.8vw,1.35rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-4">
                                {pain.title}
                            </h3>

                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/65 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/20 group-hover:border-[#001F3F]/30 pl-4">
                                {pain.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

                {/* ── LEGACY COMPARISON ── */}
                <ScrollReveal delay={100}>
                    <div className="mt-20 md:mt-28">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-4">
                            [ Warum Standard-Agenturen 2026 das Problem sind ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Manuelles CSS & Page-Builder
                            <span className="italic font-normal text-[#FFFFFF]/35"> = Design-Schulden.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Viele Webdesign-Agenturen in Düsseldorf und deutschlandweit arbeiten noch mit
                            Methoden, die 2026 schlicht zu wartungsintensiv und zu teuer sind. Manuelles CSS,
                            proprietäre Page-Builder und Design-Freestyle ohne Token-System erzeugen technische
                            Schulden, die sich bei jeder Iteration potenzieren. Das ist, als würde man ein
                            Hochhaus ohne Bauplan errichten — es steht vielleicht, aber jeder Anbau wird
                            zum Risiko. <strong>Die Lösung liegt nicht in besserem CSS. Sie liegt in einem System.</strong>
                        </p>
                    </div>
                </ScrollReveal>

                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#FFFFFF]/15">
                    {LEGACY_PROBLEMS.map((item) => (
                        <div
                            key={item.label}
                            className="group p-8 md:p-10 border-r border-b border-[#FFFFFF]/15 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <h4 className="text-[13px] font-black tracking-[0.1em] uppercase text-[#FFFFFF] group-hover:text-[#001F3F] transition-colors mb-4">
                                {item.label}
                            </h4>
                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/60 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/15 group-hover:border-[#001F3F]/30 pl-4">
                                {item.problem}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

                {/* ── TRANSITION TO SOLUTION ── */}
                <ScrollReveal delay={120}>
                    <div className="mt-20 md:mt-28 text-center">
                        <p className="text-[clamp(1.2rem,3vw,2rem)] font-black tracking-tight uppercase text-[#FFFFFF]/80 mb-4">
                            Es gibt eine Lösung.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">Tailwind Design Ops</strong> ist
                            kein inkrementelles Upgrade — es ist ein Paradigmenwechsel. Atomic
                            Utility-First CSS mit Design Tokens als Single Source of Truth.
                            Eine Architektur, die darauf ausgelegt ist, Webseiten Design Kosten
                            langfristig zu senken und professionelles UI/UX Design zu
                            skalieren — nicht nur in Düsseldorf, sondern überall.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
