// src/components/sections/DashArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Data Flow + RBAC Permission Matrix.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const DATA_LAYERS = [
    {
        layer: "API",
        label: "Backend / MongoDB",
        desc: "REST & WebSocket Endpoints",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        layer: "CACHE",
        label: "React Query",
        desc: "Stale-While-Revalidate",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        layer: "STATE",
        label: "Zustand / Context",
        desc: "UI-State, Auth, Filter",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        layer: "LAYOUT",
        label: "Dashboard Shell",
        desc: "Sidebar, Header, Breadcrumb",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        layer: "VIEWS",
        label: "Page Components",
        desc: "Tables, Charts, KPI Cards",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
];

const RBAC_ROLES = [
    { role: "ADMIN", permissions: ["Read All", "Write All", "Delete", "Config"], bg: "bg-[#001F3F]", textColor: "text-[#FFFFFF]", subColor: "text-[#FFFFFF]/65" },
    { role: "MANAGER", permissions: ["Read All", "Write Team", "No Delete", "No Config"], bg: "bg-[#FFFFFF]", textColor: "text-[#000000]", subColor: "text-[#000000]/55" },
    { role: "ANALYST", permissions: ["Read Data", "Export CSV", "No Write", "No Config"], bg: "bg-[#000000]", textColor: "text-[#FFFFFF]", subColor: "text-[#FFFFFF]/55" },
];

const INTEGRATION_SPECS = [
    {
        id: "MUI-INT-01",
        title: "React Query Data Layer",
        description:
            "Server-State-Management mit automatischem Refetching, Optimistic Updates und Background-Synchronization. Kein redundantes Loading-Spinner-Chaos — jeder Request-State ist präzise handhabbar.",
        spec: "STALE-WHILE-REVALIDATE",
    },
    {
        id: "MUI-INT-02",
        title: "MUI DataGrid Pro",
        description:
            "Server-Side Sorting, Filtering und Pagination mit direkter MongoDB-Integration. Virtual Scrolling ermöglicht 100.000+ Zeilen ohne Performance-Degradation — row virtualization at 60fps.",
        spec: "VIRTUAL 100K ROWS",
    },
    {
        id: "MUI-INT-03",
        title: "WebSocket Real-Time",
        description:
            "Dashboard-Metriken werden via WebSocket in Echtzeit aktualisiert. Socket.io auf Railway-Backend mit automatischem Reconnect — kein Datenverlust bei Verbindungsabbrüchen.",
        spec: "LIVE DATA STREAM",
    },
];

export default function DashArchitecture() {
    return (
        <section
            aria-labelledby="dash-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Data Flow & RBAC Blueprint ]
                            </span>
                            <h2
                                id="dash-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Architektur
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    im Detail.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Der Datenfluss von MongoDB bis zur
                            Dashboard-View — und die RBAC-Matrix,
                            die Zugriffsrechte auf Komponent-Ebene steuert.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── DATA FLOW DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Data Flow — 5 Layer Stack ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        Dashboard Data Architecture
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    60fps Performance
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                                {DATA_LAYERS.map((layer, i) => (
                                    <div key={layer.layer} className={`${layer.bg} p-6 md:p-8 flex flex-col gap-3`}>
                                        <span className={`text-[9px] font-mono font-black tracking-[0.4em] uppercase ${layer.subColor}`}>
                                            LAYER {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p className={`text-[clamp(0.9rem,1.8vw,1.2rem)] font-black tracking-tighter uppercase leading-tight ${layer.textColor}`}>
                                            {layer.layer}
                                        </p>
                                        <p className={`text-[11px] font-bold ${layer.subColor} uppercase tracking-wide`}>
                                            {layer.label}
                                        </p>
                                        <p className={`text-[10px] ${layer.subColor} leading-snug`}>
                                            {layer.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Unidirektionaler Datenfluss
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        React Query Cache als Single Source
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── RBAC MATRIX ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ RBAC Permission Matrix — Role Definitions ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Role-Based Access Control
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Component-Level Gates
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                                {RBAC_ROLES.map((role) => (
                                    <div key={role.role} className={`${role.bg} p-8 md:p-10 flex flex-col gap-4`}>
                                        <span className={`text-[clamp(1.4rem,2.5vw,2rem)] font-black tracking-tighter ${role.textColor}`}>
                                            {role.role}
                                        </span>
                                        <ul className="flex flex-col gap-2" role="list">
                                            {role.permissions.map((perm) => (
                                                <li key={perm} className={`flex items-center gap-2 text-[11px] font-black tracking-wide uppercase ${role.subColor}`}>
                                                    <div className={`w-2 h-px ${perm.startsWith("No") ? "bg-current opacity-30" : "bg-current"} shrink-0`} aria-hidden="true" />
                                                    <span className={perm.startsWith("No") ? "line-through opacity-40" : ""}>
                                                        {perm}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Permission Gates auf Komponent-Ebene
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Kein URL-Bypass möglich
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
