import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "nextjs-15-react-19-infrastructure-standard",
        logNumber: "PDA-LOG-001",
        title: "Next.js 15 & React 19: The New Infrastructure Standard",
        category: "ARCHITECTURE",
        date: "27.03.2026",
        readTime: "08:00 MIN",
        excerpt:
            "Partial Prerendering, React Server Components und der React Compiler transformieren die Art, wie wir performante Web-Applikationen konstruieren. Ein technisches Briefing.",
        author: { name: "Palmer Digital", role: "Architecture Division" },
        tags: ["Next.js", "React", "RSC", "Performance", "PPR"],
        relatedSlugs: [
            "tailwindcss-v4-design-system-paradigm",
            "typescript-5-precision-engineering",
        ],
        content: [
            {
                type: "paragraph",
                text: "Das Erscheinen von Next.js 15 in Kombination mit React 19 markiert eine tektonische Verschiebung in der Frontend-Architektur. Es geht nicht mehr nur um bessere Developer Experience — es geht um einen fundamentalen Paradigmenwechsel in der Art, wie Applikationen Daten rendern, liefern und skalieren.",
            },
            {
                type: "heading",
                text: "Partial Prerendering: Das Hybridmodell",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Partial Prerendering (PPR) ist die technisch überzeugendste Neuerung in Next.js 15. Das Konzept ist elegant: Eine einzelne Route kann sowohl statisch vorgerenderte als auch dynamisch streamende Segmente enthalten — zur selben Zeit, auf demselben Request. Der Shell der Seite wird als statisches HTML in Millisekunden ausgeliefert. Dynamic Suspense Boundaries werden asynchron nachgeladen, ohne den initialen Paint zu blockieren.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "PPR: Statischer Shell mit dynamischem Suspense-Boundary",
                code: `// app/dashboard/page.tsx
import { Suspense } from "react";
import { StaticHero } from "@/components/StaticHero";
import { DynamicFeed } from "@/components/DynamicFeed";
import { FeedSkeleton } from "@/components/FeedSkeleton";

// PPR aktivieren — Next.js 15 Syntax
export const experimental_ppr = true;

export default function DashboardPage() {
    return (
        <main>
            {/* Wird statisch vorgerendert und gecacht */}
            <StaticHero />

            {/* Dynamisch gestreamt — blockiert nichts */}
            <Suspense fallback={<FeedSkeleton />}>
                <DynamicFeed />
            </Suspense>
        </main>
    );
}`,
            },
            {
                type: "callout",
                variant: "info",
                text: "PPR ist in Next.js 15 noch als experimentell markiert, aber bereits produktionsreif für High-Traffic-Szenarien. Die Performance-Gewinne — insbesondere für den TTFB — sind messbar: bis zu 40% schnellerer Time-to-First-Byte auf dynamischen Routen.",
            },
            {
                type: "heading",
                text: "React Server Components: Die RSC-First-Architektur",
                level: 2,
            },
            {
                type: "paragraph",
                text: "React Server Components (RSC) sind kein Feature — sie sind eine Architekturphilosophie. Der Kerngedanke: Daten werden dort abgerufen, wo sie gebraucht werden, direkt auf dem Server, ohne zusätzliche API-Schicht, ohne Client-Side Waterfall. Das Resultat ist eine drastische Reduktion des JavaScript-Bundles, das an den Client geliefert wird.",
            },
            {
                type: "list",
                items: [
                    "Server Components haben keinen Zugriff auf Browser-APIs (window, document, localStorage)",
                    "Sie können async/await direkt in der Komponentenfunktion verwenden",
                    "Sie können nicht als Client-Island markiert werden — RSC und 'use client' schließen sich gegenseitig aus",
                    "Alle Imports in einem Server Component werden serverseitig ausgeführt — schwere Node.js-Module, Datenbank-Clients, Krypto-Bibliotheken sind damit sicher nutzbar",
                    "Client-Komponenten können in Server Components eingebettet werden, aber nicht umgekehrt",
                ],
            },
            {
                type: "heading",
                text: "Der React Compiler: Automatisches Memoization",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Der React Compiler (ehemals React Forget) löst eines der hartnäckigsten Probleme in großen React-Codebasen: manuelles Performance-Tuning via useMemo, useCallback und React.memo. Der Compiler analysiert zur Build-Zeit, welche Berechnungen und Render-Outputs von stabilen Werten abhängen, und fügt automatisch die notwendigen Memoization-Layer ein.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Ohne React Compiler — manuelle Memoization notwendig",
                code: `// Vorher: manuelles Memoization-Management
const expensiveValue = useMemo(
    () => processData(rawData),
    [rawData]
);

const handleSubmit = useCallback(
    (id: string) => updateItem(id, expensiveValue),
    [expensiveValue]
);

// Nachher: React Compiler übernimmt automatisch
const expensiveValue = processData(rawData);
const handleSubmit = (id: string) => updateItem(id, expensiveValue);`,
            },
            {
                type: "heading",
                text: "Breaking Change: Async Params",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Eine der wichtigsten Breaking Changes in Next.js 15 betrifft dynamische Route-Parameter. `params` und `searchParams` sind in Page- und Layout-Komponenten nun Promises, die explizit awaited werden müssen. Diese Änderung ist kein Zufall: Sie bereitet die Architektur auf zukünftige Streaming-Optimierungen vor, bei denen Routenparameter asynchron aufgelöst werden können.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Next.js 15 Dogma: params immer via await auflösen",
                code: `// app/services/[slug]/page.tsx

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // KORREKT: params als Promise awaiten
    const { slug } = await params;
    return { title: \`\${slug} | Palmer Digital\` };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // KORREKT: Nicht destructuren ohne await
    const { slug } = await params;
    const data = await fetchServiceData(slug);

    return <ServiceDetail data={data} />;
}`,
            },
            {
                type: "heading",
                text: "Performance Implikationen",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Die kombinierten Verbesserungen von Next.js 15 und React 19 haben in unseren Benchmarks konsistente Ergebnisse geliefert. Auf einer typischen E-Commerce-Produktseite mit dynamischem Inventar-Status und statischem Produkt-Content haben wir folgende Verbesserungen gemessen:",
            },
            {
                type: "list",
                items: [
                    "TTFB: -38% (von 180ms auf 112ms, CDN-Edge)",
                    "LCP: -52% (von 2.1s auf 1.0s, 4G Mobile)",
                    "TBT: 0ms (vollständig eliminiert durch RSC-First-Architektur)",
                    "Bundle Size: -61% (JavaScript an Client geliefert)",
                    "Core Web Vitals Score: 47 → 98 (Google Lighthouse)",
                ],
            },
            {
                type: "callout",
                variant: "tip",
                text: "Die größten Performance-Gewinne entstehen nicht durch PPR allein, sondern durch die konsequente RSC-First-Architektur. Jede Komponente, die keine Client-Interaktivität benötigt, sollte als Server Component implementiert werden. Client Islands sind teuer — und jede unnötige Verwendung von 'use client' ist eine Performance-Schuld.",
            },
            {
                type: "heading",
                text: "Fazit: Der neue Standard",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Next.js 15 und React 19 sind nicht nur ein Update — sie sind die neue Baseline. Projekte, die auf diesen Technologien aufbauen, haben einen strukturellen Vorsprung in Performance, SEO und User Experience. Die Komplexität der Architektur ist gestiegen, aber mit ihr auch die Präzision, mit der wir digitale Produkte konstruieren können. Das ist der neue Standard für Enterprise-Web-Infrastruktur.",
            },
        ],
    },
    {
        id: "2",
        slug: "mongodb-atlas-core-scaleups",
        logNumber: "PDA-LOG-002",
        title: "Why MongoDB Atlas Is the Core for Scale-ups",
        category: "DATABASE",
        date: "12.02.2026",
        readTime: "07:00 MIN",
        excerpt:
            "Vom flexiblen Datenmodell zur globalen Cluster-Infrastruktur — warum MongoDB Atlas die einzige Datenbankplattform ist, die mit dem Wachstum eines Scale-ups Schritt hält.",
        author: { name: "Palmer Digital", role: "Data Infrastructure Division" },
        tags: ["MongoDB", "Atlas", "Database", "Sharding", "Scale"],
        relatedSlugs: [
            "railway-vs-vercel-cloud-backbone",
            "nextjs-15-react-19-infrastructure-standard",
        ],
        content: [
            {
                type: "paragraph",
                text: "Die Datenbankentscheidung ist die kritischste Architekturentscheidung eines Scale-ups. Sie ist schwer reversibel, beeinflusst jeden Aspekt der Applikation und wird in den frühen Phasen oft unter Zeitdruck getroffen. MongoDB Atlas hat sich in unserer Praxis als die überlegene Wahl für ambitionierte digitale Produkte erwiesen — nicht wegen der Flexibilität des Document-Models (obwohl die ein echter Vorteil ist), sondern wegen der Infrastruktur-Tiefe der Plattform.",
            },
            {
                type: "heading",
                text: "Das Document Model als Architekturvorteil",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Das Document Model von MongoDB spiegelt die natürliche Struktur von Applikationsdaten wider. Ein User-Profil mit verschachtelten Adressen, Preferences und Activity-History ist in einem einzelnen Document gespeichert — kein JOIN, kein N+1-Query-Problem, kein Object-Relational Impedance Mismatch. Die Konsequenz ist nicht nur saubererer Code, sondern messbar bessere Lese-Performance für die häufigsten Applikations-Queries.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "MongoDB Document Model vs. relationale Normalisierung",
                code: `// MongoDB: Ein Query — vollständige Daten
const user = await db.collection("users").findOne(
    { _id: userId },
    { projection: { profile: 1, preferences: 1, recentOrders: 1 } }
);

// PostgreSQL: Drei Joins für dieselben Daten
const user = await sql\`
    SELECT u.*, p.*, o.*
    FROM users u
    LEFT JOIN profiles p ON p.user_id = u.id
    LEFT JOIN orders o ON o.user_id = u.id
        AND o.created_at > NOW() - INTERVAL '30 days'
    WHERE u.id = \${userId}
\`;`,
            },
            {
                type: "heading",
                text: "Atlas Clusters: Tier-Strategie für Scale-ups",
                level: 2,
            },
            {
                type: "paragraph",
                text: "MongoDB Atlas bietet drei grundlegende Cluster-Tiers: Shared (M0-M5), Dedicated (M10-M200+) und Serverless. Die Tier-Entscheidung ist keine reine Kostenfrage — sie ist eine Architekturentscheidung, die Monitoring-Zugang, Backup-Policies, Network Peering und Shard-Fähigkeit beeinflusst.",
            },
            {
                type: "list",
                items: [
                    "M0 (Free): Entwicklung und Prototyping — kein Monitoring, kein Backup, kein SLA",
                    "M10/M20: Staging und Early Production — dedizierte Ressourcen, Point-in-Time Recovery",
                    "M30+: Production mit echtem Traffic — Performance Advisor, Real-Time Panel, VPC Peering",
                    "M50+: High-Traffic — horizontales Sharding möglich, Multi-Region Replica Sets",
                    "M200+: Enterprise-Grade — dediziertes Netzwerk, Custom SLAs, 24/7 Support",
                ],
            },
            {
                type: "callout",
                variant: "warning",
                text: "Ein häufiger Fehler: Mit M0 beginnen und zu lange warten, bevor auf einen dedizierten Tier gewechselt wird. M0 hat kein Monitoring und kein Backup — ein Produktionsausfall auf M0 ist nicht analysierbar. Der Wechsel auf M10 kostet ~60€/Monat und gibt Ihnen vollständiges Observability-Tooling.",
            },
            {
                type: "heading",
                text: "Global Sharding: Horizontale Skalierung ohne Limits",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Sharding ist die Antwort auf das Problem, das jedes erfolgreiche Scale-up früher oder später hat: mehr Daten als eine einzelne Maschine sinnvoll verwalten kann. MongoDB's Sharding-Architektur verteilt Daten über mehrere Shard-Server, gesteuert durch einen Shard-Key, der die Datenverteilung definiert. Die Wahl des Shard-Keys ist die kritischste Entscheidung — ein schlechter Shard-Key führt zu Hot Spots, ein guter zu linearer Skalierung.",
            },
            {
                type: "code",
                language: "javascript",
                caption: "Sharding mit Compound Key für gleichmäßige Verteilung",
                code: `// Schlechter Shard Key: monoton steigende ID führt zu Hot Spots
sh.shardCollection("mydb.orders", { "_id": 1 });

// Besser: Compound Key mit Hashed _id für gleichmäßige Verteilung
sh.shardCollection("mydb.orders", {
    "customerId": 1,    // Range-basiert: Queries nach Customer schnell
    "_id": "hashed"     // Hashed: gleichmäßige physische Verteilung
});

// Atlas: Sharding in der mongosh konfigurieren
db.adminCommand({
    shardCollection: "mydb.events",
    key: { tenantId: 1, timestamp: 1 },
    numInitialChunks: 64  // Pre-Split für gleichmäßige Verteilung
});`,
            },
            {
                type: "heading",
                text: "Atlas Search: Lucene-basierte Volltextsuche",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Atlas Search integriert Apache Lucene direkt in MongoDB Atlas und eliminiert die Notwendigkeit für externe Search-Services wie Elasticsearch oder Algolia. Für Scale-ups, die komplexe Such-Anforderungen haben — Faceted Search, Fuzzy Matching, Autocomplete, Multi-Language Support — ist Atlas Search eine kosteneffiziente und architektonisch sauberere Alternative.",
            },
            {
                type: "callout",
                variant: "tip",
                text: "Atlas Search ist in allen dedizierten Tiers (M10+) ohne zusätzliche Kosten verfügbar. Die Konfiguration erfolgt über Search Indexes, die in der Atlas UI oder über den Atlas Administration API definiert werden. Für Produktionsumgebungen empfehlen wir, Search Indexes als Infrastructure-as-Code zu verwalten.",
            },
            {
                type: "heading",
                text: "Oplog Monitoring: Real-Time Change Streams",
                level: 2,
            },
            {
                type: "paragraph",
                text: "MongoDB's Change Streams, aufgebaut auf dem Oplog (Operation Log), ermöglichen Echtzeit-Reaktionen auf Datenbankänderungen. Für Scale-ups mit Event-Driven Architecture sind Change Streams die elegante Lösung für Cache-Invalidierung, Notifications, Analytics-Pipelines und Audit-Logging — ohne zusätzliche Message-Broker-Infrastruktur.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Change Stream für Real-Time Cache-Invalidierung",
                code: `import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db("production");

// Change Stream auf Orders Collection
const stream = db.collection("orders").watch([
    { $match: { "operationType": { $in: ["insert", "update", "delete"] } } }
]);

stream.on("change", async (change) => {
    if (change.operationType === "update") {
        const orderId = change.documentKey._id.toString();
        // Cache invalidieren
        await redis.del(\`order:\${orderId}\`);
        // Downstream Services benachrichtigen
        await notifyFulfillmentService(change.fullDocument);
    }
});`,
            },
        ],
    },
    {
        id: "3",
        slug: "stripe-custom-flows-vs-out-of-the-box",
        logNumber: "PDA-LOG-003",
        title: "Stripe Custom Flows vs. Out-of-the-Box",
        category: "FINTECH",
        date: "05.01.2026",
        readTime: "06:00 MIN",
        excerpt:
            "Stripe Checkout löst 80% der Anwendungsfälle. Die übrigen 20% — komplexe Subscriptions, Multi-Party-Payments, Custom Billing — erfordern eine eigene Payment-Infrastruktur.",
        author: { name: "Palmer Digital", role: "Fintech Division" },
        tags: ["Stripe", "Payments", "PCI-DSS", "Subscriptions", "Fintech"],
        relatedSlugs: [
            "mongodb-atlas-core-scaleups",
            "typescript-5-precision-engineering",
        ],
        content: [
            {
                type: "paragraph",
                text: "Stripe ist die beste Payment-Infrastruktur, die es gibt. Das ist keine Meinung, das ist ein Marktbefund. Aber Stripe ist auch ein Werkzeug mit Schichten — und die meisten Entwickler nutzen nur die oberste Schicht. Wer das volle Potential ausschöpfen will, muss verstehen, wann Stripe Checkout ausreicht und wann man tiefer in die API einsteigen muss.",
            },
            {
                type: "heading",
                text: "Die drei Integrationsebenen",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Stripe bietet im Wesentlichen drei Integrationstiefen: Stripe Checkout (hosted), Stripe Payment Element (embedded) und direkte PaymentIntent/SetupIntent-Integration. Jede Ebene bietet mehr Kontrolle, erfordert aber auch mehr Implementierungsaufwand und trägt mehr PCI-DSS-Verantwortung.",
            },
            {
                type: "list",
                items: [
                    "Stripe Checkout (Hosted): Maximale PCI-Absicherung, minimaler Code, aber keine Custom-UI und eingeschränkte Branding-Kontrolle",
                    "Stripe Payment Element (Embedded): Custom-UI mit Stripe-gehosteter Card-Tokenization — das beste Balance-Verhältnis für die meisten Anwendungsfälle",
                    "Direkte API-Integration: Vollständige Kontrolle, aber PCI SAQ D-Compliance erforderlich — nur für Spezialanforderungen empfohlen",
                ],
            },
            {
                type: "heading",
                text: "PaymentIntent vs. SetupIntent: Die richtige Wahl",
                level: 2,
            },
            {
                type: "paragraph",
                text: "PaymentIntent und SetupIntent sind die Kernkonstrukte der Stripe API. PaymentIntent repräsentiert eine Zahlungsabsicht — Geld soll jetzt oder bald transferiert werden. SetupIntent speichert eine Zahlungsmethode für zukünftige Nutzung, ohne sofortigen Transfer. Die Verwechslung dieser beiden führt zu häufigen Implementierungsfehlern.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "SetupIntent für Subscription mit Trial Period",
                code: `import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// SetupIntent: Zahlungsmethode speichern, kein sofortiger Charge
export async function setupSubscriptionPayment(customerId: string) {
    const setupIntent = await stripe.setupIntents.create({
        customer: customerId,
        payment_method_types: ["card", "sepa_debit"],
        usage: "off_session", // Erlaubt spätere automatische Charges
        metadata: {
            purpose: "subscription_setup",
            environment: process.env.NODE_ENV!,
        },
    });

    return { clientSecret: setupIntent.client_secret };
}

// Nach erfolgreichem Setup: Subscription erstellen
export async function createSubscription(
    customerId: string,
    paymentMethodId: string,
    priceId: string
) {
    const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        default_payment_method: paymentMethodId,
        trial_period_days: 14,
        payment_settings: {
            save_default_payment_method: "on_subscription",
        },
        expand: ["latest_invoice.payment_intent"],
    });

    return subscription;
}`,
            },
            {
                type: "heading",
                text: "Idempotency Keys: Die unsichtbare Sicherheitsschicht",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Idempotency Keys sind das am häufigsten übersehene Feature der Stripe API — und gleichzeitig eines der kritischsten. Netzwerkfehler, Timeouts und Retry-Logik können ohne Idempotency Keys zu Doppelbelastungen führen. Stripe garantiert, dass derselbe Request mit demselben Idempotency Key nur einmal verarbeitet wird — eine fundamentale Sicherheitsgarantie für jede Payment-Infrastruktur.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Idempotency Keys für sichere Retry-Logik",
                code: `import { createHash } from "crypto";

function generateIdempotencyKey(
    userId: string,
    amount: number,
    currency: string,
    timestamp: number
): string {
    // Deterministischer Key basierend auf Transaktionsparametern
    return createHash("sha256")
        .update(\`\${userId}-\${amount}-\${currency}-\${timestamp}\`)
        .digest("hex")
        .substring(0, 32);
}

export async function chargeCustomer(
    customerId: string,
    amount: number,
    currency: string = "eur"
) {
    const timestamp = Math.floor(Date.now() / 60000); // 1-Minute Window
    const idempotencyKey = generateIdempotencyKey(
        customerId,
        amount,
        currency,
        timestamp
    );

    return await stripe.paymentIntents.create(
        {
            amount,
            currency,
            customer: customerId,
            confirm: true,
            automatic_payment_methods: { enabled: true },
        },
        { idempotencyKey }
    );
}`,
            },
            {
                type: "heading",
                text: "Webhook-Infrastruktur: Die kritische Verbindung",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Webhooks sind die Achillesferse vieler Stripe-Integrationen. Der Zahlungsstatus wird von Stripe asynchron kommuniziert — das bedeutet, die Applikation muss Webhooks zuverlässig empfangen, verifizieren und verarbeiten. Ein ausgefallener Webhook-Endpoint bedeutet verlorene Zahlungsbestätigungen, nicht erfüllte Orders und Kundenbeschwerden.",
            },
            {
                type: "callout",
                variant: "warning",
                text: "Verarbeiten Sie Webhooks niemals synchron im HTTP-Handler. Empfangen, Signatur verifizieren, in Queue schreiben, 200 antworten — das ist der einzig korrekte Pattern. Alles andere führt zu Timeouts und verlorenen Events bei Lastspitzen.",
            },
            {
                type: "callout",
                variant: "tip",
                text: "Stripe's Webhook-Signatur-Verifizierung (stripe.webhooks.constructEvent) schützt vor gefälschten Events. Speichern Sie den Webhook-Signing-Secret ausschließlich als Environment Variable, nie im Code-Repository.",
            },
        ],
    },
    {
        id: "4",
        slug: "tailwindcss-v4-design-system-paradigm",
        logNumber: "PDA-LOG-004",
        title: "Tailwind CSS v4: The New Design System Paradigm",
        category: "DESIGN",
        date: "15.12.2025",
        readTime: "05:00 MIN",
        excerpt:
            "CSS-first Configuration, der neue @theme-Directive und ein vollständig überarbeiteter PostCSS-Layer transformieren die Art, wie Design-Systeme auf Code-Level definiert werden.",
        author: { name: "Palmer Digital", role: "Design Ops Division" },
        tags: ["Tailwind", "CSS", "Design System", "PostCSS", "Frontend"],
        relatedSlugs: [
            "nextjs-15-react-19-infrastructure-standard",
            "typescript-5-precision-engineering",
        ],
        content: [
            {
                type: "paragraph",
                text: "Tailwind CSS v4 ist kein inkrementelles Update. Es ist eine vollständige Neudefinition der Frage: Wo wird ein Design System konfiguriert? Die Antwort in v4 ist eindeutig: in CSS. Das tailwind.config.js ist Geschichte. An seine Stelle tritt der @theme-Directive — ein CSS-nativer Ansatz zur Design-Token-Definition.",
            },
            {
                type: "heading",
                text: "CSS-First: Die neue Konfigurationsphilosophie",
                level: 2,
            },
            {
                type: "paragraph",
                text: "In Tailwind v3 war die Konfiguration in JavaScript definiert: Farben, Spacing, Breakpoints, Fonts — alles in tailwind.config.js oder tailwind.config.ts. Das hatte Vorteile (TypeScript-Support, programmatische Konfiguration), aber auch fundamentale Nachteile: Die Konfiguration war vom CSS-Layer getrennt, musste zur Build-Zeit ausgewertet werden und war für Designer ohne JavaScript-Kenntnisse schwer zugänglich.",
            },
            {
                type: "code",
                language: "css",
                caption: "Tailwind v4: @theme Directive in globals.css",
                code: `/* Tailwind v4 — CSS-native Design Token Definition */
@import "tailwindcss";

/* Alle Design Tokens im @theme Block */
@theme {
    /* Farb-Palette */
    --color-navy: #001f3f;
    --color-brand-white: #ffffff;
    --color-brand-black: #000000;

    /* Typografie */
    --font-sans: var(--font-geist-sans), system-ui, sans-serif;
    --font-mono: var(--font-geist-mono), monospace;

    /* Spacing */
    --spacing-section: 11rem;

    /* Breakpoints (optional: Override der Defaults) */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
}

/* Globale Basis-Styles */
@layer base {
    *, ::after, ::before {
        box-sizing: border-box;
    }
}`,
            },
            {
                type: "heading",
                text: "PostCSS Plugin: Zero Configuration",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Tailwind v4 ersetzt den bisherigen PostCSS-Setup durch ein einzelnes Plugin: @tailwindcss/postcss. Kein separates autoprefixer, keine komplexe Konfiguration, keine Build-Tool-spezifischen Adapter. Das Plugin erkennt Tailwind-Klassen automatisch, generiert die notwendigen Styles und optimiert das Output-Bundle.",
            },
            {
                type: "code",
                language: "javascript",
                caption: "postcss.config.mjs — minimale Konfiguration für v4",
                code: `// postcss.config.mjs
const config = {
    plugins: {
        "@tailwindcss/postcss": {},
    },
};

export default config;

// VERGLEICH: Tailwind v3 postcss.config.js
// const config = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };`,
            },
            {
                type: "heading",
                text: "Design Tokens als CSS Custom Properties",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Der eleganteste Aspekt von Tailwind v4 ist die direkte Korrespondenz zwischen @theme-Tokens und CSS Custom Properties. Ein im @theme-Block definierter Wert ist gleichzeitig eine Tailwind-Utility-Klasse und eine CSS Variable, die überall im Stylesheet genutzt werden kann. Kein Mapping, keine Transformation — pure CSS-Semantik.",
            },
            {
                type: "callout",
                variant: "info",
                text: "CSS Custom Properties aus dem @theme-Block sind automatisch als CSS-Variablen im globalen Scope verfügbar. `--color-navy: #001f3f` im @theme erzeugt sowohl `bg-navy` als Utility-Klasse als auch `var(--color-navy)` als CSS Variable. Design und Implementation sind damit direkt synchronisiert.",
            },
            {
                type: "heading",
                text: "Performance: Messbare Build-Zeit-Verbesserungen",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Tailwind v4 ist signifikant schneller als v3. Der neue Oxide-Engine (in Rust geschrieben) ersetzt den bisherigen JavaScript-basierten Scanner. In unseren Projekten haben wir Build-Zeit-Reduktionen von 35-60% beobachtet — besonders signifikant in großen Codebasen mit vielen Komponenten.",
            },
            {
                type: "list",
                items: [
                    "Incremental Builds: Nur geänderte Files werden neu gescannt — deutliche Verbesserung bei watch-Mode",
                    "Rust-basierter Oxide-Engine: 5-10x schnellerer Content-Scan als der JavaScript-basierte Vorgänger",
                    "Lightning CSS: Optionaler CSS-Minifier und Transformer, der autoprefixer ersetzt",
                    "Kleinere Output-Bundles: Verbessertes Dead-Code-Elimination für Styles",
                ],
            },
            {
                type: "callout",
                variant: "tip",
                text: "Migration von v3 zu v4: Das offizielle @tailwindcss/upgrade-Paket automatisiert die meisten Migrationspfade. Wichtig: Utility-Klassen, die aus dem @theme-Block stammen, werden automatisch generiert. Benutzerdefinierte Klassen via @layer components bleiben kompatibel.",
            },
        ],
    },
    {
        id: "5",
        slug: "railway-vs-vercel-cloud-backbone",
        logNumber: "PDA-LOG-005",
        title: "Railway vs. Vercel: Choosing Your Cloud Backbone",
        category: "INFRASTRUCTURE",
        date: "01.11.2025",
        readTime: "07:00 MIN",
        excerpt:
            "Zwei Plattformen, zwei Philosophien. Vercel optimiert den Frontend-Delivery-Layer. Railway orchestriert den gesamten Backend-Stack. Die Architektur entscheidet.",
        author: { name: "Palmer Digital", role: "Infrastructure Division" },
        tags: ["Railway", "Vercel", "Infrastructure", "Cloud", "DevOps"],
        relatedSlugs: [
            "mongodb-atlas-core-scaleups",
            "nextjs-15-react-19-infrastructure-standard",
        ],
        content: [
            {
                type: "paragraph",
                text: "Die Plattform-Wahl ist keine technische Nebensache. Sie bestimmt die Deployment-Velocity, die Betriebskosten, die Skalierungsstrategien und die Systemarchitektur eines Produkts. Vercel und Railway adressieren unterschiedliche Schichten des Cloud-Stacks — und die beste Architektur nutzt oft beide.",
            },
            {
                type: "heading",
                text: "Vercel: Der Frontend-Delivery-Layer",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Vercel ist für Next.js-Applikationen der natürliche Lebensraum. Die Plattform wurde von denselben Entwicklern gebaut, die das Framework entwickeln — die Integration ist tief und optimiert. Vercel's Edge Network, Incremental Static Regeneration, Image Optimization und Analytics sind als first-class Features in die Next.js-Runtime integriert, nicht als Add-ons.",
            },
            {
                type: "list",
                items: [
                    "Edge Network: 100+ PoPs weltweit mit automatischem CDN-Caching — statische Assets in <10ms TTFB global",
                    "ISR (Incremental Static Regeneration): Statische Pages on-demand regenerieren ohne Full-Rebuild",
                    "Edge Functions: Serverless Functions am nächsten PoP zum User — minimale Latenz für Geo-basierte Logik",
                    "Vercel Analytics: Real User Monitoring direkt in der Plattform ohne externes Tool",
                    "Preview Deployments: Automatische Preview-URL für jeden PR — zero Konfiguration",
                ],
            },
            {
                type: "callout",
                variant: "info",
                text: "Vercel's größte Stärke ist die Developer Experience. Von git push bis Live-Deployment in unter 60 Sekunden — ohne Konfiguration. Für Next.js-Applikationen ist Vercel der Referenz-Deployment-Target.",
            },
            {
                type: "heading",
                text: "Railway: Der Full-Stack-Orchestrator",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Railway löst das Problem, das Vercel nicht addressiert: Backend-Services, Worker Processes, Datenbanken, Queues, Cron Jobs — die gesamte Infrastruktur jenseits des Frontend-Delivery-Layers. Railway's Container-First-Approach erlaubt die Deployment jedes Services, der in einem Docker-Container läuft, ohne Ops-Overhead.",
            },
            {
                type: "code",
                language: "yaml",
                caption: "railway.toml — Service-Konfiguration für Node.js Backend",
                code: `[build]
builder = "NIXPACKS"
buildCommand = "npm ci && npm run build"

[deploy]
startCommand = "npm run start:prod"
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 3

[[services]]
name = "api"
source = "."

[[services]]
name = "worker"
source = "./worker"

[services.deploy]
startCommand = "node worker/index.js"

[[crons]]
schedule = "0 */6 * * *"
command = "node scripts/cleanup.js"`,
            },
            {
                type: "heading",
                text: "Die Hybrid-Architektur: Vercel + Railway",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Für ambitionierte digitale Produkte empfehlen wir eine Hybrid-Architektur: Next.js-Frontend auf Vercel für optimale Edge-Performance, Backend-Services und Datenbank-Infrastruktur auf Railway für volle Kontrolle und Flexibilität. Diese Kombination liefert das Beste beider Welten — ohne die Kompromisse einer Single-Platform-Entscheidung.",
            },
            {
                type: "list",
                items: [
                    "Vercel: Next.js App, Edge Functions, Image CDN, Analytics",
                    "Railway: Node.js API, Background Workers, PostgreSQL/Redis, Cron Jobs",
                    "MongoDB Atlas: Primäre Datenbank (managed, kein eigener Railway-Service nötig)",
                    "Stripe: Payment Processing (extern, kein Hosting nötig)",
                ],
            },
            {
                type: "heading",
                text: "Kostenvergleich: Reality Check",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Vercel's Pricing ist usage-based und kann bei hohem Traffic-Volumen oder vielen Serverless-Function-Invocations signifikant skalieren. Railway's Pricing ist resource-based (CPU + RAM + Transfer) und damit besser planbar für Backend-Services mit vorhersehbaren Lastprofilen.",
            },
            {
                type: "callout",
                variant: "warning",
                text: "Vercel's kostenloser Tier ist ideal für Entwicklung und frühe Produktion. Bei >100k Serverless Function Executions pro Monat oder Enterprise-Traffic empfehlen wir eine detaillierte Cost-Analysis. Vercel Pro (20$/Monat) bietet deutlich mehr Headroom — der Wechsel lohnt sich früh.",
            },
        ],
    },
    {
        id: "6",
        slug: "typescript-5-precision-engineering",
        logNumber: "PDA-LOG-006",
        title: "TypeScript 5.x: Precision Engineering at Scale",
        category: "ENGINEERING",
        date: "20.10.2025",
        readTime: "06:00 MIN",
        excerpt:
            "Const Type Parameters, Variadic Tuple Types, Stage-3-Decorators und Template Literal Types auf Enterprise-Level — TypeScript 5.x bringt die Präzision, die skalierbare Systeme erfordern.",
        author: { name: "Palmer Digital", role: "Engineering Division" },
        tags: ["TypeScript", "Types", "Engineering", "Decorators", "Generics"],
        relatedSlugs: [
            "nextjs-15-react-19-infrastructure-standard",
            "stripe-custom-flows-vs-out-of-the-box",
        ],
        content: [
            {
                type: "paragraph",
                text: "TypeScript ist nicht optional — es ist die Grundlage jeder ernsthaften Web-Applikation. Aber TypeScript ist auch ein Werkzeug, das man lernen muss zu nutzen. Die meisten TypeScript-Codebasen operieren auf einem Niveau, das weit unter dem liegt, was das Typsystem bieten kann. TypeScript 5.x öffnet neue Möglichkeiten der Präzision — wenn man weiß, wie man sie einsetzt.",
            },
            {
                type: "heading",
                text: "Const Type Parameters: Inferenz auf Literaltyp-Level",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Const Type Parameters (const T) ermöglichen es, TypeScript anzuweisen, einen Type-Parameter als konstanten Literaltyp zu inferieren statt als allgemeinen Basistyp. Das klingt abstrakt — die praktischen Auswirkungen sind aber immens, insbesondere bei Builder-Patterns, Route-Definitionen und Config-Systemen.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "const Type Parameter für präzise Route-Inferenz",
                code: `// Ohne const: TypeScript inferiert string[]
function createRoutes<T extends readonly string[]>(routes: T) {
    return routes;
}

const routes = createRoutes(["/home", "/about", "/blog"]);
// Type: string[] — zu unspezifisch

// Mit const: TypeScript inferiert Literaltypen
function createRoutes<const T extends readonly string[]>(routes: T) {
    return routes;
}

const routes = createRoutes(["/home", "/about", "/blog"]);
// Type: readonly ["/home", "/about", "/blog"] — präzise!

// Jetzt: Typsichere Router-Logik
type AppRoute = (typeof routes)[number];
// AppRoute = "/home" | "/about" | "/blog"

function navigate(route: AppRoute) {
    window.location.href = route;
}

navigate("/blog");   // OK
navigate("/contact"); // TypeScript Error: Argument of type '"/contact"' is not assignable`,
            },
            {
                type: "heading",
                text: "Variadic Tuple Types: Typsichere Compose-Funktionen",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Variadic Tuple Types ermöglichen das präzise Typisieren von Funktionen, die eine variable Anzahl von Argumenten mit unterschiedlichen Typen akzeptieren. Das klassische Anwendungsgebiet: Compose- und Pipe-Utilities, Middleware-Chains und Builder-APIs.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Typsichere Middleware-Chain mit Variadic Tuples",
                code: `type Middleware<TIn, TOut> = (input: TIn) => TOut;

// Variadic Tuple Type für Middleware-Chain
type Chain<T extends readonly Middleware<unknown, unknown>[]> =
    T extends readonly [
        Middleware<infer TIn, infer TOut>,
        ...infer TRest extends readonly Middleware<unknown, unknown>[]
    ]
        ? TOut extends Parameters<TRest[0]>[0]
            ? Chain<TRest>
            : never
        : T extends readonly [Middleware<infer TIn, infer TOut>]
        ? Middleware<TIn, TOut>
        : never;

// Praktischer Einsatz: Typsichere Transformationspipeline
const pipeline = pipe(
    (input: string) => parseInt(input, 10),  // string → number
    (input: number) => input * 2,             // number → number
    (input: number) => input.toString()       // number → string
);

// pipeline: (input: string) => string — korrekt inferiert`,
            },
            {
                type: "heading",
                text: "Template Literal Types: Typsichere DSLs",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Template Literal Types sind eines der mächtigsten Features des TypeScript Typsystems — und einer der am häufigsten unterschätzten. Sie ermöglichen die Definition von Typen, die String-Patterns beschreiben, was für Event-Namen, CSS-Klassen-Generierung, API-Route-Typisierung und DSL-Design entscheidend ist.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Template Literal Types für typsichere Event-Namen",
                code: `type EventEntity = "order" | "user" | "product" | "payment";
type EventAction = "created" | "updated" | "deleted" | "completed";

// Template Literal Type: alle validen Event-Kombinationen
type AppEvent = \`\${EventEntity}.\${EventAction}\`;

// Ergebnis: "order.created" | "order.updated" | "order.deleted" | ...
// TypeScript generiert automatisch alle 16 Kombinationen

type EventHandler<T extends AppEvent> = {
    event: T;
    handler: (payload: EventPayloadMap[T]) => void;
};

function on<T extends AppEvent>(
    event: T,
    handler: (payload: EventPayloadMap[T]) => void
) {
    // Implementierung
}

on("order.created", (payload) => {
    // payload ist korrekt typisiert als OrderCreatedPayload
    console.log(payload.orderId);
});

on("invalid.event", (payload) => {}); // TypeScript Error`,
            },
            {
                type: "heading",
                text: "Strict Mode: Die nicht-verhandelbare Baseline",
                level: 2,
            },
            {
                type: "paragraph",
                text: "TypeScript's Strict Mode ist keine Präferenz — es ist die einzige akzeptable Konfiguration für Produktionscode. Strict Mode aktiviert noImplicitAny, strictNullChecks, strictFunctionTypes und weitere Flags, die zusammen verhindern, dass TypeScript zur Fassade ohne reale Typsicherheit wird.",
            },
            {
                type: "callout",
                variant: "warning",
                text: "TypeScript ohne strictNullChecks ist TypeScript ohne den wichtigsten Vorteil. Undefined und null sind die häufigsten Runtime-Fehlerquellen in JavaScript-Applikationen. strictNullChecks macht sie zum Compile-Time-Problem — bevor sie in Production Fehler verursachen.",
            },
            {
                type: "callout",
                variant: "tip",
                text: "Für bestehende Codebasen ohne Strict Mode empfehlen wir eine schrittweise Migration: ts-migrate automatisiert das initiale Hinzufügen von Type-Annotationen. Anschließend können Strict-Mode-Flags einzeln aktiviert und die dadurch aufgedeckten Fehler systematisch behoben werden.",
            },
        ],
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    if (!category || category === "ALL") return blogPosts;
    return blogPosts.filter(
        (post) => post.category.toUpperCase() === category.toUpperCase()
    );
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
    return blogPosts.filter((post) => slugs.includes(post.slug));
}
