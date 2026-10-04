import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Kezdőlap" },
  { to: "/szolgaltatasok", label: "Szolgáltatások" },
  { to: "/rolunk", label: "Rólunk" },
  { to: "/kapcsolat", label: "Kapcsolat" },
];

const counters: Record<string, string> = { "/": "01 / 04", "/szolgaltatasok": "02 / 04", "/rolunk": "03 / 04", "/kapcsolat": "04 / 04" };

export function SiteLayout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="min-h-screen bg-background text-foreground">
    {location.pathname === "/" && <ReadingProgress />}
    <header className={`site-header ${scrolled || location.pathname !== "/" ? "site-header--solid" : ""}`}>
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="wordmark" aria-label="Ingatlankockázat kezdőlap">ingatlankockázat</Link>
        <nav className="hidden lg:flex items-center gap-8" aria-label="Fő navigáció">
          {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({isActive}) => `nav-link ${isActive ? "nav-link--active" : ""}`}>{link.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link className="button-primary hidden sm:inline-flex" to="/kapcsolat">Beszéljünk <span>→</span></Link>
          <button className="icon-button lg:hidden" aria-label={open ? "Menü bezárása" : "Menü megnyitása"} onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav className="mobile-menu" aria-label="Mobil navigáció">{links.map(link => <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({isActive}) => `mobile-link ${isActive ? "text-accent" : ""}`}>{link.label}</NavLink>)}<Link className="button-primary justify-center" to="/kapcsolat">Beszéljünk →</Link></nav>}
    </header>
    <main><Outlet /></main>
    {location.pathname === "/kapcsolat" && <div className="closing-band"><div className="site-container">Vásárlás. Felújítás. Értékesítés. Bérlés. <span>Mielőtt döntesz, nézzük meg együtt.</span></div></div>}
    <footer className="site-footer"><div className="site-container footer-row"><div>© 2026 Ingatlankockázat</div><div className="flex flex-wrap gap-5"><Link to="/adatkezeles">Adatkezelés</Link><Link to="/impresszum">Impresszum</Link></div>{counters[location.pathname] && <div className="page-counter">{counters[location.pathname]}</div>}</div></footer>
  </div>;
}

function ReadingProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => { const update = () => { const total = document.documentElement.scrollHeight - window.innerHeight; setWidth(total > 0 ? Math.min(100, window.scrollY / total * 100) : 0); }; update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  return <div className="reading-progress" style={{ width: `${width}%` }} />;
}

export function SectionHeading({ kicker, title, lead, className = "" }: { kicker: string; title: string; lead?: string; className?: string }) {
  return <div className={`section-heading reveal ${className}`}><p className="kicker">{kicker}</p><h2>{title}</h2>{lead && <p className="lead">{lead}</p>}</div>;
}
