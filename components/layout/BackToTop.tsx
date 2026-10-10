'use client';
/* ==========================================================
 * BackToTop: round "up" button, visible after scrolling far
 * (state: scroll bloc -> showBackToTop)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useScrollBloc } from '@/store/blocs/scroll/useScrollBloc';
import { scrollToTop } from '@/lib/scroll';
import { UI } from '@/data/ui';

export default function BackToTop() {
  const { t } = useLang();
  const { state } = useScrollBloc();
  const visible = state.showBackToTop;

  return (
    <button type="button" className={visible ? 'float-btn float-top visible' : 'float-btn float-top'}
      aria-label={t(UI.backToTop)} tabIndex={visible ? 0 : -1} onClick={scrollToTop}>
      <span aria-hidden="true">↑</span>
    </button>
  );
}
