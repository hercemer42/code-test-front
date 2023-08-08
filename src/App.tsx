import { useEffect, useState } from "react";
import "./App.css";
import API from "./api";

function App() {
  const [questions, setQuestions] = useState<any>();

  useEffect(() => {
    const fetchQuestions = async () => {
      setQuestions(await API.getFiveRandomizedQuestions());
    };
    fetchQuestions();
  }, []);

  return (
    <div className="App px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-3xl font-bold">Teste tes connaissances</h1>
        <p>{JSON.stringify(questions)}</p>
      </div>
    </div>
  );
}

export default App;
