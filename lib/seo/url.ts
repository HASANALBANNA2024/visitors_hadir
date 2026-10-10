import type { Lang } from '@/data/types';
import { SITE } from '@/data/site';

/* URL helpers: English lives at "/", Arabic at "/ar" */

/** Real domain without a trailing slash (set NEXT_PUBLIC_SITE_URL in .env.local) */
export const SITE_URL = SITE.url.replace(/\/+$/, '');

/** Path of a language version */
export const pathFor = (lang: Lang) => (lang === 'ar' ? '/ar' : '/');

/** Full address of a language version */
export const urlFor = (lang: Lang) => (lang === 'ar' ? `${SITE_URL}/ar` : SITE_URL);

/** '/x.png' -> 'https://domain/x.png' (full links stay as they are) */
export const absoluteUrl = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);
