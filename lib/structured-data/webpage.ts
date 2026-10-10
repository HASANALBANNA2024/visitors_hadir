import type { Lang } from '@/data/types';
import { SEO } from '@/data/seo';
import { urlFor } from '../seo/url';
import { BUSINESS_ID, SITE_ID } from './ids';

/** Schema.org "WebPage": this exact page (EN or AR) */
export const webpageLd = (lang: Lang) => ({
  '@type': 'WebPage',
  '@id': `${urlFor(lang)}#webpage`,
  url: urlFor(lang),
  name: SEO.title[lang],
  description: SEO.description[lang],
  inLanguage: lang,
  isPartOf: { '@id': SITE_ID },
  about: { '@id': BUSINESS_ID },
});
