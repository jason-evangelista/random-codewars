import { correct } from "./charRecognition";

describe("Character Recognition", () => {
  it("should change all numeric word", () => {
    expect(correct("L0ND0N")).toEqual("LONDON");
    expect(correct("DUBL1N")).toEqual("DUBLIN");
  });
});
