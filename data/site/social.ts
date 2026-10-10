/* SOCIAL LINKS: built from data/site/links.ts (empty links are hidden) */
import { LINKS } from './links';

const ALL = [
  { key: 'instagram', label: 'Instagram', href: LINKS.instagram },
  { key: 'facebook', label: 'Facebook', href: LINKS.facebook },
  { key: 'x', label: 'X (Twitter)', href: LINKS.x },
  { key: 'linkedin', label: 'LinkedIn', href: LINKS.linkedin },
  { key: 'tiktok', label: 'TikTok', href: LINKS.tiktok },
  { key: 'youtube', label: 'YouTube', href: LINKS.youtube },
  { key: 'snapchat', label: 'Snapchat', href: LINKS.snapchat },
];

/** Only the social links that are filled in (footer + SEO "sameAs") */
export const SOCIAL_LINKS = ALL.filter((s) => s.href);
