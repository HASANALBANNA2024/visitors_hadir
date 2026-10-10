/* ==========================================================
 * FloatingActions: the two round buttons in the bottom corner
 *   1. Back to top   2. WhatsApp chat
 * ========================================================== */
import BackToTop from './BackToTop';
import WhatsAppFloat from './WhatsAppFloat';

export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <BackToTop />
      <WhatsAppFloat />
    </div>
  );
}
