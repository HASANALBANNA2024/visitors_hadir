'use client';
/* ==========================================================
 * HeroSlider: moving background pictures behind the hero
 * - effect 'slide' (sideways) or 'fade'  -> data/hero/slides.ts
 * - slow zoom (Ken Burns) + soft white layer for easy reading
 * - state: store/blocs/heroSlider   timer: hooks/useInterval
 * ========================================================== */
import { useInterval } from '@/hooks/useInterval';
import { useHeroSliderBloc } from '@/store/blocs/heroSlider/useHeroSliderBloc';
import { HERO_SLIDER, HERO_SLIDES } from '@/data/hero';
import HeroSlide from './HeroSlide';
import HeroSliderDots from './HeroSliderDots';

export default function HeroSlider() {
  const { state, events } = useHeroSliderBloc();

  /* Auto play: next picture every intervalMs (needs 2+ pictures) */
  useInterval(events.slideAdvanced, HERO_SLIDES.length > 1 ? HERO_SLIDER.intervalMs : null);

  return (
    <>
      {/* Decoration only -> hidden from screen readers */}
      <div className="hero-slider" aria-hidden="true" data-effect={HERO_SLIDER.effect} data-started={state.previous !== null}>
        {HERO_SLIDES.map((slide, i) => (
          <HeroSlide key={slide.id} slide={slide} first={i === 0}
            state={state.active === i ? 'active' : state.previous === i ? 'previous' : 'idle'} />
        ))}
        <div className="hero-slider-overlay" />
      </div>
      <HeroSliderDots />
    </>
  );
}
