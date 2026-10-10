'use client';
/* ==========================================================
 * PickupRow (form row 3): pickup location, full width
 * ========================================================== */
import { TextField } from '@/components/common';
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';
import { FIELDS } from '@/data/booking';

export default function PickupRow() {
  const { state, events } = useBookingBloc();
  return (
    <div className="form-row full">
      <TextField name="pickup" label={FIELDS.pickup.label} placeholder={FIELDS.pickup.hint}
        value={state.form.pickup} onChange={(v) => events.fieldChanged('pickup', v)} />
    </div>
  );
}
