import { CyrillicToLatinUnsafe } from "./plain/CyrillicToLatinUnsafe.js";
import { cyrillicToLatin } from "./jarolit/cyrillicToLatin.js";
import { cyrillicToLatinSimple } from "./quick/cyrillicToLatin.js";
import { latinToCyrillic } from "./jarolit/latinToCyrillic.js";

/**
 * @name cyrillicToLatinUnicode
 * @description Convert Cyrillic⟶Latin text also converting Unicode symbols
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicToLatinUnicode(cyrillicText) {
  return cyrillicToLatin(cyrillicText);
}

/**
 * @name latinToCyrillicUnicode
 * @description Convert Latin⟶Cyrillic text also converting Unicode symbols
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicUnicode(latinText) {
  return latinToCyrillic(latinText);
}

/**
 * @name cyrillicUkrainianToLatin
 * @description Convert Cyrillic⟶Latin text using Ukrainian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicUkrainianToLatin(cyrillicText) {
  return CyrillicToLatinUnsafe({ preset: "uk" }).transform(cyrillicText);
}

/**
 * @name cyrillicRussianToLatin
 * @description Convert Cyrillic⟶Latin text using Russian flavour
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicRussianToLatin(cyrillicText) {
  return CyrillicToLatinUnsafe({ preset: "ru" }).transform(cyrillicText);
}

/**
 * @name latinToCyrillicUkrainian
 * @description Convert Latin⟶Cyrillic text using Ukrainian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicUkrainian(latinText) {
  return CyrillicToLatinUnsafe({ preset: "uk" }).reverse(latinText);
}

/**
 * @name latinToCyrillicToRussian
 * @description Convert Latin⟶Cyrillic text using Russian flavour
 * @param {string} latinText
 * @returns {string}
 */
export function latinToCyrillicToRussian(latinText) {
  return CyrillicToLatinUnsafe({ preset: "ru" }).reverse(latinText);
}

/**
 * @name cyrillicToLatinQuick
 * @description Convert Cyrillic⟶Latin text using a very simple and quick method
 * @param {string} cyrillicText
 * @returns {string}
 */
export function cyrillicToLatinQuick(cyrillicText) {
  return cyrillicToLatinSimple(cyrillicText);
}
