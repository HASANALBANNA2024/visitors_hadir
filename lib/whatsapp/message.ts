import type { Lang } from '@/data/types';
import type { BookingForm } from '@/store/blocs/booking/booking.state';
import { BOOKING, DURATION_OPTIONS, FIELDS, SERVICE_OPTIONS, VEHICLE_CLASS_OPTIONS } from '@/data/booking';
import { labelOf } from './labels';

/** Turns the filled form into the text sent on WhatsApp (one line per field) */
export function buildBookingMessage(form: BookingForm, lang: Lang): string {
  const line = (label: { en: string; ar: string }, value: string) => `${label[lang]}: ${value}`;
  const lines = [
    BOOKING.greeting[lang],
    '',
    line(FIELDS.name.label, form.name),
    line(FIELDS.phone.label, form.phone),
    line(FIELDS.service.label, labelOf(SERVICE_OPTIONS, form.service, lang)),
    line(FIELDS.vehicleClass.label, labelOf(VEHICLE_CLASS_OPTIONS, form.vehicleClass, lang)),
  ];
  if (form.pickup) lines.push(line(FIELDS.pickup.label, form.pickup)); // optional field
  lines.push(line(FIELDS.duration.label, labelOf(DURATION_OPTIONS, form.duration, lang)));
  lines.push(line(FIELDS.passengers.label, form.passengers));
  return lines.join('\n');
}
