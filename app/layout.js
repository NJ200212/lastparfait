import "./globals.css";

export const metadata = {
  title: "釈迦色社会×パフェ山脈Last Live Vol.2",
  description: "釈迦色社会とパフェ山脈によるLast Live告知サイト"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
