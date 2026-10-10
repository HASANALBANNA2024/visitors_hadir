'use client';
/* ==========================================================
 * FooterLinks: one footer column (title + list of links)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import type { Localized, NavLink } from '@/data/types';

interface Props { title: Localized; links: NavLink[] }

export default function FooterLinks({ title, links }: Props) {
  const { t } = useLang();
  return (
    <div className="footer-section">
      <h3>{t(title)}</h3>
      <ul>
        {links.map((l) => (
          <li key={l.label.en}><a href={l.href}>{t(l.label)}</a></li>
        ))}
      </ul>
    </div>
  );
}
