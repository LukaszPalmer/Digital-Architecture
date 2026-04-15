// src/components/sections/ChatbotUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "E-COMMERCE",
        title: "Chatbot fuer Ihren Onlineshop",
        description:
            "Ihr KI-Chatbot fuer den Onlineshop beraet Kunden zu Produkten, beantwortet Fragen zu Verfuegbarkeit und Lieferzeiten, verfolgt Bestellungen und wickelt Retouren ab — rund um die Uhr. Konzipiert fuer eine intelligente Nutzerfuehrung, die Besucher gezielt zum Kauf fuehrt.",
        metrics: ["Produktberatung", "Bestellverfolgung", "Retouren-Management"],
    },
    {
        id: "UC-02",
        segment: "KUNDENSERVICE",
        title: "Kundensupport automatisieren",
        description:
            "Zielt auf eine Entlastung Ihres Support-Teams ab: FAQ-Beantwortung, Ticket-Erstellung, Statusabfragen und Terminbuchungen laufen automatisch. Ihr Team konzentriert sich auf komplexe Faelle — der KI-Assistent uebernimmt das Tagesgeschaeft.",
        metrics: ["FAQ-Automation", "Ticket-Erstellung", "24/7 Erreichbarkeit"],
    },
    {
        id: "UC-03",
        segment: "LEAD-GENERIERUNG",
        title: "Anfragen vorqualifizieren",
        description:
            "Ihr KI-Assistent fuer die Webseite qualifiziert Leads automatisch vor: Er stellt die richtigen Fragen, erfasst Kontaktdaten und Anforderungen und leitet nur qualifizierte Anfragen an Ihr Vertriebsteam weiter. Weniger Zeitverschwendung, mehr Abschluesse.",
        metrics: ["Automatische Vorqualifizierung", "Kontaktdaten-Erfassung", "CRM-Sync"],
    },
    {
        id: "UC-04",
        segment: "ENTERPRISE",
        title: "Interne Knowledge Bots",
        description:
            "Fuer Unternehmen mit grossem internen Wissensbestand: HR-FAQs, IT-Helpdesk-Anfragen, Onboarding-Assistenten und Wissensdatenbank-Zugriff — alles ueber einen KI-Chatbot, der auf Ihre internen Dokumente trainiert ist.",
        metrics: ["HR-Automation", "IT-Helpdesk", "Onboarding-Assistent"],
    },
    {
        id: "UC-05",
        segment: "DUESSELDORF",
        title: "KI-Chatbot Agentur Duesseldorf",
        description:
            "Als Chatbot-Agentur in Duesseldorf kennen wir die Anforderungen lokaler Unternehmen — von DSGVO-konformer Datenverarbeitung ueber deutsche Sprachmodelle bis hin zu persoenlicher Beratung vor Ort. Ihr KI-Assistent wird von Experten entwickelt, die Ihren Markt verstehen.",
        metrics: ["Persoenliche Beratung", "DSGVO-konform", "Deutsche Sprachmodelle"],
    },
    {
        id: "UC-06",
        segment: "MULTI-CHANNEL",
        title: "Chatbot fuer jede Plattform",
        description:
            "Ein KI-Assistent, viele Kanaele: Integrieren Sie denselben intelligenten Chatbot auf Ihrer Webseite, in Ihrem Onlineshop, ueber WhatsApp oder in internen Slack-Channels. Die Konversationslogik wird einmal entwickelt und ueberall eingesetzt.",
        metrics: ["Webseite & Onlineshop", "WhatsApp-Integration", "Slack & Teams"],
    },
];

export default function ChatbotUseCases() {
    return (
        <section
            aria-labelledby="chatbot-uc-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Fuer wen ist das gedacht? ]
                            </span>
                            <h2
                                id="chatbot-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                KI-Assistenten fuer
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    jedes Unternehmen.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Egal ob Sie einen Chatbot fuer Ihren Onlineshop,
                            einen KI-Assistenten fuer Ihre Webseite oder
                            einen internen Knowledge Bot erstellen moechten —
                            hier sehen Sie, wie KI fuer Ihr Unternehmen arbeitet.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── USE CASE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {USE_CASES.map((uc) => (
                        <div
                            key={uc.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {uc.segment}
                                </span>
                                <span className="text-[12px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {uc.id}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.1rem,2vw,1.6rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {uc.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {uc.description}
                            </p>
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {uc.metrics.map((metric) => (
                                    <li
                                        key={metric}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            {metric}
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
