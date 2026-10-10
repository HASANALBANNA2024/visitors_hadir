/* ==========================================================
 * SECTION 3: FEATURES (6 boxes)
 * Data: data/features.ts
 * ========================================================== */
import { Section, SectionHeader } from '@/components/common';
import { FEATURES, FEATURES_INTRO } from '@/data/features';
import FeatureItem from './FeatureItem';

export default function Features() {
  return (
    <Section id="features" className="features" labelledBy="features-title">
      <SectionHeader tagline={FEATURES_INTRO.tagline} title={FEATURES_INTRO.title} titleId="features-title" />
      <div className="features-grid">
        {FEATURES.map((f) => <FeatureItem key={f.title.en} feature={f} />)}
      </div>
    </Section>
  );
}
