# HADIR VISITORS website (Next.js + Tailwind + Redux)

English / Arabic toggle in the top strip. Everything is in the files below, nothing else is needed.

## Files
| File | What it is |
|---|---|
| `app/layout.tsx` | Font (Cairo), SEO tags, Google JSON-LD |
| `app/page.tsx` | Page order + section ids (menu links jump to these ids) |
| `components/Header.tsx` | Top strip + sticky menu. **`SITE` at the top = phone, emails, WhatsApp, social links** |
| `components/Hero.tsx` | Hero slider + booking form (sends WhatsApp message) |
| `components/ServiceStandards.tsx` | Service cards |
| `components/IndustryFeatures.tsx` | Feature cards |
| `components/CarGallery.tsx` | Car cards + category tabs (`VEHICLES` list at the top) |
| `components/WhyHadirLeads.tsx`, `FAQ.tsx`, `BookingCTA.tsx` | Other sections (Home FAQ = 10 questions, 2 per row) |
| `components/HeroSlider.tsx` | The sliding background used by EVERY hero (timing in `SLIDE_SECONDS`) |
| `app/services/<name>/page.tsx` | The 4 service pages (no FAQ section) |
| `app/about/page.tsx` | About page (texts EN + AR, pictures) |
| `app/privacy-policy/page.tsx` | Privacy Policy page (texts EN + AR) |
| `components/Footer.tsx` | Footer links, contact, social icons |
| `store/` | Language (EN / AR) state |

## Where to put images (folder `public/images/`, in code write `/images/...`)
| Images | Folder | File names used now |
|---|---|---|
| Logo | `public/images/logo.png` | `logo.png` |
| Home hero slides (2-4) | `public/images/hero/` | `slide-1.jpg` ... `slide-4.jpg` (list `HOME_SLIDES` in `Hero.tsx`) |
| Car photos (one folder per category) | `public/images/cargallery/sedans/`, `suvs/`, `vans/`, `buses/` | path of each card = `imageSrc` in `CarGallery.tsx`. Extra photos of each category are already in these folders |
| Service page hero slides | `public/images/services/<name>/` | `slide-1.jpg`, `slide-2.jpg`, `slide-3.jpg` |
| About / Privacy hero slides | `public/images/pages/about/`, `public/images/pages/privacy/` | `slide-1.jpg` ... `slide-3.jpg` |
| Service icons | `public/images/service_standard/` | `chauffeur.png`, `fleet.png`, `routing.png`, `corporate.png` |
| Feature icons | `public/images/industryimage/` | `premium_fleet.png`, `easy_booking.png`, `transparent_pricing.png`, `dedicated_support.png`, `safety_first.png`, `flexible_packages.png` |
| "Why us" picture | `public/images/leads/` | `leads.jpg` |
| Contact / social icons | `public/images/icons/` | already there |
| Share picture (1200x630), favicons | `public/` | `og-image.png`, `favicon.*` |

No picture in a folder = a small icon is shown instead (nothing breaks).
Best photo size: hero 2048x1150 or bigger (JPG, 250-400 KB), cars 1400 px wide or bigger. The photos in this project were already sharpened and enlarged 1.5x - 2x; bigger ORIGINAL photos always look best.

## How to change things
| I want to... | Do this |
|---|---|
| Change phone / emails / WhatsApp | `SITE` in `components/Header.tsx` (click = call / mail app / WhatsApp chat) |
| Show Facebook, Instagram, LinkedIn, X | paste the page link in `SITE.social` (empty = hidden) |
| Add a car card | copy one `{ ... }` block in `VEHICLES` (`CarGallery.tsx`), change name, `category`, `imageSrc`, features. Needs a new `id`. |
| Add a hero slide | add a line in `HOME_SLIDES` (`Hero.tsx`) or in `slides` of a page file |
| Add a form option | `SERVICES` / `VEHICLE_CLASSES` (`Hero.tsx`) |
| Add a menu item | `MENU` in `Header.tsx` (`#id` = Home section, `/about` = page). The Services drop-down list = `SERVICE_PAGES` in `Header.tsx` |
| Page width | `w-[90%] max-w-[2000px]` (90% of the screen, max 2000px) |

