import { strictEqual as expect } from "node:assert";
import { describe, it } from "node:test";

import {
  cyrillicBelarusianToLatin,
  cyrillicBulgarianToLatin,
  cyrillicKazakhToLatin,
  cyrillicMacedonianToLatin,
  cyrillicMongolianToLatin,
  cyrillicRussianToLatin,
  cyrillicSerbianToLatin,
  cyrillicUzbekToLatin,
  cyrillicToLatinUnicode,
  cyrillicUkrainianToLatin,
  latinToCyrillicBelarusian,
  latinToCyrillicBulgarian,
  latinToCyrillicKazakh,
  latinToCyrillicMacedonian,
  latinToCyrillicMongolian,
  latinToCyrillicRussian,
  latinToCyrillicSerbian,
  latinToCyrillicUzbek,
  latinToCyrillicUkrainian,
  latinToCyrillicUnicode,
} from "../dist/translit-ed.js";

describe("Imported functions", () => {
  it("cyrillicBelarusianToLatin", () => {
    expect(typeof cyrillicBelarusianToLatin, "function");
  });
  it("cyrillicBulgarianToLatin", () => {
    expect(typeof cyrillicBulgarianToLatin, "function");
  });
  it("cyrillicMacedonianToLatin", () => {
    expect(typeof cyrillicMacedonianToLatin, "function");
  });
  it("cyrillicMongolianToLatin", () => {
    expect(typeof cyrillicMongolianToLatin, "function");
  });
  it("cyrillicUzbekToLatin", () => {
    expect(typeof cyrillicUzbekToLatin, "function");
  });
  it("cyrillicSerbianToLatin", () => {
    expect(typeof cyrillicSerbianToLatin, "function");
  });
  it("cyrillicRussianToLatin", () => {
    expect(typeof cyrillicRussianToLatin, "function");
  });
  it("cyrillicKazakhToLatin", () => {
    expect(typeof cyrillicKazakhToLatin, "function");
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
  it("latinToCyrillicBulgarian", () => {
    expect(typeof latinToCyrillicBulgarian, "function");
  });
  it("latinToCyrillicMacedonian", () => {
    expect(typeof latinToCyrillicMacedonian, "function");
  });
  it("latinToCyrillicMongolian", () => {
    expect(typeof latinToCyrillicMongolian, "function");
  });
  it("latinToCyrillicUzbek", () => {
    expect(typeof latinToCyrillicUzbek, "function");
  });
  it("latinToCyrillicSerbian", () => {
    expect(typeof latinToCyrillicSerbian, "function");
  });
  it("latinToCyrillicKazakh", () => {
    expect(typeof latinToCyrillicKazakh, "function");
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
});

describe("🇧🇾 Belarusian", () => {
  it("cyrillicRussianToLatin", () => {
    expect(cyrillicRussianToLatin("Прывітанне Сусвет!"), "Pryvіtanne Susvet!");
  });
  it("cyrillicToLatinUnicode", () => {
    expect(cyrillicToLatinUnicode("Прывітанне Сусвет!"), "Pryvitanne Susvet!");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["б", "b"],
      ["в", "v"],
      ["г", "h"],
      ["ґ", "g"],
      ["д", "d"],
      ["е", "je"],
      ["ё", "jo"],
      ["ж", "zh"],
      ["з", "z"],
      ["і", "i"],
      ["й", "j"],
      ["к", "k"],
      ["л", "l"],
      ["м", "m"],
      ["н", "n"],
      ["о", "o"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["у", "u"],
      ["ў", "ŭ"],
      ["ф", "f"],
      ["х", "kh"],
      ["ц", "ts"],
      ["ч", "ch"],
      ["ш", "sh"],
      ["ы", "y"],
      ["ь", ""],
      ["э", "e"],
      ["ю", "ju"],
      ["я", "ja"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicBelarusianToLatin(input), output);
    }
  });
  it("whole sentence", () => {
    expect(
      cyrillicBelarusianToLatin("Я і Юра ў Мінску."),
      "Ja i Jura ŭ Minsku.",
    );
  });
  it("latinToCyrillicBelarusian", () => {
    expect(latinToCyrillicBelarusian("Ja i Jura ŭ Minsku."), "Я і Юра ў Мінску.");
  });
});

describe("🇧🇬 Bulgarian", () => {
  it("cyrillicBulgarianToLatin", () => {
    expect(cyrillicBulgarianToLatin("Щъркелът е в ъгъла до гьола."), "Shtarkelat e v agala do gyola.");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["б", "b"],
      ["в", "v"],
      ["г", "g"],
      ["д", "d"],
      ["е", "e"],
      ["ж", "zh"],
      ["з", "z"],
      ["и", "i"],
      ["й", "y"],
      ["к", "k"],
      ["л", "l"],
      ["м", "m"],
      ["н", "n"],
      ["о", "o"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["у", "u"],
      ["ф", "f"],
      ["х", "h"],
      ["ц", "ts"],
      ["ч", "ch"],
      ["ш", "sh"],
      ["щ", "sht"],
      ["ъ", "a"],
      ["ь", "y"],
      ["ю", "yu"],
      ["я", "ya"],
      ["ѝ", "i"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicBulgarianToLatin(input), output);
    }
  });
  it("latinToCyrillicBulgarian", () => {
    expect(latinToCyrillicBulgarian("Shtastie e v gyola."), "Щастие е в гьола.");
  });
});

describe("🇷🇸 Serbian", () => {
  it("cyrillicSerbianToLatin", () => {
    expect(cyrillicSerbianToLatin("Љубав и џез."), "Ljubav i džez.");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["б", "b"],
      ["в", "v"],
      ["г", "g"],
      ["д", "d"],
      ["ђ", "đ"],
      ["е", "e"],
      ["ж", "ž"],
      ["з", "z"],
      ["и", "i"],
      ["ј", "j"],
      ["к", "k"],
      ["л", "l"],
      ["љ", "lj"],
      ["м", "m"],
      ["н", "n"],
      ["њ", "nj"],
      ["о", "o"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["ћ", "ć"],
      ["у", "u"],
      ["ф", "f"],
      ["х", "h"],
      ["ц", "c"],
      ["ч", "č"],
      ["џ", "dž"],
      ["ш", "š"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicSerbianToLatin(input), output);
    }
  });
  it("latinToCyrillicSerbian", () => {
    expect(latinToCyrillicSerbian("Njegova džez ploča."), "Његова џез плоча.");
  });
});

describe("🇲🇰 Macedonian", () => {
  it("cyrillicMacedonianToLatin", () => {
    expect(cyrillicMacedonianToLatin("Ѓорѓи џвака ќебап со ѕвезда."), "Gjorgji džvaka kjebap so dzvezda.");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["б", "b"],
      ["в", "v"],
      ["г", "g"],
      ["д", "d"],
      ["ѓ", "gj"],
      ["е", "e"],
      ["ж", "zh"],
      ["з", "z"],
      ["ѕ", "dz"],
      ["и", "i"],
      ["ј", "j"],
      ["к", "k"],
      ["л", "l"],
      ["љ", "lj"],
      ["м", "m"],
      ["н", "n"],
      ["њ", "nj"],
      ["о", "o"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["ќ", "kj"],
      ["у", "u"],
      ["ф", "f"],
      ["х", "h"],
      ["ц", "c"],
      ["ч", "ch"],
      ["џ", "dž"],
      ["ш", "sh"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicMacedonianToLatin(input), output);
    }
  });
  it("latinToCyrillicMacedonian", () => {
    expect(latinToCyrillicMacedonian("Kjutiot gjavol svira džez."), "Ќутиот ѓавол свира џез.");
  });
});

describe("🇲🇳 Mongolian", () => {
  it("cyrillicMongolianToLatin", () => {
    expect(cyrillicMongolianToLatin("Өндөр уул, үүлтэй өдөр."), "Öndör uul, üültey ödör.");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["б", "b"],
      ["в", "v"],
      ["г", "g"],
      ["д", "d"],
      ["е", "e"],
      ["ё", "yo"],
      ["ж", "j"],
      ["з", "z"],
      ["и", "i"],
      ["й", "y"],
      ["к", "k"],
      ["л", "l"],
      ["м", "m"],
      ["н", "n"],
      ["о", "o"],
      ["ө", "ö"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["у", "u"],
      ["ү", "ü"],
      ["ф", "f"],
      ["х", "kh"],
      ["ц", "ts"],
      ["ч", "ch"],
      ["ш", "sh"],
      ["щ", "shch"],
      ["ъ", ""],
      ["ы", "y"],
      ["ь", ""],
      ["э", "e"],
      ["ю", "yu"],
      ["я", "ya"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicMongolianToLatin(input), output);
    }
  });
  it("latinToCyrillicMongolian", () => {
    expect(latinToCyrillicMongolian("Öndör üültey ödör."), "Өндөр үүлтей өдөр.");
  });
});

describe("🇺🇿 Uzbek", () => {
  it("cyrillicUzbekToLatin", () => {
    expect(cyrillicUzbekToLatin("Ўзбекистонда қўшиқ ва ғазал."), "O'zbekistonda qo'shiq va g'azal.");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["б", "b"],
      ["в", "v"],
      ["г", "g"],
      ["д", "d"],
      ["е", "e"],
      ["ё", "yo"],
      ["ж", "j"],
      ["з", "z"],
      ["и", "i"],
      ["й", "y"],
      ["к", "k"],
      ["л", "l"],
      ["м", "m"],
      ["н", "n"],
      ["о", "o"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["у", "u"],
      ["ф", "f"],
      ["х", "x"],
      ["ц", "ts"],
      ["ч", "ch"],
      ["ш", "sh"],
      ["ъ", "'"],
      ["ы", "y"],
      ["ь", ""],
      ["э", "e"],
      ["ю", "yu"],
      ["я", "ya"],
      ["ғ", "g'"],
      ["қ", "q"],
      ["ў", "o'"],
      ["ҳ", "h"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicUzbekToLatin(input), output);
    }
  });
  it("latinToCyrillicUzbek", () => {
    expect(latinToCyrillicUzbek("G'oz va o'zbekcha so'z."), "Ғоз ва ўзбекча сўз.");
  });
});

describe("🇷🇺 Russian", () => {
  it("cyrillicRussianToLatin", () => {
    expect(cyrillicRussianToLatin("Привет Мир!"), "Privet Mir!");
  });
  it("cyrillicToLatinUnicode", () => {
    expect(cyrillicToLatinUnicode("Привет Мир!"), "Privet Mir!");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["б", "b"],
      ["в", "v"],
      ["г", "g"],
      ["д", "d"],
      ["е", "ye"],
      ["ё", "yo"],
      ["ж", "zh"],
      ["з", "z"],
      ["и", "i"],
      ["й", "y"],
      ["к", "k"],
      ["л", "l"],
      ["м", "m"],
      ["н", "n"],
      ["о", "o"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["у", "u"],
      ["ф", "f"],
      ["х", "kh"],
      ["ц", "ts"],
      ["ч", "ch"],
      ["ш", "sh"],
      ["щ", "shch"],
      ["ъ", "\""],
      ["ы", "y"],
      ["ь", "'"],
      ["э", "e"],
      ["ю", "yu"],
      ["я", "ya"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicRussianToLatin(input), output);
    }
  });
  it("whole sentence", () => {
    expect(
      cyrillicRussianToLatin("Съешь же ещё этих мягких французских булок, да выпей чаю."),
      "S\"yesh' zhe yeshchyo etikh myagkikh frantsuzskikh bulok, da vypey chayu.",
    );
  });
  it("latinToCyrillicRussian", () => {
    expect(
      latinToCyrillicRussian("S\"yesh' zhe yeshchyo etikh myagkikh frantsuzskikh bulok, da vypey chayu."),
      "Съешь же ещё этих мягких французских булок, да выпей чаю.",
    );
  });
});

describe("🇰🇿 Kazakh (Cyrillic)", () => {
  it("cyrillicKazakhToLatin", () => {
    expect(cyrillicKazakhToLatin("Әңгіме ғұрыппен қоңыр өгіз ұйықтап, үнімен һау деді."), "Änggime ghuryppen qongyr ögiz uyyqtap, ünimen haū dedi.");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["ә", "ä"],
      ["б", "b"],
      ["в", "v"],
      ["г", "g"],
      ["ғ", "gh"],
      ["д", "d"],
      ["е", "e"],
      ["ё", "yo"],
      ["ж", "zh"],
      ["з", "z"],
      ["и", "ī"],
      ["й", "y"],
      ["к", "k"],
      ["қ", "q"],
      ["л", "l"],
      ["м", "m"],
      ["н", "n"],
      ["ң", "ng"],
      ["о", "o"],
      ["ө", "ö"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["у", "ū"],
      ["ұ", "u"],
      ["ү", "ü"],
      ["ф", "f"],
      ["х", "kh"],
      ["һ", "h"],
      ["ц", "ts"],
      ["ч", "ch"],
      ["ш", "sh"],
      ["щ", "shch"],
      ["ъ", "ʺ"],
      ["ы", "y"],
      ["і", "i"],
      ["ь", "ʹ"],
      ["э", "ė"],
      ["ю", "yu"],
      ["я", "ya"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicKazakhToLatin(input), output);
    }
  });
});

describe("🇺🇦 Ukrainian", () => {
  it("cyrillicUkrainianToLatin", () => {
    expect(cyrillicUkrainianToLatin("Привіт Світ!"), "Pryvit Svit!");
  });
  it("cyrillicToLatinUnicode", () => {
    expect(cyrillicToLatinUnicode("Привіт Світ!"), "Privit Svit!");
  });
  it("alphabet letters", () => {
    const cases = [
      ["а", "a"],
      ["б", "b"],
      ["в", "v"],
      ["г", "h"],
      ["ґ", "g"],
      ["д", "d"],
      ["е", "e"],
      ["є", "ye"],
      ["ж", "zh"],
      ["з", "z"],
      ["и", "y"],
      ["і", "i"],
      ["ї", "yi"],
      ["й", "y"],
      ["к", "k"],
      ["л", "l"],
      ["м", "m"],
      ["н", "n"],
      ["о", "o"],
      ["п", "p"],
      ["р", "r"],
      ["с", "s"],
      ["т", "t"],
      ["у", "u"],
      ["ф", "f"],
      ["х", "kh"],
      ["ц", "ts"],
      ["ч", "ch"],
      ["ш", "sh"],
      ["щ", "shch"],
      ["ь", ""],
      ["ю", "yu"],
      ["я", "ya"],
    ];
    for (const [input, output] of cases) {
      expect(cyrillicUkrainianToLatin(input), output);
    }
  });
  it("whole sentence", () => {
    expect(
      cyrillicUkrainianToLatin("Є юний їжак, ґудзик і гілка в яру."),
      "Ye yunyi yizhak, gudzyk i hilka v yaru.",
    );
  });
  it("latinToCyrillicUkrainian", () => {
    expect(
      latinToCyrillicUkrainian("Ye yunyi yizhak, gudzyk i hilka v yaru."),
      "Є юний їжак, ґудзик і гілка в яру.",
    );
  });
});
