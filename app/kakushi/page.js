import Link from "next/link";
import SiteHeader from "../site-header";

export const metadata = {
  title: "歌詞 | 釈迦色社会×パフェ山脈 Last Live Vol.2"
};

export default function KakushiPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subpage-shell">
        <div className="subpage-header">
          <p className="eyebrow">Secret Lyrics</p>
          <h1>オリジナル曲 歌詞</h1>
        </div>

        <article className="content-card lyrics-card">
          <div className="lyrics-block">
            <p>ここにオリジナル曲の歌詞を書いていけます。</p>
            <p>必要なら段落ごとに改行して、そのまま表示を整えられるようにしてあります。</p>
          </div>
        </article>

        <Link href="/" className="secondary-link">
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
