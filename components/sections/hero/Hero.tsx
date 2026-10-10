/* ==========================================================
 * SECTION 1: HERO
 * = HeroSlider (moving background)
 *   + HeroText (left) + BookingForm (right)
 * ========================================================== */
import { Section } from '@/components/common';
import HeroSlider from './HeroSlider';
import HeroText from './HeroText';
import BookingForm from './BookingForm';

export default function Hero() {
  return (
    <Section id="home" className="hero" labelledBy="hero-title">
      <HeroSlider />
      <div className="hero-content">
        <HeroText />
        <BookingForm />
      </div>
    </Section>
  );
}
