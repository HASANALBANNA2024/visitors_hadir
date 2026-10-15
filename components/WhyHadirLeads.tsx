'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trophy } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface LeadFeature {
  id: number;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export default function WhyHadirLeads() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  const [hasImgError, setHasImgError] = useState(false);

  // 5 Feature Points
  const features: LeadFeature[] = [
    {
      id: 1,
      titleEn: 'Newest Fleet',
      titleAr: 'أحدث أسطول',
      descEn:
        'Brand new luxury vehicles with cutting-edge technology, regularly serviced, never more than 3 years old',
      descAr:
        'مركبات فاخرة جديدة تماماً مزودة بأحدث التقنيات، تمت صيانته بانتظام، ولا يزيد عمرها عن 3 سنوات',
    },
    {
      id: 2,
      titleEn: 'Vetted Professionals',
      titleAr: 'محترفون موثوقون',
      descEn:
        'Background-checked drivers with excellence certifications, ongoing training, native multi-language speakers',
      descAr:
        'سائقون مفحوصو السجل ومتدربون مع شهادات تميز، يتقنون لغات متعددة',
    },
    {
      id: 3,
      titleEn: 'Always Available',
      titleAr: 'متاح دائماً',
      descEn:
        '24/7/365 booking and support, real-time tracking, instant driver assignment, WhatsApp integration',
      descAr:
        'حجز ودعم على مدار الساعة 24/7/365، تتبع مباشر، تعيين فوري للسائق، وتكامل الواتساب',
    },
    {
      id: 4,
      titleEn: 'Smart Flexibility',
      titleAr: 'مرونة ذكية',
      descEn:
        'Hourly, daily, or monthly plans; no long-term contracts; scalable for your needs; corporate billing available',
      descAr:
        'خطط بالساعة أو اليوم أو الشهر؛ بدون عقود طويلة الأجل؛ قابلة التوسع حسب احتياجاتك؛ فواتير شركات متاحة',
    },
    {
      id: 5,
      titleEn: 'Transparent Pricing',
      titleAr: 'أسعار شفافة',
      descEn:
        'Zero hidden fees, competitive rates, detailed invoicing, price match guarantee',
      descAr:
        'بدون رسوم خفية، أسعار تنافسية، فواتير مفصلة، وضمان مطابقة الأسعار',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50/50" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="w-[90%] max-w-[2000px] mx-auto">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-center lg:text-left rtl:lg:text-right">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#d9a036]">
            <span>⚡</span>
            <span>
              {isAr ? 'ميزتك التنافسية' : 'YOUR COMPETITIVE ADVANTAGE'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            {isAr ? 'لماذا تتصدر حاضِر فيزيتورز' : 'Why HADIR VISITORS Leads'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Numbered List */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-center">
            {features.map((item) => (
              <div key={item.id} className="flex items-start gap-4 group">
                {/* Number Box */}
                <div className="w-8 h-8 rounded-lg bg-[#d9a036] text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm mt-0.5 group-hover:scale-105 transition-transform duration-300">
                  {item.id}
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-2xl">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Image Box with Fallback Icon */}
          <div className="lg:col-span-6 w-full">
            {/* The picture FILLS the whole box (any size works). No picture = icon */}
            <div className="relative bg-gray-100/80 rounded-2xl border border-gray-200/60 h-full min-h-[320px] sm:min-h-[420px] flex items-center justify-center shadow-md overflow-hidden group">
              
              {!hasImgError ? (
                <Image
                  src="/images/leads/leads.jpg"
                  alt="Why HADIR VISITORS Leads"
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={() => setHasImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f3d38c] to-[#d9a036] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-10 h-10 text-white stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#d9a036] mt-2">
                    {isAr ? 'تميز النقل التنفيذي' : 'EXECUTIVE MOBILITY EXCELLENCE'}
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}