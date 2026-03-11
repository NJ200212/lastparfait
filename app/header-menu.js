"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { href: "/", label: "トップ" },
  { href: "/bands", label: "バンド紹介" },
  { href: "/setlist", label: "セットリスト" },
  { href: "/albums", label: "アルバム" }
];

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="header-menu">
      <button
        type="button"
        className="header-menu-button"
        aria-expanded={isOpen}
        aria-label="メニューを開く"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header-menu-panel${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className="header-menu-link" onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
