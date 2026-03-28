// src/components/sections/VercelCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "VC-01",
        category: "RENDERING",
        title: "Partial Prerendering",
        description:
            "Statische Shells werden sofort vom Edge geliefert, dynamische Slots streamen nach. Das Beste aus SSG und SSR — unified in einem Request ohne Trade-offs.",
        specs: ["Static Shell Delivery", "Streaming Slots", "No Waterfall"],
    },
    {
        id: "VC-02",
        category: "NETZWERK",
        title: "Global Edge Network",
        description:
            "Über 300 Edge-Nodes weltweit. Jede Anfrage landet im physisch nächsten Rechenzentrum — Latenz-Minimierung durch geografische Präsenz, nicht durch Caching-Tricks.",
        specs: ["300+ PoP Locations", "Anycast Routing", "Sub-10ms TTFB"],
    },
    {
        id: "VC-03",
        category: "SICHERHEIT",
        title: "Zero-Config TLS & DNS",
        description:
            "Automatisch provisionierte SSL-Zertifikate, Custom Domains per CLI und DDoS-Mitigation auf Netzwerkebene — ohne manuelle Konfiguration oder DevOps-Eingriff.",
        specs: ["Auto SSL Provisioning", "Custom Domains", "DDoS Protection"],
    },
    {
        id: "VC-04",
        category: "DEPLOYMENTS",
        title: "Immutable Deployments",
        description:
            "Jeder Git-Push erzeugt eine unveränderliche Deployment-URL. Preview-Environments für jeden Branch, sofortige Rollbacks ohne Downtime.",
        specs: ["Immutable URLs", "Branch Previews", "Instant Rollback"],
    },
    {
        id: "VC-05",
        category: "SERVERLESS",
        title: "Edge Functions",
        description:
            "Node.js und WebAssembly-Funktionen laufen in unter 1ms Kaltstart-Zeit direkt am Edge. Middleware für Auth, Redirects und A/B-Tests ohne Round-Trip zum Origin.",
        specs: ["< 1ms Cold Start", "WASM Support", "Middleware Layer"],
    },
    {
        id: "VC-06",
        category: "OBSERVABILITY",
        title: "Analytics & Web Vitals",
        description:
            "Real-User-Monitoring für Core Web Vitals aus echten Nutzersessions. LCP, CLS und INP werden pro Route getrackt — datenbasierte Performance-Entscheidungen.",
        specs: ["Real User Metrics", "Per-Route Vitals", "Audience Segmentation"],
    },
];

export default function VercelCapabilities() {
    return (
        <section
            aria-labelledby="vercel-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Platform Capabilities ]
                            </span>
                            <h2
                                id="vercel-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was Vercel
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    ermöglicht.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Kernsysteme, die zusammen das schnellste
                            Frontend-Deployment-Ökosystem der Welt ergeben —
                            konstruiert für Next.js auf Elite-Niveau.
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
