'use client';
/* ==========================================================
 * useLang: the translation hook used by every widget
 *   const { t, lang, isArabic } = useLang();
 *   t(SOME_DATA.title)   ->  returns the English or Arabic text
 * ========================================================== */
import { useAppSelector } from '@/store/hooks';
import type { Lang, Localized } from '@/data/types';

export function useLang() {
  const lang: Lang = useAppSelector((s) => s.language.current);
  const t = (text: Localized) => text[lang];
  return { lang, isArabic: lang === 'ar', t };
}
