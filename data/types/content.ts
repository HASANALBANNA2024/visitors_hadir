import type { IconLabel, Localized } from './lang';

/** Icon + title + text (service cards, feature boxes) */
export interface TitleText {
  icon: string;
  title: Localized;
  text: Localized;
}

/** Title block above a section: tagline + h2 (+ optional paragraph) */
export interface SectionIntro {
  tagline: IconLabel;
  title: Localized;
  description?: Localized;
}

/** One option of a dropdown (booking form) */
export interface SelectOption {
  value: string;
  icon?: string;
  label: Localized;
}

export interface Testimonial {
  id: string;
  quote: Localized;
  author: string;
  role: Localized;
}
