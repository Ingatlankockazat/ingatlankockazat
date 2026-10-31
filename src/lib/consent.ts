// Cookie consent for Google Analytics (Consent Mode v2). GA defaults to denied in index.html.
export type ConsentChoice = "granted" | "denied";
export const CONSENT_KEY = "ik_cookie_consent";
export const CONSENT_EVENT = "ik-consent-open";

type Store = Pick<Storage, "getItem" | "setItem">;

export function readConsent(store: Store | undefined): ConsentChoice | null {
  try {
    const v = store?.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch { return null; }
}

export function consentUpdate(choice: ConsentChoice) {
  return { analytics_storage: choice, ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" } as const;
}

export function saveConsent(store: Store | undefined, choice: ConsentChoice, gtag?: (...a: unknown[]) => void) {
  try { store?.setItem(CONSENT_KEY, choice); } catch { /* storage blocked */ }
  gtag?.("consent", "update", consentUpdate(choice));
}
