import Link from "next/link";
import SiteHeader from "../site-header";
import { bandImageDirectories, getBandImageMap, PROFILE_IMAGE_ROOT } from "../band-images";

const bandProfiles = {
  "shakashoku-shakai": [
    "2021年10月29日、初期バンドとして同期6名で結成。サークルライブへの出演を一大目標として掲げ、Groove Societyのコピーバンドとして活動を開始する。2023WLのオーディション後にGroove Societyコピーから脱却し、ジャズをはじめとする様々な楽曲に取り組む。",
    "2024年7月、Harvard Din&Tonics来日公演のオープニングアクトとしての出演を機に、音楽を通じた国際交流に興味を持ち「GroovyでGlobal『Groobal』」をモットーに活動するようになる。あっくん主導のもと、海外で行われる国際コンテストに2度出場した。",
    "様々な分岐点を乗り越えながら、6回連続でCLに出演させていただき、同じメンバーで5年間走り続けた同期バンドである。"
  ],
  "parfait-sanmyaku": [
    "2022年6月、（おそらく）29期初の同期バンドとして結成。現役のバンドとしては唯一の29期初期バンドとなる。",
    "結成当初はPentatonixをはじめジャンルを問わず五声の楽曲を歌っていたが、23年初めごろからTRY-TONEのコピーバンドとして活動。",
    "2024年末ごろからオリジナルの邦楽アレンジにも取り組みはじめ、この頃から万博や児童館などで数多くの営業ステージに出演。釈迦色社会とともに台湾での国際コンテストにも出場した。"
  ]
};

export const metadata = {
  title: "バンド紹介 | 釈迦色社会×パフェ山脈 Last Live Vol.2"
};

export default async function BandsPage() {
  const profileImages = await getBandImageMap(PROFILE_IMAGE_ROOT);

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Bands</p>
          <h1>バンド紹介</h1>
        </div>

        <section className="bands-page-grid">
          {bandImageDirectories.map((band) => {
            const image = profileImages[band.key];

            return (
              <article className="band-profile-card" key={band.key}>
                <div
                  className={`band-panel-photo visual-placeholder${image ? " has-band-photo" : ""}`}
                  aria-label={`${band.name} visual placeholder`}
                >
                  {image ? (
                    <img
                      src={image.src}
                      alt={`${band.name} profile visual`}
                      className="band-photo-image"
                    />
                  ) : (
                    <span>{band.name} Profile Visual Space</span>
                  )}
                </div>
                <div className="content-card band-panel-copy">
                  <p className="section-label">Band Profile</p>
                  <h2>{band.name}</h2>
                  <div className="band-profile-text">
                    {bandProfiles[band.key].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <Link href="/" className="secondary-link">
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
