// src/lib/db/models/DeletionLog.ts
// DSGVO Audit-Trail — lückenlose Dokumentation jeder Datenlöschung.
// KEIN TTL: diese Collection bleibt dauerhaft als Nachweis erhalten.
// Bei Behördenanfragen (Art. 17 DSGVO) kann dieser Log vorgelegt werden.

import mongoose, { Schema, Document, Model } from "mongoose";

export type DeletionReason =
    | "consent_withdrawn"  // Nutzer hat Cookies abgelehnt/widerrufen
    | "ttl_auto"           // MongoDB TTL-Index hat Daten automatisch gelöscht (täglich geloggt)
    | "manual_request";    // Manuelle DSGVO-Löschanfrage

export interface IDeletionLog extends Document {
    sessionId:    string;          // Anonyme Session-ID — kein Personenbezug
    reason:       DeletionReason;
    deletedCount: number;          // Anzahl gelöschter Dokumente
    note:         string;          // Optionale Notiz (z.B. "30-day TTL policy")
    deletedAt:    Date;
}

const DeletionLogSchema = new Schema<IDeletionLog>(
    {
        sessionId:    { type: String, required: true },
        reason:       { type: String, required: true, enum: ["consent_withdrawn", "ttl_auto", "manual_request"] },
        deletedCount: { type: Number, required: true, default: 0 },
        note:         { type: String, default: "" },
        deletedAt:    { type: Date,   default: Date.now, index: true },
    },
    { collection: "deletion_log" }
);

// Kein TTL — dieser Log bleibt dauerhaft als DSGVO-Nachweis

const DeletionLog: Model<IDeletionLog> =
    mongoose.models.DeletionLog ?? mongoose.model<IDeletionLog>("DeletionLog", DeletionLogSchema);

export default DeletionLog;
