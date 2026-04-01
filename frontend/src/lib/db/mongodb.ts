// src/lib/db/mongodb.ts
// Singleton MongoDB Atlas connection via Mongoose.

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Global cache — verhindert mehrfache Verbindungen in Next.js Dev-Mode
declare global {
    // eslint-disable-next-line no-var
    var _mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

const cache = global._mongooseCache ?? { conn: null, promise: null };
global._mongooseCache = cache;

export async function connectDB(): Promise<typeof mongoose> {
    if (!MONGODB_URI) throw new Error("MONGODB_URI environment variable is not defined");
    if (cache.conn) return cache.conn;

    if (!cache.promise) {
        cache.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
            dbName: "pda_analytics",
        });
    }

    cache.conn = await cache.promise;
    return cache.conn;
}
