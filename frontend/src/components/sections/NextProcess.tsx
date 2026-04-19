// src/components/sections/NextProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Performance Audit",
        description:
            "Baseline-Messung aller Core Web Vitals: LCP, TBT, CLS und INP. Analyse des bestehenden Bundle-Sizes, ungenutzter JavaScript-Bytes und blockierender Ressourcen mit Lighthouse CI. Wir identifizieren präzise, warum Ihre Website zu langsam ist — nicht mit Vermutungen, sondern mit Daten.",
        details:
            "Bevor wir eine einzige Zeile Code schreiben, messen wir den Ist-Zustand. Sie erhalten einen detaillierten Report mit allen Performance-Engpässen, priorisiert nach Business-Impact. So wissen Sie genau, welche Maßnahmen den größten ROI haben, wenn Sie Ihre Ladezeit optimieren möchten.",
        duration: "TAG 1",
        tag: "ANALYSE",
    },
    {
        step: "02",
        title: "Architecture Design",
        description:
            "Definition der Routing-Struktur, Rendering-Strategie pro Route und Data-Fetching-Muster. RSC-Boundaries werden präzise gesetzt — Client-Komponenten nur für unvermeidliche Interaktivität. Jede Entscheidung dient einem Ziel: maximale Performance bei minimaler Komplexität.",
        details:
            "In dieser Phase entsteht die Blaupause Ihrer modernen Webanwendung. Wir entscheiden pro Route, ob Static Site Generation, Server-Side Rendering oder Partial Pre-Rendering die optimale Strategie ist. Diese Granularität ist der Grund, warum Next.js anderen Frameworks überlegen ist.",
        duration: "TAGE 2–3",
        tag: "ARCHITEKTUR",
    },
    {
        step: "03",
        title: "RSC Implementation",
        description:
            "Systematische Entwicklung mit React Server Components. Bundle-Analyse nach jeder Iteration — jedes überflüssige Kilobyte wird eliminiert. Server Actions ersetzen API-Routes, Edge Middleware übernimmt Auth und Rate-Limiting. TypeScript-First für maximale Code-Qualität.",
        details:
            "Hier entsteht Ihre professionelle Website. Wir programmieren jede Komponente als Server Component, sofern keine Client-seitige Interaktivität erforderlich ist. Das Ergebnis: 90 % weniger JavaScript im Browser, sofortige Sichtbarkeit und Performance-Werte, die nicht nur im Lab-Test glänzen, sondern bei echten Nutzern belastbar bleiben.",
        duration: "TAGE 4–8",
        tag: "IMPLEMENTIERUNG",
    },
    {
        step: "04",
        title: "Performance Verification & Field Data Monitoring",
        description:
            "Automatisiertes Testing in der CI/CD-Pipeline mit Lighthouse CI als Frühwarnsystem — kein Deploy, wenn Performance-Budgets gerissen werden. Parallel dazu beobachten wir die Core Web Vitals Ihrer echten Nutzer über die Google Search Console. Lab-Werte sagen nichts aus, wenn die Felddaten nicht folgen.",
        details:
            "Ein Lab-Score ist ein Screenshot unter Idealbedingungen — schön, aber nicht die Wahrheit. Die Wahrheit liegt in den Felddaten: LCP, INP und CLS, gemessen auf den Geräten und Netzen Ihrer tatsächlichen Besucher. Erst wenn diese Werte im Performance-Report der Google Search Console über 28 Tage hinweg grün bleiben, ist unsere Arbeit verifiziert.",
        duration: "TAG 9–10",
        tag: "VERIFIKATION",
    },
];

export default function NextProcess() {
    return (
        <section
            aria-labelledby="next-process-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/50 uppercase block mb-8">
                                [ Engineering Protocol — Ihr Weg zu messbar schnellen Seiten ]
                            </span>
                            <h2
                                id="next-process-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Von langsam zu
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/50">
                                    messbar schnell.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/25 pl-6">
                            Vier präzise Schritte vom Performance-Audit bis
                            zum produktiven Next.js-System mit automatisiertem
                            Qualitäts-Gating. So läuft es ab, wenn Sie bei uns
                            eine <strong>professionelle Website erstellen lassen</strong>.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PROCESS INTRO ── */}
                <ScrollReveal delay={40}>
                    <div className="mb-16 md:mb-20 max-w-3xl">
                        <p className="text-[17px] leading-relaxed text-[#FFFFFF]/60 mb-6">
                            Viele Agenturen beginnen mit dem Design. Wir beginnen mit der Performance.
                            Denn das schönste Design nützt nichts, wenn die <strong>Website zu langsam</strong> lädt
                            und Nutzer abspringen, bevor sie den ersten Inhalt sehen. Unser Prozess
                            ist darauf ausgelegt, Ihre <strong>Ladezeit zu optimieren</strong> — messbar,
                            reproduzierbar und mit Garantie.
                        </p>
                        <p className="text-[15px] leading-relaxed text-[#FFFFFF]/45">
                            Was unterscheidet uns von einer typischen <strong>Webagentur</strong>? Wir liefern
                            keine Versprechen, sondern Metriken. Jeder Schritt wird dokumentiert,
                            jede Verbesserung im Lab geprüft und anschließend durch die Felddaten
                            echter Nutzer in der Google Search Console bestätigt.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PROCESS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#FFFFFF]/20">
                    {PROCESS_STEPS.map((item) => (
                        <div
                            key={item.step}
                            className="group relative p-8 md:p-10 border-r border-b border-[#FFFFFF]/20 flex flex-col min-h-120 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Ghost Number */}
                            <span
                                className="absolute top-6 right-6 text-[clamp(3rem,5vw,4.5rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#001F3F]/08 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {item.step}
                            </span>

                            {/* Tag + Duration */}
                            <div className="flex items-center gap-3 mb-8">
                                <span className="bg-[#FFFFFF]/15 group-hover:bg-[#001F3F]/10 px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {item.tag}
                                </span>
                                <span className="text-[9px] font-mono font-bold text-[#FFFFFF]/45 group-hover:text-[#001F3F]/55 tracking-[0.3em] uppercase transition-colors">
                                    {item.duration}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-5">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/70 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/25 group-hover:border-[#001F3F]/30 pl-4 mb-4">
                                {item.description}
                            </p>

                            {/* Business Detail */}
                            <p className="text-[13px] leading-relaxed text-[#FFFFFF]/50 group-hover:text-[#000000]/55 transition-colors pl-4 mt-auto">
                                {item.details}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
