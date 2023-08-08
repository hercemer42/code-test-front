import { useEffect, useState } from "react";
import "./App.css";
import API from "./api";
import Question from "./components/Question";

function App() {
  const [questions, setQuestions] = useState<any>();

  useEffect(() => {
    const fetchQuestions = async () => {
      setQuestions(await API.getFiveRandomizedQuestions());
    };
    fetchQuestions();
  }, []);

  return (
    <div className="App px-4 sm:px-6 md:px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-3xl font-bold text-center">
          Teste tes connaissances sur l'environnement
        </h1>
        <div className="pt-20">
          {questions &&
            questions.map((question: Question) => (
              <Question question={question} key={question.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
