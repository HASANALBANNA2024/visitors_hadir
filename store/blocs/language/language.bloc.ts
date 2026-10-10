/* ==========================================================
 * LANGUAGE BLOC: EVENTS -> NEW STATE
 * Events:
 *   languageSelected(lang)  choose a language
 *   languageToggled()       switch EN <-> AR
 * ========================================================== */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Lang } from '@/data/types';
import { languageInitialState } from './language.state';

const languageBloc = createSlice({
  name: 'language',
  initialState: languageInitialState(),
  reducers: {
    languageSelected: (state, event: PayloadAction<Lang>) => {
      state.current = event.payload;
    },
    languageToggled: (state) => {
      state.current = state.current === 'en' ? 'ar' : 'en';
    },
  },
});

export const LanguageEvents = languageBloc.actions;
export default languageBloc.reducer;
