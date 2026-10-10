/* ==========================================================
 * SECTION 6: TESTIMONIALS (3 client reviews)
 * Data: data/testimonials.ts
 * ========================================================== */
import { Section, SectionHeader } from '@/components/common';
import { TESTIMONIALS, TESTIMONIALS_INTRO } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <Section id="testimonials" className="testimonials" labelledBy="testimonials-title">
      <SectionHeader tagline={TESTIMONIALS_INTRO.tagline} title={TESTIMONIALS_INTRO.title} titleId="testimonials-title" />
      <div className="testimonials-grid">
        {TESTIMONIALS.map((item) => <TestimonialCard key={item.id} item={item} />)}
      </div>
    </Section>
  );
}
