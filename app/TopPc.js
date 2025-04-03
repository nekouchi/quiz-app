import Image from "next/image";
import Link from "next/link";
import styles from "./pc.module.css";

const DesktopComponent = (isMobile) => {
  return (
    <div className={styles.backgroundContainer}>
      <Image src="/top/bg-mv-top--shape.webp" fill alt="topimage" priority />
      <div
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          textAlign: "center",
        }}
      >
        <div style={{ width: "90%", minWidth: "600px" }}>
          <Image
            src="/top/logo-header.webp"
            style={{
              width: "50%",
              height: "auto",
            }}
            width={200}
            height={100}
            alt="logo"
          />
        </div>
      </div>

      <div
        id="midashi"
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={{ width: "100%", minWidth: "670px" }}>
          <p
            className={styles.midashiText}
            style={{
              textAlign: "center",
            }}
          >
            自然派ライフのことを 楽しく学べる「自然派ライフ のひみつクイズ」！
            <br />
            さて、いくつ「
            <ruby>
              正解<rt>せいかい</rt>
            </ruby>
            」できるかな！？
            <br />
            いろんなクイズがあるよ。 さあチャレンジしてみよう！
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <Link href="/quiz?category=初級" className={styles.startBtn}>
            <Image
              src="/top/bg-mv-abogado.webp"
              style={{
                width: "50%",
                height: "auto",
              }}
              width={200}
              height={100}
              alt="logo"
            />
            初級
          </Link>
          <Link href="/quiz?category=中級" className={styles.startBtn}>
            <Image
              src="/top/bg-mv-abogado.webp"
              style={{
                width: "50%",
                height: "auto",
              }}
              width={200}
              height={100}
              alt="logo"
            />
            中級
          </Link>
          <Link href="/quiz?category=上級" className={styles.startBtn}>
            <Image
              src="/top/bg-mv-abogado.webp"
              style={{
                width: "50%",
                height: "auto",
              }}
              width={200}
              height={100}
              alt="logo"
            />
            上級
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopComponent;
