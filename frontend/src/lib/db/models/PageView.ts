// src/lib/db/models/PageView.ts
// Analytics Event Schema — TTL: 90 Tage automatische Löschung.
// Kein personenbezogenes Datum: keine IP, kein Name, keine E-Mail.

import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPageView extends Document {
    sessionId: string;          // anonyme Session-ID (generiert im Browser)
    page: string;               // z.B. /blog/nextjs-15
    referrer: string;           // z.B. google.com | direct | internal
    device: string;             // mobile | tablet | desktop
    browser: string;            // Chrome | Firefox | Safari | Edge | Other
    os: string;                 // Windows | macOS | Linux | iOS | Android
    country: string;            // DE | US | AT ... (aus Accept-Language, nicht IP)
    language: string;           // de | en | fr ...
    screenWidth: number;        // Viewport-Breite in px
    event: string;              // pageview | cta_click | form_submit | blog_read | outbound_click
    eventTarget: string;        // z.B. "Projekt starten" | "/blog/nextjs" | ""
    duration: number;           // Verweildauer in Sekunden (0 bei pageview, wird später gepatcht)
    isNewVisitor: boolean;      // true wenn erster Besuch (localStorage-Flag)
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    timestamp: Date;            // TTL-Basis
}

const PageViewSchema = new Schema<IPageView>(
    {
        sessionId:   { type: String, required: true, index: true },
        page:        { type: String, required: true },
        referrer:    { type: String, default: "direct" },
        device:      { type: String, default: "unknown" },
        browser:     { type: String, default: "unknown" },
        os:          { type: String, default: "unknown" },
        country:     { type: String, default: "unknown" },
        language:    { type: String, default: "unknown" },
        screenWidth: { type: Number, default: 0 },
        event:       { type: String, required: true, default: "pageview" },
        eventTarget: { type: String, default: "" },
        duration:     { type: Number,  default: 0 },
        isNewVisitor: { type: Boolean, default: false },
        utmSource:    { type: String, default: "" },
        utmMedium:   { type: String, default: "" },
        utmCampaign: { type: String, default: "" },
        timestamp:   { type: Date, default: Date.now },
    },
    { collection: "pageviews" }
);

// TTL-Index: automatische Löschung nach 30 Tagen.
// Aggregierte DailySummaries werden vom Cron Job täglich erstellt
// und bleiben 2 Jahre erhalten (DailySummary Collection).
PageViewSchema.index({ timestamp: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

const PageView: Model<IPageView> =
    mongoose.models.PageView ?? mongoose.model<IPageView>("PageView", PageViewSchema);

export default PageView;
