import type { Metadata } from 'next';

/* Favicons and the web app manifest (files live in /public) */
export const ICONS: Metadata['icons'] = {
  icon: [
    { url: '/favicon.svg', type: 'image/svg+xml' },
    { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
  ],
  shortcut: '/favicon.ico',
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
};

export const MANIFEST_PATH = '/manifest.webmanifest';
