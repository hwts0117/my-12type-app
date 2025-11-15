"use client";
import React from "react";
import { Question } from "../app/lib/questions";

type Props = {
  question: Question;
  selected?: string;
  onPick: (choiceId: string) => void;
};

export default function QuestionCard({ question, selected, onPick }: Props) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-medium mb-3">{question.text}</h3>
      <div className="flex flex-col gap-2">
        {question.choices.map((c) => (
          <button
            key={c.id}
            onClick={() => onPick(c.id)}
            className={`text-left p-3 rounded-md border ${
              selected === c.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
            }`}
          >
            {c.text}
          </button>
        ))}
      </div>
    </div>
  );
}
