import type { IconLabel, Localized } from './lang';

export type VehicleType = 'sedan' | 'suv' | 'van' | 'bus';
export type FleetFilter = 'all' | VehicleType;

/** One vehicle card. Leave image '' to show the emoji placeholder. */
export interface Vehicle {
  id: string;
  type: VehicleType;
  name: string;
  badge: Localized;
  category: IconLabel;
  features: Localized[];
  emoji: string;
  image: string;
}

export interface FleetTab {
  key: FleetFilter;
  label: Localized;
}
