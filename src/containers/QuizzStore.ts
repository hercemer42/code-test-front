import { Store, createAsyncAction, successResult } from "pullstate";
import API from "../api";

const QuizzStore = new Store<QuizzStore>({
  isSubmitting: false,
  environment: {
    questions: [],
    score: null,
  },
  mitigation: {
    questions: [],
    score: null,
  },
});

export default QuizzStore;

const fetchQuestionsAction = async ({ type }: { type: QuizzType }) => {
  const questions = await API.getFiveRandomizedQuestions(type);
  return successResult({ type: type, questions: questions });
};

export const fetchQuestions = createAsyncAction(fetchQuestionsAction, {
  postActionHook: ({ result }) => {
    const questions = result.payload?.questions as Array<Question>;
    const type = result.payload?.type as QuizzType;
    QuizzStore.update((s) => {
      s[type].questions = questions;
    });
  },
});

const submitAnswersAction = async ({
  type,
  answers,
}: {
  type: QuizzType;
  answers: Array<ApiAnswer>;
}) => {
  const score = await API.submitAnswers(type, answers);
  return successResult({ type: type, score: score });
};

export const submitAnswers = createAsyncAction(submitAnswersAction, {
  postActionHook: ({ result }) => {
    const score = result.payload?.score as number;
    const type = result.payload?.type as QuizzType;
    QuizzStore.update((s) => {
      s.isSubmitting = false;
      s[type].score = score;
    });
  },
});
