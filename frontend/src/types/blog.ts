export interface BlogLog {
    id: string;
    slug: string;
    logNumber: string; // PDA-LOG-001 etc.
    title: string;
    category: string;
    date: string;
    readTime: string;
}

export type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "heading"; text: string; level: 2 | 3 }
    | { type: "code"; language: string; code: string; caption?: string }
    | { type: "callout"; text: string; variant: "info" | "warning" | "tip" }
    | { type: "list"; items: string[] };

export interface BlogPost extends BlogLog {
    excerpt: string;
    author: { name: string; role: string };
    tags: string[];
    content: ContentBlock[];
    relatedSlugs: string[];
}
