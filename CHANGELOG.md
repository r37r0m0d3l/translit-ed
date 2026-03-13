# 📝 Changelog

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
