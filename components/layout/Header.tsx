'use client';
/* ==========================================================
 * Header = the fixed app bar (stays on top while scrolling)
 *   Logo + MenuToggle + NavMenu
 * The TopBar (phone / email strip) is NOT inside it: it sits
 * above and simply scrolls away, then comes back at the top.
 * Scroll state: store/blocs/scroll
 * ========================================================== */
import { useScrollBloc } from '@/store/blocs/scroll/useScrollBloc';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import NavMenu from './NavMenu';

export default function Header() {
  const { state } = useScrollBloc();
  return (
    <header className={state.isScrolled ? 'header scrolled' : 'header'}>
      <div className="header-main">
        <Logo />
        <MenuToggle />
        <NavMenu />
      </div>
    </header>
  );
}
