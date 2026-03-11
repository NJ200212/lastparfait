import Link from "next/link";
import HeaderMenu from "./header-menu";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <HeaderMenu />
      <Link href="/" className="site-logo" aria-label="home">
        <img src="/assets/logovol2.png" alt="釈迦色社会×パフェ山脈 Last Live Vol.2 logo" className="site-logo-image" />
      </Link>
    </header>
  );
}
