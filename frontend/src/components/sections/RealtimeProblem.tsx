// src/components/sections/RealtimeProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — Warum F5-Druecken Marktplaetze zerstoert.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "–47 %",
        title: "Abbruch durch Refresh-Frust",
        description:
            "Wenn Nutzer F5 druecken muessen, um neue Nachrichten zu sehen, bricht das Vertrauen zusammen. Auf Marktplaetzen entscheiden Sekunden ueber den Deal — wer zu spaet antwortet, verliert den Lead an die Konkurrenz. HTTP-Polling ist keine Echtzeit, sondern eine Illusion.",
    },
    {
        id: "PAIN-02",
        stat: "3.2s",
        title: "Durchschnittliche Polling-Latenz",
        description:
            "Standard-HTTP-Polling fragt den Server alle 3–5 Sekunden ab — egal ob neue Daten vorliegen oder nicht. Das Ergebnis: verschwendete Bandbreite, unnoetige Serverlast und eine Nutzererfahrung, die sich traege und unzuverlaessig anfuehlt. Im P2P-Handel ist das ein Deal-Breaker.",
    },
    {
        id: "PAIN-03",
        stat: "78 %",
        title: "Erwarten sofortige Antworten",
        description:
            "Nutzer erwarten Echtzeit-Kommunikation — nicht weil es ein Nice-to-have ist, sondern weil sie es von WhatsApp, Telegram und iMessage gewoehnt sind. Eine Chat-Funktion, die sich langsam anfuehlt, wird nicht genutzt. Und was nicht genutzt wird, generiert keinen Umsatz.",
    },
    {
        id: "PAIN-04",
        stat: "–62 %",
        title: "Conversion-Verlust ohne Live-Chat",
        description:
            "Plattformen ohne Echtzeit-Kommunikation verlieren wertvolle Interaktionen. Wenn ein Kaeufer eine Frage zum Produkt hat und keine sofortige Antwort bekommt, kauft er woanders. Live-Interaktion steigert die Conversion Rate nachweislich — Latenz toetet sie.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "HTTP-Polling (setInterval)",
        problem: "Alle paar Sekunden wird der Server gefragt: 'Gibt es was Neues?' — meistens lautet die Antwort: Nein. Das verschwendet Bandbreite, belastet den Server unnoetig und fuehlt sich fuer den Nutzer wie eine Diashow an. Keine echte Echtzeit, nur simulierte.",
    },
    {
        label: "Kontaktformular als Chat-Ersatz",
        problem: "Nutzer muessen ein Formular ausfuellen und auf eine E-Mail warten. Auf einem Marktplatz, wo der erste Kontakt ueber den Deal entscheidet, ist das wie ein Geschaeft ohne Telefon. Die Huerde zwischen Interesse und Kontakt ist zu hoch.",
    },
    {
        label: "Drittanbieter-Chat-Widgets",
        problem: "Eingebettete Chat-Plugins laden externe Scripts, erhoehen die Ladezeit Ihrer Seite und senden Nutzerdaten an fremde Server. Keine Kontrolle ueber die UX, keine Integration in Ihre Plattform-Logik, keine Anpassung an Ihre Brand. Ein Fremdkoerper im eigenen System.",
    },
    {
        label: "REST-basierte Nachrichtenabfrage",
        problem: "Nachrichten werden ueber klassische GET-Requests geladen — der Client muss aktiv nach Updates fragen. Bei 10.000 gleichzeitigen Nutzern bedeutet das 10.000 Requests pro Sekunde, die Ihr Server beantworten muss. Das skaliert nicht. WebSockets loesen genau dieses Problem.",
    },
];

export default function RealtimeProblem() {
    return (
        <section
            aria-labelledby="realtime-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Warum Ihre Plattform sich tot anfuehlt ]
                            </span>
                            <h2
                                id="realtime-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihre Nutzer druecken
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    immer noch F5.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Latenz toetet Vertrauen.</strong>{" "}
                            Im P2P-Handel — ob Kleinanzeigen, Marktplatz oder
                            Plattform — entscheidet die erste Sekunde ueber den
                            Deal. Wer zu spaet antwortet, verliert den Lead.
                            Und wer HTTP-Polling als Echtzeit verkauft,
                            beluegt seine Nutzer.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was Ihre Plattform jeden Tag an Deals kostet ]
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
                            Polling, Formulare, Widgets
                            <span className="italic font-normal text-[#FFFFFF]/35"> = tote Plattform.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in Entwicklung, Marketing und Nutzerakquise — und
                            schicken Ihre Nutzer dann auf eine Plattform ohne echte
                            Echtzeit-Kommunikation. Keine sofortigen Nachrichten, kein
                            Online-Status, keine Live-Benachrichtigungen. Das ist, als
                            wuerden Sie einen Marktplatz bauen, auf dem niemand miteinander
                            reden kann.{" "}
                            <strong>Im Jahr 2026 erwarten Nutzer Instant Messaging — ueberall.</strong>
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
                            Es gibt eine Instant-Gratification-Engine.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">Socket.IO mit WebSocket-Architektur</strong> ersetzt
                            Ihr Polling durch persistente, bidirektionale Verbindungen —
                            Nachrichten in unter einer Millisekunde, automatische Reconnection
                            und State-Recovery. Kommunikationssysteme, die sich so schnell
                            anfuehlen wie ein persoenliches Gespraech.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
