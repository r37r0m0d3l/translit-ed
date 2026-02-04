export function latinToCyrillic(text: string): string {
  let currLang = "r";
  let result = "";
  let i = 0;

  const digraphs: Record<string, string> = {
    "shch": "щ", "SHCH": "Щ", "Shch": "Щ",
    "zh": "ж", "ZH": "Ж", "Zh": "Ж",
    "kh": "х", "KH": "Х", "Kh": "Х",
    "ts": "ц", "TS": "Ц", "Ts": "Ц",
    "yo": "ё", "YO": "Ё", "Yo": "Ё",
    "yu": "ю", "YU": "Ю", "Yu": "Ю",
    "ya": "я", "YA": "Я", "Ya": "Я",
    "ye": "е", "YE": "Е", "Ye": "Е",
    "gj": "ѓ", "GJ": "Ѓ", "Gj": "Ѓ",
    "dz": "ѕ", "DZ": "Ѕ", "Dz": "Ѕ",
    "kj": "ќ", "KJ": "Ќ", "Kj": "Ќ",
    "lj": "љ", "LJ": "Љ", "Lj": "Љ",
    "nj": "њ", "NJ": "Њ", "Nj": "Њ",
    "dj": "ђ", "DJ": "Ђ", "Dj": "Ђ",
    "cj": "ћ", "CJ": "Ћ", "Cj": "Ћ",
    "gh": "ғ", "GH": "Ғ", "Gh": "Ғ",
    "ng": "ң", "NG": "Ң", "Ng": "Ң",
    "yi": "ї", "YI": "Ї", "Yi": "Ї",
    "dzh": "џ", "DZH": "Џ", "Dzh": "Џ",
    "dž": "џ", "DŽ": "Џ", "Dž": "Џ",
    "o'": "ў", "O'": "Ў", "oʼ": "ў", "Oʼ": "Ў", "o’": "ў", "O’": "Ў",
    "g'": "ғ", "G'": "Ғ", "gʼ": "ғ", "Gʼ": "Ғ", "g’": "ғ", "G’": "Ғ"
  };

  const singles: Record<string, string> = {
    "a": "а", "b": "б", "v": "в", "g": "г", "d": "д", "e": "е", "z": "з", "i": "и", "y": "й", "k": "к", "l": "л", "m": "м", "n": "н", "o": "о", "p": "п", "r": "р", "s": "с", "t": "т", "u": "у", "f": "ф", "q": "қ", "h": "х", "j": "ј", "ŭ": "ў", "ä": "ә", "ö": "ө", "ü": "ү", "\"": "ъ", "'": "ь",
    "A": "А", "B": "Б", "V": "В", "G": "Г", "D": "Д", "E": "Е", "Z": "З", "I": "И", "Y": "Й", "K": "К", "L": "Л", "M": "М", "N": "Н", "O": "О", "P": "П", "R": "Р", "S": "С", "T": "Т", "U": "У", "F": "Ф", "Q": "Қ", "H": "Х", "J": "Ј", "Ŭ": "Ў", "Ä": "Ә", "Ö": "Ө", "Ü": "Ү"
  };

  while (i < text.length) {
    const char = text[i]!;

    if (char === "x") {
      const next = text[i + 1];
      if (next === "e") {
        currLang = "e";
        i += 2;
        continue;
      } else if (next === "r") {
        currLang = "r";
        i += 2;
        continue;
      } else if (next === "u") {
        let j = i + 2;
        let hex = "";
        while (j < text.length && text[j] !== "x") {
          hex += text[j]!;
          j++;
        }
        if (text[j] === "x") {
          result += String.fromCharCode(parseInt(hex, 16));
          i = j + 1;
          continue;
        }
      } else if (next === "x") {
        result += "x";
        i += 2;
        continue;
      }
    }

    if (currLang === "e") {
      if ((char === "j" || char === "w" || char === "x" || char === "J" || char === "W" || char === "X") && text[i + 1] === char) {
        result += char;
        i += 2;
      } else {
        result += char;
        i++;
      }
      continue;
    }

    let found = false;
    for (const len of [4, 2]) {
      const sub = text.substring(i, i + len);
      if (digraphs[sub]) {
        result += digraphs[sub]!;
        i += len;
        found = true;
        break;
      }
    }
    if (found) continue;

    if (singles[char]) {
      result += singles[char]!;
      i++;
    } else {
      result += char;
      i++;
    }
  }
  return result;
}
