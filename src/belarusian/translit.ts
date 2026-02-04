const baseMap = new Map<string, string>([
  ["а", "a"],
  ["б", "b"],
  ["в", "v"],
  ["г", "h"],
  ["ґ", "g"],
  ["д", "d"],
  ["е", "e"],
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
]);

const vowels = new Set(["а", "е", "ё", "і", "о", "у", "ў", "ы", "э", "ю", "я"]);
const boundaryChars = new Set([" ", "\n", "\t", ".", ",", "!", "?", ":", ";", "(", ")", "-", "—", "–", "\"", "«", "»"]);
const apostrophes = new Set(["'", "’", "ʼ"]);

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
    return isInitial || isAfterVowelOrSign ? "je" : "ie";
  }
  if (lower === "ё") {
    return isInitial || isAfterVowelOrSign ? "jo" : "io";
  }
  if (lower === "ю") {
    return isInitial || isAfterVowelOrSign ? "ju" : "iu";
  }
  if (lower === "я") {
    return isInitial || isAfterVowelOrSign ? "ja" : "ia";
  }
  return baseMap.get(lower);
}

export function cyrillicToLatinBelarusian(cyrillicText: string): string {
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
    if (apostrophes.has(lower)) {
      latin += "'";
      prevIsBoundary = true;
      prevLetter = "";
      continue;
    }
    const isInitial = prevIsBoundary;
    const isAfterVowelOrSign = vowels.has(prevLetter) || apostrophes.has(prevLetter);
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
  ["g", "ґ"],
  ["h", "г"],
  ["d", "д"],
  ["e", "е"],
  ["z", "з"],
  ["i", "і"],
  ["j", "й"],
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
  ["ŭ", "ў"],
  ["f", "ф"],
  ["y", "ы"],
]);

const latinDigraphs = new Map<string, string>([
  ["dzh", "дж"],
  ["dz", "дз"],
  ["shch", "щ"],
  ["zh", "ж"],
  ["kh", "х"],
  ["ts", "ц"],
  ["ch", "ч"],
  ["sh", "ш"],
  ["jo", "ё"],
  ["ju", "ю"],
  ["ja", "я"],
  ["je", "е"],
  ["io", "ё"],
  ["iu", "ю"],
  ["ia", "я"],
  ["ie", "е"],
]);

export function latinToCyrillicBelarusian(latinText: string): string {
  if (!latinText) {
    return "";
  }
  const normalized = latinText.normalize();
  let cyrillic = "";
  let index = 0;
  while (index < normalized.length) {
    const char = normalized[index] ?? "";
    const lowerChar = char.toLowerCase();
    if (boundaryChars.has(lowerChar)) {
      cyrillic += char;
      index++;
      continue;
    }
    if (lowerChar === "'") {
      cyrillic += "'";
      index++;
      continue;
    }

    const four = normalized.slice(index, index + 4);
    const fourLower = four.toLowerCase();
    const fourMapped = latinDigraphs.get(fourLower);
    if (fourMapped) {
      cyrillic += applyCasing(four[0] ?? "", fourMapped);
      index += 4;
      continue;
    }

    const three = normalized.slice(index, index + 3);
    const threeLower = three.toLowerCase();
    const threeMapped = latinDigraphs.get(threeLower);
    if (threeMapped) {
      cyrillic += applyCasing(three[0] ?? "", threeMapped);
      index += 3;
      continue;
    }

    const two = normalized.slice(index, index + 2);
    const twoLower = two.toLowerCase();
    const twoMapped = latinDigraphs.get(twoLower);
    if (twoMapped) {
      cyrillic += applyCasing(two[0] ?? "", twoMapped);
      index += 2;
      continue;
    }

    const singleMapped = latinSingles.get(lowerChar);
    if (singleMapped) {
      cyrillic += applyCasing(char, singleMapped);
      index++;
      continue;
    }

    cyrillic += char;
    index++;
  }
  return cyrillic;
}
