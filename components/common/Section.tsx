/* ==========================================================
 * Section: <section> wrapper with an id (for menu links)
 * and aria-labelledby (points to the section title id)
 * ========================================================== */
interface Props {
  id?: string;
  className: string;
  labelledBy?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, labelledBy, children }: Props) {
  return (
    <section id={id} className={className} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
