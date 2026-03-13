import { readdir } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import SiteHeader from "../site-header";
import GalleryLightbox from "./gallery-lightbox";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm", ".m4v"]);

const galleryBands = [
  { key: "shakashoku-shakai", label: "釈迦色社会" },
  { key: "parfait-sanmyaku", label: "パフェ山脈" }
];

async function getThumbnailMap(bandKey) {
  const directory = path.join(process.cwd(), "public", "gallery", bandKey, "video-thumbnails");
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);

  return new Map(
    entries
      .filter((entry) => entry.isFile())
      .filter((entry) => IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => [
        path.basename(entry.name, path.extname(entry.name)),
        `/gallery/${bandKey}/video-thumbnails/${entry.name}`
      ])
  );
}

async function getMediaItems(bandKey, folderName, extensions, type, thumbnailMap = new Map()) {
  const directory = path.join(process.cwd(), "public", "gallery", bandKey, folderName);
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);

  return entries
    .filter((entry) => entry.isFile())
    .filter((entry) => extensions.has(path.extname(entry.name).toLowerCase()))
    .sort((left, right) => left.name.localeCompare(right.name, "ja"))
    .map((entry) => {
      const baseName = path.basename(entry.name, path.extname(entry.name));

      return {
        id: `${bandKey}-${folderName}-${entry.name}`,
        src: `/gallery/${bandKey}/${folderName}/${entry.name}`,
        title: entry.name,
        type,
        poster: type === "video" ? thumbnailMap.get(baseName) ?? null : null
      };
    });
}

export const metadata = {
  title: "ギャラリー | 釈迦色社会×パフェ山脈 Last Live Vol.2"
};

export default async function AlbumsPage() {
  const gallerySections = await Promise.all(
    galleryBands.map(async (band) => {
      const thumbnailMap = await getThumbnailMap(band.key);

      return {
        ...band,
        images: await getMediaItems(band.key, "images", IMAGE_EXTENSIONS, "image"),
        videos: await getMediaItems(band.key, "videos", VIDEO_EXTENSIONS, "video", thumbnailMap)
      };
    })
  );

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Gallery</p>
          <h1>ギャラリー</h1>
        </div>

        <nav className="gallery-jump-nav" aria-label="ギャラリー内移動">
          {gallerySections.map((band) => (
            <a key={band.key} href={`#gallery-${band.key}`} className="gallery-jump-link">
              {band.label}
            </a>
          ))}
        </nav>

        <GalleryLightbox sections={gallerySections} />

        <Link href="/" className="secondary-link">
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
