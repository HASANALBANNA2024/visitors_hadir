import type { HeroSlide, SliderEffect } from '../types';
import { L } from '../helpers';

/* ==========================================================
 * HERO BACKGROUND SLIDER (use 2 to 4 pictures)
 *  1. Copy your photos to /public/images/hero/
 *  2. Change `src`, e.g. '/images/hero/office.jpg'
 *  3. Add / delete an object to change the number of slides
 * Best: 1920x1080 or bigger, JPG/WebP under ~400 KB.
 * ========================================================== */
export const HERO_SLIDER: { intervalMs: number; effect: SliderEffect } = {
  intervalMs: 6500, // time each picture stays
  effect: 'slide', // 'slide' (moves sideways) or 'fade'
};

export const HERO_SLIDES: HeroSlide[] = [
  { id: 'office', src: '/images/hero/office.svg', label: L('Corporate office towers in Kuwait', 'أبراج الشركات في الكويت') },
  { id: 'car', src: '/images/hero/car.svg', label: L('Luxury chauffeur driven car', 'سيارة فاخرة مع سائق خاص') },
  { id: 'airport', src: '/images/hero/airport.svg', label: L('Airport transfer service', 'خدمة التوصيل من المطار') },
  { id: 'dusk', src: '/images/hero/dusk.svg', label: L('Kuwait skyline at dusk', 'أفق الكويت عند الغروب') },
];
