'use client';
/* ==========================================================
 * ServiceRow (form row 2): service type + vehicle class
 * ========================================================== */
import { SelectField } from '@/components/common';
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';
import { FIELDS, SERVICE_OPTIONS, VEHICLE_CLASS_OPTIONS } from '@/data/booking';

export default function ServiceRow() {
  const { state, events } = useBookingBloc();
  return (
    <div className="form-row">
      <SelectField name="service" label={FIELDS.service.label} placeholder={FIELDS.service.hint}
        options={SERVICE_OPTIONS} value={state.form.service}
        onChange={(v) => events.fieldChanged('service', v)} required />
      <SelectField name="vehicleClass" label={FIELDS.vehicleClass.label} placeholder={FIELDS.vehicleClass.hint}
        options={VEHICLE_CLASS_OPTIONS} value={state.form.vehicleClass}
        onChange={(v) => events.fieldChanged('vehicleClass', v)} required />
    </div>
  );
}
