import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PracticeAreas } from "@/components/practice-areas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "West Adelaide Legal provides support in criminal and traffic law, family law and family violence, migration and refugee law, spent conviction order applications, and human rights law.",
  alternates: { canonical: "/practice-areas" },
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        title="Practice Areas"
        description="West Adelaide Legal provides support across five approved areas of practice."
      />
      <PracticeAreas showHeading={false} />
      <section className="simple-cta">
        <div className="site-container simple-cta-inner">
          <div>
            <p>Free initial appointment</p>
            <h2>Discuss your matter with West Adelaide Legal.</h2>
          </div>
          <Link className="button button-gold" href="/contact#enquiry">
            Free Initial Appointment
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
