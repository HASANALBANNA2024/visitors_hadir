import type { Metadata } from 'next';
import type { Lang } from '@/data/types';
import { pathFor } from './url';

/** Canonical + hreflang: tells Google about the EN and AR versions */
export const buildAlternates = (lang: Lang): Metadata['alternates'] => ({
  canonical: pathFor(lang), // the page itself is the "main" copy
  languages: { en: '/', ar: '/ar', 'x-default': '/' }, // x-default = fallback language
});
