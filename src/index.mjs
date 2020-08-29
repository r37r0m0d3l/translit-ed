import { CyrillicToLatinUnsafe } from "./plain/CyrillicToLatinUnsafe.js";
import { cyrillicToLatin } from "./jarolit/cyrillicToLatin.js";
import { cyrillicToLatinSimple } from "./quick/cyrillicToLatin.js";
import { latinToCyrillic } from "./jarolit/latinToCyrillic.js";

/**
 * @name cyrillicRussianToLatin
 * @alias translitRu
 * @description Convert Cyrillic⟶Latin text using Russian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicRussianToLatin(cyrillicText) {
  return CyrillicToLatinUnsafe({ preset: "ru" }).transform(cyrillicText);
}

/**
 * @name translitRu
 * @alias cyrillicRussianToLatin
 * @description Convert Cyrillic⟶Latin text using Russian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function translitRu(cyrillicText) {
  return CyrillicToLatinUnsafe({ preset: "ru" }).transform(cyrillicText);
}

//---

/**
 * @name cyrillicToLatinQuick
 * @alias translit
 * @description Convert Cyrillic⟶Latin text using a very simple and quick method
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicToLatinQuick(cyrillicText) {
  return cyrillicToLatinSimple(cyrillicText);
}

/**
 * @name translit
 * @alias cyrillicToLatinQuick
 * @description Convert Cyrillic⟶Latin text using a very simple and quick method
 * @param {string} cyrillicText
 * @returns {string}
 */
export function translit(cyrillicText) {
  return cyrillicToLatinSimple(cyrillicText);
}

//---

/**
 * @name cyrillicToLatinUnicode
 * @alias translitUCS
 * @description Convert Cyrillic⟶Latin text also converting Unicode symbols
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicToLatinUnicode(cyrillicText) {
  return cyrillicToLatin(cyrillicText);
}

/**
 * @name translitUCS
 * @alias cyrillicToLatinUnicode
 * @description Convert Cyrillic⟶Latin text also converting Unicode symbols
 * @param {string} cyrillicText
 * @returns {string}
 */
export function translitUCS(cyrillicText) {
  return cyrillicToLatin(cyrillicText);
}

//---

/**
 * @name cyrillicUkrainianToLatin
 * @alias translitUk
 * @description Convert Cyrillic⟶Latin text using Ukrainian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicUkrainianToLatin(cyrillicText) {
  return CyrillicToLatinUnsafe({ preset: "uk" }).transform(cyrillicText);
}

/**
 * @name translitUk
 * @alias cyrillicUkrainianToLatin
 * @description Convert Cyrillic⟶Latin text using Ukrainian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function translitUk(cyrillicText) {
  return CyrillicToLatinUnsafe({ preset: "uk" }).transform(cyrillicText);
}

//---

/**
 * @name latinToCyrillicRussian
 * @alias unTranslitRu
 * @description Convert Latin⟶Cyrillic text using Russian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicRussian(latinText) {
  return CyrillicToLatinUnsafe({ preset: "ru" }).reverse(latinText);
}

/**
 * @name unTranslitRu
 * @alias latinToCyrillicRussian
 * @description Convert Latin⟶Cyrillic text using Russian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function unTranslitRu(latinText) {
  return CyrillicToLatinUnsafe({ preset: "ru" }).reverse(latinText);
}

//---

/**
 * @name latinToCyrillicUkrainian
 * @alias unTranslitUk
 * @description Convert Latin⟶Cyrillic text using Ukrainian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicUkrainian(latinText) {
  return CyrillicToLatinUnsafe({ preset: "uk" }).reverse(latinText);
}

/**
 * @name unTranslitUk
 * @alias latinToCyrillicUkrainian
 * @description Convert Latin⟶Cyrillic text using Ukrainian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function unTranslitUk(latinText) {
  return CyrillicToLatinUnsafe({ preset: "uk" }).reverse(latinText);
}

//---

/**
 * @name latinToCyrillicUnicode
 * @alias unTranslitUCS
 * @description Convert Latin⟶Cyrillic text also converting Unicode symbols
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicUnicode(latinText) {
  return latinToCyrillic(latinText);
}

/**
 * @name unTranslitUCS
 * @alias latinToCyrillicUnicode
 * @description Convert Latin⟶Cyrillic text also converting Unicode symbols
 * @param {string} latinText
 * @returns {string}
 */
export function unTranslitUCS(latinText) {
  return latinToCyrillic(latinText);
}

//---
