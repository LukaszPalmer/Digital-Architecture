// src/lib/data/careers.ts

import {
    JobPosition,
    CompanyValue,
    Benefit,
    HiringStep,
} from "@/types/careers";

export const JOB_POSITIONS: JobPosition[] = [
    {
        id: "01",
        ref: "PDA-2026-DEV-01",
        title: "Fullstack Web Developer",
        subtitle: "(m/w/d) — Next.js / TypeScript",
        location: "Remote / Hybrid",
        type: "Vollzeit",
        department: "ENGINEERING",
        tagline:
            "Du baust die Interfaces der nächsten Generation — RSC-first, performance-obsessed, production-ready.",
        stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"],
    },
    {
        id: "02",
        ref: "PDA-2026-BACK-02",
        title: "Backend Infrastructure Engineer",
        subtitle: "(m/w/d) — Node.js / MongoDB Atlas",
        location: "Remote",
        type: "Vollzeit",
        department: "INFRASTRUCTURE",
        tagline:
            "Du designst Datenpipelines und Cluster-Architekturen, die unter globalem Hochlast-Traffic nicht zucken.",
        stack: ["Node.js", "MongoDB Atlas", "Railway", "Stripe", "Auth.js"],
    },
    {
        id: "03",
        ref: "PDA-2026-DESIGN-03",
        title: "UX/UI Systems Designer",
        subtitle: "(m/w/d) — Design Systems / Figma",
        location: "Remote / Berlin",
        type: "Vollzeit / Freelance",
        department: "DESIGN OPS",
        tagline:
            "Du übersetzt technische Architektur in visuelle Systeme — Präzision als Designprinzip, nicht als Einschränkung.",
        stack: ["Figma", "Tailwind CSS", "Storybook", "WCAG AAA", "Atomic Design"],
    },
];

export const COMPANY_VALUES: CompanyValue[] = [
    {
        id: "01",
        title: "Engineering over Decoration",
        description:
            "Wir bauen keine Oberflächen — wir konstruieren Systeme. Jede Entscheidung folgt technischer Logik, nicht Trends.",
    },
    {
        id: "02",
        title: "Ownership & Precision",
        description:
            "Jedes Teammitglied übernimmt Verantwortung für seinen Bereich — und stimmt sich aktiv mit dem Team ab. Wir vergleichen Ansätze, teilen Erkenntnisse und sprechen offen miteinander. Kommunikation ist das Ziel.",
    },
    {
        id: "03",
        title: "Radikale Transparenz",
        description:
            "Offene Kommunikation über Architekturentscheidungen, Fehler und Strategie. Wir lernen gemeinsam aus jedem Deployment.",
    },
    {
        id: "04",
        title: "Async-First Culture",
        description:
            "Deep Work ist unantastbar. Keine Meeting-Kultur, die Entwickler unterbricht — Fokus ist unsere stärkste Ressource.",
    },
];

export const BENEFITS: Benefit[] = [
    {
        id: "01",
        category: "COMPENSATION",
        title: "Wettbewerbsfähige Vergütung",
        description:
            "Marktgerechte Gehälter mit transparenter Skalierung — kein Verhandlungspoker, faire Baseline für alle.",
    },
    {
        id: "02",
        category: "EQUIPMENT",
        title: "Hardware-Setup",
        description:
            "Du solltest bereits über passendes Equipment und das richtige Betriebssystem verfügen. Professionelle Arbeit setzt professionelle Werkzeuge voraus.",
    },
    {
        id: "03",
        category: "DEVELOPMENT",
        title: "Learning Allowance",
        description:
            "1.500 € jährliches Budget für Kurse, Konferenzen und technische Literatur. Kontinuierliches Wachstum ist Pflicht.",
    },
    {
        id: "04",
        category: "AUTONOMY",
        title: "Remote-First & Flexible Hours",
        description:
            "100% remote mit flexiblen Arbeitszeiten. Ergebnisse zählen — nicht die Uhrzeit deines Standups.",
    },
    {
        id: "05",
        category: "IMPACT",
        title: "Direkte Code-Ownership",
        description:
            "Kein Jira-Ticket-Durchlauf über 5 Ebenen. Du architektierst, du baust, du deployed — volle Ownership.",
    },
    {
        id: "06",
        category: "CULTURE",
        title: "No-Bullshit Environment",
        description:
            "Keine Corporate-Prozesse, keine Statusmeetings um Statusmeetings zu planen. Nur Arbeit, die zählt.",
    },
];

export const HIRING_PROCESS: HiringStep[] = [
    {
        step: "01",
        title: "Bewerbung & Review",
        description:
            "Schick uns deinen CV, GitHub-Profil oder Portfolio. Wir antworten innerhalb von 48 Stunden — garantiert.",
        duration: "48H RESPONSE",
    },
    {
        step: "02",
        title: "Tech-Interview",
        description:
            "Ein asynchrones technisches Assessment: reale Architektur-Aufgabe, kein LeetCode. Zeig uns, wie du denkst.",
        duration: "3–5 TAGE",
    },
    {
        step: "03",
        title: "Deep-Dive Call",
        description:
            "60-minütiges Gespräch mit dem Team. Gegenseitiges Kennenlernen, offene Fragen, kein Interrogation-Format.",
        duration: "60 MIN",
    },
    {
        step: "04",
        title: "Offer & Onboarding",
        description:
            "Transparentes Angebot ohne Verhandlungsspiele. Onboarding mit strukturiertem 30-60-90-Tage-Plan.",
        duration: "7 TAGE",
    },
];
