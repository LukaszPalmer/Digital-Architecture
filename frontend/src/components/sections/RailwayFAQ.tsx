// src/components/sections/RailwayFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (FAQPage Schema liegt in page.tsx als JSON-LD).
// Semantisches HTML: details/summary fuer native A11y und Keyboard-Navigation.

import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQS = [
    {
        question: "Was ist der Vorteil von Railway gegenueber herkoemmlichen Servern?",
        answer:
            "Ein klassischer Root- oder vServer ist ein statisches Rechteck: feste CPU, feste RAM, feste Disk — und die komplette Wartung (Security-Patches, Kernel-Updates, TLS-Renewal, Backup-Strategie) liegt bei Ihnen. Wenn Traffic spitzt, stuerzt er ab. Railway ist containerisiert und elastisch: Jeder Service laeuft in einem isolierten Docker-Container, skaliert horizontal bei Last und wird zentral gepatcht. Ein Git-Push ersetzt SSH-Deployment-Scripte, ein Health-Check ersetzt manuelles Neustarten und ein Dashboard ersetzt tail -f /var/log/syslog. Ergebnis: Sie schreiben Code, Railway betreibt die Infrastruktur — und Ihr Team gewinnt die Zeit zurueck, die bisher in DevOps-Wartung verlorengegangen ist.",
    },
    {
        question: "Wie sicher sind meine Daten in der Railway Cloud?",
        answer:
            "Railway bietet mehrere Sicherheitsebenen: Container-Isolation ueber Firecracker-MicroVMs, verschluesseltes Private Networking zwischen Services (kein Traffic ueber das oeffentliche Internet), automatische TLS-Zertifikate fuer alle Public Endpoints, Secret-Management fuer Environment-Variablen (verschluesselt at-rest und nie im Build-Log sichtbar) und regelmaessige Security-Audits. Fuer DSGVO-Compliance kann die EU-Region (Frankfurt/Amsterdam) gewaehlt werden — Ihre Daten verlassen den europaeischen Rechtsraum nicht. Backups, Point-in-Time-Recovery fuer Datenbanken und Volume-Snapshots sind integriert. Wer dennoch strengere Compliance-Anforderungen hat, kombiniert Railway mit externen DSGVO-zertifizierten Datenbank-Providern wie MongoDB Atlas EU.",
    },
    {
        question: "Ab wann brauche ich eine Microservice-Architektur?",
        answer:
            "Die ehrliche Antwort: spaeter, als das Internet behauptet. Ein gut strukturierter Monolith traegt die meisten Startups bis weit jenseits von 10.000 aktiven Nutzern. Der Wechsel zu Microservices lohnt sich, wenn mindestens eines dieser Kriterien zutrifft: (1) Mehrere Teams deployen unabhaengig voneinander und blockieren sich gegenseitig, (2) einzelne Bereiche Ihrer App haben fundamental unterschiedliche Skalierungs-Profile (z.B. CPU-heavy Video-Encoding vs. IO-heavy API), (3) Teile der Logik brauchen andere Sprachen oder Libraries, (4) ein Bug in einem Feature darf niemals die gesamte App reissen. Railway macht beide Welten moeglich — Monolith heute, Microservice morgen, ohne Infrastruktur-Wechsel. Der Container bleibt derselbe, nur die Anzahl der Services waechst.",
    },
    {
        question: "Wie verhindert Railway 502-Gateway-Errors und Downtime?",
        answer:
            "Durch drei Mechanismen: Erstens Health-Check-basiertes Rollout — ein neuer Container geht erst dann live, wenn sein /healthz-Endpoint 200 OK antwortet; scheitert er, bleibt die alte Version aktiv. Zweitens Blue-Green-Deployments — die alte Version laeuft weiter, bis die neue nachweislich gesund ist, dann wird atomic umgeschaltet, ohne dass ein einziger Request verloren geht. Drittens Auto-Restart-Policies — crasht ein Container, startet Railway ihn sofort neu und routet Traffic zwischenzeitlich auf gesunde Replicas. Zusaetzlich: Horizontal Scaling sorgt dafuer, dass ein einzelner Ausfall nie den gesamten Service lahmlegt, sondern nur einen von n Replicas betrifft. Echte 99.99% Uptime sind so erreichbar, ohne dass Ihr Team naechtliche Bereitschaft schieben muss.",
    },
    {
        question: "Kann ich meine bestehende Node.js- oder Python-App ohne Refactoring auf Railway migrieren?",
        answer:
            "Ja, in den meisten Faellen. Wir migrieren in vier Phasen ohne Produktions-Unterbrechung: Erstens Build-System-Analyse (Dockerfile oder Nixpacks-Autodetect), Environment-Variable-Audit und Service-Topologie-Design. Zweitens Staging-Deployment auf Railway mit identischer Konfiguration wie Production — inklusive Datenbank-Replikation fuer realistische Tests. Drittens Lasttest mit k6 oder Artillery, Validierung der Health-Checks und Auto-Scaling-Verhalten. Viertens DNS-Cutover mit Zero-Downtime und einer Rollback-Option innerhalb von 30 Sekunden. Typische Migrations-Dauer fuer eine Standard-Node.js-API: drei bis fuenf Arbeitstage, bei komplexeren Multi-Service-Setups ein bis zwei Wochen. Kunden in Duesseldorf und NRW erhalten auf Wunsch Vor-Ort-Betreuung waehrend des Cutovers.",
    },
];

