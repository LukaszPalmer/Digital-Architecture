// src/components/sections/RealtimeProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Architecture Design",
        description:
            "Analyse Ihrer Echtzeit-Anforderungen: Welche Events braucht Ihre Plattform? Wie viele gleichzeitige Nutzer sind realistisch? Wir definieren die Event-Taxonomie, Room-Struktur, Skalierungsstrategie und das Authentifizierungs-Konzept — bevor eine Zeile Code geschrieben wird.",
        duration: "TAG 1–3",
        tag: "ANALYSE",
    },
    {
        step: "02",
        title: "Server Integration",
        description:
            "Node.js Socket.IO Server-Setup mit Redis-Adapter fuer horizontale Skalierung. Auth Middleware, Event-Handler, Room-Management und Persistence-Layer — alles produktionsreif implementiert. MessagePack fuer minimale Payload, WSS fuer verschluesselte Verbindungen.",
        duration: "TAGE 4–10",
        tag: "BACKEND",
    },
    {
        step: "03",
        title: "Client Implementation",
        description:
            "Frontend-Integration mit Dynamic Import — der socket.io-client wird lazy geladen, erst wenn der Nutzer den Chat oeffnet. Optimiertes Event-Handling, Connection-Lifecycle-Kontrolle, aria-live fuer eingehende Nachrichten und Reconnection-UI fuer nahtlose Nutzererfahrung.",
        duration: "TAGE 11–16",
        tag: "FRONTEND",
    },
    {
        step: "04",
        title: "Load Testing & Go-Live",
        description:
            "Lasttests mit simulierten Concurrent Connections zur Verifikation der Latenz-SLAs. Reconnection-Stabilitaet, Edge-Cases bei Netzwerkwechsel, Redis-Failover-Szenarien. Kein Release ohne verifizierte Performance unter realistischer Last.",
        duration: "TAGE 17–20",
        tag: "GO-LIVE",
    },
];

export default function RealtimeProcess() {
    return (
        <section
            aria-labelledby="realtime-process-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/50 uppercase block mb-8">
                                [ Unser Prozess — Vom Konzept zum Echtzeit-System ]
                            </span>
                            <h2
                                id="realtime-process-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                In 20 Tagen zur
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/50">
                                    Echtzeit-Infrastruktur.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/25 pl-6">
                            Vier klare Phasen von der Architektur-Analyse
                            bis zum lastgetesteten Go-Live — damit Ihre
                            Plattform echte Echtzeit-Kommunikation
                            bekommt, die unter Last besteht.
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
