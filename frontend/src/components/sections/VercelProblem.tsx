// src/components/sections/VercelProblem.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM & AGITATION — "Die Warte-Sekunde" & Distanz-Strafe.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const PAIN_POINTS = [
    {
        id: "PAIN-01",
        stat: "2.8s",
        title: "Die Warte-Sekunde im Ausland",
        description:
            "Ihr Server steht in Frankfurt. Ein Kunde in New York wartet allein 180ms fuer den TCP-Handshake und nochmal 180ms fuer das erste Byte — vor jedem Request. In einer Welt von Glasfaser, 5G und TikTok-Geschwindigkeit ist eine Wartesekunde eine Ewigkeit. Nutzer sehen das Spinner-Rad, schliessen den Tab und kommen nie wieder.",
    },
    {
        id: "PAIN-02",
        stat: "−20 %",
        title: "Conversion-Verlust pro Sekunde",
        description:
            "Google, Amazon und Akamai liefern seit Jahren denselben Befund: Jede zusaetzliche Sekunde Ladezeit kostet 7–20 % Conversion. Bei 500.000 EUR Jahresumsatz bedeutet das bis zu 100.000 EUR Umsatzverlust — allein weil eine Server-Anfrage ueber den Atlantik muss. Distanz ist nicht nur Latenz, Distanz ist Umsatz.",
    },
    {
        id: "PAIN-03",
        stat: "CWV",
        title: "Core-Web-Vitals-Strafe von Google",
        description:
            "Seit den Core Web Vitals als Ranking-Signal im Google-Algorithmus zaehlen, werden langsame Seiten unsichtbar. LCP ueber 2.5s, INP ueber 200ms oder CLS ueber 0.1 bedeutet aktives Zurueckstufen. Ihre Konkurrenz mit Edge-Deployment rankt hoeher — nicht wegen besserem Content, sondern wegen schnellerer Physik.",
    },
    {
        id: "PAIN-04",
        stat: "800ms",
        title: "Cold Starts auf Node.js-Lambdas",
        description:
            "Klassische Serverless-Funktionen auf Node.js brauchen 200–800ms fuer einen Kaltstart — bei jeder ersten Anfrage nach Idle-Zeit. Ihr Checkout-Endpoint, Ihre Auth-Route, Ihre Middleware: Alle zahlen die Cold-Start-Steuer. Ergebnis: Ladezeit-Peaks, fuer die niemand einen Grund im Code findet.",
    },
];

const LEGACY_PROBLEMS = [
    {
        label: "Single-Region-Hosting",
        problem:
            "Klassische Hosting-Anbieter betreiben einen einzigen Serverstandort — typisch Frankfurt oder Amsterdam. Ein Nutzer in Los Angeles zahlt fuer jede Anfrage 150–200ms allein fuer die Distanz, bevor Ihre Anwendung auch nur einen Byte an Logik ausgefuehrt hat. Die Physik laesst sich mit besserer CPU nicht schlagen — nur mit naeheren Servern.",
    },
    {
        label: "Klassisches CDN ohne Dynamik",
        problem:
            "Ein reines CDN cached statische Assets (Bilder, CSS, JS), aber dynamisches HTML, Auth-Checks und personalisierte Inhalte muessen weiterhin den weiten Weg zum Origin nehmen. Das Ergebnis: Schnelle Bilder, langsame Seiten. Vercel Edge Functions loesen dieses Problem — auch Logik laeuft am Edge, nicht nur Assets.",
    },
    {
        label: "Keine Middleware-Personalisierung",
        problem:
            "Ohne Edge Middleware passiert Personalisierung — Sprache, Waehrung, A/B-Variante — erst im Browser via JavaScript. Das erzeugt Flicker, Layout-Shifts und Performance-Kosten. Mit Edge Middleware entscheidet Vercel bereits am Netzwerkrand, bevor der Browser das erste Byte empfaengt — flicker-frei und ohne Performance-Penalty.",
    },
    {
        label: "Manuelle TLS- & DNS-Bastelei",
        problem:
            "Let's-Encrypt-Zertifikate manuell renewen, DNS-Eintraege in drei Providern synchron halten, DDoS-Schutz als teures Add-on buchen — das ist DevOps-Steinzeit. Vercel provisioniert SSL automatisch, verwaltet DNS ueber die Plattform und bietet DDoS-Mitigation auf Netzwerkebene — ohne Konfigurations-Aufwand oder monatliche Zusatzkosten.",
    },
];