export default function RailwayFAQ() {
    return (
        <section
            aria-labelledby="railway-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — Railway Cloud & Microservice Hosting ]
                            </span>
                            <h2
                                id="railway-faq-heading"
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
                            Die wichtigsten Fragen rund um Container-Orchestrierung,
                            Auto-Scaling, DSGVO-Compliance und Zero-Downtime-Migration
                            — vom CTO bis zum Founder.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── FAQ LIST — semantisches details/summary fuer A11y ── */}
                <ScrollReveal delay={60}>
                    <div className="border-t border-[#000000]" role="list">
                        {FAQS.map((faq, index) => (
                            <details
                                key={index}
                                role="listitem"
                                className="group border-b border-[#000000] open:bg-[#001F3F] transition-colors duration-300"
                            >
                                <summary className="flex items-start gap-5 px-6 md:px-10 py-7 md:py-9 cursor-pointer list-none focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#001F3F] group-open:focus-visible:outline-[#FFFFFF]">
                                    <span className="bg-[#001F3F] group-open:bg-[#FFFFFF] px-2.5 py-1 text-[10px] font-mono font-black tracking-widest text-[#FFFFFF] group-open:text-[#001F3F] uppercase shrink-0 mt-1 transition-colors duration-300">
                                        F{String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="flex-1 text-[clamp(1rem,1.8vw,1.4rem)] font-black tracking-tighter leading-tight text-[#000000] group-open:text-[#FFFFFF] transition-colors">
                                        {faq.question}
                                    </h3>
                                    <span
                                        aria-hidden="true"
                                        className="text-[20px] md:text-[24px] font-black text-[#001F3F] group-open:text-[#FFFFFF] group-open:rotate-45 transition-transform duration-300 shrink-0 mt-0 leading-none"
                                    >
                                        +
                                    </span>
                                </summary>
                                <div className="px-6 md:px-10 pb-8 md:pb-10">
                                    <p className="text-[14px] md:text-[15px] leading-relaxed text-[#000000]/70 group-open:text-[#FFFFFF]/85 border-l-2 border-[#001F3F] group-open:border-[#FFFFFF]/40 pl-4 md:ml-12 max-w-4xl transition-colors duration-300">
                                        {faq.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </ScrollReveal>

                {/* ── A11Y / TECHNICAL SEO NOTE ── */}
                <ScrollReveal delay={80}>
                    <div className="mt-12 md:mt-16 pt-8 border-t border-[#000000]/10">
                        <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-3xl">
                            <strong className="text-[#000000]/80">Barrierefreiheit & Schema:</strong>{" "}
                            Diese FAQ-Sektion nutzt semantische{" "}
                            <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">
                                &lt;details&gt;
                            </code>{" "}
                            /{" "}
                            <code className="text-[12px] font-mono bg-[#001F3F]/5 px-1.5 py-0.5">
                                &lt;summary&gt;
                            </code>{" "}
                            Elemente — voll tastaturzugaenglich, ohne JavaScript funktionsfaehig
                            und mit FAQPage-Schema (JSON-LD) fuer Google Rich Snippets ausgezeichnet.
                            So erscheinen die Antworten direkt in den Suchergebnissen.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
