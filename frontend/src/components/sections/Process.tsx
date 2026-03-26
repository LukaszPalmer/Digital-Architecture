import { cn } from "@/lib/utils";

const STEPS = [
    {
        id: "01",
        title: "Technical Discovery",
        description:
            "Initiales Briefing via Zoom oder Google Meet. Wir analysieren Ihre aktuelle Infrastruktur und definieren die Zielmetriken.",
        tag: "CONSULTING",
    },
    {
        id: "02",
        title: "Infrastructure Scoping",
        description:
            "Ein gezielter technischer Fragebogen extrahiert die Kernanforderungen Ihres Projekts, um Redundanzen zu vermeiden.",
        tag: "REQUIREMENTS",
    },
    {
        id: "03",
        title: "Strategic Transparency",
        description:
            "Wir kommunizieren offen über Budgets, Zeitrahmen und Machbarkeit. Keine versteckten Kosten, volle Planungssicherheit.",
        tag: "PLANNING",
    },
    {
        id: "04",
        title: "Efficiency Advisory",
        description:
            "Wir sagen Ihnen ehrlich, was Sie NICHT brauchen. Wir streichen unnötigen Overhead, um Kosten zu senken und Performance zu maximieren.",
        tag: "OPTIMIZATION",
    },
];

export default function Process() {
    return (
        <section className="bg-[#FFFFFF] border-t border-[#000000] py-20 md:py-32 lg:py-44">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-[#001F3F] text-[12px] font-bold tracking-[0.4em] uppercase block mb-6">
                            [ Implementation Protocol ]
                        </span>
                        <h2 className="text-[#000000] text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tighter uppercase leading-[0.9]">
                            Vom Erstkontakt <br />
                            zur Architektur.
                        </h2>
                    </div>
                    <p className="text-[#000000]/60 max-w-xs text-[14px] leading-relaxed border-l border-[#001F3F] pl-6 font-medium">
                        Unser Onboarding ist auf maximale Effizienz ausgelegt.
                        Wir eliminieren Rauschen und konzentrieren uns auf
                        Engineering-Substanz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#000000]">
                    {STEPS.map((step) => (
                        <div
                            key={step.id}
                            className="p-8 md:p-10 border-r border-b border-[#000000] flex flex-col min-h-[320px] group hover:bg-[#001F3F] transition-colors duration-500"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-[40px] font-bold tracking-tighter leading-none text-[#001F3F] group-hover:text-[#FFFFFF] transition-colors">
                                    {step.id}
                                </span>
                                <span className="text-[10px] font-mono tracking-[0.2em] border border-[#001F3F] group-hover:border-[#FFFFFF] px-2 py-1 text-[#001F3F] group-hover:text-[#FFFFFF] transition-colors">
                                    {step.tag}
                                </span>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-[20px] font-bold uppercase tracking-tight text-[#000000] group-hover:text-[#FFFFFF] mb-4 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
