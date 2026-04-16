// src/components/sections/NodeCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// SEO-Cluster: Event Loop, Non-blocking I/O, Microservices, Edge, Caching, Worker Threads.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "NOD-01",
        category: "EVENT LOOP",
        title: "Non-blocking I/O Engine",
        description:
            "Der Node.js Event Loop ist die Geheimwaffe moderner Apps: Ein einziger Prozess verwaltet zehntausende parallele Verbindungen, weil er waehrend Datenbank-Wartezeiten schon den naechsten Request annimmt. Klassische Server brauchen pro Nutzer einen eigenen Thread — Node.js erledigt mehr Aufgaben gleichzeitig mit einem Bruchteil der Ressourcen.",
        specs: ["libuv Thread Pool", "Async/Await native", "Single-Process Power"],
    },
    {
        id: "NOD-02",
        category: "ARCHITEKTUR",
        title: "Microservices vs. Monolith",
        description:
            "Service-Boundaries nach Domain-Driven Design — jeder Microservice ist eigenstaendig deploybar, eigenstaendig skalierbar und fachlich klar abgegrenzt. Wachsende Unternehmen skalieren so ohne komplettes Re-Design: Auth-Service, Core-API und Worker laufen unabhaengig, kommunizieren via Redis Pub/Sub und teilen keinen monolithischen Codepfad.",
        specs: ["DDD Boundaries", "Independent Deploy", "No Distributed Monolith"],
    },
    {
        id: "NOD-03",
        category: "EDGE",
        title: "Vercel Edge Functions",
        description:
            "Backend-Logik laeuft in 30+ Regionen weltweit — naeher beim Nutzer, niedrigere Time-to-First-Byte. Cold Starts werden durch V8 Isolates (statt Container) eliminiert, TTFB-Werte unter 50ms sind global realistisch. Ideal fuer Auth, Geo-Routing, A/B-Tests und latenzkritische API-Antworten.",
        specs: ["Sub-50ms TTFB", "Zero Cold Start", "Global Replication"],
    },
    {
        id: "NOD-04",
        category: "CACHING",
        title: "Redis Caching Strategien",
        description:
            "Die teuerste Operation ist die, die nicht stattfinden muss. Redis als Cache-Layer reduziert Datenbank-Last um 80–95 %: Response-Caching mit TTL, Cache-Aside-Pattern fuer Lookups und Pub/Sub-basierte Cache-Invalidierung. API-Antworten in unter 5ms, ohne MongoDB/Postgres zu beruehren.",
        specs: ["Cache-Aside Pattern", "Pub/Sub Invalidation", "Sub-5ms Hits"],
    },
    {
        id: "NOD-05",
        category: "DATABASE",
        title: "Connection Pooling & Read-Replicas",
        description:
            "Bei Lastspitzen erschoepfen ungepoolte Datenbank-Verbindungen den Server in Sekunden. Wir konfigurieren strikte Pool-Limits, nutzen Read-Replicas fuer Lese-Workloads und setzen pessimistisches Locking fuer race-condition-freie Bestandsoperationen. Datenbank-Performance verbessern heisst: Flaschenhaelse architektonisch eliminieren, nicht ueberdecken.",
        specs: ["maxPoolSize Tuning", "Read-Replica Routing", "Query Plan Audit"],
    },
    {
        id: "NOD-06",
        category: "SCALING",
        title: "Horizontal Scaling — Docker & K8s",
        description:
            "Zustandslose API-Server skalieren linear: mehr Container, mehr Throughput. Docker Compose fuer Staging, Kubernetes oder Railway fuer Production — Auto-Scaling auf CPU/RAM-Metriken, Worker Threads fuer CPU-intensive Tasks, BullMQ fuer asynchrone Jobs. Backend-Wartung wird zum Auto-Pilot, nicht zum Daueraufwand.",
        specs: ["docker-compose v3", "Worker Threads", "BullMQ + Redis"],
    },
];

export default function NodeCapabilities() {
    return (
        <section
            aria-labelledby="node-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Engineering Capabilities ]
                            </span>
                            <h2
                                id="node-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Sechs Disziplinen
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    fuer Hochlast-Backends.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Vom Event Loop ueber Microservices bis zu Edge
                            Functions: Was Ihr Backend technisch koennen muss,
                            damit es bei 1.000 oder 100.000 gleichzeitigen
                            Nutzern dieselbe Performance liefert.
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
