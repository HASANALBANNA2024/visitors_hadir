import type { Vehicle } from '../types';
import { icon, L } from '../helpers';

/* ==========================================================
 * SEDANS. Vehicle photo: copy it to /public/images/fleet/ and
 * write image: '/images/fleet/name.jpg' ('' = emoji placeholder)
 * ========================================================== */
const LUXURY = icon('⭐', L('LUXURY SEDAN', 'سيدان فاخرة'));
const EXECUTIVE = icon('⭐', L('EXECUTIVE SEDAN', 'سيدان تنفيذية'));

export const SEDANS: Vehicle[] = [
  {
    id: 'mercedes-s-class', type: 'sedan', name: 'Mercedes-Benz S-Class', emoji: '🚗', image: '',
    badge: L('LUXURY', 'فاخرة'), category: LUXURY,
    features: [L('Seats up to 4 passengers', 'يتسع لـ 4 ركاب'), L('VIP comfort & premium tech', 'راحة VIP وتقنيات متقدمة'), L('Perfect for executive travel', 'مثالي للسفر التنفيذي')],
  },
  {
    id: 'bmw-7-series', type: 'sedan', name: 'BMW 7 Series', emoji: '🏎️', image: '',
    badge: L('PREMIUM', 'متميز'), category: LUXURY,
    features: [L('Seats up to 5 passengers', 'يتسع لـ 5 ركاب'), L('Senior execs & delegations', 'المديرين والوفود'), L('Advanced features suite', 'مجموعة ميزات متقدمة')],
  },
  {
    id: 'kia-k8', type: 'sedan', name: 'Kia K8', emoji: '🚙', image: '',
    badge: L('EXECUTIVE', 'تنفيذي'), category: EXECUTIVE,
    features: [L('Seats up to 6 passengers', 'يتسع لـ 6 ركاب'), L('Corporate & hotel transfers', 'نقل شركي وفندقي'), L('Reliable & spacious comfort', 'مريح وموثوق')],
  },
  {
    id: 'ford-taurus', type: 'sedan', name: 'Ford Taurus', emoji: '🏎️', image: '',
    badge: L('EXECUTIVE', 'تنفيذي'), category: EXECUTIVE,
    features: [L('Seats up to 5 passengers', 'يتسع لـ 5 ركاب'), L('Daily business travel', 'السفر للأعمال اليومي'), L('Premium comfort & style', 'راحة وأناقة متميزة')],
  },
];
