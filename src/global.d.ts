type Question = {
  id: number;
  question: string;
  answers: Array<Answer>;
  difficulty: Difficulty;
};

type AnsweredQuestion = Question & {
  userAnswer: ?number;
  isCorrect: boolean;
};

type Answer = {
  id: number;
  answer: string;
};

type ApiAnswer = {
  questionId: number;
  answerId?: number;
};

type Difficulty = "easy" | "medium" | "hard";

type QuizzStore = {
  isSubmitting: boolean;
  questions: Array<AnsweredQuestion> | undefined;
};
