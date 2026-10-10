'use client';
/* ==========================================================
 * SECTION 4: FLEET
 * = header + FleetTabs + grid of VehicleCard
 * Data: data/fleet.ts (vehicles, tabs, texts)
 * ========================================================== */
import { Section, SectionHeader } from '@/components/common';
import { useLang } from '@/hooks/useLang';
import { useFleetBloc } from '@/store/blocs/fleet/useFleetBloc';
import { FLEET_EMPTY, FLEET_INTRO, VEHICLES } from '@/data/fleet';
import FleetTabs from './FleetTabs';
import VehicleCard from './VehicleCard';

export default function Fleet() {
  const { t } = useLang();
  const { state } = useFleetBloc();
  const vehicles = VEHICLES.filter((v) => state.filter === 'all' || v.type === state.filter);

  return (
    <Section id="fleet" className="fleet" labelledBy="fleet-title">
      <SectionHeader
        tagline={FLEET_INTRO.tagline}
        title={FLEET_INTRO.title}
        description={FLEET_INTRO.description}
        titleId="fleet-title"
      />
      <FleetTabs />
      <div className="fleet-grid">
        {vehicles.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
        {vehicles.length === 0 && <p className="fleet-empty">{t(FLEET_EMPTY)}</p>}
      </div>
    </Section>
  );
}
