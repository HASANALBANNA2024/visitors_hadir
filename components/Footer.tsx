'use client';

import { Phone, Mail, MessageCircle, Clock, ArrowUp } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Footer() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#181818] text-gray-300 pt-16 pb-8 border-t border-[#d9a036]/20 relative" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-black tracking-wider text-[#d9a036] uppercase">
              HADIR VISTIORS
            </h3>
            <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-sm">
              {isAr
                ? 'حلول النقل النخبة والنقل التنفيذي للشركات في الكويت. نخدم الشركات والتنفيذيين بتميز لا مثيل له.'
                : "Kuwait's premier corporate transportation and luxury mobility solutions. Serving businesses and executives with uncompromising excellence."}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#d9a036] uppercase">
              {isAr ? 'روابط سريعة' : 'QUICK LINKS'}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('car-gallery')}
                  className="hover:text-[#d9a036] transition-colors cursor-pointer"
                >
                  {isAr ? 'أسطولنا' : 'Our Fleet'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('service-standards')}
                  className="hover:text-[#d9a036] transition-colors cursor-pointer"
                >
                  {isAr ? 'الخدمات' : 'Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('industry-features')}
                  className="hover:text-[#d9a036] transition-colors cursor-pointer"
                >
                  {isAr ? 'المميزات' : 'Features'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-hadir')}
                  className="hover:text-[#d9a036] transition-colors cursor-pointer"
                >
                  {isAr ? 'لماذا حاضِر' : 'Why HADIR'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#d9a036] uppercase">
              {isAr ? 'الخدمات' : 'SERVICES'}
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-gray-400">
              <li>
                <a href="#book-form" className="hover:text-[#d9a036] transition-colors">
                  {isAr ? 'نقل المطار' : 'Airport Transfers'}
                </a>
              </li>
              <li>
                <a href="#book-form" className="hover:text-[#d9a036] transition-colors">
                  {isAr ? 'فعاليات الشركات' : 'Corporate Events'}
                </a>
              </li>
              <li>
                <a href="#book-form" className="hover:text-[#d9a036] transition-colors">
                  {isAr ? 'السفر التنفيذي' : 'Executive Travel'}
                </a>
              </li>
              <li>
                <a href="#book-form" className="hover:text-[#d9a036] transition-colors">
                  {isAr ? 'دعم الوفود' : 'Delegation Support'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold tracking-widest text-[#d9a036] uppercase">
              {isAr ? 'تواصل معنا' : 'CONTACT'}
            </h4>
            <ul className="space-y-3 text-xs font-medium text-gray-300">
              <li>
                <a
                  href="tel:+96596770078"
                  className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#e05286] shrink-0" />
                  <span>+965 9677 0078</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hadirvisitors.com"
                  className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span>info@hadirvisitors.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/96596770078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#d9a036] transition-colors"
                >
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
            © 2026 HADIR VISTIORS | Kuwait&apos;s Premier Corporate Transportation | All rights reserved
          </p>
        </div>

      </div>

      {/* Floating Action Buttons (Scroll to Top & Fixed WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-[#d9a036] hover:bg-[#c48e2e] text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/96596770078"
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