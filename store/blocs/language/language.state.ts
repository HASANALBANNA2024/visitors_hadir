/* ==========================================================
 * LANGUAGE BLOC: STATE
 * current : 'en' (English, LTR) or 'ar' (Arabic, RTL)
 * ========================================================== */
import type { Lang } from '@/data/types';

export interface LanguageState {
  current: Lang;
}

export const languageInitialState = (lang: Lang = 'en'): LanguageState => ({ current: lang });
