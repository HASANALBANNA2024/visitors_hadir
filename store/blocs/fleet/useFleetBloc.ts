'use client';
/* ==========================================================
 * FLEET BLOC: HOOK
 *   const { state, events } = useFleetBloc();
 *   events.filterSelected('suv');
 * ========================================================== */
import { useMemo } from 'react';
import type { FleetFilter } from '@/data/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { FleetEvents } from './fleet.bloc';

export function useFleetBloc() {
  const state = useAppSelector((s) => s.fleet);
  const dispatch = useAppDispatch();

  const events = useMemo(
    () => ({
      filterSelected: (filter: FleetFilter) => dispatch(FleetEvents.filterSelected(filter)),
    }),
    [dispatch],
  );

  return { state, events };
}
