'use client';

import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { setLanguage } from '../store/languageSlice';

/* Runs on every page (Home, services, About, Privacy):
 *  1. remembers the chosen language in the browser (EN / AR button keeps working after a reload)
 *  2. sets <html lang> and <html dir> for the chosen language */
function LanguageSync() {
  useEffect(() => {
    const saved = localStorage.getItem('hadir-lang');
    if (saved === 'AR' || saved === 'EN') store.dispatch(setLanguage(saved));

    const apply = () => {
      const lang = store.getState().language.lang;
      document.documentElement.lang = lang === 'AR' ? 'ar' : 'en';
      document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
      localStorage.setItem('hadir-lang', lang);
    };
    apply();
    return store.subscribe(apply);
  }, []);
  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <LanguageSync />
      {children}
    </Provider>
  );
}
