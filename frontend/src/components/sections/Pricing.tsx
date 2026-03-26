import { cn } from "@/lib/utils";
import { PricingPackage } from "@/types/pricing";

const PACKAGES: PricingPackage[] = [
    {
        id: "01",
        name: "Digital Foundation",
        label: "CORE ARCHITECTURE",
        description:
            "Hochperformante Präsenz für Scale-ups. Fokus auf LCP < 0.8s und SEO Dominanz.",
        features: [
            "Next.js 15 High-Speed Setup",
            "Architectural Minimalism Design",
            "Vercel Edge Deployment",
            "SEO & Performance Audit 100",
        ],
        investment: "Ab 5.000€",
    },
    {
        id: "02",
        name: "Performance Asset",
        label: "ADVANCED SYSTEMS",
        description:
            "Skalierbare Web-Applikationen mit dynamischen Datenstrukturen und Nutzerverwaltung.",
        features: [
            "Alles aus Digital Foundation",
            "MongoDB Atlas Integration",
            "Auth.js Security Layer",
            "Stripe Payment Gateway",
        ],
        investment: "Ab 12.000€",
        highlighted: true,
    },
    {
        id: "03",
        name: "Global Infrastructure",
        label: "ENTERPRISE LEVEL",
        description:
            "Komplexe Ökosysteme für Marktführer. Maximale Sicherheit und weltweite Skalierung.",
        features: [
            "Full Ecosystem Design",
            "Custom API & Microservices",
            "Railway Backend Cluster",
            "24/7 Monitoring & SLA",
        ],
        investment: "Individuell",
    },
];

export default function Pricing() {
    return (
        <section className="bg-[#FFFFFF] border-t border-[#000000] py-20 md:py-32 lg:py-44">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="mb-16 md:mb-24">
                    <span className="text-[#001F3F] text-[12px] font-bold tracking-[0.4em] uppercase block mb-4">
                        [ Investment Matrix ]
                    </span>
                    <h2 className="text-[#000000] text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter uppercase leading-none">
                        Skalierbare
                        <br />
                        Investitionsstufen
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[#000000]">
                    {PACKAGES.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={cn(
                                "p-8 md:p-12 border-r border-b border-[#000000] flex flex-col justify-between transition-all duration-500",
                                pkg.highlighted
                                    ? "bg-[#001F3F] text-[#FFFFFF]"
                                    : "bg-[#FFFFFF] text-[#000000] hover:bg-[#001F3F]/5"
                            )}
                        >
                            <div>
                                <span
                                    className={cn(
                                        "text-[10px] font-mono tracking-[0.3em] block mb-8",
                                        pkg.highlighted
                                            ? "text-[#FFFFFF]/50"
                                            : "text-[#001F3F]/50"
                                    )}
                                >
                                    {pkg.label}
                                </span>
                                <h3 className="text-[28px] md:text-[32px] font-bold tracking-tighter uppercase mb-4 leading-none">
                                    {pkg.name}
                                </h3>
                                <p
                                    className={cn(
                                        "text-[14px] leading-relaxed mb-10",
                                        pkg.highlighted
                                            ? "text-[#FFFFFF]/70"
                                            : "text-[#000000]/60"
                                    )}
                                >
                                    {pkg.description}
                                </p>

                                <ul className="space-y-4 mb-12">
                                    {pkg.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-3 text-[13px] font-medium tracking-tight"
                                        >
                                            <span
                                                className={cn(
                                                    "w-1.5 h-1.5",
                                                    pkg.highlighted
                                                        ? "bg-[#FFFFFF]"
                                                        : "bg-[#001F3F]"
                                                )}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <div
                                    className={cn(
                                        "text-[24px] font-bold tracking-tighter mb-6",
                                        pkg.highlighted
                                            ? "text-[#FFFFFF]"
                                            : "text-[#001F3F]"
                                    )}
                                >
                                    {pkg.investment}
                                </div>
                                <button
                                    className={cn(
                                        "w-full py-5 text-[12px] font-bold tracking-[0.2em] uppercase transition-all duration-300",
                                        pkg.highlighted
                                            ? "bg-[#FFFFFF] text-[#001F3F] hover:bg-[#000000] hover:text-[#FFFFFF]"
                                            : "bg-[#001F3F] text-[#FFFFFF] hover:bg-[#000000]"
                                    )}
                                >
                                    Architektur Anfragen
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
