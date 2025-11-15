import Link from 'next/link';

export default function QuizPage() {
  return (
    <div>
      <h2>クイズページ</h2>
      <p>ここにクイズの質問が入ります（サンプル）</p>
      <Link href="/result">
        <button>結果を見る</button>
      </Link>
    </div>
  );
}