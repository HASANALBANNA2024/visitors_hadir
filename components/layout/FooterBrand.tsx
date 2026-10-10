'use client';
/* ==========================================================
 * FooterBrand: company name + short description
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { SITE } from '@/data/site';
import { FOOTER } from '@/data/footer';

export default function FooterBrand() {
  const { t } = useLang();
  return (
    <div className="footer-section">
      <h3>{t(SITE.name)}</h3>
      <p>{t(FOOTER.about)}</p>
    </div>
  );
}
