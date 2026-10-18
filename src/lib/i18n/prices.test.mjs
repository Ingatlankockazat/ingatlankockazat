import { describe, expect, test } from "bun:test";
import { fallbackEuroRate, parseEuroRate, translateWithPrices } from "./prices.ts";

describe("English EUR service prices", () => {
  test.each([
    ["50 000 Ft‑tól", "From €137.71"],
    ["70 000 Ft‑tól", "From €192.80"],
    ["150 000 Ft‑tól", "From €413.13"],
    ["200 000 Ft‑tól", "From €550.84"],
    ["350 000 Ft‑tól", "From €963.98"],
    ["550 000 Ft‑tól", "From €1,514.82"],
    ["1 200 000 Ft‑tól", "From €3,305.06"],
    ["39 000 Ft", "€107.41"],
  ])("converts %s at the verified latest rate", (input, output) => {
    expect(translateWithPrices(input, "en", fallbackEuroRate.hufPerEuro)).toBe(output);
  });
  test("Hungarian prices remain exactly unchanged", () => {
    for (const input of ["50 000 Ft‑tól", "70 000 Ft‑tól", "150 000 Ft‑tól", "200 000 Ft‑tól", "350 000 Ft‑tól", "550 000 Ft‑tól", "1 200 000 Ft‑tól", "39 000 Ft"]) {
      expect(translateWithPrices(input, "hu", 363.08)).toBe(input);
    }
  });
  test("converts both prices embedded in homepage process text", () => {
    expect(translateWithPrices("Első megtekintés · Lakás 50 000 Ft‑tól / Ház 70 000 Ft‑tól", "en", 363.08))
      .toBe("First viewing · Apartment from €137.71 / House from €192.80");
  });
  test("new rates change the EUR value without changing the HUF source", () => {
    expect(translateWithPrices("39 000 Ft", "en", 390)).toBe("€100.00");
  });
  test("keeps free and individually quoted services", () => {
    expect(translateWithPrices("Díjmentes", "en", 363.08)).toBe("Free");
    expect(translateWithPrices("Egyedi ajánlat", "en", 363.08)).toBe("Individual quote");
  });
  test("accepts a valid current rate and rejects invalid responses", () => {
    expect(parseEuroRate({ base: "EUR", date: "2026-10-16", rates: { HUF: 363.08 } })).toEqual(fallbackEuroRate);
    for (const HUF of [0, -1, "363.08", null, Infinity]) {
      expect(parseEuroRate({ base: "EUR", date: "2026-10-16", rates: { HUF } })).toBeNull();
    }
  });
});