'use client';
/* ==========================================================
 * FleetTabs: filter buttons (All / Sedans / SUVs / Vans / Buses)
 * Event: filterSelected (store/blocs/fleet)
 * Data: data/fleet.ts -> FLEET_TABS
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useFleetBloc } from '@/store/blocs/fleet/useFleetBloc';
import { FLEET_TABS } from '@/data/fleet';
import { UI } from '@/data/ui';

export default function FleetTabs() {
  const { t } = useLang();
  const { state, events } = useFleetBloc();
  return (
    <div className="filter-tabs" role="group" aria-label={t(UI.fleetFilter)}>
      {FLEET_TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          className={state.filter === tab.key ? 'filter-tab active' : 'filter-tab'}
          aria-pressed={state.filter === tab.key}
          onClick={() => events.filterSelected(tab.key)}
        >
          {t(tab.label)}
        </button>
      ))}
    </div>
  );
}
