import type { Lang } from '../types';

/** Search keywords per language (used in the meta keywords tag) */
export const KEYWORDS: Record<Lang, string[]> = {
  en: [
    'luxury car rental Kuwait', 'chauffeur service Kuwait', 'corporate transportation Kuwait',
    'airport transfer Kuwait', 'car with driver Kuwait', 'VIP transport Kuwait',
    'Mercedes S-Class rental Kuwait', 'Rolls-Royce rental Kuwait', 'delegation transport Kuwait', 'HADIR',
  ],
  ar: [
    'تأجير سيارات فاخرة الكويت', 'خدمة سائق خاص الكويت', 'نقل شركات الكويت',
    'توصيل مطار الكويت', 'سيارة مع سائق الكويت', 'نقل VIP الكويت',
    'تأجير مرسيدس الكويت', 'تأجير رولز رويس الكويت', 'نقل الوفود الكويت', 'هادر',
  ],
};
