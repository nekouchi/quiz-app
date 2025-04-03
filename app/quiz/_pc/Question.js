// Question.js
import React from "react";
import Image from "next/image";

const Question = ({ currentIndex, quizListItem, handleAnswer, answered }) => {
  return (
    <div className="box">
      <div className="question">
        <p
          style={{
            width: "30%",
            height: "auto",
            position: "absolute",
            top: "-18px",
            left: 0,
            background: "lightblue",
            padding: "5px 10px",
          }}
        >
          {quizListItem.category}
        </p>
        <h2 className="quiz-title">
          <ruby>
            第<rt>だい</rt>
          </ruby>
          <span>{currentIndex + 1}</span>
          <ruby>
            問<rt>もん</rt>
          </ruby>
        </h2>
        <div>{quizListItem.question}</div>
      </div>
      <div
        style={{
          position: "relative",
          width: "50%",
          maxWidth: "500px",
          margin: "0 auto 1.8rem",
        }}
      >
        {quizListItem.image && (
          <Image
            src={`/quiz/${quizListItem.image}`}
            alt="question_image"
            width={250}
            height={250}
            priority
            style={{ width: "100%", height: "auto" }}
            sizes="500px"
          />
        )}
      </div>

      <div className="options-container">
        {quizListItem.options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleAnswer(option.id)}
            disabled={answered}
          >
            <span>{option.id}.</span>
            <p>{option.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
