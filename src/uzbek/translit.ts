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
  ["p", "п"],
  ["r", "р"],
  ["s", "с"],
  ["t", "т"],
  ["u", "у"],
  ["f", "ф"],
  ["x", "х"],
  ["q", "қ"],
  ["h", "ҳ"],
  ["'", "ъ"],
]);

const latinToCyrillicDigraphs = new Map<string, string>([
  ["g'", "ғ"],
  ["o'", "ў"],
  ["sh", "ш"],
  ["ch", "ч"],
  ["yo", "ё"],
  ["yu", "ю"],
  ["ya", "я"],
  ["ts", "ц"],
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

export function cyrillicToLatinUzbek(cyrillicText: string): string {
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

export function latinToCyrillicUzbek(latinText: string): string {
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
