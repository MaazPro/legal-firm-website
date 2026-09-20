import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="home-hero">
      <Image
        className="home-hero-background"
        src="/images/hero-architecture.png"
        alt="Sunlit contemporary stone architecture with olive foliage"
        fill
        sizes="100vw"
        priority
      />
      <div className="site-container home-hero-inner">
        <div className="home-hero-copy">
          <h1>Trusted, compassionate legal support tailored to your needs.</h1>
          <p className="hero-description">
            West Adelaide Legal are here to offer legal support that is trusted,
            compassionate and tailored to your needs.
          </p>
          <p className="hero-location">
            <MapPin aria-hidden="true" size={17} />
            {siteConfig.location}
          </p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/contact#enquiry">
              Free Initial Appointment
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
            <a className="button button-outline-light" href={siteConfig.phoneHref}>
              <Phone aria-hidden="true" size={17} />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
        <div className="hero-brand-mark" aria-hidden="true">
          <Image
            src="/branding/west-adelaide-legal-mark.svg"
            alt=""
            width={220}
            height={220}
          />
        </div>
      </div>
    </section>
  );
}
