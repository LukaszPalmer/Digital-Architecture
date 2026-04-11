// src/lib/db/models/Counter.ts
// Fortlaufende Nummern für Rechnungen, Angebote, Auftragsbestätigungen, Kunden.

import mongoose, { Schema, Model } from "mongoose";

export interface ICounter {
    _id: string;   // z.B. "invoice", "quote", "confirmation", "customer"
    seq: number;
}

const CounterSchema = new Schema<ICounter>(
    {
        _id: { type: String, required: true },
        seq: { type: Number, default: 0 },
    },
    { collection: "counters" }
);

const Counter: Model<ICounter> =
    mongoose.models.Counter ?? mongoose.model<ICounter>("Counter", CounterSchema);

/**
 * Gibt die nächste fortlaufende Nummer zurück.
 * @param name  z.B. "invoice", "quote", "confirmation", "customer"
 * @param prefix z.B. "RE-", "AN-", "AB-", "KD-"
 * @param year  z.B. 2026
 * @param scope optional — eigener Zähler pro Scope (z.B. Kundennummer),
 *              damit jede Rechnung/Angebot/AB pro Kunde bei 0001 startet.
 */
export async function getNextNumber(
    name: string,
    prefix: string,
    year: number = new Date().getFullYear(),
    scope?: string,
): Promise<string> {
    const key = scope ? `${name}_${scope}_${year}` : `${name}_${year}`;
    const counter = await Counter.findByIdAndUpdate(
        key,
        { $inc: { seq: 1 } },
        { upsert: true, new: true }
    );
    return `${prefix}${year}-${String(counter.seq).padStart(4, "0")}`;
}

export default Counter;
