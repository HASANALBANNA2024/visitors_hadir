/* OPEN GRAPH + TWITTER: the preview card when the link is shared */
import type { Metadata } from 'next';
import type { Lang } from '@/data/types';
import { SEO } from '@/data/seo';
import { IMAGES, SITE } from '@/data/site';
import { pathFor } from './url';

const LOCALE: Record<Lang, string> = { en: 'en_US', ar: 'ar_KW' };

/** Open Graph: the preview card on WhatsApp, Facebook, LinkedIn */
export const buildOpenGraph = (lang: Lang): Metadata['openGraph'] => ({
  type: 'website',
  url: pathFor(lang),
  siteName: SITE.name.en,
  title: SEO.title[lang],
  description: SEO.description[lang],
  locale: LOCALE[lang],
  alternateLocale: [LOCALE[lang === 'ar' ? 'en' : 'ar']],
  images: [{ url: IMAGES.ogImage, width: 1200, height: 630, alt: SEO.ogImageAlt[lang] }],
});

/** Twitter / X large preview card */
export const buildTwitter = (lang: Lang): Metadata['twitter'] => ({
  card: 'summary_large_image',
  title: SEO.title[lang],
  description: SEO.description[lang],
  images: [{ url: IMAGES.ogImage, alt: SEO.ogImageAlt[lang] }],
});
