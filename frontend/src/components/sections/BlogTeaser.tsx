import Link from "next/link";
import { cn } from "@/lib/utils";
import { BlogLog } from "@/types/blog";

const LOGS: BlogLog[] = [
    {
        id: "1",
        logNumber: "PDA-LOG-001",
        title: "Next.js 15 & React 19: The New Infrastructure Standard",
        category: "ARCHITECTURE",
        date: "27.03.2026",
        readTime: "05:00 MIN",
    },
    {
        id: "2",
        logNumber: "PDA-LOG-002",
        title: "Why MongoDB Atlas is the Core for Scale-ups",
        category: "DATABASE",
        date: "12.02.2026",
        readTime: "08:00 MIN",
    },
    {
        id: "3",
        logNumber: "PDA-LOG-003",
        title: "Stripe Custom Flows vs. Out-of-the-Box",
        category: "FINTECH",
        date: "05.01.2026",
        readTime: "06:00 MIN",
    },
];

export default function BlogTeaser() {
    return (
        <section className="bg-[#FFFFFF] py-20 md:py-32 lg:py-44 border-t border-[#000000] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                
                {/* HEADER: Precise Alignment */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#001F3F] text-[12px] font-bold tracking-[0.5em] uppercase block mb-6">
                            [ Technical Insights ]
                        </span>
                        <h2 className="text-[#000000] text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter uppercase leading-[0.85] italic">
                            Engineering <br /> Ledger
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-4 text-[13px] font-bold tracking-[0.2em] uppercase transition-all pb-1 border-b-2 border-[#001F3F]"
                    >
                        <span>Archive öffnen</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                        </svg>
                    </Link>
                </div>

                {/* THE GRID: Horizontal Distribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#000000]">
                    {LOGS.map((log, index) => (
                        <Link
                            key={log.id}
                            href={`/blog/${log.id}`}
                            className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[450px] border-r border-b border-[#000000] transition-all duration-500 overflow-hidden"
                        >
                            {/* HOVER REVEAL LAYER: Rising Navy Block */}
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#001F3F] group-hover:h-full transition-all duration-500 ease-in-out z-0" />

                            {/* GHOST INDEX */}
                            <span className="absolute -right-4 -bottom-4 text-[120px] font-bold text-[#000000]/[0.03] group-hover:text-[#FFFFFF]/5 transition-all duration-500 z-10 select-none">
                                0{index + 1}
                            </span>

                            {/* CONTENT TOP */}
                            <div className="relative z-20">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono font-black text-[#001F3F] group-hover:text-[#FFFFFF] tracking-[0.3em] transition-colors">
                                            {log.logNumber}
                                        </span>
                                        <span className="text-[9px] font-mono text-[#000000]/40 group-hover:text-[#FFFFFF]/50 tracking-widest uppercase transition-colors">
                                            {log.category}
                                        </span>
                                    </div>
                                    <div className="w-8 h-8 border border-[#000000] group-hover:border-[#FFFFFF] flex items-center justify-center transition-colors">
                                        <div className="w-1.5 h-1.5 bg-[#001F3F] group-hover:bg-[#FFFFFF] animate-pulse" />
                                    </div>
                                </div>

                                <h3 className="text-[24px] lg:text-[30px] font-bold text-[#000000] group-hover:text-[#FFFFFF] tracking-tighter leading-[1.1] uppercase transition-colors">
                                    {log.title}
                                </h3>
                            </div>

                            {/* CONTENT BOTTOM */}
                            <div className="relative z-20 pt-12 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 flex justify-between items-end">
                                <div className="flex flex-col">
                                    <span className="text-[12px] font-bold text-[#000000] group-hover:text-[#FFFFFF] transition-colors">
                                        {log.date}
                                    </span>
                                    <span className="text-[10px] font-mono text-[#001F3F] group-hover:text-[#FFFFFF]/70 tracking-[0.2em] uppercase transition-colors">
                                        {log.readTime}
                                    </span>
                                </div>
                                
                                <span className="text-[11px] font-bold text-[#001F3F] group-hover:text-[#FFFFFF] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
                                    Read Log _
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}