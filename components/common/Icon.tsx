/* ==========================================================
 * Icon: small emoji before a text. Hidden from screen readers
 * and search engines text, so the real text stays clean.
 * ========================================================== */
export default function Icon({ symbol }: { symbol?: string }) {
  if (!symbol) return null;
  return (
    <>
      <span aria-hidden="true">{symbol}</span>{' '}
    </>
  );
}
