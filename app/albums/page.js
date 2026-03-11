import Link from "next/link";
import SiteHeader from "../site-header";

const mediaItems = [
  {
    id: "shaka-photo-01",
    type: "image",
    title: "釈迦色社会 Photo 01",
    note: "画像アップロード枠"
  },
  {
    id: "shaka-photo-02",
    type: "image",
    title: "釈迦色社会 Photo 02",
    note: "画像アップロード枠"
  },
  {
    id: "parfait-photo-01",
    type: "image",
    title: "パフェ山脈 Photo 01",
    note: "画像アップロード枠"
  },
  {
    id: "movie-01",
    type: "video",
    title: "Live Movie 01",
    note: "動画アップロード枠"
  }
];

export const metadata = {
  title: "アルバム | 釈迦色社会×パフェ山脈Last Live Vol.2"
};

export default function AlbumsPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Gallery</p>
          <h1>画像・動画ギャラリー</h1>
          <p>画像や動画の置き場所として使う前提に変更しました。項目は配列で管理しているので、追加した分だけ下に無制限で並びます。</p>
        </div>

        <section className="media-grid">
          {mediaItems.map((item) => (
            <article className="media-card" key={item.id}>
              <div className="media-surface visual-placeholder" aria-label={`${item.title} placeholder`}>
                <span>{item.type === "video" ? "Video Space" : "Image Space"}</span>
                <small>{item.note}</small>
              </div>
              <div className="media-meta">
                <p className="section-label">{item.type === "video" ? "Video" : "Image"}</p>
                <h2>{item.title}</h2>
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
