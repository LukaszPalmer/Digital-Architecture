// src/components/sections/NextCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: SOLUTION — Next.js als technologische Speerspitze.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "NXT-01",
        category: "ROUTING",
        title: "App Router Architecture",
        description:
            "Nested Layouts, Parallel Routes und Intercepting Routes als Fundament jeder modernen Webanwendung. Jede Route ist ein eigenständiges RSC-Subtree — optimale Code-Splitting-Granularität ohne manuelle Konfiguration. Das bedeutet für Sie: Ihre Nutzer laden nur den Code, den sie tatsächlich brauchen. Keine Kilobytes verschwendet, keine Millisekunde verloren.",
        details:
            "Wenn Sie eine professionelle Website erstellen lassen, ist die Routing-Architektur das Fundament. Der Next.js App Router erlaubt verschachtelte Layouts, die beim Seitenwechsel bestehen bleiben — Ihre Navigation, Sidebar und Header werden nie neu geladen. Das Ergebnis: Navigationen fühlen sich instantan an, weil nur der geänderte Content gestreamt wird.",
        specs: ["Nested Layouts", "Parallel Routes", "Route Groups", "Zero-Config Splitting"],
    },
    {
        id: "NXT-02",
        category: "RENDERING",
        title: "React Server Components",
        description:
            "Daten werden auf dem Server gefetcht und als serialisiertes HTML gestreamt. Zero Client-Bundle-Overhead — keine Hydration-Kosten für statische Inhalte. Der entscheidende Unterschied: Während herkömmliche React-Anwendungen das gesamte JavaScript an den Browser senden, rendert RSC auf dem Server und liefert fertiges HTML.",
        details:
            "Dies ist der Kern unserer Strategie, wenn wir Ihre Ladezeit optimieren: React Server Components eliminieren bis zu 90 % des Client-seitigen JavaScripts. Für Nutzer bedeutet das sofortige Sichtbarkeit — kein weißer Bildschirm, kein Spinner, kein Warten. Für Google bedeutet das perfekte Core Web Vitals und ein besseres Ranking.",
        specs: ["Zero Client Bundle", "Streaming HTML", "Suspense Boundaries", "–90 % JS"],
    },
    {
        id: "NXT-03",
        category: "PERFORMANCE",
        title: "Partial Pre-Rendering",
        description:
            "Die statische Shell wird sofort aus dem CDN ausgeliefert — dynamische Inseln werden parallel gestreamt. LCP unter 0.8 Sekunden durch sofortigen First Byte bei gleichzeitiger Dynamik. Das Beste aus Static Site Generation und Server-Side Rendering in einer einzigen Architektur.",
        details:
            "Partial Pre-Rendering ist der Grund, warum moderne Next.js-Websites WordPress-Installationen um Längen schlagen. Statische Elemente wie Navigation, Footer und Layout kommen direkt vom Edge-CDN — in unter 50 Millisekunden. Dynamische Inhalte wie personalisierte Bereiche oder Echtzeit-Daten werden parallel gestreamt, ohne die initiale Ladezeit zu beeinflussen.",
        specs: ["Static Shell CDN", "Dynamic Streaming", "< 0.8s LCP", "Edge-First"],
    },
    {
        id: "NXT-04",
        category: "DATA",
        title: "Server Actions & Mutations",
        description:
            "Formulare und Mutationen direkt in Server-Funktionen — kein separater API-Layer, keine Round-Trips, keine zusätzliche Komplexität. Optimistische UI-Updates sorgen für sofortiges User-Feedback, Progressive Enhancement garantiert Funktionalität auch ohne JavaScript.",
        details:
            "Wenn wir eine moderne Webanwendung programmieren, nutzen wir Server Actions, um die Komplexität drastisch zu reduzieren. Statt separate API-Endpoints zu bauen, wird die Server-Logik direkt in die Komponente integriert. Das reduziert Fehlerquellen, beschleunigt die Entwicklung und senkt damit die Kosten für Ihre professionelle Website.",
        specs: ["No API Layer", "Optimistic UI", "Progressive Enhancement", "Type-Safe"],
    },
    {
        id: "NXT-05",
        category: "EDGE",
        title: "Edge Middleware & Runtime",
        description:
            "Auth-Checks, Rate-Limiting und I18n-Routing auf der Vercel Edge — vor dem Server, global verteilt. Latenz unter 10 Millisekunden durch geografische Nähe zum Nutzer. Ihre Website antwortet, bevor der Nutzer das Laden bemerkt.",
        details:
            "Die Edge-Runtime ist ein entscheidender Faktor, wenn wir Ihre Ladezeit optimieren. Statt jeden Request an einen zentralen Server zu senden, wird die Logik am nächstgelegenen Punkt zum Nutzer ausgeführt. Für einen Nutzer in München bedeutet das: Antwort vom Edge-Node in Frankfurt in unter 10ms — nicht vom Server in den USA in über 200ms.",
        specs: ["Auth at Edge", "Rate Limiting", "I18n Routing", "< 10ms Latenz"],
    },
    {
        id: "NXT-06",
        category: "CACHING",
        title: "Incremental Static Regeneration",
        description:
            "Statische Seiten werden im Hintergrund aktualisiert — ohne kompletten Rebuild, ohne Downtime. On-Demand Revalidierung per Tag oder Zeitintervall ermöglicht Echtzeit-Content bei statischer Performance. Das CDN liefert immer die schnellste Version.",
        details:
            "Incremental Static Regeneration (ISR) bedeutet: Ihre Website hat die Geschwindigkeit einer statischen Seite mit der Aktualität einer dynamischen Anwendung. Wenn Sie einen Blog-Beitrag veröffentlichen oder ein Produkt aktualisieren, wird nur diese eine Seite neu generiert — nicht die gesamte Website. Das spart Server-Ressourcen und hält die Ladezeit konstant niedrig.",
        specs: ["On-Demand ISR", "Tag Revalidation", "Zero Downtime", "CDN-First"],
    },
];

