import type { Vehicle } from '../types';
import { SEDANS } from './sedans';
import { SUVS } from './suvs';
import { VANS } from './vans';
import { BUSES } from './buses';

/** Every vehicle shown in the fleet section (sedans, suvs, vans, buses) */
export const VEHICLES: Vehicle[] = [...SEDANS, ...SUVS, ...VANS, ...BUSES];
