const baseMap = new Map<string, string>([
  ["а", "a"],
  ["б", "b"],
  ["в", "v"],
  ["г", "g"],
  ["д", "d"],
  ["е", "e"],
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
]);

const vowels = new Set(["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"]);
const boundaryChars = new Set([" ", "\n", "\t", ".", ",", "!", "?", ":", ";", "(", ")", "-", "—", "–", "\"", "«", "»"]);

function applyCasing(source: string, mapped: string): string {
  if (source === source.toUpperCase()) {
    if (mapped.length > 1) {
      return (mapped[0] ?? "").toUpperCase() + mapped.slice(1);
    }
    return mapped.toUpperCase();
  }
  return mapped;
}

function mapCyrillicChar(char: string, isInitial: boolean, isAfterVowelOrSign: boolean): string | undefined {
  const lower = char.toLowerCase();
  if (lower === "е") {
    return isInitial || isAfterVowelOrSign ? "ye" : "e";
  }
  return baseMap.get(lower);
}

export function cyrillicToLatinRussian(cyrillicText: string): string {
  if (!cyrillicText) {
    return "";
  }
  const normalized = cyrillicText.normalize();
  let latin = "";
  let prevLetter = "";
  let prevIsBoundary = true;
  for (let index = 0; index < normalized.length; index++) {
    const char = normalized[index] ?? "";
    const lower = char.toLowerCase();
    if (boundaryChars.has(lower)) {
      latin += char;
      prevIsBoundary = true;
      prevLetter = "";
      continue;
    }
    const isInitial = prevIsBoundary;
    const isAfterVowelOrSign = vowels.has(prevLetter) || prevLetter === "ъ" || prevLetter === "ь";
    const mapped = mapCyrillicChar(char, isInitial, isAfterVowelOrSign);
    if (mapped === undefined) {
      latin += char;
      prevIsBoundary = true;
      prevLetter = "";
      continue;
    }
    latin += applyCasing(char, mapped);
    prevIsBoundary = false;
    prevLetter = lower;
  }
  return latin;
}

const latinSingles = new Map<string, string>([
  ["a", "а"],
  ["b", "б"],
  ["v", "в"],
  ["g", "г"],
  ["d", "д"],
  ["e", "е"],
  ["z", "з"],
  ["i", "и"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["p", "п"],
  ["r", "р"],
  ["s", "с"],
  ["t", "т"],
  ["u", "у"],
  ["f", "ф"],
]);

const latinDigraphs = new Map<string, string>([
  ["shch", "щ"],
  ["zh", "ж"],
  ["kh", "х"],
  ["ts", "ц"],
  ["ch", "ч"],
  ["sh", "ш"],
  ["yo", "ё"],
  ["yu", "ю"],
  ["ya", "я"],
  ["ye", "е"],
]);

const latinVowels = new Set(["a", "e", "i", "o", "u", "y"]);

export function latinToCyrillicRussian(latinText: string): string {
  if (!latinText) {
    return "";
  }
  const normalized = latinText.normalize();
  let cyrillic = "";
  let index = 0;
  let prevIsBoundary = true;
  let prevLatin = "";
  while (index < normalized.length) {
    const char = normalized[index] ?? "";
    const lowerChar = char.toLowerCase();
    if (lowerChar === "\"") {
      cyrillic += "ъ";
      index++;
      prevIsBoundary = false;
      prevLatin = lowerChar;
      continue;
    }
    if (lowerChar === "'") {
      cyrillic += "ь";
      index++;
      prevIsBoundary = false;
      prevLatin = lowerChar;
      continue;
    }
    if (boundaryChars.has(lowerChar)) {
      cyrillic += char;
      index++;
      prevIsBoundary = true;
      prevLatin = "";
      continue;
    }

    const four = normalized.slice(index, index + 4);
    const fourLower = four.toLowerCase();
    const fourMapped = latinDigraphs.get(fourLower);
    if (fourMapped) {
      cyrillic += applyCasing(four[0] ?? "", fourMapped);
      index += 4;
      prevIsBoundary = false;
      prevLatin = (four[four.length - 1] ?? "").toLowerCase();
      continue;
    }

    const two = normalized.slice(index, index + 2);
    const twoLower = two.toLowerCase();
    const twoMapped = latinDigraphs.get(twoLower);
    if (twoMapped) {
      cyrillic += applyCasing(two[0] ?? "", twoMapped);
      index += 2;
      prevIsBoundary = false;
      prevLatin = (two[two.length - 1] ?? "").toLowerCase();
      continue;
    }

    if (lowerChar === "y") {
      const nextChar = (normalized[index + 1] ?? "").toLowerCase();
      const isNextBoundary = nextChar === "" || boundaryChars.has(nextChar) || nextChar === "\"" || nextChar === "'";
      const useShortI = !prevIsBoundary && latinVowels.has(prevLatin);
      const mapped = useShortI && (latinVowels.has(nextChar) || isNextBoundary) ? "й" : "ы";
      cyrillic += applyCasing(char, mapped);
      index++;
      prevIsBoundary = false;
      prevLatin = lowerChar;
      continue;
    }

    const singleMapped = latinSingles.get(lowerChar);
    if (singleMapped) {
      if (lowerChar === "e" && prevIsBoundary) {
        cyrillic += applyCasing(char, "э");
      } else {
        cyrillic += applyCasing(char, singleMapped);
      }
      index++;
      prevIsBoundary = false;
      prevLatin = lowerChar;
      continue;
    }

    cyrillic += char;
    index++;
    prevIsBoundary = false;
    prevLatin = lowerChar;
  }
  return cyrillic;
}
