'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Question = {
  question: string;
  options: { text: string; score: number }[];
};

const questions: Question[] = [
  {
    question: 'あなたは計画的ですか？',
    options: [
      { text: 'はい', score: 1 },
      { text: 'いいえ', score: 0 },
    ],
  },
  {
    question: '新しいことに挑戦するのが好きですか？',
    options: [
      { text: 'はい', score: 1 },
      { text: 'いいえ', score: 0 },
    ],
  },
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleAnswer = (s: number) => {
    setScore(score + s);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      router.push(`/result?score=${score + s}`);
    }
  };

  const q = questions[step];

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{q.question}</h2>
      {q.options.map((o, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(o.score)}
          style={{ display: 'block', margin: '1rem auto', padding: '1rem 2rem' }}
        >
          {o.text}
        </button>
      ))}
    </main>
  );
}
