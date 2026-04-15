// src/components/sections/RealtimeCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Semantic SEO: WebSocket vs Polling vs SSE Differenzierung + Themen-Cluster.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "RT-01",
        category: "WEBSOCKET-ARCHITEKTUR",
        title: "Persistente bidirektionale Verbindungen",
        description:
            "Socket.IO nutzt WebSockets als Primaerprotokoll: Eine einzige TCP-Verbindung bleibt offen — Server und Client senden Daten jederzeit, ohne erneuten Handshake. Im Gegensatz zu HTTP-Polling entfaellt der Overhead wiederholter Requests. Automatischer Long-Polling Fallback, wenn WebSockets blockiert werden.",
        specs: ["WebSocket (RFC 6455)", "Automatischer Fallback", "Bidirektionale Datenuebertragung"],
    },
    {
        id: "RT-02",
        category: "ROOM-MANAGEMENT",
        title: "Isolierte Kommunikationskanaele",
        description:
            "Jede Konversation auf Ihrem Marktplatz laeuft in einem eigenen Socket.IO Room — vollstaendig isoliert, skalierbar und sicher. Verkaeufer-Kaeufer-Chats, Gruppen-Nachrichten oder Broadcast-Kanaele: Room und Namespace Management sorgt dafuer, dass Nachrichten nur dort ankommen, wo sie hingehoeren.",
        specs: ["Room & Namespace API", "Isolierte Konversationen", "Skalierbar auf 10.000+ Raeume"],
    },
    {
        id: "RT-03",
        category: "EVENT-BROADCASTING",
        title: "Selektive Echtzeit-Event-Verteilung",
        description:
            "Live-Benachrichtigungen fuer Ihre Webseite, Push-Nachrichten im Browser und Daten-Synchronisierung in Echtzeit — alles ueber Socket.IO Events. Selektiv an einzelne Nutzer, Gruppen oder global an alle. Mit garantierter Zustellungsreihenfolge und Idempotenz-Protokoll.",
        specs: ["Selektives Broadcasting", "Garantierte Reihenfolge", "Echtzeit-Benachrichtigungen"],
    },
    {
        id: "RT-04",
        category: "RECONNECTION",
        title: "State-Recovery bei Verbindungsabbruch",
        description:
            "Mobile Nutzer wechseln Netze, Verbindungen brechen ab — Ihr System darf dabei keine Nachricht verlieren. Socket.IO reconnected automatisch, synchronisiert den State und stellt verpasste Events zu. Kein manuelles Neuladen, keine verlorenen Nachrichten.",
        specs: ["Automatische Reconnection", "State-Sync", "Missed-Event-Recovery"],
    },
    {
        id: "RT-05",
        category: "BINARY-PROTOKOLL",
        title: "MessagePack fuer 60 % weniger Bandbreite",
        description:
            "JSON ist lesbar — aber ineffizient. Durch MessagePack oder Protocol Buffers reduzieren wir die Payload um bis zu 60 %. Das bedeutet: schnellere Uebertragung auf mobilen Netzen, geringerer Datenverbrauch und bessere Core Web Vitals. Ein massives Performance-Signal fuer Mobile-SEO.",
        specs: ["MessagePack / Protobuf", "–60 % Bandbreite", "Mobile-Performance-Optimierung"],
    },
    {
        id: "RT-06",
        category: "HORIZONTALE SKALIERUNG",
        title: "Redis-Adapter fuer Multi-Instanz-Betrieb",
        description:
            "Ein einzelner Server reicht fuer 50.000 Verbindungen — fuer 1 Million+ brauchen Sie horizontale Skalierung. Der Redis-Adapter synchronisiert Events ueber mehrere Node.js-Instanzen hinweg. Load-Balancing, Sticky Sessions und Cluster-Management — produktionsreif ab Tag 1.",
        specs: ["Redis Pub/Sub Adapter", "Sticky-Session Load-Balancing", "1M+ Concurrent Connections"],
    },
];

