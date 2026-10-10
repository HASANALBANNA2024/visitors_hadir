'use client';
/* ==========================================================
 * BookingSubmit: WhatsApp button + success message + small note
 * ========================================================== */
import { Icon } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';
import { BOOKING } from '@/data/booking';

export default function BookingSubmit() {
  const { t } = useLang();
  const { state } = useBookingBloc();
  return (
    <>
      <button type="submit" className="form-submit-btn">
        <Icon symbol={BOOKING.submit.icon} />
        {t(BOOKING.submit.text)}
      </button>
      {state.status === 'sent' && <p className="form-success" role="status">{t(BOOKING.success)}</p>}
      <div className="form-note">{t(BOOKING.note)}</div>
    </>
  );
}
