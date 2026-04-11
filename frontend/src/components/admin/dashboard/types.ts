// src/components/admin/dashboard/types.ts
// Type-Definitionen für das Analytics-Dashboard.
// Müssen synchron zum Response-Schema aus /api/analytics/route.ts bleiben.

export interface AnalyticsOverview {
    totalPageviews:  number;
    uniqueUsers:     number;
    uniqueSessions:  number;
    newUsers:        number;
    returningUsers:  number;
    avgDuration:     number;
    avgPagesPerUser: number;
    pagesPerSession: number;
    bounceRate:      number;
    engagementRate:  number;
    leads:           number;
    leadRate:        number;
    period:          number;
    peakDay:         { date: string; count: number } | null;
    returningRate:   number;
}

export interface AnalyticsData {
    overview:          AnalyticsOverview;
    topPages:          { page: string; count: number }[];
    devices:           { name: string; value: number }[];
    browsers:          { name: string; value: number }[];
    os:                { name: string; value: number }[];
    referrers:         { name: string; count: number }[];
    countries:         { name: string; count: number }[];
    cities:            { city: string; country: string; count: number }[];
    events:            { name: string; count: number }[];
    pageviewsOverTime: { date: string; count: number }[];
    usersOverTime:     { date: string; count: number }[];
    hourlyActivity:    { hour: number; count: number }[];
    weekdayActivity:   { day:  string; count: number }[];
    newVsReturning:    { name: string; value: number }[];
    utmCampaigns:      { source: string; medium: string; campaign: string; count: number; users: number }[];
    scrollDepth:       { name: string; value: number }[];
    ctaClicks:         { name: string; count: number }[];
    leads:             { starts: number; submits: number; rate: number };
    topEngagedPages:   { page:  string; avgTime: number; visits: number }[];
}

// ── Kleine Helfer ────────────────────────────────────────────────────────────

export function formatDuration(seconds: number): string {
    if (!seconds || seconds < 0) return "0s";
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    if (m < 60) return `${m}m ${s}s`;
    const h = Math.floor(m / 60);
    return `${h}h ${m % 60}m`;
}

export function formatDateDE(iso: string): string {
    const [, m, d] = iso.split("-");
    const months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
                    "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    return `${parseInt(d)}. ${months[parseInt(m) - 1]}`;
}