export default function RealtimeCapabilities() {
    return (
        <section
            aria-labelledby="realtime-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Socket.IO Kern-Funktionen ]
                            </span>
                            <h2
                                id="realtime-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was Socket.IO
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    moeglich macht.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs architektonische Saeulen, die zusammen ein
                            Echtzeit-Kommunikationssystem ergeben — von der
                            WebSocket-Verbindung bis zur horizontalen
                            Skalierung ueber Redis.
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

                {/* ── PROTOCOL COMPARISON — SEMANTIC SEO ── */}
                <ScrollReveal delay={100}>
                    <div className="mt-20 md:mt-28">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Architektur-Entscheidung — WebSocket vs Polling vs SSE ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#000000] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Warum Socket.IO
                            <span className="italic font-normal text-[#001F3F]"> die richtige Basis ist.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#000000]/65 max-w-3xl mb-12">
                            Drei Technologien — fundamental verschiedene Architekturen.
                            Die Wahl bestimmt Latenz, Skalierbarkeit und Nutzererlebnis
                            Ihrer Plattform. Hier die Fakten.
                        </p>
                    </div>
                </ScrollReveal>

                <RevealGrid className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]">
                    <div className="group p-8 md:p-10 border-r border-b border-[#000000] hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair">
                        <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-4 transition-colors">
                            HTTP-POLLING
                        </span>
                        <h4 className="text-[clamp(1rem,1.8vw,1.3rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-3">
                            Client fragt, Server antwortet
                        </h4>
                        <p className="text-[14px] leading-relaxed text-[#000000]/65 group-hover:text-[#FFFFFF]/75 transition-colors border-l-2 border-[#000000]/15 group-hover:border-[#FFFFFF]/30 pl-4 mb-4">
                            Wiederholte HTTP-Requests in festen Intervallen. Hoher Overhead,
                            3–5 Sekunden Latenz, hohe Serverlast bei vielen Nutzern. Keine
                            echte Echtzeit — nur die Simulation davon.
                        </p>
                        <span className="bg-[#000000]/10 group-hover:bg-[#FFFFFF]/15 px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#000000]/55 group-hover:text-[#FFFFFF]/65 uppercase transition-colors duration-300">
                            LATENZ: 3–5 SEK // BIDIREKTIONAL: NEIN
                        </span>
                    </div>
                    <div className="group p-8 md:p-10 border-r border-b border-[#000000] hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair">
                        <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-4 transition-colors">
                            SERVER-SENT EVENTS
                        </span>
                        <h4 className="text-[clamp(1rem,1.8vw,1.3rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-3">
                            Server sendet, Client hoert zu
                        </h4>
                        <p className="text-[14px] leading-relaxed text-[#000000]/65 group-hover:text-[#FFFFFF]/75 transition-colors border-l-2 border-[#000000]/15 group-hover:border-[#FFFFFF]/30 pl-4 mb-4">
                            Unidirektionaler Datenstrom vom Server zum Client ueber HTTP.
                            Ideal fuer Live-Feeds und Notifications — aber der Client kann
                            keine Daten senden. Fuer Chats ungeeignet.
                        </p>
                        <span className="bg-[#000000]/10 group-hover:bg-[#FFFFFF]/15 px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#000000]/55 group-hover:text-[#FFFFFF]/65 uppercase transition-colors duration-300">
                            LATENZ: &lt; 100MS // BIDIREKTIONAL: NEIN
                        </span>
                    </div>
                    <div className="group p-8 md:p-10 border-r border-b border-[#000000] bg-[#001F3F]/5 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair">
                        <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-4 transition-colors">
                            WEBSOCKET / SOCKET.IO
                        </span>
                        <h4 className="text-[clamp(1rem,1.8vw,1.3rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-3">
                            Beide Seiten senden jederzeit
                        </h4>
                        <p className="text-[14px] leading-relaxed text-[#000000]/65 group-hover:text-[#FFFFFF]/75 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/30 pl-4 mb-4">
                            Persistente TCP-Verbindung mit minimalem Overhead. Sub-Millisekunde
                            Latenz, volle Bidirektionalitaet, automatische Reconnection.
                            Socket.IO addiert Room-Management, Fallback und Binary-Support.
                        </p>
                        <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                            LATENZ: &lt; 1MS // BIDIREKTIONAL: JA
                        </span>
                    </div>
                </RevealGrid>

            </div>
        </section>
    );
}
