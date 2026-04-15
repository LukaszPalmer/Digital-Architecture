// src/components/sections/StripeArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Payment Flow + Webhook Pipeline.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAYMENT_FLOW = [
    {
        step: "01",
        label: "KUNDE",
        desc: "Waehlt Zahlungsart",
        note: "Sichere Eingabe",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        step: "02",
        label: "CHECKOUT",
        desc: "Zahlungsseite wird erstellt",
        note: "Alle Zahlungsarten",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        step: "03",
        label: "PRUEFUNG",
        desc: "Sicherheitscheck & Betrugsschutz",
        note: "3D Secure & KI-Analyse",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        step: "04",
        label: "BESTAETIGUNG",
        desc: "Zahlung erfolgreich",
        note: "Automatische Benachrichtigung",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        step: "05",
        label: "VERARBEITUNG",
        desc: "Bestellung wird gespeichert",
        note: "Rechnung wird erstellt",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        step: "06",
        label: "LIEFERUNG",
        desc: "Versandbestaetigung & Zugang",
        note: "E-Mail an Kunde",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
];

const WEBHOOK_EVENTS = [
    { event: "Zahlung erfolgreich", action: "Bestellung bestaetigt, Zugang freigeschaltet", critical: true },
    { event: "Zahlung fehlgeschlagen", action: "Kunde wird benachrichtigt, erneuter Versuch", critical: true },
    { event: "Neues Abonnement", action: "Willkommens-E-Mail, Funktionen freigeschaltet", critical: false },
    { event: "Abonnement gekuendigt", action: "Zugang wird entzogen, Bestaetigung gesendet", critical: true },
    { event: "Rechnung unbezahlt", action: "Automatische Zahlungserinnerung gestartet", critical: false },
    { event: "Rueckbuchung gemeldet", action: "Team wird alarmiert, Nachweis vorbereitet", critical: true },
];

const INTEGRATION_SPECS = [
    {
        id: "STR-INT-01",
        title: "Sichere Zahlungsverarbeitung",
        description:
            "Kreditkartendaten werden nie auf Ihrem Server gespeichert. Die gesamte Zahlungsverarbeitung laeuft ueber Stripes sichere Infrastruktur — Ihr Onlineshop ist automatisch PCI-konform, ohne zusaetzlichen Aufwand.",
        spec: "KEINE KARTENDATEN AUF IHREM SERVER",
    },
    {
        id: "STR-INT-02",
        title: "Automatische Benachrichtigungen",
        description:
            "Bei jeder Zahlung wird Ihr System automatisch informiert. Bestellungen werden bestaetigt, Rechnungen erstellt und Kunden benachrichtigt — auch wenn tausende Bestellungen gleichzeitig eingehen.",
        spec: "VOLLAUTOMATISCH",
    },
    {
        id: "STR-INT-03",
        title: "Kunden-Selbstverwaltung",
        description:
            "Ihre Kunden koennen Abos, Zahlungsarten und Rechnungen selbst verwalten — ueber ein von Stripe bereitgestelltes Portal. Sie muessen keine eigene Verwaltungsoberflaeche bauen oder pflegen.",
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
                                [ So funktioniert eine Stripe-Zahlung ]
                            </span>
                            <h2
                                id="stripe-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Der Ablauf
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Schritt fuer Schritt.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Vom Klick auf &quot;Jetzt bezahlen&quot; bis zur
                            Versandbestaetigung — so laeuft eine Zahlung
                            in Ihrem Onlineshop ab. Vollautomatisch und sicher.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAYMENT FLOW DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Der Zahlungsablauf — 6 Schritte ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        Stripe Zahlungsablauf
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    PCI DSS konform
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[#000000]">
                                {PAYMENT_FLOW.map((stage) => (
                                    <div key={stage.step} className={`${stage.bg} p-5 md:p-6 flex flex-col gap-2`}>
                                        <span className={`text-[9px] font-mono font-black tracking-[0.3em] uppercase ${stage.subColor}`}>
                                            SCHRITT {stage.step}
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
                                        Vollautomatisch
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Automatischer Wiederholungsversuch bei Fehler
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
                            [ Was passiert bei jeder Zahlung automatisch ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Automatische Aktionen
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    6 Automatisierungen
                                </span>
                            </div>
                            <div className="divide-y divide-[#000000]">
                                {WEBHOOK_EVENTS.map((ev) => (
                                    <div key={ev.event} className="flex items-center gap-4 px-6 py-4 hover:bg-[#001F3F]/5 transition-colors">
                                        <div className={`w-1.5 h-1.5 shrink-0 ${ev.critical ? "bg-[#001F3F]" : "bg-[#000000]/30"}`} aria-hidden="true" />
                                        <span className="text-[11px] font-mono font-bold text-[#001F3F] tracking-tight flex-1 min-w-0">
                                            {ev.event}
                                        </span>
                                        <span className="text-[11px] text-[#000000]/65 text-right hidden md:block">
                                            {ev.action}
                                        </span>
                                        {ev.critical && (
                                            <span className="bg-[#001F3F] px-2 py-0.5 text-[8px] font-mono font-black tracking-widest text-[#FFFFFF] uppercase shrink-0">
                                                WICHTIG
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Jede Aktion wird sicher verifiziert
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Keine Zahlung geht verloren
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
