import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, useLocation, useSearchParams, type LinkProps } from "react-router-dom";
import { euroRateUrl, fallbackEuroRate, parseEuroRate, translateWithPrices } from "./prices";
import { languageFromSearch, localisedPath, type Language } from "./routing";

const LanguageContext = createContext({ language: "hu" as Language, euroRate: fallbackEuroRate, tr: (text: string) => text, path: (to: string) => to, setLanguage: (_language: Language) => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();
  const language = languageFromSearch(location.search);
  const [euroRate, setEuroRate] = useState(fallbackEuroRate);
  useEffect(() => {
    if (language !== "en") return;
    const controller = new AbortController();
    fetch(euroRateUrl, { signal: controller.signal })
      .then(response => {
        if (!response.ok) throw new Error("Exchange rate unavailable");
        return response.json();
      })
      .then(data => {
        const rate = parseEuroRate(data);
        if (rate) setEuroRate(rate);
      })
      .catch(() => { /* Retain the last verified reference rate if offline. */ });
    return () => controller.abort();
  }, [language]);
  const value = useMemo(() => ({
    language,
    euroRate,
    tr: (text: string) => translateWithPrices(text, language, euroRate.hufPerEuro),
    path: (to: string) => localisedPath(to, language),
    setLanguage: (next: Language) => setSearchParams(previous => {
      const params = new URLSearchParams(previous);
      if (next === "en") params.set("lang", "en"); else params.delete("lang");
      return params;
    }, { replace: true, preventScrollReset: true }),
  }), [language, euroRate, setSearchParams]);
  useEffect(() => {
    document.documentElement.lang = language;
    const names: Record<string, [string, string]> = {
      "/": ["Kezdőlap", "Independent property advice"],
      "/szolgaltatasok": ["Szolgáltatások", "Services and packages"],
      "/rolunk": ["Rólunk", "About us"],
      "/kapcsolat": ["Kapcsolat", "Contact"],
      "/adatkezeles": ["Adatkezelési tájékoztató", "Privacy notice"],
      "/impresszum": ["Impresszum", "Legal notice"],
    };
    const name = names[location.pathname] ?? names["/"];
    const brand = language === "en" ? "Property Support" : "Ingatlankockázat";
    const title = `${brand} – ${name[language === "en" ? 1 : 0]}`;
    const description = language === "en"
      ? "Independent property assessments, renovation planning and project support in Budapest and Pest County. Get the full picture before you decide."
      : "Mielőtt döntesz, nézzük meg együtt. Vásárlás előtti műszaki felmérés, felújítás tervezése és koordinációja, értékesítési támogatás. Budapest és Pest megye.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [language, location.pathname]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
export function LanguageLink({ to, ...props }: LinkProps) {
  const { path } = useLanguage();
  return <Link to={typeof to === "string" ? path(to) : to} {...props} />;
}
export function translateContent<T>(content: T, tr: (text: string) => string): T {
  if (typeof content === "string") return tr(content) as T;
  if (Array.isArray(content)) return content.map(item => translateContent(item, tr)) as T;
  if (content && typeof content === "object") return Object.fromEntries(Object.entries(content).map(([key, value]) => [key, translateContent(value, tr)])) as T;
  return content;
}