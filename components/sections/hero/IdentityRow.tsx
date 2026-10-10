'use client';
/* ==========================================================
 * IdentityRow (form row 1): full name + phone number
 * ========================================================== */
import { TextField } from '@/components/common';
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';
import { FIELDS } from '@/data/booking';

export default function IdentityRow() {
  const { state, events } = useBookingBloc();
  return (
    <div className="form-row">
      <TextField name="name" label={FIELDS.name.label} placeholder={FIELDS.name.hint} value={state.form.name}
        onChange={(v) => events.fieldChanged('name', v)} required autoComplete="name" />
      <TextField name="phone" type="tel" label={FIELDS.phone.label} placeholder={FIELDS.phone.hint}
        value={state.form.phone} onChange={(v) => events.fieldChanged('phone', v)} required
        autoComplete="tel" dir="ltr" inputMode="tel" pattern="[0-9+\s\-]{7,20}" maxLength={20} />
    </div>
  );
}
