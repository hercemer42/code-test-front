type Question = {
  id: number;
  question: string;
  answers: Array<Answer>;
  difficulty: "easy" | "medium" | "hard";
};

type Answer = {
  id: number;
  answer: string;
};
