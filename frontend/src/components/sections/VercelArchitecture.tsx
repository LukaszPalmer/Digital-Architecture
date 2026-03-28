// src/components/sections/VercelArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Edge-Network-Diagramm — kein SVG, kein Image.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const RENDERING_MODES = [
    {
        id: "RSC",
        label: "REACT SERVER COMPONENTS",
        title: "Server Rendering",
        description:
            "Komponenten werden auf dem Server oder am Edge gerendert. Kein JavaScript im Client-Bundle — Zero-KB-Overhead für Logik und Datenfetching.",
        badge: "0 KB CLIENT JS",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        badgeBg: "bg-[#FFFFFF]",
        badgeText: "text-[#001F3F]",
        descColor: "text-[#FFFFFF]/70",
        borderColor: "border-[#FFFFFF]/25",
    },
    {
        id: "PPR",
        label: "PARTIAL PRERENDERING",
        title: "Hybrid Edge Delivery",
        description:
            "Statische Shell sofort vom Cache, dynamische Slots streamen asynchron nach. Ein einziger Request — keine Waterfalls, kein Layout-Shift.",
        badge: "< 0.8s LCP",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        badgeBg: "bg-[#FFFFFF]",
        badgeText: "text-[#000000]",
        descColor: "text-[#FFFFFF]/70",
        borderColor: "border-[#FFFFFF]/15",
    },
    {
        id: "SSG",
        label: "STATIC GENERATION",
        title: "Edge Cache Delivery",
        description:
            "Vollständig vorgerenderte Seiten werden aus dem Edge-Cache ausgeliefert. TTFB unter 10ms weltweit — optimale Wahl für Content-Seiten und Landing Pages.",
        badge: "< 10ms TTFB",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        badgeBg: "bg-[#001F3F]",
        badgeText: "text-[#FFFFFF]",
        descColor: "text-[#000000]/70",
        borderColor: "border-[#000000]/15",
    },
];

const EDGE_NODES = [
    { region: "EU-WEST", nodes: ["Frankfurt", "Amsterdam", "Paris"] },
    { region: "US-EAST", nodes: ["New York", "Virginia", "Atlanta"] },
    { region: "US-WEST", nodes: ["San Francisco", "Seattle", "LA"] },
    { region: "ASIA-PAC", nodes: ["Tokyo", "Singapore", "Sydney"] },
];

const INTEGRATION_SPECS = [
    {
        id: "INT-01",
        title: "Next.js → Vercel Edge",
        description:
            "Next.js 15 wurde für Vercel co-entwickelt. Partial Prerendering, Server Actions und Edge Middleware funktionieren ohne Konfiguration auf der Plattform.",
        spec: "NATIVE CO-OPTIMIZED",
    },
    {
        id: "INT-02",
        title: "Edge → Railway Backend",
        description:
            "Server Actions und API-Routes leiten Requests an Railway-Backends weiter. Kein CORS-Problem, kein öffentlicher API-Endpunkt — privates Netzwerk-Routing.",
        spec: "PRIVATE ROUTING",
    },
    {
        id: "INT-03",
        title: "Analytics → Core Web Vitals",
        description:
            "Vercel Speed Insights misst LCP, INP und CLS aus echten Nutzersessions — per Route aufgeschlüsselt. Performance ist messbar, nicht geschätzt.",
        spec: "REAL USER MONITORING",
    },
];

