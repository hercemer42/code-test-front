import { filterByDifficulties } from "./api/api.utils";

const DIFFICULTIES: Array<{ difficulty: Difficulty; count: number }> = [
  {
    difficulty: "easy",
    count: 2,
  },
  {
    difficulty: "medium",
    count: 2,
  },
  {
    difficulty: "hard",
    count: 1,
  },
];

class API {
  static async getFiveRandomizedQuestions(): Promise<Array<Question>> {
    const response = await fetch("/environment_questions");
    const questions = await response.json();
    return filterByDifficulties(
      questions.sort(() => Math.random() - Math.random()),
      DIFFICULTIES
    );
  }
}

export default API;
