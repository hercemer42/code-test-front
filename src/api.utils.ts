/**
 * This method filters the questions array by the provided difficulties.
 * It returns the wanted number of questions per difficulty.
 *
 * @param questions The questions array to filter.
 * @param difficulties The difficulties array to filter by.
 * @returns The filtered questions array.
 */
export const filterByDifficulties = (
  questions: Array<Question>,
  difficulties: Array<{ difficulty: Difficulty; count: number }>
): Array<Question> => {
  // if no questions or difficulties are provided, return empty array
  if (difficulties.length === 0 || questions.length === 0) {
    return [];
  }
  // reduce the questions array to the wanted number of questions per difficulty
  const reduced = questions.reduce(
    (acc: Array<Question>, question: Question) => {
      // get the difficulty of the current question
      const difficulty = question.difficulty;
      // get the current number of questions with the same difficulty
      const currentDifficultyCount = acc.filter(
        (q) => q.difficulty === difficulty
      ).length;
      // get wanted count of questions with that difficulty
      const wantedDifficultyCount = difficulties.find(
        (d) => d.difficulty === difficulty
      )?.count;
      if (
        wantedDifficultyCount &&
        currentDifficultyCount < wantedDifficultyCount
      ) {
        // there is still room for questions with that difficulty, add it
        acc.push(question);
      }
      return acc;
    },
    []
  );
  return reduced;
};
