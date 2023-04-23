const { strictEqual: expect } = require("node:assert");
const { describe, it } = require("node:test");

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
  it("cyrillicBelarusianToLatin", () => {
    expect(typeof cyrillicBelarusianToLatin, "function");
  });
  it("cyrillicRussianToLatin", () => {
    expect(typeof cyrillicRussianToLatin, "function");
  });
  it("cyrillicToLatinQuick", () => {
    expect(typeof cyrillicToLatinQuick, "function");
  });
  it("cyrillicToLatinUnicode", () => {
    expect(typeof cyrillicToLatinUnicode, "function");
  });
  it("cyrillicUkrainianToLatin", () => {
    expect(typeof cyrillicUkrainianToLatin, "function");
  });
  it("latinToCyrillicBelarusian", () => {
    expect(typeof latinToCyrillicBelarusian, "function");
  });
  it("latinToCyrillicRussian", () => {
    expect(typeof latinToCyrillicRussian, "function");
  });
  it("latinToCyrillicUkrainian", () => {
    expect(typeof latinToCyrillicUkrainian, "function");
  });
  it("latinToCyrillicUnicode", () => {
    expect(typeof latinToCyrillicUnicode, "function");
  });
  it("translit", () => {
    expect(typeof translit, "function");
  });
  it("translitBe", () => {
    expect(typeof translitBe, "function");
  });
  it("translitRu", () => {
    expect(typeof translitRu, "function");
  });
  it("translitUCS", () => {
    expect(typeof translitUCS, "function");
  });
  it("translitUk", () => {
    expect(typeof translitUk, "function");
  });
  it("unTranslitBe", () => {
    expect(typeof unTranslitBe, "function");
  });
  it("unTranslitRu", () => {
    expect(typeof unTranslitRu, "function");
  });
  it("unTranslitUCS", () => {
    expect(typeof unTranslitUCS, "function");
  });
  it("unTranslitUk", () => {
    expect(typeof unTranslitUk, "function");
  });
});

describe("🇧🇾 Belarusian", () => {
  it("cyrillicToLatinQuick", () => {
    expect(cyrillicToLatinQuick("Прывітанне Сусвет!"), "Pryvіtanne Susvet!");
  });
  it("cyrillicRussianToLatin", () => {
    expect(cyrillicRussianToLatin("Прывітанне Сусвет!"), "Privіtanne Susvet!");
  });
  it("cyrillicToLatinUnicode", () => {
    expect(cyrillicToLatinUnicode("Прывітанне Сусвет!"), "Pryvxu456xtanne Susvet!");
  });
});

describe("🇷🇺 Russian", () => {
  it("cyrillicToLatinQuick", () => {
    expect(cyrillicToLatinQuick("Привет Мир!"), "Privet Mir!");
  });
  it("cyrillicRussianToLatin", () => {
    expect(cyrillicRussianToLatin("Привет Мир!"), "Privet Mir!");
  });
  it("cyrillicToLatinUnicode", () => {
    expect(cyrillicToLatinUnicode("Привет Мир!"), "Privet Mir!");
  });
});

describe("🇺🇦 Ukrainian", () => {
  it("cyrillicToLatinQuick", () => {
    expect(cyrillicToLatinQuick("Привіт Світ!"), "Privіt Svіt!");
  });
  it("cyrillicUkrainianToLatin", () => {
    expect(cyrillicUkrainianToLatin("Привіт Світ!"), "Pryvit Svit!");
  });
  it("cyrillicToLatinUnicode", () => {
    expect(cyrillicToLatinUnicode("Привіт Світ!"), "Privxu456xt Svxu456xt!");
  });
});
