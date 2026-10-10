'use client';
/* ==========================================================
 * FaqItem: one question. <details> opens/closes with no
 * JavaScript, and the answer text stays readable by Google.
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import type { Faq } from '@/data/faq';

export default function FaqItem({ item }: { item: Faq }) {
  const { t } = useLang();
  return (
    <details className="faq-item">
      <summary className="faq-question">{t(item.question)}</summary>
      <p className="faq-answer">{t(item.answer)}</p>
    </details>
  );
}
