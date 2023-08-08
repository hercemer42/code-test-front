import { useState } from "react";

const Question = ({ question }: { question: Question }) => {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
      <div className="text-xl font-bold">{question.question}</div>
      <Difficulty difficulty={question.difficulty} />
      <div className="pt-5">
        <Answers question={question} />
      </div>
    </div>
  );
};

const Answers = ({ question }: { question: Question }) => {
  // Create a state to only select one answer
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const onAnswerSelected = (answerId: number) => {
    setSelectedAnswer(answerId);
  };

  return (
    <div>
      {question.answers.map((answer: Answer) => (
        <Answer
          questionId={question.id}
          answer={answer}
          key={answer.id}
          onChange={onAnswerSelected}
          selected={selectedAnswer == answer.id}
        />
      ))}
    </div>
  );
};

const Answer = ({
  questionId,
  answer,
  onChange,
  selected,
}: {
  questionId: number;
  answer: Answer;
  onChange: (answerId: number) => void;
  selected: boolean;
}) => {
  const answerId = `answer-${questionId}-${answer.id}`;
  return (
    <div className="flex items-center mb-4">
      <input
        id={answerId}
        type="checkbox"
        name={answerId}
        onChange={() => onChange(answer.id)}
        checked={selected}
      />
      <label htmlFor={answerId} className="ml-2 text-lg cursor-pointer">
        {answer.answer}
      </label>
    </div>
  );
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
