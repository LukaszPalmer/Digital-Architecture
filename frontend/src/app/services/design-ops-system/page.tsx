// src/app/services/design-ops-system/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import DesignHero from "@/components/sections/DesignHero";
import DesignProblem from "@/components/sections/DesignProblem";
import DesignCapabilities from "@/components/sections/DesignCapabilities";
import DesignArchitecture from "@/components/sections/DesignArchitecture";
import DesignProcess from "@/components/sections/DesignProcess";
import DesignUseCases from "@/components/sections/DesignUseCases";
import DesignFAQ from "@/components/sections/DesignFAQ";
import DesignCTA from "@/components/sections/DesignCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "Professionelles Webdesign & UI/UX Design in Düsseldorf | Tailwind Design Ops",
    description:
        "Professionelles Webdesign erstellen lassen in Düsseldorf — Tailwind CSS Design Systeme, UI/UX Design und Atomic CSS Architektur. Webseiten Design Kosten senken durch Token-basierte Skalierung. Ihr Webdesigner für Design Ops.",
    keywords: [
        "Professionelles Webdesign",
        "Webseiten Design Kosten",
        "Webdesign erstellen Düsseldorf",
        "UI/UX Design",
        "Webseite designen",
        "Webdesigner",
        "Webdesigner Düsseldorf",
        "Tailwind CSS Design System",
        "Design Ops",
        "Atomic CSS",
        "Design Token Architektur",
        "Komponentenbibliothek",
        "WCAG AAA",
        "UI Design Agentur",
        "Webdesign Agentur Düsseldorf",
        "Design System Entwicklung",
        "PurgeCSS",
        "Utility-First CSS",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/design-ops-system" },
    openGraph: {
        title: "Professionelles Webdesign & UI/UX Design Düsseldorf | Palmer Digital",
        description:
            "Tailwind Design Ops — Atomic CSS Design Systeme, Token-Architektur und WCAG-konforme Interfaces. Webseiten Design Kosten langfristig senken durch systematisches Design Engineering.",
        url: "https://palmer-digital.de/services/design-ops-system",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Professionelles Webdesign & Design Ops | Düsseldorf",
        description:
            "Webseite designen mit System — Tailwind CSS Token-Architektur, Atomic Design und UI/UX Engineering für skalierbare Markenpräsenz.",
    },
};

