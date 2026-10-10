/* ==========================================================
 * ENGLISH LAYOUT  ->  the page at "/"
 * Arabic lives in app/(ar)/ar/  ->  "/ar"
 * Each layout is its own "root layout" with its own <html lang>,
 * so Google sees a real English page and a real Arabic page.
 * ========================================================== */
import type { Metadata } from 'next';
import RootDocument from '@/components/app/RootDocument';
import { buildMetadata, VIEWPORT } from '@/lib/seo';

export const metadata: Metadata = buildMetadata('en'); // <head> tags (title, OG, hreflang...)
export const viewport = VIEWPORT;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
