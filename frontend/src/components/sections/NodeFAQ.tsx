// src/components/sections/NodeFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (FAQPage Schema liegt in page.tsx als JSON-LD).
// Semantisches HTML: details/summary fuer native A11y und Keyboard-Navigation.

import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQS = [
    {
        question: "Warum Node.js statt PHP fuer mein Backend?",
        answer:
            "Klassische Sprachen wie PHP arbeiten synchron — pro Request ein Prozess, der auf die Datenbank wartet. Node.js nutzt einen Event Loop mit non-blocking I/O: Ein einzelner Prozess verwaltet tausende parallele Verbindungen, weil er waehrend der Datenbank-Wartezeit schon den naechsten Request annimmt. Weniger Server-Ressourcen, niedrigere Latenz, deutlich bessere Skalierbarkeit. Fuer Echtzeit-Apps, APIs und Hochlast-Systeme ist das im Jahr 2026 der Standard.",
    },
    {
        question: "Wie skaliere ich meine App auf 1 Million Nutzer ohne Re-Design?",
        answer:
            "Skalierbarkeit ist eine Architekturentscheidung, kein nachtraegliches Feature. Wir bauen von Beginn an Microservices mit klaren Domain-Boundaries (DDD), zustandslose API-Server fuer horizontales Scaling und Redis-basierte Cache-/Session-Layer fuer geteilten State. Datenbanken bekommen Read-Replicas und Connection Pooling. Services skalieren unabhaengig auf Docker/Kubernetes oder Vercel Edge — von 1.000 auf 1.000.000 Nutzer ohne Code-Rewrite, nur durch Hinzufuegen weiterer Instanzen.",
    },
    {
        question: "Was kostet eine skalierbare Backend-Infrastruktur in Duesseldorf?",
        answer:
            "Ein produktionsreifes Backend-Setup beginnt typischerweise im niedrigen fuenfstelligen Bereich — abhaengig von Komplexitaet, Integrationen (Stripe, S3, Auth-Provider) und SLA-Anforderungen. Wichtiger als der Preis ist die TCO: Eine ineffiziente Architektur kostet jeden Monat unnoetige Server-Ressourcen, jeden Sales-Event Reputation und bei Crashes echten Umsatz. Wir arbeiten in fixen Sprints mit transparenten Kostenkennzahlen — keine open-end Stundenkonten. Anfrage und kostenfreier Architektur-Check fuer Unternehmen aus Duesseldorf, NRW und ganz Deutschland.",
    },
    {
        question: "Was bringen Vercel Edge Functions fuer mein Backend?",
        answer:
            "Vercel Edge Functions laufen in 30+ Regionen weltweit — Backend-Logik wird dort ausgefuehrt, wo der Nutzer sitzt, nicht in einem zentralen Frankfurt-Rechenzentrum. Das druckt die Time-to-First-Byte (TTFB) auf unter 50ms global, eliminiert Cold Starts und verbessert Core Web Vitals — was direkt das Google-Ranking beeinflusst. Wir kombinieren Edge fuer latenzkritische Operationen mit klassischem Node.js auf Railway fuer komplexe, datenbanknahe Workloads.",
    },
    {
        question: "Wie sorgt ihr dafuer, dass mein Backend bei Marketing-Kampagnen nicht zusammenbricht?",
        answer:
            "Drei Engineering-Disziplinen: Erstens Load-Tests mit Artillery/k6 vor jedem Launch — wir simulieren das Doppelte des erwarteten Traffics. Zweitens Auto-Scaling auf Container-Ebene (Docker/Kubernetes oder Railway) plus CDN-Caching fuer statische Inhalte. Drittens Worker Threads fuer CPU-intensive Aufgaben (Bildverarbeitung, Reports, PDF-Generierung), damit der Event Loop nie blockiert. Plus durchgehende Observability via Pino Logging, Sentry Error-Tracking und Prometheus-Metriken — Alerting bei Error-Rate >0.1 % oder P99 >10 ms, also bevor der Nutzer es ueberhaupt merkt.",
    },
];

export default function NodeFAQ() {
    return (
        <section
            aria-labelledby="node-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — Node.js & Backend-Skalierung ]
                            </span>
                            <h2
                                id="node-faq-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihre Fragen,
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    unsere Antworten.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Die wichtigsten Fragen rund um Node.js, Microservices,
                            Edge Functions, Caching und die richtige
                            Backend-Architektur fuer Hochlast-Systeme — vom
                            Startup-Gruender bis zum CTO.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── FAQ LIST — semantisches details/summary fuer A11y ── */}
                <ScrollReveal delay={60}>
                    <div className="border-t border-[#000000]" role="list">
                        {FAQS.map((faq, index) => (
                            <details
                                key={index}
                                role="listitem"
                                className="group border-b border-[#000000] open:bg-[#001F3F] transition-colors duration-300"
                            >
                                <summary className="flex items-start gap-5 px-6 md:px-10 py-7 md:py-9 cursor-pointer list-none focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#001F3F] group-open:focus-visible:outline-[#FFFFFF]">
                                    <span className="bg-[#001F3F] group-open:bg-[#FFFFFF] px-2.5 py-1 text-[10px] font-mono font-black tracking-widest text-[#FFFFFF] group-open:text-[#001F3F] uppercase shrink-0 mt-1 transition-colors duration-300">
                                        F{String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="flex-1 text-[clamp(1rem,1.8vw,1.4rem)] font-black tracking-tighter leading-tight text-[#000000] group-open:text-[#FFFFFF] transition-colors">
                                        {faq.question}
                                    </h3>
                                    <span
                                        aria-hidden="true"
                                        className="text-[20px] md:text-[24px] font-black text-[#001F3F] group-open:text-[#FFFFFF] group-open:rotate-45 transition-transform duration-300 shrink-0 mt-0 leading-none"
                                    >
                                        +
                                    </span>
                                </summary>
                                <div className="px-6 md:px-10 pb-8 md:pb-10">
                                    <p className="text-[14px] md:text-[15px] leading-relaxed text-[#000000]/70 group-open:text-[#FFFFFF]/85 border-l-2 border-[#001F3F] group-open:border-[#FFFFFF]/40 pl-4 md:ml-12 max-w-4xl transition-colors duration-300">
                                        {faq.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </ScrollReveal>

                {/* ── A11Y / TECHNICAL SEO NOTE ── */}
                <ScrollReveal delay={80}>
                    <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                        <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                            <strong className="text-[#000000]/80">Barrierefreiheit & Schema:</strong>{" "}
                            Diese FAQ-Sektion nutzt semantische{" "}
                            <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">
                                &lt;details&gt;
                            </code>{" "}
                            /{" "}
                            <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">
                                &lt;summary&gt;
                            </code>{" "}
                            Elemente — voll tastaturzugaenglich, ohne JavaScript funktionsfaehig
                            und mit FAQPage-Schema (JSON-LD) fuer Google Rich Snippets ausgezeichnet.
                            So erscheinen die Antworten direkt in den Suchergebnissen.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
