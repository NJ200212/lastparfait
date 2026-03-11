import Link from "next/link";
import HeaderMenu from "../header-menu";

const bands = [
  {
    name: "釈迦色社会",
    text: "紹介文や出演者コメントを後から入れられるように、余白を残したカード構成にしています。"
  },
  {
    name: "パフェ山脈",
    text: "写真とテキストの両方を差し込めるよう、独立したビジュアルエリアを先に確保しています。"
  }
];

export const metadata = {
  title: "バンド紹介 | 釈迦色社会×パフェ山脈Last Live Vol.2"
};

export default function BandsPage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <HeaderMenu />
        <Link href="/" className="site-logo" aria-label="home">
          <div className="site-logo-placeholder">
            <span>Logo Space</span>
            <small>lastparfait/assets に画像を追加</small>
          </div>
        </Link>
      </header>

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Bands</p>
          <h1>バンド紹介</h1>
          <p>各バンドの写真やプロフィールを後から挿し込めるよう、プレースホルダを含んだ形で組んでいます。</p>
        </div>

        <section className="band-panel-stack">
          {bands.map((band) => (
            <article className="band-panel" key={band.name}>
              <div className="band-panel-photo visual-placeholder" aria-label={`${band.name} visual placeholder`}>
                <span>{band.name} Visual Space</span>
                <small>lastparfait/assets</small>
              </div>
              <div className="content-card band-panel-copy">
                <p className="section-label">Band Profile</p>
                <h2>{band.name}</h2>
                <p>{band.text}</p>
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
