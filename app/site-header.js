import Link from "next/link";

const headerLinks = [
  { href: "/bands", label: "バンド紹介" },
  { href: "/setlist", label: "セットリスト" },
  { href: "/albums", label: "ギャラリー" }
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="home">
        <img
          src="/assets/logovol2.png"
          alt="釈迦色社会×パフェ山脈 Last Live Vol.2 logo"
          className="site-logo-image"
        />
      </Link>

      <nav className="header-link-bar" aria-label="主要ページ">
        {headerLinks.map((item) => (
          <Link key={item.href} href={item.href} className="header-link-pill">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
