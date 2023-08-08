const Question = ({ question }: { question: Question }) => {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
      <div className="text-xl font-bold">{question.question}</div>
      <Difficulty difficulty={question.difficulty} />
      <div className="pt-5">
        {question.answers.map((answer: Answer) => (
          <Answer answer={answer} key={answer.id} />
        ))}
      </div>
    </div>
  );
};

const Answer = ({ answer }: { answer: Answer }) => {
  return <div className="mt-4 py-2 px-6 text-lg">{answer.answer}</div>;
};

const Difficulty = ({ difficulty }: { difficulty: string }) => {
  return (
    <div>
      <span className="text-sm font-bold text-gray-500">
        {difficulty.toUpperCase()}
      </span>
    </div>
  );
};

export default Question;
