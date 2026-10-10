import { L } from '../helpers';

/* ==========================================================
 * SITE DATA: company info used everywhere (header, footer,
 * WhatsApp, SEO). >>> EDIT WITH YOUR REAL DETAILS <<<
 * ========================================================== */
export const SITE = {
  /** Your real website address, no trailing slash */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hadirvisitors.com',
  name: L('HADIR Visitors', 'هادر فيزيتورز'),
  tagline: L('LUXURY MOBILITY', 'حلول النقل الفاخر'),
  phoneDisplay: '+965 9677 0078',
  phoneHref: 'tel:+96596770078',
  /** WhatsApp number: digits only, country code first, no + */
  whatsappNumber: '96596770078',
  email: 'info@hadirvisitors.com',
  /** Second email shown for reservations (top strip, footer, Google) */
  bookingEmail: 'booking@hadirvisitors.com',
  countryCode: 'KW',
  city: L('Kuwait City', 'مدينة الكويت'),
  streetAddress: '', // optional, helps local SEO
};