Clicking "Reserve now" on a car fills the booking form (car + class) and scrolls to it.
The footer "Services" links open the service pages. The footer "Quick Links" open the Home page at that section (from any page), plus About and Privacy Policy.
The EN / AR button works on every page and the choice is remembered.

## Go live
`git add .` -> `git commit -m "update"` -> `git push`. The pipeline (`.github`) builds and restarts the server.
On the server, `.env.local` must contain `NEXT_PUBLIC_SITE_URL=https://demo.hadirvisitors.com` (your real domain).
Local test: `npm install` then `npm run dev` (http://localhost:3000).


## Menu (top bar)
Home · Fleet · Services (drop-down: Airport Transfers, Corporate Events, Executive Travel, Delegation Support) · Features · Why Us · About · Privacy Policy · Contact.
On a phone the same links are in the menu button (the 4 service pages are listed under Services).

## Service pages
Left of the booking form = information about that service (list `overview.points` in the page file). No FAQ block. The form sends the request to WhatsApp with the service already chosen.


## Change ANY picture (quick map)
Rule: put your new picture in the same folder with the SAME file name (keep `.jpg`) = it changes everywhere automatically.
Different name or `.png` / `.webp`? Change the path in the file named in the last column.

| Picture | Folder | Path is written in |
|---|---|---|
| Logo | `public/images/logo.png` | `Header.tsx` |
| Home hero slides | `public/images/hero/` | `HOME_SLIDES` in `Hero.tsx` |
| Airport / Corporate / Executive / Delegation hero slides | `public/images/services/<name>/` | `slides` in `app/services/<name>/page.tsx` |
| About hero slides | `public/images/pages/about/` | `slides` in `app/about/page.tsx` |
| Privacy hero slides | `public/images/pages/privacy/` | `slides` in `app/privacy-policy/page.tsx` |
| Car photos | `public/images/cargallery/sedans/ suvs/ vans/ buses/` | `imageSrc` of each card in `CarGallery.tsx` |
| Service cards icons | `public/images/service_standard/` | `ServiceStandards.tsx` |
| Feature icons | `public/images/industryimage/` | `IndustryFeatures.tsx` |
| "Why us" picture | `public/images/leads/leads.jpg` | `WhyHadirLeads.tsx` |
| Social icons | `public/images/icons/` | `Footer.tsx` |

A slide can be 2, 3, 4 or more pictures (add / delete a line in the list). Slide speed: `SLIDE_SECONDS` in `components/HeroSlider.tsx`.

## Booking form (one file)
`components/BookingForm.tsx` is the ONLY booking form. Home hero, every service hero, Reserve buttons and "Start booking" all use it. Edit it once = changes everywhere.

## Your own icons / images
- Service Standards icons: `public/images/service_standard/` (same file names, PNG)
- Industry Features icons: `public/images/industryimage/` (same file names, PNG)
- Car photos: `public/images/cargallery/<sedans|suvs|vans|buses>/`
Replace a file with the same name to change it; if a file is missing, a default icon is shown.

## SEO (Google)
- `app/layout.tsx`: title, description, social preview and business data (JSON-LD: phone, address, hours).
- `app/sitemap.ts` -> /sitemap.xml and `app/robots.ts` -> /robots.txt (add a new page = one line in sitemap.ts).
- Every page has its own title + description in its `page.tsx` (`metadata`).
- Set the real domain on the server: `.env.local` -> `NEXT_PUBLIC_SITE_URL=https://hadirvisitors.com`
- Google Search Console code (optional): `NEXT_PUBLIC_GSC_VERIFICATION=<code>`; then submit https://<domain>/sitemap.xml
