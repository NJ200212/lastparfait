export const metadata = {
  title: "歌詞 | 釈迦色社会×パフェ山脈 Last Live Vol.2"
};

const lyrics = [
  "明るくなったベランダに　天気予報の雪はまだ積もらない",
  "眠れなくなってくれた手紙は　黄色くなって段ボールのなか",
  "",
  "遠くに発ったあなたには　遅い列車のチケットがあるばかり",
  "最後に贈った花のかおりは　風がさらってもうわからない",
  "",
  "あの歌も　怖いうわさも",
  "夕焼けのように忘れてく",
  "",
  "漫画みたいなうその話は　まだできないね",
  "いつかしなくちゃね",
  "",
  "日が昇るのが　こわくなっても",
  "名前をよぶ呪文はおぼえてる",
  "",
  "あの公園とおなじ三日月が　次の街にも　待っていますように"
];

export default function KakushiPage() {
  return (
    <main className="site-shell">
      <section className="subpage-shell">
        <article className="content-card lyrics-card">
          <h1>さよならのうた</h1>
          <div className="lyrics-block">
            {lyrics.map((line, index) =>
              line ? <p key={`${line}-${index}`}>{line}</p> : <br key={`break-${index}`} />
            )}
          </div>
        </article>
      </section>
    </main>
  );
}
