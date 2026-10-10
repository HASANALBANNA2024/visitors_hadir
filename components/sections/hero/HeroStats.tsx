'use client';
/* ==========================================================
 * HeroStats: 3 numbers (vehicles, hours, years)
 * Data: data/hero.ts -> HERO_STATS
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { HERO_STATS } from '@/data/hero';

export default function HeroStats() {
  const { t } = useLang();
  return (
    <div className="stats">
      {HERO_STATS.map((s) => (
        <div className="stat-item" key={s.value}>
          <div className="stat-number">{s.value}</div>
          <div className="stat-label">{t(s.label)}</div>
        </div>
      ))}
    </div>
  );
}
