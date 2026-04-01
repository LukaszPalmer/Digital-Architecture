// src/app/api/track/route.ts
// Analytics Tracking Endpunkt — nur aufgerufen wenn Nutzer Analytics-Consent gegeben hat.

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
    if (ua.includes("Windows"))       return "Windows";
    if (ua.includes("Macintosh"))     return "macOS";
    if (ua.includes("iPhone"))        return "iOS";
    if (ua.includes("iPad"))          return "iOS";
    if (ua.includes("Android"))       return "Android";
    if (ua.includes("Linux"))         return "Linux";
    return "Other";
}

function parseDevice(ua: string, screenWidth: number): string {
    if (/Mobi|Android|iPhone/i.test(ua)) return "mobile";
    if (/iPad|Tablet/i.test(ua))         return "tablet";
    if (screenWidth > 0 && screenWidth < 768) return "mobile";
    if (screenWidth > 0 && screenWidth < 1024) return "tablet";
    return "desktop";
}

function parseReferrer(referrer: string, origin: string): string {
    if (!referrer || referrer === "") return "direct";
    try {
        const ref = new URL(referrer);
        const orig = new URL(origin);
        if (ref.hostname === orig.hostname) return "internal";
        const host = ref.hostname.replace("www.", "");
        if (host.includes("google"))   return "google";
        if (host.includes("bing"))     return "bing";
        if (host.includes("linkedin")) return "linkedin";
        if (host.includes("twitter") || host.includes("x.com")) return "twitter/x";
        if (host.includes("facebook")) return "facebook";
        if (host.includes("instagram")) return "instagram";
        if (host.includes("github"))   return "github";
        return host;
    } catch {
        return "unknown";
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const ua = req.headers.get("user-agent") ?? "";
        const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";

        const doc = {
            sessionId:   body.sessionId   ?? "unknown",
            page:        body.page         ?? "/",
            referrer:    parseReferrer(body.referrer ?? "", origin),
            device:      parseDevice(ua, body.screenWidth ?? 0),
            browser:     parseBrowser(ua),
            os:          parseOS(ua),
            country:     body.language?.split("-")[1]?.toUpperCase() ?? "unknown",
            language:    body.language?.split("-")[0] ?? "unknown",
            screenWidth: body.screenWidth  ?? 0,
            event:       body.event        ?? "pageview",
            eventTarget: body.eventTarget  ?? "",
            duration:     body.duration     ?? 0,
            isNewVisitor: body.isNewVisitor ?? false,
            utmSource:    body.utmSource    ?? "",
            utmMedium:   body.utmMedium    ?? "",
            utmCampaign: body.utmCampaign  ?? "",
            timestamp:   new Date(),
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

        // Erst zählen, dann löschen — für den Audit-Log
        const deletedCount = await PageView.countDocuments({ sessionId });
        await PageView.deleteMany({ sessionId });

        // DSGVO Audit-Trail: lückenlose Dokumentation der Löschung
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
