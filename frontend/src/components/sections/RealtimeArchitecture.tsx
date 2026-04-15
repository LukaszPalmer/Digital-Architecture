// src/components/sections/RealtimeArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Socket.IO Event Lifecycle + Scaling Architecture.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const EVENT_LIFECYCLE = [
    {
        step: "01",
        label: "CLIENT",
        desc: "Event emittieren",
        note: "socket.emit()",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        step: "02",
        label: "TRANSPORT",
        desc: "WebSocket-Frame senden",
        note: "WSS Encrypted",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        step: "03",
        label: "SERVER",
        desc: "Event empfangen & validieren",
        note: "Auth Middleware",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        step: "04",
        label: "REDIS",
        desc: "Cross-Instance Broadcast",
        note: "Pub/Sub Adapter",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        step: "05",
        label: "ROOM",
        desc: "Zielgruppe bestimmen",
        note: "Room / Namespace",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        step: "06",
        label: "DELIVER",
        desc: "Event an Empfaenger zustellen",
        note: "< 1ms End-to-End",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
];

const REALTIME_EVENTS = [
    { event: "message:send", action: "Nachricht validieren, in Room broadcasten, in DB persistieren", critical: true },
    { event: "user:typing", action: "Typing-Indikator an Gespraechspartner senden (Throttled)", critical: false },
    { event: "presence:update", action: "Online-Status aktualisieren, an alle Kontakte broadcasten", critical: true },
    { event: "message:read", action: "Lesebestaetigung an Absender senden, DB-Timestamp setzen", critical: false },
    { event: "room:join", action: "Nutzer authentifizieren, Room-History laden, Presence-Update", critical: true },
    { event: "connection:lost", action: "Reconnection-Timer starten, Missed-Events buffern", critical: true },
];

const INTEGRATION_SPECS = [
    {
        id: "RT-INT-01",
        title: "Architektur fuer skalierbare Marktplaetze",
        description:
            "Warum Socket.IO die Basis fuer Systeme wie eBay Kleinanzeigen ist: Stabilitaet durch automatische Reconnection, Fallback auf Long-Polling wenn WebSockets blockiert werden, und Room-basierte Isolation fuer Millionen paralleler Konversationen.",
        spec: "MARKTPLATZ-GRADE // BATTLE-TESTED",
    },
    {
        id: "RT-INT-02",
        title: "WSS Encryption & Auth Middleware",
        description:
            "Jede WebSocket-Verbindung laeuft ueber WSS (TLS-verschluesselt). JWT-basierte Authentifizierung in der Socket.IO Middleware — kein unautorisierter Zugriff auf Rooms oder Events. DSGVO-konforme Verarbeitung auf europaeischen Servern.",
        spec: "WSS // JWT-AUTH // DSGVO",
    },
    {
        id: "RT-INT-03",
        title: "Lazy-Loading der Socket.IO Client-Library",
        description:
            "Der socket.io-client wird per Dynamic Import erst geladen, wenn der Nutzer den Chat oeffnet — nicht beim Page Load. Zero Impact auf LCP und TBT. Die Payload wird erst spuerbar, wenn sie gebraucht wird.",
        spec: "DYNAMIC IMPORT // 0 TBT IMPACT",
    },
];

export default function RealtimeArchitecture() {
    return (
        <section
            aria-labelledby="realtime-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ So funktioniert Ihre Echtzeit-Infrastruktur ]
                            </span>
                            <h2
                                id="realtime-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Vom Event
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    zur Zustellung in &lt; 1ms.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Vom socket.emit() bis zur Zustellung an den
                            Empfaenger — so verarbeitet Ihr Echtzeit-System
                            jedes Event. Ueber Redis synchronisiert, in
                            Rooms isoliert, in unter einer Millisekunde.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── EVENT LIFECYCLE DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Der Event-Lifecycle — 6 Stationen ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        Socket.IO Event-Pipeline
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Bidirektional
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[#000000]">
                                {EVENT_LIFECYCLE.map((stage) => (
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
                                        End-to-End &lt; 1ms
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Redis-synchronisiert ueber alle Instanzen
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── REALTIME EVENTS TABLE ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Socket.IO Event-Handler im Ueberblick ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Event-Driven Architecture
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    6 Core Events
                                </span>
                            </div>
                            <div className="divide-y divide-[#000000]">
                                {REALTIME_EVENTS.map((ev) => (
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
                                        Jedes Event wird protokolliert
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Idempotenz-Garantie
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
