"use client";

import { useEffect, useState } from "react";

export default function GalleryLightbox({ sections }) {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  return (
    <>
      <section className="gallery-band-stack">
        {sections.map((band) => (
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
                    <button
                      type="button"
                      className="media-card media-button"
                      key={item.id}
                      onClick={() => setActiveItem(item)}
                      aria-label={`${band.label} の画像を拡大表示`}
                    >
                      <img src={item.src} alt={item.title} className="media-surface media-image" />
                    </button>
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
                    <button
                      type="button"
                      className="media-card media-button"
                      key={item.id}
                      onClick={() => setActiveItem(item)}
                      aria-label={`${band.label} の動画を拡大表示`}
                    >
                      <div className="media-surface media-video-thumb" aria-hidden="true">
                        <span className="media-video-badge">VIDEO</span>
                        <span className="media-video-play"></span>
                      </div>
                    </button>
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

      {activeItem ? (
        <div className="lightbox-shell" role="dialog" aria-modal="true" aria-label="拡大表示">
          <button
            type="button"
            className="lightbox-backdrop"
            aria-label="拡大表示を閉じる"
            onClick={() => setActiveItem(null)}
          />
          <div className="lightbox-panel">
            <button
              type="button"
              className="lightbox-close"
              aria-label="閉じる"
              onClick={() => setActiveItem(null)}
            >
              Close
            </button>
            <div className="lightbox-media-wrap">
              {activeItem.type === "video" ? (
                <video
                  src={activeItem.src}
                  controls
                  autoPlay
                  preload="metadata"
                  className="lightbox-media lightbox-video"
                >
                  お使いのブラウザは動画の再生に対応していません。
                </video>
              ) : (
                <img src={activeItem.src} alt={activeItem.title} className="lightbox-media lightbox-image" />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
