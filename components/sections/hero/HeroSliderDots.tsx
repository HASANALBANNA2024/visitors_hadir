'use client';
/* ==========================================================
 * HeroSliderDots: small dots under the hero to pick a picture
 * Event: slideSelected (store/blocs/heroSlider)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useHeroSliderBloc } from '@/store/blocs/heroSlider/useHeroSliderBloc';
import { HERO_SLIDES } from '@/data/hero';
import { UI } from '@/data/ui';

export default function HeroSliderDots() {
  const { t } = useLang();
  const { state, events } = useHeroSliderBloc();
  if (HERO_SLIDES.length < 2) return null;

  return (
    <div className="hero-dots" role="group" aria-label={t(UI.sliderLabel)}>
      {HERO_SLIDES.map((slide, i) => (
        <button
          key={slide.id}
          type="button"
          className={state.active === i ? 'hero-dot active' : 'hero-dot'}
          aria-label={`${t(UI.sliderDot)} ${i + 1}: ${t(slide.label)}`}
          aria-current={state.active === i}
          onClick={() => events.slideSelected(i)}
        />
      ))}
    </div>
  );
}
