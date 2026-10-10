/* ==========================================================
 * SECTION 2: SERVICES (4 cards)
 * Data: data/services.ts
 * ========================================================== */
import { Section, SectionHeader } from '@/components/common';
import { SERVICES, SERVICES_INTRO } from '@/data/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <Section id="services" className="services" labelledBy="services-title">
      <SectionHeader tagline={SERVICES_INTRO.tagline} title={SERVICES_INTRO.title} titleId="services-title" />
      <div className="services-content">
        {SERVICES.map((s) => <ServiceCard key={s.title.en} service={s} />)}
      </div>
    </Section>
  );
}
