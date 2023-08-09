import { filterByDifficulties } from "./api.utils";
import questions from "../tests/mock/questions";

describe("filterByDifficulties", () => {
  it("returns no questions if no questions are provided", () => {
    const filtered = filterByDifficulties(
      [],
      [
        { difficulty: "easy", count: 1 },
        { difficulty: "medium", count: 1 },
        { difficulty: "hard", count: 1 },
      ]
    );
    expect(filtered.length).toEqual(0);
  });

  it("returns no questions if no difficulties are provided", () => {
    const filtered = filterByDifficulties(questions, []);
    expect(filtered.length).toEqual(0);
  });

  it("returns no questions if difficulties count equal to zero", () => {
    const filtered = filterByDifficulties(questions, [
      { difficulty: "easy", count: 0 },
      { difficulty: "medium", count: 0 },
      { difficulty: "hard", count: 0 },
    ]);
    expect(filtered.length).toEqual(0);
  });

  it("returns all questions if difficulties count is too high", () => {
    const filtered = filterByDifficulties(questions, [
      { difficulty: "easy", count: 100 },
      { difficulty: "medium", count: 100 },
      { difficulty: "hard", count: 100 },
    ]);
    expect(filtered.length).toEqual(20);
  });

  it("returns questions with the correct difficulties", () => {
    const filtered = filterByDifficulties(questions, [
      { difficulty: "easy", count: 2 },
      { difficulty: "medium", count: 2 },
      { difficulty: "hard", count: 1 },
    ]);
    expect(filtered.length).toEqual(5);
    expect(filtered.filter((q) => q.difficulty === "easy").length).toEqual(2);
    expect(filtered.filter((q) => q.difficulty === "medium").length).toEqual(2);
    expect(filtered.filter((q) => q.difficulty === "hard").length).toEqual(1);
  });

  it("returns appropriated questions even for difficulties count equal to 0", () => {
    const filtered = filterByDifficulties(questions, [
      { difficulty: "easy", count: 1 },
      { difficulty: "medium", count: 0 },
      { difficulty: "hard", count: 1 },
    ]);
    expect(filtered.length).toEqual(2);
    expect(filtered.filter((q) => q.difficulty === "easy").length).toEqual(1);
    expect(filtered.filter((q) => q.difficulty === "medium").length).toEqual(0);
    expect(filtered.filter((q) => q.difficulty === "hard").length).toEqual(1);
  });

  it("returns appropriated questions even if not all difficulties are in the difficulties array", () => {
    const filtered = filterByDifficulties(questions, [
      { difficulty: "easy", count: 2 },
      { difficulty: "medium", count: 2 },
    ]);
    expect(filtered.length).toEqual(4);
    expect(filtered.filter((q) => q.difficulty === "easy").length).toEqual(2);
    expect(filtered.filter((q) => q.difficulty === "medium").length).toEqual(2);
  });
});
