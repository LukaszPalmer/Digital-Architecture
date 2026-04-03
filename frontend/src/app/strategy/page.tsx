// app/strategy/page.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Strategie — Palmer Digital",
    description:
        "Unser strategischer Ansatz: Wie wir denken, planen und uns individuell auf jeden Kunden einlassen.",
};

const PHASES = [
    {
        id: "01",
        label: "Discovery",
        title: "Verstehen bevor entwerfen",
        body: "Jedes Projekt beginnt mit einem tiefen Verständnis des Geschäftsmodells, der technischen Anforderungen und der Marktposition. Wir analysieren den bestehenden Stack, identifizieren Engpässe und definieren klare, messbare Erfolgskriterien — bevor eine einzige Zeile Code geschrieben wird.",
        deliverables: ["30min Discovery Call", "Tech-Audit Dokument", "Anforderungsmatrix"],
    },
    {
        id: "02",
        label: "Architektur",
        title: "Präzise Planung, keine Improvisation",
        body: "Auf Basis der Discovery entwerfen wir eine maßgeschneiderte Systemarchitektur. Kein Copy-Paste aus Templates — jede technische Entscheidung wird begründet und auf die spezifischen Anforderungen des Projekts zugeschnitten. Der Blueprint ist bindend, nicht optional.",
        deliverables: ["Architektur-Blueprint", "Stack-Empfehlung", "Kosten- & Zeitprognose"],
    },
    {
        id: "03",
        label: "Entwicklung",
        title: "Agile Sprints auf Elite-Niveau",
        body: "Entwicklung in zweiwöchigen Sprints mit kontinuierlichem Feedback-Loop. Jeder Sprint liefert testbare, deploybare Ergebnisse. Vollständige Transparenz über Fortschritt, Entscheidungen und offene Punkte — kein Black-Box-Engineering.",
        deliverables: ["2-Wochen-Sprints", "Tägliches CI/CD", "24h Antwortgarantie"],
    },
    {
        id: "04",
        label: "Übergabe",
        title: "Vollständige Wissensvermittlung",
        body: "Das Projekt endet nicht mit dem Go-Live. Wir liefern vollständige technische Dokumentation, führen durch die Architektur und stellen sicher, dass das interne Team die Lösung vollständig versteht — und eigenständig weiterentwickeln kann.",
        deliverables: ["Technische Dokumentation", "Code-Walkthrough Session", "12 Monate Gewährleistung"],
    },
];

const CONTEXTS = [
    {
        label: "Startup",
        headline: "Speed-to-Market",
        body: "Schnelle Iteration, MVP-Focus, bewusste technische Schulden für maximale Marktgeschwindigkeit. Wir bauen Architektur, die mit Ihrem Unternehmen mitwächst — ohne teure Neuentwicklungen beim nächsten Wachstumsschritt.",
        indicators: ["Lean Architecture", "Feature-First", "Skalierbar ab Tag 1"],
    },
    {
        label: "Mittelstand",
        headline: "Modernisierung",
        body: "Balance zwischen der Modernisierung bestehender Systeme und stabiler Weiterentwicklung. Integration in vorhandene Infrastruktur ohne Big-Bang-Migrationen. Jede Maßnahme liefert sofort messbaren Geschäftswert.",
        indicators: ["Inkrementelle Migration", "Legacy-Integration", "ROI-getrieben"],
    },
    {
        label: "Enterprise",
        headline: "Governance",
        body: "Compliance-first, Security-by-Design, nahtlose Integration in komplexe Systemlandschaften. SLAs und Governance auf Enterprise-Niveau. Wir dokumentieren jeden Prozess — auditierbar und reproduzierbar.",
        indicators: ["DSGVO-konform", "SLA-Garantien", "Auditierbare Prozesse"],
    },
];

