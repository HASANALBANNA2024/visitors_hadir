'use client';
/* ==========================================================
 * SkipLink: invisible link for keyboard users (accessibility)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { UI } from '@/data/ui';

export default function SkipLink() {
  const { t } = useLang();
  return <a className="skip-link" href="#main-content">{t(UI.skipToContent)}</a>;
}
