import { useEffect } from "react";
import Question from "../components/Question";
import SubmitButton from "../components/SubmitButton";
import QuizzStore, { fetchQuestions, submitAnswers } from "./QuizzStore";

const Quizz = ({ type }: { type: QuizzType }) => {
  const isSubmitting = QuizzStore.useState((s) => s.isSubmitting);
  const score = QuizzStore.useState((s) => s.environment.score);
  const [, finished, result] = fetchQuestions.useWatch({ type });

  useEffect(() => {
    fetchQuestions.run({ type });
  }, []);

  const submitQuizz = (e: any) => {
    e.preventDefault();
    QuizzStore.update((s) => {
      s.isSubmitting = true;
    });

    const formData = new FormData(e.target);
    const answers: Array<ApiAnswer> = [];
    formData.forEach((value, key) => {
      answers.push({
        questionId: parseInt(key),
        answerId: parseInt(value.toString()),
      });
    });
    submitAnswers.run({ type, answers });
  };

  return (
    <>
      {finished && result.payload?.questions && (
        <form onSubmit={submitQuizz}>
          {result.payload.questions.map((question: Question) => (
            <Question question={question} key={question.id} />
          ))}
          <div className="pt-20 flex justify-end gap-4 items-center">
            {score != null && (
              <div className="text-gray-500">{`Tu as obtenu ${score} ${
                score > 1 ? "points" : "point"
              }`}</div>
            )}

            <SubmitButton disabled={isSubmitting} />
          </div>
        </form>
      )}
    </>
  );
};

export default Quizz;
