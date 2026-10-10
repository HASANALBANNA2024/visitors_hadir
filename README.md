# HADIR Kuwait website (Next.js + Redux)

Every file is small (max 50 lines) and commented. Content lives in `data/`, logic in `lib/`, `hooks/`, `store/`.

## Folders
| Folder | What is inside |
|---|---|
| `app/` | Pages: `(en)` = `/`, `(ar)/ar` = `/ar`, plus sitemap, robots, manifest |
| `components/` | `app` (page shell), `common` (buttons, fields), `layout` (top strip, app bar, footer), `sections` (hero, services...), `seo` (JSON-LD) |
| `data/` | ALL texts (English + Arabic), links, images, SEO texts |
| `lib/seo/` | Meta tags: title, description, canonical, hreflang, Open Graph, Twitter, robots, icons |
| `lib/structured-data/` | JSON-LD for Google: Organization, WebSite, LocalBusiness, WebPage, ItemList, FAQ |
| `store/` | Redux "blocs": language, fleet, booking, menu, heroSlider, scroll |
| `styles/` | One small CSS file per part (order in `styles/index.ts`) |

## Where to put images
| Image | Folder | Then edit |
|---|---|---|
| Hero background (2-4 pictures) | `public/images/hero/` | `data/hero/slides.ts` |
| Vehicle photos | `public/images/fleet/` | `data/fleet/sedans.ts`, `suvs.ts` (`image:`) |
| Logo, "Why us" picture | `public/images/` | `data/site/images.ts` |
| Share picture (1200x630) | `public/og-image.png` | replace the file |
| Favicons | `public/` | replace the files |

## Your links
- WhatsApp number, phone, email, domain: `data/site/site.ts`
- Instagram, Facebook, Maps...: `data/site/links.ts` (empty = hidden)

## SEO checklist after going live
1. Set `NEXT_PUBLIC_SITE_URL` in `.env.local` (real domain).
2. Add Google Search Console, verify with `NEXT_PUBLIC_GOOGLE_VERIFICATION`, submit `/sitemap.xml`.
3. Fill the address in `data/site/site.ts` (`streetAddress`) and create a Google Business Profile.
4. Replace sample reviews and FAQ answers with real ones.

## Run
`npm i @reduxjs/toolkit react-redux` then `npm run dev`. For the server: `npm run build` then `npm start` (pm2).
Cloudflare Pages (static): `STATIC_EXPORT=1 npm run build`, output folder `out`.
