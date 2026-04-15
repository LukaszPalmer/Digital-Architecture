// src/components/sections/ChatbotCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "AI-01",
        category: "LLM-INTEGRATION",
        title: "Echtes Sprachverstaendnis durch LLMs",
        description:
            "Kein starres Keyword-Matching mehr. Ihr KI-Chatbot versteht natuerliche Sprache, erkennt Absichten und antwortet kontextbezogen — auch bei Tippfehlern, Umgangssprache und komplexen Formulierungen. Angebunden an fuehrende Sprachmodelle wie OpenAI, Anthropic oder Mistral.",
        specs: ["OpenAI / Anthropic / Mistral", "Prompt-Architektur", "Context-Management"],
    },
    {
        id: "AI-02",
        category: "DIALOG-SYSTEM",
        title: "Multi-Turn Konversationen",
        description:
            "Ihr KI-Assistent merkt sich den gesamten Gespraechsverlauf. Kunden koennen Rueckfragen stellen, Details ergaenzen oder das Thema wechseln — ohne sich zu wiederholen. Session-basiertes Gespraechsgedaechtnis fuer kohaerente, natuerliche Dialoge.",
        specs: ["Gespraechsgedaechtnis", "Kontextbewusste Antworten", "Themen-Wechsel"],
    },
    {
        id: "AI-03",
        category: "ONLINESHOP",
        title: "Chatbot fuer Ihren Onlineshop",
        description:
            "Produktberatung, Bestellverfolgung und Retouren-Management — direkt im Chat. Ihr KI-Chatbot fuer den Onlineshop kennt Ihren Produktkatalog, beantwortet Fragen zu Verfuegbarkeit und Lieferzeiten und fuehrt Besucher gezielt zum Kauf.",
        specs: ["Produktkatalog-Anbindung", "Bestellstatus-Abfrage", "Retouren-Handling"],
    },
    {
        id: "AI-04",
        category: "INTEGRATION",
        title: "CRM & Backend-Anbindung",
        description:
            "Ihr Chatbot fuer Unternehmen greift direkt auf bestehende Systeme zu — Bestellstatus aus dem ERP, Kundendaten aus dem CRM, offene Tickets aus dem Helpdesk. Keine isolierte Loesung, sondern ein KI-Assistent, der Ihr gesamtes Backend kennt.",
        specs: ["CRM-Integration", "ERP-Anbindung", "Helpdesk-Sync"],
    },
    {
        id: "AI-05",
        category: "ESKALATION",
        title: "Intelligente Uebergabe an Menschen",
        description:
            "Nicht jede Anfrage kann ein Bot loesen. Ihr KI-Assistent erkennt, wann ein menschlicher Agent uebernehmen muss — und uebergibt den kompletten Gespraechskontext. Keine Wiederholung fuer den Kunden, kein Informationsverlust fuer Ihr Team.",
        specs: ["Kontext-Transfer", "Eskalationsregeln", "Nahtlose Uebergabe"],
    },
    {
        id: "AI-06",
        category: "AUTOMATISIERUNG",
        title: "Kundensupport automatisieren",
        description:
            "Zielt auf eine Entlastung Ihres Support-Teams ab: FAQ-Beantwortung, Termin-Buchungen, Lead-Qualifizierung und Ticket-Erstellung laufen automatisch. Ihr Team konzentriert sich auf komplexe Faelle — der KI-Assistent uebernimmt die Routine.",
        specs: ["FAQ-Automation", "Lead-Qualifizierung", "Ticket-Erstellung"],
    },
];

export default function ChatbotCapabilities() {
    return (
        <section
            aria-labelledby="chatbot-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ KI-Chatbot Funktionen ]
                            </span>
                            <h2
                                id="chatbot-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was Ihr KI-Assistent
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    fuer Sie leistet.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Kernfunktionen, die zusammen einen
                            intelligenten KI-Assistenten fuer Ihre Webseite
                            ergeben — vom ersten Kontakt bis zur
                            automatisierten Support-Abwicklung.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── CAPABILITIES GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {CAPABILITIES.map((cap) => (
                        <div
                            key={cap.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                    {cap.category}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {cap.id}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.2rem,2.2vw,1.7rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {cap.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {cap.description}
                            </p>
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {cap.specs.map((spec) => (
                                    <li
                                        key={spec}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            {spec}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
