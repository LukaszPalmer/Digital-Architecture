import { cn } from "@/lib/utils";

interface Service {
    id: string;
    title: string;
    description: string;
    label: string; // Technisches Labeling für Autorität
}

const SERVICES: Service[] = [
    {
        id: "01",
        label: "ARCHITEKTUR",
        title: "Skalierbare Cloud-Systeme",
        description:
            "Konstruktion von hochperformanten Backend-Infrastrukturen auf Basis von Node.js und MongoDB Atlas.",
    },
    {
        id: "02",
        label: "ENGINEERING",
        title: "Next.js Elite Interfaces",
        description:
            "Entwicklung von Web-Assets mit LCP < 0.8s und kompromissloser TypeScript-Sicherheit.",
    },
    {
        id: "03",
        label: "INTEGRATION",
        title: "Custom Fintech Flows",
        description:
            "Sichere Implementierung von Stripe-Zahlungssystemen und automatisierten Rechnungs-Pipelines.",
    },
    {
        id: "04",
        label: "STRATEGIE",
        title: "Digital Leadership",
        description:
            "Beratung von Marktführern zur digitalen Transformation und technologischen Dominanz.",
    },
];

export default function ServiceGrid() {
    return (
        <section className="bg-[#FFFFFF] border-t border-[#000000]">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
                {SERVICES.map((service, index) => (
                    <div
                        key={service.id}
                        className={cn(
                            "group relative p-8 md:p-12 border-[#000000] flex flex-col justify-between transition-colors duration-500 hover:bg-[#001F3F]",
                            // Dynamische Borders für das Grid-Layout ohne doppelte Linien
                            "border-b lg:border-b-0",
                            index !== SERVICES.length - 1 ? "md:border-r" : ""
                        )}
                    >
                        <div>
                            <span className="block text-[12px] font-bold tracking-[0.2em] text-[#001F3F] group-hover:text-[#FFFFFF] mb-8 transition-colors">
                                [{service.id}] {service.label}
                            </span>
                            <h3 className="text-[24px] md:text-[28px] font-bold leading-tight text-[#000000] group-hover:text-[#FFFFFF] mb-4 transition-colors">
                                {service.title}
                            </h3>
                        </div>

                        <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors">
                            {service.description}
                        </p>

                        {/* Architectural Detail: Hover Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#001F3F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </div>
                ))}
            </div>
        </section>
    );
}
