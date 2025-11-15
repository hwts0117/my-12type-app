'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Answer = string;

export default function QuizPage() {
  const router = useRouter();

  // 複数問の回答を state で管理
  const [answers, setAnswers] = useState<{ [key: string]: Answer }>({});

  const questions = [
    { id: 'q1', text: 'あなたの好きな色は？', options: ['赤', '青', '緑'] },
    { id: 'q2', text: 'あなたの好きな動物は？', options: ['猫', '犬', '鳥'] },
    { id: 'q3', text: 'あなたの好きな季節は？', options: ['春', '夏', '冬'] },
  ];

  const handleChange = (questionId: string, value: Answer) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    // クエリにまとめて渡す
    const query = new URLSearchParams(answers as any).toString();
    router.push(`/result?${query}`);
  };

  return (
    <div>
      <h1>Quizページ</h1>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={q.id}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleChange(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>結果を見る</button>
    </div>
  );
}
