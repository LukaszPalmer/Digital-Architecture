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
    {
        id: "7",
        slug: "postgresql-relational-foundation-production",
        logNumber: "PDA-LOG-007",
        title: "PostgreSQL: The Relational Foundation for Production Systems",
        category: "DATABASE",
        date: "30.03.2026",
        readTime: "09:00 MIN",
        excerpt:
            "JSONB, partielle Indizes, Window Functions und Row-Level Security — PostgreSQL ist kein Legacy-System. Es ist die ausgefeilteste relationale Datenbank der Welt, wenn man weiß, wie man sie einsetzt.",
        author: { name: "Palmer Digital", role: "Data Infrastructure Division" },
        tags: ["PostgreSQL", "Database", "SQL", "Indexing", "Performance"],
        relatedSlugs: [
            "mongodb-atlas-core-scaleups",
            "railway-vs-vercel-cloud-backbone",
        ],
        content: [
            {
                type: "paragraph",
                text: "PostgreSQL hat ein Image-Problem. Es gilt als solide, zuverlässig, etabliert — Adjektive, die in der Tech-Branche häufig als Synonyme für 'langweilig' verwendet werden. Diese Einschätzung ist falsch. PostgreSQL ist eine der technisch fortschrittlichsten Datenbanken der Welt, mit einem Feature-Set, das die meisten Entwickler nur zu einem Bruchteil ausschöpfen. Wer PostgreSQL als 'simples SQL' betrachtet, verschenkt Performance, Sicherheit und Flexibilität.",
            },
            {
                type: "heading",
                text: "JSONB: Das hybride Datenmodell",
                level: 2,
            },
            {
                type: "paragraph",
                text: "PostgreSQL's JSONB-Typ ist kein Kompromiss — er ist eine echte Stärke. JSONB speichert JSON-Dokumente in einem binär-optimierten Format, das indizierbar, querybar und vollständig in SQL-Operationen integriert ist. Das Resultat: relationale Integrität wo sie gebraucht wird, Dokumenten-Flexibilität wo sie sinnvoll ist — in ein und derselben Datenbank.",
            },
            {
                type: "code",
                language: "sql",
                caption: "JSONB: Queries, Indizes und Operatoren",
                code: `-- Tabelle mit hybridem Schema
CREATE TABLE products (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name        TEXT NOT NULL,
    price_cents INTEGER NOT NULL,
    -- Flexible Attribute als JSONB
    attributes  JSONB NOT NULL DEFAULT '{}'
);

-- GIN-Index für schnelle JSONB-Suche
CREATE INDEX idx_products_attributes ON products USING GIN (attributes);

-- Produkte mit spezifischem Attribut finden
SELECT name, price_cents, attributes->>'color' AS color
FROM products
WHERE attributes @> '{"color": "black", "in_stock": true}';

-- JSONB-Feld aktualisieren ohne Full-Document-Rewrite
UPDATE products
SET attributes = attributes || '{"featured": true}'::jsonb
WHERE id = '...';

-- Alle einzigartigen Farbwerte aggregieren
SELECT DISTINCT attributes->>'color' AS color
FROM products
WHERE attributes ? 'color'
ORDER BY color;`,
            },
            {
                type: "callout",
                variant: "info",
                text: "JSONB und JSON sind nicht identisch. JSON speichert den Originaltext und ist schneller beim Schreiben. JSONB parsed und speichert binär — schneller beim Lesen, indizierbar, und unterstützt alle mächtigen @>, ?, ?| Operatoren. Für Query-intensive Workloads ist JSONB immer die richtige Wahl.",
            },
            {
                type: "heading",
                text: "Indexing-Strategien: Jenseits des B-Tree",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Der B-Tree-Index ist der Standard — aber nicht immer die optimale Wahl. PostgreSQL bietet GIN, GiST, BRIN, Hash und partielle Indizes, die für spezifische Zugriffsmuster erhebliche Performance-Vorteile liefern. Die Wahl des richtigen Index-Typs ist oft die impactstärkste Optimierung, die ohne Schema-Änderungen möglich ist.",
            },
            {
                type: "list",
                items: [
                    "B-Tree: Standardfall — Gleichheitssuche, Bereichsqueries, Sortierung. Für 80% aller Anwendungsfälle korrekt.",
                    "GIN (Generalized Inverted Index): Arrays, JSONB, Volltextsuche — wenn ein Datensatz mehrere Werte enthält, die einzeln suchbar sein müssen.",
                    "GiST (Generalized Search Tree): Geometrie, Textähnlichkeit, IP-Ranges — für nicht-lineare Suchmuster.",
                    "BRIN (Block Range Index): Sehr große Tabellen mit natürlicher Sortierung (z.B. Zeitreihen) — minimal Speicherverbrauch bei guter Performance.",
                    "Partieller Index: Nur eine Teilmenge der Rows indizieren — ideal für Queries auf seltene Werte wie status = 'pending'.",
                ],
            },
            {
                type: "code",
                language: "sql",
                caption: "Partielle und zusammengesetzte Indizes für typische Produktions-Queries",
                code: `-- Partieller Index: Nur offene Orders indizieren
-- Deutlich kleiner als ein Full-Index, genauso schnell für den Query
CREATE INDEX idx_orders_pending
    ON orders (created_at DESC)
    WHERE status = 'pending';

-- Zusammengesetzter Index: Reihenfolge ist entscheidend
-- Dieser Index bedient: WHERE user_id = ? ORDER BY created_at DESC
CREATE INDEX idx_orders_user_created
    ON orders (user_id, created_at DESC);

-- GIN-Index für Array-Suche
CREATE INDEX idx_products_tags ON products USING GIN (tags);

-- Query nutzt GIN-Index: alle Produkte mit Tag 'sale'
SELECT * FROM products WHERE tags @> ARRAY['sale'];

-- Index auf berechneten Ausdruck
CREATE INDEX idx_users_email_lower
    ON users (LOWER(email));

-- Query nutzt Expression-Index
SELECT * FROM users WHERE LOWER(email) = LOWER('User@Example.com');`,
            },
            {
                type: "heading",
                text: "Window Functions: Analytische Queries ohne Subqueries",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Window Functions sind eines der mächtigsten — und am häufigsten unterschätzten — Features von SQL. Sie erlauben Berechnungen über eine Gruppe von Rows, die in Bezug zu der aktuellen Row stehen, ohne die Rows zu gruppieren oder zu aggregieren. Das Ergebnis: komplexe analytische Queries in einer einzigen, lesbaren SQL-Anweisung.",
            },
            {
                type: "code",
                language: "sql",
                caption: "Window Functions für Ranking, Moving Average und Kumulative Summen",
                code: `-- Ranking: Top-Produkte pro Kategorie
SELECT
    name,
    category,
    revenue,
    RANK() OVER (PARTITION BY category ORDER BY revenue DESC) AS rank_in_category
FROM products
WHERE rank_in_category <= 3; -- Top 3 pro Kategorie

-- Gleitender 7-Tage-Durchschnitt für Bestellvolumen
SELECT
    order_date,
    daily_revenue,
    AVG(daily_revenue) OVER (
        ORDER BY order_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS moving_avg_7d
FROM daily_revenue_summary
ORDER BY order_date;

-- Kumulative Summe und prozentualer Anteil
SELECT
    product_name,
    revenue,
    SUM(revenue) OVER (ORDER BY revenue DESC) AS cumulative_revenue,
    ROUND(
        100.0 * revenue / SUM(revenue) OVER (),
        2
    ) AS pct_of_total
FROM product_revenue
ORDER BY revenue DESC;`,
            },
            {
                type: "heading",
                text: "Row-Level Security: Datenisolation auf Datenbankebene",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Row-Level Security (RLS) ist PostgreSQL's native Lösung für Multi-Tenant-Datenisolation. Statt Tenant-Filterung in der Applikationsschicht zu implementieren (fehleranfällig, schwer auditierbar), wird die Zugriffskontrolle direkt in der Datenbank erzwungen. Jede Query — unabhängig von der Applikationslogik — ist auf die Rows beschränkt, auf die der aktuelle Datenbanknutzer Zugriff hat.",
            },
            {
                type: "code",
                language: "sql",
                caption: "Row-Level Security für Multi-Tenant SaaS",
                code: `-- RLS auf der Tabelle aktivieren
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy: User sieht nur seine eigenen Orders
CREATE POLICY orders_isolation ON orders
    USING (user_id = current_setting('app.current_user_id')::uuid);

-- In der Applikation: User-ID vor jedem Query setzen
-- (via Prisma middleware, pg Pool hooks, etc.)
SET LOCAL app.current_user_id = 'user-uuid-here';

-- Dieser Query gibt automatisch nur Orders des aktuellen Users zurück
-- Keine WHERE-Klausel nötig — RLS filtert transparent
SELECT * FROM orders ORDER BY created_at DESC;

-- Für Service-Accounts: Bypass via BYPASSRLS Rolle
-- Niemals dem Applikations-User geben — nur für Admin-Operationen
ALTER ROLE service_admin BYPASSRLS;`,
            },
            {
                type: "callout",
                variant: "warning",
                text: "RLS ist kein Ersatz für Application-Level-Validation, aber eine kritische Defense-in-Depth-Maßnahme. Ein SQL-Injection-Exploit, ein vergessenes WHERE, ein fehlerhafter JOIN — RLS stellt sicher, dass Tenant-Daten auch bei Applikationsfehlern isoliert bleiben. Besonders für SaaS-Produkte ist RLS nicht optional.",
            },
            {
                type: "heading",
                text: "Connection Pooling: PgBouncer und Supabase Pooler",
                level: 2,
            },
            {
                type: "paragraph",
                text: "PostgreSQL's größte operationale Schwäche ist das Verbindungsmodell: jede Verbindung spawnt einen eigenen OS-Prozess. Bei 500+ simultanen Verbindungen — in Serverless-Umgebungen mit vielen kurzlebigen Function-Invocations die Regel — bricht die Performance ein. Die Lösung ist Connection Pooling via PgBouncer oder den integrierten Supabase Pooler.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Prisma mit Supabase Pooler: Transaction Mode für Serverless",
                code: `// .env — zwei Connection Strings: direkt und via Pooler
// DATABASE_URL: Pooler-URL (Transaction Mode) für Query-Operationen
// DATABASE_URL_DIRECT: Direkte Verbindung für Migrationen

// prisma/schema.prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")        // Pooler (port 6543)
  directUrl = env("DATABASE_URL_DIRECT") // Direkt (port 5432)
}

// Prisma Client — nutzt Pooler-URL automatisch für Queries
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const db =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: process.env.NODE_ENV === "development"
            ? ["query", "error", "warn"]
            : ["error"],
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = db;
}`,
            },
            {
                type: "callout",
                variant: "tip",
                text: "Supabase's Transaction Mode Pooler ist die einfachste PostgreSQL-Pooling-Lösung für Next.js und andere Serverless-Runtimes. Wichtig: Im Transaction Mode sind Prepared Statements und Session-basierte Features (SET LOCAL, temp tables) nicht verfügbar. Für diese Anwendungsfälle direkten Port 5432 verwenden.",
            },
            {
                type: "heading",
                text: "PostgreSQL vs. MongoDB: Die ehrliche Analyse",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Die NoSQL-vs-SQL-Debatte ist falsch gestellt. MongoDB und PostgreSQL sind unterschiedliche Werkzeuge für unterschiedliche Anforderungen — und moderne Architekturen nutzen oft beide. MongoDB's Document Model ist überlegen für hochvariable, hierarchische Daten mit schnellen Schema-Iterationen. PostgreSQL's relationales Modell ist überlegen für strukturierte Daten mit komplexen Beziehungen, transaktionalen Anforderungen und analytischen Queries.",
            },
            {
                type: "list",
                items: [
                    "PostgreSQL wählen: Wenn Datenintegrität und ACID-Transaktionen nicht verhandelbar sind — Finanzdaten, Bestellsysteme, Compliance-Anforderungen.",
                    "PostgreSQL wählen: Wenn komplexe relational Queries (JOINs über viele Tabellen, analytische Aggregationen) zum Kernworkload gehören.",
                    "MongoDB wählen: Wenn das Schema sich häufig ändert und Flexibilität wichtiger ist als Konsistenzgarantien.",
                    "Beide kombinieren: PostgreSQL für transaktionale Kerndaten, MongoDB für Event-Logs, User-Activity, Content — eine valide und häufig optimale Architektur.",
                ],
            },
            {
                type: "callout",
                variant: "info",
                text: "PostgreSQL 16 bringt signifikante Performance-Verbesserungen: parallele Query-Execution für mehr Query-Typen, verbessertes Logical Replication und SIMD-Optimierungen für Aggregationen. Wer noch auf PostgreSQL 14 oder älter ist, sollte das Upgrade priorisieren — die Performance-Gewinne sind messbar.",
            },
        ],
    },
    {
        id: "8",
        slug: "socketio-realtime-websocket-architecture",
        logNumber: "PDA-LOG-008",
        title: "Socket.IO & WebSockets: Real-Time Systeme für Production",
        category: "ARCHITECTURE",
        date: "01.04.2026",
        readTime: "07:00 MIN",
        excerpt: "Echtzeit-Kommunikation ist kein Nice-to-have mehr — sie ist Kerninfrastruktur. Socket.IO und WebSockets richtig zu architektonieren bedeutet: skalierbar, ausfallsicher und messbar.",
        author: { name: "Palmer Digital", role: "Architecture Division" },
        tags: ["Socket.IO", "WebSockets", "Real-Time", "Node.js", "Skalierung"],
        relatedSlugs: [
            "nodejs-core-backend-architecture",
            "nextjs-15-react-19-infrastructure-standard",
        ],
        content: [
            {
                type: "paragraph",
                text: "Die Erwartung an moderne Web-Applikationen hat sich fundamental verschoben. Nutzer erwarten Live-Updates, Kollaboration in Echtzeit und sofortige System-Reaktionen — nicht nach einem Browser-Refresh, sondern unmittelbar. Socket.IO ist die produktionserprobte Antwort auf diese Anforderung: eine Abstraktion über WebSockets mit automatischem Fallback, strukturiertem Event-System und horizontaler Skalierbarkeit.",
            },
            {
                type: "heading",
                text: "WebSocket vs. HTTP: Der fundamentale Unterschied",
                level: 2,
            },
            {
                type: "paragraph",
                text: "HTTP ist ein Request-Response-Protokoll — der Client fragt, der Server antwortet, die Verbindung wird geschlossen. Für statische Inhalte ist das optimal. Für Echtzeit-Daten ist es ein Architektur-Antipattern. WebSockets etablieren eine persistente, bidirektionale Verbindung. Einmal geöffnet, können Server und Client jederzeit Nachrichten senden — ohne den Overhead eines neuen HTTP-Handshakes.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Socket.IO Server-Setup mit Express und Namespace-Architektur",
                code: `import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: { origin: process.env.CLIENT_URL, credentials: true },
    transports: ["websocket", "polling"], // WebSocket first, polling als Fallback
});

// Namespace: isolierter Kommunikationskanal pro Feature-Bereich
const dashboardNS = io.of("/dashboard");

dashboardNS.on("connection", (socket) => {
    console.log(\`Client connected: \${socket.id}\`);

    // Room: Nutzer-spezifische Gruppe innerhalb des Namespace
    socket.on("join:project", (projectId: string) => {
        socket.join(\`project:\${projectId}\`);
        socket.emit("joined", { projectId, timestamp: Date.now() });
    });

    // Broadcast an alle im Room — exkl. Sender
    socket.on("data:update", (payload) => {
        socket.to(\`project:\${payload.projectId}\`).emit("data:changed", payload);
    });

    socket.on("disconnect", (reason) => {
        console.log(\`Client disconnected: \${reason}\`);
    });
});

httpServer.listen(3001);`,
            },
            {
                type: "heading",
                text: "Horizontale Skalierung mit Redis Adapter",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Ein einzelner Socket.IO Server ist limitiert auf die Verbindungen, die ein Node.js-Prozess verwalten kann. Sobald mehrere Server-Instanzen betrieben werden — sei es für Hochverfügbarkeit oder Last-Verteilung — entsteht das Problem: Client A ist mit Server 1 verbunden, Client B mit Server 2. Ein Event von Client A erreicht Client B nicht ohne gemeinsamen Message-Bus. Die Lösung: der Redis Adapter.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Redis Adapter für Multi-Instance Socket.IO Deployment",
                code: `import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";

const pubClient = createClient({ url: process.env.REDIS_URL });
const subClient = pubClient.duplicate();

await Promise.all([pubClient.connect(), subClient.connect()]);

// Alle Server-Instanzen teilen denselben Redis-Pub/Sub-Channel
io.adapter(createAdapter(pubClient, subClient));

// Ab jetzt: io.to(room).emit() funktioniert über alle Instanzen hinweg
// Server 1 kann Clients auf Server 2 erreichen — transparent`,
            },
            {
                type: "callout",
                variant: "info",
                text: "Der Redis Adapter ist die produktionserprobte Standardlösung für horizontale Socket.IO-Skalierung. Für Deployments auf Railway oder Vercel Edge Functions empfiehlt sich zusätzlich eine Sticky-Session-Konfiguration am Load Balancer, um den WebSocket-Upgrade-Handshake zu stabilisieren.",
            },
            {
                type: "heading",
                text: "Reconnection & State Recovery",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Netzwerkunterbrechungen sind unvermeidlich. Eine robuste Echtzeit-Architektur behandelt Reconnection nicht als Ausnahme, sondern als regulären Betriebszustand. Socket.IO bietet eingebaute Reconnection-Logik — entscheidend ist jedoch, was nach dem Wiederverbinden passiert: Welcher State wurde verpasst? Welche Events müssen nachgeliefert werden?",
            },
            {
                type: "list",
                items: [
                    "Socket.IO reconnectionAttempts und reconnectionDelay konfigurieren — kein blindes Reconnect-Flooding",
                    "Server-seitig: offlineQueue pattern — Events während Disconnect im Redis buffern und bei Reconnect flushen",
                    "Client-seitig: lastEventId mitsenden — Server liefert alle Events seit letztem bekannten Stand nach",
                    "Für kritische Systeme: Acknowledgements (ACK) als Delivery-Garantie nutzen, nicht Fire-and-Forget",
                ],
            },
            {
                type: "callout",
                variant: "tip",
                text: "Socket.IO ist nicht das richtige Werkzeug für jeden Echtzeit-Use-Case. Für rein server-to-client Push-Notifications (ohne Client→Server-Events) sind Server-Sent Events (SSE) oft die einfachere und ressourcenschonendere Alternative — insbesondere auf Vercel Edge Functions mit ihrem connectionless Deployment-Modell.",
            },
        ],
    },
    {
        id: "9",
        slug: "chatbot-ki-assistent-llm-integration",
        logNumber: "PDA-LOG-009",
        title: "Chatbots & KI-Assistenten: LLM-Integration für moderne Web-Apps",
        category: "ARCHITECTURE",
        date: "01.04.2026",
        readTime: "08:00 MIN",
        excerpt: "LLMs sind Infrastruktur — kein Feature-Gimmick. Wer Chatbots professionell baut, denkt in Prompt-Architektur, Context-Management und Production-Grade API-Integration.",
        author: { name: "Palmer Digital", role: "Architecture Division" },
        tags: ["Chatbot", "LLM", "KI", "OpenAI", "Anthropic", "Prompt Engineering"],
        relatedSlugs: [
            "socketio-realtime-websocket-architecture",
            "nodejs-core-backend-architecture",
        ],
        content: [
            {
                type: "paragraph",
                text: "Der Hype um Chatbots hat sich in einen echten Infrastruktur-Shift verwandelt. Unternehmen, die LLM-basierte Assistenten heute richtig architektonieren, gewinnen messbare Vorteile: reduzierte Support-Kosten, höhere Conversion-Raten und skalierbare Wissens-Distribution ohne lineares Personalwachstum. Der Unterschied zwischen einem Demo-Chatbot und einem Production-System liegt nicht im Modell — er liegt in der Architektur drumherum.",
            },
            {
                type: "heading",
                text: "Prompt-Architektur: Die Basis jedes LLM-Systems",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Ein LLM ist so gut wie die Anweisungen, die es erhält. System-Prompts sind nicht optional — sie sind die Architektur des Bot-Verhaltens. Ein produktionsreifer System-Prompt definiert: Persona und Tonalität, den genauen Aufgabenbereich (was der Bot NICHT tun soll ist ebenso wichtig), Ausgabeformat und die Eskalationsregeln für unbekannte Anfragen.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Strukturierter System-Prompt mit Persona, Scope und Eskalationsregeln",
                code: `const SYSTEM_PROMPT = \`Du bist der Support-Assistent von [Unternehmensname].

## Deine Aufgaben
- Beantworte Fragen zu Bestellungen, Versand und Retouren
- Erkläre Produkteigenschaften anhand des bereitgestellten Produktkatalogs
- Erstelle Support-Tickets für technische Probleme

## Verhaltensregeln
- Antworte ausschließlich auf Deutsch, präzise und freundlich
- Erfinde KEINE Informationen. Wenn du etwas nicht weißt: sage es klar
- Gib KEINE Rabattcodes oder Preisnachlässe ohne explizite Genehmigung
- Eskaliere an einen menschlichen Agenten bei: Beschwerden, rechtlichen Fragen, Zahlungsstreitigkeiten

## Ausgabeformat
- Maximal 3 Absätze pro Antwort
- Nutze Aufzählungen für Schritte oder Listen
- Schließe IMMER mit einer Rückfrage oder einem konkreten nächsten Schritt ab
\`;

// Anthropic Claude API Call mit strukturiertem Kontext
const response = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: conversationHistory, // Multi-Turn: gesamte Gesprächshistorie
});`,
            },
            {
                type: "heading",
                text: "Context-Management: Multi-Turn Conversations",
                level: 2,
            },
            {
                type: "paragraph",
                text: "LLMs sind zustandslos — jeder API-Call ist isoliert. Multi-Turn-Konversationen entstehen dadurch, dass die gesamte Gesprächshistorie mit jedem Request mitgesendet wird. Das ist elegant, hat aber eine direkte Kostenimplikation: mehr Gesprächsverlauf = mehr Input-Tokens = höhere Kosten. Produktionsreife Systeme implementieren deshalb Context-Window-Management: Sliding Window (nur die letzten N Nachrichten), Summarization (ältere Nachrichten werden komprimiert) oder RAG (Retrieval-Augmented Generation für große Wissensbasen).",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Context-Management mit Sliding Window und Token-Schätzung",
                code: `interface Message {
    role: "user" | "assistant";
    content: string;
}

const MAX_CONTEXT_TOKENS = 4000;
const AVG_TOKENS_PER_CHAR = 0.25; // Grobe Schätzung für Deutsch

function trimContext(messages: Message[]): Message[] {
    let totalChars = 0;
    const trimmed: Message[] = [];

    // Neueste Nachrichten zuerst behalten
    for (let i = messages.length - 1; i >= 0; i--) {
        const msgChars = messages[i].content.length;
        const estimatedTokens = msgChars * AVG_TOKENS_PER_CHAR;

        if (totalChars + estimatedTokens > MAX_CONTEXT_TOKENS) break;

        trimmed.unshift(messages[i]);
        totalChars += estimatedTokens;
    }

    return trimmed;
}

// Route Handler (Next.js App Router Server Action)
export async function POST(request: Request) {
    const { message, history } = await request.json();
    const trimmedHistory = trimContext(history);

    const response = await anthropic.messages.create({
        model: "claude-opus-4-6",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [...trimmedHistory, { role: "user", content: message }],
    });

    return Response.json({ reply: response.content[0].text });
}`,
            },
            {
                type: "callout",
                variant: "warning",
                text: "Rate-Limiting ist in Production-Chatbots nicht optional. Ohne Request-Throttling riskierst du sowohl unkontrollierte API-Kosten als auch Missbrauch durch automatisierte Anfragen. Implementiere Rate-Limiting pro Session-ID oder IP — idealerweise mit Redis-backed Token Bucket Algorithmus.",
            },
            {
                type: "heading",
                text: "CRM & Backend Integration",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Ein Chatbot ohne Systemanbindung ist ein FAQ-Ersatz. Der echte Wert entsteht, wenn der Assistent auf Live-Daten zugreifen kann: Bestellstatus aus dem Shop-System, offene Tickets aus dem CRM, Produktverfügbarkeit aus der Datenbank. Function Calling ist der strukturierte Weg, LLMs sicher mit externen APIs zu verbinden — das Modell entscheidet, welche Funktion aufgerufen werden soll, dein Code führt sie aus.",
            },
            {
                type: "list",
                items: [
                    "Function Calling (OpenAI) / Tool Use (Anthropic): LLM ruft strukturiert externe Funktionen auf",
                    "Datenbank-Queries immer gefiltert und readonly — niemals schreibende Operationen ohne explizite Nutzerbestätigung",
                    "Sensible Daten (Zahlungsinfo, Passwörter) niemals in den LLM-Context — nur anonymisierte Referenz-IDs",
                    "Logging aller Bot-Interaktionen für Qualitätssicherung und Compliance — DSGVO-konform anonymisiert",
                ],
            },
        ],
    },
    {
        id: "10",
        slug: "google-analytics-4-ga4-implementation",
        logNumber: "PDA-LOG-010",
        title: "Google Analytics 4: Die neue Daten-Architektur für Web-Properties",
        category: "ANALYTICS",
        date: "01.04.2026",
        readTime: "06:00 MIN",
        excerpt: "GA4 ist kein Upgrade von Universal Analytics — es ist ein anderes Produkt mit anderen Konzepten. Wer saubere Daten will, muss die Event-Architektur von Grund auf neu denken.",
        author: { name: "Palmer Digital", role: "Architecture Division" },
        tags: ["Google Analytics", "GA4", "GTM", "Tracking", "Conversion"],
        relatedSlugs: [
            "google-indexierung-technical-seo-architektur",
            "nextjs-15-react-19-infrastructure-standard",
        ],
        content: [
            {
                type: "paragraph",
                text: "Universal Analytics ist tot. GA4 ist sein Nachfolger — und wer noch glaubt, es handle sich um ein einfaches Upgrade, kämpft täglich mit inkonsistenten Daten, fehlenden Conversions und Berichten, die nichts aussagen. GA4 denkt in Events, nicht in Sessions und Pageviews. Dieser konzeptuelle Shift ist der Schlüssel zu einer sauberen Analytics-Implementierung.",
            },
            {
                type: "heading",
                text: "Das Event-Modell von GA4",
                level: 2,
            },
            {
                type: "paragraph",
                text: "In Universal Analytics war alles eine Session mit Pageviews. In GA4 ist alles ein Event. Ein Seitenaufruf ist das Event page_view, ein Kauf ist purchase, ein Klick auf einen Button ist ein custom_event. Diese Vereinheitlichung klingt simpel — hat aber fundamentale Auswirkungen auf die Datenstruktur. Jedes Event kann bis zu 25 Custom Parameters tragen, die frei definiert werden können. Das ist die Stärke von GA4: maximale Flexibilität bei der Datenerfassung.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "GA4 Custom Events via gtag.js — strukturierter Measurement Plan",
                code: `// Typisierte Event-Helper für konsistentes Tracking
type GA4Event = {
    event_category?: string;
    event_label?: string;
    value?: number;
    currency?: string;
    item_id?: string;
    item_name?: string;
    [key: string]: string | number | undefined;
};

function trackEvent(eventName: string, params: GA4Event = {}) {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", eventName, params);
}

// E-Commerce: Produkt in den Warenkorb
export function trackAddToCart(product: {
    id: string;
    name: string;
    price: number;
    quantity: number;
}) {
    trackEvent("add_to_cart", {
        currency: "EUR",
        value: product.price * product.quantity,
        items: [{
            item_id: product.id,
            item_name: product.name,
            price: product.price,
            quantity: product.quantity,
        }],
    });
}

// Custom: Formular-Abschluss mit Segment-Info
export function trackFormSubmit(formType: string, segment: string) {
    trackEvent("form_submit", {
        event_category: "lead_generation",
        form_type: formType,
        user_segment: segment,
    });
}`,
            },
            {
                type: "heading",
                text: "Google Tag Manager: Die Architektur-Schicht",
                level: 2,
            },
            {
                type: "paragraph",
                text: "GTM entkoppelt das Tracking vom Code-Deployment. Statt jedes neue Event durch einen Developer und ein Release-Cycle zu schleusen, verwalten Marketing und Analytics-Teams ihre Tags eigenständig. Das setzt aber voraus, dass die GTM-Architektur sauber aufgebaut ist: ein Data Layer als Kommunikationsschicht zwischen Website und GTM, strukturierte Trigger-Logik und eine klare Namenskonvention für alle Tags, Trigger und Variablen.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Data Layer Push — strukturiertes Interface zwischen Next.js und GTM",
                code: `// Typisierter Data Layer für GTM
declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

function pushDataLayer(event: string, data: Record<string, unknown> = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...data });
}

// Next.js: Route Change Tracking mit App Router
// In layout.tsx — client component
"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        pushDataLayer("page_view", {
            page_path: pathname,
            page_search: searchParams.toString(),
        });
    }, [pathname, searchParams]);

    return null;
}`,
            },
            {
                type: "callout",
                variant: "info",
                text: "Server-Side Tagging ist der nächste Evolutionsschritt: anstatt Tags im Browser des Nutzers auszuführen, läuft ein GTM-Server-Container auf deiner eigenen Infrastruktur. Vorteile: bessere Datenqualität (Ad-Blocker umgehen), reduzierte Browser-Latenz und vollständige Kontrolle über gesendete Daten — DSGVO-konform und performant.",
            },
            {
                type: "heading",
                text: "Looker Studio: Dashboards die aussagen",
                level: 2,
            },
            {
                type: "list",
                items: [
                    "GA4 als Datenquelle direkt in Looker Studio verbinden — kein CSV-Export, Live-Daten",
                    "Blended Data Sources: GA4 + Search Console + Google Ads in einem Dashboard",
                    "Custom Calculated Metrics: Conversion Rate, Revenue per Session, Customer Acquisition Cost",
                    "Automatische E-Mail-Distribution: Reports landen wöchentlich im Postfach der Stakeholder",
                    "Brand-konforme Templates: Farben, Schriften und Layout nach Corporate Design-Standard",
                ],
            },
        ],
    },
    {
        id: "11",
        slug: "google-indexierung-technical-seo-architektur",
        logNumber: "PDA-LOG-011",
        title: "Google Indexierung: Technische SEO-Architektur für maximale Sichtbarkeit",
        category: "SEO",
        date: "01.04.2026",
        readTime: "07:00 MIN",
        excerpt: "Google kann nur indexieren, was es versteht. Technische SEO ist keine Magie — es ist strukturierte Architektur: Sitemap, Schema.org, Core Web Vitals und Search Console als Monitoring-Fundament.",
        author: { name: "Palmer Digital", role: "Architecture Division" },
        tags: ["SEO", "Google", "Indexierung", "Schema.org", "Core Web Vitals", "Search Console"],
        relatedSlugs: [
            "google-analytics-4-ga4-implementation",
            "nextjs-15-react-19-infrastructure-standard",
        ],
        content: [
            {
                type: "paragraph",
                text: "Technische SEO ist die Infrastruktur, auf der Content-Sichtbarkeit aufbaut. Ohne saubere Indexierbarkeit ist der beste Content unsichtbar. Google indexiert heute Milliarden von Seiten — und jene, die Google schnell versteht, vollständig crawlen kann und als strukturiert-relevant erkennt, werden bevorzugt behandelt. Das ist kein Algorithmus-Mythos, das ist dokumentiertes Googlebot-Verhalten.",
            },
            {
                type: "heading",
                text: "Sitemap-Architektur und Crawl-Budget",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Das Crawl-Budget ist die Anzahl an Seiten, die Googlebot pro Tag auf deiner Website crawlt. Bei kleinen Sites (unter 1.000 Seiten) ist das selten ein Problem. Bei E-Commerce-Shops mit 50.000 Produktseiten, dynamischen Filterseiten und Paginations-URLs ist Crawl-Budget-Management eine kritische Architekturentscheidung. Eine XML-Sitemap ist dein direktes Kommunikationsmittel mit Google: sie sagt dem Googlebot, was es crawlen soll — und implizit, was nicht.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "Dynamische XML-Sitemap in Next.js App Router",
                code: `// app/sitemap.ts — Next.js generiert sitemap.xml automatisch
import { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/data/products";
import { getAllBlogPosts } from "@/lib/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://example.com";

    // Statische Hauptseiten — höchste Priorität
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: \`\${baseUrl}/services\`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: \`\${baseUrl}/blog\`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    ];

    // Dynamische Produktseiten
    const products = await getAllProducts();
    const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
        url: \`\${baseUrl}/products/\${product.slug}\`,
        lastModified: product.updatedAt,
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    // Blog-Artikel
    const posts = await getAllBlogPosts();
    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
        url: \`\${baseUrl}/blog/\${post.slug}\`,
        lastModified: post.date,
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...productRoutes, ...blogRoutes];
}`,
            },
            {
                type: "heading",
                text: "Structured Data: Schema.org für Rich Results",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Schema.org Markup ist die Sprache, in der du Google erklärst, was dein Content bedeutet — nicht nur, was er enthält. Ein Produktpreis ist für Google nur eine Zahl, bis du ihn als schema:price markierst. Eine Bewertung ist nur Text, bis du sie als schema:AggregateRating kennzeichnest. Rich Results — Sterne, Preise, FAQs direkt in den Google-Suchergebnissen — entstehen aus sauberem Schema.org Markup.",
            },
            {
                type: "code",
                language: "typescript",
                caption: "JSON-LD Schema.org Markup für Artikel — Next.js Metadata API",
                code: `// Wiederverwendbare Helper-Funktion für Article Schema
export function generateArticleSchema(post: {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    author: { name: string; role: string };
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            "@type": "Organization",
            name: post.author.name,
            url: "https://palmer-digital.com",
        },
        publisher: {
            "@type": "Organization",
            name: "Palmer Digital Architecture",
            logo: {
                "@type": "ImageObject",
                url: "https://palmer-digital.com/media/Logo-mobile.svg",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": \`https://palmer-digital.com/blog/\${post.slug}\`,
        },
    };
}

// In der Blog-Article-Page
export default async function BlogArticlePage({ params }) {
    const post = getBlogPost(await params.slug);
    const schema = generateArticleSchema(post);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <article>{/* Content */}</article>
        </>
    );
}`,
            },
            {
                type: "callout",
                variant: "info",
                text: "Google Search Console ist das wichtigste SEO-Monitoring-Tool — und es ist kostenlos. Die Coverage-Reports zeigen exakt, welche Seiten indexiert sind, welche ausgeschlossen wurden und warum. Die Performance-Reports zeigen Impressionen, Klicks und durchschnittliche Position für jeden Query. Wer kein GSC aufgesetzt hat, fliegt blind.",
            },
            {
                type: "heading",
                text: "Core Web Vitals als Ranking-Faktor",
                level: 2,
            },
            {
                type: "paragraph",
                text: "Seit dem Page Experience Update sind Core Web Vitals offizieller Ranking-Faktor. LCP (Largest Contentful Paint), INP (Interaction to Next Paint) und CLS (Cumulative Layout Shift) messen reale Nutzererfahrung — und Google bewertet sie. Der direkte Zusammenhang zwischen CWV-Scores und Rankings ist in der Praxis messbar: Seiten, die von 'Needs Improvement' auf 'Good' verbessert werden, sehen im Median eine 5-15% höhere Click-Through-Rate aus den Suchergebnissen.",
            },
            {
                type: "list",
                items: [
                    "LCP < 2.5s: Größtes sichtbares Element muss schnell laden — Bilder optimieren, Server Response Time reduzieren",
                    "INP < 200ms: Interaction to Next Paint ersetzt FID seit März 2024 — JavaScript-Blocking eliminieren",
                    "CLS < 0.1: Layout Shifts vermeiden — Bild-Dimensionen definieren, Font-Loading optimieren, keine nachträglichen DOM-Injektionen",
                    "Next.js + Vercel = struktureller Vorteil: Automatic Image Optimization, Edge Network und PPR lösen die meisten CWV-Probleme architektonisch",
                ],
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
