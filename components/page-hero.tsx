type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-mark" aria-hidden="true">W/A</div>
      <div className="site-container page-hero-inner">
        <p>West Adelaide Legal</p>
        <h1>{title}</h1>
        <div className="page-hero-line" aria-hidden="true" />
        <p className="page-hero-description">{description}</p>
      </div>
    </section>
  );
}
