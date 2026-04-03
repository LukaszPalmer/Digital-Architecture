import Contact from "@/components/sections/Contact";

export const metadata = {
    title: "Kontakt & Projektanfrage — Webentwicklung anfragen",
    description:
        "Webentwicklung, Design oder Cloud-Infrastruktur anfragen. Palmer Digital antwortet innerhalb von 24 Stunden. Kostenloses Erstgespräch — unverbindlich und individuell auf Ihr Vorhaben zugeschnitten.",
    keywords: [
        "Webentwicklung anfragen",
        "Software Agentur Kontakt",
        "Projektanfrage Webentwicklung",
        "Next.js Entwicklung anfragen",
        "IT-Beratung Kontakt",
        "Webagentur Anfrage",
        "Webdesign anfragen",
        "Softwareentwicklung Anfrage",
    ],
    alternates: { canonical: "https://palmer-digital.de/contact" },
    openGraph: {
        title: "Kontakt & Projektanfrage | Palmer Digital",
        description:
            "Jetzt Webentwicklung, Design oder Cloud-Infrastruktur anfragen — Antwort innerhalb von 24 Stunden.",
        url: "https://palmer-digital.de/contact",
    },
};

export default function ContactPage() {
    return <Contact />;
}
