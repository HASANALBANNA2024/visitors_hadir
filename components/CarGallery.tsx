'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Car, Check, Calendar, Shield, Sparkles } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export interface Vehicle {
  id: string;
  name: string;
  category: 'sedans' | 'suvs' | 'vans' | 'buses'; // new categories add if want
  categoryLabelEn: string;
  categoryLabelAr: string;
  badgeEn: string;
  badgeAr: string;
  imageSrc: string;
  featuresEn: string[];
  featuresAr: string[];
}

/* ============================================================
 * CAR CARDS. To ADD a card: copy one { ... } block, change it.
 *  - category: 'sedans' | 'suvs' | 'vans' | 'buses'
 *  - the photo FILLS the top of the card (any size works, 3:2 landscape looks best)
 *  - imageSrc: put the photo in the folder of its category and write
 *    '/images/cargallery/<category>/name.jpg'  (no photo = icon is shown)
 *    folders: cargallery/sedans, cargallery/suvs, cargallery/vans, cargallery/buses
 *  - id must be different for every card
 * The cards appear automatically, no other change needed.
 * ============================================================ */
const VEHICLES: Vehicle[] = [
    {
      id: '1',
      name: 'Mercedes Benz S-Class',
      category: 'sedans',
      categoryLabelEn: 'LUXURY SEDAN',
      categoryLabelAr: 'سيدان فاخرة',
      badgeEn: 'LUXURY',
      badgeAr: 'فاخرة',
      imageSrc: '/images/cargallery/sedans/mercedes-s-class.jpg',
      featuresEn: ['Seats up to 4 passengers', 'VIP comfort & premium tech', 'Perfect for executive travel'],
      featuresAr: ['تسع حتى 4 ركاب', 'راحة VIP وتقنيات ممتازة', 'مثالية للسفر التنفيذي'],
    },
    {
      id: '2',
      name: 'BMW 7 Series',
      category: 'sedans',
      categoryLabelEn: 'LUXURY SEDAN',
      categoryLabelAr: 'سيدان فاخرة',
      badgeEn: 'PREMIUM',
      badgeAr: 'ممتازة',
      imageSrc: '/images/cargallery/sedans/bmw-7-series.jpg',
      featuresEn: ['Seats up to 5 passengers', 'Senior execs & delegations', 'Advanced features suite'],
      featuresAr: ['تسع حتى 5 ركاب', 'كبار التنفيذيين والوفود', 'مجموعة ميزات متقدمة'],
    },
    {
      id: '13',
      name: 'Rolls-Royce Phantom',
      category: 'sedans',
      categoryLabelEn: 'ULTRA-LUXURY SEDAN',
      categoryLabelAr: 'سيدان فاخرة جداً',
      badgeEn: 'PRESTIGE',
      badgeAr: 'برستيج',
      imageSrc: '/images/cargallery/sedans/rolls-royce-phantom.jpg',
      featuresEn: ['Seats up to 4 passengers', 'Weddings, royals & VIP events', 'The ultimate in refinement'],
      featuresAr: ['تسع حتى 4 ركاب', 'الأعراس والشخصيات الهامة وفعاليات VIP', 'قمة الرقي والفخامة'],
    },
    {
      id: '15',
      name: 'Genesis G90',
      category: 'sedans',
      categoryLabelEn: 'EXECUTIVE SEDAN',
      categoryLabelAr: 'سيدان تنفيذية',
      badgeEn: 'EXECUTIVE',
      badgeAr: 'تنفيذية',
      imageSrc: '/images/cargallery/sedans/genesis-g90.jpg',
      featuresEn: ['Seats up to 4 passengers', 'Business & corporate travel', 'Quiet, premium cabin'],
      featuresAr: ['تسع حتى 4 ركاب', 'سفر الأعمال والشركات', 'مقصورة هادئة وفاخرة'],
    },
    {
      id: '11',
      name: 'Lexus LS',
      category: 'sedans',
      categoryLabelEn: 'LUXURY SEDAN',
      categoryLabelAr: 'سيدان فاخرة',
      badgeEn: 'LUXURY',
      badgeAr: 'فاخرة',
      imageSrc: '/images/cargallery/sedans/lexus-ls.jpg',
      featuresEn: ['Seats up to 4 passengers', 'Hotel & business transfers', 'Quiet, refined comfort'],
      featuresAr: ['تسع حتى 4 ركاب', 'تنقلات الفنادق والأعمال', 'راحة هادئة وراقية'],
    },
    {
      id: '3',
      name: 'Kia K8',
      category: 'sedans',
      categoryLabelEn: 'EXECUTIVE SEDAN',
      categoryLabelAr: 'سيدان تنفيذية',
      badgeEn: 'EXECUTIVE',
      badgeAr: 'تنفيذية',
      imageSrc: '/images/cargallery/sedans/kia-k8.jpg',
      featuresEn: ['Seats up to 5 passengers', 'Corporate & hotel transfers', 'Reliable & spacious comfort'],
      featuresAr: ['تسع حتى 5 ركاب', 'تنقلات الشركات والفنادق', 'راحة واسعة وموثوقة'],
    },
    {
      id: '6',
      name: 'Rolls-Royce Cullinan',
      category: 'suvs',
      categoryLabelEn: 'ULTRA-LUXURY SUV',
      categoryLabelAr: 'دفع رباعي فاخر جداً',
      badgeEn: 'PRESTIGE',
      badgeAr: 'برستيج',
      imageSrc: '/images/cargallery/suvs/rolls-royce-cullinan.jpg',
      featuresEn: ['Seats up to 5 passengers', 'Royals, VIPs & special events', 'The pinnacle of luxury'],
      featuresAr: ['تسع حتى 5 ركاب', 'العائلات الملكية والشخصيات الهامة', 'قمة الفخامة والرفاهية'],
    },
    {
      id: '5',
      name: 'Bentley Bentayga',
      category: 'suvs',
      categoryLabelEn: 'ULTRA-LUXURY SUV',
      categoryLabelAr: 'دفع رباعي فاخر جداً',
      badgeEn: 'ULTRA-LUXURY',
      badgeAr: 'فخامة مطلقة',
      imageSrc: '/images/cargallery/suvs/bentley-bentayga.jpg',
      featuresEn: ['Seats up to 5 passengers', 'VIP executives & premium events', 'Unmatched luxury & prestige'],
      featuresAr: ['تسع حتى 5 ركاب', 'تنفيذيون VIP وفعاليات راقية', 'فخامة وهيبة لا مثيل لها'],
    },
    {
      id: '16',
      name: 'Range Rover Autobiography',
      category: 'suvs',
      categoryLabelEn: 'LUXURY SUV',
      categoryLabelAr: 'دفع رباعي فاخر',
      badgeEn: 'LUXURY',
      badgeAr: 'فاخرة',
      imageSrc: '/images/cargallery/suvs/range-rover.jpg',
      featuresEn: ['Seats up to 4 passengers', 'VIP guests & executives', 'Refined all-terrain comfort'],
      featuresAr: ['تسع حتى 4 ركاب', 'ضيوف VIP وتنفيذيون', 'راحة راقية على كل الطرق'],
    },
    {
      id: '17',
      name: 'Cadillac Escalade',
      category: 'suvs',
      categoryLabelEn: 'EXECUTIVE SUV',
      categoryLabelAr: 'دفع رباعي تنفيذي',
      badgeEn: 'EXECUTIVE',
      badgeAr: 'تنفيذية',
      imageSrc: '/images/cargallery/suvs/cadillac-escalade.jpg',
      featuresEn: ['Seats up to 6 passengers', 'Delegations & airport transfers', 'Bold presence & space'],
      featuresAr: ['تسع حتى 6 ركاب', 'الوفود ونقل المطار', 'حضور قوي ومساحة واسعة'],
    },
    {
      id: '12',
      name: 'GMC Yukon',
      category: 'suvs',
      categoryLabelEn: 'EXECUTIVE SUV',
      categoryLabelAr: 'دفع رباعي تنفيذي',
      badgeEn: 'EXECUTIVE',
      badgeAr: 'تنفيذية',
      imageSrc: '/images/cargallery/suvs/gmc-yukon.jpg',
      featuresEn: ['Seats up to 6 passengers', 'Families, delegations & airport', 'Spacious & commanding ride'],
      featuresAr: ['تسع حتى 6 ركاب', 'العائلات والوفود والمطار', 'رحلة واسعة ومريحة'],
    },
    {
      id: '18',
      name: '2026 Lexus LX 600',
      category: 'suvs',
      categoryLabelEn: 'LUXURY SUV',
      categoryLabelAr: 'دفع رباعي فاخر',
      badgeEn: 'PREMIUM',
      badgeAr: 'ممتازة',
      imageSrc: '/images/cargallery/suvs/posche.jpeg',
      featuresEn: ['Seats up to 4 passengers', 'Business & city travel', 'Sporty, smooth drive'],
      featuresAr: ['تسع حتى 4 ركاب', 'الأعمال والتنقل داخل المدينة', 'قيادة رياضية وسلسة'],
    },
    {
      id: '19',
      name: 'Toyota Land Cruiser',
      category: 'suvs',
      categoryLabelEn: 'EXECUTIVE SUV',
      categoryLabelAr: 'دفع رباعي تنفيذي',
      badgeEn: 'RELIABLE',
      badgeAr: 'موثوقة',
      imageSrc: '/images/cargallery/suvs/toyota-land-cruiser.jpg',
      featuresEn: ['Seats up to 7 passengers', 'Desert & family trips', 'Rugged, dependable comfort'],
      featuresAr: ['تسع حتى 7 ركاب', 'رحلات الصحراء والعائلات', 'راحة متينة وموثوقة'],
    },
    {
      id: '20',
      name: 'Lamborghini Urus',
      category: 'suvs',
      categoryLabelEn: 'SUPER SPORTS SUV',
      categoryLabelAr: 'سيارة رياضية فائقة',
      badgeEn: 'SPORTS',
      badgeAr: 'رياضية',
      imageSrc: '/images/cargallery/suvs/lamborghini-urus.jpg',
      featuresEn: ['Seats up to 4 passengers', 'V8 Twin-Turbo performance', 'Ultimate luxury & speed'],
      featuresAr: ['تسع حتى 4 ركاب', 'أداء V8 ثنائي التيربو', 'أقصى درجات الفخامة والسرعة'],
    },
    {
      id: '21',
      name: 'Mercedes-Benz Sprinter VIP',
      category: 'vans',
      categoryLabelEn: 'VIP VAN',
      categoryLabelAr: 'فان VIP',
      badgeEn: 'GROUP',
      badgeAr: 'مجموعات',
      imageSrc: '/images/cargallery/vans/mercedes-sprinter-vip.jpg',
      featuresEn: ['Seats up to 12 passengers', 'Corporate teams & delegations', 'VIP interior for long trips'],
      featuresAr: ['تسع حتى 12 راكباً', 'فرق الشركات والوفود', 'مقصورة VIP للرحلات الطويلة'],
    },
    {
      id: '8',
      name: 'Kia Carnival',
      category: 'vans',
      categoryLabelEn: 'VIP VAN',
      categoryLabelAr: 'فان VIP',
      badgeEn: 'GROUP',
      badgeAr: 'مجموعات',
      imageSrc: '/images/cargallery/vans/kia-carnival.png',
      featuresEn: ['Seats up to 10 passengers', 'Corporate teams & events', 'Comfort for longer trips'],
      featuresAr: ['تسع حتى 10 ركاب', 'فرق الشركات والفعاليات', 'راحة للرحلات الطويلة'],
    },
    {
      id: '22',
      name: 'Toyota Hiace VIP',
      category: 'vans',
      categoryLabelEn: 'PREMIUM VAN',
      categoryLabelAr: 'فان متميز',
      badgeEn: 'GROUP',
      badgeAr: 'مجموعات',
      imageSrc: '/images/cargallery/vans/toyota-hiace.jpeg',
      featuresEn: ['Seats up to 9 passengers', 'Groups & airport transfers', 'Easy access, comfy seats'],
      featuresAr: ['تسع حتى 9 ركاب', 'مجموعات ونقل المطار', 'دخول سهل ومقاعد مريحة'],
    },
    {
      id: '23',
      name: 'Mercedes-Benz Tourismo Coach',
      category: 'buses',
      categoryLabelEn: 'PREMIUM BUS',
      categoryLabelAr: 'حافلة متميزة',
      badgeEn: 'VIP',
      badgeAr: 'VIP',
      imageSrc: '/images/cargallery/buses/mercedes-tourismo-coach.jpg',
      featuresEn: ['Seats up to 50 passengers', 'Long routes & large groups', 'Reclining seats & Wi-Fi'],
      featuresAr: ['تسع حتى 50 راكباً', 'الرحلات الطويلة والمجموعات الكبيرة', 'مقاعد قابلة للإمالة وواي فاي'],
    },
    {
      id: '10',
      name: 'VIP Coach Bus',
      category: 'buses',
      categoryLabelEn: 'PREMIUM BUS',
      categoryLabelAr: 'حافلة متميزة',
      badgeEn: 'VIP',
      badgeAr: 'VIP',
      imageSrc: '/images/cargallery/buses/vip-coach-bus.jpg',
      featuresEn: ['Seats up to 45 passengers', 'Large corporate groups', 'Luggage space & Wi-Fi'],
      featuresAr: ['تسع حتى 45 راكباً', 'مجموعات الشركات الكبيرة', 'مساحة أمتعة وواي فاي'],
    },
    {
      id: '9',
      name: 'Luxury Coaster Bus',
      category: 'buses',
      categoryLabelEn: 'PREMIUM BUS',
      categoryLabelAr: 'حافلة متميزة',
      badgeEn: 'GROUP',
      badgeAr: 'مجموعات',
      imageSrc: '/images/cargallery/buses/parking-area-bus.png',
      featuresEn: ['Seats up to 22 passengers', 'Delegations & events', 'Air-conditioned comfort'],
      featuresAr: ['تسع حتى 22 راكباً', 'الوفود والفعاليات', 'تكييف ومقاعد مريحة'],
    },
    {
      id: '24',
      name: 'Hyundai County Minibus',
      category: 'buses',
      categoryLabelEn: 'PREMIUM BUS',
      categoryLabelAr: 'حافلة متميزة',
      badgeEn: 'GROUP',
      badgeAr: 'مجموعات',
      imageSrc: '/images/cargallery/buses/hyundai-bus.jpeg',
      featuresEn: ['Seats up to 25 passengers', 'Staff & event transport', 'Air-conditioned comfort'],
      featuresAr: ['تسع حتى 25 راكباً', 'نقل الموظفين والفعاليات', 'تكييف ومقاعد مريحة'],
    },
    {
  id: '25',
  name: 'Nissan Patrol Platinum',
  category: 'suvs',
  categoryLabelEn: 'PREMIUM LUXURY SUV',
  categoryLabelAr: 'دفع رباعي فاخر مميز',
  badgeEn: 'PREMIUM LUXURY',
  badgeAr: 'فخامة وتميز',
  imageSrc: '/images/cargallery/suvs/nissan-patrol-platinum.jpeg',
  featuresEn: [
    'Seats up to 7 passengers',
    'VIP transport & executive travel',
    'Superior comfort & desert capability'
  ],
  featuresAr: [
    'تسع حتى 7 ركاب',
    'تنقلات كبار الشخصيات والسفر التنفيذي',
    'راحة فائقة وقوة أداء لا مثيل لها'
  ],
},
  ];

