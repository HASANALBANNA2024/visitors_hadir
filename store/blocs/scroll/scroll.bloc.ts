/* ==========================================================
 * SCROLL BLOC: EVENTS -> NEW STATE
 * Events:
 *   scrollPositionChanged({ isScrolled, showBackToTop, activeSection })
 * (sent by components/layout/ScrollWatcher.tsx)
 * ========================================================== */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { scrollInitialState, ScrollState } from './scroll.state';

const scrollBloc = createSlice({
  name: 'scroll',
  initialState: scrollInitialState,
  reducers: {
    scrollPositionChanged: (state, event: PayloadAction<ScrollState>) => {
      state.isScrolled = event.payload.isScrolled;
      state.showBackToTop = event.payload.showBackToTop;
      state.activeSection = event.payload.activeSection;
    },
  },
});

export const ScrollEvents = scrollBloc.actions;
export default scrollBloc.reducer;
