'use client';
/* ==========================================================
 * Logo: square logo + company name + tagline
 * Photo logo: set IMAGES.logo in data/images.ts
 * ========================================================== */
import { ImageSlot } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { scrollToTop } from '@/lib/scroll';
import { IMAGES, SITE } from '@/data/site';
import { UI } from '@/data/ui';

export default function Logo() {
  const { t } = useLang();
  return (
    <a
      className="logo"
      href="#home"
      aria-label={t(UI.logoLabel)}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <div className="logo-icon">
        <ImageSlot src={IMAGES.logo} alt={SITE.name.en} fallback="H" sizes="50px" priority />
      </div>
      <div className="logo-text">
        <span>{t(SITE.name)}</span>
        <span>{t(SITE.tagline)}</span>
      </div>
    </a>
  );
}
