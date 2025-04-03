import React from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";

const Result = ({ correctAnswersCount, handleRestartQuiz }) => {
  let resultImage = "";
  let resultText = "";
  switch (correctAnswersCount) {
    case 1:
      resultImage = "/character_tamanegi.png";
      resultText =
        "<ruby>惜<rt>お</rt></ruby>しかったね！<br/><ruby>次<rt>つぎ</rt></ruby>はもっと<ruby>正解<rt>せいかい</rt></ruby>できるよ！";
      break;
    case 2:
      resultImage = "/character_tomato.png";
      resultText =
        "<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>進<rt>すす</rt></ruby>んでいるよ！<br/>もう<ruby>一度<rt>いちど</rt></ruby>チャレンジしてみよう！";
      break;
    case 3:
      resultImage = "/character_lettuce.png";
      resultText =
        "いい<ruby>調子<rt>ちょうし</rt></ruby>だね！<br/>あと<ruby>少<rt>すこ</rt></ruby>しで<ruby>全問正解<rt>ぜんもんせい</rt></ruby>だ！";
      break;
    case 4:
      resultImage = "/character_kiwi.png";
      resultText =
        "あと<ruby>一歩<rt>いっぽ</rt></ruby>！<br/><ruby>次<rt>つぎ</rt></ruby>は<ruby>全問正解<rt>ぜんもんせいかい</rt></ruby>めざしてがんばろう！";
      break;
    case 5:
      resultImage = "/character_eringi.png";
      resultText =
        "おめでとう！！<br/>その<ruby>調子<rt>ちょうし</rt></ruby>をキープしていこう！";
      break;
    default:
      resultImage = "/character_blueberry.png";
      resultText =
        "ナイスチャレンジ！<br/><ruby>次<rt>つぎ</rt></ruby>からが<ruby>本番<rt>ほんばん</rt></ruby>だ！";
      break;
  }
  return (
    <div className="result-container">
      <div className="inner">
        <Image
          src={resultImage}
          width={100}
          height={100}
          style={{
            width: "30%",
            height: "auto",
            marginTop: "30px",
          }}
          alt="resultImage"
        />
        <div>
          <div>
            <p
              style={{
                margin: "0px",
              }}
            >
              <span>
                {correctAnswersCount}
                問正解
              </span>
              でした
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                marginTop: "0",
              }}
            >
              {parse(resultText)}
            </p>
          </div>
          <button
            style={{
              width: "250px",
            }}
            className="next-button"
            onClick={handleRestartQuiz}
          >
            もう1度チャレンジする
          </button>
        </div>
      </div>
      <div className="btn-div">
        <Link href="https://sscykhm2.xsrv.jp/om-test/">自然派ライフトップへ</Link>
        <Link href="/">クイズトップへ</Link>
      </div>
    </div>
  );
};

export default Result;
