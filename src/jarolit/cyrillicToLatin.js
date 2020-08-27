// Original code:
// https://программирование-по-русски.рф/яролит.яргт/
// https://bitbucket.org/budden/ppr/src/master/static/jarolit/яролит.js

export function cyrillicToLatin(cyrText) {
  function cyrillicLetterToLatin(letter, currLang) {
    function replaceLetter(languageCodeConvertTo, textToTransform) {
      if (currLang === "r" && languageCodeConvertTo === "e") {
        currLang = "e";
        return "xe" + textToTransform;
      } else if (currLang === "e" && languageCodeConvertTo === "r") {
        currLang = "r";
        return "xr" + textToTransform;
      } else {
        return textToTransform;
      }
    }
    switch (letter) {
      case "а":
        return replaceLetter("r", "a");
      case "б":
        return replaceLetter("r", "b");
      case "в":
        return replaceLetter("r", "v");
      case "г":
        return replaceLetter("r", "g");
      case "д":
        return replaceLetter("r", "d");
      case "е":
        return replaceLetter("r", "e");
      case "ё":
        return replaceLetter("r", "jo");
      case "ж":
        return replaceLetter("r", "zh");
      case "з":
        return replaceLetter("r", "z");
      case "и":
        return replaceLetter("r", "i");
      case "й":
        return replaceLetter("r", "jj");
      case "к":
        return replaceLetter("r", "k");
      case "л":
        return replaceLetter("r", "l");
      case "м":
        return replaceLetter("r", "m");
      case "н":
        return replaceLetter("r", "n");
      case "о":
        return replaceLetter("r", "o");
      case "п":
        return replaceLetter("r", "p");
      case "р":
        return replaceLetter("r", "r");
      case "с":
        return replaceLetter("r", "s");
      case "т":
        return replaceLetter("r", "t");
      case "у":
        return replaceLetter("r", "u");
      case "ф":
        return replaceLetter("r", "f");
      case "х":
        return replaceLetter("r", "kh");
      case "ц":
        return replaceLetter("r", "c");
      case "ч":
        return replaceLetter("r", "ch");
      case "ш":
        return replaceLetter("r", "sh");
      case "щ":
        return replaceLetter("r", "shh");
      case "ъ":
        return replaceLetter("r", "jq");
      case "ы":
        return replaceLetter("r", "y");
      case "ь":
        return replaceLetter("r", "q");
      case "э":
        return replaceLetter("r", "eh");
      case "ю":
        return replaceLetter("r", "ju");
      case "я":
        return replaceLetter("r", "ja");
      case "А":
        return replaceLetter("r", "A");
      case "Б":
        return replaceLetter("r", "B");
      case "В":
        return replaceLetter("r", "V");
      case "Г":
        return replaceLetter("r", "G");
      case "Д":
        return replaceLetter("r", "D");
      case "Е":
        return replaceLetter("r", "E");
      case "Ё":
        return replaceLetter("r", "JO");
      case "Ж":
        return replaceLetter("r", "ZH");
      case "З":
        return replaceLetter("r", "Z");
      case "И":
        return replaceLetter("r", "I");
      case "Й":
        return replaceLetter("r", "JJ");
      case "К":
        return replaceLetter("r", "K");
      case "Л":
        return replaceLetter("r", "L");
      case "М":
        return replaceLetter("r", "M");
      case "Н":
        return replaceLetter("r", "N");
      case "О":
        return replaceLetter("r", "O");
      case "П":
        return replaceLetter("r", "P");
      case "Р":
        return replaceLetter("r", "R");
      case "С":
        return replaceLetter("r", "S");
      case "Т":
        return replaceLetter("r", "T");
      case "У":
        return replaceLetter("r", "U");
      case "Ф":
        return replaceLetter("r", "F");
      case "Х":
        return replaceLetter("r", "KH");
      case "Ц":
        return replaceLetter("r", "C");
      case "Ч":
        return replaceLetter("r", "CH");
      case "Ш":
        return replaceLetter("r", "SH");
      case "Щ":
        return replaceLetter("r", "SHH");
      case "Ъ":
        return replaceLetter("r", "JQ");
      case "Ы":
        return replaceLetter("r", "Y");
      case "Ь":
        return replaceLetter("r", "Q");
      case "Э":
        return replaceLetter("r", "EH");
      case "Ю":
        return replaceLetter("r", "JU");
      case "Я":
        return replaceLetter("r", "JA");
      case "a":
        return replaceLetter("e", "a");
      case "b":
        return replaceLetter("e", "b");
      case "c":
        return replaceLetter("e", "c");
      case "d":
        return replaceLetter("e", "d");
      case "e":
        return replaceLetter("e", "e");
      case "f":
        return replaceLetter("e", "f");
      case "g":
        return replaceLetter("e", "g");
      case "h":
        return replaceLetter("e", "h");
      case "i":
        return replaceLetter("e", "i");
      case "j":
        return replaceLetter("e", "jj");
      case "k":
        return replaceLetter("e", "k");
      case "l":
        return replaceLetter("e", "l");
      case "m":
        return replaceLetter("e", "m");
      case "n":
        return replaceLetter("e", "n");
      case "o":
        return replaceLetter("e", "o");
      case "p":
        return replaceLetter("e", "p");
      case "q":
        return replaceLetter("e", "q");
      case "r":
        return replaceLetter("e", "r");
      case "s":
        return replaceLetter("e", "s");
      case "t":
        return replaceLetter("e", "t");
      case "u":
        return replaceLetter("e", "u");
      case "v":
        return replaceLetter("e", "v");
      case "w":
        return replaceLetter("e", "ww");
      case "x":
        return replaceLetter("e", "xx");
      case "y":
        return replaceLetter("e", "y");
      case "z":
        return replaceLetter("e", "z");
      case "A":
        return replaceLetter("e", "A");
      case "B":
        return replaceLetter("e", "B");
      case "C":
        return replaceLetter("e", "C");
      case "D":
        return replaceLetter("e", "D");
      case "E":
        return replaceLetter("e", "E");
      case "F":
        return replaceLetter("e", "F");
      case "G":
        return replaceLetter("e", "G");
      case "H":
        return replaceLetter("e", "H");
      case "I":
        return replaceLetter("e", "I");
      case "J":
        return replaceLetter("e", "JJ");
      case "K":
        return replaceLetter("e", "K");
      case "L":
        return replaceLetter("e", "L");
      case "M":
        return replaceLetter("e", "M");
      case "N":
        return replaceLetter("e", "N");
      case "O":
        return replaceLetter("e", "O");
      case "P":
        return replaceLetter("e", "P");
      case "Q":
        return replaceLetter("e", "Q");
      case "R":
        return replaceLetter("e", "R");
      case "S":
        return replaceLetter("e", "S");
      case "T":
        return replaceLetter("e", "T");
      case "U":
        return replaceLetter("e", "U");
      case "V":
        return replaceLetter("e", "V");
      case "W":
        return replaceLetter("e", "WW");
      case "X":
        return replaceLetter("e", "XX");
      case "Y":
        return replaceLetter("e", "Y");
      case "Z":
        return replaceLetter("e", "Z");
      default:
        const codeAt = letter.charCodeAt(0);
        if (codeAt > 255) {
          return "xu" + codeAt.toString(16) + "x";
        } else {
          return letter;
        }
    }
  }
  let latin = "";
  let currLang = "r";
  for (let index = 0, length = cyrText.length; index < length; index++) {
    latin = latin + cyrillicLetterToLatin(cyrText.charAt(index), currLang);
  }
  return latin;
}
