import { useEffect } from "react";
import Question from "../components/Question";
import SubmitButton from "../components/SubmitButton";
import QuizzStore, { fetchQuestions } from "./QuizzStore";

const Quizz = () => {
  const isSubmitting = QuizzStore.useState((s) => s.isSubmitting);
  const [, finished, result] = fetchQuestions.useWatch();

  useEffect(() => {
    fetchQuestions.run();
  }, []);

  const submitQuizz = () => {
    QuizzStore.update((s) => {
      s.isSubmitting = true;
    });

    console.log("Submit quizz");

    setTimeout(() => {
      QuizzStore.update((s) => {
        s.isSubmitting = false;
      });
    }, 1000);
  };

  return (
    <>
      {finished && result.payload?.questions && (
        <form>
          {result.payload.questions.map((question: Question) => (
            <Question question={question} key={question.id} />
          ))}
          <div className="pt-20 flex justify-end">
            <SubmitButton onClick={submitQuizz} disabled={isSubmitting} />
          </div>
        </form>
      )}
    </>
  );
};

export default Quizz;
