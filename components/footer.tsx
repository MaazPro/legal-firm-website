import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="West Adelaide Legal home">
            <Image
              src="/branding/west-adelaide-legal-logo-dark.svg"
              alt="West Adelaide Legal"
              width={330}
              height={81}
            />
          </Link>
          <p>Trusted, compassionate legal support tailored to your needs.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>

        <address className="footer-contact">
          <a href={siteConfig.phoneHref}>
            <Phone aria-hidden="true" size={17} />
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`}>
            <Mail aria-hidden="true" size={17} />
            {siteConfig.email}
          </a>
          <span>
            <MapPin aria-hidden="true" size={17} />
            <span>
              {siteConfig.addressName}
              <br />
              {siteConfig.addressLines[0]}, {siteConfig.addressLines[1]}
            </span>
          </span>
        </address>
      </div>
      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}</p>
        <p>Adelaide, South Australia</p>
      </div>
    </footer>
  );
}
