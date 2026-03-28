// src/components/sections/StripeCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "STR-01",
        category: "PAYMENT",
        title: "Payment Intents API",
        description:
            "3D Secure 2.0 mit automatischer SCA-Compliance. Card Network Optimization wählt die günstigste Route pro Transaktion. Idempotency Keys verhindern Doppelbelastungen bei Netzwerkfehlern.",
        specs: ["3DS2 SCA", "Network Optimization", "Idempotency Keys"],
    },
    {
        id: "STR-02",
        category: "BILLING",
        title: "Subscription Billing",
        description:
            "Tiered Pricing, Usage-Based Billing und Trial Periods als konfigurierbare Parameter. Automatische Proration bei Planwechsel — kein manueller Eingriff in Billing-Logik notwendig.",
        specs: ["Usage-Based", "Trial Periods", "Auto Proration"],
    },
    {
        id: "STR-03",
        category: "WEBHOOKS",
        title: "Webhook Architecture",
        description:
            "Idempotente Webhook-Handler mit Stripe-Signatur-Verifikation. Retry-Queue mit exponential Backoff für Ausfallresilienz — kein Payment-Event geht verloren, auch bei Serverausfall.",
        specs: ["Signature Verify", "Retry Queue", "Event Idempotency"],
    },
    {
        id: "STR-04",
        category: "PLATFORM",
        title: "Stripe Connect",
        description:
            "Marketplace-Architektur mit Express- und Custom-Accounts. Automatisierte Payouts, Platform-Fee-Logik und per-Country Onboarding-Flows — skaliert von 10 auf 10.000 Connected Accounts.",
        specs: ["Express Accounts", "Auto Payouts", "Platform Fees"],
    },
    {
        id: "STR-05",
        category: "INVOICING",
        title: "Invoice Automation",
        description:
            "Automatische Steuerberechnung via Stripe Tax für 30+ Länder, PDF-Generierung und Dunning-Management bei fehlgeschlagenen Zahlungen — keine manuelle Rechnungsstellung ab Tag 1.",
        specs: ["Stripe Tax", "PDF Generation", "Dunning Mgmt"],
    },
    {
        id: "STR-06",
        category: "SICHERHEIT",
        title: "Fraud Protection",
        description:
            "Stripe Radar mit Machine Learning klassifiziert jede Transaktion in Echtzeit. Custom Rules blockieren Muster ohne Reibungsverlust für legitime Kunden — Chargeback-Rate unter 0.1%.",
        specs: ["ML Radar", "Custom Rules", "< 0.1% Chargeback"],
    },
];

export default function StripeCapabilities() {
    return (
        <section
            aria-labelledby="stripe-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Payment Capabilities ]
                            </span>
                            <h2
                                id="stripe-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was Stripe
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    beherrscht.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Zahlungs-Disziplinen, die zusammen eine
                            lückenlose Fintech-Infrastruktur für jede
                            Umsatzstufe und Geschäftsform ergeben.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── CAPABILITIES GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {CAPABILITIES.map((cap) => (
                        <div
                            key={cap.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                    {cap.category}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {cap.id}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.2rem,2.2vw,1.7rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {cap.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {cap.description}
                            </p>
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {cap.specs.map((spec) => (
                                    <li
                                        key={spec}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            {spec}
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
