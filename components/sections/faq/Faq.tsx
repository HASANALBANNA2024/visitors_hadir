/* ==========================================================
 * Faq section: list of questions (data/faq/faq.ts).
 * The same questions are sent to Google as JSON-LD (FAQPage).
 * ========================================================== */
import { Section, SectionHeader } from '@/components/common';
import { FAQS, FAQ_INTRO } from '@/data/faq';
import FaqItem from './FaqItem';

export default function Faq() {
  return (
    <Section id="faq" className="faq" labelledBy="faq-title">
      <SectionHeader tagline={FAQ_INTRO.tagline} title={FAQ_INTRO.title} titleId="faq-title" />
      <div className="faq-list">
        {FAQS.map((f) => <FaqItem key={f.id} item={f} />)}
      </div>
    </Section>
  );
}
