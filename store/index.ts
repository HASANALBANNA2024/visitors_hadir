/* ==========================================================
 * REDUX STORE  (combines all blocs)
 * Blocs live in store/blocs/<name>/
 *   <name>.state.ts     what the state looks like
 *   <name>.bloc.ts      events -> new state (reducer)
 *   use<Name>Bloc.ts    hook used by widgets
 * Blocs: language, fleet, booking, menu, heroSlider, scroll
 * To add a bloc: create the 3 files and add its reducer below.
 * ========================================================== */
import { configureStore } from '@reduxjs/toolkit';
import type { Lang } from '@/data/types';
import language from './blocs/language/language.bloc';
import fleet from './blocs/fleet/fleet.bloc';
import booking from './blocs/booking/booking.bloc';
import menu from './blocs/menu/menu.bloc';
import heroSlider from './blocs/heroSlider/heroSlider.bloc';
import scroll from './blocs/scroll/scroll.bloc';
import { languageInitialState } from './blocs/language/language.state';

/** The page language comes from the URL ("/" = en, "/ar" = ar) */
export const makeStore = (lang: Lang = 'en') =>
  configureStore({
    reducer: { language, fleet, booking, menu, heroSlider, scroll },
    preloadedState: { language: languageInitialState(lang) },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
