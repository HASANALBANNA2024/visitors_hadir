'use client';
/* ==========================================================
 * TopBar: thin strip ABOVE the fixed app bar
 * (phone, emails, support text, language button).
 * It is a normal block, so it scrolls away with the page and
 * appears again at the top. Data: data/site/site.ts, data/ui/
 * ========================================================== */
import { ContactIcon } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { SITE } from '@/data/site';
import { UI } from '@/data/ui';
import LanguageToggle from './LanguageToggle';

export default function TopBar() {
  const { t } = useLang();
  return (
    <div className="header-top">
      <div className="header-top-content">
        <div className="contact-info">
          {/* Phone */}
          <a href={SITE.phoneHref} dir="ltr"><ContactIcon name="phone" />{SITE.phoneDisplay}</a>
          {/* General email (hidden on small phones, see responsive css) */}
          <a className="topbar-email" href={`mailto:${SITE.email}`} dir="ltr">
            <ContactIcon name="mail" />{SITE.email}
          </a>
          {/* Booking email */}
          <a className="topbar-email" href={`mailto:${SITE.bookingEmail}`} dir="ltr">
            <ContactIcon name="mail" />{SITE.bookingEmail}
          </a>
        </div>
        <div className="topbar-support">
          <ContactIcon name="clock" />
          {t(UI.support.text)}
        </div>
        <LanguageToggle />
      </div>
    </div>
  );
}
