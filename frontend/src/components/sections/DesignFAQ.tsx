// src/components/sections/DesignFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion für Rich Snippets (JSON-LD FAQPage Schema liegt in page.tsx).

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const FAQ_ITEMS = [
    {
        id: "FAQ-01",
        question: "Was kostet professionelles Webdesign mit einem Tailwind Design System?",
        answer:
            "Die Webseiten Design Kosten für ein Tailwind-basiertes Design System richten sich nach dem Projektumfang. Ein Basis-Design-System mit Token-Architektur und 20–30 Kernkomponenten beginnt bei individuellen Projektanforderungen. Die Investition amortisiert sich schnell: Einmal definierte Design Tokens eliminieren wiederkehrende Styling-Kosten bei jeder neuen Seite oder Funktion. Wir erstellen ein transparentes Angebot nach einem kostenlosen Erstgespräch — ohne versteckte Kosten.",
    },
    {
        id: "FAQ-02",
        question: "Was ist der Unterschied zwischen einem Styleguide und einem Design System?",
        answer:
            "Ein Styleguide ist ein statisches Dokument mit Farben und Schriften — ein PDF, das in der Schublade landet. Ein Design System ist eine lebende Produktionsinfrastruktur: Design Tokens als Single Source of Truth, eine typisierte Komponentenbibliothek mit Variants und States, automatisierte A11y-Tests und eine Tailwind-Konfiguration, die jeden Pixel aus einer einzigen Wahrheitsquelle ableitet. Der Styleguide beschreibt, wie Design aussehen soll — das Design System erzwingt Konsistenz technisch.",
    },
    {
        id: "FAQ-03",
        question: "Warum sollte ich Tailwind CSS statt herkömmlichem CSS verwenden?",
        answer:
            "Tailwind CSS als Utility-First Framework eliminiert toten CSS-Code durch PurgeCSS — typische Produktions-Bundles schrumpfen auf unter 10 KB. Herkömmliches CSS wächst linear mit jeder neuen Seite und führt zu Spezifitätskonflikten. Mit Tailwind und Design Tokens definieren Sie Ihre Markenidentität einmal zentral und wenden sie atomar auf jede Komponente an. Das Ergebnis: 0ms Runtime-CSS-Overhead, pixel-perfekte Konsistenz und drastisch reduzierte Webseiten Design Kosten bei Änderungen.",
    },
    {
        id: "FAQ-04",
        question: "Wie läuft ein Design System Projekt mit Palmer Digital in Düsseldorf ab?",
        answer:
            "Unser Prozess umfasst vier Phasen: Phase 1 — Design Audit (Tage 1–2): Vollständige Inventur bestehender UI-Elemente, Identifikation von Inkonsistenzen und A11y-Verstößen. Phase 2 — Token Architecture (Tage 3–4): Definition der dreistufigen Token-Hierarchie und Tailwind-Konfiguration. Phase 3 — Component Build (Tage 5–12): Aufbau der Atomic Component Library mit Variants, Sizes und States. Phase 4 — Documentation & Handoff (Tage 13–14): Storybook-kompatible Dokumentation und Developer-Handoff mit Tailwind-Cheatsheet.",
    },
    {
        id: "FAQ-05",
        question: "Was sind Design Tokens und warum brauche ich sie?",
        answer:
            "Design Tokens sind die atomaren Bausteine eines Design Systems — Farben, Abstände, Schriftgrößen als maschinenlesbare Werte. Statt Hex-Werte an hunderten Stellen im Code zu definieren, legen Sie einen Token an und referenzieren diesen überall. Eine Änderung im Token propagiert sich automatisch durch das gesamte System. Für Unternehmen in Düsseldorf und deutschlandweit bedeutet das: Rebranding wird von einer wochenlangen Odyssee zu einer einzigen Config-Änderung.",
    },
    {
        id: "FAQ-06",
        question: "Ist Tailwind CSS barrierefrei und WCAG-konform?",
        answer:
            "Tailwind CSS ist ein Styling-Framework — Barrierefreiheit entsteht durch die Architektur darüber. In unserem Design System Engineering erzwingen wir WCAG 2.1 AAA Konformität: Kontrastverhältnisse über 7:1, vollständige Keyboard-Navigation, semantisches HTML, ARIA-Patterns für jede interaktive Komponente und prefers-reduced-motion Respektierung. Axe-Core in der CI/CD-Pipeline blockiert jeden Deploy, der A11y-Standards verletzt.",
    },
    {
        id: "FAQ-07",
        question: "Kann ich ein bestehendes Webdesign auf Tailwind CSS migrieren?",
        answer:
            "Ja — und genau das ist einer der häufigsten Ausgangspunkte. Wir starten mit einem Design Audit, extrahieren bestehende Designwerte in eine Token-Hierarchie und migrieren schrittweise zu Tailwind Utilities. Durch den inkrementellen Ansatz kann Ihr bestehendes Webdesign parallel weiterlaufen, während die neue Architektur aufgebaut wird. Typische Migration: 2–4 Wochen für eine mittelgroße Webseite mit 30–50 einzigartigen Komponenten.",
    },
    {
        id: "FAQ-08",
        question: "Warum Palmer Digital als Webdesigner in Düsseldorf?",
        answer:
            "Wir sind keine klassische Webdesign-Agentur — wir sind Design Engineers. Der Unterschied: Während herkömmliche Webdesigner Seiten in Figma zeichnen und an Entwickler übergeben, bauen wir das Design System als technische Infrastruktur. Jeder Design Token ist typisiert, jede Komponente ist regressionstestet, jede Farbkombination ist automatisch auf WCAG-Konformität geprüft. Das Ergebnis ist professionelles Webdesign, das nicht nur gut aussieht, sondern technisch skaliert.",
    },
];

export default function DesignFAQ() {
    return (
        <section
            aria-labelledby="design-faq-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Häufig gestellte Fragen ]
                            </span>
                            <h2
                                id="design-faq-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihre Fragen zu
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    Design Ops & Webdesign.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/20 pl-6">
                            Alles, was Sie wissen müssen — von Webseiten
                            Design Kosten über Tailwind CSS bis zur
                            Zusammenarbeit mit unserem Team in Düsseldorf.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── FAQ GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#FFFFFF]/15">
                    {FAQ_ITEMS.map((faq) => (
                        <div
                            key={faq.id}
                            className="group p-8 md:p-10 border-r border-b border-[#FFFFFF]/15 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-[#FFFFFF]/10 group-hover:bg-[#001F3F] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#FFFFFF] uppercase transition-colors duration-300">
                                    {faq.id}
                                </span>
                            </div>

                            <h3 className="text-[clamp(1rem,1.8vw,1.3rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-5">
                                {faq.question}
                            </h3>

                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/60 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/15 group-hover:border-[#001F3F]/30 pl-4">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
