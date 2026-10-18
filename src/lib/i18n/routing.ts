export type Language = "hu" | "en";
export function languageFromSearch(search: string): Language {
  return new URLSearchParams(search).get("lang") === "en" ? "en" : "hu";
}
export function localisedPath(path: string, language: Language): string {
  const url = new URL(path, "https://local.invalid");
  if (language === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  return `${url.pathname}${url.search}${url.hash}`;
}