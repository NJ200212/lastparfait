import Link from "next/link";
import SiteHeader from "../site-header";

const bands = [
  {
    name: "釈迦色社会",
    text: [
      "2021年10月29日、初期バンドとして同期6名で結成。サークルライブへの出演を一大目標として掲げ、Groove Societyのコピーバンドとして活動を開始する。2023WLのオーディション後にGroove Societyコピーから脱却し、ジャズをはじめとする様々な楽曲に取り組む。",
      "2024年7月、Harvard Din&Tonics来日公演のオープニングアクトとしての出演を機に、音楽を通じた国際交流に興味を持ち「GroovyでGlobal『Groobal』」をモットーに活動するようになる。あっくん主導のもと、海外で行われる国際コンテストに2度出場した。",
      "様々な分岐点を乗り越えながら、6回連続でCLに出演させていただき、同じメンバーで5年間走り続けた同期バンドである。"
    ]
  },
  {
    name: "パフェ山脈",
    text: ["写真とテキストの両方を差し込めるよう、独立したビジュアルエリアを先に確保しています。"]
  }
];

export const metadata = {
  title: "バンド紹介 | 釈迦色社会×パフェ山脈Last Live Vol.2"
};

export default function BandsPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Bands</p>
          <h1>バンド紹介</h1>
          <p>各バンドの写真やプロフィールを後から挿し込めるよう、プレースホルダを含んだ形で組んでいます。</p>
        </div>

        <section className="bands-page-grid">
          {bands.map((band) => (
            <article className="band-profile-card" key={band.name}>
              <div className="band-panel-photo visual-placeholder" aria-label={`${band.name} visual placeholder`}>
                <span>{band.name} Visual Space</span>
                <small>lastparfait/assets</small>
              </div>
              <div className="content-card band-panel-copy">
                <p className="section-label">Band Profile</p>
                <h2>{band.name}</h2>
                <div className="band-profile-text">
                  {band.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <Link href="/" className="secondary-link">
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
