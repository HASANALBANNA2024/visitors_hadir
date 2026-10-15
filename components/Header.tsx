'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Clock, Menu, X, ChevronDown } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleLanguage } from '../store/languageSlice';

/* ============================================================
 * SITE: the ONE place for phone, emails and social links.
 * Footer.tsx, Hero.tsx and CarGallery.tsx import it from here.
 *  - phone / whatsapp: digits only, country code first (no +)
 *  - social: paste your page link between the quotes
 *    ('' = icon is hidden, so nothing is broken)
 * ============================================================ */
/* Email click: on phones it opens the mail app (mailto).
   On a computer without a mail app, mailto does nothing, so it opens Gmail's
   compose window instead with the address filled in. */
export function openMail(e: React.MouseEvent<HTMLAnchorElement>, address: string) {
  if (typeof navigator === 'undefined' || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;
  e.preventDefault();
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(address)}`, '_blank', 'noopener,noreferrer');
}

export const SITE = {
  phoneDisplay: '+965 972 67879',
  phoneHref: 'tel:+96597267879', // click = phone call
  whatsapp: '96597267879', // click = WhatsApp chat
  email: 'info@hadirvisitors.com', // click = opens the mail app
  bookingEmail: 'booking@hadirvisitors.com', // click = opens the mail app
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    x: '',
  },
};

/* Service pages shown under "Services" in the menu (same list as the footer).
   slug = folder name in app/services/<slug>/page.tsx */
const SERVICE_PAGES = [
  { href: '/services/airport-transfers', en: 'Airport Transfers', ar: 'نقل المطار' },
  { href: '/services/corporate-events', en: 'Corporate Events', ar: 'فعاليات الشركات' },
  { href: '/services/executive-travel', en: 'Executive Travel', ar: 'السفر التنفيذي' },
  { href: '/services/delegation-support', en: 'Delegation Support', ar: 'دعم الوفود' },
];

/* Menu.
 *  - href '#id'  = a section of the Home page (ids are set in app/page.tsx)
 *  - href '/xxx' = a separate page (About, Privacy Policy)
 *  - children    = drop-down list (the 4 service pages)
 */
const MENU: { href: string; en: string; ar: string; children?: typeof SERVICE_PAGES }[] = [
  { href: '#home', en: 'Home', ar: 'الرئيسية' },
  { href: '#car-gallery', en: 'Fleet', ar: 'الأسطول' },
  { href: '#service-standards', en: 'Services', ar: 'الخدمات', children: SERVICE_PAGES },
  { href: '#industry-features', en: 'Features', ar: 'المميزات' },
  { href: '#why-hadir', en: 'Why Us', ar: 'لماذا نحن' },
  { href: '/about', en: 'About', ar: 'من نحن' },
  { href: '/privacy-policy', en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
  { href: '#contact', en: 'Contact', ar: 'اتصل بنا' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  /* On a service page (/services/...) the menu links go back to the Home page sections.
     The footer (#contact) is on every page, so Contact just scrolls down. */
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isServicePage = pathname.startsWith('/services');
  const hrefOf = (h: string) => (h.startsWith('/') ? h : isHome || h === '#contact' ? h : h === '#home' ? '/' : `/${h}`);

  /* Highlight the menu item of the section that is on screen */
  useEffect(() => {
    const onScroll = () => {
      // active = the section whose top edge is closest above the menu bar
      // service page: "Services" is lit; About / Privacy Policy page: that item is lit
      let current = isHome ? '#home' : isServicePage ? '#service-standards' : pathname;
      let best = -Infinity;
      for (const item of isHome ? MENU.filter((m) => m.href.startsWith('#')) : []) {
        const top = document.getElementById(item.href.slice(1))?.getBoundingClientRect().top;
        if (top !== undefined && top <= 140 && top > best) {
          best = top;
          current = item.href;
        }
      }
      // page bottom reached: the footer is short, so mark Contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = '#contact';
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome, isServicePage, pathname]);

  const linkClass = (href: string) =>
    active === href
      ? 'text-[#d9a036] border-b-2 border-[#d9a036] pb-1'
      : 'hover:text-[#d9a036] transition-colors pb-1 border-b-2 border-transparent';

  return (
    <>
      {/* ===== TOP STRIP: normal block (NOT sticky) -> it scrolls away, the menu bar below stays ===== */}
      <div className="w-full bg-[#f4f5f7] text-[#6b7280] text-xs sm:text-sm py-2 border-b border-gray-100" dir={isAr ? 'rtl' : 'ltr'}>
        <div className="w-[90%] max-w-[2000px] mx-auto flex justify-between items-center gap-3">

          {/* Left: phone + emails (click = call / mail app) */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a href={SITE.phoneHref} dir="ltr" className="flex items-center gap-1.5 text-[#d9a036] font-medium hover:underline">
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{SITE.phoneDisplay}</span>
            </a>
            <a href={`mailto:${SITE.email}`} onClick={(e) => openMail(e, SITE.email)} className="hidden sm:flex items-center gap-1.5 text-[#d9a036] font-medium hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE.email}</span>
            </a>
            <a href={`mailto:${SITE.bookingEmail}`} onClick={(e) => openMail(e, SITE.bookingEmail)} className="hidden lg:flex items-center gap-1.5 text-[#d9a036] font-medium hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE.bookingEmail}</span>
            </a>
          </div>

          {/* Right: support text + language button, side by side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-gray-700">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              <span>{isAr ? 'دعم ممتاز على مدار 24/7' : '24/7 Premium Support'}</span>
            </div>
            <button
              onClick={() => dispatch(toggleLanguage())}
              className="bg-[#d9a036] hover:bg-[#c48e2e] text-white font-semibold px-3 py-1 rounded text-xs transition-colors cursor-pointer shadow-sm"
            >
              {isAr ? 'EN / العربية' : 'العربية / EN'}
            </button>
          </div>

        </div>
      </div>

      {/* ===== MENU BAR: sticky, always visible while scrolling ===== */}
      <header className="w-full sticky top-0 z-50 bg-white shadow-sm" dir={isAr ? 'rtl' : 'ltr'}>
        <div className="border-b border-gray-100">
          <div className="w-[90%] max-w-[2000px] mx-auto py-3 flex justify-between items-center">

            {/* Logo: public/images/logo.png */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden">
                <img src="/images/logo.png" alt="HADIR VISITORS Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block text-lg font-extrabold text-gray-900 tracking-wider leading-none uppercase">
                  HADIR VISITORS
                </span>
                <span className="block text-[9px] text-[#d9a036] tracking-[0.2em] font-bold uppercase mt-0.5">
                  LUXURY MOBILITY
                </span>
              </div>
            </Link>

            {/* Desktop menu: click = smooth scroll / open the page. "Services" opens a drop-down with the 4 service pages */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-semibold text-gray-700">
              {MENU.map((item) =>
                item.children ? (
                  <div key={item.href} className="relative group">
                    <Link href={hrefOf(item.href)} className={`${linkClass(item.href)} inline-flex items-center gap-1`}>
                      {isAr ? item.ar : item.en}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="absolute top-full start-0 pt-3 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200 z-50">
                      <div className="w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className={`block px-4 py-2.5 text-[13px] hover:bg-[#d9a036]/10 hover:text-[#d9a036] transition-colors ${pathname === c.href ? 'text-[#d9a036] font-bold' : ''}`}
                          >
                            {isAr ? c.ar : c.en}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.href} href={hrefOf(item.href)} className={linkClass(item.href)}>
                    {isAr ? item.ar : item.en}
                  </Link>
                )
              )}
            </nav>

            {/* Phone menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Phone drawer: same links (services listed under "Services"), closes after a click */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 max-h-[75vh] overflow-y-auto">
            {MENU.map((item) => (
              <div key={item.href}>
                <Link
                  href={hrefOf(item.href)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm py-1 ${active === item.href ? 'text-[#d9a036] font-bold' : 'text-gray-700 font-medium'}`}
                >
                  {isAr ? item.ar : item.en}
                </Link>
                {item.children && (
                  <div className="ms-4 mt-1 border-s-2 border-[#d9a036]/40 ps-3 space-y-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-[13px] py-1 ${pathname === c.href ? 'text-[#d9a036] font-bold' : 'text-gray-600 font-medium'}`}
                      >
                        {isAr ? c.ar : c.en}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
