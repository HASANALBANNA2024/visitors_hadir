import { LINKS } from '@/data/site';

/** WhatsApp link with the message already typed (number: data/site/site.ts) */
export const buildWhatsAppUrl = (message: string) => `${LINKS.whatsapp}?text=${encodeURIComponent(message)}`;
