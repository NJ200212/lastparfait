import { readdir } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import SiteHeader from "../site-header";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm", ".m4v"]);

async function getMediaItems(folderName, extensions) {
  const directory = path.join(process.cwd(), "public", "gallery", folderName);
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);

  return entries
    .filter((entry) => entry.isFile())
    .filter((entry) => extensions.has(path.extname(entry.name).toLowerCase()))
    .sort((left, right) => left.name.localeCompare(right.name, "ja"))
    .map((entry) => ({
      id: `${folderName}-${entry.name}`,
      src: `/gallery/${folderName}/${entry.name}`,
      title: entry.name
    }));
}

export const metadata = {
  title: "アルバム | 釈迦色社会×パフェ山脈Last Live Vol.2"
};

export default async function AlbumsPage() {
  const [imageItems, videoItems] = await Promise.all([
    getMediaItems("images", IMAGE_EXTENSIONS),
    getMediaItems("videos", VIDEO_EXTENSIONS)
  ]);

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Gallery</p>
          <h1>画像・動画ギャラリー</h1>
          <p>
            `public/gallery/images` と `public/gallery/videos` にファイルを入れて GitHub を更新すると、
            このページに自動で追加されます。
          </p>
        </div>

        <section className="gallery-section">
          <p className="section-label">Images</p>
          <div className="media-grid">
            {imageItems.length > 0 ? (
              imageItems.map((item) => (
                <article className="media-card" key={item.id}>
                  <img src={item.src} alt={item.title} className="media-surface media-image" />
                </article>
              ))
            ) : (
              <article className="media-card media-card-empty">
                <div className="media-surface visual-placeholder" aria-label="image placeholder">
                  <span>Image Space</span>
                  <small>public/gallery/images に追加</small>
                </div>
              </article>
            )}
          </div>
        </section>

        <section className="gallery-section">
          <p className="section-label">Videos</p>
          <div className="media-grid">
            {videoItems.length > 0 ? (
              videoItems.map((item) => (
                <article className="media-card" key={item.id}>
                  <video src={item.src} controls preload="metadata" className="media-surface media-video">
                    お使いのブラウザは動画再生に対応していません。
                  </video>
                </article>
              ))
            ) : (
              <article className="media-card media-card-empty">
                <div className="media-surface visual-placeholder" aria-label="video placeholder">
                  <span>Video Space</span>
                  <small>public/gallery/videos に追加</small>
                </div>
              </article>
            )}
          </div>
        </section>

        <Link href="/" className="secondary-link">
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
