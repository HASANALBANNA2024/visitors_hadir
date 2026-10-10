/* ==========================================================
 * HomePage (like Flutter's build() method)
 * The whole site is small widgets called in order:
 *   layout widgets   -> components/layout/
 *   section widgets  -> components/sections/<name>/
 *   shared widgets   -> components/common/
 *   all content      -> data/        all state -> store/blocs/
 * ========================================================== */
import { Footer, FloatingActions, Header, ScrollWatcher, SkipLink, TopBar } from '@/components/layout';
import { Cta, Faq, Features, Fleet, Hero, Services, Testimonials, WhyChoose } from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <ScrollWatcher /> {/* invisible: reports scroll position to Redux */}

      {/* ---------- Top ---------- */}
      <TopBar /> {/* phone / email / language strip: scrolls away */}
      <Header /> {/* app bar: stays fixed on top while scrolling */}

      {/* ---------- Page sections (top to bottom) ---------- */}
      <main id="main-content">
        <Hero /> {/* 1. moving background + instant booking form */}
        <Services /> {/* 2. core services */}
        <Features /> {/* 3. feature boxes */}
        <Fleet /> {/* 4. vehicles (filterable) */}
        <WhyChoose /> {/* 5. why HADIR */}
     {/* <Testimonials /> */} {/* 6. client reviews */}
        <Faq /> {/* 7. questions and answers (SEO) */}
        <Cta /> {/* 8. call to action */}
      </main>

      {/* ---------- Bottom ---------- */}
      <Footer />
      <FloatingActions /> {/* WhatsApp + back-to-top buttons */}
    </>
  );
}
