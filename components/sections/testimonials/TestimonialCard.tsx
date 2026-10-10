'use client';
/* ==========================================================
 * TestimonialCard: stars + quote + author + role
 * ========================================================== */
import { Stars } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import type { Testimonial } from '@/data/types';

export default function TestimonialCard({ item }: { item: Testimonial }) {
  const { t } = useLang();
  return (
    <figure className="testimonial-card">
      <Stars />
      <blockquote className="testimonial-text">&quot;{t(item.quote)}&quot;</blockquote>
      <figcaption>
        <div className="testimonial-author">{item.author}</div>
        <div className="testimonial-title">{t(item.role)}</div>
      </figcaption>
    </figure>
  );
}
