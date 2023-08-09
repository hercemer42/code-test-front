import { Store, createAsyncAction, successResult } from "pullstate";
import API from "../api";

const QuizzStore = new Store<QuizzStore>({
  isSubmitting: false,
  questions: [],
  score: null,
});

export default QuizzStore;

export const fetchQuestions = createAsyncAction(
  async () => {
    const questions = await API.getFiveRandomizedQuestions();
    return successResult({ questions: questions });
  },
  {
    postActionHook: ({ result }) => {
      QuizzStore.update((s) => {
        s.questions = result.payload?.questions as Array<AnsweredQuestion>;
      });
    },
  }
);


export const submitAnswers = createAsyncAction(
  async (answers: Array<ApiAnswer>) => {
    const score = await API.submitAnswers(answers);
    return successResult({ score: score });
  },
  {
    postActionHook: ({ result }) => {
      QuizzStore.update((s) => {
        s.isSubmitting = false;
        s.score = result.payload?.score as number;
      });
    },
  }
);
