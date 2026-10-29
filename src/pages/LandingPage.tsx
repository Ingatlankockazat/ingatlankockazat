import { useEffect } from "react";
import { Check, Phone, ShieldCheck, FileText, Search, MessageCircle } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";
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
  const { language, tr } = useLanguage();
  const en = language === "en";
  const t = (hu: string, eng: string) => (en ? eng : hu);

  useEffect(() => {
    const prev = document.title;
    const title = t("Ingatlan átvilágítás vásárlás előtt – független műszaki szakértő | Ingatlankockázat", "Pre-purchase property inspection – independent technical expert | Property Support");
    const desc = t("Mielőtt aláírsz: független műszaki felmérés, rejtett hibák feltárása és tárgyalási érvek. Budapest és Pest megye. Ingyenes első konzultáció.", "Before you sign: an independent technical survey, hidden defects uncovered and solid negotiating points. Budapest and Pest County. Free first consultation.");
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

  const toForm = () => document.getElementById("erdeklodom")?.scrollIntoView({ behavior: "smooth" });

  const risks = [
    [t("Rejtett nedvesség és penész", "Hidden damp and mould"), t("Friss festés alatt is ott lehet. A javítása gyakran milliókba kerül.", "It can hide under a fresh coat of paint, and fixing it often runs into thousands.")],
    [t("Elavult gépészet", "Outdated building services"), t("Az elektromos, a víz- és a fűtési rendszer cseréje a leggyakoribb meglepetés az első két évben.", "Replacing wiring, plumbing or heating is the most common surprise in the first two years.")],
    [t("Szabálytalan átalakítások", "Unauthorised alterations"), t("Ha a papírok és a valóság eltér, abból később jogi és pénzügyi gond lehet.", "When the paperwork and reality don't match, legal and financial trouble can follow.")],
    [t("Szerkezeti gondok", "Structural issues"), t("Repedések, födém, tető: amit laikusként nem látsz, az a legdrágább.", "Cracks, floors, roofs: what an untrained eye misses tends to cost the most.")],
  ];
  const steps = [
    [MessageCircle, t("Ingyenes konzultáció", "Free consultation"), t("Kb. 30 perc telefonon vagy WhatsAppon. Megbeszéljük, hol tartasz, és mire van valóban szükséged.", "Around 30 minutes by phone or WhatsApp. We talk through where you are and what you actually need.")],
    [Search, t("Helyszíni felmérés", "On-site survey"), t("Megnézzük az ingatlant, és összevetjük a valós állapotot a dokumentációval.", "We inspect the property and compare its actual condition with the documentation.")],
    [FileText, t("Világos összefoglaló", "Clear summary"), t("Megkapod, mit találtunk, mekkora a kockázat, mennyibe kerülhet a javítás, és milyen érvekkel tárgyalhatsz.", "You get what we found, how serious it is, what repairs may cost and the points you can negotiate with.")],
  ] as const;
  const gets = [
    t("Személyes megtekintés szakértővel a helyszínen: veled tartunk, és a laikus szemnek láthatatlan jeleket figyeljük", "A personal viewing with an expert on site: we join you and spot the signs an untrained eye would miss"),
    t("Kellemetlen szakmai kérdések feltétele: nem neked kell faggatnod az eladót vagy az ingatlanost", "The awkward technical questions asked for you: you don't have to grill the seller or the agent"),
    t("Azonnali, őszinte szakmai vélemény és reális kockázatbecslés még a helyszínen", "An immediate, honest expert opinion and a realistic risk assessment, right there on the spot"),
    t("Döntési támogatás: megmondjuk, érdemes-e továbblépni, vagy inkább engedd el", "Help deciding: we'll tell you whether it's worth going ahead, or better to walk away"),
  ];
  const prices = [
    [t("Első megtekintés", "First viewing"), "50 000 Ft‑tól"],
    [t("Helyszíni felmérés", "On-site survey"), "150 000 Ft‑tól"],
    [t("Szakmai értékelés és tervezés", "Expert assessment and planning"), "350 000 Ft‑tól"],
  ];
  const faq = [
    [t("Kötelez valamire a jelentkezés?", "Does getting in touch commit me to anything?"), t("Nem. Az első konzultáció ingyenes, és utána te döntöd el, kérsz-e további segítséget.", "No. The first consultation is free, and afterwards it's entirely up to you whether you'd like further help.")],
    [t("Mennyibe kerül?", "How much does it cost?"), `${t("Első megtekintés: lakás", "First viewing: apartments")} ${tr("50 000 Ft‑tól")}${t(", ház", ", houses")} ${tr("70 000 Ft‑tól")}${t(" – ez egy átlagos vételár kevesebb mint 0,1%-a, miközben milliókat spórolhat meg. Helyszíni felmérés: lakás", " – less than 0.1% of a typical purchase price, while potentially saving you thousands. On-site assessment: apartments")} ${tr("150 000 Ft‑tól")}${t(", ház", ", houses")} ${tr("200 000 Ft‑tól")}${t(". Szakmai értékelés és tervezés: lakás", ". Expert review and planning: apartments")} ${tr("350 000 Ft‑tól")}${t(", ház", ", houses")} ${tr("550 000 Ft‑tól")}.`],
    [t("Milyen gyorsan tudtok jönni?", "How quickly can you come out?"), t("Igyekszünk a döntési határidődhöz igazodni. A konzultáción egyeztetjük az időpontot.", "We do our best to fit around your deadline and agree a date during the consultation.")],
    [t("Mit készítsek elő?", "What should I prepare?"), t("Ha van, a hirdetést, a tervrajzokat és a műszaki dokumentumokat. Ha nincs, abban is segítünk, mit kérj el.", "If you have them, the listing, floor plans and any technical documents. If not, we'll tell you what to ask for.")],
    [t("Hol dolgoztok?", "Where do you work?"), t("Budapesten és Pest megyében.", "In Budapest and Pest County.")],
  ];

  return (
    <div className="landing-page">
      <section className="lp-hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="site-container lp-hero-inner">
          <p className="kicker">{t("Ingatlan átvilágítás vásárlás előtt", "Pre-purchase property inspection")}</p>
          <h1>{t("Mielőtt aláírsz, tudd meg, mit rejt az ingatlan.", "Before you sign, find out what the property is hiding.")}</h1>
          <p className="lead">{t("Független műszaki szakértőként feltárjuk a rejtett hibákat, és megmutatjuk, mennyibe kerülnek. Így nem utólag, hanem még a döntés előtt tudod meg.", "As independent technical experts, we uncover hidden defects and show you what they'll cost, so you find out before you commit, not after.")}</p>
          <div className="lp-cta-row">
            <button className="button-primary" onClick={toForm}>{t("Ingyenes konzultációt kérek", "Book a free consultation")} <span>→</span></button>
            <a className="lp-phone" href={`tel:${PHONE}`}><Phone size={18} /> {PHONE_LABEL}</a>
            <a className="lp-phone" href="https://wa.me/36309039630" target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
          </div>
          <ul className="lp-trust">
            {[t("Független szakértő", "Independent expert"), t("Építőipari háttér", "Construction background"), t("Budapest & Pest megye", "Budapest & Pest County"), t("Ingyenes első konzultáció", "Free first consultation")].map(x => <li key={x}><ShieldCheck size={16} />{x}</li>)}
          </ul>
        </div>
      </section>

      <section className="lp-section">
        <div className="site-container">
          <p className="kicker">{t("A kockázat", "The risk")}</p>
          <h2>{t("Egy szép lakás is rejthet milliós meglepetést.", "Even a beautiful home can hide a costly surprise.")}</h2>
          <div className="lp-grid">{risks.map(([h, p]) => <article className="lp-card" key={h}><h3>{h}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="lp-section lp-surface">
        <div className="site-container">
          <p className="kicker">{t("Hogyan működik", "How it works")}</p>
          <h2>{t("Három lépés a nyugodt döntésig.", "Three steps to a confident decision.")}</h2>
          <div className="lp-steps">{steps.map(([Icon, h, p], i) => <article className="lp-step" key={h}><span className="lp-num">0{i + 1}</span><Icon className="lp-icon" /><h3>{h}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="lp-section">
        <div className="site-container lp-split">
          <div>
            <p className="kicker">{t("Amit kapsz", "What you get")}</p>
            <h2>{t("Tiszta kép, mielőtt pénzt adsz ki.", "A clear picture before you spend a penny.")}</h2>
            <ul className="lp-checks">{gets.map(g => <li key={g}><Check size={18} />{g}</li>)}</ul>
          </div>
          <div className="lp-prices">
            {prices.map(([n, p]) => <div key={n}><span>{n}</span><strong>{tr(p)}</strong></div>)}
            <p>{t("Az első megtekintés egy átlagos vételár kevesebb mint 0,1%-a – miközben millióktól és rengeteg későbbi fejfájástól óvhat meg.", "A first viewing costs less than 0.1% of a typical purchase price – while protecting you from thousands in surprise costs and a lot of headaches.")}</p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-surface">
        <div className="site-container lp-about">
          <img src={portrait} alt={t("Pádár Attila", "Attila Pádár")} loading="lazy" />
          <div>
            <p className="kicker">{t("Ki fog segíteni", "Who you'll work with")}</p>
            <h2>{t("Pádár Attila", "Attila Pádár")}</h2>
            <p className="lp-role">{t("Tulajdonos", "Owner")}</p>
            <p className="lead">{t("„Nem eladni akarunk neked egy ingatlant, hanem segíteni, hogy jól dönts. Ha valami nem stimmel, megmondjuk – akkor is, ha ez azt jelenti, hogy inkább ne vedd meg.”", "“We're not here to sell you a property – we're here to help you make the right call. If something's wrong, we'll tell you, even if that means walking away.”")}</p>
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="site-container narrow">
          <p className="kicker">{t("Gyakori kérdések", "Questions")}</p>
          <h2>{t("Mielőtt jelentkezel", "Before you get in touch")}</h2>
          <div className="lp-faq">{faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <LeadForm />

      <section className="lp-final">
        <div className="site-container">
          <h2>{t("Mielőtt aláírsz, nézzük meg együtt.", "Before you sign, let's take a look together.")}</h2>
          <button className="button-primary" onClick={toForm}>{t("Ingyenes konzultációt kérek", "Book a free consultation")} <span>→</span></button>
        </div>
      </section>

      <div className="lp-sticky"><button className="button-primary" onClick={toForm}>{t("Érdeklődöm", "Get in touch")} →</button><a href={`tel:${PHONE}`} aria-label={t("Hívás", "Call")}><Phone size={20} /></a></div>
    </div>
  );
}
