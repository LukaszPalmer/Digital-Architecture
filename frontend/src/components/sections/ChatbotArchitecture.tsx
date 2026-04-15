// src/components/sections/ChatbotArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Conversational AI Flow + Event Pipeline.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CONVERSATION_FLOW = [
    {
        step: "01",
        label: "NUTZER",
        desc: "Nachricht eingeben",
        note: "Natuerliche Sprache",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        step: "02",
        label: "INTENT",
        desc: "Absicht wird erkannt",
        note: "LLM-Analyse",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        step: "03",
        label: "KONTEXT",
        desc: "Gespraechsverlauf geladen",
        note: "Session-Memory",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        step: "04",
        label: "BACKEND",
        desc: "Daten aus CRM/ERP abfragen",
        note: "API-Integration",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        step: "05",
        label: "ANTWORT",
        desc: "KI generiert Antwort",
        note: "Edge Streaming",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        step: "06",
        label: "AKTION",
        desc: "Ticket, Buchung oder Eskalation",
        note: "Automatisiert",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
];

const AI_EVENTS = [
    { event: "Neue Kundenanfrage", action: "Intent-Erkennung, Kontext laden, Antwort generieren", critical: true },
    { event: "Produktfrage erkannt", action: "Katalog-Lookup, Verfuegbarkeit pruefen, Empfehlung", critical: true },
    { event: "Bestellstatus-Anfrage", action: "ERP-Abfrage, Tracking-Link senden", critical: false },
    { event: "Eskalation noetig", action: "Kontext-Transfer an Agent, Benachrichtigung an Team", critical: true },
    { event: "Termin-Anfrage", action: "Kalender pruefen, Buchung vorschlagen, Bestaetigung", critical: false },
    { event: "Negatives Sentiment", action: "Priorisierung, sofortige Agent-Uebergabe", critical: true },
];

const INTEGRATION_SPECS = [
    {
        id: "AI-INT-01",
        title: "DSGVO-konforme Datenverarbeitung",
        description:
            "Alle Gespraeche werden auf europaeischen Servern verarbeitet. Personenbezogene Daten werden verschluesselt gespeichert und koennen jederzeit geloescht werden. Ihr KI-Assistent erfuellt alle Anforderungen der DSGVO.",
        spec: "EU-SERVER // VERSCHLUESSELT",
    },
    {
        id: "AI-INT-02",
        title: "Edge Runtime Streaming",
        description:
            "KI-Antworten werden ueber Edge Functions gestreamt — der Nutzer sieht die Antwort Wort fuer Wort erscheinen, ohne auf die vollstaendige Generierung zu warten. Das minimiert die wahrgenommene Wartezeit auf unter 200ms.",
        spec: "EDGE FUNCTIONS // < 200MS",
    },
    {
        id: "AI-INT-03",
        title: "Multi-Channel Deployment",
        description:
            "Ein KI-Assistent, viele Kanaele: Webseite, Onlineshop, WhatsApp, Slack oder interne Tools. Die Konversationslogik wird einmal entwickelt und laesst sich auf beliebig viele Touchpoints ausrollen.",
        spec: "WEB // WHATSAPP // SLACK",
    },
];

export default function ChatbotArchitecture() {
    return (
        <section
            aria-labelledby="chatbot-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ So funktioniert Ihr KI-Assistent ]
                            </span>
                            <h2
                                id="chatbot-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Vom Input
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    zur intelligenten Aktion.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Von der Kundennachricht bis zur automatisierten
                            Aktion — so verarbeitet Ihr KI-Chatbot jede
                            Anfrage. Vollautomatisch, kontextbewusst und
                            in unter 200 Millisekunden.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── CONVERSATION FLOW DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Der Konversationsablauf — 6 Schritte ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        KI-Konversationsablauf
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Edge Runtime
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[#000000]">
                                {CONVERSATION_FLOW.map((stage) => (
                                    <div key={stage.step} className={`${stage.bg} p-5 md:p-6 flex flex-col gap-2`}>
                                        <span className={`text-[9px] font-mono font-black tracking-[0.3em] uppercase ${stage.subColor}`}>
                                            SCHRITT {stage.step}
                                        </span>
                                        <p className={`text-[12px] font-black tracking-tight uppercase leading-tight ${stage.textColor}`}>
                                            {stage.label}
                                        </p>
                                        <p className={`text-[10px] leading-snug ${stage.subColor}`}>
                                            {stage.desc}
                                        </p>
                                        <p className={`text-[9px] font-mono ${stage.subColor} tracking-wide`}>
                                            {stage.note}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Vollautomatisch
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Automatische Eskalation bei Bedarf
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── AI EVENTS TABLE ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Was bei jeder Anfrage automatisch passiert ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Automatische Aktionen
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    6 Event-Handler
                                </span>
                            </div>
                            <div className="divide-y divide-[#000000]">
                                {AI_EVENTS.map((ev) => (
                                    <div key={ev.event} className="flex items-center gap-4 px-6 py-4 hover:bg-[#001F3F]/5 transition-colors">
                                        <div className={`w-1.5 h-1.5 shrink-0 ${ev.critical ? "bg-[#001F3F]" : "bg-[#000000]/30"}`} aria-hidden="true" />
                                        <span className="text-[11px] font-mono font-bold text-[#001F3F] tracking-tight flex-1 min-w-0">
                                            {ev.event}
                                        </span>
                                        <span className="text-[11px] text-[#000000]/65 text-right hidden md:block">
                                            {ev.action}
                                        </span>
                                        {ev.critical && (
                                            <span className="bg-[#001F3F] px-2 py-0.5 text-[8px] font-mono font-black tracking-widest text-[#FFFFFF] uppercase shrink-0">
                                                KRITISCH
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Jede Aktion wird protokolliert
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Keine Anfrage geht verloren
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── INTEGRATION SPECS ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]">
                    {INTEGRATION_SPECS.map((spec) => (
                        <div
                            key={spec.id}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] flex flex-col min-h-72 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-6 transition-colors">
                                {spec.id}
                            </span>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {spec.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-6">
                                {spec.description}
                            </p>
                            <div className="mt-auto">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {spec.spec}
                                </span>
                            </div>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
