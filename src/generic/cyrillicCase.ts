export function isCyrillicLetter(char: string): boolean {
  return /[\u0400-\u04FF]/.test(char);
}

function getCyrillicWordBounds(source: string, index: number): { start: number; end: number } {
  let start = index;
  let end = index;

  while (start > 0 && isCyrillicLetter(source[start - 1] ?? "")) {
    start--;
  }
  while (end < source.length && isCyrillicLetter(source[end] ?? "")) {
    end++;
  }

  return { start, end };
}

function isUppercaseCyrillicWord(word: string): boolean {
  return word.length > 1 && word === word.toUpperCase();
}

function isSkippableBoundaryChar(char: string): boolean {
  return /[\s'"’ʼ"«»()[\]{}\-—–,.;:!?]/u.test(char);
}

function hasAdjacentUppercaseCyrillicWord(source: string, index: number, step: -1 | 1): boolean {
  let cursor = index;

  while (cursor >= 0 && cursor < source.length) {
    const char = source[cursor] ?? "";

    if (isSkippableBoundaryChar(char)) {
      cursor += step;
      continue;
    }

    if (!isCyrillicLetter(char)) {
      return false;
    }

    const { start, end } = getCyrillicWordBounds(source, cursor);
    return isUppercaseCyrillicWord(source.slice(start, end));
  }

  return false;
}

export function isUppercaseCyrillicWordAt(source: string, index: number): boolean {
  const { start, end } = getCyrillicWordBounds(source, index);
  const word = source.slice(start, end);

  if (isUppercaseCyrillicWord(word)) {
    return true;
  }

  // Keep standalone sentence-case words like "Я" as Ja, but allow all-caps
  // single-letter words such as "Є ІНШИЙ" to preserve their full uppercase form.
  return (
    word.length === 1 &&
    word === word.toUpperCase() &&
    (hasAdjacentUppercaseCyrillicWord(source, start - 1, -1) ||
      hasAdjacentUppercaseCyrillicWord(source, end, 1))
  );
}
