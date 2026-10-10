import { NAV_LINKS } from '@/data/site';
import { SCROLL } from './thresholds';

const IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

/** Id of the section currently under the header ('home' at the top) */
export function findActiveSection(): string {
  // Page end: the last link ("contact") is the footer, which is short
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) return IDS[IDS.length - 1];

  let active = IDS[0];
  for (const id of IDS) {
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    if (top !== undefined && top <= SCROLL.headerOffset) active = id; // last passed section wins
  }
  return active;
}
