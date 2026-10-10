import type { Vehicle } from '../types';
import { icon, L } from '../helpers';

/* SUVs (see sedans.ts for how to add a photo) */
const ULTRA = icon('👑', L('ULTRA-LUXURY SUV', 'SUV فائق الفخامة'));

export const SUVS: Vehicle[] = [
  {
    id: 'bentley-bentayga', type: 'suv', name: 'Bentley Bentayga', emoji: '🚗', image: '',
    badge: L('ULTRA-LUXURY', 'فائق الفخامة'), category: ULTRA,
    features: [L('Seats up to 5 passengers', 'يتسع لـ 5 ركاب'), L('VIP executives & premium events', 'كبار المسؤولين والأحداث'), L('Unmatched luxury & prestige', 'فخامة وهيبة لا مثيل لها')],
  },
  {
    id: 'rolls-royce-cullinan', type: 'suv', name: 'Rolls-Royce Cullinan', emoji: '👑', image: '',
    badge: L('PRESTIGE', 'مرموق'), category: ULTRA,
    features: [L('Seats up to 5 passengers', 'يتسع لـ 5 ركاب'), L('Royals, VIPs & special events', 'الملوك والشخصيات المهمة'), L('The pinnacle of luxury', 'قمة الفخامة والرقي')],
  },
];
