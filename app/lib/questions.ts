// lib/questions.ts
export type Choice = { id: string; text: string; scores: Record<string, number> };
export type Question = { id: string; text: string; choices: Choice[] };

export const questions: Question[] = [
  {
    id: "q1",
    text: "新しいアイデアが浮かんだとき、まず何をする？",
    choices: [
      { id: "q1a", text: "すぐにメモして組み立てる", scores: { storyfinder: 2, inspirer: 1 } },
      { id: "q1b", text: "周りに相談して広げる", scores: { connector: 2, inspirer: 1 } },
      { id: "q1c", text: "しばらく寝かせる", scores: { analyzer: 2 } }
    ]
  },
  {
    id: "q2",
    text: "作品を選ぶとき、最も重視するのは？",
    choices: [
      { id: "q2a", text: "ストーリー性", scores: { storyfinder: 2 } },
      { id: "q2b", text: "斬新さ/独創性", scores: { inspirer: 2 } },
      { id: "q2c", text: "映像美や音", scores: { aesthetic: 2 } }
    ]
  }
];