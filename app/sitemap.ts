/* ==========================================================
 * sitemap.xml (auto generated at /sitemap.xml)
 * Lists the English and Arabic pages with hreflang links.
 * ========================================================== */
import type { MetadataRoute } from 'next';
import { SITE_URL, urlFor } from '@/lib/seo';

export const dynamic = 'force-static'; // needed for static export (Cloudflare)

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: urlFor('en'), ar: urlFor('ar') };
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1, alternates: { languages } },
    { url: urlFor('ar'), lastModified, changeFrequency: 'weekly', priority: 0.9, alternates: { languages } },
  ];
}
