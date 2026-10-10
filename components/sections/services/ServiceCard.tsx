'use client';
/* ==========================================================
 * ServiceCard: icon + title + description
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import type { TitleText } from '@/data/types';

export default function ServiceCard({ service }: { service: TitleText }) {
  const { t } = useLang();
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">{service.icon}</div>
      <h3 className="service-name">{t(service.title)}</h3>
      <p className="service-desc">{t(service.text)}</p>
    </article>
  );
}
