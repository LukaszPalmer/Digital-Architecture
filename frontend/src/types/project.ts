export interface Project {
    id: string;
    title: string;
    category: string;
    metrics: string; // z.B. "LCP 0.6s" oder "100k Req/min"
    year: string;
    imageUrl: string;
}
