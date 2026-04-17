// src/components/sections/PostgreFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (FAQPage Schema liegt in page.tsx als JSON-LD).
// Semantisches HTML: details/summary fuer native A11y und Keyboard-Navigation.

import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQS = [
    {
        question: "Wann ist PostgreSQL besser als Excel fuer meine Kundenverwaltung?",
        answer:
            "Sobald mehr als ein Mitarbeiter gleichzeitig auf die Daten zugreifen muss, sobald Sie mehr als ein paar tausend Datensaetze verwalten oder sobald Beziehungen zwischen Daten entstehen (Kunde hat Bestellungen, Bestellung hat Positionen). Excel kennt keine referenzielle Integritaet, keine parallelen Schreibzugriffe und keine Zugriffskontrolle. PostgreSQL loesung: Ein normalisiertes Schema mit Foreign Keys stellt sicher, dass keine verwaisten Datensaetze entstehen. Row-Level Security kontrolliert, wer was sehen darf. Und MVCC (Multi-Version Concurrency Control) ermoeglicht hunderte gleichzeitige Zugriffe ohne Datenverlust. Fuer Unternehmen in Duesseldorf und NRW begleiten wir die Migration von Excel zu PostgreSQL — inklusive Datenbereinigung, Schemadesign und Schulung.",
    },
    {
        question: "Wie sicher sind meine Daten bei einem Stromausfall oder Systemabsturz?",
        answer:
            "PostgreSQL garantiert ACID-Konformitaet — Atomicity, Consistency, Isolation, Durability. Das bedeutet konkret: Wenn Sie eine Bestellung aufgeben und das System waehrend der Verarbeitung abstuerzt, ist entweder die komplette Bestellung gespeichert (Zahlung, Lagerbestandsaenderung, Bestaetigungs-E-Mail-Trigger) oder nichts davon. Es gibt keine halben Buchungen, keine inkonsistenten Zustaende, keine verlorenen Transaktionen. Zusaetzlich schreibt PostgreSQL jede Aenderung zuerst in das Write-Ahead-Log (WAL), bevor sie auf die Festplatte geschrieben wird. Bei einem Crash wird das WAL beim Neustart abgespielt und die Datenbank auf den letzten konsistenten Zustand gebracht — automatisch, ohne manuellen Eingriff. Mit pgBackRest und WAL-Archivierung bieten wir Point-in-Time-Recovery: Wiederherstellung auf jede Sekunde der letzten 30 Tage.",
    },
    {
        question: "Was ist der Unterschied zwischen SQL (PostgreSQL) und NoSQL (MongoDB)?",
        answer:
            "SQL-Datenbanken wie PostgreSQL speichern Daten in Tabellen mit festen Spalten und erzwingen Beziehungen ueber Foreign Keys — ideal fuer Daten mit klaren Strukturen und Abhaengigkeiten (Kunden, Bestellungen, Finanzdaten). NoSQL-Datenbanken wie MongoDB speichern flexible JSON-Dokumente ohne festes Schema — ideal fuer schnell wechselnde Datenstrukturen oder Prototypen. Der Clou: PostgreSQL kann beides. Mit JSONB speichern und indexieren Sie unstrukturierte Daten genau so schnell wie MongoDB, behalten aber gleichzeitig die volle Transaktionssicherheit und relationale Verknuepfungen. Fuer 90 % aller Anwendungsfaelle — vom Onlineshop ueber SaaS-Plattformen bis zu Fintech-Systemen — ist PostgreSQL die bessere Wahl, weil Sie keinen zweiten Datenbankstack betreiben muessen. Wir beraten Unternehmen in Duesseldorf und NRW bei der Entscheidung und migrieren bestehende MongoDB-Instanzen zu PostgreSQL, wenn es sinnvoll ist.",
    },
    {
        question: "Wie macht PostgreSQL meine Datenbankabfragen schneller?",
        answer:
            "Drei Mechanismen: Erstens intelligente Indizes — ein B-Tree-Index auf einer Spalte mit 10 Millionen Zeilen reduziert die Suchzeit von einem Full-Table-Scan (Sekunden) auf einen Index-Lookup (unter 1 Millisekunde). Zweitens der Cost-Based Optimizer — PostgreSQL analysiert automatisch Tabellenstatistiken und waehlt fuer jede Abfrage den schnellsten Ausfuehrungsplan (Nested Loop, Hash Join, Merge Join). Drittens spezialisierte Index-Typen: GIN-Indizes fuer Volltextsuche und JSONB, GiST fuer Geodaten, BRIN fuer zeitserienbasierte Daten. Zusaetzlich setzen wir PgBouncer als Connection Pooler ein, um den Overhead durch Datenbankverbindungen zu eliminieren — tausende App-Verbindungen werden auf wenige echte DB-Connections gemappt. Das Ergebnis: Abfragen, die vorher Kaffee-Pausen erzwungen haben, laufen in unter 10 Millisekunden.",
    },
    {
        question: "Koennen Sie unsere bestehende Datenbank zu PostgreSQL migrieren?",
        answer:
            "Ja — wir migrieren von Excel, MySQL, MariaDB, MongoDB, Microsoft SQL Server und Oracle zu PostgreSQL. Der Prozess laeuft in fuenf Phasen ohne Produktionsunterbrechung: Erstens Schema-Audit und Datenanalyse (Datentypen, Beziehungen, Altlasten, Dubletten). Zweitens Schema-Design mit Normalisierung, Indexstrategie und Constraint-Definition. Drittens Testmigration auf einem Staging-System mit vollstaendiger Datenvalidierung. Viertens Lasttests und Performance-Vergleich gegen das Altsystem. Fuenftens Live-Cutover mit Zero-Downtime-Strategie und Rollback-Option innerhalb von 60 Sekunden. Typische Migrationsdauer fuer eine mittelgrosse MySQL-Datenbank: fuenf bis zehn Arbeitstage. Kunden in Duesseldorf und NRW erhalten auf Wunsch persoenliche Vor-Ort-Betreuung waehrend der gesamten Migration.",
    },
];

export default function PostgreFAQ() {
    return (
        <section
            aria-labelledby="postgre-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — PostgreSQL & Datenbankarchitektur ]
                            </span>
                            <h2
                                id="postgre-faq-heading"
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
                            Die wichtigsten Fragen rund um relationale
                            Datenbankarchitektur, Migration von Excel zu SQL,
                            ACID-Sicherheit und PostgreSQL-Performance — vom
                            Geschaeftsfuehrer bis zum CTO.
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