export default function VercelArchitecture() {
    return (
        <section
            aria-labelledby="vercel-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Rendering & Edge Blueprint ]
                            </span>
                            <h2
                                id="vercel-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Rendering
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Strategie.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Drei Rendering-Modi, ein Deployment. Jede Route
                            erhält die optimale Strategie — kein Kompromiss
                            zwischen Performance und Dynamik.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── RENDERING MODES ── */}
                <ScrollReveal delay={80}>
                    <div className="grid grid-cols-1 md:grid-cols-3 border border-[#000000] mb-16 md:mb-24">
                        {RENDERING_MODES.map((mode, i) => (
                            <div
                                key={mode.id}
                                className={`${mode.bg} ${i > 0 ? "border-t md:border-t-0 md:border-l border-[#000000]" : ""} p-8 md:p-10 flex flex-col min-h-72`}
                            >
                                {/* Label + ID */}
                                <div className="flex justify-between items-start mb-6">
                                    <span className={`text-[9px] font-mono font-black tracking-[0.35em] uppercase ${mode.descColor}`}>
                                        {mode.label}
                                    </span>
                                    <span className={`text-[13px] font-black font-mono ${mode.descColor} opacity-50`}>
                                        [{mode.id}]
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className={`text-[clamp(1.2rem,2.5vw,1.8rem)] font-black tracking-tighter uppercase leading-tight ${mode.textColor} mb-4`}>
                                    {mode.title}
                                </h3>

                                {/* Description */}
                                <p className={`text-[14px] leading-relaxed ${mode.descColor} border-l-2 ${mode.borderColor} pl-4 mb-6`}>
                                    {mode.description}
                                </p>

                                {/* Badge */}
                                <div className="mt-auto">
                                    <span className={`${mode.badgeBg} ${mode.badgeText} px-3 py-1.5 text-[9px] font-mono font-black tracking-widest uppercase`}>
                                        {mode.badge}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* ── EDGE NETWORK DIAGRAM ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Global Edge Network — 300+ Nodes ]
                        </span>
                        <div className="border border-[#000000]">
                            {/* Central Origin Header */}
                            <div className="bg-[#001F3F] p-5 md:p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        Vercel Origin — Global Anycast
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/45 tracking-widest uppercase">
                                    Active Origin
                                </span>
                            </div>

                            {/* Connector */}
                            <div className="flex justify-center py-3 border-t border-[#000000] bg-[#FFFFFF]" aria-hidden="true">
                                <div className="flex flex-col items-center gap-0.5">
                                    <div className="w-px h-4 bg-[#001F3F]/30" />
                                    <span className="text-[8px] font-mono text-[#001F3F]/40 tracking-widest">↓ REQUEST ROUTING ↓</span>
                                    <div className="w-px h-4 bg-[#001F3F]/30" />
                                </div>
                            </div>

                            {/* Edge Regions Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#000000]">
                                {EDGE_NODES.map((region, i) => (
                                    <div
                                        key={region.region}
                                        className={`p-5 md:p-6 ${i > 0 ? "border-l border-[#000000]" : ""} flex flex-col gap-3`}
                                    >
                                        <span className="text-[9px] font-mono font-black tracking-[0.35em] text-[#001F3F] uppercase block">
                                            {region.region}
                                        </span>
                                        <div className="flex flex-col gap-1.5">
                                            {region.nodes.map((node) => (
                                                <div key={node} className="flex items-center gap-2">
                                                    <div className="w-1 h-1 bg-[#001F3F]/40 shrink-0" aria-hidden="true" />
                                                    <span className="text-[11px] font-bold text-[#000000]/65 tracking-wide">
                                                        {node}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Connector */}
                            <div className="flex justify-center py-3 border-t border-[#000000] bg-[#FFFFFF]" aria-hidden="true">
                                <div className="flex flex-col items-center gap-0.5">
                                    <div className="w-px h-4 bg-[#001F3F]/30" />
                                    <span className="text-[8px] font-mono text-[#001F3F]/40 tracking-widest">↓ CACHED RESPONSE ↓</span>
                                    <div className="w-px h-4 bg-[#001F3F]/30" />
                                </div>
                            </div>

                            {/* End User */}
                            <div className="border-t border-[#000000] p-5 md:p-6 flex items-center justify-between bg-[#FFFFFF]">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-[#000000]/20" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#000000]/65 uppercase">
                                        End User — Closest Edge Node
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                    &lt; 10ms TTFB
                                </span>
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
