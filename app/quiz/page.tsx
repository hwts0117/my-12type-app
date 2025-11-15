"use client";
import React, { useState } from "react";
import { questions as quizQuestions, Question } from "../lib/questions";
import QuestionCard from "../../components/QuestionCard";
import ProgressBar from "../../components/ProgressBar";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const router = useRouter();

  const handlePick = (choiceId: string) => {
    const currentQuestion = quizQuestions[currentIndex];
    const updatedAnswers = { ...answers, [currentQuestion.id]: choiceId };
    setAnswers(updatedAnswers);

    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 回答を sessionStorage に保存して結果ページへ
      sessionStorage.setItem("quizAnswers", JSON.stringify(updatedAnswers));
      router.push("/result");
    }
  };

  const currentQuestion = quizQuestions[currentIndex];

  return (
    <div className="max-w-md mx-auto mt-8">
      <ProgressBar current={currentIndex} total={quizQuestions.length} />
      <QuestionCard
        question={currentQuestion}
        selected={answers[currentQuestion.id]}
        onPick={handlePick}
      />
    </div>
  );
}
