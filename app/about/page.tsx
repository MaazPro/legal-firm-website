import type { Metadata } from "next";
import { LawyerProfile } from "@/components/lawyer-profile";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about West Adelaide Legal and principal solicitor Ashwina Krishnan's commitment to accessible legal support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About West Adelaide Legal"
        description="Trusted, compassionate legal support tailored to your needs."
      />
      <section className="story-section">
        <div className="site-container story-grid">
          <SectionHeading label="About Us" title="Enhancing access to justice." />
          <div className="story-copy">
            <p>
              West Adelaide Legal are here to offer legal support that is trusted, compassionate
              and tailored to your needs.
            </p>
            <p>
              West Adelaide Legal was founded with the objective of enhancing access to justice
              for our community&apos;s most vulnerable by providing legal services that are affordable
              and accessible.
            </p>
            <p>
              At West Adelaide Legal, we ensure that our clients feel supported, informed and
              empowered throughout their legal journey.
            </p>
          </div>
        </div>
        <div className="site-container value-rail" aria-label="West Adelaide Legal client approach">
          <span>Supported</span>
          <span>Informed</span>
          <span>Empowered</span>
        </div>
      </section>
      <LawyerProfile />
    </>
  );
}
