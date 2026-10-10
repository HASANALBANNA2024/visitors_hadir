/* ==========================================================
 * BOOKING BLOC: STATE
 * form   : values of the instant booking form
 * status : 'idle' (editing) | 'sent' (WhatsApp opened)
 * ========================================================== */
export interface BookingForm {
  name: string;
  phone: string;
  service: string;
  vehicleClass: string;
  pickup: string;
  duration: string;
  passengers: string;
}

export type BookingStatus = 'idle' | 'sent';

export interface BookingState {
  form: BookingForm;
  status: BookingStatus;
}

export const bookingInitialState: BookingState = {
  form: { name: '', phone: '', service: '', vehicleClass: '', pickup: '', duration: '', passengers: '1' },
  status: 'idle',
};
