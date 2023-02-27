import { reverseWords } from "./reverseWords";

describe("Reverse all words", () => {
  it("should reverse all words and retain position", () => {
    expect(reverseWords("double  spaced  words")).toEqual(
      "elbuod  decaps  sdrow"
    );
    expect(reverseWords("apple")).toEqual("elppa");
  });
});
