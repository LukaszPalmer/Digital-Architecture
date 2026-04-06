// src/lib/db/models/Customer.ts
// Kundenstammdaten für Rechnungen, Angebote, Auftragsbestätigungen.

import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICustomer extends Document {
    name: string;
    company: string;
    street: string;
    zip: string;
    city: string;
    country: string;
    email: string;
    phone: string;
    customerNumber: string;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
}

const CustomerSchema = new Schema<ICustomer>(
    {
        name:           { type: String, required: true },
        company:        { type: String, default: "" },
        street:         { type: String, required: true },
        zip:            { type: String, required: true },
        city:           { type: String, required: true },
        country:        { type: String, default: "Deutschland" },
        email:          { type: String, required: true },
        phone:          { type: String, default: "" },
        customerNumber: { type: String, required: true, unique: true },
        notes:          { type: String, default: "" },
    },
    { collection: "customers", timestamps: true }
);

CustomerSchema.index({ customerNumber: 1 }, { unique: true });
CustomerSchema.index({ name: "text", company: "text", email: "text" });

const Customer: Model<ICustomer> =
    mongoose.models.Customer ?? mongoose.model<ICustomer>("Customer", CustomerSchema);

export default Customer;
