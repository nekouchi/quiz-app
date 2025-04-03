import React from "react";
import Image from "next/image";

const Explanation = ({
  correctAnswerId,
  correctAnswerText,
  explanation,
  currentIndex,
  quizLength,
  handleNextQuestion,
}) => {
  return (
    <div className="explanation-container">
      <div className="inner">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image
            src="/top/bg-mv-itigo01.webp"
            width={500}
            height={300}
            alt="itigo"
            style={{
              width: "30px",
              height: "auto",
            }}
            priority
          />
          <p>解説</p>
          <Image
            src="/top/bg-mv-papurika.webp"
            width={500}
            height={300}
            alt="itigo"
            style={{
              width: "30px",
              height: "auto",
            }}
            priority
          />
        </div>

        <p className="correct-answer">
          <span>{correctAnswerId}.</span>
          {correctAnswerText}
        </p>
        <p style={{ textAlign: "left" }}>{explanation}</p>
      </div>
      <button className="next-button" onClick={handleNextQuestion}>
        {currentIndex < quizLength - 1 ? "次の問題へ" : "結果をみる"}
      </button>
    </div>
  );
};

export default Explanation;
