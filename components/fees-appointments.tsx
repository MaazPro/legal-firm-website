import Link from "next/link";
import {
  Banknote,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileCheck2,
  HandCoins,
  MapPin,
  Phone,
  WalletCards,
} from "lucide-react";
import { appointmentLocations, siteConfig } from "@/lib/site";
import { SectionHeading } from "./section-heading";

export function FeesAppointments({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className="fees-section">
      <div className="site-container">
        <SectionHeading label="Fees & Appointments" />
        <div className="fees-grid">
          <div className="fees-list">
            <div className="fees-item">
              <FileCheck2 aria-hidden="true" />
              <p>Fixed fee agreements where the cost of a matter can be estimated in advance.</p>
            </div>
            <div className="fees-item">
              <Banknote aria-hidden="true" />
              <p>Costs assessed case by case, depending on duration and complexity.</p>
            </div>
            <div className="fees-item">
              <CheckCircle2 aria-hidden="true" />
              <p>Costs advised upfront before entering into any agreement.</p>
            </div>
            <div className="fees-item">
              <WalletCards aria-hidden="true" />
              <p>Payment plans may be arranged according to individual circumstances.</p>
            </div>
            <div className="fees-item">
              <HandCoins aria-hidden="true" />
              <p>Assistance with obtaining Legal Aid funding for those eligible.</p>
            </div>
            {detailed ? (
              <p className="fees-detail-copy">
                We offer fixed fee agreements for when the cost of your matter can be estimated in
                advance. The cost of each matter is assessed on a case-by-case basis, depending on
                duration and complexity. You will be advised of the cost upfront prior to entering
                into any agreement.
                <br />
                <br />
                West Adelaide Legal are committed to offering accessible and cost-effective legal
                assistance. A payment plan can also be arranged according to your specific
                circumstances. We also assist with obtaining Legal Aid funding for those eligible.
              </p>
            ) : null}
          </div>

          <article className="appointment-panel">
            <CalendarDays aria-hidden="true" className="appointment-main-icon" />
            <div>
              <h3>Free, no-obligation initial appointment</h3>
              <p>Free first appointments are currently available via telephone.</p>
              <div className="appointment-meta">
                <Clock3 aria-hidden="true" />
                <p>In-person appointments are offered between 9:30 am and 5:00 pm.</p>
              </div>
              <ul>
                {appointmentLocations.map((location) => (
                  <li key={location}>
                    <MapPin aria-hidden="true" />
                    {location}
                  </li>
                ))}
              </ul>
              <p>
                Home visits or after-hours appointments may be considered where the regular
                locations or times are unsuitable.
              </p>
              <div className="appointment-actions">
                <Link className="button button-gold" href="/contact#enquiry">
                  Free Initial Appointment
                </Link>
                <a className="text-link" href={siteConfig.phoneHref}>
                  <Phone aria-hidden="true" size={16} />
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
