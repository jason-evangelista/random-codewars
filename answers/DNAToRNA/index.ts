export function DNAtoRNA(dna: string): string {
  return dna.replace(/t/gi, "U");
}
