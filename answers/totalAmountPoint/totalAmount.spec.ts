import { points } from "./totalAmountPoints";

describe("Get points", () => {
  it("should get the points in all 10 games", () => {
    expect(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
      ])
    ).toEqual(30);
    expect(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:4", //equal score at 9th games
        "4:3",
      ])
    ).toEqual(28);
    expect(
      points([
        "0:3", //lost at first game
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
      ])
    ).toEqual(27);
  });
});
