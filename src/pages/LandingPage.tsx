import { useEffect } from "react";
import { Check, Phone, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./landing-hu.css";
import LeadForm from "@/components/site/LeadForm";
import LandingPageEn from "./LandingPageEn";
import { images } from "@/assets/redesign";
import portrait from "@/assets/redesign/about-portrait.jpg";
import { useLanguage } from "@/lib/i18n/Language";

const PHONE = "+36309039630";
const PHONE_LABEL = "+36 30 903 9630";
const URL = "https://ingatlankockazat.hu/ingatlan-atvilagitas";

function setMeta(selector: string, attr: string, key: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) { el = document.createElement(selector.startsWith("link") ? "link" : "meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute(selector.startsWith("link") ? "href" : "content", value);
  return el;
}

export default function LandingPage() {
  const { language } = useLanguage();
  const en = language === "en";
  const t = (hu: string, eng: string) => (en ? eng : hu);

  useEffect(() => {
    const prev = document.title;
    const title = t("Ingatlanvásárlás előtt? Ingyenes 15 perces beszélgetés | Ingatlankockázat", "Buying property in Budapest? Free 15-minute call with an independent expert | Property Support");
    const desc = t("Lakást vagy házat vennél? Kezdd egy ingyenes, 15 perces ismerkedő beszélgetéssel Pádár Attilával. Megbeszéljük, hol tartasz és hogyan tudunk együtt dolgozni. Budapest és Pest megye.", "Buying property in Hungary from abroad? We guide you through the process, shortlist properties and represent you on the ground. Book a free 15-minute call.");
    document.title = title;
    const added = [
      setMeta('meta[name="description"]', "name", "description", desc),
      setMeta('meta[property="og:title"]', "property", "og:title", title),
      setMeta('meta[property="og:description"]', "property", "og:description", desc),
      setMeta('meta[property="og:url"]', "property", "og:url", URL),
      setMeta('link[rel="canonical"]', "rel", "canonical", URL),
    ];
    return () => { document.title = prev; added[3].remove(); added[4].remove(); };
  }, [language]);

  if (en) return <LandingPageEn />;
  const toForm = () => document.getElementById("erdeklodom")?.scrollIntoView({ behavior: "smooth" });
  const situations = [
    ["Megvan az ingatlan, de bizonytalan vagy?", "Tetszik a lakás vagy a ház, de nem tudod, mire figyelj, és kinek a véleményében bízhatsz."],
    ["Még keresel, és jól szeretnél indulni?", "Szeretnéd átgondolni, milyen ingatlan illik a céljaidhoz, és mikor érdemes szakértőt bevonni."],
    ["Nincs időd mindennek utánajárni?", "A megtekintés, a műszaki kérdések és a vásárlás körüli teendők mellett jól jönne valaki, aki a te oldaladon áll."],
  ];
  const steps = [
    ["Megadod az elérhetőségedet", "Töltsd ki az alábbi rövid űrlapot, vagy írj WhatsAppon. Telefonszámot vagy e-mail-címet is megadhatsz."],
    ["15 perces beszélgetés", "Meghallgatjuk az elképzeléseidet, megválaszoljuk a kérdéseidet, és őszinte első képet adunk."],
    ["Te döntesz a folytatásról", "Ha szeretnéd a segítségünket, elmondjuk, hogyan tudunk együtt dolgozni. Ha nem, független tanácsokkal távozol."],
  ];
  const gets = [
    "Kiszemelt ingatlan gyors elemzése: átbeszéljük az ingatlan részleteit és a felmerülő kérdéseidet.",
    "Együttműködés keretei: tisztázzuk, hogyan tudunk melletted állni az ingatlanvásárlási utadon.",
    "Célzott szolgáltatási javaslat: megmondjuk, szerintünk milyen szakmai segítségre van szükséged, legyen az helyszíni szemle, részletes műszaki felmérés vagy komplex projektfelügyelet, felesleges körök és mellébeszélés nélkül.",
  ];
  const faq = [
    ["Tényleg ingyenes a 15 perces beszélgetés?", "Igen. Ez egy ingyenes, kötelezettségmentes ismerkedő beszélgetés. Nem kell szolgáltatást választanod vagy fizetned a jelentkezéshez. A folytatásról te döntesz."],
    ["Mit jelent az ismerkedő beszélgetés?", "Megismerjük a helyzetedet, az elképzeléseidet és azt, milyen segítséget keresel. Elmondjuk, hogyan tudnánk együtt dolgozni. Ez nem helyszíni felmérés vagy részletes műszaki értékelés; ezek külön szolgáltatások."],
    ["Hogyan és mikor beszélünk?", "Telefonon, WhatsAppon vagy online, előre egyeztetett időpontban. Az űrlapon hagyj telefonszámot vagy e-mail-címet, hogy meg tudjuk szervezni a beszélgetést."],
    ["Akkor is jelentkezhetek, ha még nincs konkrét ingatlan?", "Igen. Akkor is beszélhetünk az együttműködésről, ha még keresel, és akkor is, ha már van kiszemelt lakásod vagy házad."],
    ["Mennyibe kerül a segítség, ha folytatni szeretném?", "Az első beszélgetés ingyenes. A további szolgáltatások kezdő árai: első megtekintés: lakás 50 000 Ft-tól, ház 70 000 Ft-tól; helyszíni felmérés: lakás 150 000 Ft-tól, ház 200 000 Ft-tól; szakmai értékelés és tervezés: lakás 350 000 Ft-tól, ház 550 000 Ft-tól. De a helyszíni vizsgálat csak a kezdet: teljes körű, end-to-end szolgáltatást is vállalunk: teljes projektmenedzsment, konfliktuskezelés és vitarendezés, teljes körű pénzügyi tanácsadás (hitel és biztosítás), az ingatlan jogi hátterének áttekintése, az adásvételi folyamat nyomon követése és szakmai felügyelete, karbantartási és üzemeltetési tanácsadás, sőt, ha befektetésként veszed, később az ingatlan értékesítésében is segítünk. A fizetős segítség külön egyeztetés alapján indul, a 15 perces ingyenes beszélgetés nem kötelez semmire."],
    ["Hol tudtok személyesen segíteni?", "Budapesten és Pest megyében. A helyszíni együttműködés lehetőségeit a beszélgetés során egyeztetjük."],
  ];

  return (
    <div className="landing-page lp-hu">
      <section className="lp-hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="site-container lp-hero-inner">
          <p className="kicker">Ingatlan átvilágítás vásárlás előtt</p>
          <h1>Tudd meg, mit rejt az ingatlan, mielőtt aláírod a szerződést.</h1>
          <p className="lead">Független műszaki szakértőként feltárjuk a rejtett hibákat, és megmutatjuk, mennyibe kerülnek. Amit vásárlás előtt nem veszel észre, azért vásárlás után te fogsz fizetni.</p>
          <div className="lp-cta-row">
            <Button className="button-primary" onClick={toForm}>Ingyenes 15 perces konzultáció foglalása <span>→</span></Button>
            <a className="lp-phone" href={`tel:${PHONE}`}><Phone size={18} /> {PHONE_LABEL}</a>
            <a className="lp-phone" href="https://wa.me/36309039630" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
          </div>
          <p className="lp-call-note">15 perc · Telefonon, WhatsAppon vagy online · Kötelezettség nélkül</p>
          <ul className="lp-trust">
            {["30 év ingatlanpiaci tapasztalat", "Kizárólag a te érdekeid", "Budapest és Pest megye"].map(x => <li key={x}><ShieldCheck size={16} />{x}</li>)}
          </ul>
        </div>
      </section>

      <section className="lp-section">
        <div className="site-container">
          <p className="kicker">Ismerős a helyzet?</p>
          <h2>Nem kell mindenhez értened. És nem kell egyedül döntened.</h2>
          <div className="lp-grid">{situations.map(([h, p]) => <article className="lp-card" key={h}><h3>{h}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="lp-section lp-surface">
        <div className="site-container lp-split">
          <div>
            <p className="kicker">Az első lépés: egy beszélgetés</p>
            <h2>Az ingatlanpiac nem a te védelmedre épült.</h2>
            <p className="lp-section-intro">Az eladó eladni akar, a közvetítő a jutalékért hajt, a rendszer nem a vevő védelmére lett kitalálva. Az első 15 perces konzultáción átbeszéljük a szükségleteidet, a problémáidat és azt, hogyan tudok a segítségedre lenni, hogyan működhet az együttműködésünk.</p>
            <ul className="lp-checks">{gets.map(g => <li key={g}><Check size={18} />{g}</li>)}</ul>
          </div>
          <div className="lp-call-offer">
            <p className="kicker">Ingyenes konzultáció</p>
            <strong className="lp-call-price">0 Ft</strong>
            <p>Ingyenes konzultáció Pádár Attilával telefonon, WhatsAppon vagy online. Nem felmérés és nem kötelezettség, hanem lehetőség arra, hogy átlássuk a helyzetedet, mindenféle nyomás nélkül.</p>
            <Button className="button-primary" onClick={toForm}>Ingyenes 15 perces konzultáció foglalása <span>→</span></Button>
          </div>
        </div>
      </section>

      <section className="lp-section lp-surface">
        <div className="site-container lp-about">
          <img src={portrait} alt="Pádár Attila, az Ingatlankockázat tulajdonosa" loading="lazy" />
          <div>
            <p className="kicker">Velem fogsz beszélgetni</p>
            <h2>Pádár Attila</h2>
            <p className="lp-role">Tulajdonos</p>
            <p className="lead">Az elmúlt 30 évben álltam eladói, vevői, befektetői és kivitelezői oldalon is. Olyan helyzetekkel is találkoztam, amelyek még szakmai háttérrel is komoly fejtörést okoztak.</p>
            <p>Ezt a tapasztalatot szeretném a te javadra fordítani, ha nincs időd, szakértelmed vagy független segítséged. Az első kérdésektől egy projekt teljes megvalósulásáig tudlak támogatni, kizárólag a te érdekeidet szem előtt tartva.</p>
            <Button className="button-primary" onClick={toForm}>Ingyenes 15 perces konzultáció foglalása <span>→</span></Button>
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="site-container">
          <p className="kicker">Így jutunk el az első beszélgetésig</p>
          <h2>Három egyszerű lépés.</h2>
          <div className="lp-steps">{steps.map(([h, p], i) => <article className="lp-step" key={h}><span className="lp-num">0{i + 1}</span><h3>{h}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="lp-section lp-surface">
        <div className="site-container narrow">
          <p className="kicker">Gyakori kérdések</p>
          <h2>Amit a jelentkezés előtt tudni érdemes.</h2>
          <div className="lp-faq">{faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <div className="site-container lp-call-note">Jelentkezés az ingyenes, 15 perces ismerkedő beszélgetésre</div>
      <LeadForm />

      <section className="lp-final">
        <div className="site-container">
          <h2>Nézzük meg együtt, mielőtt aláírsz.</h2>
          <Button className="button-primary" onClick={toForm}>Ingyenes 15 perces konzultáció foglalása <span>→</span></Button>
        </div>
      </section>
      <div className="lp-sticky"><Button className="button-primary" onClick={toForm}>Ingyenes 15 perces konzultáció foglalása →</Button><a href={`tel:${PHONE}`} aria-label="Hívás"><Phone size={20} /></a></div>
    </div>
  );
}
