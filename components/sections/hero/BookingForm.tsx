'use client';
/* ==========================================================
 * BookingForm: the instant-booking card in the hero (id="booking")
 * Each row is its own small widget. Submit opens WhatsApp with the
 * filled details (store/blocs/booking + lib/whatsapp).
 * ========================================================== */
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';
import BookingHeader from './BookingHeader';
import BookingSubmit from './BookingSubmit';
import DetailsRow from './DetailsRow';
import IdentityRow from './IdentityRow';
import PickupRow from './PickupRow';
import ServiceRow from './ServiceRow';

export default function BookingForm() {
  const { submit } = useBookingBloc();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // the browser already checked the required fields
    submit();
  };

  return (
    <div className="quick-request-form" id="booking">
      <BookingHeader />
      <form onSubmit={onSubmit}>
        <IdentityRow />
        <ServiceRow />
        <PickupRow />
        <DetailsRow />
        <BookingSubmit />
      </form>
    </div>
  );
}
