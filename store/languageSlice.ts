import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  lang: 'EN' | 'AR';
}

const initialState: LanguageState = {
  lang: 'EN',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'EN' | 'AR'>) => {
      state.lang = action.payload;
    },
    toggleLanguage: (state) => {
      state.lang = state.lang === 'EN' ? 'AR' : 'EN';
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;