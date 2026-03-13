#!/usr/bin/env node
import * as translit from "./index.js";

const args = process.argv.slice(2);

const mapping: Record<string, (text: string) => string> = {
  // Cyrillic to Latin
  "-bg-cyr2lat": translit.cyrillicBulgarianToLatin,
  "-sr-cyr2lat": translit.cyrillicSerbianToLatin,
  "-mk-cyr2lat": translit.cyrillicMacedonianToLatin,
  "-uz-cyr2lat": translit.cyrillicUzbekToLatin,
  "-mn-cyr2lat": translit.cyrillicMongolianToLatin,
  "-be-cyr2lat": translit.cyrillicBelarusianToLatin,
  "-ru-cyr2lat": translit.cyrillicRussianToLatin,
  "-ua-cyr2lat": translit.cyrillicUkrainianToLatin,
  "-ua-gajica-cyr2lat": translit.ukrainianCyrillicToLatynka,
  "-kz-cyr2lat": translit.cyrillicKazakhToLatin,
  "-unicode-cyr2lat": translit.cyrillicToLatinUnicode,

  // Latin to Cyrillic
  "-bg-lat2cyr": translit.latinToCyrillicBulgarian,
  "-sr-lat2cyr": translit.latinToCyrillicSerbian,
  "-mk-lat2cyr": translit.latinToCyrillicMacedonian,
  "-uz-lat2cyr": translit.latinToCyrillicUzbek,
  "-mn-lat2cyr": translit.latinToCyrillicMongolian,
  "-be-lat2cyr": translit.latinToCyrillicBelarusian,
  "-ru-lat2cyr": translit.latinToCyrillicRussian,
  "-ua-lat2cyr": translit.latinToCyrillicUkrainian,
  "-ua-gajica-lat2cyr": translit.ukrainianLatynkaToCyrillic,
  "-kz-lat2cyr": translit.latinToCyrillicKazakh,
  "-unicode-lat2cyr": translit.latinToCyrillicUnicode,
};

function showUsage() {
  console.log("Usage: translit-ed <flag> \"text\"");
  console.log("\nFlags:");
  console.log("  Cyrillic to Latin:");
  console.log("    -be-cyr2lat           🇧🇾 Belarusian         Беларуская");
  console.log("    -bg-cyr2lat           🇧🇬 Bulgarian          Български");
  console.log("    -kz-cyr2lat           🇰🇿 Kazakh             Қазақша");
  console.log("    -mk-cyr2lat           🇲🇰 Macedonian         Македонски");
  console.log("    -mn-cyr2lat           🇲🇳 Mongolian          Монгол");
  console.log("    -ru-cyr2lat           🇷🇺 Russian            Русский");
  console.log("    -sr-cyr2lat           🇷🇸 Serbian            Српски");
  console.log("    -ua-cyr2lat           🇺🇦 Ukrainian          Українська");
  console.log("    -ua-gajica-cyr2lat    🇺🇦 Ukrainian (Gajica) Українська (Гаєвиця)");
  console.log("    -unicode-cyr2lat      🌐 Unicode (Generic)");
  console.log("    -uz-cyr2lat           🇺🇿 Uzbek              Ўзбекча");
  console.log("\n  Latin to Cyrillic:");
  console.log("    -be-lat2cyr           🇧🇾 Belarusian         Беларуская");
  console.log("    -bg-lat2cyr           🇧🇬 Bulgarian          Български");
  console.log("    -kz-lat2cyr           🇰🇿 Kazakh             Қазақша");
  console.log("    -mk-lat2cyr           🇲🇰 Macedonian         Македонски");
  console.log("    -mn-lat2cyr           🇲🇳 Mongolian          Монгол");
  console.log("    -ru-lat2cyr           🇷🇺 Russian            Русский");
  console.log("    -sr-lat2cyr           🇷🇸 Serbian            Српски");
  console.log("    -ua-lat2cyr           🇺🇦 Ukrainian          Українська");
  console.log("    -ua-gajica-lat2cyr    🇺🇦 Ukrainian (Gajica) Українська (Гаєвиця)");
  console.log("    -unicode-lat2cyr      🌐 Unicode (Generic)");
  console.log("    -uz-lat2cyr           🇺🇿 Uzbek              Ўзбекча");
}

if (args.length < 2) {
  showUsage();
  process.exit(0);
}

const flag = args[0];
const text = args[1];

const fn = mapping[flag as keyof typeof mapping];

if (fn && text) {
  console.log(fn(text));
} else {
  if (!fn) {
    console.error(`Error: Unknown flag "${flag}"`);
  } else if (!text) {
    console.error("Error: Missing text to transliterate");
  }
  showUsage();
  process.exit(1);
}
