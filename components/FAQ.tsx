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
      answerEn: 'Yes, HADIR VISITORS offers customized corporate solutions including monthly and annual dedicated chauffeur contracts.',
      answerAr: 'نعم، تقدم حاضِر فيزيتورز حلولاً مخصصة للشركات تشمل عقود سائقين شهرية وسنوية.',
    },
    {
      id: 5,
      questionEn: 'Are drivers from third-party companies used to serve guests?',
      questionAr: 'هل يتم استخدام سائقين من شركات أخرى لخدمة الضيوف؟',
      answerEn: 'We provide guests exclusively with our own company drivers and do not permit drivers from third-party companies to serve our guests.',
      answerAr: 'نحن نوفر للضيوف سائقين تابعين لشركتنا حصرياً، ولا نسمح بسائقين من شركات خارجية لخدمة ضيوفنا.',
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
  id: 9,
  questionEn: 'What is the cancellation policy?',
  questionAr: 'ما هي سياسة الإلغاء؟',
  answerEn: 'Upon receiving a guest booking via email or WhatsApp, we immediately reserve the vehicle and assign a driver in our system. Therefore, we kindly request that any booking cancellation be communicated at least 24 hours in advance to ensure smooth operations and avoid unnecessary scheduling commitments.',
  answerAr: 'بمجرد استلام حجز الضيف عبر البريد الإلكتروني أو الواتساب، نقوم فورًا بحجز المركبة وتعيين سائق في نظامنا. لذلك، نرجو التكرم بإبلاغنا بإلغاء الحجز قبل 24 ساعة على الأقل لضمان سير العمليات بسلاسة وتجنب أي التزامات غير ضرورية في الجدول الزمني.',
},
    {
      id: 10,
      questionEn: 'Do you provide multilingual chauffeurs?',
      questionAr: 'هل توفرون سائقين يتحدثون لغات متعددة؟',
      answerEn: 'Yes, our chauffeurs speak fluent English and Arabic, with native speakers available for international guests.',
      answerAr: 'نعم، يتحدث سائقونا الإنجليزية والعربية بطلاقة، مع توفر متحدثين أصليين للضيوف الدوليين.',
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const renderFAQCard = (item: FAQItem) => {
    const isOpen = openId === item.id;

    return (
      <div
        key={item.id}
        className="bg-white rounded-xl border border-gray-200/80 shadow-sm transition-all duration-300 overflow-hidden"
      >
        <button
          onClick={() => toggleFAQ(item.id)}
          aria-expanded={isOpen}
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
      <div className="w-[90%] max-w-[2000px] mx-auto">
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#d9a036]">
            <span>❓</span>
            <span>{isAr ? 'الأسئلة الشائعة' : 'GOT QUESTIONS?'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            {isAr ? 'الأسئلة الأكثر تكراراً' : 'Frequently Asked Questions'}
          </h2>
        </div>

        {/* 10 questions, 2 in every row (5 rows). Click = the answer opens below the question. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-start">
          {faqs.map((faq) => renderFAQCard(faq))}
        </div>
      </div>
    </section>
  );
}