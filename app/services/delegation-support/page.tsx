/* ============================================================
 * PAGE: Delegation Support   (address: /services/delegation-support)
 * ONE file = ONE page. Change texts / pictures here only.
 *  - slides   : hero background pictures. Put the pictures in
 *               public/images/services/delegation-support/ (same names
 *               = automatic; other names = change the path here).
 *               Add / delete a line = more / fewer slides.
 *  - service  : what the booking form on this page has chosen.
 *  - Every text has en (English) + ar (Arabic).
 * Layout is shared: components/ServicePage.tsx
 * ============================================================ */
import type { Metadata } from 'next';
import ServicePage, { ServiceData } from '../../../components/ServicePage';

const DATA: ServiceData = {
  slug: 'delegation-support',
  service: 'Delegation Support',
  slides: [
    '/images/hero/slide-4.jpg',
    '/images/hero/slide-1.jpg',
    '/images/hero/slide-2.jpg',
    '/images/hero/slide-3.jpg',
  ],
  hero: {
    badge: { en: 'DELEGATION TRANSPORT IN KUWAIT', ar: 'نقل الوفود في الكويت' },
    title: { en: ['Official Visits, ', 'Handled With Care'], ar: ['الزيارات الرسمية، ', 'بعناية تامة'] },
    text: {
      en: 'Convoys, protocol-ready vehicles and a dedicated coordinator for official delegations, government guests and international visitors.',
      ar: 'مواكب ومركبات جاهزة للبروتوكول ومنسق مخصص للوفود الرسمية والضيوف الحكوميين والزوار الدوليين.',
    },
  },
  overview: {
    badge: { en: 'DELEGATION SUPPORT', ar: 'دعم الوفود' },
    title: { en: 'One Team For The Whole Delegation Schedule', ar: 'فريق واحد لجدول الوفد بالكامل' },
    paragraphs: [
      {
        en: 'Delegations have tight programs and many moving parts. HADIR VISITORS plans every move between airport, hotel, meetings and venues, and keeps your host informed.',
        ar: 'للوفود برامج مزدحمة وتفاصيل كثيرة. تخطط حاضِر فيزيتورز كل تنقل بين المطار والفندق والاجتماعات والمواقع، وتبقي مضيفك على اطلاع.',
      },
      {
        en: 'We send a lead car, VIP vehicles and buses together, with experienced drivers who follow protocol and the official timetable.',
        ar: 'نرسل سيارة مقدمة ومركبات VIP وحافلات معاً، مع سائقين ذوي خبرة يلتزمون بالبروتوكول والجدول الرسمي.',
      },
    ],
    points: [
      { en: 'Convoy and lead car', ar: 'موكب وسيارة مقدمة' },
      { en: 'Dedicated coordinator', ar: 'منسق مخصص' },
      { en: 'Hotel, airport and venue plan', ar: 'خطة للفندق والمطار والمواقع' },
      { en: 'Multi-day programs', ar: 'برامج متعددة الأيام' },
    ],
  },
  included: [
    { icon: 'crown', title: { en: 'VIP Vehicles', ar: 'مركبات VIP' }, text: { en: 'Luxury sedans and SUVs for heads of delegation.', ar: 'سيدان ودفع رباعي فاخرة لرؤساء الوفود.' } },
    { icon: 'users', title: { en: 'Group Buses', ar: 'حافلات المجموعات' }, text: { en: 'Comfortable vans and buses for the full team.', ar: 'فانات وحافلات مريحة للفريق بالكامل.' } },
    { icon: 'map', title: { en: 'Route Planning', ar: 'تخطيط المسارات' }, text: { en: 'Pre-checked routes and timings for every stop.', ar: 'مسارات وتوقيتات تم فحصها مسبقاً لكل محطة.' } },
    { icon: 'shield', title: { en: 'Protocol Aware Drivers', ar: 'سائقون ملمّون بالبروتوكول' }, text: { en: 'Professional, discreet and used to official programs.', ar: 'محترفون وسريون ومعتادون على البرامج الرسمية.' } },
    { icon: 'calendar', title: { en: 'Multi-Day Support', ar: 'دعم لعدة أيام' }, text: { en: 'The same team and vehicles from arrival to departure.', ar: 'نفس الفريق والمركبات من الوصول حتى المغادرة.' } },
    { icon: 'phone', title: { en: 'Dedicated Coordinator', ar: 'منسق مخصص' }, text: { en: 'One contact available 24/7 for changes and requests.', ar: 'جهة اتصال واحدة متاحة 24/7 للتغييرات والطلبات.' } },
  ],
  steps: [
    { title: { en: 'Send The Program', ar: 'أرسل البرنامج' }, text: { en: 'Share dates, guests and the list of places.', ar: 'شاركنا التواريخ والضيوف وقائمة الأماكن.' } },
    { title: { en: 'Receive The Plan', ar: 'استلم الخطة' }, text: { en: 'We propose vehicles, routes and a clear price.', ar: 'نقترح المركبات والمسارات وسعراً واضحاً.' } },
    { title: { en: 'Final Briefing', ar: 'الإحاطة النهائية' }, text: { en: 'Drivers and coordinator are briefed before arrival.', ar: 'تتم إحاطة السائقين والمنسق قبل الوصول.' } },
    { title: { en: 'Smooth Visit', ar: 'زيارة سلسة' }, text: { en: 'The delegation moves on time, stop after stop.', ar: 'يتنقل الوفد في الموعد، محطة بعد محطة.' } },
  ],
};

export const metadata: Metadata = {
  title: 'Delegation Transportation in Kuwait | HADIR VISITORS',
  description: 'Convoys, VIP vehicles and a dedicated coordinator for official delegations, government guests and international visitors in Kuwait.',
  alternates: { canonical: '/services/delegation-support' },
};

export default function Page() {
  return <ServicePage data={DATA} />;
}
