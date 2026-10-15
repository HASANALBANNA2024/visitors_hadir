/* ============================================================
 * PAGE: Executive Travel   (address: /services/executive-travel)
 * ONE file = ONE page. Change texts / pictures here only.
 *  - slides   : hero background pictures. Put the pictures in
 *               public/images/services/executive-travel/ (same names
 *               = automatic; other names = change the path here).
 *               Add / delete a line = more / fewer slides.
 *  - service  : what the booking form on this page has chosen.
 *  - Every text has en (English) + ar (Arabic).
 * Layout is shared: components/ServicePage.tsx
 * ============================================================ */
import type { Metadata } from 'next';
import ServicePage, { ServiceData } from '../../../components/ServicePage';

const DATA: ServiceData = {
  slug: 'executive-travel',
  service: 'Executive Chauffeur',
  slides: [
    '/images/hero/slide-3.jpg',
    '/images/hero/slide-4.jpg',
    '/images/hero/slide-1.jpg',
    '/images/hero/slide-2.jpg',
  ],
  hero: {
    badge: { en: 'EXECUTIVE CHAUFFEUR IN KUWAIT', ar: 'سائق تنفيذي في الكويت' },
    title: { en: ['Your Time Is Valuable, ', 'Use It On The Road'], ar: ['وقتك ثمين، ', 'استثمره في الطريق'] },
    text: {
      en: 'A private chauffeur and a luxury car for meetings, business days and daily travel. Work, call or rest while we handle the drive.',
      ar: 'سائق خاص وسيارة فاخرة للاجتماعات وأيام العمل والتنقل اليومي. اعمل أو اتصل أو استرح بينما نتولى القيادة.',
    },
  },
  overview: {
    badge: { en: 'EXECUTIVE TRAVEL', ar: 'السفر التنفيذي' },
    title: { en: 'A Private Chauffeur For Your Business Day', ar: 'سائق خاص ليوم عملك' },
    paragraphs: [
      {
        en: 'Executive travel is about trust and punctuality. Your chauffeur knows the city, keeps your schedule and treats everything you discuss in the car as private.',
        ar: 'السفر التنفيذي يقوم على الثقة والالتزام بالمواعيد. يعرف سائقك المدينة ويلتزم بجدولك ويعامل كل ما تناقشه في السيارة بسرية تامة.',
      },
      {
        en: 'Book one trip, a full day or a monthly arrangement with the same driver, and choose a sedan or SUV that fits your style.',
        ar: 'احجز رحلة واحدة أو يوماً كاملاً أو ترتيباً شهرياً مع السائق نفسه، واختر سيدان أو دفع رباعي يناسب ذوقك.',
      },
    ],
    points: [
      { en: 'Private and discreet', ar: 'خصوصية وسرية تامة' },
      { en: 'Same driver on request', ar: 'نفس السائق عند الطلب' },
      { en: 'Hourly, daily, monthly', ar: 'بالساعة أو يومي أو شهري' },
      { en: 'Wi-Fi and water on board', ar: 'واي فاي ومياه على متن السيارة' },
    ],
  },
  included: [
    { icon: 'briefcase', title: { en: 'Business Days', ar: 'أيام العمل' }, text: { en: 'Back-to-back meetings with no parking or traffic stress.', ar: 'اجتماعات متتالية دون قلق من المواقف أو الازدحام.' } },
    { icon: 'shield', title: { en: 'Discretion', ar: 'السرية' }, text: { en: 'Trained drivers who respect your privacy at all times.', ar: 'سائقون مدربون يحترمون خصوصيتك دائماً.' } },
    { icon: 'clock', title: { en: 'Always On Time', ar: 'دائماً في الموعد' }, text: { en: 'Smart routing and early arrival so you are never late.', ar: 'توجيه ذكي ووصول مبكر حتى لا تتأخر أبداً.' } },
    { icon: 'star', title: { en: 'Luxury Comfort', ar: 'راحة فاخرة' }, text: { en: 'Clean, quiet cars with leather seats and cool interiors.', ar: 'سيارات نظيفة وهادئة بمقاعد جلدية وأجواء مريحة.' } },
    { icon: 'file', title: { en: 'Flexible Packages', ar: 'باقات مرنة' }, text: { en: 'Pay per trip, per hour or choose a monthly contract.', ar: 'ادفع لكل رحلة أو لكل ساعة أو اختر عقداً شهرياً.' } },
    { icon: 'phone', title: { en: 'Direct Contact', ar: 'تواصل مباشر' }, text: { en: 'Message your driver or our team any time, day or night.', ar: 'راسل سائقك أو فريقنا في أي وقت ليلاً أو نهاراً.' } },
  ],
  steps: [
    { title: { en: 'Choose Your Car', ar: 'اختر سيارتك' }, text: { en: 'Pick a sedan or SUV below and press Reserve.', ar: 'اختر سيدان أو دفع رباعي بالأسفل واضغط احجز.' } },
    { title: { en: 'Send The Details', ar: 'أرسل التفاصيل' }, text: { en: 'Add pick-up place, time and hours needed.', ar: 'أضف مكان الاستقبال والوقت والساعات المطلوبة.' } },
    { title: { en: 'Get Confirmed', ar: 'احصل على التأكيد' }, text: { en: 'We confirm your driver and price on WhatsApp.', ar: 'نؤكد سائقك والسعر عبر الواتساب.' } },
    { title: { en: 'Ride With Ease', ar: 'انطلق براحة' }, text: { en: 'Your chauffeur arrives early, ready to go.', ar: 'يصل سائقك مبكراً وجاهزاً للانطلاق.' } },
  ],
};

export const metadata: Metadata = {
  title: 'Executive Chauffeur & Business Travel in Kuwait | HADIR VISITORS',
  description: 'Private chauffeur and luxury cars for business days, meetings and daily executive travel in Kuwait. Hourly, daily and monthly packages.',
  alternates: { canonical: '/services/executive-travel' },
};

export default function Page() {
  return <ServicePage data={DATA} />;
}
