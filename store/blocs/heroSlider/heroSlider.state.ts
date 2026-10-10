/* ==========================================================
 * HERO SLIDER BLOC: STATE
 * active   : index of the picture visible now
 * previous : picture that is sliding out (null = nothing yet)
 * count    : how many pictures there are (data/hero/slides.ts)
 * ========================================================== */
import { HERO_SLIDES } from '@/data/hero';

export interface HeroSliderState {
  active: number;
  previous: number | null;
  count: number;
}

export const heroSliderInitialState: HeroSliderState = {
  active: 0,
  previous: null,
  count: HERO_SLIDES.length,
};
