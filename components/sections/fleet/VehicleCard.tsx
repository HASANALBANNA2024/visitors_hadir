'use client';
/* ==========================================================
 * VehicleCard: photo, badge, category, name, 3 features, button
 * "Reserve now" pre-selects the vehicle class in the booking
 * form and scrolls up to the form.
 * ========================================================== */
import { Icon, ImageSlot } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';
import { scrollToId } from '@/lib/scroll';
import { FLEET_BUTTON } from '@/data/fleet';
import type { Vehicle } from '@/data/types';

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { t } = useLang();
  const { events } = useBookingBloc();

  const onReserve = () => {
    events.vehiclePreselected(vehicle.type, vehicle.name);
    scrollToId('booking');
  };

  return (
    <article className="vehicle-card">
      {/* Photo (or emoji placeholder) + badge */}
      <div className="vehicle-image">
        <ImageSlot src={vehicle.image} alt={vehicle.name} fallback={vehicle.emoji} sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="vehicle-badge">{t(vehicle.badge)}</span>
      </div>

      {/* Details */}
      <div className="vehicle-info">
        <div className="vehicle-category">
          <Icon symbol={vehicle.category.icon} />
          {t(vehicle.category.text)}
        </div>
        <h3 className="vehicle-name">{vehicle.name}</h3>
        <ul className="vehicle-features">
          {vehicle.features.map((feature) => <li key={feature.en}>{t(feature)}</li>)}
        </ul>
        <button type="button" className="request-quote-btn" onClick={onReserve}>
          <Icon symbol={FLEET_BUTTON.icon} />
          {t(FLEET_BUTTON.text)}
        </button>
      </div>
    </article>
  );
}
