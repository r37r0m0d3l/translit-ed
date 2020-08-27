const { cyrillicToLatinQuick } = require("../dist/translit-ed.cjs");

describe("Imported functions", () => {
  it("cyrillicToLatinQuick", () => {
    expect(typeof cyrillicToLatinQuick).toBe("function");
  });
});

describe("Function results", () => {
  it("cyrillicToLatinQuick", () => {
    expect(cyrillicToLatinQuick("щ")).toBe("shch");
  });
});
