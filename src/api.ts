class API {
  static async getQuestions(): Promise<Array<any>> {
    const response = await fetch("/environment_questions");
    const questions = await response.json();
    return questions;
  }
}

export default API;
