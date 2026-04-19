// src/components/sections/NextFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion für Rich Snippets (JSON-LD FAQPage Schema liegt in page.tsx).

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const FAQ_ITEMS = [
    {
        id: "FAQ-01",
        question: "Was kostet es, eine professionelle Website erstellen zu lassen?",
        answer:
            "Die Kosten für eine professionelle Website mit Next.js richten sich nach dem Projektumfang. Eine statische Corporate-Website mit 5–10 Seiten, optimierter Ladezeit und grünen Core Web Vitals liegt in einem anderen Bereich als eine komplexe Webanwendung mit Datenbank-Anbindung, Authentifizierung und Echtzeit-Features. Wir erstellen ein transparentes, detailliertes Angebot nach einem kostenlosen Erstgespräch — ohne versteckte Kosten, ohne Überraschungen. Was Sie in jedem Fall erhalten: eine Website, die technisch auf dem höchsten Niveau ist und sich durch messbar bessere Performance — im Labor und bei echten Nutzern — von günstigeren Alternativen unterscheidet.",
    },
    {
        id: "FAQ-02",
        question: "Warum ist meine Website zu langsam und wie kann ich die Ladezeit optimieren?",
        answer:
            "Die häufigsten Ursachen für langsame Websites sind: zu viel Client-side JavaScript (oft durch veraltete Frameworks wie jQuery oder reine React-SPAs), nicht optimierte Bilder ohne next/image, fehlende Server-Side Rendering, kein CDN-Caching und blockierende Drittanbieter-Skripte. Mit Next.js und React Server Components reduzieren wir das JavaScript-Bundle um bis zu 90 %. Static Site Generation und Edge-Runtime sorgen dafür, dass Ihre Seite in unter einer Sekunde lädt. Das Ergebnis: LCP unter 0,8 Sekunden, 0ms Total Blocking Time und grüne Core Web Vitals — messbar im Lab-Test und, was wirklich zählt, in den Felddaten echter Nutzer in Ihrer Google Search Console.",
    },
    {
        id: "FAQ-03",
        question: "Was ist der Vorteil von Next.js gegenüber WordPress oder anderen CMS?",
        answer:
            "Der fundamentale Unterschied: Next.js liefert durch Static Site Generation, React Server Components und Edge-Runtime deutlich schnellere Ladezeiten als jedes PHP-basierte CMS. Während WordPress bei jedem Seitenaufruf PHP-Code auf dem Server ausführen muss und dabei hunderte Kilobytes an ungenutztem Plugin-JavaScript mitlädt, liefert Next.js vorgerenderte HTML-Seiten direkt vom CDN — in unter 50 Millisekunden. Zusätzlich ermöglicht Incremental Static Regeneration, dass Inhalte in Echtzeit aktualisiert werden, ohne die gesamte Website neu zu bauen. Für SEO bedeutet das: bessere Core Web Vitals, besseres Google-Ranking, mehr organischer Traffic.",
    },
    {
        id: "FAQ-04",
        question: "Warum versprechen Sie keinen Lighthouse-Score von 100?",
        answer:
            "Weil ein perfekter Lighthouse-Score ein Laborwert ist — aufgenommen auf einem simulierten Gerät, in einer simulierten Netzwerkumgebung, zu einem einzigen Zeitpunkt. In der Realität schwanken Lab-Werte bereits durch kleine Einflüsse: ein neues Marketing-Pixel, ein größeres Hero-Bild, ein Analytics-Skript, ein CDN-Umschalter. Ein Score von 100 konstant zu halten ist sehr schwer — und für sich allein genommen auch nicht das, worauf Google Ihr Ranking stützt. Was tatsächlich zählt, sind die Core Web Vitals Ihrer echten Besucher: LCP, INP und CLS, gemessen über 28 Tage auf deren Geräten. Diese Felddaten (CrUX) erscheinen im Performance-Report der Google Search Console und sind der eigentliche Ranking-Faktor. Unser Versprechen lautet deshalb nicht 'Lighthouse 100', sondern: Ihre Core Web Vitals landen im grünen Bereich — dort, wo Google sie bewertet und Ihre Nutzer sie spüren.",
    },
    {
        id: "FAQ-05",
        question: "Wie lange dauert es, eine moderne Webanwendung programmieren zu lassen?",
        answer:
            "Eine professionelle Next.js-Website kann je nach Umfang in 2 bis 8 Wochen fertiggestellt werden. Unser Prozess umfasst vier Phasen: Performance-Audit (Tag 1), Architektur-Design (Tage 2–3), Implementierung mit React Server Components (Tage 4–8) und Lighthouse-Verifikation (Tage 9–10). Für größere Projekte mit Datenbank-Integration, Authentifizierung oder Multi-Tenant-Architektur planen wir entsprechend mehr Zeit ein. Was Sie nicht erleben werden: endlose Feedback-Schleifen oder Scope-Creep. Wir arbeiten mit klaren Milestones und transparenter Kommunikation.",
    },
    {
        id: "FAQ-06",
        question: "Was ist eine Webagentur und warum sollte ich eine spezialisierte Agentur wählen?",
        answer:
            "Eine Webagentur ist ein Dienstleister, der Unternehmen bei der Konzeption, Gestaltung und technischen Umsetzung von Websites und Webanwendungen unterstützt. Der entscheidende Unterschied liegt in der Spezialisierung: Während eine Generalist-Agentur Websites mit WordPress, Shopify oder Baukasten-Systemen erstellt, setzen wir ausschließlich auf Next.js — das Framework, das von Netflix, TikTok und Nike eingesetzt wird. Diese Spezialisierung ermöglicht es uns, Performance-Ziele zu setzen, die eine Generalist-Agentur nicht bieten kann: LCP unter 0,8 Sekunden, 0ms Total Blocking Time und Core Web Vitals, die bei echten Nutzern in der Google Search Console im grünen Bereich landen.",
    },
    {
        id: "FAQ-07",
        question: "Was sind Static Site Generation, Edge-Runtime und Incremental Static Regeneration?",
        answer:
            "Diese drei Technologien bilden das Performance-Fundament moderner Next.js-Websites: Static Site Generation (SSG) rendert Ihre Seiten zur Build-Zeit und liefert fertiges HTML vom CDN — keine Server-Berechnung bei jedem Aufruf. Edge-Runtime führt Code am nächstgelegenen Server-Standort zum Nutzer aus — Antwortzeiten unter 10 Millisekunden statt 200+ ms bei zentralen Servern. Incremental Static Regeneration (ISR) aktualisiert einzelne Seiten im Hintergrund, ohne die gesamte Website neu zu bauen — Sie erhalten die Geschwindigkeit statischer Seiten mit der Aktualität dynamischer Inhalte.",
    },
    {
        id: "FAQ-08",
        question: "Bieten Sie auch Webdesign an oder nur Entwicklung?",
        answer:
            "Wir bieten beides — integriert in einen einzigen Prozess. Wenn Sie eine professionelle Website erstellen lassen, erhalten Sie nicht nur technische Exzellenz, sondern auch ein durchdachtes UX/UI-Design, das auf Conversion optimiert ist. Unser Design-Ansatz folgt dabei denselben Performance-Prinzipien wie unsere Entwicklung: Jedes Gestaltungselement muss einen Zweck erfüllen, jede Animation muss die User Experience verbessern, nicht verschlechtern. Das Ergebnis ist Webdesign, das nicht nur gut aussieht, sondern auch schnell lädt.",
    },
];

export default function NextFAQ() {
    return (
        <section
            aria-labelledby="next-faq-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Häufig gestellte Fragen ]
                            </span>
                            <h2
                                id="next-faq-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Ihre Fragen,
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    unsere Antworten.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/20 pl-6">
                            Alles, was Sie wissen müssen, bevor Sie eine
                            professionelle Website erstellen lassen — von
                            Kosten über Technologie bis zur Timeline.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── FAQ GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#FFFFFF]/15">
                    {FAQ_ITEMS.map((faq) => (
                        <div
                            key={faq.id}
                            className="group p-8 md:p-10 border-r border-b border-[#FFFFFF]/15 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-[#FFFFFF]/10 group-hover:bg-[#001F3F] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#FFFFFF] uppercase transition-colors duration-300">
                                    {faq.id}
                                </span>
                            </div>

                            <h3 className="text-[clamp(1rem,1.8vw,1.3rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-5">
                                {faq.question}
                            </h3>

                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/60 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/15 group-hover:border-[#001F3F]/30 pl-4">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
