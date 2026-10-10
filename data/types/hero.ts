import type { Localized } from './lang';

/** One background picture of the hero slider */
export interface HeroSlide {
  id: string;
  src: string; // '/images/hero/x.jpg' or a full https link
  label: Localized; // short description (accessibility)
}

/** 'slide' = pictures slide sideways, 'fade' = cross-fade */
export type SliderEffect = 'slide' | 'fade';
