// lib/logic.ts
import { questions } from "./questions";

export type TypeResult = { id: string; name: string; keywords: string[]; description: string };

export const TYPES: TypeResult[] = [
  { id: "storyfinder", name: "ストーリーファインダー", keywords: ["物語志向","洞察力"], description: "物語や構造を見つけるのが得意です。" },
  { id: "inspirer", name: "インスピレーションシーカー", keywords: ["独創的","発想力"], description: "斬新な着想で場を動かします。" },
  { id: "connector", name: "コネクター", keywords: ["人脈","調整力"], description: "人やアイデアをつなげます。" },
  { id: "analyzer", name: "アナライザー", keywords: ["慎重","分析力"], description: "論理的で精査するタイプです。" },
  { id: "aesthetic", name: "エステティック", keywords: ["感性","美意識"], description: "ビジュアル・音に敏感です。" }
];

export function scoreAnswers(answers: Record<string, string>) {
  const total: Record<string, number> = {};
  for (const t of TYPES) total[t.id] = 0;
  for (const q of questions) {
    const choiceId = answers[q.id];
    if (!choiceId) continue;
    const choice = q.choices.find((c) => c.id === choiceId);
    if (!choice) continue;
    for (const [tid, s] of Object.entries(choice.scores)) {
      total[tid] = (total[tid] || 0) + s;
    }
  }
  const sorted = Object.entries(total).sort((a, b) => b[1] - a[1]);
  const topId = sorted[0]?.[0] ?? TYPES[0].id;
  const type = TYPES.find((t) => t.id === topId) ?? TYPES[0];
  return { totals: total, top: type, ranking: sorted };
}