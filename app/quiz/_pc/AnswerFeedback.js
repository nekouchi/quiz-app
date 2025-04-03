import React from "react";
import Image from "next/image";

const AnswerFeedback = ({ isCorrect, handleExplanation }) => {
  return (
    <div className="answer-feedback-container">
      <div className="inner">
        {isCorrect ? (
          <Image
            src="/animal_quiz_usagi_maru.png"
            width={500}
            height={300}
            alt="Quiz Image"
            style={{
              width: "40%",
              height: "auto",
            }}
            priority
          />
        ) : (
          <Image
            src="/animal_quiz_usagi_batsu.png"
            width={500}
            height={300}
            alt="Quiz Image"
            style={{
              width: "40%",
              height: "auto",
            }}
            priority
          />
        )}
        <button className="next-button" onClick={handleExplanation}>
          解説をみる
        </button>
      </div>
    </div>
  );
};

export default AnswerFeedback;
