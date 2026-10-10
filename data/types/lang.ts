/** Website language: English at "/" and Arabic at "/ar" */
export type Lang = 'en' | 'ar';

/** A text that exists in both languages */
export interface Localized {
  en: string;
  ar: string;
}

/** A text with a small emoji icon in front (icon is decorative) */
export interface IconLabel {
  icon?: string;
  text: Localized;
}
