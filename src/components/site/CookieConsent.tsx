import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/Language";
import { CONSENT_EVENT, readConsent, saveConsent, type ConsentChoice } from "@/lib/consent";

export function CookieConsent() {
  const { tr, path } = useLanguage();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!readConsent(window.localStorage)) setOpen(true);
    const show = () => setOpen(true);
    window.addEventListener(CONSENT_EVENT, show);
    return () => window.removeEventListener(CONSENT_EVENT, show);
  }, []);
  if (!open) return null;
  const choose = (c: ConsentChoice) => { saveConsent(window.localStorage, c, window.gtag); setOpen(false); };
  return <div className="cookie-bar" role="dialog" aria-label={tr("Süti beállítások")}>
    <p>{tr("Segíts, hogy még jobbá tegyük az oldalunkat! Ehhez sütiket használnánk, de csak a beleegyezéseddel.")}{" "}<Link to={path("/adatkezeles")} className="accent-text underline">{tr("Részletek")}</Link></p>
    <div className="cookie-actions">
      <button type="button" className="cookie-secondary" onClick={() => choose("denied")}>{tr("Csak a szükségesek")}</button>
      <button type="button" className="button-primary" onClick={() => choose("granted")}>{tr("Elfogadom")}</button>
    </div>
  </div>;
}

export function openCookieSettings() { window.dispatchEvent(new Event(CONSENT_EVENT)); }
