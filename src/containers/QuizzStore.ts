import { Store } from "pullstate";

const QuizzStore = new Store<QuizzStore>({
  isSubmitting: false,
});

export default QuizzStore;
