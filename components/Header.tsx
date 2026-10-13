'use client';

import { useEffect, useState } from 'react';
import { Phone, Mail, Clock, Menu, X } from 'lucide-react';
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
export const SITE = {
  phoneDisplay: '+965 9677 0078',
  phoneHref: 'tel:+96596770078', // click = phone call
  whatsapp: '96596770078', // click = WhatsApp chat
  email: 'info@hadirvisitors.com', // click = opens the mail app
  bookingEmail: 'booking@hadirvisitors.com', // click = opens the mail app
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    x: '',
  },
};

/* Menu: href = id of the section on the page (ids are set in app/page.tsx) */
const MENU = [
  { href: '#home', en: 'Home', ar: 'الرئيسية' },
  { href: '#car-gallery', en: 'Fleet', ar: 'الأسطول' },
  { href: '#service-standards', en: 'Services', ar: 'الخدمات' },
  { href: '#industry-features', en: 'Features', ar: 'المميزات' },
  { href: '#why-hadir', en: 'Why Us', ar: 'لماذا نحن' },
  { href: '#contact', en: 'Contact', ar: 'اتصل بنا' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  /* Highlight the menu item of the section that is on screen */
  useEffect(() => {
    const onScroll = () => {
      // active = the section whose top edge is closest above the menu bar
      let current = '#home';
      let best = -Infinity;
      for (const item of MENU) {
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
  }, []);

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
            <a href={`mailto:${SITE.email}`} className="hidden sm:flex items-center gap-1.5 text-[#d9a036] font-medium hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE.email}</span>
            </a>
            <a href={`mailto:${SITE.bookingEmail}`} className="hidden lg:flex items-center gap-1.5 text-[#d9a036] font-medium hover:underline">
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
            <a href="#home" className="flex items-center gap-3">
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
            </a>

            {/* Desktop menu: click = smooth scroll to that section */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-700">
              {MENU.map((item) => (
                <a key={item.href} href={item.href} className={linkClass(item.href)}>
                  {isAr ? item.ar : item.en}
                </a>
              ))}
            </nav>

            {/* Phone menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Phone drawer: same links, closes after a click */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3">
            {MENU.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm py-1 ${active === item.href ? 'text-[#d9a036] font-bold' : 'text-gray-700 font-medium'}`}
              >
                {isAr ? item.ar : item.en}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
