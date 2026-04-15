// src/components/sections/UXProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — Das "Labyrinth-Gefuehl" und verlorene Conversions.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "–53 %",
        title: "Bounce durch schlechtes Design",
        description:
            "Nutzer entscheiden in 0,05 Sekunden, ob eine Webseite vertrauenswuerdig wirkt. Unuebersichtliche Layouts, inkonsistente Typografie und fehlende visuelle Hierarchie erzeugen das Labyrinth-Gefuehl — Besucher finden nicht, was sie suchen, und verlassen frustriert den Shop. Jeder Bounce ist ein verlorener Kunde.",
    },
    {
        id: "PAIN-02",
        stat: "2.7s",
        title: "Ladezeit durch CSS-Bloat",
        description:
            "Ueberladene Webseiten mit CSS-in-JS, ungenutzte Stylesheets und unkomprimierte Assets treiben die Time to Interactive auf ueber 3 Sekunden. Google bestraft langsame Seiten mit schlechteren Rankings — und Ihre Nutzer bestrafen Sie mit Abspruengen. Minimalistisches Design ist kein Trend, sondern Performance-Strategie.",
    },
    {
        id: "PAIN-03",
        stat: "78 %",
        title: "Kaufabbruch durch UX-Friction",
        description:
            "78 % aller Warenkorbabbrueche entstehen durch UX-Probleme: unklare Navigation, zu viele Klicks bis zum Checkout, fehlende Vertrauenssignale. Ein schlechtes Design ist wie ein unfreundlicher Verkaeufer — es kostet jeden Tag echtes Geld, weil potenzielle Kunden zur Konkurrenz abwandern, die einfacher zu bedienen ist.",
    },
    {
        id: "PAIN-04",
        stat: "–41 %",
        title: "Conversion-Verlust ohne System",
        description:
            "Webseiten ohne Design System produzieren visuelle Inkonsistenzen ueber jede Seite hinweg. Unterschiedliche Button-Stile, wechselnde Abstande und inkonsistente Farben untergraben das Vertrauen Ihrer Nutzer — unbewusst, aber messbar. Vertrauen aufbauen durch professionelles Design beginnt mit Konsistenz.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Statische Templates & Themes",
        problem: "Vorgefertigte WordPress-Templates und Themes sehen auf den ersten Blick modern aus — aber sie sind nicht fuer Ihre Nutzer gebaut. Keine Informationsarchitektur, keine User-Research, keine Conversion-Optimierung. Sie bezahlen fuer Dekoration, nicht fuer ein Interface, das verkauft.",
    },
    {
        label: "Design ohne Nutzerdaten",
        problem: "Viele Agenturen designen nach Bauchgefuehl statt nach Evidenz. Ohne Card-Sorting, Usability-Tests und Heatmap-Analysen ist jede Design-Entscheidung eine teure Vermutung. Echtes UX Design bedeutet: Jede Entscheidung ist durch Daten validiert — nicht durch persoenlichen Geschmack.",
    },
    {
        label: "Kein Developer-Handoff-Protokoll",
        problem: "Ohne strukturierten Handoff zwischen Design und Entwicklung gehen Details verloren. Pixelgenaue Abstande werden geraten, Farbwerte weichen ab, Interaktionen werden improvisiert. Das Ergebnis: Ihre umgesetzte Webseite sieht anders aus als das Design — und Ihre Brand-Konsistenz leidet.",
    },
    {
        label: "Barrierefreiheit als Nachgedanke",
        problem: "Webseiten, die nicht barrierefrei gestaltet sind, schliessen bis zu 15 % Ihrer potenziellen Kunden aus — und riskieren seit dem Barrierefreiheitsstaerkungsgesetz (BFSG) 2025 rechtliche Konsequenzen. Accessibility ist kein Feature, sondern eine Grundanforderung an professionelles Webdesign.",
    },
];

export default function UXProblem() {
    return (
        <section
            aria-labelledby="ux-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Warum Ihr Design Kunden kostet ]
                            </span>
                            <h2
                                id="ux-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihre Webseite ist
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    ein Labyrinth.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Schlechtes Design ist der teuerste Fehler.</strong>{" "}
                            Nutzer finden nicht, was sie suchen, verlassen frustriert
                            den Shop und kaufen bei der Konkurrenz, die einfacher
                            zu bedienen ist. UX-Friction kostet Sie jeden Tag
                            echtes Geld — messbar, vermeidbar.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was Ihr Design jeden Tag an Conversions kostet ]
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
                                <span className="bg-[#FFFFFF]/10 group-hover:bg-[#001F3F] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] uppercase transition-colors duration-300">
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

                {/* ── LEGACY COMPARISON — AGITATION ── */}
                <ScrollReveal delay={100}>
                    <div className="mt-20 md:mt-28">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-4">
                            [ Warum Ihre aktuelle Loesung das Problem ist ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Templates, Bauchgefuehl, kein Handoff
                            <span className="italic font-normal text-[#FFFFFF]/35"> = verlorene Kunden.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in Marketing, SEO und Ads — und schicken
                            Ihre Besucher dann auf eine Webseite ohne professionelle
                            Informationsarchitektur. Kein Design System, keine
                            Usability-Tests, keine Conversion-Optimierung. Das ist,
                            als wuerden Sie Kunden in ein Geschaeft ohne Beschilderung
                            schicken.{" "}
                            <strong>Minimalist Interface Construction loest dieses Problem.</strong>
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
                            Es gibt eine bessere Architektur.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">Minimalist Interface Construction</strong> entfernt
                            den visuellen Lärm und fokussiert sich auf die User-Intention.
                            Klares Design fuehrt zu klaren Entscheidungen — und klare
                            Entscheidungen fuehren zu messbaren Conversions. Datengetrieben,
                            barrierefrei, performant.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
