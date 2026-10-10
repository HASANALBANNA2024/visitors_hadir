/* ==========================================================
 * ARABIC LAYOUT  ->  the page at "/ar"  (right-to-left)
 * ========================================================== */
import type { Metadata } from 'next';
import RootDocument from '@/components/app/RootDocument';
import { buildMetadata, VIEWPORT } from '@/lib/seo';

export const metadata: Metadata = buildMetadata('ar'); // Arabic title, description, OG...
export const viewport = VIEWPORT;

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="ar">{children}</RootDocument>;
}
