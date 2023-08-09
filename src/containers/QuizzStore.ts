import { Store, createAsyncAction, successResult } from "pullstate";
import API from "../api";

const QuizzStore = new Store<QuizzStore>({
  isSubmitting: false,
  questions: [],
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
