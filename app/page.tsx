'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceStandards from '../components/ServiceStandards';
import IndustryFeatures from '../components/IndustryFeatures';
import CarGallery from '../components/CarGallery';
import WhyHadirLeads from '../components/WhyHadirLeads';
import FAQ from '../components/FAQ';
import BookingCTA from '../components/BookingCTA';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function HomePage() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  return (
    <main className={`min-h-screen bg-gray-50 ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <Header />
      <Hero />
      <div id="service-standards"><ServiceStandards /></div>
      <div id="industry-features"><IndustryFeatures /></div>
      <div id="car-gallery"><CarGallery /></div>
      <div id="why-hadir"><WhyHadirLeads /></div>
      <FAQ />
      <BookingCTA />
      <Footer />
    </main>
  );
}