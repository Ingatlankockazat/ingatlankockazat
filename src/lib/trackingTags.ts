// Consent-gated third-party tags. Contentsquare loads only after analytics consent.
import { injectContentsquareScript } from "@contentsquare/tag-sdk";
import { analyticsCookieNames, type ConsentChoice } from "./consent";

const CONTENTSQUARE_TAG_ID = "5b82f6216fca5";
let csLoaded = false;

export function applyConsent(choice: ConsentChoice | null) {
  if (typeof window === "undefined") return;
  if (choice === "granted") {
    if (!csLoaded) { csLoaded = true; injectContentsquareScript({ clientId: CONTENTSQUARE_TAG_ID }); }
    return;
  }
  if (choice === "denied") {
    const host = window.location.hostname;
    const domains = ["", host, "." + host.replace(/^www\./, "")];
    for (const name of analyticsCookieNames(document.cookie)) {
      for (const d of domains) document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
    // Contentsquare cannot be unloaded mid-page; reload so it stops immediately.
    if (csLoaded) window.location.reload();
  }
}
