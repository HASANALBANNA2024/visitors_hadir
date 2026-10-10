import type { NavLink, ServiceLink } from '../types';
import { L } from '../helpers';

/* FOOTER "QUICK LINKS" column */
export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: L('Our Fleet', 'أسطولنا'), href: '#fleet' },
  { label: L('Services', 'الخدمات'), href: '#services' },
  { label: L('Features', 'المميزات'), href: '#features' },
  { label: L('Why HADIR', 'لماذا هادر'), href: '#why' },
];

/* FOOTER "SERVICES" column: click = pre-select that service in the form */
export const FOOTER_SERVICE_LINKS: ServiceLink[] = [
  { label: L('Airport Transfers', 'نقل المطار'), service: 'airport' },
  { label: L('Corporate Events', 'الأحداث الشركية'), service: 'corporate' },
  { label: L('Executive Travel', 'السفر التنفيذي'), service: 'luxury' },
  { label: L('Delegation Support', 'دعم الوفود'), service: 'delegation' },
];
