class API {
  static async getFiveRandomizedQuestions(): Promise<Array<Question>> {
    const response = await fetch("/environment_questions");
    const questions = await response.json();
    questions.sort(() => Math.random() - Math.random()).slice(0, 5);
    return questions;
  }
}

export default API;
