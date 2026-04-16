import Link from "next/link";

const headerLinks = [
  { href: "/bands", label: "繝舌Φ繝臥ｴｹ莉・ },
  { href: "/setlist", label: "繧ｻ繝・ヨ繝ｪ繧ｹ繝・ },
  { href: "/albums", label: "繧ｮ繝｣繝ｩ繝ｪ繝ｼ" }
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="home">
        <img
          src="/assets/logovol2.png"
          alt="驥郁ｿｦ濶ｲ遉ｾ莨堙励ヱ繝輔ぉ螻ｱ閼・Last Live Vol.2 logo"
          className="site-logo-image"
        />
      </Link>

      <nav className="header-link-bar" aria-label="荳ｻ隕√・繝ｼ繧ｸ">
        {headerLinks.map((item) => (
          <Link key={item.href} href={item.href} className="header-link-pill">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
