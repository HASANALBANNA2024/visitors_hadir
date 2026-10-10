import type { Vehicle } from '../types';
import { icon, L } from '../helpers';

/* BUSES: add a photo like in sedans.ts (image: '/images/fleet/name.jpg') */
const BUS = icon('🚌', L('PREMIUM BUS', 'حافلة متميزة'));

export const BUSES: Vehicle[] = [
  {
    id: 'coaster-bus', type: 'bus', name: 'Luxury Coaster Bus', emoji: '🚌', image: '',
    badge: L('GROUP', 'مجموعات'), category: BUS,
    features: [L('Seats up to 22 passengers', 'يتسع لـ 22 راكباً'), L('Delegations & events', 'الوفود والفعاليات'), L('Air-conditioned comfort', 'تكييف ومقاعد مريحة')],
  },
  {
    id: 'vip-bus', type: 'bus', name: 'VIP Coach Bus', emoji: '🚌', image: '',
    badge: L('VIP', 'VIP'), category: BUS,
    features: [L('Seats up to 45 passengers', 'يتسع لـ 45 راكباً'), L('Large corporate groups', 'مجموعات الشركات الكبيرة'), L('Luggage space & Wi-Fi', 'مساحة أمتعة وواي فاي')],
  },
];