export default function NextCapabilities() {
    return (
        <section
            aria-labelledby="next-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Die Lösung — Next.js Elite Core ]
                            </span>
                            <h2
                                id="next-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Blitzschnelle Ladezeiten
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    für mehr Umsatz.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Engineering-Disziplinen, die zusammen eine
                            unerschütterliche Grundlage für jede professionelle
                            Website bilden. Keine Kompromisse bei der Performance,
                            keine Abstriche bei der Funktionalität.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── INTRO TEXT ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-16 md:mb-20 max-w-4xl">
                        <p className="text-[17px] md:text-[19px] leading-relaxed text-[#000000]/70 mb-6">
                            Wenn Sie eine <strong>professionelle Website erstellen lassen</strong>,
                            sollte Technologie kein Engpass sein — sondern ein Wettbewerbsvorteil.
                            Next.js ist das Framework, das von Unternehmen wie Netflix, TikTok,
                            Notion und Nike eingesetzt wird. Es ist keine experimentelle Technologie,
                            sondern der Industriestandard für performante Webanwendungen.
                        </p>
                        <p className="text-[16px] leading-relaxed text-[#000000]/55">
                            Als spezialisierte <strong>Webagentur für Next.js Webentwicklung</strong> setzen
                            wir auf genau die Technologien, die den Unterschied zwischen einer
                            durchschnittlichen und einer marktführenden Website ausmachen: React
                            Server Components, Static Site Generation, Edge-Runtime und
                            Incremental Static Regeneration.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── CAPABILITIES GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {CAPABILITIES.map((cap) => (
                        <div
                            key={cap.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-120 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Category + ID */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                    {cap.category}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {cap.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.2rem,2.2vw,1.7rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {cap.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-4">
                                {cap.description}
                            </p>

                            {/* Business Detail */}
                            <p className="text-[13px] leading-relaxed text-[#000000]/55 group-hover:text-[#FFFFFF]/65 transition-colors pl-4 mb-8">
                                {cap.details}
                            </p>

                            {/* Specs */}
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {cap.specs.map((spec) => (
                                    <li
                                        key={spec}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" aria-hidden="true" />
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
