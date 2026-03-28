import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

interface Capability {
    id: string;
    title: string;
    description: string;
}

interface ServiceCapabilitiesProps {
    title: string;
    capabilities: Capability[];
}

export default function ServiceCapabilities({
    title,
    capabilities,
}: ServiceCapabilitiesProps) {
    return (
        <section className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 border-b border-[#000000]">
            <div className="max-w-360 mx-auto px-4 md:px-8">
                <ScrollReveal>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-6">
                            [ Technische Protokolle ]
                        </span>
                        <h2 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-tighter uppercase leading-none">
                            {title}.
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Strikte PDA Grid-Architektur */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#000000]">
                    {capabilities.map((cap) => (
                        <div
                            key={cap.id}
                            className="group p-8 md:p-12 border-r border-b border-[#000000] hover:bg-[#001F3F] transition-all duration-500 cursor-crosshair flex flex-col min-h-100"
                        >
                            <span className="text-[11px] font-mono tracking-[0.3em] font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/50 mb-12 block transition-colors">
                                [{cap.id}]
                            </span>

                            <h3 className="text-[22px] font-black uppercase tracking-tight mb-6 group-hover:text-[#FFFFFF] transition-colors leading-tight">
                                {cap.title}
                            </h3>

                            <p className="text-[15px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF] transition-colors mt-auto italic border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF] pl-4">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>
            </div>
        </section>
    );
}
