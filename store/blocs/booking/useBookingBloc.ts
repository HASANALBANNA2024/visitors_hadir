'use client';
/* ==========================================================
 * BOOKING BLOC: HOOK -> const { state, events, submit }
 * submit() opens WhatsApp with the booking message
 * ========================================================== */
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useLang } from '@/hooks/useLang';
import { buildWhatsAppUrl, buildBookingMessage } from '@/lib/whatsapp';
import { SERVICE_OPTIONS, VEHICLE_CLASS_OPTIONS } from '@/data/booking';
import { BookingEvents } from './booking.bloc';
import type { BookingForm } from './booking.state';

export function useBookingBloc() {
  const state = useAppSelector((s) => s.booking);
  const dispatch = useAppDispatch();
  const { lang } = useLang();

  const events = useMemo(
    () => ({
      fieldChanged: (field: keyof BookingForm, value: string) => dispatch(BookingEvents.fieldChanged({ field, value })),
      /** Pre-select a vehicle class + exact car (used by the "Reserve now" button on vehicle cards) */
      vehiclePreselected: (vehicleType: string, vehicleName = '') => {
        dispatch(BookingEvents.fieldChanged({ field: 'vehicle', value: vehicleName }));
        if (VEHICLE_CLASS_OPTIONS.some((o) => o.value === vehicleType)) {
          dispatch(BookingEvents.fieldChanged({ field: 'vehicleClass', value: vehicleType }));
        }
      },
      /** Pre-select a service (footer service links) */
      servicePreselected: (service: string) => {
        if (SERVICE_OPTIONS.some((o) => o.value === service)) {
          dispatch(BookingEvents.fieldChanged({ field: 'service', value: service }));
        }
      },
      submitted: () => dispatch(BookingEvents.submitted()),
      formReset: () => dispatch(BookingEvents.formReset()),
    }),
    [dispatch],
  );

  /** Side effect: build the message, open WhatsApp, mark the form as sent */
  const submit = () => {
    const url = buildWhatsAppUrl(buildBookingMessage(state.form, lang));
    window.open(url, '_blank', 'noopener,noreferrer');
    events.submitted();
  };

  return { state, events, submit };
}
