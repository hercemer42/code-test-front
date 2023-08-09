import { render, screen } from "@testing-library/react";
import Question from "./Question";
import questions from "../tests/mock/questions";
import { act } from "react-dom/test-utils";

describe("renders Question", () => {
  render(<Question question={questions[0]} />);
  const questionElement = screen.getByText(questions[0].question);
  expect(questionElement).toBeInTheDocument();

  for (let i = 0; i < questions[0].answers.length; i++) {
    const answerElement = screen.getByText(questions[0].answers[i].answer);
    expect(answerElement).toBeInTheDocument();
  }

  const difficultyElement = screen.getByText(
    questions[0].difficulty.toUpperCase()
  );
  expect(difficultyElement).toBeInTheDocument();

  test("Can select only one answer", () => {
    // Simulate click on one answer, and check if it is selected
    const answerElement = screen.getByText(questions[0].answers[0].answer);
    act(() => {
      answerElement.click();
    });

    const anwserCheckboxElement = screen.getByLabelText(
      questions[0].answers[0].answer
    );
    expect(anwserCheckboxElement).toBeChecked();
    // Check if the other answers are not selected
    expect(
      screen.getByLabelText(questions[0].answers[1].answer)
    ).not.toBeChecked();
    expect(
      screen.getByLabelText(questions[0].answers[2].answer)
    ).not.toBeChecked();

    // Simulate click on another answer, and check if it is selected
    const answerElement2 = screen.getByText(questions[0].answers[1].answer);
    act(() => {
      answerElement2.click();
    });

    const anwserCheckboxElement2 = screen.getByLabelText(
      questions[0].answers[1].answer
    );

    expect(anwserCheckboxElement2).toBeChecked();
    // Check if the other answers are not selected
    expect(
      screen.getByLabelText(questions[0].answers[0].answer)
    ).not.toBeChecked();
    expect(
      screen.getByLabelText(questions[0].answers[2].answer)
    ).not.toBeChecked();
  });
});
