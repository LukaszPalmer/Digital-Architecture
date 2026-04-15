// src/components/sections/StripeFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// FAQ-Sektion fuer SEO Rich Snippets (Schema liegt in page.tsx als JSON-LD).

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const FAQS = [
    {
        question: "Welche Zahlungsarten braucht mein Onlineshop?",
        answer: "Ein moderner Onlineshop sollte mindestens Kreditkarte (Visa, Mastercard), SEPA-Lastschrift, PayPal und Klarna (Zahlung auf Rechnung) anbieten. Mit Stripe lassen sich ueber 20 Zahlungsarten in einer einzigen Oberflaeche integrieren — so decken Sie die Wuensche von ueber 95 % Ihrer Kunden ab, ohne mehrere Zahlungsanbieter verwalten zu muessen.",
    },
    {
        question: "Was kostet eine professionelle Stripe Integration fuer meinen Onlineshop?",
        answer: "Die Kosten haengen vom Umfang ab: Eine einfache Checkout-Integration ist guenstiger als ein komplettes Subscription-System mit automatischer Rechnungsstellung. Stripe selbst berechnet 1,5 % + 0,25 EUR pro erfolgreicher Kartenzahlung in Europa. Wir erstellen nach einem kostenlosen Erstgespraech ein transparentes Angebot fuer die Entwicklung.",
    },
    {
        question: "Kann ich in meinem Onlineshop Zahlung auf Rechnung anbieten?",
        answer: "Ja. Ueber Stripe koennen Sie Klarna und andere Rechnungskauf-Anbieter direkt integrieren. Ihre Kunden kaufen auf Rechnung und zahlen erst nach Erhalt der Ware. Sie als Haendler erhalten das Geld sofort von Klarna — das Zahlungsrisiko uebernimmt der Anbieter.",
    },
    {
        question: "Wie sicher sind Online-Zahlungen mit Stripe?",
        answer: "Stripe ist PCI DSS Level 1 zertifiziert — das ist der hoechste Sicherheitsstandard der Zahlungsindustrie. Kreditkartendaten werden nie auf Ihrem Server gespeichert, sondern direkt von Stripe verarbeitet. Zusaetzlich schuetzt 3D Secure 2.0 vor Betrug, und Stripe Radar erkennt verdaechtige Transaktionen automatisch.",
    },
    {
        question: "Warum sollte ich meinen Onlineshop in Duesseldorf erstellen lassen?",
        answer: "Als Webdesign-Agentur in Duesseldorf kennen wir den lokalen Markt und die Anforderungen deutscher Onlineshop-Betreiber — von DSGVO-Compliance ueber deutsche Zahlungsvorlieben (Rechnung, SEPA) bis hin zu rechtssicherer Rechnungsstellung. Persoenliche Beratung vor Ort und schnelle Kommunikation sind inklusive.",
    },
    {
        question: "Was passiert, wenn eine Zahlung in meinem Onlineshop fehlschlaegt?",
        answer: "Unsere Stripe Integration beinhaltet automatisches Fehlerhandling: Bei fehlgeschlagenen Zahlungen wird der Kunde sofort informiert und kann es erneut versuchen. Bei Abo-Zahlungen startet ein automatischer Mahnprozess — Stripe versucht die Zahlung mehrfach und benachrichtigt den Kunden per E-Mail.",
    },
];

export default function StripeFAQ() {
    return (
        <section
            aria-labelledby="stripe-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Haeufige Fragen — E-Commerce Zahlungen ]
                            </span>
                            <h2
                                id="stripe-faq-heading"
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
                            Die wichtigsten Fragen rund um Zahlungsarten,
                            Kosten, Sicherheit und die richtige Loesung
                            fuer Ihren Onlineshop — verstaendlich erklaert.
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
