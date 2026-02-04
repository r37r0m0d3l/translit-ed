const baseMap = new Map<string, string>([
  ["а", "a"],
  ["б", "b"],
  ["в", "v"],
  ["г", "h"],
  ["ґ", "g"],
  ["д", "d"],
  ["е", "e"],
  ["ж", "zh"],
  ["з", "z"],
  ["и", "y"],
  ["і", "i"],
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
  ["'",""],
  ["’",""],
  ["ʼ",""],
]);

const vowels = new Set(["а", "е", "и", "і", "о", "у", "я", "ю", "є", "ї"]);

function applyCasing(source: string, mapped: string): string {
  if (source === source.toUpperCase()) {
    if (mapped.length > 1) {
      return (mapped[0] ?? "").toUpperCase() + mapped.slice(1);
    }
    return mapped.toUpperCase();
  }
  return mapped;
}

function mapCyrillicChar(char: string, isInitial: boolean, isAfterVowel: boolean): string | undefined {
  const lower = char.toLowerCase();
  switch (lower) {
    case "є":
      return isInitial || isAfterVowel ? "ye" : "ie";
    case "ї":
      return isInitial ? "yi" : "i";
    case "й":
      return isInitial ? "y" : "i";
    case "ю":
      return isInitial || isAfterVowel ? "yu" : "iu";
    case "я":
      return isInitial || isAfterVowel ? "ya" : "ia";
    default:
      return baseMap.get(lower);
  }
}

export function cyrillicToLatinUkrainian(cyrillicText: string): string {
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
    if (lower === " " || lower === "\n" || lower === "\t") {
      latin += char;
      prevIsBoundary = true;
      prevLetter = "";
      continue;
    }
    if (lower === "'" || lower === "’" || lower === "ʼ") {
      prevIsBoundary = true;
      prevLetter = "";
      continue;
    }
    const isInitial = prevIsBoundary;
    const isAfterVowel = vowels.has(prevLetter);
    const mapped = mapCyrillicChar(char, isInitial, isAfterVowel);
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
  ["y", "и"],
  ["i", "і"],
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
  ["ye", "є"],
  ["yi", "ї"],
  ["yu", "ю"],
  ["ya", "я"],
  ["ie", "є"],
  ["iu", "ю"],
  ["ia", "я"],
]);

const latinVowels = new Set(["a", "e", "i", "o", "u"]);
const latinBoundary = new Set([" ", "\n", "\t", ".", ",", "!", "?", ":", ";", "(", ")", "-", "—", "–", "\"", "«", "»"]);

export function latinToCyrillicUkrainian(latinText: string): string {
  if (!latinText) {
    return "";
  }
  const normalized = latinText.normalize();
  let cyrillic = "";
  let index = 0;
  let prevLatin = "";
  let prevIsBoundary = true;
  while (index < normalized.length) {
    const char = normalized[index] ?? "";
    const lowerChar = char.toLowerCase();
    if (lowerChar === " " || lowerChar === "\n" || lowerChar === "\t") {
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
    if (twoMapped && !(twoLower === "yi" && !prevIsBoundary)) {
      cyrillic += applyCasing(two[0] ?? "", twoMapped);
      index += 2;
      prevIsBoundary = false;
      prevLatin = (two[two.length - 1] ?? "").toLowerCase();
      continue;
    }

    if (lowerChar === "y") {
      const mapped = !prevIsBoundary && latinVowels.has(prevLatin) ? "й" : "и";
      cyrillic += applyCasing(char, mapped);
      index++;
      prevIsBoundary = false;
      prevLatin = lowerChar;
      continue;
    }

    if (lowerChar === "i" && prevLatin === "y") {
      const nextChar = (normalized[index + 1] ?? "").toLowerCase();
      const isBoundaryNext = nextChar === "" || latinBoundary.has(nextChar);
      const mapped = isBoundaryNext ? "й" : "ї";
      cyrillic += applyCasing(char, mapped);
      index++;
      prevIsBoundary = false;
      prevLatin = lowerChar;
      continue;
    }

    const singleMapped = latinSingles.get(lowerChar);
    if (singleMapped) {
      cyrillic += applyCasing(char, singleMapped);
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
