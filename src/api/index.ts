import { filterByDifficulties } from "./api.utils";

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
  static async getFiveRandomizedQuestions(
    type: QuizzType
  ): Promise<Array<Question>> {
    const response = await fetch(`/${type}_questions`);
    const questions = await response.json();
    return filterByDifficulties(
      questions.sort(() => Math.random() - Math.random()),
      DIFFICULTIES
    );
  }

  static async submitAnswers(
    type: QuizzType,
    answers: Array<ApiAnswer>
  ): Promise<any> {
    const response = await fetch("/environment_score", {
      method: "POST",
      body: JSON.stringify(answers),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  }
}

export default API;
