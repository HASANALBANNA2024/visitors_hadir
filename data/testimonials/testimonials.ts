import type { SectionIntro, Testimonial } from '../types';
import { icon, L } from '../helpers';

/* TESTIMONIALS: heading */
export const TESTIMONIALS_INTRO: SectionIntro = {
  tagline: icon('💬', L('TRUSTED BY LEADING ORGANIZATIONS', 'موثوق من قبل المنظمات الرائدة')),
  title: L('Client Success Stories', 'قصص نجاح العملاء'),
};

/* >>> Replace these samples with real client reviews <<< */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ahmed', author: 'Ahmed Al-Rashid',
    role: L('CEO, Fortune 500 Company', 'الرئيس التنفيذي لشركة عملاقة'),
    quote: L("HADIR Visitors transformed our corporate transportation. Their professionalism, reliability, and attention to detail are industry-leading. Couldn't ask for better.", 'غيّر هادر فيزيتورز طريقة نقلنا الشركي. احترافيتهم وموثوقيتهم لا مثيل لها. لا نستطيع أن نطلب أفضل من ذلك.'),
  },
  {
    id: 'fatima', author: 'Fatima Al-Sabah',
    role: L('Hospitality Director, Luxury Hotel', 'مديرة الضيافة، فندق فاخر'),
    quote: L('Seamless booking experience, immaculate vehicles, courteous drivers. HADIR Visitors handles all our VIP guest transportation with absolute precision.', 'تجربة حجز سلسة وسيارات نظيفة تماماً وسائقون مهذبون. يتعامل هادر فيزيتورز مع جميع نقل ضيوفنا VIP بدقة مطلقة.'),
  },
  {
    id: 'mohammed', author: 'Mohammed Al-Qahtani',
    role: L('Managing Director, Tech Firm', 'المدير العام، شركة تقنية'),
    quote: L('We moved our entire fleet to HADIR Visitors. Cost savings, better service, professional drivers, and genuine partnership. Best business decision we made.', 'انتقلنا بكامل أسطولنا إلى هادر فيزيتورز. توفير في التكاليف وخدمة أفضل وسائقون محترفون. أفضل قرار عملي اتخذناه.'),
  },
];
