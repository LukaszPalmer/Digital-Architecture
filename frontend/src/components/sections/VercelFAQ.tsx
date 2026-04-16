// src/components/sections/VercelFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (FAQPage Schema liegt in page.tsx als JSON-LD).
// Semantisches HTML: details/summary fuer native A11y und Keyboard-Navigation.

import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQS = [
    {
        question: "Warum ist meine Webseite trotz gutem Hosting im Ausland langsam?",
        answer:
            "Weil klassisches Hosting einen einzigen Serverstandort nutzt — typisch Frankfurt, Amsterdam oder Dublin. Ein Nutzer aus New York muss fuer jeden Seitenaufruf ueber den Atlantik: ~90ms Latenz allein fuer den ersten TCP-Handshake, nochmal ~90ms fuer das erste Byte. Vor dem ersten Pixel sind bereits 300–500ms verloren. Vercel Edge loest das physikalisch: Ueber 300 Edge-Nodes weltweit beantworten die Anfrage im physisch naechstgelegenen Rechenzentrum. TTFB in New York, Tokio oder Sydney sinkt auf unter 50ms — ohne dass Sie Code aendern muessen.",
    },
    {
        question: "Was ist der Unterschied zwischen einem CDN und Vercel Edge?",
        answer:
            "Ein klassisches CDN (Cloudflare, Akamai, Fastly) cached statische Assets — Bilder, CSS, JS-Bundles — am Edge. Dynamische HTML-Antworten und API-Calls muessen weiterhin zum Origin-Server. Vercel Edge geht einen Schritt weiter: Auch dynamische Funktionen (Auth-Checks, Personalisierung, A/B-Tests, Geo-Routing) laufen als Edge Functions direkt am naechstgelegenen Node — in V8 Isolates ohne Cold Start. Kombiniert mit Partial Prerendering wird sogar HTML teils statisch vom Edge geliefert und teils als Stream nachgeliefert. Ergebnis: CDN-Geschwindigkeit fuer dynamische Inhalte — nicht nur fuer statische Assets.",
    },
    {
        question: "Wie viel Umsatz verliere ich durch 1 Sekunde zusaetzliche Ladezeit?",
        answer:
            "Belastbare Studien von Google, Amazon und Akamai zeigen konsistent: Jede zusaetzliche Sekunde Ladezeit senkt die Conversion Rate um 7–20 %. Amazon hat 100ms zusaetzliche Latenz mit 1 % Umsatzverlust korreliert. Walmart sah pro 1s-Verbesserung +2 % Conversion. Bei einem Onlineshop mit 500.000 EUR Jahresumsatz und 3 Sekunden Ladezeit bedeutet eine Reduktion auf unter 1 Sekunde realistisch +30.000 bis +60.000 EUR zusaetzlichen Umsatz — jedes Jahr. Speed ist kein Nice-to-have, sondern ein direkter Umsatz-Hebel und ein Ranking-Signal bei Google.",
    },
    {
        question: "Was ist der Unterschied zwischen Vercel Edge Runtime und Node.js Runtime?",
        answer:
            "Die Node.js Runtime ist eine vollwertige V8-Instanz mit allen Node-APIs — startet typisch in 200–1000ms (Cold Start), ideal fuer Datenbank-Driver wie Mongoose, PDF-Generierung oder CPU-intensive Tasks. Die Edge Runtime laeuft in V8 Isolates auf Basis der Web Standards (fetch, Request, Response, Web Crypto) — startet in unter 1ms ohne Cold Start, dafuer mit eingeschraenktem API-Set und ~1.5 MB Memory-Limit. Fuer Middleware, Auth-Checks, Geo-Routing und schnelle API-Antworten ist die Edge Runtime immer die bessere Wahl. Fuer schwergewichtige Workloads bleibt Node.js die Wahl — beide lassen sich in einer Next.js-App mischen, Route fuer Route.",
    },
    {
        question: "Kann ich meine bestehende Webseite ohne Downtime zu Vercel migrieren?",
        answer:
            "Ja. Wir migrieren in vier Phasen ohne Produktionsstop: Erstens Rendering-Strategie-Audit und Identifikation statischer, hybrider und dynamischer Routen. Zweitens Parallel-Deployment auf einer Preview-Domain (z.B. staging.ihre-domain.de) — die Produktion bleibt unberuehrt. Drittens Lasttest mit k6 oder Artillery gegen das Preview-Environment, Validierung der Core Web Vitals aus Real-User-Monitoring via Vercel Speed Insights. Viertens DNS-Cutover via CNAME-Swap mit Zero-Downtime — Vercel uebernimmt automatisch TLS-Provisionierung und DDoS-Mitigation. Kunden in Duesseldorf und NRW erhalten auf Wunsch Vor-Ort-Betreuung waehrend des Cutovers.",
    },
];

export default function VercelFAQ() {
    return (
        <section
            aria-labelledby="vercel-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — Vercel Edge & Web-Performance ]
                            </span>
                            <h2
                                id="vercel-faq-heading"
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
                            Die wichtigsten Fragen rund um Edge Deployment, Core Web
                            Vitals, TTFB, Cold Starts und Zero-Downtime-Migration —
                            vom Shop-Betreiber bis zum CTO.
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
