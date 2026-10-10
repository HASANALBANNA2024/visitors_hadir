'use client';
/* ==========================================================
 * DetailsRow (form row 4): duration + number of passengers
 * ========================================================== */
import { SelectField, TextField } from '@/components/common';
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';
import { DURATION_OPTIONS, FIELDS } from '@/data/booking';

export default function DetailsRow() {
  const { state, events } = useBookingBloc();
  return (
    <div className="form-row">
      <SelectField name="duration" label={FIELDS.duration.label} placeholder={FIELDS.duration.hint}
        options={DURATION_OPTIONS} value={state.form.duration}
        onChange={(v) => events.fieldChanged('duration', v)} required />
      <TextField name="passengers" type="number" min={1} inputMode="numeric" label={FIELDS.passengers.label}
        placeholder={FIELDS.passengers.hint} value={state.form.passengers}
        onChange={(v) => events.fieldChanged('passengers', v)} />
    </div>
  );
}