export default function VercelProblem() {
    return (
        <section
            aria-labelledby="vercel-problem-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Das Problem — Distanz ist der Feind der Conversion ]
                            </span>
                            <h2
                                id="vercel-problem-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wenn die Seite kriecht,
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    stirbt die Conversion.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/60 leading-relaxed max-w-md border-l-2 border-[#FFFFFF]/20 pl-6">
                            <strong className="text-[#FFFFFF]/80">Geschwindigkeit ist kein Feature — sie ist der Kanal.</strong>{" "}
                            Langsame Seiten werden von Google abgestraft, von
                            internationalen Nutzern verlassen und von jedem
                            Wettbewerber mit Edge-Infrastruktur ueberholt. Ein
                            einziger Serverstandort in Deutschland ist 2026 kein
                            globales Deployment — es ist ein Nadeloehr.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PAIN POINTS ── */}
                <ScrollReveal delay={60}>
                    <div className="mb-12 md:mb-16">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                            [ Was langsame Infrastruktur jeden Monat kostet ]
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
                                className="absolute top-6 right-6 text-[clamp(2.5rem,5vw,4rem)] font-black text-[#FFFFFF]/[0.08] group-hover:text-[#000000]/[0.08] leading-none tracking-tighter select-none transition-colors"
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
                            [ Warum klassisches Hosting und Single-Region-CDN das Problem sind ]
                        </span>
                        <h3 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#FFFFFF] tracking-[-0.02em] uppercase leading-[0.92] mb-12">
                            Ein Server, ein Kontinent
                            <span className="italic font-normal text-[#FFFFFF]/35"> = globaler Flaschenhals.</span>
                        </h3>
                        <p className="text-[16px] leading-relaxed text-[#FFFFFF]/60 max-w-3xl mb-12">
                            Sie investieren in SEA-Kampagnen fuer den US-Markt,
                            Social-Media-Budget fuer APAC und setzen auf
                            internationalen Wachstum — und parken Ihre Webseite auf
                            einem einzigen Rechenzentrum in Frankfurt. Wenn Ihre
                            Seite in San Francisco vier Sekunden laedt, ist das kein
                            Hosting-Problem, sondern ein Architektur-Problem.{" "}
                            <strong>Im Jahr 2026 entscheidet die Deployment-Architektur ueber den globalen Marktanteil.</strong>
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

                {/* ── BRIDGE TO SOLUTION ── */}
                <ScrollReveal delay={120}>
                    <div className="mt-20 md:mt-28 text-center">
                        <p className="text-[clamp(1.2rem,3vw,2rem)] font-black tracking-tight uppercase text-[#FFFFFF]/80 mb-4">
                            Es gibt eine Infrastruktur ohne geografische Grenzen.
                        </p>
                        <p className="text-[16px] text-[#FFFFFF]/50 max-w-2xl mx-auto leading-relaxed">
                            <strong className="text-[#FFFFFF]/70">Vercel Edge Deployment mit Partial Prerendering, Edge Runtime und 300+ globalen Nodes</strong>{" "}
                            hebt die Distanz als Latenz-Faktor auf. Ihre Webseite
                            existiert nicht mehr in Frankfurt — sie existiert
                            ueberall gleichzeitig. Deployed, gewartet und ueberwacht
                            aus Duesseldorf fuer Unternehmen in ganz NRW.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
