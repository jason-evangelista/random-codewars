import { numberToString } from "./numToString"

describe("Integer to string", () => {
  it("should convert given integer to string", () => {
    expect(numberToString(12)).toEqual("12");
    expect(numberToString(-100)).toEqual("-100");
  })
}) 
