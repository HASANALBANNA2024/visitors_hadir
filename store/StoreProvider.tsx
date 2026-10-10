'use client';
/* ==========================================================
 * StoreProvider: gives the Redux store to the whole app.
 * The store is created ONCE (lazy useState), with the language
 * of the page ("/" = en, "/ar" = ar).
 * ========================================================== */
import { useState } from 'react';
import { Provider } from 'react-redux';
import type { Lang } from '@/data/types';
import { makeStore } from './index';

export default function StoreProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const [store] = useState(() => makeStore(lang)); // runs only on the first render
  return <Provider store={store}>{children}</Provider>;
}
