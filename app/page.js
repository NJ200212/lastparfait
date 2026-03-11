import Link from "next/link";
import RevealOnScroll from "./reveal-on-scroll";
import SiteHeader from "./site-header";

const eventInfo = [
  { label: "タイトル", value: "釈迦色社会×パフェ山脈Last Live Vol.2" },
  { label: "日時", value: "2026/03/15(sun) 15:00開場 15:30開演" },
  { label: "場所", value: "4共30" },
  { label: "料金", value: "free" }
];

const bands = ["釈迦色社会", "パフェ山脈"];

export default function HomePage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero-stage">
        <div className="hero-stage-inner">
          <div className="hero-copy">
            <p className="eyebrow">Last Live Announcement</p>
            <h1 className="hero-title">
              <span className="hero-title-line">釈迦色社会×パフェ山脈</span>
              <span className="hero-title-line hero-title-subline">Last Live Vol.2</span>
            </h1>
            <p className="lead">2026/03/15(sun) 15:00開場 15:30開演 / 4共30 / free</p>
          </div>
        </div>
      </section>

      <section className="subpage-shell bands-flow home-bands-flow">
        {bands.map((band, index) => (
          <RevealOnScroll key={band}>
            <article className="band-feature" style={{ transitionDelay: `${index * 140}ms` }}>
              <div className="band-feature-name">
                <p className="section-label">Performing Band</p>
                <h2>{band}</h2>
              </div>
              <div className="band-feature-photo visual-placeholder" aria-label={`${band} photo space`}>
                <span>{band} Photo Space</span>
                <small>lastparfait/assets</small>
              </div>
            </article>
          </RevealOnScroll>
        ))}
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

            <div className="cta-row">
              <Link href="/bands" className="secondary-link">
                バンド紹介を見る
              </Link>
              <Link href="/setlist" className="secondary-link">
                セットリストを見る
              </Link>
              <Link href="/albums" className="secondary-link">
                ギャラリーを見る
              </Link>
            </div>
          </section>
        </section>
      </RevealOnScroll>
    </main>
  );
}
