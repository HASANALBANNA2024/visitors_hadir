import type { Metadata } from 'next';

/** Robots meta tag: index everything, allow big image / text previews */
export const ROBOTS_META: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};
