// src/lib/db/models/DailySummary.ts
// Tägliche Aggregation der Rohdaten — ersetzt die rohen PageView-Events nach 30 Tagen.
// Speicherbedarf: ~2 KB pro Tag vs. ~500 KB rohe Events pro Tag.
// TTL: 730 Tage (2 Jahre) — weit über DSGVO-Anforderungen.

import mongoose, { Schema, Document, Model } from "mongoose";

export interface IDailySummary extends Document {
    date:            Date;    // Kalender-Tag (Mitternacht UTC)
    pageviews:       number;
    uniqueSessions:  number;
    newVisitors:     number;
    avgDuration:     number;  // Sekunden
    bounceRate:      number;  // 0-100
    pagesPerSession: number;
    formStarts:      number;
    formSubmits:     number;
    topPages:    { page: string;   count: number }[];
    devices:     { name: string;   count: number }[];
    browsers:    { name: string;   count: number }[];
    os:          { name: string;   count: number }[];
    countries:   { name: string;   count: number }[];
    referrers:   { name: string;   count: number }[];
    events:      { name: string;   count: number }[];
    scrollDepth: { name: string;   count: number }[];
    ctaClicks:   { name: string;   count: number }[];
    createdAt:   Date;
}

const NameCount = { name: String, count: Number };

const DailySummarySchema = new Schema<IDailySummary>(
    {
        date:            { type: Date,   required: true, unique: true, index: true },
        pageviews:       { type: Number, default: 0 },
        uniqueSessions:  { type: Number, default: 0 },
        newVisitors:     { type: Number, default: 0 },
        avgDuration:     { type: Number, default: 0 },
        bounceRate:      { type: Number, default: 0 },
        pagesPerSession: { type: Number, default: 0 },
        formStarts:      { type: Number, default: 0 },
        formSubmits:     { type: Number, default: 0 },
        topPages:    { type: [NameCount], default: [] },
        devices:     { type: [NameCount], default: [] },
        browsers:    { type: [NameCount], default: [] },
        os:          { type: [NameCount], default: [] },
        countries:   { type: [NameCount], default: [] },
        referrers:   { type: [NameCount], default: [] },
        events:      { type: [NameCount], default: [] },
        scrollDepth: { type: [NameCount], default: [] },
        ctaClicks:   { type: [NameCount], default: [] },
        createdAt:   { type: Date, default: Date.now },
    },
    { collection: "daily_summaries" }
);

// TTL: 2 Jahre — historische Daten bei minimalem Speicher
DailySummarySchema.index({ createdAt: 1 }, { expireAfterSeconds: 730 * 24 * 60 * 60 });

const DailySummary: Model<IDailySummary> =
    mongoose.models.DailySummary ?? mongoose.model<IDailySummary>("DailySummary", DailySummarySchema);

export default DailySummary;
