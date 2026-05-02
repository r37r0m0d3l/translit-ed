/**
 * @name ukrainianCyrillicToLatynka
 * @description Converts Ukrainian Cyrillic to proposal project Gajica Latynka (Lossless).
 * @param {string} text - Cyrillic text to convert.
 * @returns {string} - Converted Latynka text.
 * @since 2.0.1
 */
export function ukrainianCyrillicToLatynka(text: string): string {
  const map: Record<string, string> = {
    "Щ": "Šč",
    "щ": "šč",
    "Є": "Je",
    "є": "je",
    "Ї": "Ji",
    "ї": "ji",
    "Ю": "Ju",
    "ю": "ju",
    "Я": "Ja",
    "я": "ja",
    "Ж": "Ž",
    "ж": "ž",
    "Ч": "Č",
    "ч": "č",
    "Ш": "Š",
    "ш": "š",
    "А": "A",
    "а": "a",
    "Б": "B",
    "б": "b",
    "В": "V",
    "в": "v",
    "Г": "H",
    "г": "h",
    "Ґ": "G",
    "ґ": "g",
    "Д": "D",
    "д": "d",
    "Е": "E",
    "е": "e",
    "З": "Z",
    "з": "z",
    "И": "Y",
    "и": "y",
    "І": "I",
    "і": "i",
    "Й": "J",
    "й": "j",
    "К": "K",
    "к": "k",
    "Л": "L",
    "л": "l",
    "М": "M",
    "м": "m",
    "Н": "N",
    "н": "n",
    "О": "O",
    "о": "o",
    "П": "P",
    "п": "p",
    "Р": "R",
    "р": "r",
    "С": "S",
    "с": "s",
    "Т": "T",
    "т": "t",
    "У": "U",
    "у": "u",
    "Ф": "F",
    "ф": "f",
    "Х": "X",
    "х": "x",
    "Ц": "C",
    "ц": "c",
    "Ь": "J",
    "ь": "j",
    "’": "'",
    "ʼ": "'",
    "“": '"',
    "”": '"',
  };

  const keys = Object.keys(map).sort((a, b) => b.length - a.length);
  const regex = new RegExp(keys.map((k) => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), "g");

  const isCyrillicLetter = (char: string): boolean => /[\u0400-\u04FF]/.test(char);
  const isUppercaseCyrillicWordAt = (source: string, index: number): boolean => {
    let start = index;
    let end = index;

    while (start > 0 && isCyrillicLetter(source[start - 1] ?? "")) {
      start--;
    }
    while (end < source.length && isCyrillicLetter(source[end] ?? "")) {
      end++;
    }

    const word = source.slice(start, end);
    return word.length > 0 && word === word.toUpperCase();
  };

  return text.replace(regex, (matched, index, fullText) => {
    const mapped = map[matched]!;
    const isUpperCyrChar = matched.length === 1 && matched === matched.toUpperCase() && matched !== matched.toLowerCase();

    // Preserve all-caps words by uppercasing full digraphs like Ju -> JU, Ja -> JA.
    if (isUpperCyrChar && isUppercaseCyrillicWordAt(fullText, index) && mapped.length > 1) {
      return mapped.toUpperCase();
    }

    return mapped;
  });
}

/**
 * @name ukrainianLatynkaToCyrillic
 * @description Converts proposal project Gajica Latynka back to Cyrillic (Lossless).
 * @param {string} text - Latynka text to convert.
 * @returns {string} - Converted Cyrillic text.
 * @since 2.0.1
 */
export function ukrainianLatynkaToCyrillic(text: string): string {
  const map: Record<string, string> = {
    Šč: "Щ",
    šč: "щ",
    ŠČ: "Щ",
    Je: "Є",
    je: "є",
    JE: "Є",
    Ji: "Ї",
    ji: "ї",
    JI: "Ї",
    Ju: "Ю",
    ju: "ю",
    JU: "Ю",
    Ja: "Я",
    ja: "я",
    JA: "Я",
    Ž: "Ж",
    ž: "ж",
    Č: "Ч",
    č: "ч",
    Š: "Ш",
    š: "ш",
    A: "А",
    a: "а",
    B: "Б",
    b: "б",
    V: "В",
    v: "в",
    H: "Г",
    h: "г",
    G: "Ґ",
    g: "ґ",
    D: "Д",
    d: "д",
    E: "Е",
    e: "е",
    Z: "З",
    z: "з",
    Y: "И",
    y: "и",
    I: "І",
    i: "і",
    J: "Й",
    j: "й",
    K: "К",
    k: "к",
    L: "Л",
    l: "л",
    M: "М",
    m: "м",
    N: "Н",
    n: "н",
    O: "О",
    o: "о",
    P: "П",
    p: "п",
    R: "Р",
    r: "р",
    S: "С",
    s: "с",
    T: "Т",
    t: "т",
    U: "У",
    u: "у",
    F: "Ф",
    f: "ф",
    X: "Х",
    x: "х",
    C: "Ц",
    c: "ц",
  };

  const keys = Object.keys(map).sort((a, b) => b.length - a.length);
  const regex = new RegExp(keys.map((k) => k.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), "g");
  const consonants = new Set("bvhgdžzklmnprstfxcčšBVHGDŽZKLMNPRSTFXCČŠ");

  return text.replace(regex, (matched, index, fullText) => {
    if (matched.toLowerCase() === "j") {
      const prevChar = fullText[index - 1];
      if (prevChar && consonants.has(prevChar)) {
        return matched === "j" ? "ь" : "Ь";
      }
    }
    return map[matched]!;
  });
}
