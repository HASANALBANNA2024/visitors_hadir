'use client';
/* ==========================================================
 * SECTION 7: CALL TO ACTION (gold banner)
 * Data: data/cta.ts
 * ========================================================== */
import { Button, Section } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { scrollToId } from '@/lib/scroll';
import { CTA } from '@/data/cta';

export default function Cta() {
  const { t } = useLang();
  return (
    <Section className="cta" labelledBy="cta-title">
      <div className="cta-content">
        <h2 id="cta-title">{t(CTA.title)}</h2>
        <p>{t(CTA.text)}</p>
        <Button label={CTA.button} onClick={() => scrollToId('booking')} />
      </div>
    </Section>
  );
}
