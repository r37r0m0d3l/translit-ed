const cyrillicToLatinMap = new Map<string, string>([
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
]);

const latinToCyrillicSingles = new Map<string, string>([
  ["a", "а"],
  ["b", "б"],
  ["v", "в"],
  ["g", "г"],
  ["d", "д"],
  ["e", "е"],
  ["j", "ж"],
  ["z", "з"],
  ["i", "и"],
  ["y", "й"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["ö", "ө"],
  ["p", "п"],
  ["r", "р"],
  ["s", "с"],
  ["t", "т"],
  ["u", "у"],
  ["ü", "ү"],
  ["f", "ф"],
]);

const latinToCyrillicDigraphs = new Map<string, string>([
  ["shch", "щ"],
  ["kh", "х"],
  ["ts", "ц"],
  ["ch", "ч"],
  ["sh", "ш"],
  ["yo", "ё"],
  ["yu", "ю"],
  ["ya", "я"],
]);

function applyCasing(source: string, mapped: string): string {
  if (source === source.toUpperCase()) {
    if (mapped.length > 1) {
      return (mapped[0] ?? "").toUpperCase() + mapped.slice(1);
    }
    return mapped.toUpperCase();
  }
  return mapped;
}

function mapCyrillicChar(char: string): string {
  const lower = char.toLowerCase();
  const mapped = cyrillicToLatinMap.get(lower);
  if (mapped === undefined) {
    return char;
  }
  return applyCasing(char, mapped);
}

export function cyrillicToLatinMongolian(cyrillicText: string): string {
  if (!cyrillicText) {
    return "";
  }
  const normalized = cyrillicText.normalize();
  let latin = "";
  for (let index = 0; index < normalized.length; index++) {
    const char = normalized[index] ?? "";
    latin += mapCyrillicChar(char);
  }
  return latin;
}

export function latinToCyrillicMongolian(latinText: string): string {
  if (!latinText) {
    return "";
  }
  const normalized = latinText.normalize();
  let cyrillic = "";
  let index = 0;
  while (index < normalized.length) {
    const char = normalized[index] ?? "";
    const lowerChar = char.toLowerCase();
    if (lowerChar === " ") {
      cyrillic += " ";
      index++;
      continue;
    }

    const four = normalized.slice(index, index + 4);
    const fourLower = four.toLowerCase();
    const fourMapped = latinToCyrillicDigraphs.get(fourLower);
    if (fourMapped) {
      cyrillic += applyCasing(four[0] ?? "", fourMapped);
      index += 4;
      continue;
    }

    const two = normalized.slice(index, index + 2);
    const twoLower = two.toLowerCase();
    const twoMapped = latinToCyrillicDigraphs.get(twoLower);
    if (twoMapped) {
      cyrillic += applyCasing(two[0] ?? "", twoMapped);
      index += 2;
      continue;
    }

    const singleMapped = latinToCyrillicSingles.get(lowerChar);
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
