"use client";

import React, { useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import { questions as quizQuestions, Question } from "../../app/lib/questions";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handlePick = (choiceId: string) => {
    const currentQuestion = quizQuestions[currentIndex];
    if (!currentQuestion) return; // 安全チェック

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: choiceId,
    }));

    setCurrentIndex((prev) => prev + 1);
  };

  const currentQuestion = quizQuestions[currentIndex];

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      {currentQuestion ? (
        <QuestionCard
          question={currentQuestion}
          onPick={handlePick}
          selected={answers[currentQuestion.id]}
        />
      ) : (
        <div className="text-center text-lg font-medium">
          すべての質問に回答しました！
        </div>
      )}
    </div>
  );
}
