'use client';
/* ==========================================================
 * FeatureItem: icon + title + text
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import type { TitleText } from '@/data/types';

export default function FeatureItem({ feature }: { feature: TitleText }) {
  const { t } = useLang();
  return (
    <article className="feature-item">
      <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
      <h3 className="feature-title">{t(feature.title)}</h3>
      <p className="feature-text">{t(feature.text)}</p>
    </article>
  );
}
