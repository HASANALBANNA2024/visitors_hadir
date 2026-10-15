'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MessageCircle, Clock, ArrowUp, MapPin } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { SITE, openMail } from './Header';

/* Footer "QUICK LINKS"
   - href '/#id' = the Home page at that section (from ANY page: Home, services, About, Privacy)
   - href '/about' = a normal page
   Add a line = add a link. */
const QUICK_LINKS = [
  { href: '/#car-gallery', en: 'Our Fleet', ar: 'أسطولنا' },
  { href: '/#service-standards', en: 'Services', ar: 'الخدمات' },
  { href: '/#industry-features', en: 'Features', ar: 'المميزات' },
  { href: '/#why-hadir', en: 'Why HADIR VISITORS', ar: 'لماذا حاضِر فيزيتورز' },
  { href: '/about', en: 'About Us', ar: 'من نحن' },
  { href: '/privacy-policy', en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
];

/* Footer "SERVICES": click = opens that service page.
   `slug` = the folder name in app/services/<slug>/page.tsx (one file per page).
   New service page = copy a page file + add one line here. */
const SERVICE_LINKS = [
  { slug: 'airport-transfers', en: 'Airport Transfers', ar: 'نقل المطار' },
  { slug: 'corporate-events', en: 'Corporate Events', ar: 'فعاليات الشركات' },
  { slug: 'executive-travel', en: 'Executive Travel', ar: 'السفر التنفيذي' },
  { slug: 'delegation-support', en: 'Delegation Support', ar: 'دعم الوفود' },
];

/* Social icons: icon files are in public/images/icons/. Links: SITE.social (Header.tsx) */
const SOCIALS = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'x', label: 'X (Twitter)' },
] as const;

export default function Footer() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = usePathname() === '/';

  /* Quick links: on Home the page scrolls smoothly to the section.
     On any other page the link opens Home at that section (Home scrolls there by itself). */
  const onQuickClick = (e: React.MouseEvent, href: string) => {
    if (!isHome || !href.startsWith('/#')) return;
    e.preventDefault();
    const id = href.slice(2);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', href); // address bar shows /#car-gallery
  };

  /* Opens the Maps app on a phone, Google Maps on a computer */
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;

  const socials = SOCIALS.filter((s) => SITE.social[s.key]); // only filled links are shown

  return (
    <footer id="contact" className="bg-[#181818] text-gray-300 pt-16 pb-8 border-t border-[#d9a036]/20 relative scroll-mt-20" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="w-[90%] max-w-[2000px] mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

          {/* Column 1: Brand Info + social icons */}
          <div className="space-y-4">
            <h3 className="text-xl font-black tracking-wider text-[#d9a036] uppercase">
              HADIR VISITORS
            </h3>
            <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-sm">
              {isAr
                ? 'حلول النقل النخبة والنقل التنفيذي للشركات في الكويت. نخدم الشركات والتنفيذيين بتميز لا مثيل له.'
                : "Kuwait's premier corporate transportation and luxury mobility solutions. Serving businesses and executives with uncompromising excellence."}
            </p>
            {socials.length > 0 && (
              <div className="flex items-center gap-3 pt-1">
                {socials.map((s) => (
                  <a key={s.key} href={SITE.social[s.key]} target="_blank" rel="noopener noreferrer me" aria-label={s.label}
                    className="hover:scale-110 transition-transform">
                    <img src={`/images/icons/${s.key}.svg`} alt="" width={26} height={26} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Quick Links (click = Home page section, or About / Privacy page) */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#d9a036] uppercase">
              {isAr ? 'روابط سريعة' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-400">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={(e) => onQuickClick(e, l.href)} className="hover:text-[#d9a036] transition-colors">
                    {isAr ? l.ar : l.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (click = opens the service page) */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#d9a036] uppercase">
              {isAr ? 'الخدمات' : 'SERVICES'}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-400">
              {SERVICE_LINKS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/services/${l.slug}`} className="hover:text-[#d9a036] transition-colors">
                    {isAr ? l.ar : l.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (click = call / mail app / WhatsApp chat) */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#d9a036] uppercase">
              {isAr ? 'تواصل معنا' : 'CONTACT'}
            </h4>
            <ul className="space-y-3 text-xs font-medium text-gray-300">
              <li>
                <a href={SITE.phoneHref} dir="ltr" className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#e05286] shrink-0" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} onClick={(e) => openMail(e, SITE.email)} className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.bookingEmail}`} onClick={(e) => openMail(e, SITE.bookingEmail)} className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{SITE.bookingEmail}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  <span>{isAr ? 'دعم الواتساب' : 'WhatsApp Support'}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <Clock className="w-3.5 h-3.5 text-[#d9a036] shrink-0" />
                <span>{isAr ? 'متاح 24/7' : '24/7 Available'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Map: shows the office. Click "Open in Maps" = opens the Maps app (phone) or Google Maps (computer) */}
        <div className="py-8 border-b border-gray-800">
          <div className="relative rounded-xl overflow-hidden border border-gray-800 h-56 sm:h-64">
            <iframe
              title="HADIR VISITORS office map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            />
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 end-3 inline-flex items-center gap-1.5 bg-[#d9a036] hover:bg-[#c48e2e] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg shadow-lg transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              {isAr ? 'افتح في الخرائط' : 'Open in Maps'}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-[11px] text-gray-500 font-semibold">
          <p dir="ltr">
            © 2026 HADIR VISITORS | Kuwait&apos;s Premier Corporate Transportation | All rights reserved
          </p>
          {(isAr ? SITE.address.ar : SITE.address.en) && (
            <p className="mt-2">
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#d9a036] transition-colors">
                {isAr ? 'العنوان: ' : 'Office: '}{isAr ? SITE.address.ar : SITE.address.en}
              </a>
            </p>
          )}
        </div>

      </div>

      {/* Floating buttons: scroll to top + WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-[#d9a036] hover:bg-[#c48e2e] text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>

        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact WhatsApp"
          className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
        </a>
      </div>
    </footer>
  );
}
