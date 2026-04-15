// src/components/sections/StripeProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — Warum veraltete Zahlungsprozesse Umsatz kosten.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "70 %",
        title: "Kaufabbruch im Checkout",
        description:
            "Sieben von zehn Kunden legen Produkte in den Warenkorb — und kaufen dann nicht. Der haeufigste Grund: ein komplizierter oder langsamer Checkout-Prozess. Fehlende Zahlungsarten, lange Ladezeiten und unuebersichtliche Formulare kosten Sie taeglich Umsatz.",
    },
    {
        id: "PAIN-02",
        stat: "–23 %",
        title: "Umsatzverlust ohne Rechnungskauf",
        description:
            "In Deutschland ist Zahlung auf Rechnung die beliebteste Zahlungsart im Onlinehandel. Wenn Ihr Onlineshop keinen Rechnungskauf anbietet, verlieren Sie fast ein Viertel der potenziellen Kaeufer — sie gehen zur Konkurrenz, die diese Zahlungsmoeglichkeit bietet.",
    },
    {
        id: "PAIN-03",
        stat: "48 Std.",
        title: "Manuelle Rechnungsstellung",
        description:
            "Viele Unternehmen erstellen Rechnungen noch per Hand — in Excel oder Word. Das kostet nicht nur Zeit, sondern fuehrt zu Fehlern, verspaeteren Zahlungseingaengen und einem unprofessionellen Eindruck. Automatisierung ist keine Option mehr, sondern Pflicht.",
    },
    {
        id: "PAIN-04",
        stat: "3.2 %",
        title: "Betrug bei unsicheren Checkouts",
        description:
            "Ohne moderne Sicherheitsstandards wie 3D Secure und automatische Betrugserkennung riskieren Sie Chargebacks und finanzielle Verluste. Dazu kommt: Kunden vertrauen einem Onlineshop weniger, wenn der Checkout unsicher wirkt — und brechen den Kauf ab.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Baukasten-Checkouts (Wix, Jimdo)",
        problem: "Eingeschraenkte Zahlungsarten, keine Anpassungsmoeglichkeiten und hohe Gebuehren. Sie koennen weder den Checkout optimieren noch automatische Rechnungen einrichten. Fuer wachsende Unternehmen eine Sackgasse.",
    },
    {
        label: "PayPal als einzige Zahlungsart",
        problem: "PayPal deckt nur einen Teil der Kunden ab. Viele bevorzugen Kreditkarte, SEPA-Lastschrift oder Rechnungskauf. Wer nur PayPal anbietet, schliesst einen grossen Teil seiner Zielgruppe vom Kauf aus.",
    },
    {
        label: "Manuelle Zahlungsverwaltung",
        problem: "Zahlungseingaenge per Hand pruefen, Rechnungen manuell erstellen und Mahnungen einzeln versenden — das skaliert nicht. Bei wachsendem Bestellvolumen bricht dieser Prozess zusammen.",
    },
    {
        label: "Veraltete Plugin-Loesungen",
        problem: "WooCommerce- oder Shopify-Plugins fuer Zahlungen sind oft veraltet, schlecht gewartet und ein Sicherheitsrisiko. Updates koennen den Checkout unbemerkt kaputt machen — und Ihre Kunden koennen nicht mehr bezahlen.",
    },
];

export default function StripeProblem() {
    return (
        <section
            aria-labelledby="stripe-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Warum Onlineshops Umsatz verlieren ]
                            </span>
                            <h2
                                id="stripe-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihr Checkout
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    vertreibt Kunden.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Zu wenig Zahlungsarten? Langsamer Checkout?</strong>{" "}
                            Das ist kein kleines Aergernis — es ist der Hauptgrund, warum
                            Onlineshops in Duesseldorf und ganz Deutschland jeden Tag
                            tausende Euro Umsatz liegen lassen. Und die meisten
                            Shopbetreiber wissen es nicht einmal.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was Sie jeden Tag an Umsatz kostet ]
                        </span>
                    </div>
                </ScrollReveal>

                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#FFFFFF]/15">
                    {PAIN_POINTS.map((pain) => (
                        <div
                            key={pain.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#FFFFFF]/15 flex flex-col min-h-72 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <span
                                className="absolute top-6 right-6 text-[clamp(2.5rem,5vw,4rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#000000]/08 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {pain.stat}
                            </span>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-[#FFFFFF]/10 group-hover:bg-[#001F3F] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] uppercase transition-colors duration-300">
                                    {pain.id}
                                </span>
                                <span className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter text-[#FFFFFF] group-hover:text-[#001F3F] transition-colors">
                                    {pain.stat}
                                </span>
                            </div>

                            <h3 className="text-[clamp(1rem,1.8vw,1.35rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-4">
                                {pain.title}
                            </h3>

                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/65 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/20 group-hover:border-[#001F3F]/30 pl-4">
                                {pain.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

                {/* ── LEGACY COMPARISON — AGITATION ── */}
                <ScrollReveal delay={100}>
                    <div className="mt-20 md:mt-28">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-4">
                            [ Warum Ihr aktuelles Zahlungssystem das Problem ist ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Veraltete Zahlungsprozesse
                            <span className="italic font-normal text-[#FFFFFF]/35"> = verlorener Umsatz.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in Marketing, Google Ads und Social Media — und schicken Besucher
                            dann auf einen Checkout, der sie zum Abbruch zwingt. Fehlende Zahlungsmoeglichkeiten,
                            keine Zahlung auf Rechnung, kein SEPA, kein Klarna. Das ist, als wuerden Sie ein
                            Ladengeschaeft eroeffnen, aber nur Bargeld akzeptieren.{" "}
                            <strong>Im Jahr 2026 ist das nicht mehr tragbar.</strong>
                        </p>
                    </div>
                </ScrollReveal>

                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#FFFFFF]/15">
                    {LEGACY_PROBLEMS.map((item) => (
                        <div
                            key={item.label}
                            className="group p-8 md:p-10 border-r border-b border-[#FFFFFF]/15 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <h4 className="text-[13px] font-black tracking-[0.1em] uppercase text-[#FFFFFF] group-hover:text-[#001F3F] transition-colors mb-4">
                                {item.label}
                            </h4>
                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/60 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/15 group-hover:border-[#001F3F]/30 pl-4">
                                {item.problem}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

                {/* ── TRANSITION TO SOLUTION ── */}
                <ScrollReveal delay={120}>
                    <div className="mt-20 md:mt-28 text-center">
                        <p className="text-[clamp(1.2rem,3vw,2rem)] font-black tracking-tight uppercase text-[#FFFFFF]/80 mb-4">
                            Es gibt eine bessere Loesung.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">Stripe Fintech Pipelines</strong> ersetzen
                            Ihre veralteten Zahlungsprozesse durch ein modernes, automatisiertes
                            System — mit allen Zahlungsarten, die Ihre Kunden erwarten,
                            automatischer Rechnungsstellung und maximaler Sicherheit.
                            Optimiert fuer eine reibungslose Zahlungsabwicklung.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
