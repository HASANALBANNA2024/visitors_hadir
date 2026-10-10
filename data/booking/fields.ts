import { L } from '../helpers';

/* BOOKING FORM: label and placeholder of every field */
export const FIELDS = {
  name: { label: L('Full Name', 'الاسم الكامل'), hint: L('John Al-Sabah', 'أحمد الصباح') },
  phone: { label: L('Phone Number', 'رقم الهاتف'), hint: L('+965 9000 0000', '+965 9000 0000') },
  service: { label: L('Service Type', 'نوع الخدمة'), hint: L('Select Service', 'اختر الخدمة') },
  vehicleClass: { label: L('Vehicle Class', 'فئة السيارة'), hint: L('Select Vehicle', 'اختر السيارة') },
  pickup: {
    label: L('Pickup Location', 'موقع الالتقاط'),
    hint: L('Airport, Hotel, Office or Area', 'المطار، الفندق، المكتب أو المنطقة'),
  },
  duration: { label: L('Duration', 'المدة'), hint: L('Hours', 'ساعات') },
  passengers: { label: L('Passengers', 'الركاب'), hint: L('1', '1') },
};
