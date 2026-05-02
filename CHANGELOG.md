# 📝 Changelog

[2.0.3]

# 🐞 Fixed

* 🔠 Fixed uppercase-word transliteration for multi-letter mappings across language converters (for example: `Ju` -> `JU`, `Ja` -> `JA`, `Shch` -> `SHCH` in ALL CAPS contexts).

* 🇺🇦 Fixed Ukrainian Gajica handling of Latin lookalike i-characters by normalizing `i`, `i̇`, `İ`, `ï`, `Ï` into Cyrillic `і/І/ї/Ї` before transliteration.

# 🔧 Changed

* 🧰 Extracted Cyrillic uppercase word detection.

# ✅ Tests

* Added regression tests for uppercase digraph/trigraph behavior in uppercase words across supported language transliterators.

* Added a dedicated Ukrainian Gajica test for Latin lookalike i-character normalization and round-trip conversion.

[2.0.2]

# 🐞 Fixed

* 🏗️ Optimized a build process: disabled code splitting to avoid shared chunks (like `chunk-*.js`).

[2.0.1]

# ✨ Added

* 🇺🇦 Ukrainian Gajica (Гаєвиця) project support. Previously a library failing hard at two-way lossless conversion.

* ⌨️ Command-line interface (CLI) support. Run `npx translit-ed` to see all available flags.

[2.0.0]

# ⚠️ BREAKING CHANGES

* Compared to version 1.x.x – this package is now a pure ESM package.

* Pure ESM Migration: This package is now ESM-only. CJS (CommonJS) files support has been dropped.

* Package now is ESM-only - type `module`.

* Minimal Node version: `22.18.0` - you will be able to `require()` ESM in it **without transpilation**.

# ✨ Added

* 🇧🇬 Bulgarian
* 🇰🇿 Kazakh
* 🇲🇰 Macedonian
* 🇲🇳 Mongolian
* 🇷🇸 Serbian
* 🇺🇿 Uzbek

# 🔧 Changed

Now have ISO standard language latinization (still there are more than one option for latinization):

* 🇧🇾 Belarusian
* 🇷🇺 Russian
* 🇺🇦 Ukrainian

# 🗑️ Removed

* All shortcut-named functions was removed, e.g. `translitRu()` ≠ `cyrillicRussianToLatin()`
