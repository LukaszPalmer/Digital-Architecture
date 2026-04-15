// src/app/services/ux-ui-design/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import UXHero from "@/components/sections/UXHero";
import UXProblem from "@/components/sections/UXProblem";
import UXConversionPsychology from "@/components/sections/UXConversionPsychology";
import UXCapabilities from "@/components/sections/UXCapabilities";
import UXArchitecture from "@/components/sections/UXArchitecture";
import UXCodeExamples from "@/components/sections/UXCodeExamples";
import UXProcess from "@/components/sections/UXProcess";
import UXUseCases from "@/components/sections/UXUseCases";
import UXFAQ from "@/components/sections/UXFAQ";
import UXCTA from "@/components/sections/UXCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "UX/UI Design & Minimalist Interface Construction | Design Agentur Duesseldorf",
    description:
        "Professionelles UX/UI Design aus Duesseldorf — Conversion-Optimierung durch Psychologie (Hick's Law, Fitts's Law), Figma Design Systems, barrierefreies Webdesign (WCAG AAA) und minimalistisches Interface Design. Ihre UX Design Agentur in NRW fuer messbare Ergebnisse.",
    keywords: [
        "webseite moderner machen lassen",
        "onlineshop uebersichtlicher gestalten",
        "conversion rate optimieren agentur",
        "benutzerfreundliche webseite erstellen",
        "verkaufsstarkes design fuer shops",
        "landingpage design verbessern",
        "webdesign relaunch duesseldorf",
        "warum verlassen kunden meinen shop",
        "nutzererfahrung verbessern UX",
        "modernes interface design UI",
        "mobile first design agentur",
        "intuitive bedienung webseite",
        "core web vitals optimierung durch design",
        "schnelle ladezeiten durch minimalistisches design",
        "barrierefreies webdesign nrw",
        "vertrauen aufbauen durch professionelles design",
        "Figma Design System Architektur",
        "Atomic Design Workflow",
        "UI Component Library Entwicklung",
        "Usability Testing Methoden",
        "Visual Hierarchy Gestaltgesetze",
        "Interaction Design Framer Motion",
        "Responsive Grid Systeme",
        "Design-to-Code Pipeline",
        "UX Design Agentur Duesseldorf",
        "UI Designer NRW",
        "Webdesign Experten Duesseldorf",
        "Interface Design Buero Duesseldorf",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/ux-ui-design" },
    openGraph: {
        title: "UX/UI Design & Minimalist Interface Construction | Palmer Digital Duesseldorf",
        description:
            "Conversion-optimiertes UX/UI Design aus Duesseldorf — Figma Design Systems, Conversion-Psychologie, barrierefreies Webdesign (WCAG AAA) und minimalistisches Interface Design fuer messbare Business-Ergebnisse.",
        url: "https://palmer-digital.de/services/ux-ui-design",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UX/UI Design & Interface Construction | Design Agentur Duesseldorf",
        description:
            "Professionelles Interface Design — Conversion-Psychologie, Figma Design Systems, WCAG AAA Barrierefreiheit. UX Design Agentur aus Duesseldorf fuer Unternehmen in NRW.",
    },
};

