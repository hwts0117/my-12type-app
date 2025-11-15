"use client";

import React from "react";
import { Question } from "../app/lib/questions"
type QuestionCardProps = {
  question: Question;
  onPick: (choiceId: string) => void;
  selected?: string;
};

export default function QuestionCard({
  question,
  onPick,
  selected,
}: QuestionCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium mb-3">{question.text}</h3>
      <div className="flex flex-col gap-2">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onPick(choice.id)}
            className={`text-left p-3 rounded-md border transition-colors duration-200 ${
              selected === choice.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
