import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoHeader from "@/assets/redesign/logo-header.png";
import logoMark from "@/assets/redesign/logo-mark.png";
import { useLanguage } from "@/lib/i18n/Language";
import { localisedPath } from "@/lib/i18n/routing";

const links = [
  { to: "/", label: "Kezdőlap" },
  { to: "/szolgaltatasok", label: "Szolgáltatások" },
  { to: "/rolunk", label: "Rólunk" },
  { to: "/kapcsolat", label: "Kapcsolat" },
];


export function SiteLayout() {
  const { language, tr, path } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const minimal = location.pathname === "/ingatlan-atvilagitas";
  useEffect(() => { window.scrollTo(0, 0); setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const q = new URLSearchParams(location.search); const keys = ["utm_source","utm_medium","utm_campaign","utm_term","gclid","fbclid"];
    const found = Object.fromEntries(keys.filter(k => q.get(k)).map(k => [k, q.get(k)!.slice(0, 200)]));
    if (Object.keys(found).length) sessionStorage.setItem("ik-attribution", JSON.stringify(found));
  }, [location.search]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="min-h-screen bg-background text-foreground">
    <header className={`site-header ${scrolled || location.pathname !== "/" ? "site-header--solid" : ""}`}>
      <div className="site-container header-row flex items-center justify-between gap-6">
        <Link to={path("/")} className="header-logo-link" aria-label={tr("Ingatlankockázat kezdőlap")}>{language === "en" ? <span className="header-lockup"><img src={logoMark} alt="" className="header-mark" /><span className="header-wordmark"><span className="hw-a">Property</span><span className="hw-b">Support</span></span></span> : <img src={logoHeader} alt={tr("Ingatlankockázat")} className="header-logo" />}</Link>
        {!minimal && <nav className="hidden lg:flex items-center gap-8" aria-label={tr("Fő navigáció")}>
          {links.map(link => <NavLink key={link.to} to={path(link.to)} end={link.to === "/"} className={({isActive}) => `nav-link ${isActive ? "nav-link--active" : ""}`}>{tr(link.label)}</NavLink>)}
        </nav>}
        <div className="flex items-center gap-3">
          {minimal ? <a className="button-primary hidden sm:inline-flex" href="tel:+36309039630">+36 30 903 9630</a> : <Link className="button-primary hidden sm:inline-flex" to={path("/kapcsolat")}>{tr("Beszéljünk")} <span>→</span></Link>}
          {!minimal && <button className="icon-button lg:hidden" aria-label={tr(open ? "Menü bezárása" : "Menü megnyitása")} onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</button>}
          <nav className="language-switch" aria-label={language === "en" ? "Language" : "Nyelv"}>{(["hu", "en"] as const).map(lang => <Link key={lang} to={localisedPath(location.pathname + location.search + location.hash, lang)} replace preventScrollReset lang={lang} aria-label={lang === "hu" ? "Magyar" : "English"} aria-current={language === lang ? "true" : undefined}>{lang.toUpperCase()}</Link>)}</nav>
        </div>
      </div>
      {open && <nav className="mobile-menu" aria-label={tr("Mobil navigáció")}>{links.map(link => <NavLink key={link.to} to={path(link.to)} end={link.to === "/"} className={({isActive}) => `mobile-link ${isActive ? "text-accent" : ""}`}>{tr(link.label)}</NavLink>)}<Link className="button-primary justify-center" to={path("/kapcsolat")}>{tr("Beszéljünk →")}</Link></nav>}
    </header>
    <main><Outlet /></main>
    <footer className="site-footer"><div className="site-container footer-row"><div>{tr("© 2026 Ingatlankockázat")}</div><div className="flex flex-wrap gap-5"><Link to={path("/adatkezeles")}>{tr("Adatkezelés")}</Link><Link to={path("/impresszum")}>{tr("Impresszum")}</Link></div></div></footer>
  </div>;
}


export function SectionHeading({ kicker, title, lead, className = "" }: { kicker: string; title: string; lead?: string; className?: string }) {
  return <div className={`section-heading reveal ${className}`}><p className="kicker">{kicker}</p><h2>{title}</h2>{lead && <p className="lead">{lead}</p>}</div>;
}
