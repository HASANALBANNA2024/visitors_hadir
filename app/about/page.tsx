/* ============================================================
 * PAGE: About   (address: /about)
 * ONE file = ONE page. Change texts / pictures here only.
 *  - slides : hero background pictures (public/images/pages/about/)
 *  - Every text has en (English) + ar (Arabic).
 * Layout is shared: components/AboutPage.tsx
 * ============================================================ */
import type { Metadata } from 'next';
import AboutPage, { AboutData } from '../../components/AboutPage';

const DATA: AboutData = {
  slides: [
    '/images/hero/slide-2.jpg',
    '/images/hero/slide-3.jpg',
    '/images/hero/slide-4.jpg',
    '/images/hero/slide-1.jpg',
  ],
  hero: {
    badge: { en: 'ABOUT HADIR VISITORS', ar: 'عن حاضِر فيزيتورز' },
    title: { en: 'About Us', ar: 'من نحن' },
    text: {
      en: 'Premium chauffeur and corporate transportation in Kuwait, built on punctuality, discretion and care.',
      ar: 'خدمات سائق خاص ونقل للشركات بمستوى فاخر في الكويت، قائمة على الالتزام بالمواعيد والسرية والاهتمام.',
    },
  },
  story: {
    badge: { en: 'OUR STORY', ar: 'قصتنا' },
    title: { en: 'Kuwait\'s Trusted Partner For Executive Mobility', ar: 'شريكك الموثوق للتنقل التنفيذي في الكويت' },
    paragraphs: [
      {
        en: 'HADIR VISITORS provides premium chauffeur, airport transfer, corporate event and delegation transport across Kuwait. We serve executives, companies, hotels and guests who expect every journey to be smooth and on time.',
        ar: 'تقدم حاضِر فيزيتورز خدمات السائق الخاص ونقل المطار ونقل فعاليات الشركات والوفود في أنحاء الكويت. نخدم التنفيذيين والشركات والفنادق والضيوف الذين يتوقعون رحلة سلسة وفي موعدها.',
      },
      {
        en: 'Our fleet of luxury sedans, SUVs, vans and buses is driven by trained, professional chauffeurs who know the city, speak English and Arabic and treat every guest with respect.',
        ar: 'يقود أسطولنا من السيدان والدفع الرباعي والفانات والحافلات الفاخرة سائقون محترفون ومدربون يعرفون المدينة ويتحدثون العربية والإنجليزية ويعاملون كل ضيف باحترام.',
      },
    ],
    points: [
      { en: 'Luxury, well-kept vehicles', ar: 'مركبات فاخرة ومصانة جيداً' },
      { en: 'Professional chauffeurs', ar: 'سائقون محترفون' },
      { en: 'Clear, honest pricing', ar: 'أسعار واضحة وصادقة' },
      { en: 'Support 24 hours, 7 days', ar: 'دعم على مدار 24 ساعة، 7 أيام' },
    ],
    image: '/images/pages/about/section.svg',
  },
  stats: [
    { value: '178+', label: { en: 'Premium vehicles', ar: 'مركبة ممتازة' } },
    { value: '24/7', label: { en: 'Always available', ar: 'متاح دائماً' } },
    { value: '15+', label: { en: 'Years of excellence', ar: 'سنوات من التميز' } },
    { value: '100%', label: { en: 'Professional drivers', ar: 'سائقون محترفون' } },
  ],
  pillars: [
    {
      icon: 'target',
      title: { en: 'Our Mission', ar: 'رسالتنا' },
      text: {
        en: 'To make every journey in Kuwait comfortable, safe and on time, with a service people can rely on.',
        ar: 'أن نجعل كل رحلة في الكويت مريحة وآمنة وفي موعدها، بخدمة يمكن الاعتماد عليها.',
      },
    },
    {
      icon: 'eye',
      title: { en: 'Our Vision', ar: 'رؤيتنا' },
      text: {
        en: 'To be the first choice for corporate and VIP transportation in Kuwait.',
        ar: 'أن نكون الخيار الأول للنقل المؤسسي ونقل كبار الشخصيات في الكويت.',
      },
    },
    {
      icon: 'shield',
      title: { en: 'Safety And Discretion', ar: 'الأمان والسرية' },
      text: {
        en: 'Trained drivers, maintained vehicles and full respect for your privacy on every trip.',
        ar: 'سائقون مدربون ومركبات مصانة واحترام كامل لخصوصيتك في كل رحلة.',
      },
    },
    {
      icon: 'clock',
      title: { en: 'Punctuality', ar: 'الالتزام بالمواعيد' },
      text: {
        en: 'Early arrival, smart routing and flight tracking so you are never kept waiting.',
        ar: 'وصول مبكر وتوجيه ذكي وتتبع للرحلات حتى لا تنتظر أبداً.',
      },
    },
    {
      icon: 'star',
      title: { en: 'Premium Comfort', ar: 'راحة فاخرة' },
      text: {
        en: 'Clean, quiet vehicles with comfortable interiors for work or rest on the road.',
        ar: 'مركبات نظيفة وهادئة بمقصورات مريحة للعمل أو الراحة أثناء الطريق.',
      },
    },
    {
      icon: 'users',
      title: { en: 'Guest Care', ar: 'الاهتمام بالضيف' },
      text: {
        en: 'Meet and greet, luggage help and a friendly team ready to assist at any hour.',
        ar: 'استقبال ومساعدة في الأمتعة وفريق ودود جاهز للمساعدة في أي وقت.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'About Us | HADIR VISITORS',
  description: 'About HADIR VISITORS: premium chauffeur, airport transfer and corporate transportation in Kuwait with professional drivers and a luxury fleet.',
  alternates: { canonical: '/about' },
};

export default function Page() {
  return <AboutPage data={DATA} />;
}
