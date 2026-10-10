'use client';
/* ==========================================================
 * BookButton: gold "BOOK" button in the app bar.
 * Scrolls to the booking form and closes the mobile menu.
 * ========================================================== */
import { Icon } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { useMenuBloc } from '@/store/blocs/menu/useMenuBloc';
import { scrollToId } from '@/lib/scroll';
import { UI } from '@/data/ui';

export default function BookButton() {
  const { t } = useLang();
  const { events } = useMenuBloc();

  const onClick = () => {
    events.menuClosed();
    scrollToId('booking');
  };

  return (
    <button type="button" className="book-now-btn" onClick={onClick}>
      <Icon symbol={UI.bookShort.icon} />
      {t(UI.bookShort.text)}
    </button>
  );
}
