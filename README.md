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
| `components/WhyHadirLeads.tsx`, `FAQ.tsx`, `BookingCTA.tsx` | Other sections |
| `components/Footer.tsx` | Footer links, contact, social icons |
| `store/` | Language (EN / AR) state |

## Where to put images (folder `public/images/`, in code write `/images/...`)
| Images | Folder | File names used now |
|---|---|---|
| Logo | `public/images/logo.png` | `logo.png` |
| Hero slides (2-4) | `public/images/hero/` | list `SLIDES` in `Hero.tsx` |
| Car photos | `public/images/cargallery/` | `s-class.png`, `bmw-7.png`, `kia-k8.png`, `ford-taurus.png`, `bentayga.png`, `cullinan.png`, `v-class.png`, `executive-van.png`, `coaster-bus.png`, `vip-coach.png` |
| Service icons | `public/images/service_standard/` | `chauffeur.png`, `fleet.png`, `routing.png`, `corporate.png` |
| Feature icons | `public/images/industryimage/` | `premium_fleet.png`, `easy_booking.png`, `transparent_pricing.png`, `dedicated_support.png`, `safety_first.png`, `flexible_packages.png` |
| "Why us" picture | `public/images/leads/` | `leads.png` |
| Contact / social icons | `public/images/icons/` | already there |
| Share picture (1200x630), favicons | `public/` | `og-image.png`, `favicon.*` |

No picture in a folder = a small icon is shown instead (nothing breaks).
Best photo size: hero 1920x1080 JPG/WebP under 400 KB, cars about 800x500.

## How to change things
| I want to... | Do this |
|---|---|
| Change phone / emails / WhatsApp | `SITE` in `components/Header.tsx` (click = call / mail app / WhatsApp chat) |
| Show Facebook, Instagram, LinkedIn, X | paste the page link in `SITE.social` (empty = hidden) |
| Add a car card | copy one `{ ... }` block in `VEHICLES` (`CarGallery.tsx`), change name, `category`, `imageSrc`, features. Needs a new `id`. |
| Add a hero slide | add a line in `SLIDES` (`Hero.tsx`) |
| Add a form option | `SERVICES` / `VEHICLE_CLASSES` (`Hero.tsx`) |
| Add a menu item | `MENU` in `Header.tsx` + the same id in `app/page.tsx` |
| Page width | `w-[90%] max-w-[2000px]` (90% of the screen, max 2000px) |

Clicking "Reserve now" on a car fills the booking form (car + class) and scrolls to it.
The footer "Services" links choose that service in the form.

## Go live
`git add .` -> `git commit -m "update"` -> `git push`. The pipeline (`.github`) builds and restarts the server.
On the server, `.env.local` must contain `NEXT_PUBLIC_SITE_URL=https://demo.hadirvisitors.com` (your real domain).
Local test: `npm install` then `npm run dev` (http://localhost:3000).
