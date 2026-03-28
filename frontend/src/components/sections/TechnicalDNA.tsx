// src/components/sections/TechnicalDNA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const TECH_STACK = [
    {
        id: "01",
        category: "CORE ENGINE",
        tech: "Next.js 15 (App Router)",
        intent: "Maximale SEO-Dominanz und Instant-Loading durch hybrides Rendering.",
        specs: "React 19 Compiler, RSC, Partial Prerendering (PPR)",
    },
    {
        id: "02",
        category: "DATA ARCHITECTURE",
        tech: "MongoDB Atlas",
        intent: "Lineare Skalierbarkeit für globale Datenmengen ohne Downtime.",
        specs: "Aggregation Pipelines, Time-Series Optimization, Cluster Sharding",
    },
    {
        id: "03",
        category: "INFRASTRUCTURE",
        tech: "Vercel & Railway",
        intent: "Zero-Latency Deployment und isolierte Microservice-Umgebungen.",
        specs: "Global Edge Network, Serverless Functions, Microservice Isolation",
    },
    {
        id: "04",
        category: "SECURITY & AUTH",
        tech: "Auth.js (v5)",
        intent: "Zero-Trust Authentifizierung für kompromisslose Datensicherheit.",
        specs: "Edge-Compatible Session Management, OAuth 2.0, WebAuthn Ready",
    },
    {
        id: "05",
        category: "FINANCIAL LOGIC",
        tech: "Stripe Custom Flows",
        intent: "Automatisierte Umsatzströme und PCI-DSS konforme Zahlungslogik.",
        specs: "Webhook Synchronization, Automated Invoicing, Connect Integration",
    },
    {
        id: "06",
        category: "COMMUNICATION",
        tech: "Resend API",
        intent: "Höchste Zustellraten für transaktionale E-Mails im Enterprise-Sektor.",
        specs: "Transactional Infrastructure, SPF/DKIM/DMARC Optimized",
    },
];

export default function TechnicalDNA() {
    return (
        <section
            aria-labelledby="dna-heading"
            className="bg-[#FFFFFF] text-[#000000] border-t border-[#000000] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Engineering Standards ]
                            </span>
                            <h2
                                id="dna-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Technical
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    DNA.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/65 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Unsere Architektur ist auf Langlebigkeit und extreme Last
                            ausgelegt. Wir nutzen ausschließlich State-of-the-Art
                            Technologien.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── BLUEPRINT GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {TECH_STACK.map((item) => (
                        <div
                            key={item.id}
                            className="group relative p-8 md:p-12 border-r border-b border-[#000000] flex flex-col justify-between min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* TOP: Identification */}
                            <div>
                                <div className="flex justify-between items-start mb-10">
                                    <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                        {item.category}
                                    </span>
                                    <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/55 transition-colors">
                                        [{item.id}]
                                    </span>
                                </div>

                                <h3 className="text-[clamp(1.25rem,2.5vw,1.7rem)] font-black text-[#000000] group-hover:text-[#FFFFFF] mb-5 tracking-tighter uppercase leading-tight transition-colors">
                                    {item.tech}
                                </h3>

                                <p className="text-[14px] leading-relaxed text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4">
                                    {item.intent}
                                </p>
                            </div>

                            {/* BOTTOM: Specification Tagging */}
                            <div className="pt-8 mt-8 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors">
                                <span className="text-[9px] font-mono font-bold text-[#000000]/55 group-hover:text-[#FFFFFF]/55 block mb-3 tracking-widest uppercase transition-colors">
                                    Technical Specs
                                </span>
                                <p className="text-[12px] font-bold text-[#001F3F] group-hover:text-[#FFFFFF] tracking-tight transition-colors leading-relaxed">
                                    {item.specs}
                                </p>
                            </div>

                            {/* Architectural Corner Accent */}
                            <div
                                className="absolute top-0 right-0 w-0 h-0 border-t-10 border-r-10 border-t-transparent border-r-transparent group-hover:border-t-[#FFFFFF]/30 group-hover:border-r-[#FFFFFF]/30 transition-all duration-300"
                                aria-hidden="true"
                            />
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
