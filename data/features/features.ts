import type { SectionIntro, TitleText } from '../types';
import { icon, L } from '../helpers';

/* FEATURES SECTION: heading */
export const FEATURES_INTRO: SectionIntro = {
  tagline: icon('⚡', L('WHY HADIR STANDS OUT', 'لماذا هادر متميزة')),
  title: L('Industry-Leading Features', 'المميزات الرائدة في الصناعة'),
};

/* FEATURES SECTION: 6 boxes */
export const FEATURES: TitleText[] = [
  { icon: '🚗', title: L('Premium Fleet', 'أسطول متميز'), text: L('Latest model luxury vehicles updated annually with cutting-edge technology', 'أحدث السيارات الفاخرة محدثة سنوياً بأحدث التقنيات') },
  { icon: '📱', title: L('Easy Booking', 'حجز سهل'), text: L('Instant WhatsApp booking, real-time tracking, mobile app availability', 'حجز فوري عبر واتس آب وتطبيق محمول') },
  { icon: '💰', title: L('Transparent Pricing', 'أسعار شفافة'), text: L('Zero hidden fees, competitive rates, corporate billing options available', 'لا رسوم مخفية وأسعار تنافسية مع فواتير شركية') },
  { icon: '🎯', title: L('Dedicated Support', 'دعم مخصص'), text: L('24/7 customer service, personal account managers, priority scheduling', 'خدمة عملاء 24/7 ومديرو حسابات مخصصون') },
  { icon: '✅', title: L('Safety First', 'السلامة أولاً'), text: L('Background-checked drivers, regular vehicle maintenance, insurance coverage', 'سائقون معتمدون وصيانة دورية وتغطية تأمين') },
  { icon: '🌍', title: L('Flexible Packages', 'حزم مرنة'), text: L('Hourly, daily, monthly plans with no long-term contracts required', 'خطط بالساعة أو اليومية أو الشهرية بدون عقود طويلة') },
];
