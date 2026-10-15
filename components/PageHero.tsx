'use client';

/* ============================================================
 * PageHero = the short sliding hero of About and Privacy Policy.
 * (Home and the service pages use the bigger Hero.tsx with the booking form.)
 * Same slider as every other hero: components/HeroSlider.tsx
 * ============================================================ */
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useHeroSlider, HeroBackground, HeroDots } from './HeroSlider';

type T = { en: string; ar: string };

export default function PageHero({ slides, badge, title, text }: { slides: string[]; badge: T; title: T; text: T }) {
  const isAr = useSelector((state: RootState) => state.language.lang) === 'AR';
  const { pos, goTo } = useHeroSlider(slides.length);
  const L = (t: T) => (isAr ? t.ar : t.en);

  return (
    <section className="relative w-full overflow-hidden min-h-[340px] sm:min-h-[420px] flex items-center py-14 sm:py-20" dir={isAr ? 'rtl' : 'ltr'}>
      <HeroBackground slides={slides} cur={pos.cur} prev={pos.prev} isAr={isAr} overlay="bg-black/45" />

      <div className="relative z-10 w-[90%] max-w-[2000px] mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d9a036] bg-black/30 text-[#f3d38c] text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#d9a036] animate-pulse" />
          {L(badge)}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">{L(title)}</h1>
        <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium">{L(text)}</p>

        <p className="text-[11px] sm:text-xs font-semibold text-white/80 flex items-center justify-center gap-2">
          <Link href="/" className="hover:text-[#d9a036] transition-colors">{isAr ? 'الرئيسية' : 'Home'}</Link>
          <span>/</span>
          <span className="text-[#d9a036]">{L(title)}</span>
        </p>

        <div className="pt-2">
          <HeroDots count={slides.length} cur={pos.cur} onSelect={goTo} light />
        </div>
      </div>
    </section>
  );
}
