import { describe, expect, test } from "bun:test";
import { readConsent, saveConsent, analyticsCookieNames } from "./consent.ts";

test("withdrawing consent targets GA and Contentsquare cookies only", () => {
  expect(analyticsCookieNames("_ga=1; _ga_ABC=2; _cs_id=3; ik_lang=en")).toEqual(["_ga", "_ga_ABC", "_cs_id"]);
});

const mem = () => { const m = new Map(); return { getItem: k => m.get(k) ?? null, setItem: (k, v) => m.set(k, v) }; };

describe("cookie consent", () => {
  test("no decision by default", () => { expect(readConsent(mem())).toBe(null); });
  test("accepting grants analytics storage only", () => {
    const s = mem(); const calls = [];
    saveConsent(s, "granted", (...a) => calls.push(a));
    expect(readConsent(s)).toBe("granted");
    expect(calls[0][2].analytics_storage).toBe("granted");
    expect(calls[0][2].ad_storage).toBe("denied");
  });
  test("rejecting keeps analytics denied", () => {
    const s = mem(); const calls = [];
    saveConsent(s, "denied", (...a) => calls.push(a));
    expect(readConsent(s)).toBe("denied");
    expect(calls[0][2].analytics_storage).toBe("denied");
  });
});
