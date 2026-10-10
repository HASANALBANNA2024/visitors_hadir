import type { Vehicle } from '../types';
import { icon, L } from '../helpers';

/* VANS: add a photo like in sedans.ts (image: '/images/fleet/name.jpg') */
const VAN = icon('🚐', L('PREMIUM VAN', 'فان متميز'));

export const VANS: Vehicle[] = [
  {
    id: 'mercedes-v-class', type: 'van', name: 'Mercedes-Benz V-Class', emoji: '🚐', image: '',
    badge: L('PREMIUM', 'متميز'), category: VAN,
    features: [L('Seats up to 7 passengers', 'يتسع لـ 7 ركاب'), L('Groups & airport transfers', 'مجموعات ونقل المطار'), L('Spacious VIP interior', 'مقصورة VIP واسعة')],
  },
  {
    id: 'gmc-yukon-van', type: 'van', name: 'Executive Van', emoji: '🚐', image: '',
    badge: L('GROUP', 'مجموعات'), category: VAN,
    features: [L('Seats up to 10 passengers', 'يتسع لـ 10 ركاب'), L('Corporate teams & events', 'فرق الشركات والفعاليات'), L('Comfort for longer trips', 'راحة للرحلات الطويلة')],
  },
];
