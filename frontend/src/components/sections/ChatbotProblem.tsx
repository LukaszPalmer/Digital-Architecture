// src/components/sections/ChatbotProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — Warum regelbasierte Chatbots Kunden vergraulen.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "67 %",
        title: "Abbruch bei schlechtem Bot-Erlebnis",
        description:
            "Zwei von drei Nutzern brechen den Kontakt ab, wenn ein Chatbot ihre Frage nicht versteht. Regelbasierte Bots erkennen nur exakte Schluesselwoerter — und scheitern an Tippfehlern, Umgangssprache und komplexen Anliegen. Das Ergebnis: frustrierte Kunden, die zur Konkurrenz wechseln.",
    },
    {
        id: "PAIN-02",
        stat: "40 %",
        title: "Support-Anfragen bleiben liegen",
        description:
            "Unternehmen in Duesseldorf und ganz Deutschland kaempfen mit wachsendem Support-Volumen. E-Mails stapeln sich, Telefone klingeln — und jede unbeantwortete Anfrage ist ein potenziell verlorener Kunde. Ohne Automatisierung skaliert Ihr Kundensupport nicht.",
    },
    {
        id: "PAIN-03",
        stat: "23 Std.",
        title: "Durchschnittliche Antwortzeit",
        description:
            "Ihre Kunden erwarten Antworten in Minuten, nicht in Stunden. Doch ohne 24/7-Erreichbarkeit gehen Anfragen am Wochenende, abends und an Feiertagen unter. Jede Stunde Wartezeit senkt die Wahrscheinlichkeit einer Conversion — besonders im E-Commerce.",
    },
    {
        id: "PAIN-04",
        stat: "–31 %",
        title: "Conversion-Verlust ohne Chat",
        description:
            "Webseiten ohne interaktive Hilfe verlieren wertvolle Leads an die Konkurrenz. Besucher haben Fragen zu Produkten, Preisen oder Lieferzeiten — und wenn niemand antwortet, kaufen sie woanders. Ein intelligenter KI-Assistent fuer Ihre Webseite aendert das.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Regelbasierte Chatbots",
        problem: "Starre Entscheidungsbaeume, die nur vordefinierte Fragen erkennen. Jede neue FAQ muss manuell einprogrammiert werden. Bei unerwarteten Formulierungen antwortet der Bot mit 'Das habe ich nicht verstanden' — und der Kunde ist weg.",
    },
    {
        label: "Kontaktformulare als einziger Kanal",
        problem: "Kunden muessen ein Formular ausfuellen und tagelang auf Antwort warten. Keine Echtzeit-Interaktion, keine Vorqualifizierung, keine Moeglichkeit fuer Rueckfragen. Im Jahr 2026 ist das keine akzeptable Nutzererfahrung mehr.",
    },
    {
        label: "Ausgelagerter Kundensupport",
        problem: "Kundensupport auslagern an externe Callcenter klingt verlockend — fuehrt aber oft zu generischen Antworten ohne Produktwissen. Die Qualitaet sinkt, die Kundenzufriedenheit leidet, und die Kosten bleiben trotzdem hoch.",
    },
    {
        label: "FAQ-Seiten ohne Interaktion",
        problem: "Statische FAQ-Seiten beantworten Standardfragen — aber Kunden muessen selbst suchen und finden oft nicht, was sie brauchen. Ohne natuerliche Sprachverarbeitung bleibt die Huerde zwischen Frage und Antwort zu hoch.",
    },
];

export default function ChatbotProblem() {
    return (
        <section
            aria-labelledby="chatbot-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Warum Ihr Support nicht skaliert ]
                            </span>
                            <h2
                                id="chatbot-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihr Chatbot
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    versteht nichts.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Dumme Chatbots kosten Kunden.</strong>{" "}
                            Regelbasierte Bots, die nur vordefinierte Antworten abspielen,
                            frustrieren Ihre Besucher und belasten Ihr Support-Team in
                            Duesseldorf unnoetig. Und jeder verlorene Kontakt ist ein
                            verlorener Umsatz.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was Sie jeden Tag an Leads kostet ]
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
                                className="absolute top-6 right-6 text-[clamp(2.5rem,5vw,4rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#000000]/08 leading-none tracking-tighter select-none transition-colors"
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
                            [ Warum Ihre aktuelle Loesung das Problem ist ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Veralteter Kundensupport
                            <span className="italic font-normal text-[#FFFFFF]/35"> = verlorene Kunden.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in Marketing, SEO und Google Ads — und schicken Besucher
                            dann auf eine Webseite ohne interaktive Hilfe. Keine Echtzeit-Antworten,
                            kein intelligenter Chatbot fuer Ihren Onlineshop, keine automatische
                            Vorqualifizierung. Das ist, als wuerden Sie ein Geschaeft eroeffnen,
                            aber keinen Verkaeufer einstellen.{" "}
                            <strong>Im Jahr 2026 erwarten Kunden sofortige Antworten — rund um die Uhr.</strong>
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

                {/* ── TRANSITION TO SOLUTION ── */}
                <ScrollReveal delay={120}>
                    <div className="mt-20 md:mt-28 text-center">
                        <p className="text-[clamp(1.2rem,3vw,2rem)] font-black tracking-tight uppercase text-[#FFFFFF]/80 mb-4">
                            Es gibt eine intelligentere Loesung.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">KI-Assistenten mit echtem Sprachverstaendnis</strong> ersetzen
                            Ihre regelbasierten Chatbots durch intelligente Konversations-Interfaces —
                            mit LLM-Integration, kontextbewussten Dialogen und nahtloser Anbindung
                            an Ihre bestehenden Systeme. Konzipiert fuer eine intelligente
                            Nutzerfuehrung und die Entlastung Ihres Supports.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
