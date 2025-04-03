"use client";
import { Suspense } from "react";
import QuizPc from "./_pc/QuizPc";
import { useSearchParams } from "next/navigation";
import quizDataList from "@/lib/data";

// Fallbackコンポーネントを作成
const Loading = () => <div>Loading...</div>;

// QuizAppコンポーネントを分離してSuspenseでラップする
const QuizApp = () => {
  const category = useSearchParams().get("category");
  const filteredQuizDataList = category
    ? quizDataList.filter((quiz) => quiz.category === category)
    : quizDataList;
  return <QuizPc quizDataList={filteredQuizDataList} />;
};

// AppコンポーネントでSuspenseを使用
const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <QuizApp />
      </Suspense>
    </div>
  );
};

export default App;
