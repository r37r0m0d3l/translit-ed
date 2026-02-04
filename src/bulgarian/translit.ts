const cyrillicToLatinMap = new Map<string, string>([
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
]);

const latinToCyrillicSingles = new Map<string, string>([
  ["a", "а"],
  ["b", "б"],
  ["v", "в"],
  ["g", "г"],
  ["d", "д"],
  ["e", "е"],
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
  ["h", "х"],
]);

const latinToCyrillicDigraphs = new Map<string, string>([
  ["sht", "щ"],
  ["zh", "ж"],
  ["ts", "ц"],
  ["ch", "ч"],
  ["sh", "ш"],
  ["yu", "ю"],
  ["ya", "я"],
]);

const latinVowels = new Set(["a", "e", "i", "o", "u", "y"]);

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

export function cyrillicToLatinBulgarian(cyrillicText: string): string {
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

export function latinToCyrillicBulgarian(latinText: string): string {
  if (!latinText) {
    return "";
  }
  const normalized = latinText.normalize();
  let cyrillic = "";
  let index = 0;
  let isWordBoundary = true;
  while (index < normalized.length) {
    const char = normalized[index] ?? "";
    const lowerChar = char.toLowerCase();
    if (lowerChar === " ") {
      cyrillic += " ";
      index++;
      isWordBoundary = true;
      continue;
    }

    const three = normalized.slice(index, index + 3);
    const threeLower = three.toLowerCase();
    const threeMapped = latinToCyrillicDigraphs.get(threeLower);
    if (threeMapped) {
      cyrillic += applyCasing(three[0] ?? "", threeMapped);
      index += 3;
      isWordBoundary = false;
      continue;
    }

    const two = normalized.slice(index, index + 2);
    const twoLower = two.toLowerCase();
    if (twoLower === "yo") {
      const prevChar = isWordBoundary ? "" : (normalized[index - 1] ?? "").toLowerCase();
      const useSoftSign = prevChar !== "" && !latinVowels.has(prevChar);
      const mapped = useSoftSign ? "ьо" : "йо";
      cyrillic += applyCasing(two[0] ?? "", mapped);
      index += 2;
      isWordBoundary = false;
      continue;
    }

    const twoMapped = latinToCyrillicDigraphs.get(twoLower);
    if (twoMapped) {
      cyrillic += applyCasing(two[0] ?? "", twoMapped);
      index += 2;
      isWordBoundary = false;
      continue;
    }

    const singleMapped = latinToCyrillicSingles.get(lowerChar);
    if (singleMapped) {
      cyrillic += applyCasing(char, singleMapped);
      index++;
      isWordBoundary = false;
      continue;
    }

    cyrillic += char;
    index++;
    isWordBoundary = false;
  }
  return cyrillic;
}
