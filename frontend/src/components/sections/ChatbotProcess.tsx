// src/components/sections/ChatbotProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Use-Case-Analyse",
        description:
            "Wir analysieren Ihre Kundenanfragen, identifizieren wiederkehrende Fragen und definieren die Bot-Persona. Welche Aufgaben soll der KI-Assistent uebernehmen? Wo liegt das groesste Entlastungspotenzial fuer Ihr Team? Am Ende steht ein klarer Anforderungskatalog.",
        duration: "TAG 1–2",
        tag: "ANALYSE",
    },
    {
        step: "02",
        title: "Conversation Design",
        description:
            "Wir strukturieren die Dialogfluesse, definieren Intent-Mappings und entwickeln Fallback-Strategien. Jeder moegliche Gespraechsverlauf wird durchgeplant — von der Begruessung ueber die Produktberatung bis zur Eskalation an Ihr Support-Team.",
        duration: "TAGE 3–5",
        tag: "DESIGN",
    },
    {
        step: "03",
        title: "KI-Integration & Entwicklung",
        description:
            "Wir integrieren das LLM, entwickeln die Prompt-Architektur und verbinden den Chatbot mit Ihren Backend-Systemen. Edge Streaming fuer schnelle Antworten, CRM-Anbindung fuer personalisierte Interaktionen, DSGVO-konforme Datenverarbeitung auf EU-Servern.",
        duration: "TAGE 6–12",
        tag: "ENTWICKLUNG",
    },
    {
        step: "04",
        title: "Training & Go-Live",
        description:
            "Vor dem Launch testen wir jeden Gespraechsfluss: Intent-Erkennung, Eskalationslogik, Backend-Abfragen und Edge-Cases. Nach Go-Live analysieren wir die Chat-Logs, kalibrieren die Intent-Erkennung und optimieren die Antwortqualitaet kontinuierlich.",
        duration: "TAGE 13–15",
        tag: "GO-LIVE",
    },
];

export default function ChatbotProcess() {
    return (
        <section
            aria-labelledby="chatbot-process-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/50 uppercase block mb-8">
                                [ Unser Prozess — Vom Konzept zum KI-Assistenten ]
                            </span>
                            <h2
                                id="chatbot-process-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                In 15 Tagen zum
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/50">
                                    intelligenten KI-Assistenten.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/25 pl-6">
                            Vier klare Schritte von der Use-Case-Analyse
                            bis zum fertigen KI-Chatbot — damit Ihr
                            Kundensupport automatisiert und Ihre Webseite
                            rund um die Uhr erreichbar ist.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PROCESS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#FFFFFF]/20">
                    {PROCESS_STEPS.map((item) => (
                        <div
                            key={item.step}
                            className="group relative p-8 md:p-10 border-r border-b border-[#FFFFFF]/20 flex flex-col min-h-100 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <span
                                className="absolute top-6 right-6 text-[clamp(3rem,5vw,4.5rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#001F3F]/08 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {item.step}
                            </span>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="bg-[#FFFFFF]/15 group-hover:bg-[#001F3F]/10 px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {item.tag}
                                </span>
                                <span className="text-[9px] font-mono font-bold text-[#FFFFFF]/45 group-hover:text-[#001F3F]/55 tracking-[0.3em] uppercase transition-colors">
                                    {item.duration}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-5">
                                {item.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/70 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/25 group-hover:border-[#001F3F]/30 pl-4 mt-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
