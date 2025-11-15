'use client';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter(); // 追加

  const q1 = searchParams.get('q1');
  const q2 = searchParams.get('q2');
  const q3 = searchParams.get('q3');

  // 簡単な判定ロジック
  let resultText = 'あなたのタイプは普通です';

  if (q1 === '赤' && q2 === '猫') resultText = 'タイプAです！';
  else if (q1 === '青' && q3 === '夏') resultText = 'タイプBです！';
  else if (q2 === '鳥') resultText = 'タイプCです！';

  // トップページに戻る関数
  const handleRestart = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>Resultページ</h1>
      <p>{resultText}</p>
      <div>
        <p>選択結果:</p>
        <ul>
          <li>Q1: {q1}</li>
          <li>Q2: {q2}</li>
          <li>Q3: {q3}</li>
        </ul>
      </div>

      {/* 追加ボタン */}
      <button onClick={handleRestart} style={{ marginTop: '20px' }}>
        再度診断する
      </button>
    </div>
  );
}
