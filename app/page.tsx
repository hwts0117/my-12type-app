'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>12タイプ診断</h1>
      <p>簡単なQuizで自分のタイプをチェック！</p>
      <Link href="/quiz">
        <button style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
          診断スタート
        </button>
      </Link>
    </main>
  );
}
