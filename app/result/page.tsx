import Link from 'next/link';

export default function ResultPage() {
  return (
    <div>
      <h2>結果ページ</h2>
      <p>ここに診断結果が表示されます（サンプル）</p>
      <Link href="/">
        <button>トップに戻る</button>
      </Link>
    </div>
  );
}