/* Category tabs. id must match a `category` above. */
const TABS = [
  { id: 'all', labelEn: 'ALL VEHICLES', labelAr: 'جميع المركبات' },
  { id: 'sedans', labelEn: 'SEDANS', labelAr: 'سيدان' },
  { id: 'suvs', labelEn: 'SUVS', labelAr: 'دفع رباعي' },
  { id: 'vans', labelEn: 'VANS', labelAr: 'فان' },
  { id: 'buses', labelEn: 'BUSES', labelAr: 'حافلات' },
  // { id: 'sports', labelEn: 'SPORTS', labelAr: 'سيارات رياضية' }, new categories add 
];

/* Which form "Vehicle Class" option each category fills in */
const CLASS_OF: { [key: string]: string } = {
  sedans: 'Luxury Sedan',
  suvs: 'Executive SUV',
  vans: 'VIP Van',
  buses: 'Premium Bus',
  // sports: 'Sports Supercar', new categories add 
};

export default function CarGallery() {
  const currentLang = useSelector((state: RootState) => state.language.lang);
  const isAr = currentLang === 'AR';

  const [activeTab, setActiveTab] = useState<string>('all');
  const [imgErrors, setImgErrors] = useState<{ [key: string]: boolean }>({});

  // Filter vehicles by active tab
  const filteredVehicles =
    activeTab === 'all'
      ? VEHICLES
      : VEHICLES.filter((v) => v.category === activeTab);

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  // Reserve: fill the booking form (Hero.tsx listens) and scroll up to it
  const handleReserve = (car: Vehicle) => {
    window.dispatchEvent(
      new CustomEvent('select-vehicle', { detail: { name: car.name, vehicleClass: CLASS_OF[car.category] } })
    );
    document.getElementById('book-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50/50" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="w-[90%] max-w-[2000px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#d9a036]">
            <span>🏆</span>
            <span>{isAr ? 'مجموعة المركبات الممتازة' : 'PREMIUM VEHICLE COLLECTION'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            {isAr ? 'اختر فخامتك' : 'Choose Your Luxury'}
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            {isAr
              ? 'مركبات مختارة بعناية من أفضل المصنعين في العالم، مصانة بدقة للتميز التنفيذي'
              : 'Hand-picked vehicles from the world’s finest manufacturers, each meticulously maintained for executive excellence'}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 uppercase tracking-wider cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#d9a036] text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80'
              }`}
            >
              {isAr ? tab.labelAr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVehicles.map((car) => {
            const hasError = imgErrors[car.id];

            return (
              <div
                key={car.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Top Box for Image/Icon */}
                <div className="relative bg-gradient-to-b from-gray-100/80 to-gray-50 h-52 w-full flex items-center justify-center overflow-hidden">
                  {/* Badge: always on the picture, top right (top left in Arabic) */}
                  <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 bg-[#d9a036] text-white text-[9px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider z-10 shadow-md">
                    {isAr ? car.badgeAr : car.badgeEn}
                  </span>

                  {/* Dynamic Image or Icon Fallback */}
                  {!hasError ? (
                    <Image
                      src={car.imageSrc}
                      alt={car.name}
                      fill
                      unoptimized={car.imageSrc.endsWith(".svg")}
                      quality={90} // sharp photos (allowed in next.config.ts -> images.qualities)
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={() => handleImageError(car.id)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 text-[#d9a036] p-4">
                      <div className="w-16 h-16 rounded-2xl bg-[#d9a036]/10 flex items-center justify-center border border-[#d9a036]/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                        <Car className="w-9 h-9 text-[#d9a036]" />
                      </div>
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-gray-400 mt-1">
                        {isAr ? 'مركبة فاخرة' : 'LUXURY FLEET'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[9px] font-extrabold text-[#d9a036] tracking-widest uppercase block mb-1">
                      ♦ {isAr ? car.categoryLabelAr : car.categoryLabelEn}
                    </span>

                    <h3 className="text-base font-black text-gray-900 mb-3">
                      {car.name}
                    </h3>

                    <ul className="space-y-2 mb-4">
                      {(isAr ? car.featuresAr : car.featuresEn).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-500 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#d9a036] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Reserve Button */}
                  <button
                    onClick={() => handleReserve(car)}
                    className="w-full bg-[#d9a036] hover:bg-[#c48e2e] text-white font-bold py-2.5 px-4 rounded-lg text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{isAr ? 'احجز الآن' : 'RESERVE NOW'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredVehicles.length === 0 && (
          <p className="text-center text-sm text-gray-500 font-medium py-10">
            {isAr ? 'مركبات هذه الفئة متاحة عند الطلب. تواصل معنا.' : 'Vehicles in this category are available on request. Contact us.'}
          </p>
        )}

      </div>
    </section>
  );
}