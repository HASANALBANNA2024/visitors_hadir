import type { MetadataRoute } from 'next';

/* sitemap.xml for Google: https://<your-domain>/sitemap.xml
 * A new page = add one line to PAGES. */
export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hadirvisitors.com';

const PAGES: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/services/airport-transfers', priority: 0.9 },
  { path: '/services/corporate-events', priority: 0.9 },
  { path: '/services/executive-travel', priority: 0.9 },
  { path: '/services/delegation-support', priority: 0.9 },
  { path: '/about', priority: 0.7 },
  { path: '/privacy-policy', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.path === '' ? 'weekly' : 'monthly',
    priority: p.priority,
  }));
}
