import "./App.css";
import Quizz from "./containers/Quizz";

function App() {
  return (
    <div className="App px-4 sm:px-6 md:px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto pt-20 pb-20 sm:pt-24 lg:pt-32">
        <h1 className="text-3xl font-bold text-center">
          Teste tes connaissances sur l'environnement
        </h1>
        <div className="pt-20">
          <Quizz />
        </div>
      </div>
    </div>
  );
}

export default App;
