import { describe, expect, test } from "bun:test";
import { languageFromSearch, localisedPath } from "./routing";
describe("language routing", () => {
  test("Hungarian remains the default", () => {
    expect(languageFromSearch("")).toBe("hu");
    expect(languageFromSearch("?lang=fr")).toBe("hu");
  });
  test("English selection survives internal navigation", () => {
    expect(localisedPath("/kapcsolat", "en")).toBe("/kapcsolat?lang=en");
    expect(languageFromSearch("?lang=en")).toBe("en");
  });
  test("switching keeps the page, other parameters and anchor", () => {
    expect(localisedPath("/szolgaltatasok?lang=en&ref=site#prices", "hu")).toBe("/szolgaltatasok?ref=site#prices");
  });
});