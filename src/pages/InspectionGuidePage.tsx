import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/redesign";
import { LanguageLink as Link, useLanguage } from "@/lib/i18n/Language";
import "./inspection-guide.css";

const route = "/ingatlan-muszaki-allapotfelmeres";

export default function InspectionGuidePage() {
  const { language } = useLanguage();
  const en = language === "en";
  const t = (hu: string, english: string) => en ? english : hu;
  const title = t("Ingatlan műszaki állapotfelmérés: mit vizsgálunk? | Ingatlankockázat", "Property condition survey: what is checked? | Property Support");
  const description = t("Mit tartalmaz az ingatlan műszaki állapotfelmérés, milyen dokumentumokat készíts elő, és hogyan segít a vásárlás vagy felújítás előtt? Útmutató és konzultáció.", "What does a property condition survey cover, which documents should you prepare, and how can it help before buying or renovating? Read our guide.");
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    const specs = [
      ["meta", "name", "description", description],
      ["meta", "property", "og:title", title],
      ["meta", "property", "og:description", description],
      ["meta", "property", "og:url", `https://ingatlankockazat.hu${route}${en ? "?lang=en" : ""}`],
      ["link", "rel", "canonical", `https://ingatlankockazat.hu${route}${en ? "?lang=en" : ""}`],
    ];
    const cleanup = specs.map(([tag, attribute, key, value]) => {
      const selector = `${tag}[${attribute}="${key}"]`;
      const existing = document.head.querySelector(selector);
      const element = existing ?? document.createElement(tag);
      const valueAttribute = tag === "link" ? "href" : "content";
      const previous = element.getAttribute(valueAttribute);
      element.setAttribute(attribute, key);
      element.setAttribute(valueAttribute, value);
      if (!existing) document.head.appendChild(element);
      return () => {
        if (!existing) element.remove();
        else if (previous === null) element.removeAttribute(valueAttribute);
        else element.setAttribute(valueAttribute, previous);
      };
    });
    return () => { cleanup.forEach(restore => restore()); document.title = previousTitle; };
  }, [title, description, en]);

  const sections = [
    ["mikor", t("Mikor érdemes állapotfelmérést kérni?", "When is a survey useful?")],
    ["vizsgalat", t("Mit tartalmaz a vizsgálat?", "What does the survey cover?")],
    ["dokumentumok", t("Mit készíts elő?", "What should you prepare?")],
    ["eredmeny", t("Hogyan segít az eredmény?", "How do the findings help?")],
    ["korlatok", t("Mit fontos előre tisztázni?", "What should you agree beforehand?")],
  ];
  return <div className="page-shell inspection-guide">
    <header className="site-container guide-header">
      <p className="kicker">{t("Útmutató ingatlandöntés előtt", "Before you make a property decision")}</p>
      <h1>{t("Ingatlan műszaki állapotfelmérés", "Property condition survey")}</h1>
      <p className="lead">{t("Egy megtekintés benyomásokat ad. A műszaki állapotfelmérés abban segít, hogy az ingatlan állapotát, a dokumentációt és a felmerülő kockázatokat együtt mérlegeld, mielőtt vásárlásról vagy felújításról döntesz.", "A viewing gives you a first impression. A condition survey helps you weigh up the property's actual condition, its paperwork and potential risks before you buy or renovate.")}</p>
      <Button asChild className="button-primary"><Link to="/kapcsolat#erdeklodom">{t("Konzultációt kérek", "Request a consultation")}<ArrowRight /></Link></Button>
    </header>
    <div className="site-container guide-layout">
      <article className="guide-content">
        <section id="mikor"><h2>{sections[0][1]}</h2><p>{t("Vásárlás előtt akkor, amikor már van konkrét ingatlan, de még nem vállaltál végleges kötelezettséget. Felújítás előtt pedig akkor, amikor a szükséges munkákat és azok sorrendjét szeretnéd meghatározni.", "Before buying, a survey is useful once you have a specific property in mind but have not yet made a binding commitment. Before renovating, it helps you identify the work needed and decide what to tackle first.")}</p><p>{t("Az első megtekintés és a részletesebb helyszíni felmérés nem ugyanaz: előbbinél szakmai kérdésekkel segítünk szűrni, utóbbinál a rendelkezésre álló dokumentációval együtt értékeljük a valós állapotot.", "An accompanied viewing and a more detailed on-site survey serve different purposes. At a viewing, we help you ask the right questions; a survey assesses the actual condition alongside the available documentation.")}</p></section>
        <section id="vizsgalat"><h2>{sections[1][1]}</h2><ul>
          <li>{t("Műszaki és szerkezeti állapot áttekintése: például repedések, nedvességre utaló jelek és az épületszerkezetek állapotával kapcsolatos kérdések.", "A review of the building's technical and structural condition, including cracks, signs of damp and questions about the condition of its structural elements.")}</li>
          <li>{t("Gépészeti rendszerek áttekintése: az elektromos, víz- és fűtési rendszerekkel kapcsolatos állapot és felmerülő kérdések.", "A review of building services, including the condition of electrical, plumbing and heating systems and any questions they raise.")}</li>
          <li>{t("Dokumentáció és valóság összevetése: a rendelkezésre álló tervek és műszaki iratok összhangja a látottakkal, az utólagos átalakításokkal együtt.", "A comparison of the available plans and technical records with the property as it stands, including subsequent alterations.")}</li>
          <li>{t("Figyelemfelhívás az esetleges hibalehetőségekre és azokra a pontokra, amelyek további tisztázást igényelnek.", "Identification of potential defects and matters that need further investigation.")}</li>
        </ul><p>{t("A pontos vizsgálati tartalmat az ingatlan típusa, a hozzáférhető részek és a célod alapján egyeztetjük.", "We agree the scope based on the property type, accessible areas and what you need to find out.")}</p></section>
        <section id="dokumentumok"><h2>{sections[2][1]}</h2><ol>
          <li>{t("Küldd el a hirdetés linkjét és az ingatlan helyszínét.", "Share the listing and the property's location.")}</li>
          <li>{t("Ha rendelkezésre állnak, készítsd elő az alaprajzokat, terveket és műszaki dokumentumokat.", "Gather any available floor plans, drawings and technical documents.")}</li>
          <li>{t("Írd össze az ismert hibákat, korábbi átalakításokat és a megtekintésen felmerült kérdéseidet.", "Note any known defects, previous alterations and questions from your viewing.")}</li>
          <li>{t("Jelezd a döntési határidődet és azt, vásárlást vagy felújítást tervezel-e.", "Tell us your deadline and whether you are planning to buy or renovate.")}</li>
        </ol><p>{t("Ha hiányzik a dokumentáció, az első konzultáción megbeszéljük, mit érdemes elkérned, és milyen kérdések maradnak nyitva nélküle.", "If documents are missing, we can discuss what to request and which questions will remain unanswered without them.")}</p></section>
        <section id="eredmeny"><h2>{sections[3][1]}</h2><p>{t("A felmérés segít eldönteni, érdemes-e továbblépni, és mit szükséges még tisztázni. A feltárt kérdések a vételárról vagy a következő lépésekről folytatott egyeztetésben is támpontot adhatnak.", "The findings help you decide whether to proceed and what still needs clarification. They can also inform discussions about the purchase price or your next steps.")}</p><p>{t("Ha a javítási lehetőségekről, reális költségsávokról és a felújítás ütemezéséről is részletesebb képet szeretnél, ezt a szakmai értékelés és tervezés szolgáltatás keretében beszéljük át.", "For a more detailed picture of repair options, realistic cost ranges and renovation priorities, our expert assessment and planning service takes the next step.")}</p><p><Link to="/szolgaltatasok">{t("Helyszíni felmérés és kapcsolódó szolgáltatások →", "On-site surveys and related services →")}</Link></p></section>
        <section id="korlatok"><h2>{sections[4][1]}</h2><p>{t("Egy helyszíni felmérésből nem következik, hogy minden takart vagy hozzáférhetetlen hiba kizárható. Előre egyeztessük a hozzáférést, a rendelkezésre álló iratokat és azt, szükség lehet-e további szakági vizsgálatra. A műszaki áttekintést ne kezeld jogi ellenőrzés helyettesítőjeként.", "An on-site survey cannot rule out every concealed or inaccessible defect. Agree access, available documents and whether further specialist investigation may be needed beforehand. A technical survey should not be treated as a substitute for legal due diligence.")}</p><h3>{t("Mi legyen az első lépés?", "Where should you start?")}</h3><p>{t("Az első konzultáció díjmentes. Mondd el, hol tartasz, hogy az igényedhez illő szolgáltatást tudjuk egyeztetni.", "The first consultation is free. Tell us where you are in the process so we can discuss the right level of support.")}</p><p><Link to="/kapcsolat#erdeklodom">{t("Megadom az érdeklődésem részleteit →", "Share the details of your enquiry →")}</Link></p></section>
      </article>
      <aside className="guide-aside"><img className="guide-image" src={images.steps[1]} alt={t("Az ingatlanfelmérés szolgáltatásának illusztrációja", "Illustration of the property survey service")} /><h3>{t("Ebben az útmutatóban", "In this guide")}</h3><nav aria-label={t("Az útmutató tartalma", "Guide contents")}>{sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><Button asChild variant="outline" className="button-secondary"><Link to="/kapcsolat#erdeklodom">{t("Beszéljük át az ingatlanodat", "Let's discuss your property")}<ArrowRight /></Link></Button></aside>
    </div>
  </div>;
}