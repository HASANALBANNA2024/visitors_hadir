/* ============================================================
 * PAGE: Corporate Events   (address: /services/corporate-events)
 * ONE file = ONE page. Change texts / pictures here only.
 *  - slides   : hero background pictures. Put the pictures in
 *               public/images/services/corporate-events/ (same names
 *               = automatic; other names = change the path here).
 *               Add / delete a line = more / fewer slides.
 *  - service  : what the booking form on this page has chosen.
 *  - Every text has en (English) + ar (Arabic).
 * Layout is shared: components/ServicePage.tsx
 * ============================================================ */
import type { Metadata } from 'next';
import ServicePage, { ServiceData } from '../../../components/ServicePage';

const DATA: ServiceData = {
  slug: 'corporate-events',
  service: 'Corporate Events',
  slides: [
    '/images/services/corporate-events/slide-1.jpg',
    '/images/services/corporate-events/slide-2.jpg',
    '/images/services/corporate-events/slide-3.jpg',
  ],
  hero: {
    badge: { en: 'CORPORATE EVENT TRANSPORT IN KUWAIT', ar: 'نقل فعاليات الشركات في الكويت' },
    title: { en: ['Every Guest Arrives ', 'In Style'], ar: ['كل ضيف يصل ', 'بأناقة'] },
    text: {
      en: 'Conferences, galas, launches and company trips: we plan the transport so your guests arrive together, on time and impressed.',
      ar: 'مؤتمرات وحفلات وإطلاقات ورحلات شركات: نخطط النقل ليصل ضيوفك معاً، في الموعد وبانطباع رائع.',
    },
  },
  overview: {
    badge: { en: 'CORPORATE EVENTS', ar: 'فعاليات الشركات' },
    title: { en: 'Transport That Matches The Level Of Your Event', ar: 'نقل يليق بمستوى فعاليتك' },
    paragraphs: [
      {
        en: 'A great event can be spoiled by late cars and lost guests. HADIR VISITORS builds a simple transport plan around your schedule, venue and guest list.',
        ar: 'قد يفسد تأخر السيارات وضياع الضيوف فعالية رائعة. تضع حاضِر فيزيتورز خطة نقل بسيطة حول جدولك وموقعك وقائمة ضيوفك.',
      },
      {
        en: 'From one VIP sedan to a full fleet of vans and buses, we send the right vehicles with uniformed chauffeurs and one coordinator for your team.',
        ar: 'من سيدان VIP واحدة إلى أسطول كامل من الفانات والحافلات، نرسل المركبات المناسبة مع سائقين بزي رسمي ومنسق واحد لفريقك.',
      },
    ],
    points: [
      { en: 'Single or multi-vehicle plans', ar: 'خطط لمركبة واحدة أو عدة مركبات' },
      { en: 'Uniformed chauffeurs', ar: 'سائقون بزي رسمي' },
      { en: 'Venue and timing coordination', ar: 'تنسيق الموقع والتوقيت' },
      { en: 'Hourly or full-day packages', ar: 'باقات بالساعة أو ليوم كامل' },
    ],
  },
  included: [
    { icon: 'calendar', title: { en: 'Event Planning', ar: 'تخطيط الفعالية' }, text: { en: 'A simple schedule for pick-ups, drop-offs and waiting times.', ar: 'جدول بسيط لمواعيد الاستقبال والتوصيل والانتظار.' } },
    { icon: 'car', title: { en: 'Matching Fleet', ar: 'أسطول متناسق' }, text: { en: 'Clean, matching vehicles that look right at your entrance.', ar: 'مركبات نظيفة ومتناسقة تليق بمدخل فعاليتك.' } },
    { icon: 'users', title: { en: 'Group Transport', ar: 'نقل المجموعات' }, text: { en: 'Vans and buses to move teams and guests together.', ar: 'فانات وحافلات لنقل الفرق والضيوف معاً.' } },
    { icon: 'crown', title: { en: 'VIP Arrival', ar: 'وصول VIP' }, text: { en: 'Door-to-door service for speakers and key guests.', ar: 'خدمة من الباب إلى الباب للمتحدثين وكبار الضيوف.' } },
    { icon: 'briefcase', title: { en: 'Corporate Billing', ar: 'فوترة للشركات' }, text: { en: 'One clear invoice for the whole event.', ar: 'فاتورة واحدة واضحة للفعالية كاملة.' } },
    { icon: 'phone', title: { en: 'On-Site Coordinator', ar: 'منسق في الموقع' }, text: { en: 'One contact on the day to solve any change quickly.', ar: 'جهة اتصال واحدة في يوم الفعالية لحل أي تغيير بسرعة.' } },
  ],
  steps: [
    { title: { en: 'Share The Plan', ar: 'شاركنا الخطة' }, text: { en: 'Tell us date, venue and number of guests.', ar: 'أخبرنا بالتاريخ والموقع وعدد الضيوف.' } },
    { title: { en: 'Get A Quote', ar: 'احصل على عرض' }, text: { en: 'We send vehicles, schedule and price on WhatsApp.', ar: 'نرسل المركبات والجدول والسعر عبر الواتساب.' } },
    { title: { en: 'We Prepare', ar: 'نجهز كل شيء' }, text: { en: 'Drivers and vehicles are briefed and ready.', ar: 'يتم تجهيز السائقين والمركبات مسبقاً.' } },
    { title: { en: 'Event Day', ar: 'يوم الفعالية' }, text: { en: 'Guests arrive and leave smoothly, on time.', ar: 'يصل الضيوف ويغادرون بسلاسة وفي الموعد.' } },
  ],
};

export const metadata: Metadata = {
  title: 'Corporate Event Transportation in Kuwait | HADIR VISITORS',
  description: 'Chauffeur and group transport for conferences, galas, launches and company events in Kuwait: matching fleet, uniformed drivers and one coordinator.',
  alternates: { canonical: '/services/corporate-events' },
};

export default function Page() {
  return <ServicePage data={DATA} />;
}
