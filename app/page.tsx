import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactSection } from "@/components/contact-section";
import { FeesAppointments } from "@/components/fees-appointments";
import { HomeHero } from "@/components/home-hero";
import { LawyerProfile } from "@/components/lawyer-profile";
import { PracticeAreas } from "@/components/practice-areas";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Trusted Legal Support in Adelaide",
  description:
    "West Adelaide Legal offers trusted, compassionate legal support tailored to your needs, with affordable and accessible legal services.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="home-about">
        <div className="site-container home-about-grid">
          <div>
            <SectionHeading label="About West Adelaide Legal" />
            <h2>Enhancing access to justice.</h2>
            <p>
              West Adelaide Legal was founded with the objective of enhancing access to justice
              for our community&apos;s most vulnerable by providing legal services that are affordable
              and accessible.
            </p>
            <p>
              At West Adelaide Legal, we ensure that our clients feel supported, informed and
              empowered throughout their legal journey.
            </p>
            <Link className="text-link" href="/about">
              About West Adelaide Legal
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
          <aside className="home-about-aside" aria-label="Client approach">
            <p>Supported.</p>
            <p>Informed.</p>
            <p>Empowered.</p>
            <span aria-hidden="true" />
          </aside>
        </div>
      </section>

      <PracticeAreas linkToPage />
      <LawyerProfile compact />
      <FeesAppointments />
      <ContactSection />
    </>
  );
}
