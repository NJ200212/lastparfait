import Link from "next/link";
import RevealOnScroll from "./reveal-on-scroll";
import SiteHeader from "./site-header";
import { bandImageDirectories, getBandImageMap, TOP_IMAGE_ROOT } from "./band-images";

const eventInfo = [
  { label: "タイトル", value: "No Groove, No Society!" },
  { label: "日時", value: "2026/03/15(sun) 15:00開場 15:30開演" },
  { label: "場所", value: "4共30" },
  { label: "料金", value: "free" }
];

export default async function HomePage() {
  const topImages = await getBandImageMap(TOP_IMAGE_ROOT);

  return (
    <main className="site-shell">
      <SiteHeader />
      <Link href="/kakushi" className="site-secret-link" aria-label="隠しページへ移動">
        <img src="/assets/kakushi.png" alt="" className="site-secret-image" />
      </Link>

      <section className="hero-stage">
        <div className="hero-stage-inner">
          <div className="hero-copy">
            <p className="eyebrow">Last Live Announcement</p>
            <h1 className="hero-title">
              <span className="hero-title-line hero-title-kicker">釈迦色社会×パフェ山脈 Last Live Vol.2</span>
              <span className="hero-title-line hero-title-main">No Groove, No Society!</span>
            </h1>
            <p className="lead">2026/03/15(sun) 15:00開場 15:30開演 / 4共30 / free</p>
          </div>
        </div>
      </section>

      <section className="subpage-shell bands-flow home-bands-flow">
        {bandImageDirectories.map((band, index) => {
          const image = topImages[band.key];

          return (
            <RevealOnScroll key={band.key}>
              <article className="band-feature" style={{ transitionDelay: `${index * 140}ms` }}>
                <div className="band-feature-name">
                  <p className="section-label">Performing Band</p>
                  <h2>{band.name}</h2>
                </div>
                <div
                  className={`band-feature-photo visual-placeholder${image ? " has-band-photo" : ""}`}
                  aria-label={`${band.name} photo space`}
                >
                  {image ? (
                    <img src={image.src} alt={`${band.name} artist photo`} className="band-photo-image" />
                  ) : (
                    <span>{band.name} Top Photo Space</span>
                  )}
                </div>
              </article>
            </RevealOnScroll>
          );
        })}
      </section>

      <RevealOnScroll>
        <section className="page-shell info-section">
          <section className="hero-card">
            <div className="info-grid">
              {eventInfo.map((item) => (
                <article className="info-card" key={item.label}>
                  <p>{item.label}</p>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
          </section>
        </section>
      </RevealOnScroll>
    </main>
  );
}
