// src/components/sections/ChatbotFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (Schema liegt in page.tsx als JSON-LD).

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const FAQS = [
    {
        question: "Was kostet ein KI-Chatbot fuer meinen Onlineshop?",
        answer: "Die Kosten haengen vom Umfang ab: Ein einfacher FAQ-Bot ist guenstiger als ein vollintegrierter KI-Assistent mit CRM-Anbindung und Multi-Channel-Deployment. Nach einem kostenlosen Erstgespraech erstellen wir ein transparentes Angebot — basierend auf Ihren Anforderungen und dem gewuenschten Funktionsumfang.",
    },
    {
        question: "Wie lange dauert es, einen KI-Assistenten zu erstellen?",
        answer: "Von der Use-Case-Analyse bis zum Go-Live rechnen wir mit etwa 15 Arbeitstagen. Einfache FAQ-Chatbots koennen schneller live gehen, komplexere Integrationen mit CRM- und ERP-Anbindung benoetigen entsprechend mehr Zeit. Nach dem Launch optimieren wir den Bot kontinuierlich anhand der Chat-Logs.",
    },
    {
        question: "Kann der Chatbot meinen Kundensupport wirklich automatisieren?",
        answer: "Ja — zielt auf eine deutliche Entlastung Ihres Support-Teams ab. Typische Aufgaben wie FAQ-Beantwortung, Bestellstatus-Abfragen, Terminbuchungen und Lead-Qualifizierung laufen vollautomatisch. Bei komplexen Anliegen uebergibt der Bot den Gespraechskontext nahtlos an einen menschlichen Agenten.",
    },
    {
        question: "Ist der KI-Chatbot DSGVO-konform?",
        answer: "Ja. Alle Daten werden auf europaeischen Servern verarbeitet und verschluesselt gespeichert. Personenbezogene Daten koennen jederzeit geloescht werden. Wir koennen den Chatbot so konfigurieren, dass keine personenbezogenen Daten an Drittanbieter-LLMs uebermittelt werden — durch Self-Hosted-Modelle oder anonymisierte Anfragen.",
    },
    {
        question: "Funktioniert der Chatbot auch auf meiner bestehenden Webseite?",
        answer: "Ja. Unser KI-Assistent fuer Webseiten laesst sich in jede bestehende Website integrieren — egal ob WordPress, Shopify, Next.js oder eine individuelle Loesung. Die Integration erfolgt ueber ein leichtgewichtiges Script-Tag oder eine API-Anbindung, ohne Ihre bestehende Seite zu verlangsamen.",
    },
    {
        question: "Warum sollte ich meinen KI-Chatbot in Duesseldorf entwickeln lassen?",
        answer: "Als Chatbot-Agentur in Duesseldorf kennen wir den lokalen Markt und die Anforderungen deutscher Unternehmen. Persoenliche Beratung vor Ort, deutsche Sprachmodelle, DSGVO-Expertise und schnelle Kommunikation sind fuer uns selbstverstaendlich. Wir entwickeln keine generischen Bots, sondern massgeschneiderte KI-Assistenten fuer Ihr Unternehmen.",
    },
];

export default function ChatbotFAQ() {
    return (
        <section
            aria-labelledby="chatbot-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — KI-Chatbot & Assistent ]
                            </span>
                            <h2
                                id="chatbot-faq-heading"
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
                            Die wichtigsten Fragen rund um KI-Chatbots,
                            Kosten, Datenschutz und die richtige Loesung
                            fuer Ihr Unternehmen — verstaendlich erklaert.
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

            </div>
        </section>
    );
}
