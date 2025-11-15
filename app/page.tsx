import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h2>トップページ</h2>
      <p>ようこそ！診断を始めましょう。</p>
      <Link href="/quiz">
        <button>クイズを始める</button>
      </Link>
    </div>
  );
}