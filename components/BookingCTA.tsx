'use client';

import { Car } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function BookingCTA() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  const scrollToForm = () => {
    const formElement = document.getElementById('book-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#d9a036] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white text-center" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto space-y-5">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          {isAr ? 'استمتع بالتنقل الفاخر اليوم' : 'Experience Premium Mobility Today'}
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
          {isAr
            ? 'انضم إلى شريك النقل الأكثر ثقة للشركات في الكويت. احجز رحلتك الأولى واكتشف الفرق مع حاضِر فيزيتورز.'
            : "Join Kuwait's most trusted corporate transportation partner. Book your first ride and discover the HADIR VISITORS difference."}
        </p>

        {/* Smooth Scroll Button */}
        <div className="pt-4">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#d9a036] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <Car className="w-4 h-4 fill-current text-[#d9a036]" />
            <span>{isAr ? 'ابدأ الحجز الآن' : 'START BOOKING NOW'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}