import type { FleetTab, SectionIntro } from '../types';
import { icon, L } from '../helpers';

/* FLEET SECTION: heading */
export const FLEET_INTRO: SectionIntro = {
  tagline: icon('🏅', L('PREMIUM VEHICLE COLLECTION', 'مجموعة السيارات المتميزة')),
  title: L('Choose Your Luxury', 'اختر رفاهيتك'),
  description: L(
    "Hand-picked vehicles from the world's finest manufacturers, each meticulously maintained for executive excellence",
    'سيارات مختارة بعناية من أفضل الشركات العالمية، كل منها مصانة بعناية للتفوق التنفيذي',
  ),
};

/* FILTER TABS (key must match Vehicle.type, or 'all') */
export const FLEET_TABS: FleetTab[] = [
  { key: 'all', label: L('ALL VEHICLES', 'جميع السيارات') },
  { key: 'sedan', label: L('SEDANS', 'سيدان') },
  { key: 'suv', label: L('SUVS', 'SUVs') },
  { key: 'van', label: L('VANS', 'فانات') },
  { key: 'bus', label: L('BUSES', 'حافلات') },
];

export const FLEET_BUTTON = icon('💰', L('RESERVE NOW', 'احجز الآن'));

/* Shown when a filter has no vehicles yet */
export const FLEET_EMPTY = L(
  'Vehicles in this category are available on request. Contact us and we will arrange one for you.',
  'مركبات هذه الفئة متاحة عند الطلب. تواصل معنا وسنجهز لك المركبة المناسبة.',
);
