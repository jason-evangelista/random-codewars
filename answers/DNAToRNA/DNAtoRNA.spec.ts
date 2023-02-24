import { DNAtoRNA } from ".";

describe("DNA to RNA", () => {
  it("should convert dna to rna", () => {
    expect(DNAtoRNA("TTTT")).toEqual("UUUU");
    expect(DNAtoRNA("GCAT")).toEqual("GCAU");
  });
});