const PRINCIPLES = [
    {
        title: "Transparenz zuerst",
        body: "Keine versteckten Kosten, keine Überraschungen. Vollständige Sichtbarkeit in Fortschritt, Budget und jede technische Entscheidung — in Echtzeit.",
    },
    {
        title: "Technik als Mittel",
        body: "Technologie ist kein Selbstzweck. Jede Entscheidung muss sich an einem konkreten Geschäftsziel messen lassen. Wir optimieren für Outcome, nicht für Technologie-Prestige.",
    },
    {
        title: "Skalierbarkeit eingebaut",
        body: "Wir bauen für den nächsten Wachstumsschritt — nicht nur für den Status quo. Architektur, die mitwächst, ohne Rewrites zu erzwingen.",
    },
    {
        title: "Kein Vendor Lock-in",
        body: "Alle Systeme bleiben vollständig in Ihrer Hand. Open-Source-First, dokumentierte APIs, portierbare Infrastruktur. Sie sind nicht von uns abhängig.",
    },
];

function ArrowRight() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

export default function StrategyPage() {
    return (
        <main>

            {/* ── HERO ── */}
            <section className="bg-[#FFFFFF] border-b border-[#000000] py-20 md:py-32 lg:py-44">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-16">
                        <div>
                            <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase mb-8">
                                [ Strategie — Palmer Digital ]
                            </span>
                            <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-black text-[#000000] leading-[0.96] tracking-[-0.025em] uppercase mb-10">
                                Keine Lösungen
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    von der Stange.
                                </span>
                            </h1>
                            <p className="text-[16px] md:text-[18px] text-[#000000]/60 leading-[1.75] max-w-[520px] border-l-2 border-[#001F3F] pl-6">
                                Wir passen uns Ihrem Geschäftsmodell an — nicht umgekehrt.
                                Unser strategischer Prozess stellt sicher, dass jede
                                technische Entscheidung auf konkreten Geschäftszielen basiert.
                            </p>
                        </div>
                        <div className="hidden lg:grid grid-cols-2 gap-px bg-[#000000]/10 border border-[#000000]/10 lg:self-end lg:pb-3">
                            {[
                                { value: "4", label: "Phasen" },
                                { value: "< 24h", label: "Response" },
                                { value: "100%", label: "Transparenz" },
                                { value: "12 Mo.", label: "Gewährleistung" },
                            ].map((s) => (
                                <div key={s.label} className="bg-[#FFFFFF] px-8 py-5 text-center">
                                    <p className="text-[clamp(1.2rem,2vw,1.8rem)] font-black text-[#000000] tracking-tight leading-none mb-1">
                                        {s.value}
                                    </p>
                                    <p className="text-[9px] font-mono font-bold tracking-[0.3em] text-[#000000]/35 uppercase">
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4 PHASEN ── */}
            <section className="bg-[#FFFFFF] border-b border-[#000000] py-20 md:py-32 lg:py-44">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="mb-16 md:mb-24">
                        <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase mb-8">
                            [ Prozess — 4 Phasen ]
                        </span>
                        <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-black text-[#000000] uppercase tracking-[-0.025em] leading-none">
                            Von der Idee zur
                            <br />
                            <span className="italic font-normal text-[#001F3F]">skalierbaren Realität.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#000000]/12">
                        {PHASES.map((phase) => (
                            <div
                                key={phase.id}
                                className="border-r border-b border-[#000000]/12 p-8 md:p-12 lg:p-14 group hover:bg-[#001F3F] transition-colors duration-300"
                            >
                                <div className="flex items-start gap-6 mb-8">
                                    <span className="text-[11px] font-mono font-black text-[#001F3F] group-hover:text-[#FFFFFF]/50 tracking-wider shrink-0 mt-0.5 transition-colors">
                                        {phase.id}
                                    </span>
                                    <div>
                                        <span className="block text-[9.5px] font-mono font-bold tracking-[0.35em] text-[#000000]/35 group-hover:text-[#FFFFFF]/35 uppercase mb-2 transition-colors">
                                            {phase.label}
                                        </span>
                                        <h3 className="text-[clamp(1.15rem,2vw,1.55rem)] font-black uppercase tracking-tighter text-[#000000] group-hover:text-[#FFFFFF] leading-tight transition-colors">
                                            {phase.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-[14.5px] text-[#000000]/65 group-hover:text-[#FFFFFF]/75 leading-[1.72] mb-10 border-l-2 border-[#001F3F]/30 group-hover:border-[#FFFFFF]/25 pl-5 transition-colors">
                                    {phase.body}
                                </p>
                                <ul className="space-y-2.5 pt-8 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/15 transition-colors" role="list">
                                    {phase.deliverables.map((d) => (
                                        <li key={d} className="flex items-center gap-3 text-[11.5px] font-black tracking-[0.1em] uppercase text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF]/50 shrink-0 transition-colors" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── KUNDENANPASSUNG ── */}
            <section className="bg-[#FFFFFF] border-b border-[#000000] py-20 md:py-32 lg:py-44">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="mb-16 md:mb-24">
                        <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase mb-8">
                            [ Anpassung an den Kunden ]
                        </span>
                        <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-black text-[#000000] uppercase tracking-[-0.025em] leading-none">
                            Eine Methodik.
                            <br />
                            <span className="italic font-normal text-[#001F3F]">Drei Kontexte.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]/12">
                        {CONTEXTS.map((ctx) => (
                            <div key={ctx.label} className="border-r border-b border-[#000000]/12 p-8 md:p-12 flex flex-col">
                                <span className="text-[9.5px] font-mono font-black tracking-[0.4em] text-[#001F3F] uppercase mb-4">
                                    {ctx.label}
                                </span>
                                <h3 className="text-[clamp(1.4rem,2.5vw,2.2rem)] font-black uppercase tracking-tighter text-[#000000] leading-none mb-6">
                                    {ctx.headline}
                                </h3>
                                <p className="text-[14.5px] text-[#000000]/65 leading-[1.72] mb-10 flex-1">
                                    {ctx.body}
                                </p>
                                <ul className="space-y-2" role="list">
                                    {ctx.indicators.map((ind) => (
                                        <li key={ind} className="flex items-center gap-3 text-[11px] font-black tracking-[0.15em] uppercase text-[#000000]/55">
                                            <div className="w-1.5 h-1.5 bg-[#001F3F] shrink-0" />
                                            {ind}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GRUNDPRINZIPIEN ── */}
            <section className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-start">
                        <div className="lg:sticky lg:top-32">
                            <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase mb-8">
                                [ Unsere Grundprinzipien ]
                            </span>
                            <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-black text-[#FFFFFF] uppercase tracking-[-0.025em] leading-[0.95]">
                                Wir optimieren für
                                <br />
                                <span className="italic font-normal">
                                    Langzeiterfolg.
                                </span>
                            </h2>
                            <p className="text-[15px] text-[#FFFFFF]/55 leading-[1.75] mt-8 border-l-2 border-[#FFFFFF]/20 pl-6 max-w-sm">
                                Kurzfristige Kompromisse kosten langfristig das Zehnfache.
                                Deshalb bauen wir von Anfang an richtig.
                            </p>
                        </div>

                        <div className="space-y-0 border-t border-[#FFFFFF]/10">
                            {PRINCIPLES.map((p, i) => (
                                <div key={p.title} className="border-b border-[#FFFFFF]/10 py-10">
                                    <div className="flex items-start gap-6">
                                        <span className="text-[10px] font-mono font-black text-[#FFFFFF]/25 tracking-wider shrink-0 mt-1">
                                            0{i + 1}
                                        </span>
                                        <div>
                                            <h3 className="text-[12.5px] font-black uppercase tracking-[0.2em] text-[#FFFFFF] mb-3">
                                                {p.title}
                                            </h3>
                                            <p className="text-[14.5px] text-[#FFFFFF]/65 leading-relaxed">
                                                {p.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-[#FFFFFF] py-20 md:py-32 border-t border-[#000000]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-12">
                        <div>
                            <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-black text-[#000000] uppercase tracking-[-0.025em] leading-none mb-6">
                                Bereit für ein
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    strategisches Gespräch?
                                </span>
                            </h2>
                            <p className="text-[15px] text-[#000000]/55 max-w-[400px] leading-relaxed">
                                Kostenloser 30-minütiger Discovery Call. Keine Verpflichtung,
                                nur Klarheit über Ihr Vorhaben.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 bg-[#001F3F] text-[#FFFFFF] px-10 py-5 text-[11.5px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] transition-colors duration-300 whitespace-nowrap"
                        >
                            Projekt starten
                            <ArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
