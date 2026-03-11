import Link from "next/link";
import SiteHeader from "../site-header";

const setlists = [
  {
    band: "釈迦色社会",
    songs: ["始発待ち", "インスタント・ブルー", "微熱", "夜の散歩道", "ラストノート"]
  },
  {
    band: "パフェ山脈",
    songs: ["Cream Line", "Sunny Layer", "きらめく匙", "山頂サイダー", "Parfait Ending"]
  }
];

export const metadata = {
  title: "セットリスト | 釈迦色社会×パフェ山脈Last Live Vol.2"
};

export default function SetlistPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Setlist</p>
          <h1>セットリスト</h1>
          <p>本番想定の仮置きリストです。必要になったらそのまま差し替えられる構成にしています。</p>
        </div>

        <section className="content-stack">
          {setlists.map((setlist) => (
            <article className="content-card" key={setlist.band}>
              <p className="section-label">{setlist.band}</p>
              <ol className="setlist-list">
                {setlist.songs.map((song) => (
                  <li key={song}>{song}</li>
                ))}
              </ol>
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
