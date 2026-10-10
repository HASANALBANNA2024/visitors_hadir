/* ==========================================================
 * FONTS: Cairo (Arabic + Latin) loaded with next/font.
 * Self-hosted by Next.js at build time: fast and good for SEO.
 * The CSS variable --font-cairo is used in styles/base.css
 * ========================================================== */
import { Cairo } from 'next/font/google';

export const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-cairo',
});
