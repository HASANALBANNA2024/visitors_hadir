/* ==========================================================
 * Next.js config
 *  - STATIC_EXPORT=1 npm run build -> plain HTML in /out
 *    (only for Cloudflare Pages; NOT for the Oracle server)
 *  - security headers for the server mode (npm start / pm2)
 *  - next/image may load photos from any https link
 * ========================================================== */
import type { NextConfig } from 'next';

const isExport = process.env.STATIC_EXPORT === '1';

const config: NextConfig = {
  ...(isExport ? { output: 'export' as const } : {}),
  poweredByHeader: false, // hides "X-Powered-By: Next.js"
  trailingSlash: false,
  images: {
    unoptimized: isExport, // the export has no image server
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  /* Security headers (ignored by the static export) */
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }];
  },
};

export default config;
