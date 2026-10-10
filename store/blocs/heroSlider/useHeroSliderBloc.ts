'use client';
/* ==========================================================
 * HERO SLIDER BLOC: HOOK
 *   const { state, events } = useHeroSliderBloc();
 *   events.slideSelected(1);
 * ========================================================== */
import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { HeroSliderEvents } from './heroSlider.bloc';

export function useHeroSliderBloc() {
  const state = useAppSelector((s) => s.heroSlider);
  const dispatch = useAppDispatch();

  const events = useMemo(
    () => ({
      slideAdvanced: () => dispatch(HeroSliderEvents.slideAdvanced()),
      slideSelected: (index: number) => dispatch(HeroSliderEvents.slideSelected(index)),
    }),
    [dispatch],
  );

  return { state, events };
}
