'use client';
/* ==========================================================
 * BookingHeader: top of the booking card (label, title, text)
 * ========================================================== */
import { Icon } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { BOOKING } from '@/data/booking';

export default function BookingHeader() {
  const { t } = useLang();
  return (
    <div className="form-header">
      <span className="form-label">
        <Icon symbol={BOOKING.label.icon} />
        {t(BOOKING.label.text)}
      </span>
      <div className="form-title">{t(BOOKING.title)}</div>
      <div className="form-description">{t(BOOKING.description)}</div>
    </div>
  );
}
