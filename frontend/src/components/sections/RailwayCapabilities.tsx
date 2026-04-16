// src/components/sections/RailwayCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "RW-01",
        category: "DEPLOYMENT",
        title: "Git-Native CI/CD",
        description:
            "Jeder Push auf main, develop oder einen Feature-Branch triggert automatisch Build, Test und Deploy in einer isolierten Environment. Kein YAML-Engineering, keine Pipeline-Wartung — Konfiguration passiert im Git-Repo als Infrastructure as Code.",
        specs: ["Auto-Build on Push", "Branch Environments", "Instant Rollback"],
    },
    {
        id: "RW-02",
        category: "ISOLATION",
        title: "Microservice Environments",
        description:
            "Jeder Service laeuft in einem isolierten Docker-Container. Node.js-APIs, Python-Worker, Go-Proxies und Cron-Jobs koexistieren ohne Abhaengigkeitskonflikte — wenn ein Service abstuerzt, bleibt der Rest verfuegbar.",
        specs: ["Container Isolation", "Shared Private Network", "Service Discovery"],
    },
    {
        id: "RW-03",
        category: "SKALIERUNG",
        title: "Auto-Scaling Logic",
        description:
            "Railway skaliert Replicas horizontal auf Basis von CPU-, Memory- und Request-Metriken. Traffic-Peaks bei TV-Auftritten, Sales oder viralen Events werden absorbiert — und ausserhalb der Spitze sinken die Kosten automatisch wieder.",
        specs: ["Horizontal Scaling", "CPU / Memory Triggers", "Scale to Zero"],
    },
    {
        id: "RW-04",
        category: "NETZWERK",
        title: "Private Networking",
        description:
            "Services kommunizieren intern ueber Railways verschluesseltes Private-Network — nie ueber das oeffentliche Internet. Submillisekunden-Latenz, kein Egress-Traffic-Kostenfaktor und eine dramatisch reduzierte Angriffsflaeche.",
        specs: ["Private DNS", "Internal TCP/UDP", "Zero External Exposure"],
    },
    {
        id: "RW-05",
        category: "PERSISTENCE",
        title: "Volume & Database Layer",
        description:
            "Persistente Volumes fuer stateful Services, Managed PostgreSQL/Redis/MongoDB mit Point-in-Time-Recovery oder private Anbindung an externe Provider wie MongoDB Atlas in der EU-Region fuer DSGVO-Compliance.",
        specs: ["Persistent Volumes", "Managed Databases", "EU-Region DSGVO"],
    },
    {
        id: "RW-06",
        category: "OBSERVABILITY",
        title: "Health Checks & Alerts",
        description:
            "Konfigurierbare Liveness- und Readiness-Probes, Auto-Restart bei Crashes, strukturierte Echtzeit-Logs und Alerting via Slack, Discord oder Webhook. Jede Anomalie ist sichtbar, bevor Ihre Kunden sie spueren.",
        specs: ["HTTP Health Probes", "Auto-Restart Policy", "Real-time Logs"],
    },
];

export default function RailwayCapabilities() {
    return (
        <section
            aria-labelledby="capabilities-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Platform Capabilities — Solution & Bridge ]
                            </span>
                            <h2
                                id="capabilities-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was Railway
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    leistet.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Kernsysteme, die zusammen eine vollstaendige
                            Backend-Infrastruktur ohne DevOps-Overhead ergeben —
                            containerisiert, privat vernetzt und automatisch
                            skaliert fuer Hochlast und Wachstum.
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
                            {/* Category + ID */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                    {cap.category}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {cap.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.2rem,2.2vw,1.7rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {cap.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {cap.description}
                            </p>

                            {/* Specs */}
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
