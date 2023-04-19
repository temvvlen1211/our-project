import { cutTextToLength, slugify } from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

const str2 = "The quick brown fox!";
describe("slugify", () => {
  it("should cut text to length", () => {
    expect(slugify(str2)).toBe("the-quick-brown-fox");
  });
});
