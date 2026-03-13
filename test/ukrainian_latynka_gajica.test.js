import test from "node:test";
import assert from "node:assert/strict";
import { ukrainianCyrillicToLatynka, ukrainianLatynkaToCyrillic } from "../src/ukrainian/latynka_gajica.func.ts";

test("Ukrainian Gajica: Official Lossless Round-trip", async (t) => {
  const testCases = [
    { cyr: "Міль", lat: "Milj", desc: "Soft sign (ь) -> j" },
    { cyr: "Мій", lat: "Mij", desc: "Short I (й) -> j" },
    { cyr: "Щедрий", lat: "Ščedryj", desc: "Digraph Щ (šč) and end Й (j)" },
    { cyr: "Яблуко", lat: "Jabluko", desc: "Iotated Я (ja) at start" },
    { cyr: "Київ", lat: "Kyjiv", desc: "Special Yi (ї) -> ji" },
    { cyr: "Сільський", lat: "Siljsjkyj", desc: "Multiple softness markers" },
    { cyr: "Юрій", lat: "Jurij", desc: "Iotated Ю (ju) and end Й (j)" },
    { cyr: "ПАЛЯНИЦЯ", lat: "PALJANYCJA", desc: "Upper case preservation" },
  ];

  for (const { cyr, lat, desc } of testCases) {
    await t.test(desc, () => {
      const resultLat = ukrainianCyrillicToLatynka(cyr);
      const resultCyr = ukrainianLatynkaToCyrillic(resultLat);

      // Verify Latynka matches expected visual style
      assert.strictEqual(resultLat.toLowerCase(), lat.toLowerCase());

      // Verify zero-loss back to Cyrillic
      assert.strictEqual(resultCyr, cyr, `Loss detected: ${cyr} became ${resultCyr}`);
    });
  }
});

test("Contextual Integrity: RPG Dialogue", () => {
  const original = "Він сказав: «Ще вовк не з'їв ягня»... Біль стає сильнішим.";
  const lat = ukrainianCyrillicToLatynka(original);
  const back = ukrainianLatynkaToCyrillic(lat);

  assert.strictEqual(back, original);
});
