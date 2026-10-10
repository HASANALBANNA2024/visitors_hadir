'use client';
/* ==========================================================
 * SECTION 5: WHY CHOOSE US
 * = text with 5 numbered points (left) + picture (right)
 * Data: data/why.ts   Picture: IMAGES.whyChoose (data/images.ts)
 * ========================================================== */
import { ImageSlot, Section, Tagline } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { IMAGES } from '@/data/site';
import { WHY_INTRO, WHY_IMAGE_ALT, WHY_IMAGE_EMOJI, WHY_POINTS } from '@/data/why';
import WhyFeature from './WhyFeature';

export default function WhyChoose() {
  const { t } = useLang();
  return (
    <Section id="why" className="why-choose" labelledBy="why-title">
      <div className="why-choose-content">
        <div className="why-choose-text">
          <Tagline tagline={WHY_INTRO.tagline} />
          <h2 id="why-title">{t(WHY_INTRO.title)}</h2>
          {WHY_POINTS.map((p, i) => (
            <WhyFeature key={p.title.en} number={i + 1} title={p.title} text={p.text} />
          ))}
        </div>
        <div className="why-choose-image">
          <ImageSlot src={IMAGES.whyChoose} alt={t(WHY_IMAGE_ALT)} fallback={WHY_IMAGE_EMOJI} sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
    </Section>
  );
}