/* ── JSON-LD STRUCTURED DATA — Service Schema ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — UX/UI Design & Minimalist Interface Construction",
    description:
        "Professionelles UX/UI Design und Interface-Architektur aus Duesseldorf. Wir gestalten conversion-optimierte Interfaces mit Figma Design Systems, datengetriebener User Research und WCAG AAA-konformer Barrierefreiheit. Von der Informationsarchitektur bis zum Developer-Handoff — minimalistisches Design fuer messbare Business-Ergebnisse.",
    url: "https://palmer-digital.de/services/ux-ui-design",
    provider: {
        "@type": "Organization",
        name: "Palmer Digital",
        url: "https://palmer-digital.de",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Duesseldorf",
            addressRegion: "Nordrhein-Westfalen",
            addressCountry: "DE",
        },
    },
    serviceType: "UX/UI Design & Consulting",
    areaServed: [
        {
            "@type": "City",
            name: "Duesseldorf",
        },
        {
            "@type": "State",
            name: "Nordrhein-Westfalen",
        },
        {
            "@type": "Country",
            name: "Deutschland",
        },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "UX/UI Design & Interface Construction Leistungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "UX Design & User Research",
                    description:
                        "Datengetriebenes UX Design mit User Interviews, Usability Tests, Heatmap-Analysen und Card-Sorting. Informationsarchitektur und Wireframing basierend auf Nutzerdaten — keine Annahmen, nur Evidenz.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "UI Design & Figma Design System",
                    description:
                        "Visuelles Interface Design mit skalierbarem Figma Design System — Variables, Component Library und 1:1 Tailwind Token Mapping. Konsistente Brand-Identitaet ueber alle Touchpoints.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Barrierefreies Webdesign (WCAG AAA)",
                    description:
                        "BFSG-konformes Interface Design mit WCAG 2.1 AAA Compliance — Kontrastverhaeltnisse >7:1, vollstaendiges Fokus-Management, semantisches HTML und Screenreader-Kompatibilitaet. Getestet mit NVDA, VoiceOver und axe-core.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Conversion-Optimierung & Design Audit",
                    description:
                        "Psychologisch fundierte Conversion-Optimierung mit Hick's Law, Fitts's Law und Gestaltgesetzen. A/B-Test-basierte UX-Optimierung fuer Landing Pages, Produktseiten und Checkout-Flows.",
                },
            },
        ],
    },
    specialty: [
        "UX Design Agentur Duesseldorf",
        "UI Designer NRW",
        "Webdesign Experten Duesseldorf",
        "Interface Design Buero",
        "Figma Design System Architektur",
        "Barrierefreies Webdesign NRW",
        "Conversion Rate Optimierung",
        "Mobile First Design",
        "Core Web Vitals Optimierung",
        "Design-to-Code Pipeline",
        "Usability Testing",
        "Minimalistisches Webdesign",
    ],
    knowsAbout: [
        "User Experience Design (UX)",
        "User Interface Design (UI)",
        "Figma Design Systems",
        "Atomic Design Methodology",
        "WCAG 2.1 AAA Accessibility",
        "Hick's Law",
        "Fitts's Law",
        "Gestaltgesetze",
        "Information Architecture",
        "Usability Testing",
        "Design-to-Code Pipeline",
        "Tailwind CSS Token Mapping",
        "Framer Motion",
        "Core Web Vitals Optimization",
        "Responsive Grid Systems",
        "Visual Hierarchy",
    ],
};

/* ── JSON-LD STRUCTURED DATA — FAQ Schema ── */
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Wie beeinflusst UX Design mein Google Ranking?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Google misst die Nutzererfahrung direkt ueber die Core Web Vitals: Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS) und Interaction to Next Paint (INP). Professionelles UX Design optimiert alle drei Metriken — durch minimalistisches CSS (schnellere Ladezeiten), Layout Reservation (keine visuellen Verschiebungen) und optimierte Interaktionspfade. Seiten mit guten Core Web Vitals ranken nachweislich besser. Zusaetzlich senkt gutes UX Design die Bounce Rate und erhoecht die Verweildauer — beides positive Ranking-Signale.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen Webdesign und UI Design?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Webdesign ist der Oberbegriff fuer die Gestaltung von Webseiten und umfasst Layout, Farben und Typografie. UI Design (User Interface Design) geht tiefer: Es definiert ein systematisches visuelles System mit Design-Tokens, Komponenten-Bibliotheken und Interaction Patterns. Waehrend Webdesign oft einmalig pro Seite entsteht, skaliert UI Design ueber ein Design System — neue Seiten und Features bauen auf bestehenden Komponenten auf, was Entwicklungszeit und Kosten reduziert.",
            },
        },
        {
            "@type": "Question",
            name: "Warum ist ein Design System besser als individuelle Templates?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Statische Templates erfordern bei jeder Aenderung manuellen Aufwand und fuehren zu visuellen Inkonsistenzen. Ein Design System mit Figma Variables und einer React Component Library definiert Farben, Typografie und Spacing als wiederverwendbare Tokens. Aenderungen propagieren automatisch — eine Farbaenderung im System aktualisiert jede Komponente. Langfristig spart das 40 % Entwicklungszeit und eliminiert Design-Schulden vollstaendig.",
            },
        },
        {
            "@type": "Question",
            name: "Was kostet ein UX/UI Design Projekt bei einer Agentur in Duesseldorf?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die Kosten haengen vom Projektumfang ab. Ein Design-Audit mit Usability-Analyse beginnt bei wenigen Tagen Aufwand. Ein vollstaendiges UX-Redesign mit User Research, Wireframing, Hi-Fi Design und Developer-Handoff umfasst typischerweise 3–6 Wochen. Als UX Design Agentur in Duesseldorf bieten wir transparente Pauschalangebote — kein Stundensatz-Roulette. Jedes Projekt beginnt mit einem kostenfreien Erstgespraech zur Bedarfsanalyse.",
            },
        },
        {
            "@type": "Question",
            name: "Wie stellt ihr sicher, dass das Design barrierefrei ist?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Barrierefreiheit ist fester Bestandteil unseres Design-Prozesses — kein Nachgedanke. Wir pruefen alle Farbkombinationen gegen WCAG 2.1 AAA (Kontrastverhaeltnis >7:1), implementieren vollstaendiges Fokus-Management fuer Tastaturnavigation und nutzen semantisches HTML fuer Screenreader-Kompatibilitaet. Das Barrierefreiheitsstaerkungsgesetz (BFSG) verpflichtet ab 2025 viele digitale Produkte zur Barrierefreiheit. Wir liefern konforme Interfaces — getestet mit NVDA, VoiceOver und axe-core.",
            },
        },
    ],
};

export default function UXUIDesignPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <main className="bg-[#FFFFFF] min-h-screen">
                <article>
                    <UXHero />
                    <UXProblem />
                    <UXConversionPsychology />
                    <UXCapabilities />
                    <UXArchitecture />
                    <UXCodeExamples />
                    <UXProcess />
                    <UXUseCases />
                    <UXFAQ />
                    <UXCTA />
                </article>
            </main>
        </>
    );
}
