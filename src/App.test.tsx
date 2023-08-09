import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders questionnaire", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Teste tes connaissances sur l'environnement/i
  );
  expect(linkElement).toBeInTheDocument();
});
