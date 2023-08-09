import Quizz from "../containers/Quizz";

const Environnement = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Teste tes connaissances sur l'environnement
      </h1>
      <div className="pt-20">
        <Quizz type="environment" />
      </div>
    </div>
  );
};

export default Environnement;
