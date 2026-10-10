import { icon, L } from '../helpers';

/* BOOKING FORM (card in the hero): headline texts */
export const BOOKING = {
  label: icon('⚡', L('INSTANT BOOKING', 'حجز فوري')),
  title: L('Secure Your Ride Today', 'احجز رحلتك اليوم'),
  description: L(
    'Premium vehicles dispatched in minutes. WhatsApp confirmation available.',
    'سيارات متميزة يتم إرسالها في دقائق. تأكيد واتس آب متاح.',
  ),
  submit: icon('📱', L('REQUEST ON WHATSAPP', 'اطلب عبر واتس آب')),
  note: L(
    '✅ Response within 10 minutes | ✅ Professional drivers | ✅ Best rates',
    '✅ رد في 10 دقائق | ✅ سائقون احترافيون | ✅ أفضل الأسعار',
  ),
  success: L('Thank you! Your request is being sent on WhatsApp.', 'شكراً لك! يتم إرسال طلبك عبر واتس آب.'),
  greeting: L('Hello HADIR Visitors, I would like to book a vehicle.', 'مرحباً هادر فيزيتورز، أود حجز سيارة.'),
};
