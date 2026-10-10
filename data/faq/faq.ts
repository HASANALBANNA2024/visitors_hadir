import type { Localized, SectionIntro } from '../types';
import { icon, L } from '../helpers';

/* FAQ SECTION: heading (also feeds Google "FAQ" rich results) */
export const FAQ_INTRO: SectionIntro = {
  tagline: icon('❓', L('QUESTIONS & ANSWERS', 'أسئلة وأجوبة')),
  title: L('Frequently Asked Questions', 'الأسئلة الشائعة'),
};

export interface Faq { id: string; question: Localized; answer: Localized }

/* >>> Edit the answers to match your real policies <<< */
export const FAQS: Faq[] = [
  {
    id: 'booking',
    question: L('How do I book a chauffeur in Kuwait?', 'كيف أحجز سائقاً خاصاً في الكويت؟'),
    answer: L('Fill in the booking form or message us on WhatsApp. We confirm within minutes, 24/7.', 'املأ نموذج الحجز أو راسلنا عبر واتس آب. نؤكد الحجز خلال دقائق على مدار الساعة.'),
  },
  {
    id: 'airport',
    question: L('Do you offer airport transfers at Kuwait International Airport?', 'هل تقدمون خدمة التوصيل من مطار الكويت الدولي؟'),
    answer: L('Yes. Our chauffeurs track your flight and wait for you at arrivals.', 'نعم. يتابع سائقونا رحلتك وينتظرونك في صالة الوصول.'),
  },
  {
    id: 'corporate',
    question: L('Can companies get monthly contracts?', 'هل تتوفر عقود شهرية للشركات؟'),
    answer: L('Yes. We offer hourly, daily and monthly plans with corporate billing.', 'نعم. نقدم خططاً بالساعة واليوم والشهر مع فواتير للشركات.'),
  },
  {
    id: 'vehicles',
    question: L('Which vehicles are available?', 'ما هي السيارات المتوفرة؟'),
    answer: L('Mercedes S-Class, BMW 7 Series, Kia K8, Ford Taurus, Bentley Bentayga and Rolls-Royce Cullinan.', 'مرسيدس S-Class وBMW الفئة 7 وكيا K8 وفورد توروس وبنتلي بينتايجا ورولز رويس كولينان.'),
  },
];
