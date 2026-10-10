'use client';
/* ==========================================================
 * LanguageToggle: EN / العربية button
 * Event: languageToggled (store/blocs/language)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useLanguageBloc } from '@/store/blocs/language/useLanguageBloc';
import { useMenuBloc } from '@/store/blocs/menu/useMenuBloc';
import { UI } from '@/data/ui';

export default function LanguageToggle() {
  const { t } = useLang();
  const language = useLanguageBloc();
  const menu = useMenuBloc();

  const onClick = () => {
    language.events.languageToggled();
    menu.events.menuClosed();
  };

  return (
    <button type="button" className="language-toggle" onClick={onClick} aria-label={t(UI.languageToggle)}>
      EN / العربية
    </button>
  );
}
