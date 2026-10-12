'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export interface FAQItem {
  id: number;
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}

export default function FAQ() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  const faqs: FAQItem[] = [
    {
      id: 1,
      questionEn: 'How do I book a chauffeur in Kuwait?',
      questionAr: 'كيف يمكنني حجز سائق في الكويت؟',
      answerEn: 'You can easily book through our WhatsApp instant form above or directly contact our 24/7 dedicated support team.',
      answerAr: 'يمكنك الحجز بسهولة من خلال نموذج الواتساب المباشر أعلاه أو الاتصال بمكتب الدعم الخاص بنا على مدار 24/7.',
    },
    {
      id: 2,
      questionEn: 'Do you offer airport transfers at Kuwait International Airport?',
      questionAr: 'هل تقدمون خدمة نقل المطار في مطار الكويت الدولي؟',
      answerEn: 'Yes, we provide VIP airport transfers covering all terminals (T1, T4, T5, and Sheikh Saad Terminal) with flight tracking.',
      answerAr: 'نعم، نقدم خدمات نقل VIP للمطار تشمل جميع المباني (T1, T4, T5 ومبنى الشيخ سعد) مع تتبع الرحلات.',
    },
    {
      id: 3,
      questionEn: 'Can companies get monthly contracts?',
      questionAr: 'هل يمكن للشركات الحصول على عقود شهرية؟',
      answerEn: 'Yes, HADIR offers customized corporate solutions including monthly and annual dedicated chauffeur contracts.',
      answerAr: 'نعم، تقدم حاضِر حلولاً مخصصة للشركات تشمل عقود سائقين شهرية وسنوية.',
    },
    {
      id: 4,
      questionEn: 'Which vehicles are available?',
      questionAr: 'ما هي المركبات المتاحة؟',
      answerEn: 'Our fleet includes Luxury Sedans (S-Class, BMW 7 Series), Executive SUVs (Cullinan, Bentayga), and VIP Vans.',
      answerAr: 'يتضمن أسطولنا سيارات سيدان فاخرة (S-Class, BMW Series 7)، ودفع رباعي تنفيذي (Cullinan, Bentayga)، وفان VIP.',
    },
    {
      id: 5,
      questionEn: 'Are all drivers background-checked?',
      questionAr: 'هل تم فحص سجل جميع السائقين؟',
      answerEn: 'All HADIR drivers undergo rigorous background checks, professional training, and defensive driving certifications.',
      answerAr: 'يخضع جميع سائقي حاضِر لفحوصات خلفية صارمة وتدريب محترف وشهادات قيادة وقائية.',
    },
    {
      id: 6,
      questionEn: 'What payment methods do you accept?',
      questionAr: 'ما هي طرق الدفع المقبولة؟',
      answerEn: 'We accept K-NET, Credit Cards, Corporate Bank Transfers, and monthly corporate invoicing.',
      answerAr: 'نقبل K-NET، البطاقات الائتمانية، التحويلات المصرفية للشركات، والفواتير الشهرية للمؤسسات.',
    },
    {
      id: 7,
      questionEn: 'Is 24/7 customer service available?',
      questionAr: 'هل خدمة العملاء متاحة على مدار 24/7؟',
      answerEn: 'Yes, our operations center and support staff are available 24/7/365 for bookings and live route updates.',
      answerAr: 'نعم، مركز عملياتنا وفريق الدعم متاحون على مدار 24/7/365 للحجوزات وتحديثات المسار المباشرة.',
    },
    {
      id: 8,
      questionEn: 'Can I request a specific vehicle color?',
      questionAr: 'هل يمكنني طلب لون معين للمركبة؟',
      answerEn: 'Yes, upon advance booking, we fulfill specific color requests for executive and delegation trips.',
      answerAr: 'نعم، عند الحجز المسبق، نلبي طلبات الألوان المحددة للرحلات التنفيذية والوفود.',
    },
    {
      id: 9,
      questionEn: 'What is the cancellation policy?',
      questionAr: 'ما هي سياسة الإلغاء؟',
      answerEn: 'Flexible cancellations are permitted up to 2 hours before the scheduled pickup time for single bookings.',
      answerAr: 'يُسمح بمرونة الإلغاء حتى ساعتين قبل موعد الالتقاط المحدد للحجوزات الفردية.',
    },
    {
      id: 10,
      questionEn: 'Do you provide multilingual chauffeurs?',
      questionAr: 'هل توفرون سائقين يتحدثون لغات متعددة؟',
      answerEn: 'Yes, our chauffeurs speak fluent English and Arabic, with native speakers available for international guests.',
      answerAr: 'نعم، يتحدث سائقونا الإنجليزية والعربية بطلاقة، مع توفر متحدثين أصليين للضيوف الدوليين.',
    },
    {
      id: 11,
      questionEn: 'Is fuel and toll included in the pricing?',
      questionAr: 'هل الوقود والرسوم مشمولة في السعر؟',
      answerEn: 'All pricing is fully transparent with no hidden costs—fuel and standard route fees are included.',
      answerAr: 'جميع الأسعار شفافة تماماً بدون تكاليف خفية - الوقود ورسوم الطرق القياسية مشمولة.',
    },
    {
      id: 12,
      questionEn: 'Can I customize a multi-city route?',
      questionAr: 'هل يمكنني تخصيص مسار متعدد المدن؟',
      answerEn: 'Yes, custom multi-stop and inter-city itineraries can be arranged directly via our WhatsApp support.',
      answerAr: 'نعم، يمكن ترتيب مسارات مخصصة متعددة المحطات عبر دعم الواتساب المباشر.',
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const halfLength = Math.ceil(faqs.length / 2);
  const leftColFaqs = faqs.slice(0, halfLength);
  const rightColFaqs = faqs.slice(halfLength);

  const renderFAQCard = (item: FAQItem) => {
    const isOpen = openId === item.id;

    return (
      <div
        key={item.id}
        className="bg-white rounded-xl border border-gray-200/80 shadow-sm transition-all duration-300 overflow-hidden"
      >
        <button
          onClick={() => toggleFAQ(item.id)}
          className="w-full px-5 py-4 text-left rtl:text-right flex items-center justify-between gap-3 cursor-pointer hover:bg-gray-50/80 transition-colors"
        >
          <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
            {isAr ? item.questionAr : item.questionEn}
          </span>
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
              isOpen
                ? 'bg-[#d9a036] text-white rotate-180'
                : 'bg-[#d9a036]/10 text-[#d9a036]'
            }`}
          >
            {isOpen ? (
              <Minus className="w-3.5 h-3.5 stroke-[3]" />
            ) : (
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
            )}
          </span>
        </button>

        {/* Smooth Expandable Answer Box */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-4 pt-2 border-t border-gray-100 text-xs text-gray-500 font-medium leading-relaxed bg-gray-50/40">
              {isAr ? item.answerAr : item.answerEn}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50/50" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#d9a036]">
            <span>❓</span>
            <span>{isAr ? 'الأسئلة الشائعة' : 'GOT QUESTIONS?'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            {isAr ? 'الأسئلة الأكثر تكراراً' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-3.5 sm:space-y-4">
            {leftColFaqs.map((faq) => renderFAQCard(faq))}
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {rightColFaqs.map((faq) => renderFAQCard(faq))}
          </div>
        </div>
      </div>
    </section>
  );
}