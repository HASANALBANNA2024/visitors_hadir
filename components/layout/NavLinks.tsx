'use client';
/* ==========================================================
 * NavLinks: the menu links (data/site/nav.ts)
 * - highlights the section on screen (scroll bloc)
 * - "Home" scrolls to the very top (shows the top strip again)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useMenuBloc } from '@/store/blocs/menu/useMenuBloc';
import { useScrollBloc } from '@/store/blocs/scroll/useScrollBloc';
import { scrollToTop } from '@/lib/scroll';
import { NAV_LINKS } from '@/data/site';

export default function NavLinks() {
  const { t } = useLang();
  const menu = useMenuBloc();
  const scroll = useScrollBloc();

  /** Close the mobile menu; "Home" scrolls to top instead of jumping */
  const onLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    menu.events.menuClosed();
    if (href !== '#home') return;
    e.preventDefault();
    scrollToTop();
  };

  return (
    <>
      {NAV_LINKS.map((link) => {
        const isActive = scroll.state.activeSection === link.href.replace('#', '');
        return (
          <a key={link.href} href={link.href} className={isActive ? 'active' : undefined}
            aria-current={isActive ? 'true' : undefined} onClick={(e) => onLink(e, link.href)}>
            {t(link.label)}
          </a>
        );
      })}
    </>
  );
}
