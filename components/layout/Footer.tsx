'use client';
/* ==========================================================
 * Footer: brand + quick links + services + contact,
 * social links, copyright.  (id="contact" for the menu link)
 * ========================================================== */
import { useLang } from '@/hooks/useLang';
import { FOOTER, FOOTER_QUICK_LINKS } from '@/data/footer';
import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterServiceLinks from './FooterServiceLinks';
import FooterContact from './FooterContact';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { t } = useLang();
  const copyright = t(FOOTER.copyright).replace('{year}', String(new Date().getFullYear()));

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <FooterBrand />
        <FooterLinks title={FOOTER.quickLinksTitle} links={FOOTER_QUICK_LINKS} />
        <FooterServiceLinks />
        <FooterContact />
      </div>
      <SocialLinks />
      <div className="footer-bottom">
        <p>{copyright}</p>
      </div>
    </footer>
  );
}
