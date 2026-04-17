// src/components/sections/PostgreProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — "Daten-Labyrinth" & Kontrollverlust.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "47 %",
        title: "Die Excel-Tabelle, die alles laehmt",
        description:
            "Ihre Kundenverwaltung lebt in einer Excel-Datei mit 38 Reitern, 12.000 Zeilen und drei verschiedenen Datumsformaten. Jede Suche dauert Sekunden, jede Auswertung ist ein manueller Akt. Wenn zwei Mitarbeiter gleichzeitig die Datei oeffnen, ueberschreibt der Letzte den Ersten. 47 % aller KMU in Deutschland verlieren wertvolle Arbeitszeit durch unstrukturierte Datenhaltung — jeden einzelnen Tag.",
    },
    {
        id: "PAIN-02",
        stat: "x3",
        title: "Dreifach gespeichert, keiner weiss was gilt",
        description:
            "Kundenadressen in der Buchhaltung, im CRM und im Onlineshop — alle drei leicht unterschiedlich. Ein Umzug wird in System A aktualisiert, in System B vergessen, in System C gar nicht erst gepflegt. Das Ergebnis: Pakete an falsche Adressen, doppelte Rechnungen und ein Vertriebsteam, das dem eigenen Datenbestand nicht mehr vertraut. Ohne eine einzige Quelle der Wahrheit entstehen taeglich Fehler, die reales Geld kosten.",
    },
    {
        id: "PAIN-03",
        stat: "8 s",
        title: "Abfragen, die Kaffee-Pausen erzwingen",
        description:
            "Ihr Backend braucht acht Sekunden fuer eine Bestandsabfrage, weil die Datenbank ohne Indizes jede einzelne Zeile durchsucht. Kunden brechen den Checkout ab, Mitarbeiter wechseln waehrend der Ladezeit den Tab und Ihr Google-Ranking sinkt, weil Core Web Vitals ins Rote rutschen. Eine langsame Datenbank ist kein IT-Problem — sie ist ein direkter Umsatzkiller.",
    },
    {
        id: "PAIN-04",
        stat: "0",
        title: "Null Schutz bei Systemausfall",
        description:
            "Ein Stromausfall waehrend einer Bestellung: Der Lagerbestand ist reduziert, aber die Bestellung nie gespeichert worden. Oder schlimmer: die Zahlung ist gebucht, aber die Lieferung nie ausgeloest. Ohne ACID-Transaktionen gibt es keine Garantie, dass zusammengehoerige Operationen entweder komplett oder gar nicht ausgefuehrt werden. Jeder Absturz wird zum Daten-Roulette.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Excel als Datenbank-Ersatz",
        problem:
            "Excel ist ein Tabellenkalkulationsprogramm, keine Datenbank. Es gibt keine referenzielle Integritaet, keine Zugriffskontrolle, kein Transaktions-Management, keine parallelen Schreibzugriffe. Ab 10.000 Zeilen wird es langsam, ab 100.000 unbrauchbar. Ein relationales Datenbankschema mit Foreign Keys und Constraints ersetzt 38 Excel-Reiter durch eine einzige, konsistente Datenquelle — durchsuchbar in Millisekunden.",
    },
    {
        label: "Unstrukturierte JSON-Speicherung",
        problem:
            "NoSQL-Datenbanken sind maechtig fuer unstrukturierte Dokumente — aber katastrophal fuer Daten mit festen Beziehungen. Wenn Ihre Bestellungen, Kunden und Produkte miteinander verknuepft sein muessen, brauchen Sie Foreign Keys, Joins und Constraints. PostgreSQL liefert beides: relationale Praezision UND JSONB fuer flexible Attribute — ohne Kompromisse bei der Datenintegritaet.",
    },
    {
        label: "Keine Zugriffskontrolle auf Datenebene",
        problem:
            "Jeder Mitarbeiter sieht alles: Gehaelter, Kundendaten, Finanzzahlen. Die Zugriffskontrolle existiert nur in der Applikation — ein direkter Datenbankzugriff umgeht sie komplett. PostgreSQL Row-Level Security erzwingt Berechtigungen direkt in der Datenbank: Ein Vertriebsmitarbeiter sieht nur seine Kunden, die Buchhaltung nur ihre Mandanten. Compliance auf Datenbankebene, nicht auf Vertrauensbasis.",
    },
    {
        label: "Keine Backup- und Recovery-Strategie",
        problem:
            "Das letzte Backup ist drei Wochen alt und wurde nie getestet. Ein Festplattenausfall, ein versehentliches DELETE ohne WHERE-Klausel oder ein Ransomware-Angriff — und die Daten der letzten 21 Tage sind unwiderruflich verloren. PostgreSQL mit pgBackRest und WAL-Archivierung ermoeglicht Point-in-Time-Recovery: Wiederherstellung auf jede Sekunde der Datenbankhistorie, mit einem RTO unter 15 Minuten.",
    },
];

export default function PostgreProblem() {
    return (
        <section
            aria-labelledby="postgre-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Datenchaos und Kontrollverlust ]
                            </span>
                            <h2
                                id="postgre-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wenn Daten luegen,
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    luegt das Business.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Inkonsistente Daten fuehren zu falschen Entscheidungen.</strong>{" "}
                            Ein &quot;verlorener&quot; Kunde in der Datenbank ist verlorener
                            Umsatz. Doppelte Datensaetze verfaelschen Ihre Reports.
                            Ein langsames Backend frustriert Mitarbeiter und Kunden
                            gleichermassen. Das Daten-Labyrinth kostet Sie mehr,
                            als Sie denken — jeden einzelnen Tag.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-12 md:mb-16">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was unstrukturierte Daten jeden Monat kosten ]
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
                                className="absolute top-6 right-6 text-[clamp(2.5rem,5vw,4rem)] font-black text-[#FFFFFF]/[0.08] group-hover:text-[#000000]/[0.08] leading-none tracking-tighter select-none transition-colors"
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
                            [ Warum Excel, fehlende Strukturen und mangelnde Kontrolle das Problem sind ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Kein Schema, keine Constraints
                            <span className="italic font-normal text-[#FFFFFF]/35"> = keine Datenqualitaet.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in Marketing, Kundenakquise und
                            Produktentwicklung — und lassen die gesamte
                            Datenhaltung in einem System ohne referenzielle
                            Integritaet, ohne Zugriffskontrolle und ohne
                            Transaktionssicherheit. PostgreSQL ist wie ein
                            perfekt sortiertes digitales Archiv, in dem nichts
                            verloren geht und alles seinen festen Platz hat.{" "}
                            <strong>Im Jahr 2026 entscheidet die Qualitaet Ihrer Daten ueber die Qualitaet Ihrer Entscheidungen.</strong>
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

                {/* ── BRIDGE TO SOLUTION ── */}
                <ScrollReveal delay={120}>
                    <div className="mt-20 md:mt-28 text-center">
                        <p className="text-[clamp(1.2rem,3vw,2rem)] font-black tracking-tight uppercase text-[#FFFFFF]/80 mb-4">
                            Es gibt ein Daten-Fundament, das mitwaechst.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">PostgreSQL Core Architecture mit ACID-Garantien, Foreign Keys und intelligentem Indexing</strong>{" "}
                            ersetzt fragile Datensilos durch eine einzige,
                            konsistente Quelle der Wahrheit. Ihre Daten sind
                            nicht mehr ueber Dutzende Tabellen und Systeme
                            verstreut — sie sind relational verknuepft,
                            transaktionssicher und in Millisekunden abrufbar.
                            Designed und betrieben aus Duesseldorf fuer
                            Unternehmen in ganz NRW.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
