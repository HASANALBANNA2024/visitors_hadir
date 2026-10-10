/* ==========================================================
 * HeroSlide: ONE background picture of the slider.
 * className tells the CSS what to do:
 *   active   -> slides in      previous -> slides out
 *   (none)   -> waits outside the screen
 * ========================================================== */
import Image from 'next/image';
import type { HeroSlide as Slide } from '@/data/types';

interface Props {
  slide: Slide;
  state: 'active' | 'previous' | 'idle';
  first: boolean; // the first picture is the page's main image (loaded with priority)
}

export default function HeroSlide({ slide, state, first }: Props) {
  return (
    <div className={state === 'idle' ? 'hero-slide' : `hero-slide ${state}`}>
      <Image src={slide.src} alt="" fill sizes="100vw" priority={first} unoptimized style={{ objectFit: 'cover' }} />
    </div>
  );
}
