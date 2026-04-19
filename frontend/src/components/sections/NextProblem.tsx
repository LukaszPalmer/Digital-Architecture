// src/components/sections/NextProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: AGITATION — Frust über verlorene Kunden durch langsame Websites.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "53 %",
        title: "Absprungrate bei > 3s Ladezeit",
        description:
            "Mehr als die Hälfte aller mobilen Nutzer verlassen eine Website, die länger als drei Sekunden zum Laden braucht. Jede weitere Sekunde erhöht die Absprungrate um weitere 32 %. Wenn Ihre Website zu langsam ist, verlieren Sie täglich potenzielle Kunden — ohne es zu bemerken.",
    },
    {
        id: "PAIN-02",
        stat: "–7 %",
        title: "Conversion pro Sekunde Verzögerung",
        description:
            "Amazon hat ermittelt, dass jede 100 Millisekunden zusätzliche Ladezeit den Umsatz um 1 % senkt. Für die meisten Unternehmen bedeutet eine Sekunde mehr Ladezeit einen messbaren Rückgang der Conversion-Rate um bis zu 7 %. Langsame Seiten kosten buchstäblich Geld.",
    },
    {
        id: "PAIN-03",
        stat: "–53 Pl.",
        title: "Google-Ranking-Verlust",
        description:
            "Seit Googles Core Web Vitals Update sind Ladezeit, Interaktivität und visuelle Stabilität direkte Ranking-Faktoren. Websites mit schlechten LCP- und CLS-Werten werden aktiv in den Suchergebnissen heruntergestuft — Ihre Konkurrenz überholt Sie, ohne besseren Content zu haben.",
    },
    {
        id: "PAIN-04",
        stat: "2.4 MB",
        title: "Durchschnittliches JS-Bundle",
        description:
            "Die durchschnittliche Website lädt über 2 MB JavaScript — der Großteil davon wird nie ausgeführt. Veraltete Frameworks wie jQuery oder Client-seitig gerenderte React-SPAs senden komplette Bundles an den Browser, bevor auch nur ein Pixel sichtbar wird.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "WordPress / PHP-CMS",
        problem: "Jeder Seitenaufruf führt Server-seitigen PHP-Code aus. Kein Edge-Caching möglich, keine Server Components. Plugins blähen das JavaScript-Bundle auf — typische Core Web Vitals liegen tief im roten Bereich der Google Search Console.",
    },
    {
        label: "React SPA (Create React App)",
        problem: "Die gesamte Anwendung wird als ein JavaScript-Bundle ausgeliefert. Leerer HTML-Body bis Hydration abgeschlossen. Kein SEO ohne aufwändige Workarounds. LCP regelmäßig über 4 Sekunden.",
    },
    {
        label: "Baukasten-Systeme (Wix, Squarespace)",
        problem: "Proprietärer Code, kein Zugang zum Quelltext. Keine Kontrolle über Ladezeit, Rendering oder Caching. Hunderte KB an ungenutztem CSS und JavaScript. Professionelle Skalierung unmöglich.",
    },
    {
        label: "Veraltete SSR-Frameworks",
        problem: "Full-Page Hydration bei jedem Request. Keine granulare Streaming-Fähigkeit, kein Partial Pre-Rendering. Server-Kosten steigen linear mit Traffic — keine Edge-Optimierung möglich.",
    },
];

export default function NextProblem() {
    return (
        <section
            aria-labelledby="next-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Warum Geschwindigkeit entscheidet ]
                            </span>
                            <h2
                                id="next-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihre Website
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    verliert Kunden.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Website zu langsam?</strong> Das
                            ist kein ästhetisches Problem — es ist ein
                            wirtschaftlicher Notfall. Jede Millisekunde zählt,
                            jede Sekunde kostet Umsatz, jede schlechte
                            Core-Web-Vital-Metrik drückt Ihr Google-Ranking
                            nach unten.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Die Kosten langsamer Ladezeiten — in Zahlen ]
                        </span>
                    </div>
                </ScrollReveal>

                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#FFFFFF]/15">
                    {PAIN_POINTS.map((pain) => (
                        <div
                            key={pain.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#FFFFFF]/15 flex flex-col min-h-72 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Ghost Stat */}
                            <span
                                className="absolute top-6 right-6 text-[clamp(2.5rem,5vw,4rem)] font-black text-[#FFFFFF]/08 group-hover:text-[#000000]/08 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {pain.stat}
                            </span>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-[#FFFFFF]/10 group-hover:bg-[#001F3F] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#FFFFFF] uppercase transition-colors duration-300">
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

                {/* ── LEGACY COMPARISON ── */}
                <ScrollReveal delay={100}>
                    <div className="mt-20 md:mt-28">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-4">
                            [ Warum Ihr aktueller Stack das Problem ist ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Veraltete Technologie
                            <span className="italic font-normal text-[#FFFFFF]/35"> = verlorener Umsatz.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Viele Unternehmen investieren in Marketing, SEA und Social Media — nur um Besucher
                            auf eine Website zu leiten, die zu langsam lädt. Das ist, als würde man
                            Werbung für ein Geschäft schalten, dessen Tür klemmt. Die Besucher kommen,
                            aber sie gehen sofort wieder. Der Fehler liegt nicht im Marketing.
                            <strong> Der Fehler liegt in der Technologie.</strong>
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
                            Es gibt eine Lösung.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">Next.js Elite Core</strong> ist
                            keine marginale Verbesserung — es ist ein vollständiger
                            Technologie-Wechsel. Server-First Architektur, die Ihre
                            Ladezeit optimiert, Ihr Google-Ranking hebt und Ihre
                            Conversion-Rate messbar steigert.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
