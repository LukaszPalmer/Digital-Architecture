// src/components/sections/StripeUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "ONLINESHOP",
        title: "E-Commerce Checkout",
        description:
            "Der klassische Onlineshop: Ihre Kunden legen Produkte in den Warenkorb und bezahlen mit ihrer bevorzugten Zahlungsart — Kreditkarte, Klarna, SEPA oder Zahlung auf Rechnung. Ein schneller, uebersichtlicher Checkout, der fuer weniger Kaufabbrueche optimiert ist.",
        metrics: ["Alle Zahlungsarten", "Weniger Abbrueche", "Sofortige Bestaetigung"],
    },
    {
        id: "UC-02",
        segment: "MARKTPLATZ",
        title: "Plattform mit mehreren Verkaeufer",
        description:
            "Sie betreiben eine Plattform, auf der andere Haendler verkaufen? Stripe teilt jede Zahlung automatisch auf: Ihre Plattform-Gebuehr wird abgezogen, der Rest geht an den Verkaeufer. Das funktioniert fuer Haendler in ueber 30 Laendern.",
        metrics: ["Automatische Aufteilung", "Weltweite Verkaeufer", "Transparente Gebuehren"],
    },
    {
        id: "UC-03",
        segment: "ABO-MODELL",
        title: "Mitgliedschaften & Software-Abos",
        description:
            "Monatliche Mitgliedsbeitraege, jaehrliche Software-Lizenzen oder nutzungsbasierte Abrechnung — alles wird automatisch eingezogen. Ihre Kunden koennen Abos selbst verwalten, hoch- oder herunterstufen, und Sie muessen sich um nichts kuemmern.",
        metrics: ["Automatische Abrechnung", "Selbstverwaltung", "Flexible Preismodelle"],
    },
    {
        id: "UC-04",
        segment: "RECHNUNGEN",
        title: "Automatische Rechnungsstellung",
        description:
            "Schluss mit manuellen Rechnungen in Excel. Stripe erstellt professionelle PDF-Rechnungen, berechnet die Steuern automatisch und verschickt Zahlungserinnerungen bei offenen Betraegen — vom Angebot bis zur Buchhaltung.",
        metrics: ["PDF-Rechnungen", "Automatische Steuer", "Zahlungserinnerungen"],
    },
    {
        id: "UC-05",
        segment: "LOKAL",
        title: "Onlineshop erstellen in Duesseldorf",
        description:
            "Sie moechten einen professionellen Onlineshop erstellen lassen — mit allen Zahlungsmoeglichkeiten, die deutsche Kunden erwarten? Wir sind Ihre Webdesign-Agentur in Duesseldorf und bauen Ihren Shop mit Stripe von Anfang an richtig auf. DSGVO-konform und rechtsicher.",
        metrics: ["Webdesign Duesseldorf", "DSGVO-konform", "Persoenliche Beratung"],
    },
    {
        id: "UC-06",
        segment: "SICHERHEIT",
        title: "Rueckerstattungen & Streitfaelle",
        description:
            "Kunden moechten ihr Geld zurueck? Unser System verarbeitet Rueckerstattungen automatisch. Bei Streitfaellen (Chargebacks) werden alle Nachweise automatisch vorbereitet und Ihr Team wird sofort benachrichtigt.",
        metrics: ["Automatische Rueckerstattung", "Nachweis-Vorbereitung", "Sofort-Benachrichtigung"],
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
                                [ Fuer wen ist das gedacht? ]
                            </span>
                            <h2
                                id="stripe-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Stripe fuer
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    jedes Geschaeftsmodell.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Egal ob Sie einen Onlineshop erstellen, ein
                            Abo-Modell betreiben oder einen Marktplatz
                            aufbauen — hier sehen Sie, wie Stripe
                            fuer Ihr Unternehmen arbeitet.
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
