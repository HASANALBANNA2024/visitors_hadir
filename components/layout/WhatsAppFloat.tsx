'use client';
/* ==========================================================
 * WhatsAppFloat: round chat button (link: data/site/links.ts)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { LINKS } from '@/data/site';
import { UI } from '@/data/ui';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  const { t } = useLang();
  return (
    <a className="float-btn float-whatsapp" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer"
      aria-label={t(UI.whatsappFloat)}>
      <WhatsAppIcon />
    </a>
  );
}
