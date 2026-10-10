/* ==========================================================
 * ContactIcon: shows one icon file from /public/images/icons/
 *   <ContactIcon name="phone" />  ->  /images/icons/phone.svg
 * To change an icon, replace the file with the same name.
 * ========================================================== */
import Image from 'next/image';

/** Every icon name = file name (without .svg) in public/images/icons */
export type ContactIconName =
  | 'phone' | 'mail' | 'chat' | 'clock'
  | 'whatsapp' | 'facebook' | 'instagram' | 'linkedin' | 'x';

interface Props {
  name: ContactIconName;
  size?: number; // pixels (default 20)
}

export default function ContactIcon({ name, size = 20 }: Props) {
  return (
    <Image className="c-icon" src={`/images/icons/${name}.svg`} alt="" width={size} height={size}
      unoptimized aria-hidden="true" />
  );
}
