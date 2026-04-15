// src/components/sections/DashCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "MUI-01",
        category: "ARCHITEKTUR",
        title: "Dashboard Architecture",
        description:
            "Nested Layout-System mit persistenter Navigation, kontextbewusstem Sidebar-State und responsiven Breakpoints. React Query als Data-Fetching-Layer mit Stale-While-Revalidate — kein inkonsistenter Ladezustand, keine redundanten API-Calls. Konzipiert für Enterprise-Teams, die schnelle Entscheidungen auf Basis aktueller Daten treffen.",
        specs: ["Nested Layouts", "React Query", "Sidebar State", "RSC-First"],
    },
    {
        id: "MUI-02",
        category: "DATA",
        title: "Advanced Data Tables",
        description:
            "MUI DataGrid Pro mit Server-Side Pagination, Multi-Column-Sort, Column-Resize und Virtual Scrolling für über 100.000 Zeilen bei stabilen 60fps. Export zu CSV/XLSX als Standard-Feature. Die DOM-Größe bleibt durch Row-Virtualisierung konstant — unabhängig von der Datenmenge.",
        specs: ["Virtual Scroll", "Server Pagination", "CSV Export", "100K+ Rows"],
    },
    {
        id: "MUI-03",
        category: "ANALYTICS",
        title: "Charts & Visualisierung",
        description:
            "Recharts-Integration für Line-, Bar-, Area- und Pie-Charts mit Echtzeit-Datenupdates via WebSocket. Charts werden erst bei Sichtbarkeit im Viewport initialisiert — kein Main-Thread-Blocking beim initialen Laden. Responsiv auf allen Breakpoints ohne fixed-width SVG-Probleme.",
        specs: ["Real-Time Charts", "WebSocket Updates", "Lazy Init", "Responsive SVG"],
    },
    {
        id: "MUI-04",
        category: "FORMS",
        title: "Enterprise Form Systems",
        description:
            "React Hook Form mit Zod-Schema-Validierung, Multi-Step-Wizards und dynamischen Feldern. Auto-Save, Offline-Draft-Support und optimistische Updates für kritische Formularflüsse. Barrierefreie Formulare mit korrekten aria-Labels und Tastaturnavigation als Standard.",
        specs: ["Zod Validation", "Multi-Step", "Auto Save", "WCAG 2.1 AA"],
    },
    {
        id: "MUI-05",
        category: "ACCESS",
        title: "Role-Based UI",
        description:
            "Komponent-Level RBAC: Felder, Aktionen und Seiten werden per Rolle ein- und ausgeblendet. Permission-Gates als Higher-Order-Components mit serverseitiger Validierung — kein Sicherheits-Bypass durch URL-Manipulation. Rollen-Definitionen sind für Unternehmen in Düsseldorf und der DACH-Region auf gängige Organisationsstrukturen abgestimmt.",
        specs: ["Component Gates", "Per-Role Visibility", "HOC Pattern", "Server Validation"],
    },
    {
        id: "MUI-06",
        category: "THEMING",
        title: "MUI Theme Engine",
        description:
            "Custom MUI Theme mit Brand-Token-System als Single Source of Truth. Alle Material-Defaults werden vollständig durch Ihre Unternehmensidentität ersetzt — Typografie, Spacing, Farben und Component-Overrides. Das Material-Look wird eliminiert, Ihr Brand dominiert. Konzipiert für langfristige Skalierbarkeit der Benutzeroberfläche.",
        specs: ["Brand Tokens", "Component Override", "No Material Look", "Dark Mode Ready"],
    },
];

export default function DashCapabilities() {
    return (
        <section
            aria-labelledby="dash-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Dashboard Capabilities ]
                            </span>
                            <h2
                                id="dash-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was das Dashboard
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    leistet.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Engineering-Disziplinen für
                            Enterprise-Dashboards, die unter realer
                            Hochlast performant und sicher bleiben —
                            für Unternehmen, die ihre Business-Software
                            in Düsseldorf und der DACH-Region modernisieren.
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

            </div>
        </section>
    );
}
