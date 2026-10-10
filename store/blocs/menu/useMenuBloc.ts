'use client';
/* ==========================================================
 * MENU BLOC: HOOK
 *   const { state, events } = useMenuBloc();
 * ========================================================== */
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { MenuEvents } from './menu.bloc';

export function useMenuBloc() {
  const state = useAppSelector((s) => s.menu);
  const dispatch = useAppDispatch();

  const events = useMemo(
    () => ({
      menuToggled: () => dispatch(MenuEvents.menuToggled()),
      menuClosed: () => dispatch(MenuEvents.menuClosed()),
    }),
    [dispatch],
  );

  return { state, events };
}
