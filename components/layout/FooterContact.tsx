'use client';
/* ==========================================================
 * FooterContact: phone, email, WhatsApp, availability
 * Data: data/site.ts, data/links.ts, data/footer.ts
 * ========================================================== */
import { Icon } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { LINKS, SITE } from '@/data/site';
import { FOOTER } from '@/data/footer';

export default function FooterContact() {
  const { t } = useLang();
  return (
    <div className="footer-section">
      <h3>{t(FOOTER.contactTitle)}</h3>
      <ul>
        <li><a href={SITE.phoneHref} dir="ltr"><Icon symbol="📞" />{SITE.phoneDisplay}</a></li>
        <li><a href={`mailto:${SITE.email}`} dir="ltr"><Icon symbol="✉️" />{SITE.email}</a></li>
        <li>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
            <Icon symbol="💬" />{t(FOOTER.whatsappText)}
          </a>
        </li>
        <li>
          <a href="#booking"><Icon symbol="🕐" />{t(FOOTER.availableText)}</a>
        </li>
      </ul>
    </div>
  );
}
