// src/components/sections/RealtimeFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (Schema liegt in page.tsx als JSON-LD).
// A11y: aria-live="assertive" fuer eingehende Chat-Nachrichten erwaehnt.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const FAQS = [
    {
        question: "Was ist der Unterschied zwischen WebSockets, Long-Polling und Server-Sent Events?",
        answer: "WebSockets bieten eine persistente, bidirektionale Verbindung — ideal fuer Chats und Live-Interaktionen. Long-Polling simuliert Echtzeit durch wiederholte HTTP-Anfragen und ist ein zuverlaessiger Fallback, aber ressourcenintensiver. Server-Sent Events (SSE) sind unidirektional vom Server zum Client — ideal fuer Feeds, aber nicht fuer Chats. Socket.IO nutzt WebSockets als Primaerprotokoll und faellt automatisch auf Long-Polling zurueck.",
    },
    {
        question: "Wie sicher sind WebSockets fuer Zahlungsdaten und sensible Kommunikation?",
        answer: "WebSocket-Verbindungen laufen ueber WSS (TLS-verschluesselt). Mit JWT-Authentifizierung in der Socket.IO Middleware und serverseitiger Validierung sind sie fuer sensible Kommunikation geeignet. Zahlungsdaten sollten nie ueber WebSockets uebertragen werden — dafuer nutzen wir PCI-DSS-konforme APIs wie Stripe. Alle Daten werden DSGVO-konform auf europaeischen Servern verarbeitet.",
    },
    {
        question: "Kann ich eine Chat-Funktion wie bei eBay Kleinanzeigen fuer meinen Marktplatz bauen lassen?",
        answer: "Ja. Wir entwickeln Nutzer-zu-Nutzer Messaging mit allen Funktionen: Verkaeufer kontaktieren, Nachrichtenverlauf, Echtzeit-Benachrichtigungen, Online-Status und Lesebestaetigungen. Die Architektur basiert auf Socket.IO mit Room-Management — jede Konversation ist ein isolierter Kanal, skalierbar von 10 auf 100.000+ gleichzeitige Nutzer.",
    },
    {
        question: "Wie viele gleichzeitige Nutzer kann ein Socket.IO-System verarbeiten?",
        answer: "Mit horizontaler Skalierung ueber den Redis-Adapter problemlos 1 Million+ gleichzeitige Verbindungen. Pro Node.js-Instanz sind 10.000–50.000 Connections realistisch. Durch Load-Balancing skaliert das System linear. MessagePack reduziert die Bandbreite um bis zu 60 % gegenueber JSON.",
    },
    {
        question: "Warum sollte ich mein Echtzeit-System in Duesseldorf entwickeln lassen?",
        answer: "Als Socket.IO Agentur in Duesseldorf kombinieren wir tiefe Expertise in Echtzeit-Systemen mit Naehe zu Ihrem Unternehmen. Persoenliche Beratung, DSGVO-Expertise, Verstaendnis des deutschen Marktes und kurze Kommunikationswege — massgeschneiderte Echtzeit-Infrastrukturen fuer Marktplaetze, Plattformen und Enterprise in NRW und ganz Deutschland.",
    },
];

export default function RealtimeFAQ() {
    return (
        <section
            aria-labelledby="realtime-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — Socket.IO & Echtzeit-Kommunikation ]
                            </span>
                            <h2
                                id="realtime-faq-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihre Fragen,
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    unsere Antworten.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Die wichtigsten Fragen rund um WebSockets,
                            Socket.IO, Skalierung, Sicherheit und die
                            richtige Echtzeit-Architektur fuer Ihr Projekt —
                            verstaendlich erklaert.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── FAQ GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#000000]">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex items-start gap-4 mb-5">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-2.5 py-1 text-[10px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300 shrink-0 mt-0.5">
                                    F{String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-[clamp(1rem,1.8vw,1.3rem)] font-black tracking-tighter leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors">
                                    {faq.question}
                                </h3>
                            </div>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 ml-10">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

                {/* ── A11Y NOTE ── */}
                <ScrollReveal delay={80}>
                    <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                        <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                            <strong className="text-[#000000]/80">Barrierefreiheit:</strong> Alle
                            unsere Echtzeit-Implementierungen nutzen{" "}
                            <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">
                                aria-live=&quot;assertive&quot;
                            </code>{" "}
                            fuer eingehende Chat-Nachrichten, damit Screenreader neue Inhalte
                            sofort vorlesen. Tastaturnavigation und Focus-Management sind
                            fester Bestandteil jeder Chat-Komponente.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
