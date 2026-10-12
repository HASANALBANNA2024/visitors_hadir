'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, Calendar, Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleLanguage } from '../store/languageSlice';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-white shadow-sm" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Top Bar Section */}
      <div className="bg-[#f4f5f7] text-[#6b7280] text-xs sm:text-sm py-2 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2">
          
          {/* Contact Info */}
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <a href="tel:+96596770078" className="flex items-center gap-1 text-[#d9a036] font-medium hover:underline">
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>+965 9677 0078</span>
            </a>
            <a href="mailto:info@hadirvisitors.com" className="hidden sm:flex items-center gap-1.5 text-[#d9a036] font-medium hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>info@hadirvisitors.com</span>
            </a>
          </div>

          {/* Right Side Support & Language Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1.5 text-gray-700">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              <span>{isAr ? 'دعم ممتاز على مدار 24/7' : '24/7 Premium Support'}</span>
            </div>

            <button
              onClick={() => dispatch(toggleLanguage())}
              className="bg-[#d9a036] hover:bg-[#c48e2e] text-white font-semibold px-3 py-1 rounded text-xs transition-colors cursor-pointer shadow-sm"
            >
              {isAr ? 'EN / العربية' : 'العربية / EN'}
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 relative flex items-center justify-center rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 p-1">
              <img
                src="/images/logo.png" 
                alt="HADIR Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-gray-900 tracking-wider leading-none uppercase">
                HADIR VISITORS
              </h1>
              <p className="text-[9px] text-[#d9a036] tracking-[0.2em] font-bold uppercase mt-0.5">
                LUXURY MOBILITY
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-700">
            <a href="#home" className="text-[#d9a036] border-b-2 border-[#d9a036] pb-1">
              {isAr ? 'الرئيسية' : 'Home'}
            </a>
            <a href="#car-gallery" className="hover:text-[#d9a036] transition-colors">
              {isAr ? 'الأسطول' : 'Fleet'}
            </a>
            <a href="#service-standards" className="hover:text-[#d9a036] transition-colors">
              {isAr ? 'الخدمات' : 'Services'}
            </a>
            <a href="#industry-features" className="hover:text-[#d9a036] transition-colors">
              {isAr ? 'المميزات' : 'Features'}
            </a>
            <a href="#why-hadir" className="hover:text-[#d9a036] transition-colors">
              {isAr ? 'لماذا نحن' : 'Why Us'}
            </a>
            <a href="#contact" className="hover:text-[#d9a036] transition-colors">
              {isAr ? 'اتصل بنا' : 'Contact'}
            </a>
          </nav>

          {/* Mobile Menu Button Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          <a
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[#d9a036] font-bold text-sm py-1"
          >
            {isAr ? 'الرئيسية' : 'Home'}
          </a>
          <a
            href="#car-gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-[#d9a036] font-medium text-sm py-1"
          >
            {isAr ? 'الأسطول' : 'Fleet'}
          </a>
          <a
            href="#service-standards"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-[#d9a036] font-medium text-sm py-1"
          >
            {isAr ? 'الخدمات' : 'Services'}
          </a>
          <a
            href="#industry-features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-[#d9a036] font-medium text-sm py-1"
          >
            {isAr ? 'المميزات' : 'Features'}
          </a>
          <a
            href="#why-hadir"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-[#d9a036] font-medium text-sm py-1"
          >
            {isAr ? 'لماذا نحن' : 'Why Us'}
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-[#d9a036] font-medium text-sm py-1"
          >
            {isAr ? 'اتصل بنا' : 'Contact'}
          </a>

          <a
            href="#book-form"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full mt-2 bg-gradient-to-r from-[#e5ab3c] to-[#ca8f28] text-white font-bold px-5 py-2.5 rounded-lg shadow flex items-center justify-center gap-2 text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>{isAr ? 'حجز' : 'BOOK'}</span>
          </a>
        </div>
      )}
    </header>
  );
}