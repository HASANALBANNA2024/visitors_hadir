'use client';
/* ==========================================================
 * NavMenu: <nav> with the links + BOOK button.
 * On phones it slides open from the hamburger button.
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useMenuBloc } from '@/store/blocs/menu/useMenuBloc';
import { UI } from '@/data/ui';
import BookButton from './BookButton';
import NavLinks from './NavLinks';

export default function NavMenu() {
  const { t } = useLang();
  const { state } = useMenuBloc();

  return (
    <nav id="main-navigation" className={state.isOpen ? 'open' : undefined} aria-label={t(UI.mainNavigation)}>
      <NavLinks />
      <BookButton />
    </nav>
  );
}
