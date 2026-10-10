import type { SelectOption } from '../types';
import { L } from '../helpers';

/* BOOKING FORM: dropdown options (value is sent in the WhatsApp text) */
export const SERVICE_OPTIONS: SelectOption[] = [
  { value: 'airport', icon: '✈️', label: L('Airport Transfer', 'نقل المطار') },
  { value: 'corporate', icon: '🏢', label: L('Corporate Event', 'فعالية شركات') },
  { value: 'luxury', icon: '👑', label: L('Luxury Chauffeur', 'سائق فاخر') },
  { value: 'delegation', icon: '🎯', label: L('Delegation Movement', 'تنقل الوفود') },
];

export const VEHICLE_CLASS_OPTIONS: SelectOption[] = [
  { value: 'sedan', icon: '🚗', label: L('Luxury Sedan', 'سيدان فاخرة') },
  { value: 'suv', icon: '🏎️', label: L('Executive SUV', 'SUV تنفيذية') },
  { value: 'van', icon: '🚐', label: L('Premium Van', 'فان متميز') },
];

export const DURATION_OPTIONS: SelectOption[] = [
  { value: '4', label: L('4 Hours', '4 ساعات') },
  { value: '8', label: L('8 Hours', '8 ساعات') },
  { value: '24', label: L('24 Hours', '24 ساعة') },
  { value: 'custom', label: L('Custom', 'مخصص') },
];
