import Image from "next/image";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

const PROJECTS: Project[] = [
    {
        id: "01",
        title: "Global Fintech Backbone",
        category: "Infrastruktur / Payments",
        metrics: "TBT 0ms | 99.99% Uptime",
        year: "2024",
        imageUrl: "/projects/project-01.jpg", // Platzhalter
    },
    {
        id: "02",
        title: "Enterprise SaaS Core",
        category: "Fullstack Engineering",
        metrics: "LCP 0.5s | SEO 100",
        year: "2024",
        imageUrl: "/projects/project-02.jpg",
    },
];

export default function FeaturedProjects() {
    return (
        <section className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44 px-4 md:px-8">
            <div className="max-w-[1440px] mx-auto">
                {/* Header mit technischer Präzision */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#FFFFFF]/50 text-[12px] font-bold tracking-[0.3em] uppercase block mb-4">
                            [ Selected Assets ]
                        </span>
                        <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter leading-none italic uppercase">
                            Konstruierte
                            <br />
                            Referenz-Systeme
                        </h2>
                    </div>
                    <p className="text-[#FFFFFF]/70 max-w-sm text-[14px] leading-relaxed border-l border-[#FFFFFF]/20 pl-6">
                        Jedes Projekt ist eine maßgeschneiderte Architektur,
                        optimiert für maximale Skalierbarkeit und kompromisslose
                        Performance unter Last.
                    </p>
                </div>

                {/* Projekt-Grid */}
                <div className="grid grid-cols-1 gap-y-24 md:gap-y-32">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.id}
                            className={cn(
                                "group flex flex-col gap-8",
                                index % 2 !== 0
                                    ? "md:items-end"
                                    : "md:items-start"
                            )}
                        >
                            {/* Image Container - 0px Border Radius Asset */}
                            <div className="relative w-full md:w-[85%] aspect-[16/9] bg-[#1a1a1a] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-[#FFFFFF]/10 group-hover:border-[#FFFFFF]/40">
                                {/* Overlay für Tech-Metriken */}
                                <div className="absolute top-6 right-6 z-10 bg-[#001F3F] px-4 py-2 text-[11px] font-mono tracking-widest border border-[#FFFFFF]/20">
                                    {project.metrics}
                                </div>
                                {/* Hier käme das Image-Tag rein, sobald Assets vorhanden sind */}
                                <div className="w-full h-full flex items-center justify-center text-[#FFFFFF]/10 text-[120px] font-bold tracking-tighter select-none">
                                    {project.id}
                                </div>
                            </div>

                            {/* Projekt-Info */}
                            <div
                                className={cn(
                                    "flex flex-col md:w-[85%] px-2",
                                    index % 2 !== 0
                                        ? "md:text-right md:items-end"
                                        : "md:text-left md:items-start"
                                )}
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="text-[14px] font-bold text-[#FFFFFF]">
                                        {project.title}
                                    </span>
                                    <span className="w-8 h-[1px] bg-[#FFFFFF]/30" />
                                    <span className="text-[12px] text-[#FFFFFF]/50 uppercase tracking-widest">
                                        {project.year}
                                    </span>
                                </div>
                                <span className="text-[12px] text-[#FFFFFF]/40 font-light tracking-[0.2em] uppercase">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
