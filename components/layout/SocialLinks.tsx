'use client';
/* ==========================================================
 * SocialLinks: icons of the social pages (only filled links
 * from data/site/links.ts are shown). A network without an
 * icon file in /public/images/icons/ shows its name instead.
 * ========================================================== */
import { ContactIcon } from '@/components/common';
import type { ContactIconName } from '@/components/common/ContactIcon';
import { useLang } from '@/hooks/useLang';
import { SOCIAL_LINKS } from '@/data/site';
import { FOOTER } from '@/data/footer';

/** Networks that have an icon file */
const ICONS: string[] = ['facebook', 'instagram', 'linkedin', 'x', 'whatsapp'];

export default function SocialLinks() {
  const { t } = useLang();
  if (SOCIAL_LINKS.length === 0) return null; // nothing filled yet -> hide

  return (
    <div className="footer-social">
      <span>{t(FOOTER.socialTitle)}</span>
      {SOCIAL_LINKS.map((s) => (
        <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer me" aria-label={s.label}>
          {ICONS.includes(s.key) ? <ContactIcon name={s.key as ContactIconName} size={26} /> : s.label}
        </a>
      ))}
    </div>
  );
}
