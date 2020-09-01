const {
  cyrillicBelarusianToLatin,
  cyrillicRussianToLatin,
  cyrillicToLatinQuick,
  cyrillicToLatinUnicode,
  cyrillicUkrainianToLatin,
  latinToCyrillicBelarusian,
  latinToCyrillicRussian,
  latinToCyrillicUkrainian,
  latinToCyrillicUnicode,
  translit,
  translitBe,
  translitRu,
  translitUCS,
  translitUk,
  unTranslitBe,
  unTranslitRu,
  unTranslitUCS,
  unTranslitUk,
} = require("../dist/translit-ed.cjs");

describe("Imported functions", () => {
  it("cyrillicBelarusianToLatin", () => { expect(typeof cyrillicBelarusianToLatin).toBe("function"); });
  it("cyrillicRussianToLatin", () => { expect(typeof cyrillicRussianToLatin).toBe("function"); });
  it("cyrillicToLatinQuick", () => { expect(typeof cyrillicToLatinQuick).toBe("function"); });
  it("cyrillicToLatinUnicode", () => { expect(typeof cyrillicToLatinUnicode).toBe("function"); });
  it("cyrillicUkrainianToLatin", () => { expect(typeof cyrillicUkrainianToLatin).toBe("function"); });
  it("latinToCyrillicBelarusian", () => { expect(typeof latinToCyrillicBelarusian).toBe("function"); });
  it("latinToCyrillicRussian", () => { expect(typeof latinToCyrillicRussian).toBe("function"); });
  it("latinToCyrillicUkrainian", () => { expect(typeof latinToCyrillicUkrainian).toBe("function"); });
  it("latinToCyrillicUnicode", () => { expect(typeof latinToCyrillicUnicode).toBe("function"); });
  it("translit", () => { expect(typeof translit).toBe("function"); });
  it("translitBe", () => { expect(typeof translitBe).toBe("function"); });
  it("translitRu", () => { expect(typeof translitRu).toBe("function"); });
  it("translitUCS", () => { expect(typeof translitUCS).toBe("function"); });
  it("translitUk", () => { expect(typeof translitUk).toBe("function"); });
  it("unTranslitBe", () => { expect(typeof unTranslitBe).toBe("function"); });
  it("unTranslitRu", () => { expect(typeof unTranslitRu).toBe("function"); });
  it("unTranslitUCS", () => { expect(typeof unTranslitUCS).toBe("function"); });
  it("unTranslitUk", () => { expect(typeof unTranslitUk).toBe("function"); });
});

describe("Function results", () => {
  it("cyrillicToLatinQuick", () => {
    expect(cyrillicToLatinQuick("щ")).toBe("shch");
  });
});
