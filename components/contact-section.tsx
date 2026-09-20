import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { LocationMap } from "./location-map";
import { SectionHeading } from "./section-heading";

export function ContactSection({ heading = true }: { heading?: boolean }) {
  return (
    <section className="contact-section">
      <div className="site-container">
        {heading ? <SectionHeading label="Contact West Adelaide Legal" title="Get in touch." /> : null}
        <div className="contact-layout">
          <address className="contact-details">
            <p className="contact-intro">
              Please contact us for a free, no-obligation initial appointment to discuss your
              matter.
            </p>
            <a href={siteConfig.phoneHref}>
              <span><Phone aria-hidden="true" /></span>
              <div>
                <small>Phone</small>
                {siteConfig.phone}
              </div>
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <span><Mail aria-hidden="true" /></span>
              <div>
                <small>Email</small>
                {siteConfig.email}
              </div>
            </a>
            <div className="contact-address">
              <span><MapPin aria-hidden="true" /></span>
              <div>
                <small>Address</small>
                {siteConfig.addressName}
                <br />
                {siteConfig.addressLines[0]}
                <br />
                {siteConfig.addressLines[1]}
              </div>
            </div>
          </address>
          <ContactForm />
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
