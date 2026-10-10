/* ==========================================================
 * FLEET BLOC: EVENTS -> NEW STATE
 * Events:
 *   filterSelected(filter)  user taps a fleet tab
 * ========================================================== */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { FleetFilter } from '@/data/types';
import { fleetInitialState } from './fleet.state';

const fleetBloc = createSlice({
  name: 'fleet',
  initialState: fleetInitialState,
  reducers: {
    filterSelected: (state, event: PayloadAction<FleetFilter>) => {
      state.filter = event.payload;
    },
  },
});

export const FleetEvents = fleetBloc.actions;
export default fleetBloc.reducer;
