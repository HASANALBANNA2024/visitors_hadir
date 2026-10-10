'use client';
/* ==========================================================
 * Button: gold "primary" or outline "secondary" button
 * - with href  -> real link (external links open in a new tab)
 * - with onClick -> real button
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import type { IconLabel } from '@/data/types';
import Icon from './Icon';

interface Props {
  label: IconLabel;
  variant?: 'primary' | 'secondary';
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function Button({ label, variant = 'primary', href, external = false, onClick }: Props) {
  const { t } = useLang();
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const content = (
    <>
      <Icon symbol={label.icon} />
      {t(label.text)}
    </>
  );

  if (href) {
    return (
      <a className={className} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  );
}
