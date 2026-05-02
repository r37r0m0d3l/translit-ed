import * as translitEd from "./translit-ed.js";

const fromInput = document.querySelector("#from");
const toSelect = document.querySelector("#to");
const resultInput = document.querySelector("#result");
const themeToggle = document.querySelector("#theme-toggle");
const themeStorageKey = "translit-ed-theme";
const transformationStorageKey = "translit-ed-transformation";
const sourceTextStorageKey = "translit-ed-source-text";
const defaultTransformation = "ukrainianCyrillicToLatynka";
const sourceTextMaxSymbols = 10_000;
const sourceTextSaveDelay = 300;
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

const getPreferredStorage = () => {
  for (const storage of [window.localStorage, window.sessionStorage]) {
    try {
      const probeKey = "__translit-ed-storage-probe__";
      storage.setItem(probeKey, "1");
      storage.removeItem(probeKey);
      return storage;
    } catch {
      // Try the next available storage backend.
    }
  }

  return null;
};

const preferredStorage = getPreferredStorage();

const humanizeName = (name) =>
  name.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b\w/g, (char) => char.toUpperCase());

const debounce = (callback, delay) => {
  let timeoutId;

  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), delay);
  };
};

const clampSourceText = (value) =>
  Array.from(String(value)).slice(0, sourceTextMaxSymbols).join("");

const transformationGroups = [
  {
    flag: "🇧🇾",
    language: "Belarusian",
    options: ["cyrillicBelarusianToLatin", "latinToCyrillicBelarusian"],
  },
  {
    flag: "🇧🇬",
    language: "Bulgarian",
    options: ["cyrillicBulgarianToLatin", "latinToCyrillicBulgarian"],
  },
  {
    flag: "🇰🇿",
    language: "Kazakh",
    options: ["cyrillicKazakhToLatin", "latinToCyrillicKazakh"],
  },
  {
    flag: "🇲🇰",
    language: "Macedonian",
    options: ["cyrillicMacedonianToLatin", "latinToCyrillicMacedonian"],
  },
  {
    flag: "🇲🇳",
    language: "Mongolian",
    options: ["cyrillicMongolianToLatin", "latinToCyrillicMongolian"],
  },
  {
    flag: "🇷🇺",
    language: "Russian",
    options: ["cyrillicRussianToLatin", "latinToCyrillicRussian"],
  },
  {
    flag: "🇷🇸",
    language: "Serbian",
    options: ["cyrillicSerbianToLatin", "latinToCyrillicSerbian"],
  },
  {
    flag: "🇺🇦",
    language: "Ukrainian",
    options: [
      "cyrillicUkrainianToLatin",
      "latinToCyrillicUkrainian",
      "ukrainianCyrillicToLatynka",
      "ukrainianLatynkaToCyrillic",
    ],
  },
  {
    flag: "🇺🇿",
    language: "Uzbek",
    options: ["cyrillicUzbekToLatin", "latinToCyrillicUzbek"],
  },
  {
    flag: "🌐",
    language: "Unicode",
    options: ["cyrillicToLatinUnicode", "latinToCyrillicUnicode"],
  },
];

for (const group of transformationGroups) {
  const optgroup = document.createElement("optgroup");
  optgroup.label = `${group.flag} ${group.language}`;

  for (const name of group.options) {
    if (typeof translitEd[name] !== "function") {
      continue;
    }

    const option = document.createElement("option");
    option.value = name;
    option.textContent = `${group.flag} ${humanizeName(name)}`;
    optgroup.append(option);
  }

  if (optgroup.childElementCount > 0) {
    toSelect.append(optgroup);
  }
}

const getPreferredTransformation = () => {
  const storedTransformation = preferredStorage?.getItem(transformationStorageKey);
  if (storedTransformation && typeof translitEd[storedTransformation] === "function") {
    return storedTransformation;
  }

  return defaultTransformation;
};

toSelect.value = getPreferredTransformation();

const getPreferredTheme = () => {
  const storedTheme = preferredStorage?.getItem(themeStorageKey);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return prefersDarkTheme.matches ? "dark" : "light";
};

const applyTheme = (theme, shouldPersist = true) => {
  document.documentElement.dataset.theme = theme;

  if (themeToggle) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.textContent = `${nextTheme[0].toUpperCase()}${nextTheme.slice(1)} mode`;
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }

  if (shouldPersist) {
    preferredStorage?.setItem(themeStorageKey, theme);
  }
};

applyTheme(getPreferredTheme(), false);

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

prefersDarkTheme.addEventListener("change", (event) => {
  if (preferredStorage?.getItem(themeStorageKey)) {
    return;
  }

  applyTheme(event.matches ? "dark" : "light", false);
});

const storedSourceText = preferredStorage?.getItem(sourceTextStorageKey);
if (storedSourceText !== null) {
  fromInput.value = clampSourceText(storedSourceText);
}

const renderResult = () => {
  const transform = translitEd[toSelect.value];
  resultInput.value = typeof transform === "function" ? transform(fromInput.value) : "";
};

const persistSourceText = () => {
  preferredStorage?.setItem(sourceTextStorageKey, clampSourceText(fromInput.value));
};

const persistSourceTextDeferred = debounce(persistSourceText, sourceTextSaveDelay);

fromInput.addEventListener("input", () => {
  const clampedSourceText = clampSourceText(fromInput.value);
  if (fromInput.value !== clampedSourceText) {
    fromInput.value = clampedSourceText;
  }

  renderResult();
  persistSourceTextDeferred();
});
toSelect.addEventListener("change", () => {
  preferredStorage?.setItem(transformationStorageKey, toSelect.value);
  renderResult();
});
window.addEventListener("pagehide", persistSourceText);
renderResult();
