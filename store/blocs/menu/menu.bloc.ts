/* ==========================================================
 * MENU BLOC: EVENTS -> NEW STATE
 * Events:
 *   menuToggled()  hamburger button pressed
 *   menuClosed()   a link was tapped / language changed
 * ========================================================== */
import { createSlice } from '@reduxjs/toolkit';
import { menuInitialState } from './menu.state';

const menuBloc = createSlice({
  name: 'menu',
  initialState: menuInitialState,
  reducers: {
    menuToggled: (state) => {
      state.isOpen = !state.isOpen;
    },
    menuClosed: (state) => {
      state.isOpen = false;
    },
  },
});

export const MenuEvents = menuBloc.actions;
export default menuBloc.reducer;
