import type { Localized, SectionIntro } from '../types';
import { icon, L } from '../helpers';

/* WHY CHOOSE US: heading (the section has no paragraph) */
export const WHY_INTRO: SectionIntro = {
  tagline: icon('⚡', L('YOUR COMPETITIVE ADVANTAGE', 'ميزتك التنافسية')),
  title: L('Why HADIR Leads', 'لماذا هادر الأفضل'),
};

/* Alt text and emoji used for the picture (IMAGES.whyChoose) */
export const WHY_IMAGE_ALT = L('HADIR luxury chauffeur service in Kuwait', 'خدمة هادر للسائق الفاخر في الكويت');
export const WHY_IMAGE_EMOJI = '🏆';

/* WHY CHOOSE US: 5 numbered points */
export const WHY_POINTS: { title: Localized; text: Localized }[] = [
  { title: L('Newest Fleet', 'أحدث أسطول'), text: L('Brand new luxury vehicles with cutting-edge technology, regularly serviced, never more than 3 years old', 'سيارات فاخرة جديدة تماماً بأحدث التقنيات، مصانة بانتظام') },
  { title: L('Vetted Professionals', 'محترفون معتمدون'), text: L('Background-checked drivers with excellence certifications, ongoing training, native multi-language speakers', 'سائقون معتمدون مع شهادات الامتياز والتدريب المستمر') },
  { title: L('Always Available', 'متوفر دائماً'), text: L('24/7/365 booking and support, real-time tracking, instant driver assignment, WhatsApp integration', 'حجوزات ودعم 24/7 مع تتبع فوري وتوافق واتس آب') },
  { title: L('Smart Flexibility', 'مرونة ذكية'), text: L('Hourly, daily, or monthly plans, no long-term contracts, scalable for your needs, corporate billing available', 'خطط ساعية أو يومية أو شهرية مع فواتير شركية') },
  { title: L('Transparent Pricing', 'أسعار شفافة'), text: L('Zero hidden fees, competitive rates, detailed invoicing, price match guarantee', 'لا رسوم مخفية وأسعار تنافسية مع ضمان المطابقة') },
];
