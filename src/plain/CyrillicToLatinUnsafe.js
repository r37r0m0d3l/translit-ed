// Original code:
// https://github.com/greybax/cyrillic-to-translit-js

import { invert } from "./invert.js";

export function CyrillicToLatinUnsafe(config) {
  const _preset = config ? config.preset : "ru";
  const _firstLetters = {
    а: "a",
    б: "b",
    в: "v",
    д: "d",
    з: "z",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    ь: "",
  };
  if (_preset === "ru") {
    Object.assign(_firstLetters, {
      г: "g",
      и: "i",
      ъ: "",
      ы: "i",
      э: "e",
    });
  } else if (_preset === "uk") {
    Object.assign(_firstLetters, {
      "г": "h",
      "ґ": "g",
      "е": "e",
      "и": "y",
      "і": "i",
      "'": "",
      "’": "",
      "ʼ": "",
    });
  }
  let _reversedFirstLetters;
  if (_preset === "ru") {
    _reversedFirstLetters = Object.assign(invert(_firstLetters), {
      "i": "и",
      "": "",
    });
  } else if (_preset === "uk") {
    _reversedFirstLetters = Object.assign(invert(_firstLetters), { "": "" });
  }
  const _initialDigraphs = _preset === "ru" ? { е: "ye" } : { є: "ye", ї: "yi" };
  const _regularDigraphs = {
    ё: "yo",
    ж: "zh",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ю: "yu",
    я: "ya",
  };
  const _firstDigraphs = Object.assign({}, _regularDigraphs, _initialDigraphs);
  const _reversedFirstDigraphs = Object.assign(invert(_firstDigraphs));
  const _firstAssociations = Object.assign(_firstLetters, _firstDigraphs);
  const _nonFirstLetters = Object.assign({}, _firstLetters, { й: "i" });
  if (_preset === "ru") {
    Object.assign(_nonFirstLetters, { е: "e" });
  } else if (_preset === "uk") {
    Object.assign(_nonFirstLetters, { ї: "i" });
  }
  let _reversedNonFirstLetters;
  if (_preset === "ru") {
    // Russian: i > always и, y > ы in non-initial position, e > е in non-initial position
    _reversedNonFirstLetters = Object.assign(invert(_firstLetters), {
      "i": "и",
      "y": "ы",
      "e": "е",
      "": "",
    });
  } else if (_preset === "uk") {
    _reversedNonFirstLetters = Object.assign(invert(_firstLetters), { "": "" });
  }
  let _nonInitialDigraphs = {};
  if (_preset === "uk") {
    _nonInitialDigraphs = {
      є: "ie",
      ю: "iu",
      я: "ia",
    };
  }
  const _nonFirstDigraphs = Object.assign(_regularDigraphs, _nonInitialDigraphs);
  const _reversedNonFirstDigraphs = Object.assign(invert(_nonFirstDigraphs));
  const _nonFirstAssociations = Object.assign(_nonFirstLetters, _nonFirstDigraphs);
  function transform(input, spaceReplacement) {
    if (!input) {
      return "";
    }
    const normalizedInput = input.normalize();
    let newStr = "";
    let isWordBoundary = false;
    for (let i = 0; i < normalizedInput.length; i++) {
      const isUpperCaseOrWhatever = normalizedInput[i] === normalizedInput[i].toUpperCase();
      let strLowerCase = normalizedInput[i].toLowerCase();
      if (strLowerCase === " ") {
        newStr += spaceReplacement ? spaceReplacement : " ";
        isWordBoundary = true;
        continue;
      }
      let newLetter;
      if (_preset === "uk" && normalizedInput.slice(i - 1, i + 1).toLowerCase() === "зг") {
        newLetter = "gh";
      } else if (i === 0 || isWordBoundary) {
        newLetter = _firstAssociations[strLowerCase];
        isWordBoundary = false;
      } else {
        newLetter = _nonFirstAssociations[strLowerCase];
      }
      if ("undefined" === typeof newLetter) {
        newStr += isUpperCaseOrWhatever ? strLowerCase.toUpperCase() : strLowerCase;
      } else if (isUpperCaseOrWhatever) {
        newLetter.length > 1
          ? (newStr += newLetter[0].toUpperCase() + newLetter.slice(1))
          : (newStr += newLetter.toUpperCase());
      } else {
        newStr += newLetter;
      }
    }
    return newStr;
  }
  function reverse(input, spaceReplacement) {
    if (!input) {
      return "";
    }
    const normalizedInput = input.normalize();
    let newStr = "";
    let isWordBoundary = false;
    let index = 0;
    while (index < normalizedInput.length) {
      const isUpperCaseOrWhatever = normalizedInput[index] === normalizedInput[index].toUpperCase();
      let strLowerCase = normalizedInput[index].toLowerCase();
      let currentIndex = index;
      if (strLowerCase === " " || strLowerCase === spaceReplacement) {
        newStr += " ";
        isWordBoundary = true;
        index++;
        continue;
      }
      let newLetter;
      let digraph = normalizedInput.slice(index, index + 2).toLowerCase();
      if (index === 0 || isWordBoundary) {
        newLetter = _reversedFirstDigraphs[digraph];
        if (newLetter) {
          index += 2;
        } else {
          newLetter = _reversedFirstLetters[strLowerCase];
          index++;
        }
        isWordBoundary = false;
      } else {
        newLetter = _reversedNonFirstDigraphs[digraph];
        if (newLetter) {
          index += 2;
        } else {
          newLetter = _reversedNonFirstLetters[strLowerCase];
          index++;
        }
      }
      if (normalizedInput.slice(currentIndex, currentIndex + 4).toLowerCase() === "shch") {
        newLetter = "щ";
        index = currentIndex + 4;
      } else if (normalizedInput.slice(currentIndex - 1, currentIndex + 2).toLowerCase() === "zgh") {
        newLetter = "г";
        index = currentIndex + 2;
      }

      if (typeof newLetter === "undefined") {
        newStr += isUpperCaseOrWhatever ? strLowerCase.toUpperCase() : strLowerCase;
      } else {
        if (isUpperCaseOrWhatever) {
          newLetter.length > 1
            ? (newStr += newLetter[0].toUpperCase() + newLetter.slice(1))
            : (newStr += newLetter.toUpperCase());
        } else {
          newStr += newLetter;
        }
      }
    }

    return newStr;
  }

  return {
    transform: transform,
    reverse: reverse,
  };
}
