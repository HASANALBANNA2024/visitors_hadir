'use client';
/* ==========================================================
 * LANGUAGE BLOC: HOOK (how widgets use the bloc)
 *   const { state, events } = useLanguageBloc();
 *   events.languageToggled();
 * ========================================================== */
import { useMemo } from 'react';
import type { Lang } from '@/data/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { LanguageEvents } from './language.bloc';

export function useLanguageBloc() {
  const state = useAppSelector((s) => s.language);
  const dispatch = useAppDispatch();

  const events = useMemo(
    () => ({
      languageSelected: (lang: Lang) => dispatch(LanguageEvents.languageSelected(lang)),
      languageToggled: () => dispatch(LanguageEvents.languageToggled()),
    }),
    [dispatch],
  );

  return { state, events };
}
