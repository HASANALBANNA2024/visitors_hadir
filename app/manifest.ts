/* ==========================================================
 * Web app manifest (/manifest.webmanifest)
 * Lets phones "Add to home screen" and tells browsers the brand colour.
 * ========================================================== */
import type { MetadataRoute } from 'next';
import { SEO } from '@/data/seo';

export const dynamic = 'force-static'; // needed for static export (Cloudflare)

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HADIR Visitors | Luxury Mobility Kuwait',
    short_name: 'HADIR Visitors',
    description: SEO.description.en,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#D4AF37',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
