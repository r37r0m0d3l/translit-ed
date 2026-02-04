export function cyrillicToLatin(cyrText: string): string {
  let currLang = "r";

  const mapping: Record<string, string> = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo", "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch", "ъ": "\"", "ы": "y", "ь": "'", "э": "e", "ю": "yu", "я": "ya",
    "А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E", "Ё": "YO", "Ж": "ZH", "З": "Z", "И": "I", "Й": "Y", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O", "П": "P", "Р": "R", "С": "S", "Т": "T", "У": "U", "Ф": "F", "Х": "KH", "Ц": "TS", "Ч": "CH", "Ш": "SH", "Щ": "SHCH", "Ъ": "\"", "Ы": "Y", "Ь": "'", "Э": "E", "Ю": "YU", "Я": "YA",
    "і": "i", "І": "I", "ў": "ŭ", "Ў": "Ŭ",
    "є": "ye", "Є": "YE", "ї": "yi", "Ї": "YI", "ґ": "g", "Ґ": "G",
    "ѝ": "i", "Ѐ": "E",
    "ә": "ä", "Ә": "Ä", "ғ": "gh", "Ғ": "GH", "қ": "q", "Қ": "Q", "ң": "ng", "Ң": "NG", "ө": "ö", "Ө": "Ö", "ұ": "u", "Ұ": "U", "ү": "ü", "Ү": "Ü", "һ": "h", "Һ": "H",
    "ѓ": "gj", "Ѓ": "GJ", "ѕ": "dz", "Ѕ": "DZ", "ј": "j", "Ј": "J", "ќ": "kj", "Ќ": "KJ", "љ": "lj", "Љ": "LJ", "њ": "nj", "Њ": "NJ", "џ": "dzh", "Џ": "DZH",
    "ђ": "dj", "Ђ": "DJ", "ћ": "cj", "Ћ": "CJ",
    "ҳ": "h", "Ҳ": "H"
  };

  function replaceLetter(targetLang: string, textToTransform: string): string {
    if (currLang === "r" && targetLang === "e") {
      currLang = "e";
      return "xe" + textToTransform;
    } else if (currLang === "e" && targetLang === "r") {
      currLang = "r";
      return "xr" + textToTransform;
    } else {
      return textToTransform;
    }
  }

  let result = "";
  for (let i = 0; i < cyrText.length; i++) {
    const char = cyrText[i]!;
    if (mapping[char]) {
      result += replaceLetter("r", mapping[char]);
    } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      let mapped = char;
      if (char.toLowerCase() === "j" || char.toLowerCase() === "w" || char.toLowerCase() === "x") {
        mapped = char + char;
      }
      result += replaceLetter("e", mapped);
    } else {
      const codeAt = char.charCodeAt(0);
      if (codeAt > 255) {
        result += "xu" + codeAt.toString(16) + "x";
      } else {
        result += char;
      }
    }
  }
  return result;
}
