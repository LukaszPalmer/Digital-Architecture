// src/app/api/track/route.ts
// Analytics Tracking Endpunkt — nur aufgerufen wenn Nutzer Analytics-Consent gegeben hat.
//
// Geo-Daten werden aus Vercel's Edge-Headern gelesen (x-vercel-ip-country,
// x-vercel-ip-city, x-vercel-ip-country-region). Lokal / ausserhalb Vercel
// fallen wir auf den Accept-Language-Header zurück, damit wenigstens ein
// grober Länder-Hint entsteht.

import { NextRequest, NextResponse } from "next/server";
import { connectDB }  from "@/lib/db/mongodb";
import PageView       from "@/lib/db/models/PageView";
import DeletionLog    from "@/lib/db/models/DeletionLog";

function parseBrowser(ua: string): string {
    if (ua.includes("Edg/"))     return "Edge";
    if (ua.includes("Chrome/"))  return "Chrome";
    if (ua.includes("Firefox/")) return "Firefox";
    if (ua.includes("Safari/"))  return "Safari";
    if (ua.includes("OPR/"))     return "Opera";
    return "Other";
}

function parseOS(ua: string): string {
    if (ua.includes("Windows"))   return "Windows";
    if (ua.includes("Macintosh")) return "macOS";
    if (ua.includes("iPhone"))    return "iOS";
    if (ua.includes("iPad"))      return "iOS";
    if (ua.includes("Android"))   return "Android";
    if (ua.includes("Linux"))     return "Linux";
    return "Other";
}

function parseDevice(ua: string, screenWidth: number): string {
    if (/Mobi|Android|iPhone/i.test(ua)) return "mobile";
    if (/iPad|Tablet/i.test(ua))         return "tablet";
    if (screenWidth > 0 && screenWidth < 768)  return "mobile";
    if (screenWidth > 0 && screenWidth < 1024) return "tablet";
    return "desktop";
}

function parseReferrer(referrer: string, origin: string): string {
    if (!referrer || referrer === "") return "direct";
    try {
        const ref  = new URL(referrer);
        const orig = new URL(origin);
        if (ref.hostname === orig.hostname) return "internal";
        const host = ref.hostname.replace("www.", "");
        if (host.includes("google"))    return "google";
        if (host.includes("bing"))      return "bing";
        if (host.includes("duckduckgo")) return "duckduckgo";
        if (host.includes("linkedin"))  return "linkedin";
        if (host.includes("twitter") || host.includes("x.com")) return "twitter/x";
        if (host.includes("facebook"))  return "facebook";
        if (host.includes("instagram")) return "instagram";
        if (host.includes("youtube"))   return "youtube";
        if (host.includes("github"))    return "github";
        if (host.includes("reddit"))    return "reddit";
        return host;
    } catch {
        return "unknown";
    }
}

// Kleine Mapping-Tabelle für die gängigsten Länder-Codes → deutsche Namen.
// Unbekannte Codes werden 1:1 durchgereicht.
const COUNTRY_NAMES: Record<string, string> = {
    DE: "Deutschland",  AT: "Österreich",   CH: "Schweiz",
    FR: "Frankreich",   IT: "Italien",      ES: "Spanien",
    PT: "Portugal",     NL: "Niederlande",  BE: "Belgien",
    LU: "Luxemburg",    GB: "Vereinigtes Königreich",
    IE: "Irland",       SE: "Schweden",     NO: "Norwegen",
    FI: "Finnland",     DK: "Dänemark",     IS: "Island",
    PL: "Polen",        CZ: "Tschechien",   SK: "Slowakei",
    HU: "Ungarn",       RO: "Rumänien",     BG: "Bulgarien",
    GR: "Griechenland", HR: "Kroatien",     SI: "Slowenien",
    EE: "Estland",      LV: "Lettland",     LT: "Litauen",
    UA: "Ukraine",      BY: "Belarus",      RU: "Russland",
    TR: "Türkei",       US: "USA",          CA: "Kanada",
    MX: "Mexiko",       BR: "Brasilien",    AR: "Argentinien",
    CL: "Chile",        CO: "Kolumbien",
    CN: "China",        JP: "Japan",        KR: "Südkorea",
    IN: "Indien",       ID: "Indonesien",   SG: "Singapur",
    MY: "Malaysia",     TH: "Thailand",     VN: "Vietnam",
    PH: "Philippinen",  AU: "Australien",   NZ: "Neuseeland",
    ZA: "Südafrika",    EG: "Ägypten",      MA: "Marokko",
    NG: "Nigeria",      IL: "Israel",       AE: "VAE",
    SA: "Saudi-Arabien",
};

