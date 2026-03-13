"use client";

import { useState } from "react";

export default function SetlistReveal({ children }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className={`setlist-reveal${isRevealed ? " is-revealed" : ""}`}>
      {children}
      {!isRevealed ? (
        <div className="setlist-overlay" aria-hidden="true">
          <button type="button" className="setlist-reveal-button" onClick={() => setIsRevealed(true)}>
            セトリを見る
          </button>
        </div>
      ) : null}
    </div>
  );
}
