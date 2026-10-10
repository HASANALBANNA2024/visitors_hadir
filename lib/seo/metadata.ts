/* METADATA: builds every <head> meta tag of one language version */
import type { Metadata, Viewport } from 'next';
import type { Lang } from '@/data/types';
import { KEYWORDS, SEO } from '@/data/seo';
import { SITE } from '@/data/site';
import { buildAlternates } from './alternates';
import { buildOpenGraph, buildTwitter } from './openGraph';
import { ICONS, MANIFEST_PATH } from './icons';
import { ROBOTS_META } from './robots';
import { SITE_URL } from './url';

/** Browser bar colour + mobile zoom settings (used by both layouts) */
export const VIEWPORT: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#D4AF37',
};

/** Every <head> meta tag of one language version, built in one place */
export function buildMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(SITE_URL), // base for all relative URLs below
    title: SEO.title[lang],
    description: SEO.description[lang],
    keywords: KEYWORDS[lang],
    applicationName: SITE.name.en,
    authors: [{ name: SITE.name.en, url: SITE_URL }],
    creator: SITE.name.en,
    publisher: SITE.name.en,
    category: 'Transportation',
    alternates: buildAlternates(lang),
    openGraph: buildOpenGraph(lang),
    twitter: buildTwitter(lang),
    robots: ROBOTS_META,
    icons: ICONS,
    manifest: MANIFEST_PATH,
    formatDetection: { telephone: true, email: true, address: false },
    // Optional Google Search Console code from .env.local
    verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
      : undefined,
  };
}
