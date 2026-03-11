import Link from "next/link";
import HeaderMenu from "../header-menu";

const albums = [
  {
    title: "釈迦色社会 Archive",
    band: "釈迦色社会",
    text: "ジャケット画像、リリース年、短い紹介文を載せられるようにしたアルバム枠です。"
  },
  {
    title: "Parfait Range",
    band: "パフェ山脈",
    text: "音源リンクや配信先への導線を足せるよう、余白を残したカード構成にしています。"
  },
  {
    title: "Last Live Memories",
    band: "Both Bands",
    text: "終演後に記念作品やライブ音源情報をまとめる用途にも流用できます。"
  }
];

export const metadata = {
  title: "アルバム | 釈迦色社会×パフェ山脈Last Live Vol.2"
};

export default function AlbumsPage() {
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
          <p className="eyebrow">Albums</p>
          <h1>アルバム</h1>
          <p>アルバム情報やジャケット画像を後から差し込めるよう、カードと画像スペースを用意しています。</p>
        </div>

        <section className="album-grid">
          {albums.map((album) => (
            <article className="album-card" key={album.title}>
              <div className="album-art visual-placeholder" aria-label={`${album.title} artwork placeholder`}>
                <span>Album Art Space</span>
                <small>lastparfait/assets</small>
              </div>
              <div className="content-card album-copy">
                <p className="section-label">{album.band}</p>
                <h2>{album.title}</h2>
                <p>{album.text}</p>
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
