import { useEffect, useState } from "react";
import API from "../api";
import Question from "../components/Question";
import SubmitButton from "../components/SubmitButton";
import QuizzStore from "./QuizzStore";

const Quizz = () => {
  const isSubmitting = QuizzStore.useState((s) => s.isSubmitting);
  const [questions, setQuestions] = useState<any>();

  useEffect(() => {
    const fetchQuestions = async () => {
      setQuestions(await API.getFiveRandomizedQuestions());
    };
    fetchQuestions();
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
      {questions && (
        <>
          {questions.map((question: Question) => (
            <Question question={question} key={question.id} />
          ))}
          <div className="pt-20 flex justify-end">
            <SubmitButton onClick={submitQuizz} disabled={isSubmitting} />
          </div>
        </>
      )}
    </>
  );
};

export default Quizz;
