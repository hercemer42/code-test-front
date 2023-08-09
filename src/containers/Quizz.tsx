import { useEffect } from "react";
import Question from "../components/Question";
import SubmitButton from "../components/SubmitButton";
import QuizzStore, { fetchQuestions, submitAnswers } from "./QuizzStore";

const Quizz = () => {
  const isSubmitting = QuizzStore.useState((s) => s.isSubmitting);
  const score = QuizzStore.useState((s) => s.score);
  const [, finished, result] = fetchQuestions.useWatch();

  useEffect(() => {
    fetchQuestions.run();
  }, []);

  const submitQuizz = (e: any) => {
    e.preventDefault();
    QuizzStore.update((s) => {
      s.isSubmitting = true;
    });

    const formData = new FormData(e.target);
    const apiAnswers: Array<ApiAnswer> = [];
    formData.forEach((value, key) => {
      apiAnswers.push({
        questionId: parseInt(key),
        answerId: parseInt(value.toString()),
      });
    });
    submitAnswers.run(apiAnswers);
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
