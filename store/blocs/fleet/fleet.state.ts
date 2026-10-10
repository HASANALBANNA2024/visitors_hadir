/* ==========================================================
 * FLEET BLOC: STATE
 * filter : which vehicle tab is selected ('all' | 'sedan' | 'suv' | 'van' | 'bus')
 * ========================================================== */
import type { FleetFilter } from '@/data/types';

export interface FleetState {
  filter: FleetFilter;
}

export const fleetInitialState: FleetState = { filter: 'all' };
