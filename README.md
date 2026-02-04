![Translit-Ed](.github/assets/banner.webp?raw=true "Translit-Ed")

# Translit-Ed

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![TypeScript Typings][ts-img]][ts-url]

This package provides **language-aware, standard-based transliteration** for Cyrillic scripts:

|                 |                 |                |
|-----------------|-----------------|----------------|
| 🇧🇾 Belarusian | 🇲🇰 Macedonian | 🇷🇸 Serbian   |
| 🇧🇬 Bulgarian  | 🇲🇳 Mongolian  | 🇺🇦 Ukrainian |
| 🇰🇿 Kazakh     | 🇷🇺 Russian    | 🇺🇿 Uzbek     |

## 🚀 Installation

```bash
npm install translit-ed
```

## 🛠️ Usage

```javascript
import {
  cyrillicBelarusianToLatin, cyrillicBulgarianToLatin, cyrillicKazakhToLatin,
  cyrillicMacedonianToLatin, cyrillicMongolianToLatin, cyrillicRussianToLatin,
  cyrillicSerbianToLatin, cyrillicUkrainianToLatin, cyrillicUzbekToLatin,
  cyrillicToLatinUnicode,
} from "translit-ed";

import {
  latinToCyrillicBelarusian, latinToCyrillicBulgarian, latinToCyrillicKazakh,
  latinToCyrillicMacedonian, latinToCyrillicMongolian, latinToCyrillicRussian,
  latinToCyrillicSerbian, latinToCyrillicUkrainian, latinToCyrillicUzbek,
  latinToCyrillicUnicode,
} from "translit-ed";
```

---

## 🏗️ Examples

🇧🇾 Belarusian (Cyrillic, national standard)

```javascript
cyrillicBelarusianToLatin("Я і Юра ў Мінску.")
// Ja i Jura ŭ Minsku.
latinToCyrillicBelarusian("Ja i Jura ŭ Minsku.")
// Я і Юра ў Мінску.
```

🇧🇬 Bulgarian (Cyrillic, BGN/PCGN 2013)

```javascript
cyrillicBulgarianToLatin("Щъркелът е в ъгъла до гьола.")
// Shtarkelat e v agala do gyola.
latinToCyrillicBulgarian("Shtastie e v gyola.")
// Щастие е в гьола.
```

🇰🇿 Kazakh (Cyrillic, BGN/PCGN 1979)

```javascript
cyrillicKazakhToLatin("Әңгіме ғұрыппен қоңыр өгіз ұйықтап, үнімен һау деді.")
// Änggime ghuryppen qongyr ögiz uyyqtap, ünimen haū dedi.
```

🇲🇰 Macedonian (Cyrillic, national standard)

```javascript
cyrillicMacedonianToLatin("Ѓорѓи џвака ќебап со ѕвезда.")
// Gjorgji džvaka kjebap so dzvezda.
latinToCyrillicMacedonian("Kjutiot gjavol svira džez.")
// Ќутиот ѓавол свира џез.
```

🇲🇳 Mongolian (Cyrillic, national standard)

```javascript
cyrillicMongolianToLatin("Өндөр уул, үүлтэй өдөр.")
// Öndör uul, üültey ödör.
latinToCyrillicMongolian("Öndör üültey ödör.")
// Өндөр үүлтей өдөр.
```

🇷🇺 Russian (Cyrillic, national standard)

```javascript
cyrillicRussianToLatin("Съешь же ещё этих мягких французских булок, да выпей чаю.")
// S"yesh' zhe yeshchyo etikh myagkikh frantsuzskikh bulok, da vypey chayu.
latinToCyrillicRussian("S\"yesh' zhe yeshchyo etikh myagkikh frantsuzskikh bulok, da vypey chayu.")
// Съешь же ещё этих мягких французских булок, да выпей чаю.
```

🇷🇸 Serbian (Cyrillic, national standard)

```javascript
cyrillicSerbianToLatin("Љубав и џез.")
// Ljubav i džez.
latinToCyrillicSerbian("Njegova džez ploča.")
// Његова џез плоча.
```

🇺🇦 Ukrainian (Cyrillic, national standard)

```javascript
cyrillicUkrainianToLatin("Є юний їжак, ґудзик і гілка в яру.")
// Ye yunyi yizhak, gudzyk i hilka v yaru.
latinToCyrillicUkrainian("Ye yunyi yizhak, gudzyk i hilka v yaru.")
// Є юний їжак, ґудзик і гілка в яру.
```

🇺🇿 Uzbek (Cyrillic, national standard)

```javascript
cyrillicUzbekToLatin("Ўзбекистонда қўшиқ ва ғазал.")
// O'zbekistonda qo'shiq va g'azal.
latinToCyrillicUzbek("G'oz va o'zbekcha so'z.")
// Ғоз ва ўзбекча сўз.
```

---

## 💡️ Functions

| From  	                        | •    | To                          |
|--------------------------------|------|-----------------------------|
| `cyrillicBelarusianToLatin`  	 | 🇧🇾 | `latinToCyrillicBelarusian` |
| `cyrillicBulgarianToLatin`     | 🇧🇬 | `latinToCyrillicBulgarian`  |
| `cyrillicKazakhToLatin`        | 🇰🇿 | `latinToCyrillicKazakh`     |
| `cyrillicMacedonianToLatin`    | 🇲🇰 | `latinToCyrillicMacedonian` |
| `cyrillicMongolianToLatin`     | 🇲🇳 | `latinToCyrillicMongolian`  |
| `cyrillicRussianToLatin`       | 🇷🇺 | `latinToCyrillicRussian`    |
| `cyrillicSerbianToLatin`       | 🇷🇸 | `latinToCyrillicSerbian`    |
| `cyrillicUkrainianToLatin`     | 🇺🇦 | `latinToCyrillicUkrainian`  | 
| `cyrillicUzbekToLatin`         | 🇺🇿 | `latinToCyrillicUzbek`      |
| `cyrillicToLatinUnicode`       | 🌐   | `latinToCyrillicUnicode`    |

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

[//]: # (---)

[//]: # ()
[//]: # (## 🗺️ See also)

[//]: # ()
[//]: # ([My other projects]&#40;https://r37r0m0d3l.icu/open_source_map&#41;)

[//]: # ()
[//]: # (<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">)

<!-- Badges -->

[npm-downloads-img]: https://badgen.net/npm/dt/translit%2Ded?&icon=terminal&label=downloads&color=009688
[npm-downloads-url]: https://npmjs.com/package/translit-ed
[npm-version-img]: https://badgen.net/npm/v/translit-ed?&icon=npm&label=npm&color=DD3636
[npm-version-url]: https://npmjs.com/package/translit-ed
[ts-img]: https://badgen.net/npm/types/translit-ed?&icon=typescript&label=types&color=1E90FF
[ts-url]: https://github.com/r37r0m0d3l/translit-ed/blob/master/dist/translit-ed.d.ts
