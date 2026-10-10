'use client';
/* ==========================================================
 * FooterContact: phone, emails, WhatsApp, availability
 * Data: data/site/site.ts, data/site/links.ts, data/footer/
 * ========================================================== */
import { ContactIcon } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { LINKS, SITE } from '@/data/site';
import { FOOTER } from '@/data/footer';

export default function FooterContact() {
  const { t } = useLang();
  return (
    <div className="footer-section">
      <h3>{t(FOOTER.contactTitle)}</h3>
      <ul>
        {/* Phone */}
        <li><a href={SITE.phoneHref} dir="ltr"><ContactIcon name="phone" />{SITE.phoneDisplay}</a></li>
        {/* General email */}
        <li><a href={`mailto:${SITE.email}`} dir="ltr"><ContactIcon name="mail" />{SITE.email}</a></li>
        {/* Booking email (data/site/site.ts -> bookingEmail) */}
        <li><a href={`mailto:${SITE.bookingEmail}`} dir="ltr"><ContactIcon name="mail" />{SITE.bookingEmail}</a></li>
        {/* WhatsApp chat */}
        <li>
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
            <ContactIcon name="whatsapp" />{t(FOOTER.whatsappText)}
          </a>
        </li>
        {/* Availability: jumps to the booking form */}
        <li><a href="#booking"><ContactIcon name="clock" />{t(FOOTER.availableText)}</a></li>
      </ul>
    </div>
  );
}
