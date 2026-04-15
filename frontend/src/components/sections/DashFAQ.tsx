// src/components/sections/DashFAQ.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

export const FAQ_ITEMS = [
    {
        question: "Was kostet die Entwicklung eines Enterprise-Dashboards mit Material UI?",
        answer: "Die Kosten für ein Enterprise-Dashboard hängen vom Umfang ab — Anzahl der Datenquellen, Komplexität der RBAC-Logik und Integrationstiefe. Ein typisches Dashboard-Projekt beginnt bei individuellen Anforderungen. Wir erstellen ein transparentes Angebot nach einem kostenlosen Erstgespräch, in dem wir Ihre Use Cases und Datenquellen analysieren.",
    },
    {
        question: "Warum ist Material UI besser als eine Custom-UI-Lösung für Dashboards?",
        answer: "Material UI bietet über 700 getestete Enterprise-Komponenten — DataGrid, DatePicker, Autocomplete, Charts — die jahrelange Entwicklungsarbeit repräsentieren. Mit einem Custom Theme Provider wird das Material-Look vollständig durch Ihre Markenidentität ersetzt. Sie erhalten die Zuverlässigkeit einer Open-Source-Community mit der Individualität einer Maßanfertigung.",
    },
    {
        question: "Wie wird die Performance bei großen Datenmengen sichergestellt?",
        answer: "Durch drei Architektur-Entscheidungen: Erstens, Server-Side Pagination — der Browser lädt nur die sichtbaren Zeilen. Zweitens, Virtual Scrolling — MUI DataGrid Pro rendert nur DOM-Elemente im Viewport. Drittens, React Query als Cache-Layer — bereits geladene Daten werden nicht erneut abgefragt. Das Ergebnis zielt auf stabile 60fps auch bei 100.000+ Datensätzen ab.",
    },
    {
        question: "Kann ein bestehendes Dashboard nachträglich auf Material UI migriert werden?",
        answer: "Ja, eine schrittweise Migration ist möglich. Wir analysieren Ihr bestehendes Dashboard-System, identifizieren die kritischsten Performance-Engpässe und migrieren Komponente für Komponente — ohne den laufenden Betrieb zu unterbrechen. Ein Custom Theme stellt sicher, dass migrierte und Legacy-Bereiche visuell konsistent bleiben.",
    },
    {
        question: "Wie funktioniert das RBAC-System auf Komponent-Ebene?",
        answer: "Jede Dashboard-Komponente wird durch Permission Gates geschützt — Higher-Order-Components, die die Rolle des eingeloggten Nutzers prüfen. Ein Analyst sieht nur Daten-Exports, ein Manager kann Team-Daten bearbeiten, ein Admin hat Zugriff auf die Konfiguration. Die Berechtigungen werden serverseitig validiert — ein URL-Bypass ist architektonisch ausgeschlossen.",
    },
];

export default function DashFAQ() {
    return (
        <section
            aria-labelledby="dash-faq-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Häufige Fragen — Enterprise Dashboard ]
                            </span>
                            <h2
                                id="dash-faq-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Fragen &
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Antworten.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Was Entscheider und Entwickler-Teams über
                            Enterprise-Dashboard-Entwicklung mit Material UI
                            wissen sollten.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── FAQ GRID ── */}
                <RevealGrid className="grid grid-cols-1 border-t border-[#000000]">
                    {FAQ_ITEMS.map((faq, i) => (
                        <details
                            key={i}
                            className="group border-b border-[#000000]"
                        >
                            <summary className="flex items-start justify-between gap-6 p-8 md:p-10 cursor-pointer list-none hover:bg-[#001F3F] transition-colors duration-500 [&::-webkit-details-marker]:hidden">
                                <h3 className="text-[clamp(1rem,1.8vw,1.3rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] group-open:text-[#001F3F] transition-colors pr-4">
                                    {faq.question}
                                </h3>
                                <span
                                    aria-hidden="true"
                                    className="shrink-0 mt-1 text-[18px] font-black text-[#001F3F] group-hover:text-[#FFFFFF] group-open:rotate-45 transition-all duration-300"
                                >
                                    +
                                </span>
                            </summary>
                            <div className="px-8 md:px-10 pb-8 md:pb-10">
                                <p className="text-[15px] leading-relaxed text-[#000000]/70 border-l-2 border-[#001F3F] pl-6 max-w-3xl">
                                    {faq.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}