function countryCodeToName(code: string): string {
    if (!code) return "unknown";
    const up = code.toUpperCase();
    return COUNTRY_NAMES[up] ?? up;
}

/**
 * Geo-Auflösung:
 *   1. Vercel Edge-Header (Produktion) — exakte Werte.
 *   2. Accept-Language Country-Hint (Fallback, grob).
 *   3. "unknown" wenn nichts vorhanden.
 */
function resolveGeo(req: NextRequest, langFallback: string): {
    country: string;
    city:    string;
    region:  string;
} {
    const h = req.headers;
    const rawCountry =
        h.get("x-vercel-ip-country") ??
        h.get("cf-ipcountry") ??
        "";

    // Vercel URL-encodet Städte mit Sonderzeichen.
    const rawCity = h.get("x-vercel-ip-city") ?? "";
    const city    = rawCity ? decodeURIComponent(rawCity) : "";

    const rawRegion = h.get("x-vercel-ip-country-region") ?? "";

    if (rawCountry) {
        return {
            country: countryCodeToName(rawCountry),
            city,
            region: rawRegion,
        };
    }

    // Fallback: Country aus Accept-Language (z.B. "de-DE" → DE)
    const fallbackCode = langFallback.split("-")[1]?.toUpperCase() ?? "";
    return {
        country: fallbackCode ? countryCodeToName(fallbackCode) : "unknown",
        city:    "",
        region:  "",
    };
}

export async function POST(req: NextRequest) {
    try {
        const body   = await req.json();
        const ua     = req.headers.get("user-agent") ?? "";
        const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";

        const lang   = body.language ?? "";
        const geo    = resolveGeo(req, lang);

        const doc = {
            sessionId:    body.sessionId    ?? "unknown",
            anonymousId:  body.anonymousId  ?? "user_unknown",
            page:         body.page         ?? "/",
            referrer:     parseReferrer(body.referrer ?? "", origin),
            device:       parseDevice(ua, body.screenWidth ?? 0),
            browser:      parseBrowser(ua),
            os:           parseOS(ua),
            country:      geo.country,
            city:         geo.city,
            region:       geo.region,
            language:     lang.split("-")[0] ?? "unknown",
            screenWidth:  body.screenWidth  ?? 0,
            event:        body.event        ?? "pageview",
            eventTarget:  body.eventTarget  ?? "",
            duration:     body.duration     ?? 0,
            isNewVisitor: body.isNewVisitor ?? false,
            utmSource:    body.utmSource    ?? "",
            utmMedium:    body.utmMedium    ?? "",
            utmCampaign:  body.utmCampaign  ?? "",
            timestamp:    new Date(),
        };

        await connectDB();
        await PageView.create(doc);

        return NextResponse.json({ ok: true }, { status: 201 });
    } catch (err) {
        console.error("[track]", err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}

// Session löschen auf Nutzer-Anfrage (Consent-Entzug)
// Schreibt gleichzeitig einen DSGVO-Audit-Eintrag in DeletionLog.
export async function DELETE(req: NextRequest) {
    try {
        const { sessionId } = await req.json();
        if (!sessionId) return NextResponse.json({ ok: false }, { status: 400 });

        await connectDB();

        const deletedCount = await PageView.countDocuments({ sessionId });
        await PageView.deleteMany({ sessionId });

        await DeletionLog.create({
            sessionId,
            reason:       "consent_withdrawn",
            deletedCount,
            note:         "Nutzer hat Analytics-Consent widerrufen. Alle zugehörigen Rohdaten wurden sofort gelöscht (Art. 7 Abs. 3 DSGVO).",
        });

        return NextResponse.json({ ok: true, deleted: true, deletedCount });
    } catch (err) {
        console.error("[track/delete]", err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
