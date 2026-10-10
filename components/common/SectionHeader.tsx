'use client';
/* ==========================================================
 * SectionHeader: tagline + <h2> title + optional description
 * titleId : id of the <h2> (used by Section aria-labelledby)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import type { IconLabel, Localized } from '@/data/types';
import Tagline from './Tagline';

interface Props {
  tagline: IconLabel;
  title: Localized;
  titleId: string;
  description?: Localized;
}

export default function SectionHeader({ tagline, title, titleId, description }: Props) {
  const { t } = useLang();
  return (
    <div className="section-header">
      <Tagline tagline={tagline} />
      <h2 className="section-title" id={titleId}>{t(title)}</h2>
      {description && <p className="section-description">{t(description)}</p>}
    </div>
  );
}
