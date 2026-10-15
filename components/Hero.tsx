'use client';

import { MessageCircle, Car, Check } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { SITE } from './Header';
import { useHeroSlider, HeroBackground, HeroDots } from './HeroSlider';
import BookingForm from './BookingForm';

/* ============================================================
 * HERO BACKGROUND SLIDES (use 2 to 4 pictures)
 *  1. Put the photos in  public/images/hero/
 *  2. Write the path here, e.g. '/images/hero/office.jpg'
 *  3. Add or delete a line = more / fewer slides (slides itself)
 * Best size: 1920x1080, JPG/WebP under ~400 KB (loads fast).
 * ============================================================ */
const HOME_SLIDES = [
  '/images/hero/slide-1.jpg',
  '/images/hero/slide-2.jpg',
  '/images/hero/slide-3.jpg',
  '/images/hero/slide-4.jpg',
];
/* sliding itself (timing, direction, dots): components/HeroSlider.tsx */

/* ============================================================
 * SERVICE PAGES use this same Hero (one file for the whole site).
 * Each page file (app/services/<name>/page.tsx) sends its own
 * slides, service and texts through these props.
 * Home page sends nothing = everything stays as it is above.
 * ============================================================ */
export interface HeroProps {
  slides?: string[]; // background pictures of this page
  service?: string; // service pre-selected in the form (a value of SERVICES)
  badge?: { en: string; ar: string }; // small gold line on top
  title?: { en: [string, string]; ar: [string, string] }; // [normal text, gold text]
  text?: { en: string; ar: string }; // paragraph under the title
  points?: { en: string; ar: string }[]; // service pages: information list next to the form (replaces buttons + numbers)
}

export default function Hero({ slides, service, badge, title, text, points }: HeroProps = {}) {
  const SLIDES = slides && slides.length ? slides : HOME_SLIDES;
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  /* Slider (shared by every hero): pos.cur = picture on screen */
  const { pos, goTo } = useHeroSlider(SLIDES.length);

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-8 sm:py-12 lg:py-16 bg-[#faf8f5]" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* BACKGROUND SLIDER: pictures slide sideways, no zoom / blur so they stay sharp */}
      <HeroBackground slides={SLIDES} cur={pos.cur} prev={pos.prev} isAr={isAr} />

      {/* 📦 Main Content */}
      <div className="relative w-[90%] max-w-[2000px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left rtl:lg:text-right bg-white/85 rounded-2xl p-6 sm:p-8 shadow-lg">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d9a036] bg-[#d9a036]/10 text-[#b37a1f] text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#d9a036] animate-pulse" />
              {badge
                ? (isAr ? badge.ar : badge.en)
                : (isAr ? 'أفخم النقل للشركات في الكويت' : "KUWAIT'S FINEST CORPORATE TRANSPORTATION")}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight">
              {title ? (
                <>{isAr ? title.ar[0] : title.en[0]} <span className="text-[#d9a036]">{isAr ? title.ar[1] : title.en[1]}</span></>
              ) : isAr ? (
                <>أعد تعريف <span className="text-[#d9a036]">تنقلك التنفيذي</span></>
              ) : (
                <>Redefine Your <br className="hidden sm:inline" /> <span className="text-[#d9a036]">Executive Mobility</span></>
              )}
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              {text
                ? (isAr ? text.ar : text.en)
                : isAr
                ? 'استمتع بنقل فاخر لا مثيل له مع حاضِر فيزيتورز. أسطول مميز، وسائقون محترفون، ودعم مخصص على مدار 24/7 للتميز المؤسسي.'
                : 'Experience unparalleled luxury transportation with HADIR VISITORS. Premium fleet, professional chauffeurs, and 24/7 dedicated support for corporate excellence.'}
            </p>

            {points ? (
              /* SERVICE PAGES: information about the service (list is in the page file: overview.points) */
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-200/80 text-left rtl:text-right">
                {points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-gray-800">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#d9a036] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    {isAr ? pt.ar : pt.en}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="#book-form"
                    className="bg-[#d9a036] hover:bg-[#c48e2e] text-white font-bold px-6 py-3 rounded-md shadow-md transition-all flex items-center gap-2 text-xs tracking-wider uppercase"
                  >
                    <Car className="w-4 h-4 fill-current" />
                    <span>{isAr ? 'احجز مركبتك' : 'BOOK YOUR VEHICLE'}</span>
                  </a>

                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-50 text-[#d9a036] border border-[#d9a036] font-bold px-6 py-3 rounded-md shadow-sm transition-all flex items-center gap-2 text-xs tracking-wider uppercase"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <span>{isAr ? 'واتساب الآن' : 'WHATSAPP NOW'}</span>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80 max-w-lg mx-auto lg:mx-0 text-center">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#d9a036]">178+</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">
                      {isAr ? 'مركبة ممتازة' : 'PREMIUM VEHICLES'}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#d9a036]">24/7</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">
                      {isAr ? 'متاح دائماً' : 'ALWAYS AVAILABLE'}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#d9a036]">15+</h3>
                    <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">
                      {isAr ? 'سنوات من التميز' : 'YEARS EXCELLENCE'}
                    </p>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Right Column: the booking form (one file for the whole site: BookingForm.tsx) */}
          <BookingForm service={service} />

        </div>

        {/* 🔘 SLIDER DOTS */}
        <div className="mt-6">
          <HeroDots count={SLIDES.length} cur={pos.cur} onSelect={goTo} />
        </div>

      </div>
    </section>
  );
}