import Link from "next/link";
import SiteHeader from "../site-header";
import SetlistReveal from "./setlist-reveal";

const setlists = [
  {
    band: "釈迦色社会",
    sections: [
      {
        title: "第一部",
        songs: [
          "I’m Beginning to See the Light / Duke Ellington / Groove Society ver.",
          "Shake A Shock, Jazz / SHAKA-SHOKU-SHAKAI",
          "Copacabana / Barry Manilow / The Harvard Din&Tonics ver.",
          "Ta noč je moja / Janez Bončina Benč / KREATIVO ver."
        ]
      },
      {
        title: "第二部",
        songs: [
          "In the Mood / Joe Garland / The Oxford Gargoyles ver.",
          "Les Champs-Élysées / Michael Wilshaw & Michael Antony Deighan / SHAKA-SHOKU-SHAKAI ver.",
          "Take the A train / Duke Ellington / The Harvard Din&Tonics ver."
        ]
      },
      {
        title: "第三部",
        songs: [
          "Fly Me to the Moon / Bart Howard / ヤマハジャズスタンダード ver.",
          "Moonlight Serenade / Glenn Miller / ヤマハジャズスタンダード ver.",
          "Moon Dance / Van Morrison / Groove Society ver.",
          "It Don’t Mean a Thing / Duke Ellington / Big Band Beat ver.",
          { text: "And more…?", unnumbered: true }
        ]
      }
    ]
  },
  {
    band: "パフェ山脈",
    sections: [
      {
        title: "第一部",
        songs: ["アカペラでゆこう / TRY-TONE", "花束を君に / 宇多田ヒカル", "おいでシャンプー / 乃木坂46"]
      },
      {
        title: "第二部",
        songs: [
          "L-O-V-E / Nat King Cole / TRY-TONE ver.",
          "Butter×Dynamite / BTS / Pentatonix ver.",
          "I Wish / Stevie Wonder"
        ]
      },
      {
        title: "第三部",
        songs: ["いとしのエリー / サザンオールスターズ", "さよならのうた / パフェ山脈", "勝手にシンドバッド / パフェ山脈"]
      }
    ]
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
        </div>

        <SetlistReveal>
          <section className="setlist-band-stack">
            {setlists.map((setlist) => (
              <article className="content-card setlist-band-card" key={setlist.band}>
                <div className="setlist-band-header">
                  <p className="section-label">Setlist</p>
                  <h2>{setlist.band}</h2>
                </div>

                <div className="setlist-section-grid">
                  {setlist.sections.map((section) => (
                    <section className="setlist-section-card" key={`${setlist.band}-${section.title}`}>
                      <p className="section-label">{section.title}</p>
                      <ol className="setlist-list">
                        {section.songs.map((song) => (
                          <li
                            key={typeof song === "string" ? song : song.text}
                            className={typeof song === "string" ? "" : "setlist-note-item"}
                          >
                            {typeof song === "string" ? song : song.text}
                          </li>
                        ))}
                      </ol>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </SetlistReveal>

        <Link href="/" className="secondary-link">
          トップへ戻る
        </Link>
      </section>
    </main>
  );
}
