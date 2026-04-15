// src/components/sections/StripeProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Zahlungs-Analyse",
        description:
            "Wir schauen uns an, wie Ihr Onlineshop aktuell Zahlungen abwickelt: Welche Zahlungsarten bieten Sie an? Wo brechen Kunden den Kauf ab? Welche Zahlungsmoeglichkeiten fehlen? Am Ende wissen Sie genau, wo Umsatz verloren geht.",
        duration: "TAG 1",
        tag: "ANALYSE",
    },
    {
        step: "02",
        title: "Stripe einrichten",
        description:
            "Wir richten Stripe fuer Ihren Onlineshop ein: Alle gewuenschten Zahlungsarten, automatische Steuerberechnung, Betrugsschutz-Regeln und — falls gewuenscht — ein Kunden-Portal, ueber das Ihre Kaeufer Rechnungen und Abos selbst verwalten koennen.",
        duration: "TAGE 2–3",
        tag: "EINRICHTUNG",
    },
    {
        step: "03",
        title: "Integration entwickeln",
        description:
            "Wir verbinden Stripe mit Ihrem Onlineshop: Der Checkout wird integriert, automatische Bestellbestaetigung eingerichtet, Rechnungen werden automatisch erstellt und bei Abo-Zahlungen laeuft alles im Hintergrund — ohne manuellen Eingriff.",
        duration: "TAGE 4–8",
        tag: "ENTWICKLUNG",
    },
    {
        step: "04",
        title: "Testen & Live-Schaltung",
        description:
            "Bevor echtes Geld fliesst, testen wir jeden Zahlungsablauf gruendlich: Alle Zahlungsarten, fehlgeschlagene Zahlungen, Rueckerstattungen und Abo-Kuendigungen. Erst wenn alles einwandfrei funktioniert, schalten wir Ihren Onlineshop live.",
        duration: "TAGE 9–10",
        tag: "GO-LIVE",
    },
];

export default function StripeProcess() {
    return (
        <section
            aria-labelledby="stripe-process-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/50 uppercase block mb-8">
                                [ Unser Prozess — Von der Analyse bis zum Live-Shop ]
                            </span>
                            <h2
                                id="stripe-process-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                In 10 Tagen zu
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/50">
                                    professionellen Zahlungen.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/25 pl-6">
                            Vier klare Schritte von der ersten Analyse bis
                            zum fertigen Zahlungssystem — damit Ihr
                            Onlineshop alle Zahlungsarten anbietet, die
                            Ihre Kunden erwarten.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PROCESS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#FFFFFF]/20">
                    {PROCESS_STEPS.map((item) => (
                        <div
                            key={item.step}
                            className="group relative p-8 md:p-10 border-r border-b border-[#FFFFFF]/20 flex flex-col min-h-100 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <span
                                className="absolute top-6 right-6 text-[clamp(3rem,5vw,4.5rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#001F3F]/08 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {item.step}
                            </span>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="bg-[#FFFFFF]/15 group-hover:bg-[#001F3F]/10 px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {item.tag}
                                </span>
                                <span className="text-[9px] font-mono font-bold text-[#FFFFFF]/45 group-hover:text-[#001F3F]/55 tracking-[0.3em] uppercase transition-colors">
                                    {item.duration}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-5">
                                {item.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/70 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/25 group-hover:border-[#001F3F]/30 pl-4 mt-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
