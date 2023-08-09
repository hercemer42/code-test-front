type Question = {
  id: number;
  question: string;
  answers: Array<Answer>;
  difficulty: Difficulty;
};

type Answer = {
  id: number;
  answer: string;
};

type Difficulty = "easy" | "medium" | "hard";

type QuizzStore = {
  isSubmitting: boolean;
};
