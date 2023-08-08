import { render, screen } from "@testing-library/react";
import Question from "./Question";
import questions from "../tests/mock/questions";

test("renders Question", () => {
  render(<Question question={questions[0]} />);
  const questionElement = screen.getByText(questions[0].question);
  expect(questionElement).toBeInTheDocument();

  for (let i = 0; i < questions[0].answers.length; i++) {
    const answerElement = screen.getByText(questions[0].answers[i].answer);
    expect(answerElement).toBeInTheDocument();
  }
});
