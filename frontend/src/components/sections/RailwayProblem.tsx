// src/components/sections/RailwayProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — "Wachstums-Schmerz" & Server-Stress.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "502",
        title: "Der Gateway-Error zur Prime-Time",
        description:
            "TV-Auftritt, viraler TikTok, Black-Friday-Sale: Ihre App wird gefunden — und stuerzt ab. Ein Monolith auf einem Standard-vServer kennt nur zwei Zustaende: laeuft oder 502 Bad Gateway. Jeder abgebrochene Checkout in den ersten zehn Minuten nach dem Crash ist direkter, messbarer Umsatzverlust — meist genau der Traffic, den Sie monatelang aufgebaut haben.",
    },
    {
        id: "PAIN-02",
        stat: "3:47",
        title: "Die naechtliche Server-Wartung",
        description:
            "Kernel-Patch, TLS-Renewal, Mongoose-Upgrade, Security-CVE — alle zwei Wochen faellt die Wartung an, meist nachts, weil tagsueber niemand Downtime akzeptiert. Ihr Team schiebt Features, weil die Infrastruktur Aufmerksamkeit frisst. Zeit, die in Produktentwicklung fliessen muesste, geht in SSH-Sessions und /var/log/syslog verloren.",
    },
    {
        id: "PAIN-03",
        stat: "−35 %",
        title: "Time-to-Market-Strafe",
        description:
            "Manuelles Deployment heisst: Merge, SSH, git pull, npm install, pm2 restart, Daumen druecken. Konkurrenten mit Git-native CI/CD deployen in dieser Zeit fuenf Mal. Wer dreimal pro Tag sicher deployt, lernt dreimal so schnell aus Nutzer-Feedback — und verdraengt Marktteilnehmer mit quartalsweisen Releases in 18 Monaten vom Markt.",
    },
    {
        id: "PAIN-04",
        stat: "x7",
        title: "Unberechenbare Server-Kosten",
        description:
            "Dimensionieren Sie fuer Peak-Traffic, zahlen Sie 90 % der Zeit fuer ungenutzte CPU. Dimensionieren Sie fuer Baseline, stuerzt der Server beim siebten grossen Event im Jahr ab. Fixe Server-Groessen sind ein Glueckspiel mit dem eigenen Umsatz — und jede Fehleinschaetzung bezahlen Sie entweder in Euro oder in Ausfaellen.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Monolith auf einem vServer",
        problem:
            "Alle Funktionen — Auth, Checkout, Bildverarbeitung, E-Mail-Versand — laufen in einem Prozess auf einem Server. Stuerzt das Modul fuer PDF-Generierung ab, ist auch der Login down. Ein Memory-Leak im Worker zieht die komplette App mit. Horizontales Skalieren ist unmoeglich, weil alles gekoppelt ist. Microservices auf Railway isolieren Ausfaelle pro Service.",
    },
    {
        label: "Manuelle Kubernetes-Orchestrierung",
        problem:
            "Kubernetes ist maechtig — und kostet einen Full-Time DevOps-Engineer, drei Wochen Setup-Zeit und monatlich vierstellige Controller-Plane-Kosten. Fuer 95 % der mittelstaendischen Unternehmen ist das Overkill. Railway liefert die 20 % Funktionalitaet, die 80 % aller Teams brauchen — ohne Helm-Charts, YAML-Wuesten und Operator-Debugging.",
    },
    {
        label: "SSH-basierte Deployments",
        problem:
            "Deployment per SSH bedeutet: Jeder Release ist ein Unikat, jeder Fehler reproduzierbar nur im Kopf des Deployers. Keine Audit-Trail, keine Rollback-Button, keine parallele Staging-Umgebung. Ein falsches Kommando zerstoert Production. Git-native CI/CD eliminiert den Menschen aus der kritischen Kette — jeder Deploy ist identisch, jeder Rollback ist ein Klick.",
    },
    {
        label: "Keine Environment-Trennung",
        problem:
            "Staging, QA und Production auf demselben Server, mit denselben Credentials, derselben Datenbank — eine verrutschte Migration und die Kundendaten sind weg. Railway bietet isolierte Environments pro Branch, separate Secrets, eigene Datenbank-Instanzen und Feature-Branch-Preview-URLs. Experimentieren ohne Production-Risiko wird zum Standard.",
    },
];

export default function RailwayProblem() {
    return (
        <section
            aria-labelledby="railway-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Wachstums-Schmerz und Server-Stress ]
                            </span>
                            <h2
                                id="railway-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wenn der Server kippt,
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    kippt das Vertrauen.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Ein instabiler Server ist geschaeftsschaedigend.</strong>{" "}
                            Wenn die Konkurrenz schneller liefert und Ihre App
                            staendig 502 Gateway Error zeigt, verlieren Sie nicht nur
                            Kunden, sondern auch Ihr Google-Ranking. Ein einziger
                            Root-Server ohne Auto-Scaling ist 2026 kein Betrieb mehr
                            — es ist ein Risiko.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-12 md:mb-16">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was fragile Infrastruktur jeden Monat kostet ]
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
                            [ Warum Monolithen und manuelle Server-Wartung das Problem sind ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Ein Prozess, ein Server
                            <span className="italic font-normal text-[#FFFFFF]/35"> = ein Totalausfall.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in Feature-Entwicklung, Marketing und
                            Kundenakquise — und lassen die gesamte Auslieferung an
                            einem einzigen Prozess auf einem einzigen Server haengen.
                            Wenn Ihre App bei jedem Wachstumsschub ins Straucheln
                            geraet, ist das kein Kapazitaets-Problem, sondern ein
                            Architektur-Problem.{" "}
                            <strong>Im Jahr 2026 entscheidet die Elastizitaet Ihrer Infrastruktur ueber Ihre Wachstums-Grenze.</strong>
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
                            Es gibt eine Infrastruktur, die mitwaechst.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">Railway Cloud mit Container-Isolation, Auto-Scaling und Git-native CI/CD</strong>{" "}
                            ersetzt fragile Monolithen durch dynamische
                            Microservice-Topologien. Ihre App ist nicht mehr ein
                            Prozess auf einem Server — sie ist ein Netzwerk aus
                            unabhaengigen Services, die einzeln skalieren,
                            einzeln deployen und einzeln ausfallen koennen, ohne
                            das Ganze zu reissen. Designed und betrieben aus
                            Duesseldorf fuer Unternehmen in ganz NRW.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
