'use client';
/* ==========================================================
 * Stars: five gold stars with an accessible label
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { UI } from '@/data/ui';

export default function Stars() {
  const { t } = useLang();
  return (
    <div className="stars" role="img" aria-label={t(UI.starsLabel)}>
      ⭐⭐⭐⭐⭐
    </div>
  );
}
