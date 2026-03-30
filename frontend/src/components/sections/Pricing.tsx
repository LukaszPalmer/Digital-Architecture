// src/components/sections/Pricing.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Architektur: Header · 3-Spalten-Matrix (Foundation / Performance / Authority).

import Link from "next/link";
import { cn } from "@/lib/utils";
import { PricingPackage } from "@/types/pricing";

const PACKAGES: PricingPackage[] = [
    {
        id: "01",
        name: "Foundation",
        label: "CORE INFRASTRUCTURE",
        description:
            "Konstruktion der essentiellen digitalen Basis. Fokus auf Performance und statische Exzellenz.",
        features: [
            "Next.js 15 Core Architektur",
            "Minimalist UX/UI Design (0px)",
            "Resend Transactional API",
            "Vercel & Railway Deployment",
            "Grundlegendes SEO Engineering",
            "Bis zu 5 Kern-Unterseiten",
        ],
        cta: "Foundation anfragen",
    },
    {
        id: "02",
        name: "Performance",
        label: "DYNAMIC SYSTEMS",
        description:
            "Die Transformation zur intelligenten Applikation. Skalierbare Logik für echtes Business.",
        features: [
            "Inklusive Foundation-Infrastruktur",
            "Auth.js v5 Security & Roles",
            "MongoDB Atlas Aggregation",
            "Stripe Custom Checkout Flows",
            "Interaktive Daten-Dashboards",
            "Real-time Performance Monitoring",
        ],
        cta: "Performance skalieren",
        highlighted: true,
    },
    {
        id: "03",
        name: "Authority",
        label: "ENTERPRISE ECOSYSTEM",
        description:
            "Vollumfängliche Orchestrierung globaler Ökosysteme. Maximale Tiefe in Sicherheit und Daten-Integrität.",
        features: [
            "Full Infrastructure Governance",
            "Global Database Sharding",
            "Bespoke API-Architecture",
            "Automatisierte Business-Pipelines",
            "24/7 Monitoring & Critical SLA",
            "Exklusive Engineer-Kapazitäten",
        ],
        cta: "Exzellenz sichern",
    },
];

export default function Pricing() {
    return (
        <section
            id="investment"
            aria-labelledby="pricing-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-12">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Investment Matrix ]
                        </span>
                        <h2
                            id="pricing-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Konstruktions
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Ebenen.
                            </span>
                        </h2>
                    </div>
                    <div className="md:max-w-xs border-l-2 border-[#001F3F] pl-6">
                        <p className="text-[15px] text-[#000000]/60 leading-[1.75]">
                            Wir definieren Investment-Stufen für digitale
                            Marktführerschaft. Präzision in jeder Ausbaustufe.
                        </p>
                    </div>
                </div>

                {/* ── PRICING MATRIX ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]/10">
                    {PACKAGES.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={cn(
                                "relative flex flex-col border-r border-b border-[#000000]/10 transition-colors duration-300",
                                pkg.highlighted
                                    ? "bg-[#001F3F] text-[#FFFFFF]"
                                    : "bg-[#FFFFFF] text-[#000000] hover:border-[#001F3F]"
                            )}
                        >
                            {/* Top accent bar on highlighted */}
                            {pkg.highlighted && (
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#FFFFFF]" />
                            )}

                            <div className="flex flex-col flex-1 p-8 md:p-10 lg:p-12 pt-10">

                                {/* Label */}
                                <div className="mb-8">
                                    <span
                                        className={cn(
                                            "text-[9.5px] font-mono font-black tracking-[0.35em] uppercase px-2.5 py-1 inline-block",
                                            pkg.highlighted
                                                ? "bg-[#FFFFFF] text-[#001F3F]"
                                                : "bg-[#001F3F] text-[#FFFFFF]"
                                        )}
                                    >
                                        {pkg.label}
                                    </span>
                                </div>

                                {/* Name */}
                                <h3
                                    className={cn(
                                        "text-[clamp(2rem,3.5vw,3rem)] font-black tracking-tighter uppercase leading-none mb-5",
                                        pkg.highlighted
                                            ? "text-[#FFFFFF]"
                                            : "text-[#000000]"
                                    )}
                                >
                                    {pkg.name}
                                </h3>

                                {/* Description */}
                                <p
                                    className={cn(
                                        "text-[14px] leading-relaxed mb-10 min-h-20",
                                        pkg.highlighted
                                            ? "text-[#FFFFFF]/80"
                                            : "text-[#000000]/55"
                                    )}
                                >
                                    {pkg.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-5 mb-12 flex-1" role="list">
                                    {pkg.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-4 text-[13px] font-bold tracking-tight"
                                        >
                                            <div
                                                className={cn(
                                                    "w-1.5 h-1.5 mt-1.5 shrink-0",
                                                    pkg.highlighted
                                                        ? "bg-[#FFFFFF]"
                                                        : "bg-[#001F3F]"
                                                )}
                                            />
                                            <span
                                                className={cn(
                                                    "uppercase tracking-wide leading-tight",
                                                    pkg.highlighted
                                                        ? "text-[#FFFFFF]/90"
                                                        : "text-[#000000]/70"
                                                )}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href="#contact"
                                    className={cn(
                                        "w-full py-5 text-[11px] font-black tracking-[0.3em] uppercase transition-colors duration-300 min-h-14 flex items-center justify-center",
                                        pkg.highlighted
                                            ? "bg-[#FFFFFF] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]"
                                            : "border border-[#000000]/20 text-[#000000] hover:bg-[#001F3F] hover:text-[#FFFFFF] hover:border-[#001F3F]"
                                    )}
                                >
                                    {pkg.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── BOTTOM NOTE ── */}
                <div className="mt-10 pt-8 border-t border-[#000000]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-[11px] font-mono text-[#000000]/40 tracking-[0.3em] uppercase">
                        Alle Pakete — individuell anpassbar auf Ihr Vorhaben
                    </p>
                    <Link
                        href="#contact"
                        className="text-[11px] font-mono font-bold text-[#001F3F] hover:text-[#000000] transition-colors duration-200 tracking-wide underline underline-offset-4"
                    >
                        Individuelle Lösung anfragen →
                    </Link>
                </div>

            </div>
        </section>
    );
}
