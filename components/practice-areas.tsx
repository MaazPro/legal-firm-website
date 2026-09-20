import Link from "next/link";
import { FileText, Globe2, Landmark, Scale, UsersRound } from "lucide-react";
import { practiceAreas } from "@/lib/site";
import { SectionHeading } from "./section-heading";

const icons = {
  scale: Scale,
  users: UsersRound,
  globe: Globe2,
  file: FileText,
  landmark: Landmark,
};

type PracticeAreasProps = {
  showHeading?: boolean;
  linkToPage?: boolean;
};

export function PracticeAreas({ showHeading = true, linkToPage = false }: PracticeAreasProps) {
  return (
    <section className="practice-section">
      <div className="site-container">
        {showHeading ? (
          <SectionHeading label="Areas of Practice" />
        ) : null}
        <div className="practice-grid">
          {practiceAreas.map((area) => {
            const Icon = icons[area.icon];
            return (
              <article className="practice-item" key={area.title}>
                <Icon aria-hidden="true" size={35} strokeWidth={1.35} />
                <h3>{area.title}</h3>
                {"note" in area ? <p>{area.note}</p> : null}
                <span aria-hidden="true" />
              </article>
            );
          })}
        </div>
        {linkToPage ? (
          <div className="section-link-wrap">
            <Link className="text-link" href="/practice-areas">
              View practice areas
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
