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
  // Google Search Console: put the code in .env.local as NEXT_PUBLIC_GSC_VERIFICATION (no code change needed)
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } } : {}),
};

/* Phone friendly + browser bar colour */
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#d9a036' };

/* Structured data (JSON-LD): helps Google show the business */
const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  '@id': `${SITE_URL}/#business`,
  name: 'HADIR VISITORS',
  alternateName: 'حاضر فيزيتورز',
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: '+96597267879',
  email: 'info@hadirvisitors.com',
  areaServed: { '@type': 'Country', name: 'Kuwait' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Block 2, Salem Al-Mubarak St., Bldg 7113, 1st Floor',
    addressLocality: 'Salmiya',
    addressCountry: 'KW',
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Salem+Al-Mubarak+Street,+Salmiya,+Kuwait',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  availableLanguage: ['English', 'Arabic'],
  contactPoint: { '@type': 'ContactPoint', telephone: '+96597267879', contactType: 'reservations', availableLanguage: ['English', 'Arabic'] },
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
