'use client';
/* ==========================================================
 * SCROLL BLOC: HOOK
 *   const { state, events } = useScrollBloc();
 * ========================================================== */
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { ScrollEvents } from './scroll.bloc';
import type { ScrollState } from './scroll.state';

export function useScrollBloc() {
  const state = useAppSelector((s) => s.scroll);
  const dispatch = useAppDispatch();

  const events = useMemo(
    () => ({
      scrollPositionChanged: (position: ScrollState) => dispatch(ScrollEvents.scrollPositionChanged(position)),
    }),
    [dispatch],
  );

  return { state, events };
}
