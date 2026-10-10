/* ==========================================================
 * ImageSlot: shows a photo when `src` is set, otherwise the
 * fallback (emoji / letter). The parent box must have
 * position: relative and a fixed height (all our boxes do).
 * Works with /public paths and https links (next/image).
 * ========================================================== */
import Image from 'next/image';

interface Props {
  src?: string;
  alt: string;
  fallback: React.ReactNode;
  sizes?: string;
  priority?: boolean;
}

export default function ImageSlot({ src, alt, fallback, sizes = '100vw', priority = false }: Props) {
  if (!src) return <span aria-hidden="true">{fallback}</span>;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={src.toLowerCase().endsWith('.svg')}
      style={{ objectFit: 'cover' }}
    />
  );
}
