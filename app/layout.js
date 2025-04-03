import { Zen_Maru_Gothic } from "next/font/google";
import "normalize.css";
import "./globals.css";
import Link from "next/link";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata = {
  title: "子供向けクイズ",
  description:
    "楽しく学べるコーナーです！ぜひ遊んでみてね！",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={zenMaruGothic.className}>
        {children}
        <footer
          style={{
            height: "100px",
            background: "#ceddab",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Link href="https://sscykhm2.xsrv.jp/om-test/" style={{ color: "#fff" }}>
            <p>自然派ライフ</p>
            <small>
              🄫2024 SHIZENHA-LIFE
            </small>
          </Link>
        </footer>
      </body>
    </html>
  );
}