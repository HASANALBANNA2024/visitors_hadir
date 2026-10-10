import type { Localized } from './lang';

/** Menu / footer link. href is a section id like '#fleet' */
export interface NavLink {
  label: Localized;
  href: string;
}

/** Footer service link: also pre-selects the service in the booking form */
export interface ServiceLink {
  label: Localized;
  service: string; // must match a value in SERVICE_OPTIONS
}
