// src/components/sections/RealtimeUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "MARKTPLATZ",
        title: "Chat wie bei eBay Kleinanzeigen",
        description:
            "Nachrichten zwischen Nutzern ermoeglichen — Verkaeufer kontaktieren, Preis verhandeln, Abholtermin vereinbaren. Nutzer-zu-Nutzer Messaging mit Nachrichtenverlauf, Online-Status, Lesebestaetigungen und Echtzeit-Benachrichtigungen. Konzipiert fuer Marktplatz-Plattformen jeder Groesse.",
        metrics: ["Verkaeufer kontaktieren", "Nutzer-Messaging", "Echtzeit-Benachrichtigungen"],
    },
    {
        id: "UC-02",
        segment: "E-COMMERCE",
        title: "Live-Chat & Conversion-Booster",
        description:
            "Push-Nachrichten im Browser, Live-Updates ohne Neuladen und interaktive Produktberatung in Echtzeit. Wenn ein Kunde eine Frage zum Produkt hat, bekommt er sofort eine Antwort — kein Formular, kein Warten. Conversion Rate steigern durch Live-Interaktion.",
        metrics: ["Push-Benachrichtigungen", "Live-Updates", "Conversion-Steigerung"],
    },
    {
        id: "UC-03",
        segment: "KOLLABORATION",
        title: "Kollaborative Echtzeit-Tools",
        description:
            "Gleichzeitige Bearbeitung durch mehrere Nutzer — Dokumente, Whiteboards, Projektmanagement-Boards. Daten-Synchronisierung in Echtzeit ueber Socket.IO Rooms. Jede Aenderung ist sofort fuer alle Teilnehmer sichtbar, Konflikte werden automatisch geloest.",
        metrics: ["Multi-User-Sync", "Concurrent Editing", "Echtzeit-Datenabgleich"],
    },
    {
        id: "UC-04",
        segment: "DASHBOARDS",
        title: "Live-Analytics & Operations",
        description:
            "Echtzeit-Dashboards fuer Analytics-Plattformen und Operations-Systeme. Metriken, Alarme und Statusmeldungen werden in Millisekunden an alle verbundenen Clients gestreamt — ohne Polling, ohne Neuladen. Ideal fuer Monitoring, Trading und IoT-Anwendungen.",
        metrics: ["Live-Metriken", "Instant Alerts", "Multi-Client-Sync"],
    },
    {
        id: "UC-05",
        segment: "DUESSELDORF",
        title: "Socket.IO Agentur Duesseldorf",
        description:
            "Als Agentur fuer Echtzeit-Systeme in Duesseldorf kombinieren wir tiefe Socket.IO-Expertise mit Naehe zu Ihrem Unternehmen. DSGVO-konforme Architektur, persoenliche Beratung vor Ort und Verstaendnis des deutschen Marktes — massgeschneiderte Echtzeit-Loesungen fuer NRW und ganz Deutschland.",
        metrics: ["Persoenliche Beratung", "DSGVO-konform", "Socket.IO Expertise"],
    },
    {
        id: "UC-06",
        segment: "GAMING / TRADING",
        title: "Low-Latency Echtzeit-Systeme",
        description:
            "Fuer Anwendungen, bei denen jede Millisekunde zaehlt: Echtzeit-Auktionen, Multiplayer-Logik, Handelssysteme und Live-Bidding. Sub-Millisekunde Event-Delivery ueber WebSockets mit MessagePack-Kompression und horizontaler Skalierung fuer hunderttausende gleichzeitige Nutzer.",
        metrics: ["Sub-ms Latenz", "Binary Protocol", "Horizontal Scaling"],
    },
];

export default function RealtimeUseCases() {
    return (
        <section
            aria-labelledby="realtime-uc-heading"
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
                                id="realtime-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Echtzeit-Systeme fuer
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    jede Plattform.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Egal ob Sie eine Chat-Funktion fuer Ihren
                            Marktplatz, Live-Benachrichtigungen fuer Ihren
                            Shop oder ein kollaboratives Tool bauen wollen —
                            hier sehen Sie, wie Echtzeit fuer Ihr Projekt
                            funktioniert.
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
