import Link from "next/link";
import { Check } from "lucide-react";
import { SectionHeading } from "./section-heading";

type LawyerProfileProps = {
  compact?: boolean;
};

export function LawyerProfile({ compact = false }: LawyerProfileProps) {
  return (
    <section className="profile-section" id="ashwina-krishnan">
      <div className="site-container profile-grid">
        <div className="profile-intro">
          <SectionHeading label="Our People" />
          <h2>Ashwina Krishnan</h2>
          <p className="profile-role">Principal Solicitor</p>
          <p>
            Ashwina recognises that legal proceedings can be extremely stressful and is
            committed to providing accessible legal support tailored to individual client needs.
          </p>
          {compact ? (
            <Link className="text-link" href="/about#ashwina-krishnan">
              Read Ashwina&apos;s profile
            </Link>
          ) : null}
        </div>

        <div className="profile-details">
          <ul className="profile-list">
            <li>
              <Check aria-hidden="true" />
              <span>
                Bachelor of Laws and Bachelor of International Studies, University of Adelaide,
                2018
              </span>
            </li>
            <li>
              <Check aria-hidden="true" />
              <span>Master of Laws specialising in Human Rights Law and Policy, 2026</span>
            </li>
            <li>
              <Check aria-hidden="true" />
              <span>Admitted to the Supreme Court of New South Wales in 2019</span>
            </li>
            <li>
              <Check aria-hidden="true" />
              <span>
                Admitted to the Supreme Court of South Australia and the High Court of Australia
              </span>
            </li>
            <li>
              <Check aria-hidden="true" />
              <span>
                Current member of the Legal Services Commission of South Australia&apos;s General
                Panel
              </span>
            </li>
          </ul>
          {!compact ? (
            <div className="profile-copy">
              <p>
                Ashwina graduated from the University of Adelaide with a Bachelor of Laws and
                Bachelor of International Studies in 2018. In 2026, she completed a Master of Laws
                specialising in Human Rights Law and Policy.
              </p>
              <p>
                She commenced her legal career in private practice, primarily working in
                immigration, family and criminal defence. Since then, Ashwina has worked as a
                summary prosecutor for the Office of the Director of Public Prosecutions in the
                Northern Territory and as a legal and policy officer for the Commonwealth
                Attorney-General&apos;s Department.
              </p>
              <p>
                These experiences have furnished Ashwina with a unique insight into the inner
                workings of the justice system and the challenges associated with navigating it.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
