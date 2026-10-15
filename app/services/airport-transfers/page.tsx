/* ============================================================
 * PAGE: Airport Transfers   (address: /services/airport-transfers)
 * ONE file = ONE page. Change texts / pictures here only.
 *  - slides   : hero background pictures. Put the pictures in
 *               public/images/services/airport-transfers/ (same names
 *               = automatic; other names = change the path here).
 *               Add / delete a line = more / fewer slides.
 *  - service  : what the booking form on this page has chosen.
 *  - Every text has en (English) + ar (Arabic).
 * Layout is shared: components/ServicePage.tsx
 * ============================================================ */
import type { Metadata } from 'next';
import ServicePage, { ServiceData } from '../../../components/ServicePage';

const DATA: ServiceData = {
  slug: 'airport-transfers',
  service: 'Airport Transfer',
  slides: [
    '/images/hero/slide-1.jpg',
    '/images/hero/slide-2.jpg',
    '/images/hero/slide-3.jpg',
    '/images/hero/slide-4.jpg',
  ],
  hero: {
    badge: { en: 'VIP AIRPORT TRANSFERS IN KUWAIT', ar: 'خدمة نقل المطار VIP في الكويت' },
    title: { en: ['Arrive Relaxed, ', 'Leave Stress Behind'], ar: ['صِل مرتاحاً، ', 'ودع التوتر خلفك'] },
    text: {
      en: 'Your chauffeur waits at arrivals with a name sign, tracks your flight and takes you straight to your destination in a premium vehicle, on time, every time.',
      ar: 'ينتظرك سائقك في صالة الوصول بلوحة باسمك، ويتابع رحلتك ويوصلك مباشرة إلى وجهتك في مركبة فاخرة، في الموعد دائماً.',
    },
  },
  overview: {
    badge: { en: 'AIRPORT TRANSFERS', ar: 'نقل المطار' },
    title: { en: 'Smooth Pick-Up And Drop-Off At Kuwait International Airport', ar: 'استقبال وتوصيل سلس في مطار الكويت الدولي' },
    paragraphs: [
      {
        en: 'Whether you are a guest arriving in Kuwait or an executive leaving for a meeting abroad, HADIR VISITORS makes the airport the easy part of your trip.',
        ar: 'سواء كنت ضيفاً يصل إلى الكويت أو تنفيذياً مسافراً لاجتماع في الخارج، تجعل حاضِر فيزيتورز رحلة المطار أسهل جزء في سفرك.',
      },
      {
        en: 'We cover all terminals, follow your flight in real time and adjust the pick-up if the plane is early or late, at no extra stress for you.',
        ar: 'نغطي جميع المباني، ونتابع رحلتك لحظة بلحظة ونعدل موعد الاستقبال إذا وصلت الطائرة مبكراً أو متأخرة، دون أي عناء إضافي عليك.',
      },
    ],
    points: [
      { en: 'All terminals covered', ar: 'تغطية جميع المباني' },
      { en: 'Live flight tracking', ar: 'تتبع الرحلات مباشرة' },
      { en: 'Meet & greet at arrivals', ar: 'استقبال في صالة الوصول' },
      { en: 'Fixed, clear pricing', ar: 'أسعار ثابتة وواضحة' },
    ],
  },
  included: [
    { icon: 'plane', title: { en: 'Flight Tracking', ar: 'تتبع الرحلة' }, text: { en: 'We monitor your flight, so delays never leave you waiting.', ar: 'نراقب رحلتك حتى لا يتركك التأخير في الانتظار.' } },
    { icon: 'users', title: { en: 'Meet & Greet', ar: 'الاستقبال بالاسم' }, text: { en: 'Your chauffeur holds a name sign and helps with your luggage.', ar: 'يحمل السائق لوحة باسمك ويساعدك في حقائبك.' } },
    { icon: 'clock', title: { en: 'Free Waiting Time', ar: 'انتظار مجاني' }, text: { en: 'Free waiting time after landing, so you can clear immigration calmly.', ar: 'وقت انتظار مجاني بعد الهبوط لتنهي إجراءات الجوازات بهدوء.' } },
    { icon: 'car', title: { en: 'Premium Vehicles', ar: 'مركبات فاخرة' }, text: { en: 'Choose a sedan, SUV, van or bus to fit your group and luggage.', ar: 'اختر سيدان أو دفع رباعي أو فان أو حافلة تناسب مجموعتك وحقائبك.' } },
    { icon: 'shield', title: { en: 'Safe, Vetted Drivers', ar: 'سائقون موثوقون' }, text: { en: 'Professional, background-checked drivers who know every route.', ar: 'سائقون محترفون تم فحص سجلهم ويعرفون كل الطرق.' } },
    { icon: 'phone', title: { en: '24/7 Support', ar: 'دعم على مدار الساعة' }, text: { en: 'Early flights and late landings are no problem, we answer day and night.', ar: 'الرحلات المبكرة والهبوط المتأخر لا مشكلة فيه، نرد ليلاً ونهاراً.' } },
  ],
  steps: [
    { title: { en: 'Send Your Flight', ar: 'أرسل رحلتك' }, text: { en: 'Fill the form above with flight and pick-up details.', ar: 'املأ النموذج أعلاه بتفاصيل الرحلة والاستقبال.' } },
    { title: { en: 'Get Confirmation', ar: 'احصل على التأكيد' }, text: { en: 'We confirm the vehicle, driver and price on WhatsApp.', ar: 'نؤكد المركبة والسائق والسعر عبر الواتساب.' } },
    { title: { en: 'Meet Your Driver', ar: 'قابل سائقك' }, text: { en: 'Your chauffeur is waiting at arrivals when you land.', ar: 'سائقك بانتظارك في صالة الوصول عند هبوطك.' } },
    { title: { en: 'Arrive In Comfort', ar: 'صِل براحة' }, text: { en: 'Relax on the ride and arrive on time.', ar: 'استرخِ أثناء الرحلة وصِل في الموعد.' } },
  ],
};

export const metadata: Metadata = {
  title: 'Airport Transfers in Kuwait | HADIR VISITORS',
  description: 'VIP airport pick-up and drop-off at Kuwait International Airport: flight tracking, meet & greet, premium sedans, SUVs, vans and buses.',
  alternates: { canonical: '/services/airport-transfers' },
};

export default function Page() {
  return <ServicePage data={DATA} />;
}
