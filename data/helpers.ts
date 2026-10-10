import type { IconLabel, Localized } from './types';

/** Short way to write a text in both languages: L('Hello', 'مرحبا') */
export const L = (en: string, ar: string): Localized => ({ en, ar });

/** Text with an icon: icon('✨', L('Hello', 'مرحبا')) */
export const icon = (symbol: string, text: Localized): IconLabel => ({ icon: symbol, text });
