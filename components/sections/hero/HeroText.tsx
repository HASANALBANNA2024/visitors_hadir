'use client';
/* ==========================================================
 * HeroText: left side of the hero
 * tagline + <h1> + description + 2 buttons + HeroStats
 * Data: data/hero.ts, data/links.ts
 * ========================================================== */
import { Button, Icon } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { scrollToId } from '@/lib/scroll';
import { HERO } from '@/data/hero';
import { LINKS } from '@/data/site';
import HeroStats from './HeroStats';

export default function HeroText() {
  const { t } = useLang();
  return (
    <div className="hero-text">
      <span className="tagline">
        <Icon symbol={HERO.tagline.icon} />
        {t(HERO.tagline.text)}
      </span>
      <h1 id="hero-title">{t(HERO.title)}</h1>
      <p>{t(HERO.description)}</p>

      <div className="hero-buttons">
        <Button label={HERO.bookButton} onClick={() => scrollToId('booking')} />
        <Button label={HERO.whatsappButton} variant="secondary" href={LINKS.whatsapp} external />
      </div>

      <HeroStats />
    </div>
  );
}
