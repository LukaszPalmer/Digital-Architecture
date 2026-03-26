const TECH_STACK = [
    {
        category: "CORE ENGINE",
        tech: "Next.js 15 (App Router)",
        specs: "React 19 Compiler, RSC, Partial Prerendering",
    },
    {
        category: "DATA ARCHITECTURE",
        tech: "MongoDB Atlas",
        specs: "Aggregation Pipelines, Time-Series Optimization",
    },
    {
        category: "INFRASTRUCTURE",
        tech: "Vercel & Railway",
        specs: "Global Edge Network, Microservice Isolation",
    },
    {
        category: "SECURITY & AUTH",
        tech: "Auth.js (v5)",
        specs: "Edge-Compatible Session Management, OAuth 2.0",
    },
    {
        category: "FINANCIAL LOGIC",
        tech: "Stripe Custom Flows",
        specs: "Webhook Synchronization, Automated Invoicing",
    },
    {
        category: "COMMUNICATION",
        tech: "Resend API",
        specs: "Transactional Email Infrastructure",
    },
];

export default function TechnicalDNA() {
    return (
        <section className="bg-[#FFFFFF] border-t border-[#000000] py-20 md:py-32">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="mb-16">
                    <span className="text-[#001F3F] text-[12px] font-bold tracking-[0.4em] uppercase block mb-4">
                        [ System Specifications ]
                    </span>
                    <h2 className="text-[#000000] text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tighter uppercase leading-none">
                        Technical DNA
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#000000]">
                    {TECH_STACK.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-8 border-r border-b border-[#000000] flex flex-col justify-between hover:bg-[#001F3F] group transition-all duration-500"
                        >
                            <div>
                                <span className="text-[10px] font-mono text-[#001F3F]/50 group-hover:text-[#FFFFFF]/50 block mb-6 tracking-widest uppercase">
                                    {item.category}
                                </span>
                                <h4 className="text-[20px] font-bold text-[#000000] group-hover:text-[#FFFFFF] mb-2 transition-colors">
                                    {item.tech}
                                </h4>
                            </div>
                            <p className="text-[13px] font-medium text-[#000000]/60 group-hover:text-[#FFFFFF]/70 transition-colors">
                                {item.specs}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
