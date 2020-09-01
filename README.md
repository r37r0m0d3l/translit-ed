![Translit-Ed](.github/assets/banner.webp?raw=true "Translit-Ed")

# Translit-Ed

🇷🇺 🇺🇦 🇧🇾 🡆 🔠 Aggregator of various Cyrillic transliteration methods.

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]

---

> ⏳ **Please Note:** This is "Work In Progress" package. The new functionality will be added very slowly.

---

## Usage

```javascript
import {
    cyrillicRussianToLatin,
    cyrillicToLatinQuick,
    cyrillicToLatinUnicode,
    cyrillicUkrainianToLatin,
    latinToCyrillicRussian,
    latinToCyrillicUkrainian,
    latinToCyrillicUnicode,
    translit,
    translitRu,
    translitUCS,
    translitUk,
    unTranslitRu,
    unTranslitUCS,
    unTranslitUk,
} from "translit-ed";
```

---

## Examples

🇷🇺 Russian `Привет Мир!`

```javascript
cyrillicToLatinQuick("Привет Мир!") // Privet Mir!
cyrillicRussianToLatin("Привет Мир!") // Privet Mir!
cyrillicToLatinUnicode("Привет Мир!") // Privet Mir!
```

🇧🇾 Belarusian `Прывітанне Сусвет!`

```javascript
cyrillicToLatinQuick("Прывітанне Сусвет!") // Privіtanne Susvet!
cyrillicRussianToLatin("Прывітанне Сусвет!") // Privіtanne Susvet!
cyrillicToLatinUnicode("Прывітанне Сусвет!") // Pryvxu456xtanne Susvet!
```

🇺🇦 Ukrainian `Привіт Світ!`

```javascript
cyrillicToLatinQuick("Привіт Світ!") // Privіt Svіt!
cyrillicUkrainianToLatin("Привіт Світ!") // Privіt Svіt!
cyrillicToLatinUnicode("Привіт Світ!") // Privxu456xt Svxu456xt!
```

---

| Explanatory name  	| Alias to  	| Short name  	|
|---	|---	|---	|
| `cyrillicRussianToLatin`  	| ↔️  	| `translitRu`  	|
| `cyrillicToLatinQuick`  	| ↔️  	| `translit`  	|
| `cyrillicToLatinUnicode`  	| ↔️  	| `translitUCS`  	|
| `cyrillicUkrainianToLatin`  	| ↔️  	| `translitUk`  	|
| `latinToCyrillicRussian`  	| ↔️  	|`unTranslitRu`   	|
| `latinToCyrillicUkrainian`  	| ↔️  	| `unTranslitUk`  	|
| `latinToCyrillicUnicode`  	| ↔️  	| `unTranslitUCS`  	|

---

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[npm-downloads-img]: https://badgen.net/npm/dt/translit%2Ded?&icon=terminal&label=downloads&color=009688
[npm-downloads-url]: https://npmjs.com/package/translit-ed
[npm-version-img]: https://badgen.net/npm/v/translit-ed?&icon=npm&label=npm&color=DD3636
[npm-version-url]: https://npmjs.com/package/translit-ed
[ts-img]: https://badgen.net/npm/types/translit-ed?&icon=typescript&label=types&color=1E90FF
[ts-url]: https://github.com/r37r0m0d3l/translit-ed/blob/master/dist/translit-ed.d.ts