'use client';
/* ==========================================================
 * ScrollWatcher: invisible widget. Listens to page scroll and
 * sends the scroll bloc event (store/blocs/scroll):
 *   isScrolled    -> top strip hides, header gets a shadow
 *   showBackToTop -> back-to-top button appears
 *   activeSection -> highlighted menu link
 * requestAnimationFrame keeps the page smooth.
 * ========================================================== */
import { useEffect } from 'react';
import { useScrollBloc } from '@/store/blocs/scroll/useScrollBloc';
import { findActiveSection, SCROLL } from '@/lib/scroll';

export default function ScrollWatcher() {
  const { events } = useScrollBloc();

  useEffect(() => {
    let waiting = false;

    /** Read the scroll position and tell the bloc */
    const report = () => {
      waiting = false;
      events.scrollPositionChanged({
        isScrolled: window.scrollY > SCROLL.topBarHide,
        showBackToTop: window.scrollY > SCROLL.backToTopShow,
        activeSection: findActiveSection(),
      });
    };

    /** At most one report per animation frame */
    const onScroll = () => {
      if (waiting) return;
      waiting = true;
      window.requestAnimationFrame(report);
    };

    report(); // correct state on first load (page may open already scrolled)
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [events]);

  return null;
}
