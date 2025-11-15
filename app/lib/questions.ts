export type Question = {
  id: string;
  text: string;
  choices: { id: string; text: string }[];
};

export const questions: Question[] = [
  {
    id: "q1",
    text: "あなたの好きな色は？",
    choices: [
      { id: "c1", text: "赤" },
      { id: "c2", text: "青" },
      { id: "c3", text: "緑" },
    ],
  },
  {
    id: "q2",
    text: "好きな動物は？",
    choices: [
      { id: "c1", text: "猫" },
      { id: "c2", text: "犬" },
      { id: "c3", text: "鳥" },
    ],
  },
  {
    id: "q3",
    text: "好きな季節は？",
    choices: [
      { id: "c1", text: "春" },
      { id: "c2", text: "夏" },
      { id: "c3", text: "秋" },
      { id: "c4", text: "冬" },
    ],
  },
];
