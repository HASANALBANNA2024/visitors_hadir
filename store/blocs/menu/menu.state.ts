/* ==========================================================
 * MENU BLOC: STATE (mobile menu open/closed)
 * ========================================================== */
export interface MenuState {
  isOpen: boolean;
}

export const menuInitialState: MenuState = { isOpen: false };
