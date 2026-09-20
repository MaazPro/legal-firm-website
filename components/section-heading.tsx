type SectionHeadingProps = {
  label: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading-${align}`}>
      <div className="section-label">
        <span>{label}</span>
        <i aria-hidden="true" />
      </div>
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
    </header>
  );
}
