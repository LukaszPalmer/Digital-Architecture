// src/components/sections/NodeProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — der Blackout-Frust.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "8h",
        title: "Downtime im Sales-Event",
        description:
            "Eine Marketing-Kampagne treibt 30.000 Nutzer gleichzeitig auf den Onlineshop — und das Backend stuerzt ab. Ein synchroner PHP/MySQL-Stack mit blockierender I/O kann das nicht abfedern. Jede Stunde Ausfall sind nicht nur fehlende Bestellungen, sondern dauerhaft verlorenes Vertrauen.",
    },
    {
        id: "PAIN-02",
        stat: ">3.5s",
        title: "Time-to-First-Byte aus Frankfurt",
        description:
            "Wenn das Backend in einem zentralen Rechenzentrum laeuft, zahlt jeder Nutzer in Hamburg, Muenchen oder Wien Latenz. Google misst diesen TTFB — und straft langsame Antworten im Ranking ab. Ein Server, der 'irgendwo' steht, ist im Jahr 2026 ein SEO-Risiko.",
    },
    {
        id: "PAIN-03",
        stat: "+217 %",
        title: "Server-Kosten durch ineffiziente Architektur",
        description:
            "Monolithische Systeme skalieren vertikal — d.h. groessere, teurere Server. Wer keine Microservices, kein Connection Pooling und kein Caching nutzt, zahlt bei wachsendem Traffic exponentiell mehr fuer dieselbe Performance. Technische Schulden, jeden Monat sichtbar auf der AWS-Rechnung.",
    },
    {
        id: "PAIN-04",
        stat: "1 Bug",
        title: "Reicht fuer den Domino-Effekt",
        description:
            "Eine blockierende Operation im Event Loop friert das gesamte Backend ein — Login, Checkout, API, alles steht. Ohne Worker Threads, ohne strukturiertes Logging und ohne P99-Alerting bemerken Sie den Ausfall erst, wenn die ersten Beschwerden im Support eingehen. Dann ist der Schaden bereits angerichtet.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Synchrone PHP/MySQL-Backends",
        problem: "Pro Request ein blockierender Prozess. Bei 1.000 gleichzeitigen Nutzern braucht es 1.000 Apache-Worker — und der Server geht in die Knie. Node.js mit non-blocking I/O verwaltet dieselbe Last in einem einzigen Prozess.",
    },
    {
        label: "Monolith ohne Service-Boundaries",
        problem: "Ein einziges Repository, eine einzige Deploy-Pipeline, eine einzige Datenbank. Jede aenderung triggert ein Full-Deploy, jeder Bug betrifft das gesamte System. Skalierung ist nur durch komplette Re-Designs moeglich — Insolvenzgefahr fuer schnell wachsende Unternehmen.",
    },
    {
        label: "Datenbank ohne Connection Pooling",
        problem: "Jeder Request oeffnet eine neue DB-Verbindung — bei Lastspitzen erschoepft sich der Connection-Pool, neue Requests laufen auf Timeouts. Mit 'maxPoolSize' und Read-Replicas ist dieses Problem in einer Stunde geloest. Ohne — ein Dauer-Brennherd im Operations-Team.",
    },
    {
        label: "Kein Caching, jeder Request hits die DB",
        problem: "Die teuerste Operation ist die, die man nicht haette machen muessen. Ohne Redis-Caching werden identische Queries hundertfach pro Sekunde an MongoDB/Postgres geschickt. Das treibt nicht nur Kosten, sondern auch die P99-Latenz nach oben — und damit die Bounce Rate.",
    },
];

export default function NodeProblem() {
    return (
        <section
            aria-labelledby="node-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Der Blackout-Frust ]
                            </span>
                            <h2
                                id="node-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wenn das Backend
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    haekt, gehen Kunden.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Instabile Systeme kosten nicht nur Umsatz — sie ruinieren den Ruf.</strong>{" "}
                            Ein Crash waehrend einer Marketing-Kampagne, ein
                            Timeout im Checkout, ein langsamer API-Call im
                            Login: Vertrauen ist innerhalb von Sekunden
                            verspielt. Technische Schulden von heute sind die
                            Insolvenzen von morgen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-12 md:mb-16">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was eine instabile Infrastruktur jeden Monat kostet ]
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
                            [ Warum Ihre aktuelle Architektur das Problem ist ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Synchron, monolithisch, ungecached
                            <span className="italic font-normal text-[#FFFFFF]/35"> = Crash auf Ansage.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in Marketing, in Conversion-Optimierung
                            und in Branding — und stellen Ihr gesamtes
                            Wachstum auf eine Server-Architektur, die fuer 100
                            gleichzeitige Nutzer entworfen wurde, nicht fuer
                            10.000. Wenn Ihre Webseite bei vielen Besuchern
                            abstuerzt, ist das kein Hosting-Problem — es ist ein
                            Architektur-Problem.{" "}
                            <strong>Im Jahr 2026 entscheidet die Backend-Architektur ueber den Unternehmenswert.</strong>
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
                            Es gibt einen Scalable Backend Core.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">Node.js mit Microservice-Architektur, Vercel Edge Functions und Redis-Caching</strong>{" "}
                            ersetzt blockierende Monolithen durch ein digitales
                            Fundament, das mit dem Erfolg mitwaechst — bei
                            minimalen Serverkosten und maximaler Verfuegbarkeit.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
