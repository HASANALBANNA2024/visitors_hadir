/* STRUCTURED DATA (JSON-LD): joins all schema.org blocks for Google */
import type { Lang } from '@/data/types';
import { businessLd } from './business';
import { faqLd } from './faq';
import { fleetLd } from './fleet';
import { organizationLd } from './organization';
import { webpageLd } from './webpage';
import { websiteLd } from './website';

/** One JSON-LD "graph" with every block (inject with <JsonLd />) */
export const buildJsonLd = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@graph': [organizationLd(), websiteLd(), businessLd(lang), webpageLd(lang), fleetLd(lang), faqLd(lang)],
});
