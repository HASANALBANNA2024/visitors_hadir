'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Car,
  Smartphone,
  CircleDollarSign,
  Headphones,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface FeatureCard {
  id: number;
  imageSrc: string;
  fallbackIcon: React.ElementType;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export default function IndustryFeatures() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  // 6 Industry Leading Feature Cards
  const features: FeatureCard[] = [
    {
      id: 1,
      imageSrc: '/images/industryimage/premium_fleet.png',
      fallbackIcon: Car,
      titleEn: 'Premium Fleet',
      titleAr: 'أسطول فاخر',
      descEn: 'Latest model luxury vehicles updated annually with cutting-edge technology',
      descAr: 'أحدث طرازات السيارات الفاخرة المحدثة سنوياً بأحدث التقنيات',
    },
    {
      id: 2,
      imageSrc: '/images/industryimage/easy_booking.png',
      fallbackIcon: Smartphone,
      titleEn: 'Easy Booking',
      titleAr: 'حجز سهل',
      descEn: 'Instant WhatsApp booking, real-time tracking, mobile app availability',
      descAr: 'حجز فوري عبر الواتساب، تتبع في الوقت الفعلي، وتوفر تطبيق للهاتف',
    },
    {
      id: 3,
      imageSrc: '/images/industryimage/transparent_pricing.png',
      fallbackIcon: CircleDollarSign,
      titleEn: 'Transparent Pricing',
      titleAr: 'أسعار شفافة',
      descEn: 'Zero hidden fees, competitive rates, corporate billing options available',
      descAr: 'بدون رسوم خفية، أسعار تنافسية، وخيارات فواتير مجدولة للشركات',
    },
    {
      id: 4,
      imageSrc: '/images/industryimage/dedicated_support.png',
      fallbackIcon: Headphones,
      titleEn: 'Dedicated Support',
      titleAr: 'دعم مخصص',
      descEn: '24/7 customer service, personal account managers, priority scheduling',
      descAr: 'خدمة عملاء على مدار 24/7، مدراء حسابات شخصيين، وجدولة أولوية',
    },
    {
      id: 5,
      imageSrc: '/images/industryimage/safety_first.png',
      fallbackIcon: ShieldCheck,
      titleEn: 'Safety First',
      titleAr: 'السلامة أولاً',
      descEn: 'Background-checked drivers, regular vehicle maintenance, insurance coverage',
      descAr: 'سائقون مفحوصو السجل، صيانة دورية للمركبات، وتغطية تأمينية شاملة',
    },
    {
      id: 6,
      imageSrc: '/images/industryimage/flexible_packages.png',
      fallbackIcon: Globe,
      titleEn: 'Flexible Packages',
      titleAr: 'باقات مرنة',
      descEn: 'Hourly, daily, monthly plans with no long-term contracts required',
      descAr: 'خطط بالساعة، اليوم، والشهر دون الحاجة لالتزامات وعقود طويلة الأجل',
    },
  ];

  // Track image load errors per card
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
            <span>⚡</span>
            <span>{isAr ? 'لماذا تميزت حاضِر فيزيتورز' : 'WHY HADIR VISITORS STANDS OUT'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            {isAr ? 'ميزات رائدة في القطاع' : 'Industry-Leading Features'}
          </h2>
        </div>

        {/* 6 Cards Grid (3 Columns on Large Screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const IconComponent = item.fallbackIcon;
            const hasError = imgErrors[item.id];

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 p-7 text-left rtl:text-right shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon / Image Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#faf8f5] flex items-center justify-center p-2.5 mb-5 relative border border-gray-100 group-hover:scale-105 transition-transform duration-300">
                    {!hasError ? (
                      <Image
                        src={item.imageSrc}
                        alt={isAr ? item.titleAr : item.titleEn}
                        width={32}
                        height={32}
                        className="object-contain w-full h-full"
                        onError={() => handleImageError(item.id)}
                      />
                    ) : (
                      <IconComponent className="w-6 h-6 text-[#d9a036] stroke-[2]" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>

                  {/* Description */}
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