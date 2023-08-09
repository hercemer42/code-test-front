import { useEffect, useState } from "react";
import API from "../api";
import Question from "../components/Question";
import SubmitButton from "../components/SubmitButton";

const Quizz = () => {
  const [questions, setQuestions] = useState<any>();

  useEffect(() => {
    const fetchQuestions = async () => {
      setQuestions(await API.getFiveRandomizedQuestions());
    };
    fetchQuestions();
  }, []);

  const submitQuizz = () => {
    console.log("submit");
  };

  return (
    <>
      {questions && (
        <>
          {questions.map((question: Question) => (
            <Question question={question} key={question.id} />
          ))}
          <div className="pt-20 flex justify-end">
            <SubmitButton onClick={submitQuizz} disabled={false} />
          </div>
        </>
      )}
    </>
  );
};

export default Quizz;
