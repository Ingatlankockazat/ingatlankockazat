import { describe, expect, test } from "bun:test";
import { fallbackEuroRate, parseEuroRate, translateWithPrices } from "./prices.ts";

describe("English EUR service prices", () => {
  test.each([
    ["50 000 Ft‑tól", "From €150"],
    ["70 000 Ft‑tól", "From €200"],
    ["150 000 Ft‑tól", "From €450"],
    ["200 000 Ft‑tól", "From €600"],
    ["350 000 Ft‑tól", "From €1,000"],
    ["550 000 Ft‑tól", "From €1,550"],
    ["1 200 000 Ft‑tól", "From €3,350"],
    ["39 000 Ft", "€150"],
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
      .toBe("First viewing · Apartment from €150 / House from €200");
  });
  test("new rates change the EUR value without changing the HUF source", () => {
    expect(translateWithPrices("39 000 Ft", "en", 390)).toBe("€100");
  });
  test("rounds upwards to EUR 50 without increasing exact multiples", () => {
    expect(translateWithPrices("50 000 Ft‑tól", "en", 365)).toBe("From €150");
    expect(translateWithPrices("50 000 Ft‑tól", "en", 1000)).toBe("From €50");
  });
  test("keeps free and individually quoted services", () => {
    expect(translateWithPrices("Díjmentes", "en", 363.08)).toBe("Free of charge");
    expect(translateWithPrices("Egyedi ajánlat", "en", 363.08)).toBe("Bespoke quote");
  });
  test("accepts a valid current rate and rejects invalid responses", () => {
    expect(parseEuroRate({ base: "EUR", date: "2026-10-16", rates: { HUF: 363.08 } })).toEqual(fallbackEuroRate);
    for (const HUF of [0, -1, "363.08", null, Infinity]) {
      expect(parseEuroRate({ base: "EUR", date: "2026-10-16", rates: { HUF } })).toBeNull();
    }
  });
});