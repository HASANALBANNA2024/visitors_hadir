import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

/* ONE font for the whole site (English + Arabic), self-hosted by Next.js = fast */
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

/* Real website address: set NEXT_PUBLIC_SITE_URL in .env.local on the server */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://hadirvisitors.com';
const TITLE = 'HADIR VISITORS | Luxury Chauffeur & Corporate Car Service in Kuwait';
const DESCRIPTION =
  'HADIR VISITORS: premium chauffeur, airport transfer, corporate event and delegation transport in Kuwait. Luxury sedans, SUVs, vans and buses with professional drivers, 24/7.';

/* <head> tags for Google and for link previews (WhatsApp, Facebook, X) */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['chauffeur Kuwait', 'airport transfer Kuwait', 'corporate transport Kuwait', 'luxury car rental Kuwait', 'HADIR VISITORS'],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: SITE_URL, siteName: 'HADIR VISITORS', title: TITLE, description: DESCRIPTION, images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-image.png'] },
  robots: { index: true, follow: true },
};

/* Phone friendly + browser bar colour */
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#d9a036' };

/* Structured data (JSON-LD): helps Google show the business */
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  name: 'HADIR VISITORS',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  telephone: '+96596770078',
  email: 'info@hadirvisitors.com',
  areaServed: 'Kuwait',
  address: { '@type': 'PostalAddress', addressCountry: 'KW', addressLocality: 'Kuwait City' },
  openingHours: 'Mo-Su 00:00-23:59',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
