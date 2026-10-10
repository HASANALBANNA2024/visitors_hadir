/* ==========================================================
 * JsonLd: injects structured data (schema.org) into the page.
 * "<" is escaped so the JSON can never break out of the tag.
 * ========================================================== */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
