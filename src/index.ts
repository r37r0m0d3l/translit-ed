import { cyrillicToLatin } from "./generic/cyrillicToLatin.js";
import { latinToCyrillic } from "./generic/latinToCyrillic.js";
import {
  cyrillicToLatinKazakh as cyrillicToLatinKazakhImpl,
  latinToCyrillicKazakh as latinToCyrillicKazakhImpl,
} from "./kazakh/translit.js";
import {
  cyrillicToLatinBulgarian as cyrillicToLatinBulgarianImpl,
  latinToCyrillicBulgarian as latinToCyrillicBulgarianImpl,
} from "./bulgarian/translit.js";
import {
  cyrillicToLatinSerbian as cyrillicToLatinSerbianImpl,
  latinToCyrillicSerbian as latinToCyrillicSerbianImpl,
} from "./serbian/translit.js";
import {
  cyrillicToLatinMacedonian as cyrillicToLatinMacedonianImpl,
  latinToCyrillicMacedonian as latinToCyrillicMacedonianImpl,
} from "./macedonian/translit.js";
import {
  cyrillicToLatinUzbek as cyrillicToLatinUzbekImpl,
  latinToCyrillicUzbek as latinToCyrillicUzbekImpl,
} from "./uzbek/translit.js";
import {
  cyrillicToLatinMongolian as cyrillicToLatinMongolianImpl,
  latinToCyrillicMongolian as latinToCyrillicMongolianImpl,
} from "./mongolian/translit.js";
import {
  cyrillicToLatinUkrainian as cyrillicToLatinUkrainianImpl,
  latinToCyrillicUkrainian as latinToCyrillicUkrainianImpl,
} from "./ukrainian/translit.js";
import {
  cyrillicToLatinRussian as cyrillicToLatinRussianImpl,
  latinToCyrillicRussian as latinToCyrillicRussianImpl,
} from "./russian/translit.js";
import {
  cyrillicToLatinBelarusian as cyrillicToLatinBelarusianImpl,
  latinToCyrillicBelarusian as latinToCyrillicBelarusianImpl,
} from "./belarusian/translit.js";

//---

/**
 * @name cyrillicBulgarianToLatin
 * @description Convert Cyrillic⟶Latin text using Bulgarian flavour (BGN/PCGN 2013)
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicBulgarianToLatin(cyrillicText: string): string {
  return cyrillicToLatinBulgarianImpl(cyrillicText);
}

//---

/**
 * @name cyrillicSerbianToLatin
 * @description Convert Cyrillic⟶Latin text using Serbian flavour (national standard)
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicSerbianToLatin(cyrillicText: string): string {
  return cyrillicToLatinSerbianImpl(cyrillicText);
}

//---

/**
 * @name cyrillicMacedonianToLatin
 * @description Convert Cyrillic⟶Latin text using Macedonian flavour (national standard)
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicMacedonianToLatin(cyrillicText: string): string {
  return cyrillicToLatinMacedonianImpl(cyrillicText);
}

//---

/**
 * @name cyrillicUzbekToLatin
 * @description Convert Cyrillic⟶Latin text using Uzbek flavour (national standard)
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicUzbekToLatin(cyrillicText: string): string {
  return cyrillicToLatinUzbekImpl(cyrillicText);
}

//---

/**
 * @name cyrillicMongolianToLatin
 * @description Convert Cyrillic⟶Latin text using Mongolian flavour (national standard)
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicMongolianToLatin(cyrillicText: string): string {
  return cyrillicToLatinMongolianImpl(cyrillicText);
}

//---

/**
 * @name cyrillicBelarusianToLatin
 * @description Convert Cyrillic⟶Latin text using Belarusian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicBelarusianToLatin(cyrillicText: string): string {
  return cyrillicToLatinBelarusianImpl(cyrillicText);
}

//---

/**
 * @name cyrillicRussianToLatin
 * @description Convert Cyrillic⟶Latin text using Russian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicRussianToLatin(cyrillicText: string): string {
  return cyrillicToLatinRussianImpl(cyrillicText);
}

//---

/**
 * @name cyrillicToLatinUnicode
 * @description Convert Cyrillic⟶Latin text also converting Unicode symbols
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicToLatinUnicode(cyrillicText: string): string {
  return cyrillicToLatin(cyrillicText);
}

//---

/**
 * @name cyrillicUkrainianToLatin
 * @description Convert Cyrillic⟶Latin text using Ukrainian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicUkrainianToLatin(cyrillicText: string): string {
  return cyrillicToLatinUkrainianImpl(cyrillicText);
}

//---

/**
 * @name cyrillicKazakhToLatin
 * @description Convert Cyrillic⟶Latin text using Kazakh flavour (BGN/PCGN 1979)
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicKazakhToLatin(cyrillicText: string): string {
  return cyrillicToLatinKazakhImpl(cyrillicText);
}

//---

/**
 * @name latinToCyrillicBulgarian
 * @description Convert Latin⟶Cyrillic text using Bulgarian flavour (BGN/PCGN 2013)
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicBulgarian(latinText: string): string {
  return latinToCyrillicBulgarianImpl(latinText);
}

//---

/**
 * @name latinToCyrillicSerbian
 * @description Convert Latin⟶Cyrillic text using Serbian flavour (national standard)
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicSerbian(latinText: string): string {
  return latinToCyrillicSerbianImpl(latinText);
}

//---

/**
 * @name latinToCyrillicMacedonian
 * @description Convert Latin⟶Cyrillic text using Macedonian flavour (national standard)
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicMacedonian(latinText: string): string {
  return latinToCyrillicMacedonianImpl(latinText);
}

//---

/**
 * @name latinToCyrillicUzbek
 * @description Convert Latin⟶Cyrillic text using Uzbek flavour (national standard)
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicUzbek(latinText: string): string {
  return latinToCyrillicUzbekImpl(latinText);
}

//---

/**
 * @name latinToCyrillicMongolian
 * @description Convert Latin⟶Cyrillic text using Mongolian flavour (national standard)
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicMongolian(latinText: string): string {
  return latinToCyrillicMongolianImpl(latinText);
}

//---

/**
 * @name latinToCyrillicBelarusian
 * @description Convert Latin⟶Cyrillic text using Belarusian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicBelarusian(latinText: string): string {
  return latinToCyrillicBelarusianImpl(latinText);
}

//---

/**
 * @name latinToCyrillicRussian
 * @description Convert Latin⟶Cyrillic text using Russian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicRussian(latinText: string): string {
  return latinToCyrillicRussianImpl(latinText);
}

//---

/**
 * @name latinToCyrillicUkrainian
 * @description Convert Latin⟶Cyrillic text using Ukrainian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicUkrainian(latinText: string): string {
  return latinToCyrillicUkrainianImpl(latinText);
}

//---

/**
 * @name latinToCyrillicKazakh
 * @description Convert Latin⟶Cyrillic text using Kazakh flavour (BGN/PCGN 1979)
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicKazakh(latinText: string): string {
  return latinToCyrillicKazakhImpl(latinText);
}

//---

/**
 * @name latinToCyrillicUnicode
 * @description Convert Latin⟶Cyrillic text also converting Unicode symbols
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicUnicode(latinText: string): string {
  return latinToCyrillic(latinText);
}

//---
