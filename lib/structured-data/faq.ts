import type { Lang } from '@/data/types';
import { FAQS } from '@/data/faq';

/** Schema.org "FAQPage": questions can show as rich results on Google */
export const faqLd = (lang: Lang) => ({
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question[lang],
    acceptedAnswer: { '@type': 'Answer', text: f.answer[lang] },
  })),
});
