/* ==========================================================
 * RootDocument: the <html> and <body> of a page
 * Used by the English layout ("/") and the Arabic layout ("/ar")
 *  - loads all CSS and the Cairo font
 *  - Redux store with the language of the page
 *  - JSON-LD structured data for Google
 * ========================================================== */
import '@/styles';
import type { Lang } from '@/data/types';
import { cairo } from '@/lib/fonts';
import { buildJsonLd } from '@/lib/structured-data';
import StoreProvider from '@/store/StoreProvider';
import JsonLd from '@/components/seo/JsonLd';
import LanguageSync from './LanguageSync';

export default function RootDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const isArabic = lang === 'ar';
  return (
    <html lang={lang} dir={isArabic ? 'rtl' : 'ltr'} className={cairo.variable} suppressHydrationWarning>
      <body className={isArabic ? 'ar' : undefined} suppressHydrationWarning>
        <JsonLd data={buildJsonLd(lang)} />
        <StoreProvider lang={lang}>
          <LanguageSync />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
