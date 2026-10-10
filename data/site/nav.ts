import type { NavLink } from '../types';
import { L } from '../helpers';

/** HEADER MENU (href = id of a section on the page) */
export const NAV_LINKS: NavLink[] = [
  { label: L('Home', 'الرئيسية'), href: '#home' },
  { label: L('Fleet', 'الأسطول'), href: '#fleet' },
  { label: L('Services', 'الخدمات'), href: '#services' },
  { label: L('Features', 'المميزات'), href: '#features' },
  { label: L('Why Us', 'لماذا نحن'), href: '#why' },
  { label: L('Reviews', 'التقييمات'), href: '#testimonials' },
  { label: L('Contact', 'اتصل بنا'), href: '#contact' },
];
