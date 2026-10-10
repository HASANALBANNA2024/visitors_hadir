/* ==========================================================
 * HERO SLIDER BLOC: EVENTS -> NEW STATE
 * Events:
 *   slideAdvanced()        timer tick: show the next picture
 *   slideSelected(index)   user taps a dot
 * Every change remembers the old picture in `previous`,
 * so it can slide out while the new one slides in.
 * ========================================================== */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { heroSliderInitialState, HeroSliderState } from './heroSlider.state';

/** Make `index` the active picture (no-op if it already is) */
const show = (state: HeroSliderState, index: number) => {
  if (index === state.active) return;
  state.previous = state.active;
  state.active = index;
};

const heroSliderBloc = createSlice({
  name: 'heroSlider',
  initialState: heroSliderInitialState,
  reducers: {
    slideAdvanced: (state) => show(state, (state.active + 1) % state.count),
    slideSelected: (state, event: PayloadAction<number>) => {
      if (event.payload >= 0 && event.payload < state.count) show(state, event.payload);
    },
  },
});

export const HeroSliderEvents = heroSliderBloc.actions;
export default heroSliderBloc.reducer;
