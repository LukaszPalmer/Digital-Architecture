// src/components/sections/MongoFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (FAQPage Schema liegt in page.tsx als JSON-LD).
// Semantisches HTML: details/summary fuer native A11y und Keyboard-Navigation.

import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQS = [
    {
        question: "Ist eine Cloud-Datenbank sicher vor Hackern?",
        answer:
            "Ja — sofern die Architektur stimmt. MongoDB Atlas laeuft hinter einer VPC-Isolation, IP-Whitelist und mTLS-Verschluesselung. Daten sind sowohl at-Rest (AES-256) als auch in-Transit (TLS 1.3) verschluesselt. Wir aktivieren zusaetzlich Client-Side Field-Level Encryption fuer sensible Daten wie Zahlungsinformationen, richten Role-Based Access Control (RBAC) feingranular ein und integrieren Audit-Logs fuer forensische Analysen. Atlas ist SOC 2 Typ II-, ISO 27001- und HIPAA-zertifiziert. Sicherer als die meisten On-Premise-Datenbanken in deutschen Unternehmen.",
    },
    {
        question: "Was ist der Unterschied zwischen SQL und MongoDB?",
        answer:
            "SQL-Datenbanken (Postgres, MySQL) speichern Daten in starren Tabellen mit festen Spalten — jede Aenderung am Schema erfordert Migrationen mit Downtime. MongoDB speichert Daten als flexible Dokumente (aehnlich JSON): Neue Felder, neue Produktkategorien oder neue Geschaeftsanforderungen werden ohne Schema-Migration ergaenzt. Gleichzeitig bietet MongoDB seit Version 4.0 vollstaendige Multi-Document ACID-Transaktionen — die fruehere NoSQL-Schwaeche ist geloest. Fazit: MongoDB wenn Daten organisch wachsen und flexibel bleiben muessen, SQL wenn starre Relationen und komplexe JOINs dominieren.",
    },
    {
        question: "Warum wird meine Datenbank mit der Zeit immer langsamer?",
        answer:
            "Drei Haupt-Ursachen: Erstens fehlende oder ineffiziente Indexes — ohne Compound- und Partial-Indexes werden Abfragen zum Full Collection Scan. Zweitens ungebaendigtes Datenwachstum ohne Archivierung oder Time-Series-Collections, wodurch Hot- und Cold-Data auf derselben Storage-Schicht konkurrieren. Drittens unoptimierte Aggregation Pipelines, die Millionen Dokumente in Memory laden, statt $match und $project frueh einzusetzen. Wir analysieren mit dem Atlas Performance Advisor den Slow-Query-Log, identifizieren die Top-10-Latenz-Treiber und eliminieren sie systematisch — typisch 60–90 % Latenz-Reduktion ohne Hardware-Upgrade.",
    },
    {
        question: "Koennen meine Kundendaten DSGVO-konform in der Cloud liegen?",
        answer:
            "Ja — MongoDB Atlas bietet dedizierte Cluster in Frankfurt (AWS eu-central-1), Dublin (AWS eu-west-1) und Paris (GCP europe-west9). Wir konfigurieren Multi-Region-Replikation ausschliesslich innerhalb der EU, schliessen den Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO und dokumentieren die Verarbeitungstaetigkeiten. Kundendaten verlassen niemals die EU, Backups werden EU-intern repliziert, und Atlas-Zugriffslogs erfuellen die Nachweispflichten aus Art. 30. Fuer hoechste Anforderungen koennen Sovereign-Clouds bei Ionos oder STACKIT als Alternative eingesetzt werden.",
    },
    {
        question: "Wie laeuft eine Zero-Downtime Migration zu MongoDB Atlas ab?",
        answer:
            "In vier Phasen ohne Produktionsstop: Erstens Schema-Audit und Index-Strategie auf Basis des Atlas Performance Advisor. Zweitens Setup des Ziel-Clusters mit kontinuierlicher Replikation via mongomirror oder mongosync — das Altsystem bleibt Primary. Drittens Lasttest mit Artillery/k6 auf Staging-Umgebung im Ziel-Cluster: Wir simulieren das Doppelte des erwarteten Produktionstraffics. Viertens der Cutover in einem einzelnen Maintenance-Window (typischerweise 15–30 Minuten nachts), mit vorbereitetem Rollback-Plan. Kunden in Duesseldorf und NRW bekommen waehrend der Migration eine Betreuung mit Vor-Ort-Termin moeglich.",
    },
];

export default function MongoFAQ() {
    return (
        <section
            aria-labelledby="mongo-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — MongoDB & Cloud-Datenbanken ]
                            </span>
                            <h2
                                id="mongo-faq-heading"
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
                            Die wichtigsten Fragen rund um MongoDB Atlas,
                            Sicherheit, DSGVO, Zero-Downtime-Migration und
                            Datenbank-Performance — vom Shop-Betreiber bis zum
                            CTO.
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
