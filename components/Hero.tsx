'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Car, CheckCircle2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { SITE } from './Header';

/* ============================================================
 * HERO BACKGROUND SLIDES (use 2 to 4 pictures)
 *  1. Put the photos in  public/images/hero/
 *  2. Write the path here, e.g. '/images/hero/office.jpg'
 *  3. Add or delete a line = more / fewer slides (slides itself)
 * Best size: 1920x1080, JPG/WebP under ~400 KB (loads fast).
 * ============================================================ */
const SLIDES = [
  '/images/hero/airport.svg',
  '/images/hero/car.svg',
  '/images/hero/dusk.svg',
  '/images/hero/office.svg',
];
const SLIDE_SECONDS = 5; // time each picture stays

/* Form dropdown options (value = text sent on WhatsApp). Add a line to add an option. */
const SERVICES = [
  { value: 'Executive Chauffeur', en: 'Executive Chauffeur', ar: 'سائق تنفيذي' },
  { value: 'Airport Transfer', en: 'Airport Transfer', ar: 'نقل المطار' },
  { value: 'Corporate Events', en: 'Corporate Events', ar: 'فعاليات الشركات' },
  { value: 'Delegation Support', en: 'Delegation Support', ar: 'دعم الوفود' },
];
const VEHICLE_CLASSES = [
  { value: 'Luxury Sedan', en: 'Luxury Sedan', ar: 'سيدان فاخرة' },
  { value: 'Executive SUV', en: 'Executive SUV', ar: 'دفع رباعي تنفيذي' },
  { value: 'VIP Van', en: 'VIP Van', ar: 'فان VIP' },
  { value: 'Premium Bus', en: 'Premium Bus', ar: 'حافلة متميزة' },
];

