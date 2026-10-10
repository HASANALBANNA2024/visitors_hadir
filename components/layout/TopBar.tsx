'use client';
/* ==========================================================
 * TopBar: thin strip ABOVE the fixed app bar
 * (phone, email, support text, language button)
 * It is a normal block, so it scrolls away when the page is
 * scrolled and appears again at the top.
 * Data: data/site.ts, data/ui.ts
 * ========================================================== */
import { Icon } from '@/components/common';
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
          <a href={SITE.phoneHref} dir="ltr"><Icon symbol="📞" />{SITE.phoneDisplay}</a>
          <a className="topbar-email" href={`mailto:${SITE.email}`} dir="ltr"><Icon symbol="✉️" />{SITE.email}</a>
        </div>
        <div className="topbar-support">
          <Icon symbol={UI.support.icon} />
          {t(UI.support.text)}
        </div>
        <LanguageToggle />
      </div>
    </div>
  );
}
