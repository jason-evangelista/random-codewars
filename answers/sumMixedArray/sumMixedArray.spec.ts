import { sumMix } from ".";

describe("Mixed array number", () => {
  it("should get all the sum regardless if it is string or number", () => {
    expect(sumMix([9, 3, "7", "3"])).toEqual(22);
    expect(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])).toEqual(42);
  });
});
