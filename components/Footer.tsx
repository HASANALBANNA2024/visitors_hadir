'use client';

import { Phone, Mail, MessageCircle, Clock, ArrowUp } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { SITE } from './Header';

/* Footer "QUICK LINKS": id = section id (set in app/page.tsx). Add a line = add a link. */
const QUICK_LINKS = [
  { id: 'car-gallery', en: 'Our Fleet', ar: 'أسطولنا' },
  { id: 'service-standards', en: 'Services', ar: 'الخدمات' },
  { id: 'industry-features', en: 'Features', ar: 'المميزات' },
  { id: 'why-hadir', en: 'Why HADIR VISITORS', ar: 'لماذا حاضِر فيزيتورز' },
];

/* Footer "SERVICES": click = choose this service in the booking form.
   `service` must match a value in SERVICES (Hero.tsx). */
const SERVICE_LINKS = [
  { service: 'Airport Transfer', en: 'Airport Transfers', ar: 'نقل المطار' },
  { service: 'Corporate Events', en: 'Corporate Events', ar: 'فعاليات الشركات' },
  { service: 'Executive Chauffeur', en: 'Executive Travel', ar: 'السفر التنفيذي' },
  { service: 'Delegation Support', en: 'Delegation Support', ar: 'دعم الوفود' },
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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* Choose the service in the form (Hero.tsx listens) and scroll to the form */
  const selectService = (service: string) => {
    window.dispatchEvent(new CustomEvent('select-service', { detail: { service } }));
    document.getElementById('book-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

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

          {/* Column 2: Quick Links (click = scroll to the section) */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#d9a036] uppercase">
              {isAr ? 'روابط سريعة' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-400">
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollToSection(l.id)} className="hover:text-[#d9a036] transition-colors cursor-pointer">
                    {isAr ? l.ar : l.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (click = fills the booking form) */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#d9a036] uppercase">
              {isAr ? 'الخدمات' : 'SERVICES'}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-400">
              {SERVICE_LINKS.map((l) => (
                <li key={l.service}>
                  <button onClick={() => selectService(l.service)} className="hover:text-[#d9a036] transition-colors cursor-pointer">
                    {isAr ? l.ar : l.en}
                  </button>
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
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.bookingEmail}`} className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors">
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

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-[11px] text-gray-500 font-semibold">
          <p dir="ltr">
            © 2026 HADIR VISITORS | Kuwait&apos;s Premier Corporate Transportation | All rights reserved
          </p>
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
