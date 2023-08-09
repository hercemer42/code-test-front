import Quizz from "../containers/Quizz";

const Mitigation = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Teste tes connaissances sur l'aténuation
      </h1>
      <div className="pt-20">
        <Quizz type="mitigation" />
      </div>
    </div>
  );
};

export default Mitigation;
