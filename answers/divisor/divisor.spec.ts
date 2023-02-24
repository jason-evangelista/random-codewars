import { divisors } from "./divisor";

describe("Count divisor", () => {
  it("should count divisor in given integer", () => {
    expect(divisors(5)).toEqual(2);
    expect(divisors(10)).toEqual(4);
  });
});
