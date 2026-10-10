'use client';
/* ==========================================================
 * SelectedVehicle: small chip above the form that shows the
 * car picked on a fleet card (click X to remove it)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';

export default function SelectedVehicle() {
  const { lang } = useLang();
  const { state, events } = useBookingBloc();
  if (!state.form.vehicle) return null; // nothing chosen on a card

  return (
    <div className="selected-vehicle">
      <span>{lang === 'ar' ? 'السيارة المختارة:' : 'Selected vehicle:'} <b>{state.form.vehicle}</b></span>
      <button type="button" aria-label="Remove" onClick={() => events.fieldChanged('vehicle', '')}>✕</button>
    </div>
  );
}
