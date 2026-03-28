// src/components/sections/StripeUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "SAAS",
        title: "Subscription Plattformen",
        description:
            "Monatliche und jährliche Pläne mit Usage-Based Billing-Komponenten. Trial Periods, Upgrade/Downgrade-Flows und automatische Proration — vollständig über Stripe Customer Portal verwaltet.",
        metrics: ["Usage-Based Billing", "Auto Proration", "Self-Service Portal"],
    },
    {
        id: "UC-02",
        segment: "MARKETPLACE",
        title: "Plattform Payouts",
        description:
            "Stripe Connect für Zwei-Parteien-Transaktionen: Plattform erhält automatisch Platform Fee, Seller erhält seinen Anteil. Onboarding-Flow für Connected Accounts in 30+ Ländern.",
        metrics: ["Stripe Connect", "Auto Platform Fee", "Multi-Country"],
    },
    {
        id: "UC-03",
        segment: "E-COMMERCE",
        title: "High-Conversion Checkout",
        description:
            "Payment Element mit 20+ Zahlungsmethoden in einer UI. Link für One-Click-Checkout für wiederkehrende Kunden — Conversion-Steigerung durch Reibungsminimierung im kritischsten Moment.",
        metrics: ["Payment Element", "Link One-Click", "+35% Conversion"],
    },
    {
        id: "UC-04",
        segment: "INVOICING",
        title: "Automatisierte Rechnungen",
        description:
            "Stripe Invoicing mit automatischer Steuerberechnung, PDF-Generierung und Dunning-Management. Manuelle Rechnungsstellung wird vollständig eliminiert — vom Angebot bis zur Buchung.",
        metrics: ["Auto Tax Calc", "PDF Generation", "Dunning Flows"],
    },
    {
        id: "UC-05",
        segment: "FINTECH",
        title: "Compliance-kritische Flows",
        description:
            "SCA-konforme Payment Intents für europäische Märkte, PSD2-compliant Authentication Flows. KYC-Integration via Stripe Identity für regulierte Finanzdienstleistungen.",
        metrics: ["SCA / PSD2", "Stripe Identity", "DSGVO-Konform"],
    },
    {
        id: "UC-06",
        segment: "ENTERPRISE",
        title: "Refund & Dispute Mgmt",
        description:
            "Automatisiertes Refund-Handling für Kundenservice-Workflows, Evidence-Submission für Dispute-Management und Chargeback-Alerts mit Ops-Team-Notification via Webhook.",
        metrics: ["Auto Refunds", "Evidence Mgmt", "< 0.1% Chargeback"],
    },
];

export default function StripeUseCases() {
    return (
        <section
            aria-labelledby="stripe-uc-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Production Use Cases ]
                            </span>
                            <h2
                                id="stripe-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wo Stripe
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    unersetzlich ist.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Produktionsszenarien, in denen eine
                            professionelle Stripe-Integration den
                            Unterschied zwischen Wachstum und Stillstand macht.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── USE CASE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {USE_CASES.map((uc) => (
                        <div
                            key={uc.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {uc.segment}
                                </span>
                                <span className="text-[12px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {uc.id}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.1rem,2vw,1.6rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {uc.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {uc.description}
                            </p>
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {uc.metrics.map((metric) => (
                                    <li
                                        key={metric}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            {metric}
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
