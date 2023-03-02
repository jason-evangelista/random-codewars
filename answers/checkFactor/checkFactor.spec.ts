import { checkForFactor } from "./checkFactor";

describe("Check factor", () => {
  it("should check factor of base", () => {
    expect(checkForFactor(10, 2)).toEqual(true);
    expect(checkForFactor(9, 2)).toEqual(false);
  });
});
