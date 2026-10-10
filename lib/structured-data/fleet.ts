import type { Lang } from '@/data/types';
import { VEHICLES } from '@/data/fleet';

/** Schema.org "ItemList": the vehicles we offer */
export const fleetLd = (lang: Lang) => ({
  '@type': 'ItemList',
  name: lang === 'ar' ? 'أسطول السيارات' : 'Vehicle fleet',
  itemListElement: VEHICLES.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.name })),
});
