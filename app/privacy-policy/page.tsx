/* ============================================================
 * PAGE: Privacy Policy   (address: /privacy-policy)
 * ONE file = ONE page. Change texts / pictures here only.
 *  - slides : hero background pictures (public/images/pages/privacy/)
 *  - Every text has en (English) + ar (Arabic).
 *  - Add / delete a { title, paragraphs } block = more / fewer sections.
 * Layout is shared: components/LegalPage.tsx
 * NOTE: this is a general template. Have your client / a lawyer check it before going live.
 * ============================================================ */
import type { Metadata } from 'next';
import LegalPage, { LegalData } from '../../components/LegalPage';

const DATA: LegalData = {
  slides: [
    '/images/hero/slide-3.jpg',
    '/images/hero/slide-4.jpg',
    '/images/hero/slide-1.jpg',
    '/images/hero/slide-2.jpg',
  ],
  hero: {
    badge: { en: 'YOUR PRIVACY MATTERS', ar: 'خصوصيتك تهمنا' },
    title: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    text: {
      en: 'How HADIR VISITORS collects, uses and protects your personal information.',
      ar: 'كيف تجمع حاضِر فيزيتورز معلوماتك الشخصية وتستخدمها وتحميها.',
    },
  },
  updated: { en: 'Last updated: October 2026', ar: 'آخر تحديث: أكتوبر 2026' },
  sections: [
    {
      title: { en: 'Introduction', ar: 'مقدمة' },
      paragraphs: [
        {
          en: 'HADIR VISITORS ("we", "us") respects your privacy. This policy explains what information we collect when you visit our website or book a service, how we use it and the choices you have.',
          ar: 'تحترم حاضِر فيزيتورز ("نحن") خصوصيتك. توضح هذه السياسة المعلومات التي نجمعها عند زيارتك لموقعنا أو حجزك لخدمة، وكيف نستخدمها والخيارات المتاحة لك.',
        },
      ],
    },
    {
      title: { en: 'Information We Collect', ar: 'المعلومات التي نجمعها' },
      paragraphs: [
        {
          en: 'We only collect what we need to arrange your trip. This can include:',
          ar: 'نجمع فقط ما نحتاجه لترتيب رحلتك. وقد يشمل ذلك:',
        },
      ],
      bullets: [
        { en: 'Your name and phone number', ar: 'اسمك ورقم هاتفك' },
        { en: 'Pick-up location, trip duration, number of passengers and the vehicle you choose', ar: 'موقع الاستقبال ومدة الرحلة وعدد الركاب والمركبة التي تختارها' },
        { en: 'Messages you send us by WhatsApp, phone or email', ar: 'الرسائل التي ترسلها إلينا عبر الواتساب أو الهاتف أو البريد الإلكتروني' },
        { en: 'Basic technical data such as browser type and pages visited', ar: 'بيانات تقنية أساسية مثل نوع المتصفح والصفحات التي تمت زيارتها' },
      ],
    },
    {
      title: { en: 'How The Booking Form Works', ar: 'كيف يعمل نموذج الحجز' },
      paragraphs: [
        {
          en: 'When you press "Request on WhatsApp", the details you typed are placed in a WhatsApp message to our team. The details are sent through WhatsApp, which has its own privacy policy. We do not keep the form data on our website.',
          ar: 'عند الضغط على "طلب عبر الواتساب" توضع البيانات التي كتبتها في رسالة واتساب إلى فريقنا. تُرسل البيانات عبر الواتساب الذي له سياسة خصوصية خاصة به. نحن لا نحتفظ ببيانات النموذج على موقعنا.',
        },
      ],
    },
    {
      title: { en: 'How We Use Your Information', ar: 'كيف نستخدم معلوماتك' },
      paragraphs: [
        { en: 'We use your information to:', ar: 'نستخدم معلوماتك من أجل:' },
      ],
      bullets: [
        { en: 'Confirm your booking, price and driver', ar: 'تأكيد حجزك والسعر والسائق' },
        { en: 'Contact you about your trip, changes or delays', ar: 'التواصل معك بشأن رحلتك أو أي تغييرات أو تأخير' },
        { en: 'Improve our service and our website', ar: 'تحسين خدماتنا وموقعنا' },
        { en: 'Meet legal and safety requirements', ar: 'الالتزام بالمتطلبات القانونية ومتطلبات السلامة' },
      ],
    },
    {
      title: { en: 'Sharing Your Information', ar: 'مشاركة معلوماتك' },
      paragraphs: [
        {
          en: 'We do not sell your personal information. We share it only with the chauffeur and operations team assigned to your trip, with service providers who help us run the business, or when the law requires it.',
          ar: 'نحن لا نبيع معلوماتك الشخصية. نشاركها فقط مع السائق وفريق العمليات المكلف برحلتك، ومع مزودي الخدمات الذين يساعدوننا في إدارة العمل، أو عندما يطلب القانون ذلك.',
        },
      ],
    },
    {
      title: { en: 'Cookies', ar: 'ملفات تعريف الارتباط' },
      paragraphs: [
        {
          en: 'Our website may use small files in your browser to remember your language choice and to understand how the site is used. You can delete or block them in your browser settings.',
          ar: 'قد يستخدم موقعنا ملفات صغيرة في متصفحك لتذكر اللغة التي اخترتها ولفهم كيفية استخدام الموقع. يمكنك حذفها أو حظرها من إعدادات المتصفح.',
        },
      ],
    },
    {
      title: { en: 'Data Security And Retention', ar: 'أمن البيانات والاحتفاظ بها' },
      paragraphs: [
        {
          en: 'We take reasonable steps to protect your information from loss, misuse and unauthorised access. We keep it only as long as needed for your booking, our records and legal duties.',
          ar: 'نتخذ خطوات معقولة لحماية معلوماتك من الفقدان وسوء الاستخدام والوصول غير المصرح به. نحتفظ بها فقط للمدة اللازمة لحجزك وسجلاتنا والتزاماتنا القانونية.',
        },
      ],
    },
    {
      title: { en: 'Your Rights', ar: 'حقوقك' },
      paragraphs: [
        {
          en: 'You can ask us to see, correct or delete the personal information we hold about you. Contact us using the details below and we will reply as soon as we can.',
          ar: 'يمكنك أن تطلب منا الاطلاع على معلوماتك الشخصية لدينا أو تصحيحها أو حذفها. تواصل معنا عبر البيانات أدناه وسنرد في أقرب وقت ممكن.',
        },
      ],
    },
    {
      title: { en: 'Changes To This Policy', ar: 'التغييرات على هذه السياسة' },
      paragraphs: [
        {
          en: 'We may update this policy from time to time. The latest version is always on this page with its update date.',
          ar: 'قد نحدّث هذه السياسة من وقت لآخر. تجد دائماً أحدث نسخة في هذه الصفحة مع تاريخ التحديث.',
        },
      ],
    },
    {
      title: { en: 'Contact Us', ar: 'تواصل معنا' },
      paragraphs: [
        {
          en: 'Questions about this policy? Email info@hadirvisitors.com or call +965 9677 0078. You can also reach us on WhatsApp, 24/7.',
          ar: 'لديك أسئلة حول هذه السياسة؟ راسلنا على info@hadirvisitors.com أو اتصل على ‎+965 9677 0078. يمكنك أيضاً التواصل معنا عبر الواتساب على مدار الساعة.',
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: 'Privacy Policy | HADIR VISITORS',
  description: 'How HADIR VISITORS collects, uses and protects your personal information when you visit our website or book a chauffeur service in Kuwait.',
  alternates: { canonical: '/privacy-policy' },
};

export default function Page() {
  return <LegalPage data={DATA} />;
}
