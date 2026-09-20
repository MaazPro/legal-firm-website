import type { Metadata } from "next";
import { Clock3, MapPin, Phone } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { appointmentLocations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact West Adelaide Legal by phone, email, enquiry form or WhatsApp for a free, no-obligation initial appointment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Please contact us for a free, no-obligation initial appointment to discuss your matter."
      />
      <section className="contact-appointment">
        <div className="site-container contact-appointment-grid">
          <div>
            <Phone aria-hidden="true" />
            <h2>Free initial telephone appointment</h2>
            <p>Free first appointments are currently available via telephone.</p>
          </div>
          <div>
            <Clock3 aria-hidden="true" />
            <h2>In-person appointments</h2>
            <p>Appointments are offered between 9:30 am and 5:00 pm.</p>
            <ul>
              {appointmentLocations.map((location) => (
                <li key={location}>
                  <MapPin aria-hidden="true" /> {location}
                </li>
              ))}
            </ul>
            <p>
              Home visits or after-hours appointments may be considered where regular locations
              or times are unsuitable.
            </p>
          </div>
        </div>
      </section>
      <ContactSection heading={false} />
    </>
  );
}
