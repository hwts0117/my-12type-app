'use client';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = Number(searchParams.get('score') || 0);

  const getResultText = () => {
    if (score === 2) return 'あなたは冒険家タイプです！';
    if (score === 1) return 'あなたは観察タイプです！';
    return 'あなたは慎重タイプです！';
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>診断結果</h1>
      <p>{getResultText()}</p>
      <button
        onClick={() => router.push('/')}
        style={{ marginTop: '2rem', padding: '1rem 2rem' }}
      >
        再度診断する
      </button>
    </main>
  );
}
