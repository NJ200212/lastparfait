import { readdir } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import SiteHeader from "../site-header";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm", ".m4v"]);

const galleryBands = [
  { key: "shakashoku-shakai", label: "釈迦色社会" },
  { key: "parfait-sanmyaku", label: "パフェ山脈" }
];

async function getMediaItems(bandKey, folderName, extensions) {
  const directory = path.join(process.cwd(), "public", "gallery", bandKey, folderName);
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);

  return entries
    .filter((entry) => entry.isFile())
    .filter((entry) => extensions.has(path.extname(entry.name).toLowerCase()))
    .sort((left, right) => left.name.localeCompare(right.name, "ja"))
    .map((entry) => ({
      id: `${bandKey}-${folderName}-${entry.name}`,
      src: `/gallery/${bandKey}/${folderName}/${entry.name}`,
      title: entry.name
    }));
}

export const metadata = {
  title: "ギャラリー | 釈迦色社会×パフェ山脈Last Live Vol.2"
};

export default async function AlbumsPage() {
  const gallerySections = await Promise.all(
    galleryBands.map(async (band) => ({
      ...band,
      images: await getMediaItems(band.key, "images", IMAGE_EXTENSIONS),
      videos: await getMediaItems(band.key, "videos", VIDEO_EXTENSIONS)
    }))
  );

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Gallery</p>
          <h1>画像・動画ギャラリー</h1>
        </div>

        <nav className="gallery-jump-nav" aria-label="ギャラリー内移動">
          {gallerySections.map((band) => (
            <a key={band.key} href={`#gallery-${band.key}`} className="gallery-jump-link">
              {band.label}
            </a>
          ))}
        </nav>

        <section className="gallery-band-stack">
          {gallerySections.map((band) => (
            <section className="gallery-band-section" key={band.key} id={`gallery-${band.key}`}>
              <div className="gallery-band-header">
                <p className="section-label">Gallery</p>
                <h2>{band.label}</h2>
              </div>

              <section className="gallery-section">
                <p className="section-label">Images</p>
                <div className="media-grid">
                  {band.images.length > 0 ? (
                    band.images.map((item) => (
                      <article className="media-card" key={item.id}>
                        <img src={item.src} alt={item.title} className="media-surface media-image" />
                      </article>
                    ))
                  ) : (
                    <article className="media-card media-card-empty">
                      <div className="media-surface visual-placeholder" aria-label={`${band.label} image placeholder`}>
                        <span>Image Space</span>
                      </div>
                    </article>
                  )}
                </div>
              </section>

              <section className="gallery-section">
                <p className="section-label">Videos</p>
                <div className="media-grid">
                  {band.videos.length > 0 ? (
                    band.videos.map((item) => (
                      <article className="media-card" key={item.id}>
                        <video src={item.src} controls preload="metadata" className="media-surface media-video">
                          お使いのブラウザは動画再生に対応していません。
                        </video>
                      </article>
                    ))
                  ) : (
                    <article className="media-card media-card-empty">
                      <div className="media-surface visual-placeholder" aria-label={`${band.label} video placeholder`}>
                        <span>Video Space</span>
                      </div>
                    </article>
                  )}
                </div>
              </section>
            </section>
          ))}
        </section>

        <Link href="/" className="secondary-link">
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
