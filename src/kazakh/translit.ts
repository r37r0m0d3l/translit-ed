const cyrillicToLatinMap = new Map<string, string>([
  ["а", "a"],
  ["ә", "ä"],
  ["б", "b"],
  ["в", "v"],
  ["г", "g"],
  ["ғ", "gh"],
  ["д", "d"],
  ["е", "e"],
  ["ё", "yo"],
  ["ж", "zh"],
  ["з", "z"],
  ["и", "ī"],
  ["й", "y"],
  ["к", "k"],
  ["қ", "q"],
  ["л", "l"],
  ["м", "m"],
  ["н", "n"],
  ["ң", "ng"],
  ["о", "o"],
  ["ө", "ö"],
  ["п", "p"],
  ["р", "r"],
  ["с", "s"],
  ["т", "t"],
  ["у", "ū"],
  ["ұ", "u"],
  ["ү", "ü"],
  ["ф", "f"],
  ["х", "kh"],
  ["һ", "h"],
  ["ц", "ts"],
  ["ч", "ch"],
  ["ш", "sh"],
  ["щ", "shch"],
  ["ъ", "ʺ"],
  ["ы", "y"],
  ["і", "i"],
  ["ь", "ʹ"],
  ["э", "ė"],
  ["ю", "yu"],
  ["я", "ya"],
]);

const latinToCyrillicSingles = new Map<string, string>([
  ["a", "а"],
  ["ä", "ә"],
  ["b", "б"],
  ["v", "в"],
  ["g", "г"],
  ["d", "д"],
  ["e", "е"],
  ["z", "з"],
  ["ī", "и"],
  ["y", "ы"],
  ["k", "к"],
  ["q", "қ"],
  ["l", "л"],
  ["m", "м"],
  ["n", "н"],
  ["o", "о"],
  ["ö", "ө"],
  ["p", "п"],
  ["r", "р"],
  ["s", "с"],
  ["t", "т"],
  ["ū", "у"],
  ["u", "ұ"],
  ["ü", "ү"],
  ["f", "ф"],
  ["h", "һ"],
  ["i", "і"],
  ["ė", "э"],
  ["ʺ", "ъ"],
  ["ʹ", "ь"],
]);

const latinToCyrillicDigraphs = new Map<string, string>([
  ["shch", "щ"],
  ["zh", "ж"],
  ["kh", "х"],
  ["ts", "ц"],
  ["ch", "ч"],
  ["sh", "ш"],
  ["yo", "ё"],
  ["yu", "ю"],
  ["ya", "я"],
  ["gh", "ғ"],
  ["ng", "ң"],
]);

const latinVowels = new Set(["a", "ä", "e", "i", "ī", "o", "ö", "u", "ū", "ü", "y", "ė"]);

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

export function cyrillicToLatinKazakh(cyrillicText: string): string {
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

export function latinToCyrillicKazakh(latinText: string): string {
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

    if (lowerChar === "y") {
      const nextChar = (normalized[index + 1] ?? "").toLowerCase();
      const mapped = latinVowels.has(nextChar) ? "й" : "ы";
      cyrillic += applyCasing(char, mapped);
      index++;
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
