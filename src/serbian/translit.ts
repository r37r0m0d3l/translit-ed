const cyrillicToLatinMap = new Map<string, string>([
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
]);

const latinToCyrillicSingles = new Map<string, string>([
  ["a", "а"],
  ["b", "б"],
  ["v", "в"],
  ["g", "г"],
  ["d", "д"],
  ["đ", "ђ"],
  ["e", "е"],
  ["ž", "ж"],
  ["z", "з"],
  ["i", "и"],
  ["j", "ј"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["p", "п"],
  ["r", "р"],
  ["s", "с"],
  ["t", "т"],
  ["ć", "ћ"],
  ["u", "у"],
  ["f", "ф"],
  ["h", "х"],
  ["c", "ц"],
  ["č", "ч"],
  ["š", "ш"],
]);

const latinToCyrillicDigraphs = new Map<string, string>([
  ["dž", "џ"],
  ["dj", "ђ"],
  ["lj", "љ"],
  ["nj", "њ"],
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
  if (!mapped) {
    return char;
  }
  return applyCasing(char, mapped);
}

export function cyrillicToLatinSerbian(cyrillicText: string): string {
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

export function latinToCyrillicSerbian(latinText: string): string {
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
