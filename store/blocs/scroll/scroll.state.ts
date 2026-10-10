/* ==========================================================
 * SCROLL BLOC: STATE
 * isScrolled     : page is scrolled a little (header gets a shadow)
 * showBackToTop  : page is scrolled far (show the back-to-top button)
 * activeSection  : id of the section on screen ('home', 'fleet' ...)
 *                  used to highlight the right menu link
 * ========================================================== */
export interface ScrollState {
  isScrolled: boolean;
  showBackToTop: boolean;
  activeSection: string;
}

export const scrollInitialState: ScrollState = { isScrolled: false, showBackToTop: false, activeSection: 'home' };
