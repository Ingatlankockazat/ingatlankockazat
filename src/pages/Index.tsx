import phase1 from "@/assets/phase1.png.asset.json";
import phase2 from "@/assets/phase2.png.asset.json";
import phase3 from "@/assets/phase3.png.asset.json";
import phase4 from "@/assets/phase4.png.asset.json";
import phase5 from "@/assets/phase5.png.asset.json";

const services = [
  { title: "Vásárlás előtti felmérés", desc: "Az ingatlan műszaki állapotának feltárása, rejtett hibák és várható költségek azonosítása a megalapozott döntés érdekében." },
  { title: "Felújítási tanácsadás", desc: "Tervezett felújítások előkészítése, szükséges munkák meghatározása és reális költségbecslés." },
  { title: "Értékesítés előtti felkészítés", desc: "Olyan területek azonosítása, amelyek fejlesztésével az ingatlan piaci értéke és megjelenése növelhető." },
  { title: "Karbantartás és üzemeltetés", desc: "Javaslatok az állagmegóvásra, hosszú távú fenntartásra és költséghatékony üzemeltetésre." },
  { title: "Szakember- és kivitelezői háttér", desc: "Megfelelő szakemberek, kivitelezők és műszaki partnerek bevonása, a munkák szakmai koordinációja." },
  { title: "Magánszemély és vállalkozás", desc: "Szolgáltatásunk egyaránt elérhető magánszemélyek, befektetők és vállalkozások számára." },
];

const phases = [
  { img: phase1.url, num: "01", title: "Tanácstalanság", desc: "Az első benyomások megtévesztők lehetnek. A rejtett problémák később milliós kiadásokat okozhatnak." },
  { img: phase2.url, num: "02", title: "Szakmai felmérés", desc: "Helyszíni bejárás, műszaki állapotfelmérés, kockázatok és lehetőségek feltárása." },
  { img: phase3.url, num: "03", title: "Tervezés", desc: "Részletes terv, anyagválasztás, költségbecslés — közösen az Ön igényei szerint." },
  { img: phase5.url, num: "04", title: "Megvalósítás", desc: "Megbízható szakemberek, folyamatos műszaki ellenőrzés, határidők betartása." },
  { img: phase4.url, num: "05", title: "Sikeres projekt", desc: "Átláthatóan elköltött költségvetés, kiszámítható eredmény, elégedett ügyfél." },
];

