"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "@/styles/css/quiz_pc.css"; // Quiz.cssをインポート
import Explanation from "./Explanation";
import AnswerFeedback from "./AnswerFeedback";
import Result from "./Result";
import Question from "./Question";
import Link from "next/link";

const QuizPc = ({ quizDataList }) => {
  const [quizList, setQuizList] = useState(quizDataList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (quizDataList && quizDataList.length > 0) {
      setQuizList(quizDataList);
      setLoading(false);
    }
  }, [quizDataList]);

  const handleAnswer = (selectedOptionId) => {
    if (!answered) {
      const correct =
        selectedOptionId === quizList[currentIndex].correctAnswerId;
      setIsCorrect(correct);
      setAnswered(true);
      const result = {
        question: quizList[currentIndex].question,
        isCorrect: correct,
        correctAnswer: quizList[currentIndex].options.find(
          (option) => option.id === quizList[currentIndex].correctAnswerId
        ).text,
        explanation: quizList[currentIndex].explanation,
      };
      setResults([...results, result]);
      if (correct) {
        setCorrectAnswersCount(correctAnswersCount + 1);
      }
    }
  };

  const handleExplanation = () => {
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswered(false);
      setShowExplanation(false);
    } else {
      setShowResult(true);
      setAnswered(false);
      setShowExplanation(false);
    }
  };

  const handleRestartQuiz = () => {
    setQuizList(quizDataList);
    setCurrentIndex(0);
    setAnswered(false);
    setIsCorrect(false);
    setCorrectAnswersCount(0);
    setShowResult(false);
    setResults([]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="quiz-container" style={{ background: "#f2f0ed" }}>
      <div className="main-content">
        <Link href="/">
          <Image
            src={`/top/logo-brown.webp`}
            width={300}
            height={30}
            style={{
              width: "200px",
              height: "auto",
            }}
            alt="logo"
          />
        </Link>

        <Question
          currentIndex={currentIndex}
          quizListItem={quizList[currentIndex]}
          handleAnswer={handleAnswer}
          answered={answered}
        />

        {answered && !showExplanation && (
          <AnswerFeedback
            isCorrect={isCorrect}
            handleExplanation={handleExplanation}
          />
        )}
        {showExplanation && (
          <Explanation
            correctAnswerId={quizList[currentIndex].correctAnswerId}
            correctAnswerText={
              quizList[currentIndex].options.find(
                (option) => option.id === quizList[currentIndex].correctAnswerId
              ).text
            }
            explanation={quizList[currentIndex].explanation}
            currentIndex={currentIndex}
            quizLength={quizList.length}
            handleNextQuestion={handleNextQuestion}
          />
        )}
        {showResult && !answered && (
          <Result
            quizList={quizList}
            correctAnswersCount={correctAnswersCount}
            handleRestartQuiz={handleRestartQuiz}
          />
        )}
      </div>
    </main>
  );
};

export default QuizPc;
