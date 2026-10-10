/* ==========================================================
 * FONT: ONE font for the whole site (English + Arabic): Cairo.
 * Self-hosted by Next.js at build time (fast, good for SEO).
 * The CSS variable --font-cairo is used in styles/base.css
 * ========================================================== */
import { Cairo } from 'next/font/google';

export const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-cairo',
});