const reasons = [
  "30+ év építőipari és műszaki tapasztalat",
  "Független, objektív szakmai szemlélet",
  "Kizárólag az Ön érdekeinek képviselete",
  "Rejtett kockázatok és költségek feltárása",
  "Gyakorlati kivitelezési tapasztalat",
  "Széles körű szakemberi kapcsolatrendszer",
  "Komplex támogatás döntéstől a megvalósításig",
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Process />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide">
          <span className="text-gold">Ingatlan</span>Kockázat
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#rolunk" className="hover:text-foreground transition">Rólunk</a>
          <a href="#szolgaltatasok" className="hover:text-foreground transition">Szolgáltatások</a>
          <a href="#referencia" className="hover:text-foreground transition">Referencia</a>
          <a href="#kapcsolat" className="hover:text-foreground transition">Kapcsolat</a>
        </nav>
        <a href="#kapcsolat" className="text-xs md:text-sm px-4 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition">
          Konzultáció
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary/80 mb-6">
            <span className="w-8 h-px bg-primary/60" />
            Független szakértő
          </div>
          <h1 className="text-4xl md:text-6xl leading-[1.05] mb-6">
            Megalapozott döntés <span className="text-gold italic">ingatlan</span> ügyekben.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Független műszaki és szakmai támogatás vásárlás, felújítás és értékesítés előtt — több mint három évtized tapasztalattal, kizárólag az Ön érdekében.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#kapcsolat" className="px-6 py-3 rounded-full text-primary-foreground font-medium" style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}>
              Kérek konzultációt
            </a>
            <a href="#szolgaltatasok" className="px-6 py-3 rounded-full border border-border hover:border-primary/60 transition">
              Szolgáltatások
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm">
            <div><div className="font-display text-3xl text-gold">30+</div><div className="text-muted-foreground">év tapasztalat</div></div>
            <div className="h-10 w-px bg-border" />
            <div><div className="font-display text-3xl text-gold">100%</div><div className="text-muted-foreground">független</div></div>
            <div className="h-10 w-px bg-border" />
            <div><div className="font-display text-3xl text-gold">5–20M</div><div className="text-muted-foreground">Ft megtakarítás</div></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl opacity-40 blur-3xl" style={{ background: "var(--gradient-gold)" }} />
          <img src={phase4.url} alt="Sikeresen lezárt ingatlanprojekt" className="relative rounded-2xl border border-border/60" style={{ boxShadow: "var(--shadow-elegant)" }} loading="eager" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="rolunk" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">Rólunk</p>
          <h2 className="text-3xl md:text-5xl leading-tight mb-6">
            Nem az üzletet képviseljük. <span className="text-gold italic">Önt.</span>
          </h2>
          <div className="hairline mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Nem ingatlanközvetítőként, nem értékesítőként és nem az üzlet létrejöttében érdekelt szereplőként dolgozunk. Kizárólag ügyfeleink érdekeit képviselve nyújtunk műszaki, szakmai és gyakorlati támogatást.
          </p>
        </div>
        <div className="md:col-span-7 space-y-4">
          {reasons.map((r, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-card/60 border border-border/60 hover:border-primary/40 transition">
              <span className="font-display text-gold text-xl shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-foreground/90">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 md:py-32 bg-card/30 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">Szolgáltatások</p>
          <h2 className="text-3xl md:text-5xl leading-tight">
            Komplex támogatás az ingatlan <span className="text-gold italic">teljes életciklusában</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article key={i} className="group p-7 rounded-2xl bg-background/80 border border-border/60 hover:border-primary/50 transition relative overflow-hidden">
              <div className="absolute top-0 right-0 font-display text-7xl text-primary/5 leading-none p-4">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-xl mb-3 relative">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <div className="max-w-2xl mb-14">
        <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">Folyamat</p>
        <h2 className="text-3xl md:text-5xl leading-tight">Útban a <span className="text-gold italic">sikeres projektig</span>.</h2>
      </div>
      <div className="space-y-12">
        {phases.map((p, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl opacity-20 blur-2xl" style={{ background: "var(--gradient-gold)" }} />
              <img src={p.img} alt={p.title} className="relative rounded-xl border border-border/60 w-full" loading="lazy" />
            </div>
            <div>
              <div className="font-display text-gold text-6xl md:text-7xl mb-3">{p.num}</div>
              <h3 className="text-2xl md:text-3xl mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function References() {
  const items = [
    { t: "Belvárosi lakás vásárlás", d: "12M Ft becsült rejtett költséget tártunk fel — az ügyfél tudatosan tárgyalt árcsökkentést.", tag: "Vásárlás" },
    { t: "Családi ház felújítás", d: "Teljes körű műszaki koordináció, határidőre, a tervezett kereten belül.", tag: "Felújítás" },
    { t: "Befektetési ingatlan", d: "Értékesítés előtti felkészítés — 18%-kal magasabb eladási ár.", tag: "Értékesítés" },
    { t: "Társasházi korszerűsítés", d: "Energetikai és gépészeti tanácsadás, hosszú távú üzemeltetési terv.", tag: "Üzemeltetés" },
  ];
  return (
    <section id="referencia" className="py-24 md:py-32 bg-card/30 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">Referencia</p>
          <h2 className="text-3xl md:text-5xl leading-tight">Projektek, ahol a <span className="text-gold italic">tények</span> döntöttek.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <div key={i} className="p-8 rounded-2xl bg-background/80 border border-border/60 hover:border-primary/40 transition">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider text-primary/80">{it.tag}</span>
                <span className="text-xs text-muted-foreground">Esettanulmány</span>
              </div>
              <h3 className="text-2xl mb-3">{it.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
        <figure className="mt-16 max-w-3xl mx-auto text-center">
          <div className="hairline mb-8" />
          <blockquote className="font-display text-2xl md:text-3xl italic leading-snug">
            „Egy jó döntés alapja a pontos információ és a megfelelő szakmai háttér."
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground tracking-wider uppercase">— Küldetésünk</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kapcsolat" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <div className="rounded-3xl p-10 md:p-16 border border-border/60 relative overflow-hidden" style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}>
        <div className="grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">Kapcsolat</p>
            <h2 className="text-3xl md:text-5xl leading-tight mb-5">
              Beszéljünk a <span className="text-gold italic">döntéséről.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Egy rövid konzultáció során feltérképezzük a helyzetet és megmutatjuk, hol tudunk Önnek a leginkább értéket adni.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+36000000000" className="flex items-center gap-3 hover:text-primary transition">
                <span className="text-primary">→</span> +36 00 000 0000
              </a>
              <a href="mailto:info@ingatlankockazat.hu" className="flex items-center gap-3 hover:text-primary transition">
                <span className="text-primary">→</span> info@ingatlankockazat.hu
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-primary">→</span> Budapest és környéke
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary outline-none transition" placeholder="Név" />
            <input type="email" className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary outline-none transition" placeholder="E-mail" />
            <input className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary outline-none transition" placeholder="Telefon" />
            <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary outline-none transition resize-none" placeholder="Miben segíthetünk?" />
            <button className="w-full py-3 rounded-lg text-primary-foreground font-medium" style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}>
              Üzenet küldése
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div className="font-display text-lg"><span className="text-gold">Ingatlan</span>Kockázat</div>
        <p>© {new Date().getFullYear()} Minden jog fenntartva. Független műszaki tanácsadás.</p>
      </div>
    </footer>
  );
}
