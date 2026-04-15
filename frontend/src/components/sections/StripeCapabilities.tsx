// src/components/sections/StripeCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "STR-01",
        category: "CHECKOUT",
        title: "Alle Zahlungsarten in einem Checkout",
        description:
            "Kreditkarte, SEPA, Klarna, Apple Pay, Google Pay und Zahlung auf Rechnung — alles in einer einzigen, uebersichtlichen Zahlungsseite. Ihre Kunden waehlen ihre bevorzugte Zahlungsart und bezahlen mit wenigen Klicks.",
        specs: ["Kreditkarte & SEPA", "Klarna / Rechnung", "Apple Pay / Google Pay"],
    },
    {
        id: "STR-02",
        category: "ABO-SYSTEM",
        title: "Automatische Abo-Zahlungen",
        description:
            "Monatliche oder jaehrliche Abonnements, die sich selbst verwalten. Ihre Kunden melden sich an, die Zahlungen laufen automatisch. Bei Planwechseln wird der Preis anteilig berechnet — ohne manuellen Aufwand fuer Sie.",
        specs: ["Monatlich / Jaehrlich", "Automatische Abrechnung", "Selbstverwaltung"],
    },
    {
        id: "STR-03",
        category: "SICHERHEIT",
        title: "Automatische Zahlungsbestaetigung",
        description:
            "Sobald ein Kunde bezahlt, wird Ihr System automatisch benachrichtigt. Die Bestellung wird bestaetigt, die Rechnung erstellt und der Kunde per E-Mail informiert — alles ohne Ihr Zutun. Auch bei Serverausfaellen geht keine Zahlung verloren.",
        specs: ["Sofort-Bestaetigung", "Automatische Rechnung", "Ausfallsicher"],
    },
    {
        id: "STR-04",
        category: "MARKTPLATZ",
        title: "Zahlungen fuer Marktplaetze",
        description:
            "Betreiben Sie einen Marktplatz mit mehreren Verkaeufer? Stripe teilt Zahlungen automatisch auf: Sie erhalten Ihre Provision, der Verkaeufer seinen Anteil. Das funktioniert fuer 10 oder 10.000 Verkaeufer — weltweit.",
        specs: ["Automatische Aufteilung", "Weltweite Auszahlung", "Skalierbar"],
    },
    {
        id: "STR-05",
        category: "RECHNUNGEN",
        title: "Automatische Rechnungsstellung",
        description:
            "Keine manuellen Rechnungen mehr. Stripe berechnet die Steuern automatisch fuer ueber 30 Laender, erstellt professionelle PDF-Rechnungen und kuemmert sich um unbezahlte Rechnungen mit automatischen Zahlungserinnerungen.",
        specs: ["Auto-Steuerberechnung", "PDF-Rechnungen", "Mahnwesen"],
    },
    {
        id: "STR-06",
        category: "BETRUGSSCHUTZ",
        title: "Intelligenter Betrugsschutz",
        description:
            "Stripe analysiert jede Transaktion automatisch mit kuenstlicher Intelligenz und erkennt betruegerische Zahlungsversuche in Echtzeit. Echte Kunden merken nichts davon — Betrueger werden blockiert, bevor Schaden entsteht.",
        specs: ["KI-Erkennung", "Echtzeit-Analyse", "Unter 0,1 % Betrug"],
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
                                [ E-Commerce Zahlungsmoeglichkeiten ]
                            </span>
                            <h2
                                id="stripe-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was Stripe fuer
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Ihren Onlineshop leistet.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Bereiche, die zusammen ein komplettes
                            Zahlungssystem fuer Ihren Onlineshop ergeben —
                            vom ersten Klick bis zur automatischen Rechnung.
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
