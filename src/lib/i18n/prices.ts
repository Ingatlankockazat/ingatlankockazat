import { english } from "./en";
import type { Language } from "./routing";

// Latest ECB reference rate verified when this feature was introduced.
export const fallbackEuroRate = { hufPerEuro: 363.08, date: "2026-10-16" };
export const euroRateUrl = "https://api.frankfurter.dev/v1/latest?base=EUR&symbols=HUF";

export function parseEuroRate(data: unknown) {
  if (!data || typeof data !== "object") return null;
  const value = data as { base?: unknown; date?: unknown; rates?: { HUF?: unknown } };
  if (value.base !== "EUR" || typeof value.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value.date)
    || typeof value.rates?.HUF !== "number" || !Number.isFinite(value.rates.HUF) || value.rates.HUF <= 0) return null;
  return { hufPerEuro: value.rates.HUF, date: value.date };
}

export function translateWithPrices(text: string, language: Language, hufPerEuro: number): string {
  if (language === "hu") return text;
  const translated = english[text] ?? text;
  const format = (amount: string) => new Intl.NumberFormat("en-IE", {
    style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(Math.ceil(Number(amount.replace(/[,\s\u00a0\u202f]/g, "")) / hufPerEuro / 50) * 50);
  return translated
    .replace(/HUF\s+([\d][\d,\s\u00a0\u202f]*\d|\d)/g, (_, amount: string) => format(amount))
    .replace(/([\d][\d\s\u00a0\u202f]*\d|\d)\s*Ft(?:[‑-]tól)?/g, (match, amount: string) => `${match.includes("tól") ? "From " : ""}${format(amount)}`)
    .replace(/\/\s*óra/g, "/ hour");
}