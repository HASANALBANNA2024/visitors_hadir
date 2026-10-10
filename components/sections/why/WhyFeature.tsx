'use client';
/* ==========================================================
 * WhyFeature: numbered circle + title + text
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import type { Localized } from '@/data/types';

interface Props { number: number; title: Localized; text: Localized }

export default function WhyFeature({ number, title, text }: Props) {
  const { t } = useLang();
  return (
    <div className="why-choose-feature">
      <div className="why-choose-icon" aria-hidden="true">{number}</div>
      <div>
        <h3>{t(title)}</h3>
        <p>{t(text)}</p>
      </div>
    </div>
  );
}
