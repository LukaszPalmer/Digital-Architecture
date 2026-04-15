// src/components/sections/UXFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (Schema liegt in page.tsx als JSON-LD).
// Keywords: UX Design Agentur Duesseldorf, barrierefreies Webdesign NRW, Design System.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const FAQS = [
    {
        question: "Wie beeinflusst UX Design mein Google Ranking?",
        answer: "Google misst die Nutzererfahrung direkt ueber die Core Web Vitals: Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS) und Interaction to Next Paint (INP). Professionelles UX Design optimiert alle drei Metriken — durch minimalistisches CSS (schnellere Ladezeiten), Layout Reservation (keine visuellen Verschiebungen) und optimierte Interaktionspfade. Seiten mit guten Core Web Vitals ranken nachweislich besser. Zusaetzlich senkt gutes UX Design die Bounce Rate und erhoecht die Verweildauer — beides positive Ranking-Signale.",
    },
    {
        question: "Was ist der Unterschied zwischen Webdesign und UI Design?",
        answer: "Webdesign ist der Oberbegriff fuer die Gestaltung von Webseiten und umfasst Layout, Farben und Typografie. UI Design (User Interface Design) geht tiefer: Es definiert ein systematisches visuelles System mit Design-Tokens, Komponenten-Bibliotheken und Interaction Patterns. Waehrend Webdesign oft einmalig pro Seite entsteht, skaliert UI Design ueber ein Design System — neue Seiten und Features bauen auf bestehenden Komponenten auf, was Entwicklungszeit und Kosten reduziert.",
    },
    {
        question: "Warum ist ein Design System besser als individuelle Templates?",
        answer: "Statische Templates erfordern bei jeder Aenderung manuellen Aufwand und fuehren zu visuellen Inkonsistenzen. Ein Design System mit Figma Variables und einer React Component Library definiert Farben, Typografie und Spacing als wiederverwendbare Tokens. Aenderungen propagieren automatisch — eine Farbaenderung im System aktualisiert jede Komponente. Langfristig spart das 40 % Entwicklungszeit und eliminiert Design-Schulden vollstaendig.",
    },
    {
        question: "Was kostet ein UX/UI Design Projekt bei einer Agentur in Duesseldorf?",
        answer: "Die Kosten haengen vom Projektumfang ab. Ein Design-Audit mit Usability-Analyse beginnt bei wenigen Tagen Aufwand. Ein vollstaendiges UX-Redesign mit User Research, Wireframing, Hi-Fi Design und Developer-Handoff umfasst typischerweise 3–6 Wochen. Als UX Design Agentur in Duesseldorf bieten wir transparente Pauschalangebote — kein Stundensatz-Roulette. Jedes Projekt beginnt mit einem kostenfreien Erstgespraech zur Bedarfsanalyse.",
    },
    {
        question: "Wie stellt ihr sicher, dass das Design barrierefrei ist?",
        answer: "Barrierefreiheit ist fester Bestandteil unseres Design-Prozesses — kein Nachgedanke. Wir pruefen alle Farbkombinationen gegen WCAG 2.1 AAA (Kontrastverhaeltnis >7:1), implementieren vollstaendiges Fokus-Management fuer Tastaturnavigation und nutzen semantisches HTML fuer Screenreader-Kompatibilitaet. Das Barrierefreiheitsstaerkungsgesetz (BFSG) verpflichtet ab 2025 viele digitale Produkte zur Barrierefreiheit. Wir liefern konforme Interfaces — getestet mit NVDA, VoiceOver und axe-core.",
    },
];

export default function UXFAQ() {
    return (
        <section
            aria-labelledby="ux-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — UX/UI Design & Interface Construction ]
                            </span>
                            <h2
                                id="ux-faq-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihre Fragen,
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    unsere Antworten.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Die wichtigsten Fragen rund um UX/UI Design,
                            Design Systems, Core Web Vitals und
                            barrierefreies Webdesign — verstaendlich
                            erklaert fuer Entscheider und Entwickler.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── FAQ GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#000000]">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex items-start gap-4 mb-5">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-2.5 py-1 text-[10px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300 shrink-0 mt-0.5">
                                    F{String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="text-[clamp(1rem,1.8vw,1.3rem)] font-black tracking-tighter leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors">
                                    {faq.question}
                                </h3>
                            </div>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 ml-10">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

                {/* ── A11Y / PERFORMANCE NOTE ── */}
                <ScrollReveal delay={80}>
                    <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                        <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                            <strong className="text-[#000000]/80">Performance & Barrierefreiheit:</strong> Diese
                            Seite selbst demonstriert unsere Design-Prinzipien: Server-Side
                            Rendering (RSC) fuer 0ms Total Blocking Time, semantisches HTML
                            fuer Screenreader-Kompatibilitaet, kein Layout Shift (CLS 0) durch
                            reservierte Platzhalter und minimalistisches Tailwind CSS statt
                            Runtime-CSS-in-JS. Kontrastverhaaltnisse ueber 7:1 fuer WCAG AAA.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
