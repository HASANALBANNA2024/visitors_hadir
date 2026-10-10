'use client';
/* ==========================================================
 * Tagline: small gold text above section titles
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import type { IconLabel } from '@/data/types';
import Icon from './Icon';

export default function Tagline({ tagline }: { tagline: IconLabel }) {
  const { t } = useLang();
  return (
    <span className="section-tagline">
      <Icon symbol={tagline.icon} />
      {t(tagline.text)}
    </span>
  );
}
