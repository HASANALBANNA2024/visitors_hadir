/* LOCAL BUSINESS schema: helps Google Maps and local search */
import type { Lang } from '@/data/types';
import { SEO } from '@/data/seo';
import { SERVICES } from '@/data/services';
import { SITE, SOCIAL_LINKS } from '@/data/site';
import { absoluteUrl, SITE_URL } from '../seo/url';
import { BUSINESS_ID } from './ids';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/** Each service card becomes an "Offer" in Google's catalog */
const offers = (lang: Lang) =>
  SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title[lang], description: s.text[lang] },
  }));

/** Schema.org "AutoRental" + "LocalBusiness": helps local search / Maps */
export const businessLd = (lang: Lang) => ({
  '@type': ['AutoRental', 'LocalBusiness'],
  '@id': BUSINESS_ID,
  name: SITE.name.en,
  alternateName: SITE.name.ar,
  description: SEO.description[lang],
  url: SITE_URL,
  image: absoluteUrl('/og-image.png'),
  logo: absoluteUrl('/icon-512.png'),
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressCountry: SITE.countryCode,
    addressLocality: SITE.city.en,
    ...(SITE.streetAddress ? { streetAddress: SITE.streetAddress } : {}),
  },
  areaServed: { '@type': 'Country', name: 'Kuwait' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: DAYS, opens: '00:00', closes: '23:59' }],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Luxury transportation services', itemListElement: offers(lang) },
  ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS.map((s) => s.href) } : {}),
});
