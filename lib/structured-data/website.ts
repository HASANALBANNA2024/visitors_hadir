import { SITE } from '@/data/site';
import { SITE_URL } from '../seo/url';
import { ORG_ID, SITE_ID } from './ids';

/** Schema.org "WebSite": the site itself (both languages) */
export const websiteLd = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE_URL,
  name: SITE.name.en,
  inLanguage: ['en', 'ar'],
  publisher: { '@id': ORG_ID },
});
