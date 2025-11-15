"use client";
import React, { useEffect, useState } from "react";
import { questions, Question } from "../lib/questions";

type Answers = Record<string, string>;

export default function ResultPage() {
  const [answers, setAnswers] = useState<Answers | null>(null);

  useEffect(() => {
    const savedAnswers = sessionStorage.getItem("quizAnswers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  if (!answers) {
    return (
      <div className="max-w-md mx-auto mt-8 text-center">
        <p>回答データを取得中...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">結果ページ</h1>
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold">{q.text}</h3>
            <p className="ml-2 text-blue-600">
              あなたの回答:{" "}
              {q.choices.find((c) => c.id === answers[q.id])?.text ?? "未回答"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
