'use client';
/* ==========================================================
 * FooterServiceLinks: footer column with the services.
 * Click = choose that service in the booking form + scroll to it.
 * Data: data/footer.ts -> FOOTER_SERVICE_LINKS
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { useBookingBloc } from '@/store/blocs/booking/useBookingBloc';
import { scrollToId } from '@/lib/scroll';
import { FOOTER, FOOTER_SERVICE_LINKS } from '@/data/footer';

export default function FooterServiceLinks() {
  const { t } = useLang();
  const { events } = useBookingBloc();

  const onSelect = (e: React.MouseEvent<HTMLAnchorElement>, service: string) => {
    e.preventDefault();
    events.servicePreselected(service);
    scrollToId('booking');
  };

  return (
    <div className="footer-section">
      <h3>{t(FOOTER.servicesTitle)}</h3>
      <ul>
        {FOOTER_SERVICE_LINKS.map((l) => (
          <li key={l.service}>
            <a href="#booking" onClick={(e) => onSelect(e, l.service)}>{t(l.label)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
