'use client';
/* ==========================================================
 * MenuToggle: hamburger button (visible on tablet / mobile)
 * Event: menuToggled (store/blocs/menu)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useMenuBloc } from '@/store/blocs/menu/useMenuBloc';
import { UI } from '@/data/ui';

export default function MenuToggle() {
  const { t } = useLang();
  const { state, events } = useMenuBloc();
  return (
    <button
      type="button"
      className="menu-toggle"
      onClick={events.menuToggled}
      aria-expanded={state.isOpen}
      aria-controls="main-navigation"
      aria-label={t(state.isOpen ? UI.menuClose : UI.menuOpen)}
    >
      <span aria-hidden="true">{state.isOpen ? '✕' : '☰'}</span>
    </button>
  );
}
