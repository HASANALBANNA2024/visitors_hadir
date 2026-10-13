'use client';

import { useState } from 'react';
import Image from 'next/image';
import { UserCheck, Sparkles, MapPin, Trophy } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface ServiceCard {
  id: number;
  imageSrc: string;
  fallbackIcon: React.ElementType;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export default function ServiceStandards() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  // 4 Core Service Cards (Bilingual Support: EN & AR)
  const services: ServiceCard[] = [
    {
      id: 1,
      imageSrc: '/images/service_standard/chauffeur.png',
      fallbackIcon: UserCheck,
      titleEn: 'Elite Chauffeurs',
      titleAr: 'سائقون نخبة',
      descEn: 'Vetted, trained professionals with impeccable service standards and absolute discretion',
      descAr: 'محترفون مدربون ومفحوصون وفق أعلى معايير الخدمة والسرية التامة',
    },
    {
      id: 2,
      imageSrc: '/images/service_standard/fleet.png',
      fallbackIcon: Sparkles,
      titleEn: 'Immaculate Fleet',
      titleAr: 'أسطول لا تشوبه شائبة',
      descEn: 'Newest luxury vehicles, pristine condition, comprehensive maintenance and safety checks',
      descAr: 'أحدث المركبات الفاخرة، بحالة ممتازة، مع صيانة شاملة وفحوصات سلامة',
    },
    {
      id: 3,
      imageSrc: '/images/service_standard/routing.png',
      fallbackIcon: MapPin,
      titleEn: 'Smart Routing',
      titleAr: 'توجيه ذكي',
      descEn: 'Real-time traffic optimization, multiple location support, custom routes for efficiency',
      descAr: 'تحسين حركة المرور في الوقت الفعلي، دعم مواقع متعددة، ومسارات مخصصة للكفاءة',
    },
    {
      id: 4,
      imageSrc: '/images/service_standard/corporate.png',
      fallbackIcon: Trophy,
      titleEn: 'Corporate Solutions',
      titleAr: 'حلول الشركات',
      descEn: 'Tailored packages, monthly contracts, priority access, dedicated account management',
      descAr: 'باقات مخصصة، عقود شهرية، أولوية الوصول، وإدارة حسابات مخصصة',
    },
  ];

  // Image load failure track korar state
  const [imgErrors, setImgErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50/50" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="w-[90%] max-w-[2000px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#d9a036]">
            <span>🏅</span>
            <span>{isAr ? 'خدماتنا الأساسية' : 'OUR CORE SERVICES'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            {isAr ? 'معايير خدمة عالمية المستوى' : 'World-Class Service Standards'}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const IconComponent = item.fallbackIcon;
            const hasError = imgErrors[item.id];

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between group"
              >
                {/* Image Container with Fallback Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f3d38c] to-[#d9a036] flex items-center justify-center p-3.5 shadow-md group-hover:scale-105 transition-transform duration-300 mb-6 relative">
                  {!hasError ? (
                    <Image
                      src={item.imageSrc}
                      alt={isAr ? item.titleAr : item.titleEn}
                      width={40}
                      height={40}
                      className="object-contain w-full h-full"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <IconComponent className="w-8 h-8 text-white stroke-[2.2]" />
                  )}
                </div>

                {/* Card Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}