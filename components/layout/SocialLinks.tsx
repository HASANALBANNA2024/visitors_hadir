'use client';
/* ==========================================================
 * SocialLinks: appears only when links are filled in
 * data/links.ts
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { SOCIAL_LINKS } from '@/data/site';
import { FOOTER } from '@/data/footer';

export default function SocialLinks() {
  const { t } = useLang();
  if (SOCIAL_LINKS.length === 0) return null;
  return (
    <div className="footer-social">
      <span>{t(FOOTER.socialTitle)}</span>
      {SOCIAL_LINKS.map((s) => (
        <a key={s.key} href={s.href} target="_blank" rel="noopener noreferrer me">{s.label}</a>
      ))}
    </div>
  );
}
