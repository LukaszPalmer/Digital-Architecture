// src/components/sections/DashProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: AGITATION — Überladene Dashboards, Design-Schulden, Produktivitätsverlust.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "4.2s",
        title: "Dashboard-Ladezeit im Durchschnitt",
        description:
            "Enterprise-Dashboards mit unkontrollierten MUI-Importen laden im Schnitt über vier Sekunden. Jede Sekunde Wartezeit vor der ersten Interaktion kostet messbare Produktivität — multipliziert mit hunderten Nutzern pro Tag wird daraus ein operativer Engpass.",
    },
    {
        id: "PAIN-02",
        stat: "1.800+",
        title: "DOM-Elemente in Standard-Dashboards",
        description:
            "Material UI erzeugt ohne architektonische Disziplin eine tiefe Div-Verschachtelung — die sogenannte MUI-Div-Suppe. Browser müssen tausende Elemente layouten und repainten. Das Ergebnis: ruckelnde Scrolls, verzögerte Klick-Reaktionen und frustrierte Teams.",
    },
    {
        id: "PAIN-03",
        stat: "73 %",
        title: "Entwicklerzeit für Wartung statt Features",
        description:
            "Unternehmen, die UI-Kits ohne klare Komponentenlogik einsetzen, verbringen bis zu drei Viertel ihrer Frontend-Kapazität mit Bugfixes, Workarounds und CSS-Overrides statt mit neuen Features. Design-Schulden wachsen exponentiell — und werden selten zurückgezahlt.",
    },
    {
        id: "PAIN-04",
        stat: "–38 %",
        title: "Nutzerakzeptanz bei schlechter UI-Performance",
        description:
            "Interne Tools mit spürbaren Verzögerungen werden aktiv gemieden. Teams weichen auf Spreadsheets, E-Mails oder manuelle Prozesse aus. Die Investition in ein Dashboard-System amortisiert sich nur, wenn es schneller ist als die Alternative — nicht langsamer.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Standard MUI ohne Architektur",
        problem: "Alle Komponenten werden client-seitig geladen. Kein Tree-Shaking auf Komponent-Ebene, keine Server Components. Das gesamte MUI-Bundle landet im Browser — typischer TBT: über 800ms auf Mobile.",
    },
    {
        label: "Generische Admin-Templates",
        problem: "Vorgefertigte Dashboard-Templates aus dem Marketplace versprechen schnelle Ergebnisse. In der Praxis: Unkontrollierte Abhängigkeiten, veraltete MUI-Versionen, keine RBAC-Logik und keine Anpassbarkeit an Enterprise-Anforderungen.",
    },
    {
        label: "Monolithische SPA-Dashboards",
        problem: "Single-Page-Applications laden beim Start die gesamte Anwendung. Sidebar, Charts, Datentabellen und Formulare werden initialisiert, bevor der Nutzer auch nur eine Zeile sieht. Kein Code-Splitting, kein Lazy Loading, kein Streaming.",
    },
    {
        label: "CSS-Override-Chaos",
        problem: "Ohne Custom Theme Engine werden MUI-Defaults per !important überschrieben. Das Ergebnis: Hunderte Zeilen CSS-Hacks, inkonsistentes Spacing, gebrochene Dark-Mode-Unterstützung und ein Stylesheet, das niemand mehr anfassen will.",
    },
];

export default function DashProblem() {
    return (
        <section
            aria-labelledby="dash-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Warum Dashboards scheitern ]
                            </span>
                            <h2
                                id="dash-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihr Dashboard
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    bremst Ihr Team.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Überladene Dashboards sind kein Design-Problem</strong> — sie
                            sind ein architektonisches Versagen. Unternehmen in Düsseldorf
                            und ganz Deutschland verlieren täglich operative Effizienz
                            durch UI-Systeme, die unter ihrer eigenen Komplexität
                            zusammenbrechen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Die Kosten schlechter Dashboard-Architektur — in Zahlen ]
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
                            [ Warum Standard-UI-Kits im Enterprise scheitern ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            UI ohne Architektur
                            <span className="italic font-normal text-[#FFFFFF]/35"> = Design-Schulden auf Kredit.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Im Jahr 2026 reicht es nicht mehr, ein Dashboard-Template aus dem
                            Marketplace zu installieren und Daten hineinzupumpen. Enterprise-Software
                            verlangt architektonische Logik — von der Datenschicht bis zum letzten
                            Button. Ohne diese Logik explodieren die Wartungskosten, die Performance
                            bricht ein und die Nutzer weichen auf Excel aus.
                            <strong> Das ist kein Technologie-Problem. Es ist ein Architektur-Problem.</strong>
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
                            <strong className="text-[#FFFFFF]/70">Material UI Logic</strong> ist
                            die Symbiose aus ästhetischem Enterprise-Standard und hochperformanter,
                            wartbarer Software-Architektur — konzipiert für Unternehmen, die ihre
                            Business-Software auf das nächste Level heben wollen.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
