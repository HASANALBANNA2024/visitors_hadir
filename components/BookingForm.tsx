'use client';

/* ============================================================
 * BookingForm = THE booking form of the whole site (ONE file).
 * Used by Hero.tsx, so it appears on the Home page and on every
 * service page. Change it here = it changes everywhere.
 *  - the request goes to WhatsApp (number: SITE in Header.tsx)
 *  - "Reserve" on a car card and the service pages fill it
 *    (CarGallery sends 'select-vehicle')
 * ============================================================ */
import { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { SITE } from './Header';

/* Form dropdown options (value = text sent on WhatsApp). Add a line to add an option. */
export const SERVICES = [
  { value: 'Executive Chauffeur', en: 'Executive Chauffeur', ar: 'سائق تنفيذي' },
  { value: 'Airport Transfer', en: 'Airport Transfer', ar: 'نقل المطار' },
  { value: 'Corporate Events', en: 'Corporate Events', ar: 'فعاليات الشركات' },
  { value: 'Delegation Support', en: 'Delegation Support', ar: 'دعم الوفود' },
];
export const VEHICLE_CLASSES = [
  { value: 'Luxury Sedan', en: 'Luxury Sedan', ar: 'سيدان فاخرة' },
  { value: 'Executive SUV', en: 'Executive SUV', ar: 'دفع رباعي تنفيذي' },
  { value: 'VIP Van', en: 'VIP Van', ar: 'فان VIP' },
  { value: 'Premium Bus', en: 'Premium Bus', ar: 'حافلة متميزة' },
];

export default function BookingForm({ service }: { service?: string }) {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceType: service ?? SERVICES[0].value,
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


  // Required-field message in the chosen language
  const reqMsg = isAr ? 'يرجى تعبئة هذا الحقل' : 'Please fill out this field';
  const reqProps = {
    required: true,
    onInvalid: (e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity(reqMsg),
    onInput: (e: React.FormEvent<HTMLInputElement>) => e.currentTarget.setCustomValidity(''),
  };

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
              {...reqProps}
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
              {...reqProps}
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
            {...reqProps}
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
           {isAr ? 'سيقوم فريقنا بالرد عليك في أقرب وقت' : 'Our team will respond to you promptly'}
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
  );
}
