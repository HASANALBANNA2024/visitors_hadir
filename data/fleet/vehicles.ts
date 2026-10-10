import type { Vehicle } from '../types';
import { SEDANS } from './sedans';
import { SUVS } from './suvs';

/** Every vehicle shown in the fleet section (add VANS / BUSES here) */
export const VEHICLES: Vehicle[] = [...SEDANS, ...SUVS];