export default function Hero() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  /* Slider: `cur` = picture on screen, `prev` = picture that is sliding out */
  const [pos, setPos] = useState<{ cur: number; prev: number | null }>({ cur: 0, prev: null });
  const goTo = (i: number) => setPos((p) => (i === p.cur ? p : { cur: i, prev: p.cur }));

  useEffect(() => {
    if (SLIDES.length < 2) return; // one picture = no sliding
    const timer = setInterval(
      () => setPos((p) => ({ cur: (p.cur + 1) % SLIDES.length, prev: p.cur })),
      SLIDE_SECONDS * 1000
    );
    return () => clearInterval(timer);
  }, []);

  /* Picture position: on screen = 0, leaving = to the side, waiting = on the other side */
  const dir = isAr ? -1 : 1;
  const slideStyle = (i: number): React.CSSProperties => {
    if (i === pos.cur) return { transform: 'translateX(0)', transition: 'transform 1000ms ease-in-out', zIndex: 2 };
    if (i === pos.prev) return { transform: `translateX(${-100 * dir}%)`, transition: 'transform 1000ms ease-in-out', zIndex: 1 };
    return { transform: `translateX(${100 * dir}%)`, transition: 'none', zIndex: 0 };
  };

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceType: SERVICES[0].value,
    vehicleClass: VEHICLE_CLASSES[0].value,
    vehicleName: '', // exact car chosen on a fleet card ('' = none)
    pickupLocation: '',
    duration: '1 Hour',
    passengers: '1',
  });

  /* Other sections fill the form by sending a browser event:
     CarGallery -> 'select-vehicle'   Footer -> 'select-service' */
  useEffect(() => {
    const onVehicle = (e: Event) => {
      const d = (e as CustomEvent<{ name: string; vehicleClass: string }>).detail;
      setFormData((f) => ({ ...f, vehicleName: d.name, vehicleClass: d.vehicleClass }));
    };
    const onService = (e: Event) => {
      const d = (e as CustomEvent<{ service: string }>).detail;
      setFormData((f) => ({ ...f, serviceType: d.service }));
    };
    window.addEventListener('select-vehicle', onVehicle);
    window.addEventListener('select-service', onService);
    return () => {
      window.removeEventListener('select-vehicle', onVehicle);
      window.removeEventListener('select-service', onService);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Direct WhatsApp Redirection with Form Data (number: SITE in Header.tsx)
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      '*New Booking Request - HADIR VISITORS*',
      '',
      `*Full Name:* ${formData.fullName || 'Not Provided'}`,
      `*Phone Number:* ${formData.phone || 'Not Provided'}`,
      `*Service Type:* ${formData.serviceType}`,
      `*Vehicle Class:* ${formData.vehicleClass}`,
      ...(formData.vehicleName ? [`*Vehicle:* ${formData.vehicleName}`] : []),
      `*Pickup Location:* ${formData.pickupLocation || 'Not Provided'}`,
      `*Duration:* ${formData.duration}`,
      `*Passengers:* ${formData.passengers || '1'}`,
    ];
    const url = `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-8 sm:py-12 lg:py-16 bg-[#faf8f5]" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* BACKGROUND SLIDER: pictures slide sideways, no zoom / blur so they stay sharp */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {SLIDES.map((slide, index) => (
          <div key={slide} className="absolute inset-0 w-full h-full will-change-transform" style={slideStyle(index)}>
            <img
              src={slide}
              alt=""
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Very light layer only (picture stays clear; the text has its own white card) */}
      <div className="absolute inset-0 bg-white/10 z-[3] pointer-events-none" />

      {/* 📦 Main Content */}
      <div className="relative w-[90%] max-w-[2000px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left rtl:lg:text-right bg-white/85 rounded-2xl p-6 sm:p-8 shadow-lg">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d9a036] bg-[#d9a036]/10 text-[#b37a1f] text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#d9a036] animate-pulse" />
              {isAr ? 'أفخم النقل للشركات في الكويت' : "KUWAIT'S FINEST CORPORATE TRANSPORTATION"}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight">
              {isAr ? (
                <>أعد تعريف <span className="text-[#d9a036]">تنقلك التنفيذي</span></>
              ) : (
                <>Redefine Your <br className="hidden sm:inline" /> <span className="text-[#d9a036]">Executive Mobility</span></>
              )}
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              {isAr
                ? 'استمتع بنقل فاخر لا مثيل له مع حاضِر فيزيتورز. أسطول مميز، وسائقون محترفون، ودعم مخصص على مدار 24/7 للتميز المؤسسي.'
                : 'Experience unparalleled luxury transportation with HADIR VISITORS. Premium fleet, professional chauffeurs, and 24/7 dedicated support for corporate excellence.'}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#book-form"
                className="bg-[#d9a036] hover:bg-[#c48e2e] text-white font-bold px-6 py-3 rounded-md shadow-md transition-all flex items-center gap-2 text-xs tracking-wider uppercase"
              >
                <Car className="w-4 h-4 fill-current" />
                <span>{isAr ? 'احجز مركبتك' : 'BOOK YOUR VEHICLE'}</span>
              </a>

              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-50 text-[#d9a036] border border-[#d9a036] font-bold px-6 py-3 rounded-md shadow-sm transition-all flex items-center gap-2 text-xs tracking-wider uppercase"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span>{isAr ? 'واتساب الآن' : 'WHATSAPP NOW'}</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200/80 max-w-lg mx-auto lg:mx-0 text-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#d9a036]">178+</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">
                  {isAr ? 'مركبة ممتازة' : 'PREMIUM VEHICLES'}
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#d9a036]">24/7</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">
                  {isAr ? 'متاح دائماً' : 'ALWAYS AVAILABLE'}
                </p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#d9a036]">15+</h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">
                  {isAr ? 'سنوات من التميز' : 'YEARS EXCELLENCE'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: WhatsApp Form */}
          <div id="book-form" className="lg:col-span-6 w-full max-w-lg mx-auto">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 sm:p-7">
              
              <div className="mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d9a036] flex items-center gap-1">
                  ⚡ {isAr ? 'حجز فورى' : 'INSTANT BOOKING'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
                  {isAr ? 'احجز رحلتك اليوم' : 'Secure Your Ride Today'}
                </h2>
                <p className="text-gray-600 text-xs mt-1">
                  {isAr
                    ? 'سيارات فاخرة ترسل في دقائق. تأكيد عبر الواتساب.'
                    : 'Premium vehicles dispatched in minutes. WhatsApp confirmation available.'}
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-3.5">

                {/* Shows the car chosen on a fleet card */}
                {formData.vehicleName && (
                  <div className="flex items-center justify-between gap-2 rounded border border-[#d9a036] bg-[#d9a036]/10 px-3 py-2 text-xs font-bold text-gray-800">
                    <span>{isAr ? 'المركبة المختارة: ' : 'Selected vehicle: '}{formData.vehicleName}</span>
                    <button type="button" aria-label="Remove" className="cursor-pointer text-gray-500 hover:text-gray-900"
                      onClick={() => setFormData({ ...formData, vehicleName: '' })}>✕</button>
                  </div>
                )}

                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-extrabold text-gray-700 uppercase mb-1">
                      {isAr ? 'الاسم الكامل' : 'FULL NAME'}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder={isAr ? 'جون الصباح' : 'John Al-Sabah'}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:border-[#d9a036] text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-gray-700 uppercase mb-1">
                      {isAr ? 'رقم الهاتف' : 'PHONE NUMBER'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+965 9000 0000"
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:border-[#d9a036] text-gray-800 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-extrabold text-gray-700 uppercase mb-1">
                      {isAr ? 'نوع الخدمة' : 'SERVICE TYPE'}
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:border-[#d9a036] text-gray-800"
                    >
                      {SERVICES.map((o) => (
                        <option key={o.value} value={o.value}>{isAr ? o.ar : o.en}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-gray-700 uppercase mb-1">
                      {isAr ? 'فئة المركبة' : 'VEHICLE CLASS'}
                    </label>
                    <select
                      name="vehicleClass"
                      value={formData.vehicleClass}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:border-[#d9a036] text-gray-800"
                    >
                      {VEHICLE_CLASSES.map((o) => (
                        <option key={o.value} value={o.value}>{isAr ? o.ar : o.en}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold text-gray-700 uppercase mb-1">
                    {isAr ? 'موقع الالتقاط' : 'PICKUP LOCATION'}
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder={isAr ? 'المطار، الفندق، المكتب أو المنطقة' : 'Airport, Hotel, Office or Area'}
                    className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:border-[#d9a036] text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-extrabold text-gray-700 uppercase mb-1">
                      {isAr ? 'المدة' : 'DURATION'}
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:border-[#d9a036] text-gray-800"
                    >
                      <option value="1 Hour">{isAr ? 'ساعة واحدة' : '1 Hour'}</option>
                      <option value="Hours">{isAr ? 'ساعات' : 'Hours'}</option>
                      <option value="Full Day">{isAr ? 'يوم كامل' : 'Full Day'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-gray-700 uppercase mb-1">
                      {isAr ? 'الركاب' : 'PASSENGERS'}
                    </label>
                    <input
                      type="number"
                      name="passengers"
                      min="1"
                      max="15"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:border-[#d9a036] text-gray-800"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 bg-[#d9a036] hover:bg-[#c48e2e] text-white font-bold py-3 px-4 rounded shadow transition-all flex items-center justify-center gap-2 text-xs tracking-wider uppercase cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-white" />
                  <span>{isAr ? 'طلب عبر الواتساب' : 'REQUEST ON WHATSAPP'}</span>
                </button>

                <div className="flex flex-wrap items-center justify-between gap-1 pt-2 text-[9px] text-gray-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    {isAr ? 'الرد خلال 10 دقائق' : 'Response within 10 minutes'}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    {isAr ? 'سائقون محترفون' : 'Professional drivers'}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    {isAr ? 'أفضل الأسعار' : 'Best rates'}
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>

        {/* 🔘 SLIDER DOTS */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === pos.cur ? 'w-6 bg-[#d9a036]' : 'w-2 bg-gray-400/60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}