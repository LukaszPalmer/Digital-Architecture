// src/components/sections/MongoProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — Das "Daten-Chaos & Angst-Szenario".

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "4.2s",
        title: "Langsame Datenbank-Abfragen",
        description:
            "Eine Produktsuche mit 100.000 SKUs, die vier Sekunden braucht, ist ein Umsatzkiller. Jede Sekunde Ladezeit kostet laut Google 20 % Conversion. Ohne saubere Indexstrategie, ohne Aggregation-Optimierung und ohne Edge-Caching wird aus der Datenbank der Flaschenhals des gesamten Onlineshops.",
    },
    {
        id: "PAIN-02",
        stat: "100 %",
        title: "Datenverlust beim naechsten Crash",
        description:
            "Manuelle Backups werden vergessen, Dumps liegen unverschluesselt auf Entwickler-Laptops, Point-in-Time-Recovery ist nicht eingerichtet. Ein einziger Storage-Ausfall oder ein versehentliches DROP DATABASE — und Kunden-, Bestell- und Rechnungsdaten sind weg. Kein Versicherungsschutz rettet vor dieser Fahrlaessigkeit.",
    },
    {
        id: "PAIN-03",
        stat: "DSGVO",
        title: "Kundendaten am falschen Ort",
        description:
            "Sensible Kundendaten auf US-Servern, ohne Auftragsverarbeitungsvertrag und ohne Verschluesselung-at-Rest — das ist 2026 nicht nur ein Datenschutz-Risiko, sondern ein aktiver Verstoss. Abmahnungen, Bussgelder und Reputationsschaden drohen sofort. DSGVO-konformes Hosting ist kein Feature, sondern Pflicht.",
    },
    {
        id: "PAIN-04",
        stat: "+312 %",
        title: "Zombie-Connections killen den Server",
        description:
            "Ein Next.js Deployment auf Vercel ohne Connection Pooling oeffnet mit jeder Serverless-Funktion neue MongoDB-Verbindungen. Bei 500 parallelen Nutzern — 500 neue Sockets. Die Datenbank erreicht das Connection-Limit, neue Requests timeouten. Der Shop ist offline, obwohl der Server laeuft.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Starre SQL-Tabellen",
        problem:
            "Klassische SQL-Datenbanken erzwingen ein starres Schema. Jede neue Produktkategorie, jedes zusaetzliche Feld und jede Geschaeftserweiterung wird zum Migrations-Drama mit Downtime. MongoDB arbeitet mit Dokumenten statt Tabellen — Ihre Daten wachsen organisch mit Ihrem Erfolg mit, ohne das System zu sprengen.",
    },
    {
        label: "Vergessene manuelle Backups",
        problem:
            "Kein Mensch macht morgens um drei Uhr zuverlaessig einen konsistenten Dump. Ohne kontinuierliche, inkrementelle Cloud-Backups mit Point-in-Time-Recovery ist jeder Datenbank-Ausfall eine existenzielle Bedrohung. Backups muessen automatisiert, verschluesselt und in einer anderen Region repliziert sein — nicht 'hoffentlich noch auf dem NAS im Buero'.",
    },
    {
        label: "Datenbank ohne Indexing-Strategie",
        problem:
            "Jede Abfrage, die keinen Index treffen kann, wird zum Full Collection Scan — das Aequivalent, ein ganzes Buch durchzublaettern, um ein einzelnes Wort zu finden. Mit wachsender Datenmenge skaliert die Latenz linear mit. Saubere Compound- und Partial-Indexes reduzieren Abfrage-Zeiten von Sekunden auf Millisekunden.",
    },
    {
        label: "Schema-Validation als Nachgedanke",
        problem:
            "Ohne $jsonSchema-Regeln auf Datenbankebene landet jeder fehlerhafte Import, jeder ungeprueften API-Call und jeder Legacy-Dump als Daten-Muell in der Collection. Spaeter werden Dashboards unbrauchbar, Reports falsch, Migrationen gefaehrlich. Datenqualitaet muss auf Storage-Ebene erzwungen werden — nicht in der Applikation.",
    },
];

export default function MongoProblem() {
    return (
        <section
            aria-labelledby="mongo-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Daten-Chaos & Angst-Szenario ]
                            </span>
                            <h2
                                id="mongo-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wenn die Datenbank haekt,
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    steht das Geschaeft.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Ihre Daten sind das wertvollste Gut Ihres Unternehmens.</strong>{" "}
                            Langsame Abfragen fuehren zu Kaufabbruechen, vergessene
                            Backups zu Totalverlust, DSGVO-Verstoesse zu Bussgeldern.
                            Ein instabiles Daten-Backbone ist wie ein Fundament
                            aus Sand — je mehr Kunden kommen, desto schneller
                            bricht alles zusammen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-12 md:mb-16">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was ein instabiles Daten-Backbone jeden Monat kostet ]
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
                            [ Warum SQL und manuelle Backups das Problem sind ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Starr, manuell, ungepruefte Daten
                            <span className="italic font-normal text-[#FFFFFF]/35"> = Crash auf Ansage.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in Marketing, Produktfotografie und
                            Conversion-Optimierung — und speichern Kundendaten,
                            Bestellungen und Zahlungshistorie in einer Datenbank,
                            die vor zehn Jahren fuer eine Handvoll Nutzer
                            entworfen wurde. Wenn Ihre Suche Sekunden braucht,
                            ist das kein Hosting-Problem, sondern ein Daten-
                            Architektur-Problem.{" "}
                            <strong>Im Jahr 2026 entscheidet die Datenbank-Architektur ueber den Unternehmenswert.</strong>
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
                            Es gibt ein kugelsicheres Cloud Backbone.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">MongoDB Atlas mit automatisiertem Sharding, kontinuierlichen Backups und EU-Hosting</strong>{" "}
                            ersetzt starre Legacy-Datenbanken durch eine
                            mitwachsende Daten-Infrastruktur — schnell, sicher und
                            ueberall verfuegbar. Gebaut, gewartet und ueberwacht
                            aus Duesseldorf fuer Unternehmen in ganz NRW.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
