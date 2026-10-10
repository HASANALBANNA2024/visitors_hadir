import type { SectionIntro, TitleText } from '../types';
import { icon, L } from '../helpers';

/* SERVICES SECTION: heading */
export const SERVICES_INTRO: SectionIntro = {
  tagline: icon('🏅', L('OUR CORE SERVICES', 'خدماتنا الأساسية')),
  title: L('World-Class Service Standards', 'معايير الخدمة العالمية'),
};

/* SERVICES SECTION: 4 cards */
export const SERVICES: TitleText[] = [
  {
    icon: '👔',
    title: L('Elite Chauffeurs', 'سائقون نخبة'),
    text: L('Vetted, trained professionals with impeccable service standards and absolute discretion', 'متخصصون معتمدون وموثوقون مع معايير خدمة لا تشوبها شائبة'),
  },
  {
    icon: '✨',
    title: L('Immaculate Fleet', 'أسطول نظيف'),
    text: L('Newest luxury vehicles, pristine condition, comprehensive maintenance and safety checks', 'أحدث السيارات الفاخرة في حالة مثالية مع صيانة شاملة'),
  },
  {
    icon: '🗺️',
    title: L('Smart Routing', 'توجيه ذكي'),
    text: L('Real-time traffic optimization, multiple location support, custom routes for efficiency', 'تحسين المرور في الوقت الفعلي ومسارات مخصصة'),
  },
  {
    icon: '🏆',
    title: L('Corporate Solutions', 'حلول شركية'),
    text: L('Tailored packages, monthly contracts, priority access, dedicated account management', 'حزم مخصصة وإدارة حساب مخصصة وأولويات'),
  },
];
