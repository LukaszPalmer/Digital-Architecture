// src/components/sections/StripeArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Payment Flow + Webhook Pipeline.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAYMENT_FLOW = [
    {
        step: "01",
        label: "CLIENT",
        desc: "Stripe.js + Elements",
        note: "PCI-Scope minimiert",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        step: "02",
        label: "PAYMENT INTENT",
        desc: "Server-Side Creation",
        note: "Client Secret zurück",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        step: "03",
        label: "STRIPE API",
        desc: "3DS2 + SCA Check",
        note: "Fraud-Scoring via Radar",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        step: "04",
        label: "WEBHOOK",
        desc: "payment_intent.succeeded",
        note: "Idempotency verified",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        step: "05",
        label: "DATABASE",
        desc: "Order Status Update",
        note: "Atomare Transaktion",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        step: "06",
        label: "FULFILLMENT",
        desc: "Email + Access Grant",
        note: "Resend API + Auth",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
];

const WEBHOOK_EVENTS = [
    { event: "payment_intent.succeeded", action: "Order confirmed, access granted", critical: true },
    { event: "payment_intent.payment_failed", action: "Retry logic, failure email", critical: true },
    { event: "customer.subscription.created", action: "Welcome flow, feature unlock", critical: false },
    { event: "customer.subscription.deleted", action: "Downgrade, access revoked", critical: true },
    { event: "invoice.payment_failed", action: "Dunning sequence initiated", critical: false },
    { event: "charge.dispute.created", action: "Alert ops team, evidence prep", critical: true },
];

const INTEGRATION_SPECS = [
    {
        id: "STR-INT-01",
        title: "Next.js Server Actions",
        description:
            "Payment Intent Creation als typisierte Server Action — kein separater API-Route-Layer notwendig. Stripe Secret Key bleibt serverseitig, Client erhält nur den Client Secret.",
        spec: "ZERO SECRET EXPOSURE",
    },
    {
        id: "STR-INT-02",
        title: "Webhook Handler",
        description:
            "Stripe-Webhook-Signatur wird mit `stripe.webhooks.constructEvent` verifiziert. Idempotency via Event-ID in MongoDB — jedes Event wird genau einmal verarbeitet, auch bei Duplikaten.",
        spec: "EXACTLY-ONCE DELIVERY",
    },
    {
        id: "STR-INT-03",
        title: "Subscription Management",
        description:
            "Stripe Customer Portal für Self-Service-Upgrades, Downgrades und Kündigungen. Keine eigene UI notwendig — Stripe hostet das Portal, wir verarbeiten die resultierenden Webhooks.",
        spec: "SELF-SERVICE PORTAL",
    },
];

export default function StripeArchitecture() {
    return (
        <section
            aria-labelledby="stripe-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Payment Flow & Webhook Blueprint ]
                            </span>
                            <h2
                                id="stripe-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Architektur
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    im Detail.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Der vollständige Payment-Lifecycle — vom
                            Browser bis zur Fulfillment-Pipeline — und
                            die kritischen Webhook-Events im Überblick.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAYMENT FLOW DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Payment Lifecycle — 6 Stage Flow ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        Stripe Payment Intent Pipeline
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    PCI DSS Compliant
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[#000000]">
                                {PAYMENT_FLOW.map((stage) => (
                                    <div key={stage.step} className={`${stage.bg} p-5 md:p-6 flex flex-col gap-2`}>
                                        <span className={`text-[9px] font-mono font-black tracking-[0.3em] uppercase ${stage.subColor}`}>
                                            STEP {stage.step}
                                        </span>
                                        <p className={`text-[12px] font-black tracking-tight uppercase leading-tight ${stage.textColor}`}>
                                            {stage.label}
                                        </p>
                                        <p className={`text-[10px] leading-snug ${stage.subColor}`}>
                                            {stage.desc}
                                        </p>
                                        <p className={`text-[9px] font-mono ${stage.subColor} tracking-wide`}>
                                            {stage.note}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Idempotent End-to-End
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Automatischer Retry bei Fehler
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── WEBHOOK EVENTS TABLE ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Webhook Events — Critical Handler Map ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Stripe Event Handler Registry
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    6 Critical Events
                                </span>
                            </div>
                            <div className="divide-y divide-[#000000]">
                                {WEBHOOK_EVENTS.map((ev) => (
                                    <div key={ev.event} className="flex items-center gap-4 px-6 py-4 hover:bg-[#001F3F]/5 transition-colors">
                                        <div className={`w-1.5 h-1.5 shrink-0 ${ev.critical ? "bg-[#001F3F]" : "bg-[#000000]/30"}`} aria-hidden="true" />
                                        <code className="text-[11px] font-mono font-bold text-[#001F3F] tracking-tight flex-1 min-w-0">
                                            {ev.event}
                                        </code>
                                        <span className="text-[11px] text-[#000000]/65 text-right hidden md:block">
                                            {ev.action}
                                        </span>
                                        {ev.critical && (
                                            <span className="bg-[#001F3F] px-2 py-0.5 text-[8px] font-mono font-black tracking-widest text-[#FFFFFF] uppercase shrink-0">
                                                CRITICAL
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Signature-Verifikation auf jedem Handler
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Event-ID Deduplication
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── INTEGRATION SPECS ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]">
                    {INTEGRATION_SPECS.map((spec) => (
                        <div
                            key={spec.id}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] flex flex-col min-h-72 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-6 transition-colors">
                                {spec.id}
                            </span>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {spec.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-6">
                                {spec.description}
                            </p>
                            <div className="mt-auto">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {spec.spec}
                                </span>
                            </div>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
