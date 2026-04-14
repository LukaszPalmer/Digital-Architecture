// src/components/sections/DesignProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Design Audit",
        description:
            "Vollständige Inventur der bestehenden UI-Elemente: Inkonsistente Abstände, redundante Farbwerte, fehlende Responsive-Breakpoints und A11y-Verstöße werden systematisch dokumentiert. Wir identifizieren die Design-Schulden, die Ihre Webseiten Design Kosten in die Höhe treiben — und priorisieren die Hebel mit dem größten Impact.",
        duration: "TAGE 1–2",
        tag: "ANALYSE",
    },
    {
        step: "02",
        title: "Token Architecture",
        description:
            "Definition der primitiven Werte, semantischen Aliase und Komponent-Tokens. Das Tailwind-Config-Schema wird als typisiertes TypeScript-Objekt ausgearbeitet — die Grundlage für alles Folgende. Hier entscheidet sich, ob Ihr professionelles Webdesign langfristig skaliert oder bei der nächsten Iteration wieder zum Problem wird.",
        duration: "TAGE 3–4",
        tag: "ARCHITEKTUR",
    },
    {
        step: "03",
        title: "Component Build",
        description:
            "Systematischer Aufbau der Bibliothek nach Atomic Design: Atoms zuerst, dann Molecules, dann Organisms. Jede Komponente wird mit Variants, Sizes und States implementiert — vollständig regressionstestet mit Visual Regression und Axe-Core A11y-Checks. Die Phase, in der aus Tokens echte UI/UX Design Komponenten werden.",
        duration: "TAGE 5–12",
        tag: "IMPLEMENTIERUNG",
    },
    {
        step: "04",
        title: "Handoff & Düsseldorf",
        description:
            "Storybook-kompatible Dokumentation jeder Komponente mit Props-Tabelle, Verwendungsbeispielen und A11y-Hinweisen. Developer-Handoff mit Tailwind-Cheatsheet und Token-Referenz. Für Unternehmen in Düsseldorf und NRW bieten wir persönliche Workshops vor Ort — weil ein Design System nur so gut ist wie das Team, das es nutzt.",
        duration: "TAGE 13–14",
        tag: "DOKUMENTATION",
    },
];

export default function DesignProcess() {
    return (
        <section
            aria-labelledby="design-process-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/50 uppercase block mb-8">
                                [ Design System Protocol ]
                            </span>
                            <h2
                                id="design-process-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Von Chaos zu
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/50">
                                    System.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/25 pl-6">
                            Vier Phasen vom UI-Audit bis zum vollständig
                            dokumentierten, produktionsreifen Design System.
                            Unser Webdesign-Prozess zielt auf maximale
                            Effizienz ab — von der Token-Architektur
                            bis zum Developer-Handoff in Düsseldorf.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PROCESS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#FFFFFF]/20">
                    {PROCESS_STEPS.map((item) => (
                        <div
                            key={item.step}
                            className="group relative p-8 md:p-10 border-r border-b border-[#FFFFFF]/20 flex flex-col min-h-100 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <span
                                className="absolute top-6 right-6 text-[clamp(3rem,5vw,4.5rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#001F3F]/08 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {item.step}
                            </span>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="bg-[#FFFFFF]/15 group-hover:bg-[#001F3F]/10 px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {item.tag}
                                </span>
                                <span className="text-[9px] font-mono font-bold text-[#FFFFFF]/45 group-hover:text-[#001F3F]/55 tracking-[0.3em] uppercase transition-colors">
                                    {item.duration}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-5">
                                {item.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/70 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/25 group-hover:border-[#001F3F]/30 pl-4 mt-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
