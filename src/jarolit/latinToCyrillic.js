// Original code:
// https://программирование-по-русски.рф/яролит.яргт/
// https://bitbucket.org/budden/ppr/src/master/static/jarolit/яролит.js

export function latinToCyrillic(s) {
  const textLength = s.length;
  let sb = "";
  let index = 0;
  let currentLanguage = 0; // 0 - cyrillic, 1 - english
  let i = 0;
  let cyrillicText = "";
  let theNextLatter = "";

  function fillLetter() {
    if (i >= textLength) {
      cyrillicText = "";
    } else {
      cyrillicText = s[i];
      i++;
      if (i === textLength) {
        theNextLatter = "";
      } else {
        theNextLatter = s[i];
      }
    }
  }

  let writeLetter = function (theLetter) {
    sb = sb + theLetter;
    index++;
  };

  function errorFillingArtefact(message) {
    let fullMessage = message.toString() + " in position " + i;
    console.log(fullMessage + "");
    writeLetter("^");
  }

  function theError(message) {
    errorFillingArtefact(message);
  }

  function ProchitajjXU() {
    fillLetter();
    let unicode = 0;
    let maxSize = 6;
    while (true) {
      if (maxSize < 0) {
        theError("Too long hexadecimal number");
        writeLetter(cyrillicText);
        return;
      }
      if (cyrillicText === "x") {
        writeLetter(String.fromCharCode(unicode));
        break;
      }
      unicode = unicode * 16;
      switch (cyrillicText) {
        case "0":
          break;
        case "1":
          unicode += 1;
          break;
        case "2":
          unicode += 2;
          break;
        case "3":
          unicode += 3;
          break;
        case "4":
          unicode += 4;
          break;
        case "5":
          unicode += 5;
          break;
        case "6":
          unicode += 6;
          break;
        case "7":
          unicode += 7;
          break;
        case "8":
          unicode += 8;
          break;
        case "9":
          unicode += 9;
          break;
        case "A":
        case "a":
          unicode += 0xa;
          break;
        case "B":
        case "b":
          unicode += 0xb;
          break;
        case "C":
        case "c":
          unicode += 0xc;
          break;
        case "D":
        case "d":
          unicode += 0xd;
          break;
        case "E":
        case "e":
          unicode += 0xe;
          break;
        case "F":
        case "f":
          unicode += 0xf;
          break;
        default:
          theError("Wrong hexadecimal number");
          writeLetter(cyrillicText);
          return;
      }
      fillLetter();
      maxSize--;
    }
  }
  fillLetter();
  while (cyrillicText !== "") {
    switch (currentLanguage) {
      case 0 /*cyrillic*/:
        switch (theNextLatter) {
          case "H":
            const cyrillicLetter1 = cyrillicText;
            fillLetter();
            let DveH = theNextLatter === "H";
            switch (cyrillicLetter1) {
              case "Z":
                writeLetter("Ж");
                break;
              case "K":
                writeLetter("Х");
                break;
              case "C":
                writeLetter("Ч");
                break;
              case "S":
                if (DveH) {
                  writeLetter("Щ");
                  fillLetter();
                } else {
                  writeLetter("Ш");
                }
                break;
              case "E":
                writeLetter("Э");
                break;
              default:
                theError("Wrong construction …H");
                break;
            }
            break;
          case "h":
            const cyrillicLetter2 = cyrillicText;
            fillLetter();
            let Dveh = theNextLatter === "h";
            switch (cyrillicLetter2) {
              case "z":
                writeLetter("ж");
                break;
              case "k":
                writeLetter("х");
                break;
              case "c":
                writeLetter("ч");
                break;
              case "s":
                if (Dveh) {
                  writeLetter("щ");
                  fillLetter();
                } else {
                  writeLetter("ш");
                }
                break;
              case "e":
                writeLetter("э");
                break;
              default:
                theError("Wrong construction …h");
                break;
            }
            break;
          default:
            switch (cyrillicText) {
              case "x":
                fillLetter();
                switch (cyrillicText) {
                  case "u":
                    ProchitajjXU();
                    break;
                  case "e":
                    currentLanguage = 1;
                    break;
                  default:
                    theError("Wrong construction x…");
                    break;
                }
                break;
              case "w":
              case "W":
                theError("W & w are not acceptable");
                break;
              case "J": // Префикс
                fillLetter(); // пропускаем префикс
                switch (
                  cyrillicText // ojqua
                ) {
                  case "O":
                    writeLetter("Ё");
                    break;
                  case "J":
                    writeLetter("Й");
                    break;
                  case "Q":
                    writeLetter("Ъ");
                    break;
                  case "U":
                    writeLetter("Ю");
                    break;
                  case "A":
                    writeLetter("Я");
                    break;
                  default:
                    theError("Wrong construction J…");
                    break;
                }
                break;
              case "j":
                fillLetter();
                switch (cyrillicText) {
                  case "o":
                    writeLetter("ё");
                    break;
                  case "j":
                    writeLetter("й");
                    break;
                  case "q":
                    writeLetter("ъ");
                    break;
                  case "u":
                    writeLetter("ю");
                    break;
                  case "a":
                    writeLetter("я");
                    break;
                  default:
                    theError("Wrong construction j…");
                    break;
                }
                break;
              case "A":
                writeLetter("А");
                break;
              case "a":
                writeLetter("а");
                break;
              case "B":
                writeLetter("Б");
                break;
              case "b":
                writeLetter("б");
                break;
              case "V":
                writeLetter("В");
                break;
              case "v":
                writeLetter("в");
                break;
              case "G":
                writeLetter("Г");
                break;
              case "g":
                writeLetter("г");
                break;
              case "D":
                writeLetter("Д");
                break;
              case "d":
                writeLetter("д");
                break;
              case "E":
                writeLetter("Е");
                break;
              case "e":
                writeLetter("е");
                break;
              case "Z":
                writeLetter("З");
                break;
              case "z":
                writeLetter("з");
                break;
              case "I":
                writeLetter("И");
                break;
              case "i":
                writeLetter("и");
                break;
              case "K":
                writeLetter("К");
                break;
              case "k":
                writeLetter("к");
                break;
              case "L":
                writeLetter("Л");
                break;
              case "l":
                writeLetter("л");
                break;
              case "M":
                writeLetter("М");
                break;
              case "m":
                writeLetter("м");
                break;
              case "N":
                writeLetter("Н");
                break;
              case "n":
                writeLetter("н");
                break;
              case "O":
                writeLetter("О");
                break;
              case "o":
                writeLetter("о");
                break;
              case "P":
                writeLetter("П");
                break;
              case "p":
                writeLetter("п");
                break;
              case "R":
                writeLetter("Р");
                break;
              case "r":
                writeLetter("р");
                break;
              case "S":
                writeLetter("С");
                break;
              case "s":
                writeLetter("с");
                break;
              case "T":
                writeLetter("Т");
                break;
              case "t":
                writeLetter("т");
                break;
              case "U":
                writeLetter("У");
                break;
              case "u":
                writeLetter("у");
                break;
              case "F":
                writeLetter("Ф");
                break;
              case "f":
                writeLetter("ф");
                break;
              case "C":
                writeLetter("Ц");
                break;
              case "c":
                writeLetter("ц");
                break;
              case "Y":
                writeLetter("Ы");
                break;
              case "y":
                writeLetter("ы");
                break;
              case "Q":
                writeLetter("Ь");
                break;
              case "q":
                writeLetter("ь");
                break;
              case "H":
                theError("Wrong single H");
                break;
              case "h":
                theError("Wrong single h");
                break;
              default:
                writeLetter(cyrillicText);
            }
        }
        break;
      case 1 /*latin*/:
        switch (cyrillicText) {
          case "w":
            fillLetter();
            switch (cyrillicText) {
              case "w":
                writeLetter("w");
                break;
              default:
                theError("Wrong construction w…");
                break;
            }
            break;
          case "W":
            fillLetter();
            switch (cyrillicText) {
              case "W":
                writeLetter("W");
                break;
              default:
                theError("Wrong construction W…");
                break;
            }
            break;
          case "x":
            fillLetter();
            switch (cyrillicText) {
              case "x":
                writeLetter("x");
                break;
              case "r":
                currentLanguage = 0;
                break;
              case "u":
                ProchitajjXU();
                break;
              default:
                theError("Wrong construction x…");
                break;
            }
            break;
          case "X":
            fillLetter();
            switch (cyrillicText) {
              case "X":
                writeLetter("X");
                break;
              default:
                theError("Wrong construction X…");
                break;
            }
            break;
          default:
            writeLetter(cyrillicText);
            break;
        }
        break;
      default:
        theError("Wrong alphabet");
        break;
    }
    fillLetter();
  }
  return sb;
}