/* ── JSON-LD STRUCTURED DATA ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — Tailwind Design Ops & UI/UX Design",
    description:
        "Professionelles Webdesign erstellen lassen in Düsseldorf. Tailwind CSS Design Systeme mit Token-Architektur, Atomic CSS Komponentenbibliotheken und WCAG-konformen Interfaces. Webdesigner für skalierbare Design Ops, die Webseiten Design Kosten langfristig senken.",
    url: "https://palmer-digital.de/services/design-ops-system",
    provider: {
        "@type": "Organization",
        name: "Palmer Digital",
        url: "https://palmer-digital.de",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Düsseldorf",
            addressRegion: "Nordrhein-Westfalen",
            addressCountry: "DE",
        },
    },
    serviceType: "UI/UX Design & Design Ops",
    areaServed: [
        { "@type": "City", name: "Düsseldorf" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tailwind Design Ops Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Professionelles Webdesign — Tailwind CSS Design System",
                    description:
                        "Webseite designen mit Atomic CSS Token-Architektur. Design Tokens, Komponentenbibliothek und PurgeCSS-Optimierung für maximale Performance und konsistentes UI/UX Design.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "UI/UX Design Audit & Design Ops Beratung Düsseldorf",
                    description:
                        "Vollständiger Design-Audit bestehender Interfaces: Inkonsistenzen, A11y-Verstöße und Design-Schulden identifizieren. Strategie für skalierbare Design Ops mit Tailwind CSS.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Barrierefreies Webdesign — WCAG 2.1 AAA Konformität",
                    description:
                        "Professionelles Webdesign mit Fokus auf Barrierefreiheit. Kontrastverhältnisse >7:1, vollständige Keyboard-Navigation und ARIA-Patterns für alle interaktiven Komponenten.",
                },
            },
        ],
    },
    specialty: [
        "Professionelles Webdesign",
        "Webdesign erstellen Düsseldorf",
        "UI/UX Design",
        "Tailwind CSS Design System",
        "Atomic CSS Architektur",
        "Design Token Engineering",
        "Design Ops",
        "WCAG AAA Konformität",
        "PurgeCSS Optimierung",
        "Utility-First CSS",
        "Komponentenbibliothek",
        "Webdesigner Düsseldorf",
    ],
    knowsAbout: [
        "Tailwind CSS",
        "Design Tokens",
        "Atomic Design Methodology",
        "PurgeCSS",
        "CSS Custom Properties",
        "WCAG 2.1 AAA",
        "Utility-First CSS",
        "Component-Driven Development",
        "Design System Governance",
        "Figma to Code",
        "Visual Regression Testing",
        "Responsive Grid Systems",
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Was kostet professionelles Webdesign mit einem Tailwind Design System?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die Webseiten Design Kosten für ein Tailwind-basiertes Design System richten sich nach dem Projektumfang. Ein Basis-Design-System mit Token-Architektur und 20–30 Kernkomponenten beginnt bei individuellen Projektanforderungen. Die Investition amortisiert sich schnell: Einmal definierte Design Tokens eliminieren wiederkehrende Styling-Kosten bei jeder neuen Seite oder Funktion. Wir erstellen ein transparentes Angebot nach einem kostenlosen Erstgespräch.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen einem Styleguide und einem Design System?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ein Styleguide ist ein statisches Dokument mit Farben und Schriften. Ein Design System ist eine lebende Produktionsinfrastruktur: Design Tokens als Single Source of Truth, eine typisierte Komponentenbibliothek mit Variants und States, automatisierte A11y-Tests und eine Tailwind-Konfiguration, die jeden Pixel aus einer einzigen Wahrheitsquelle ableitet. Der Styleguide beschreibt — das Design System erzwingt Konsistenz technisch.",
            },
        },
        {
            "@type": "Question",
            name: "Warum sollte ich Tailwind CSS statt herkömmlichem CSS verwenden?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Tailwind CSS als Utility-First Framework eliminiert toten CSS-Code durch PurgeCSS — typische Produktions-Bundles schrumpfen auf unter 10 KB. Im Vergleich: herkömmliches CSS wächst linear mit jeder neuen Seite und führt unweigerlich zu Spezifitätskonflikten. Mit Tailwind und Design Tokens definieren Sie Ihre Markenidentität einmal zentral und wenden sie atomar auf jede Komponente an. Das Ergebnis: 0ms Runtime-CSS-Overhead, pixel-perfekte Konsistenz und drastisch reduzierte Webseiten Design Kosten bei Änderungen.",
            },
        },
        {
            "@type": "Question",
            name: "Wie läuft ein Design System Projekt mit Palmer Digital in Düsseldorf ab?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Unser Prozess umfasst vier Phasen: Phase 1 — Design Audit (Tage 1–2): Vollständige Inventur bestehender UI-Elemente, Identifikation von Inkonsistenzen und A11y-Verstößen. Phase 2 — Token Architecture (Tage 3–4): Definition der dreistufigen Token-Hierarchie und Tailwind-Konfiguration. Phase 3 — Component Build (Tage 5–12): Aufbau der Atomic Component Library mit Variants, Sizes und States. Phase 4 — Documentation & Handoff (Tage 13–14): Storybook-kompatible Dokumentation und Developer-Handoff.",
            },
        },
        {
            "@type": "Question",
            name: "Was sind Design Tokens und warum brauche ich sie?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Design Tokens sind die atomaren Bausteine eines Design Systems — Farben, Abstände, Schriftgrößen als maschinenlesbare Werte. Statt Hex-Werte an hunderten Stellen im Code zu definieren, legen Sie einen Token an und referenzieren diesen überall. Eine Änderung im Token propagiert sich automatisch durch das gesamte System. Für Unternehmen in Düsseldorf und deutschlandweit bedeutet das: Rebranding wird von einer wochenlangen Odyssee zu einer einzigen Config-Änderung.",
            },
        },
        {
            "@type": "Question",
            name: "Ist Tailwind CSS barrierefrei und WCAG-konform?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Tailwind CSS ist ein Styling-Framework — Barrierefreiheit entsteht durch die Architektur darüber. In unserem Design System Engineering erzwingen wir WCAG 2.1 AAA Konformität: Kontrastverhältnisse über 7:1, vollständige Keyboard-Navigation, semantisches HTML, ARIA-Patterns für jede interaktive Komponente und prefers-reduced-motion Respektierung. Axe-Core in der CI/CD-Pipeline blockiert jeden Deploy, der A11y-Standards verletzt.",
            },
        },
        {
            "@type": "Question",
            name: "Kann ich ein bestehendes Webdesign auf Tailwind CSS migrieren?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja — und genau das ist einer der häufigsten Ausgangspunkte. Wir starten mit einem Design Audit, extrahieren bestehende Designwerte in eine Token-Hierarchie und migrieren schrittweise zu Tailwind Utilities. Durch den inkrementellen Ansatz kann Ihr bestehendes Webdesign parallel weiterlaufen, während die neue Architektur aufgebaut wird. Typische Migration: 2–4 Wochen für eine mittelgroße Webseite mit 30–50 einzigartigen Komponenten.",
            },
        },
        {
            "@type": "Question",
            name: "Warum Palmer Digital als Webdesigner in Düsseldorf?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Wir sind keine klassische Webdesign-Agentur — wir sind Design Engineers. Der Unterschied: Während herkömmliche Webdesigner Seiten in Figma zeichnen und an Entwickler übergeben, bauen wir das Design System als technische Infrastruktur. Jeder Design Token ist typisiert, jede Komponente ist regressionstestet, jede Farbkombination ist automatisch auf WCAG-Konformität geprüft. Das Ergebnis ist professionelles Webdesign, das nicht nur gut aussieht, sondern technisch skaliert.",
            },
        },
    ],
};

export default function DesignOpsPage() {
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
                    <DesignHero />
                    <DesignProblem />
                    <DesignCapabilities />
                    <DesignArchitecture />
                    <DesignProcess />
                    <DesignUseCases />
                    <DesignFAQ />
                    <DesignCTA />
                </article>
            </main>
        </>
    );
}
