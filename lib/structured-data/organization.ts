import { SITE, SOCIAL_LINKS } from '@/data/site';
import { absoluteUrl, SITE_URL } from '../seo/url';
import { ORG_ID } from './ids';

/** Schema.org "Organization": who the company is + how to contact it */
export const organizationLd = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name.en,
  alternateName: SITE.name.ar,
  url: SITE_URL,
  logo: absoluteUrl('/icon-512.png'),
  email: SITE.email,
  telephone: SITE.phoneDisplay,
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    contactType: 'customer service',
    areaServed: SITE.countryCode,
    availableLanguage: ['English', 'Arabic'],
  }],
  ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS.map((s) => s.href) } : {}),
});
