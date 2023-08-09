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

export const fetchQuestions = createAsyncAction(
  async ({ type }: { type: QuizzType }) => {
    const questions = await API.getFiveRandomizedQuestions(type);
    return successResult({ questions: questions });
  },
  {
    postActionHook: ({ result }) => {
      QuizzStore.update((s) => {
        s.environment.questions = result.payload?.questions as Array<Question>;
      });
    },
  }
);

export const submitAnswers = createAsyncAction(
  async ({ type, answers }: { type: QuizzType; answers: Array<ApiAnswer> }) => {
    const score = await API.submitAnswers(type, answers);
    return successResult({ score: score });
  },
  {
    postActionHook: ({ result }) => {
      QuizzStore.update((s) => {
        s.isSubmitting = false;
        s.environment.score = result.payload?.score as number;
      });
    },
  }
);
