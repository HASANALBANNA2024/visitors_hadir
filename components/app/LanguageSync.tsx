'use client';
/* ==========================================================
 * LanguageSync: when the language changes (Redux) it updates
 *  - <html lang> and <html dir>
 *  - body class "ar" (used by the Arabic CSS rules)
 *  - page title and meta description
 *  - the address bar: "/" for English, "/ar" for Arabic
 *    (no page reload; a refresh then loads the right version)
 * ========================================================== */
import { useEffect } from 'react';
import { useLang } from '@/hooks/useLang';
import { SEO } from '@/data/seo';

export default function LanguageSync() {
  const { lang } = useLang();

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('ar', lang === 'ar');

    document.title = SEO.title[lang];
    document.querySelector('meta[name="description"]')?.setAttribute('content', SEO.description[lang]);

    const targetPath = lang === 'ar' ? '/ar' : '';
    const currentPath = window.location.pathname.replace(/\/+$/, '');
    if (currentPath !== targetPath) {
      window.history.replaceState(window.history.state, '', (targetPath || '/') + window.location.hash);
    }
  }, [lang]);

  return null;
}
