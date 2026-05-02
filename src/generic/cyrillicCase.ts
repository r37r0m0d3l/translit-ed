export function isCyrillicLetter(char: string): boolean {
  return /[\u0400-\u04FF]/.test(char);
}

export function isUppercaseCyrillicWordAt(source: string, index: number): boolean {
  let start = index;
  let end = index;

  while (start > 0 && isCyrillicLetter(source[start - 1] ?? "")) {
    start--;
  }
  while (end < source.length && isCyrillicLetter(source[end] ?? "")) {
    end++;
  }

  const word = source.slice(start, end);
  // Ignore sentence-case single-letter words like "Я".
  return word.length > 1 && word === word.toUpperCase();
}
