const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN!;

async function strapiGet(path: string) {
    const res = await fetch(`${STRAPI_URL}/api${path}`, {
        headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
        next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
}

export async function getStrapiBlogPosts() {
    const data = await strapiGet(
        "/blog-posts?populate=*&sort=date:desc&pagination[pageSize]=50&publicationState=live"
    );
    return data?.data ?? [];
}

export async function getStrapiBlogPost(slug: string) {
    const data = await strapiGet(
        `/blog-posts?filters[slug][$eq]=${slug}&populate=*&publicationState=live`
    );
    return data?.data?.[0] ?? null;
}

export async function getStrapiBlogSlugs(): Promise<string[]> {
    const data = await strapiGet(
        "/blog-posts?fields[0]=slug&publicationState=live&pagination[pageSize]=100"
    );
    return (data?.data ?? []).map((p: { slug: string }) => p.slug);
}
