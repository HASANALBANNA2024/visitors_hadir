/* ==========================================================
 * BOOKING BLOC: EVENTS -> NEW STATE
 * Events:
 *   fieldChanged({ field, value })  user typed / selected something
 *   submitted()                     form sent (status becomes 'sent')
 *   formReset()                     clear the form
 * ========================================================== */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bookingInitialState, BookingForm } from './booking.state';

const bookingBloc = createSlice({
  name: 'booking',
  initialState: bookingInitialState,
  reducers: {
    fieldChanged: (state, event: PayloadAction<{ field: keyof BookingForm; value: string }>) => {
      state.form[event.payload.field] = event.payload.value;
      state.status = 'idle';
    },
    submitted: (state) => {
      state.status = 'sent';
    },
    formReset: () => bookingInitialState,
  },
});

export const BookingEvents = bookingBloc.actions;
export default bookingBloc.reducer;
