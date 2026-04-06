// src/lib/db/models/Document.ts
// Einheitliches Schema für Rechnungen, Angebote, Auftragsbestätigungen.

import mongoose, { Schema, Document as MongoDoc, Model } from "mongoose";

// ── Line Item ───────────────────────────────────────────────────────────────

export interface ILineItem {
    position: number;
    title: string;
    description: string;
    unitPrice: number;      // Einzelpreis in Cent
    quantity: number;
    totalPrice: number;     // Gesamtpreis in Cent (berechnet)
}

const LineItemSchema = new Schema<ILineItem>(
    {
        position:    { type: Number, required: true },
        title:       { type: String, required: true },
        description: { type: String, default: "" },
        unitPrice:   { type: Number, required: true },
        quantity:    { type: Number, required: true, default: 1 },
        totalPrice:  { type: Number, required: true },
    },
    { _id: false }
);

// ── Document Types ──────────────────────────────────────────────────────────

export type DocType = "invoice" | "quote" | "confirmation";

export const DOC_TYPE_LABELS: Record<DocType, string> = {
    invoice:      "Rechnung",
    quote:        "Angebot",
    confirmation: "Auftragsbestätigung",
};

export const DOC_TYPE_PREFIX: Record<DocType, string> = {
    invoice:      "RE-",
    quote:        "AN-",
    confirmation: "AB-",
};

// ── Status ──────────────────────────────────────────────────────────────────

export type DocStatus = "draft" | "sent" | "paid" | "overdue" | "cancelled";

// ── Main Document ───────────────────────────────────────────────────────────

export interface IDocument extends MongoDoc {
    docType: DocType;
    docNumber: string;
    status: DocStatus;

    // Kunde
    customerId: mongoose.Types.ObjectId;
    customerName: string;
    customerCompany: string;
    customerStreet: string;
    customerZip: string;
    customerCity: string;
    customerNumber: string;

    // Datum
    issueDate: Date;
    deliveryDate: Date;
    dueDate: Date;              // Zahlungsziel (nur Rechnungen)
    validUntil: Date;           // Gültig bis (nur Angebote)

    // Positionen
    items: ILineItem[];
    subtotal: number;           // Summe Netto in Cent
    taxRate: number;            // 0 (Kleinunternehmer)
    taxAmount: number;          // 0
    total: number;              // Gesamtbetrag in Cent

    // Zusätzliche Felder
    introText: string;
    outroText: string;
    paymentTerms: string;
    notes: string;

    // E-Mail Tracking
    sentAt: Date | null;
    sentTo: string;

    // Template
    isTemplate: boolean;
    templateName: string;

    createdAt: Date;
    updatedAt: Date;
}

const DocumentSchema = new Schema<IDocument>(
    {
        docType:   { type: String, enum: ["invoice", "quote", "confirmation"], required: true },
        docNumber: { type: String, required: true, unique: true },
        status:    { type: String, enum: ["draft", "sent", "paid", "overdue", "cancelled"], default: "draft" },

        customerId:      { type: Schema.Types.ObjectId, ref: "Customer" },
        customerName:    { type: String, default: "" },
        customerCompany: { type: String, default: "" },
        customerStreet:  { type: String, default: "" },
        customerZip:     { type: String, default: "" },
        customerCity:    { type: String, default: "" },
        customerNumber:  { type: String, default: "" },

        issueDate:    { type: Date, default: Date.now },
        deliveryDate: { type: Date, default: Date.now },
        dueDate:      { type: Date },
        validUntil:   { type: Date },

        items:     [LineItemSchema],
        subtotal:  { type: Number, default: 0 },
        taxRate:   { type: Number, default: 0 },
        taxAmount: { type: Number, default: 0 },
        total:     { type: Number, default: 0 },

        introText:    { type: String, default: "" },
        outroText:    { type: String, default: "" },
        paymentTerms: { type: String, default: "Die Rechnung ist sofort fällig. Bitte überweisen Sie innerhalb von 14 Tagen den Gesamtbetrag auf das unten angegebene Konto." },
        notes:        { type: String, default: "" },

        sentAt: { type: Date, default: null },
        sentTo: { type: String, default: "" },

        isTemplate:   { type: Boolean, default: false },
        templateName: { type: String, default: "" },
    },
    { collection: "documents", timestamps: true }
);

DocumentSchema.index({ docType: 1, status: 1 });
DocumentSchema.index({ customerId: 1 });
DocumentSchema.index({ docNumber: 1 }, { unique: true });
DocumentSchema.index({ isTemplate: 1, docType: 1 });

const DocModel: Model<IDocument> =
    mongoose.models.Document ?? mongoose.model<IDocument>("Document", DocumentSchema);

export default DocModel;
