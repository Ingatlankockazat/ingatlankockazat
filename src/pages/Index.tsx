import service1Url from "@/assets/service1.jpg";
import service2Url from "@/assets/service2.jpg";
import service3Url from "@/assets/service3.jpg";
import service4Url from "@/assets/service4.jpg";
import service5Url from "@/assets/service5.jpg";

import { Packages } from "@/components/Packages";
import logoUrl from "@/assets/logo.png";

const services = [
  {
    img: service1Url,
    title: "Rejtett műszaki hibák feltárása",
    desc: "Feltárjuk azokat a műszaki hibákat és kockázatokat, amelyek a vásárlás után jelentős javítási költséget okozhatnak.",
  },
  {
    img: service2Url,
    title: "Jogi és tulajdoni kockázatok",
    desc: "Átvizsgáljuk az ingatlan jogi hátterét, tulajdoni viszonyait és az esetleges terheket, hogy Ön biztonságos döntést hozhasson.",
  },
  {
    img: service3Url,
    title: "Teljes körű pénzügyi tanácsadás",
    desc: "Segítünk kiválasztani a legkedvezőbb hitel-, finanszírozási és biztosítási megoldásokat, teljesen független szakmai szemlélettel.",
  },
  {
    img: service4Url,
    title: "Felújítási tervezés és költségbecslés",
    desc: "Reális képet adunk a szükséges felújításokról, azok várható költségeiről és a lehetséges műszaki megoldásokról.",
  },
  {
    img: service5Url,
    title: "Mediáció és vitás helyzetek rendezése",
    desc: "Független mediációval segítünk rendezni a lakásvásárlás, felújítás vagy értékesítés során felmerülő vitákat, valamint támogatjuk a felek közötti korrekt és egyértelmű megállapodások létrejöttét.",
  },
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
      <Packages />
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
        <a href="#top" className="flex items-center gap-3">
          <img src={logoUrl} alt="Kockázatmentes Ingatlan logó" className="h-10 w-auto" />
          <span className="font-display text-xl tracking-wide hidden sm:inline">
            <span className="text-gold">Kockázatmentes</span> Ingatlan
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#rolunk" className="hover:text-foreground transition">
            Rólunk
          </a>
          <a href="#szolgaltatasok" className="hover:text-foreground transition">
            Szolgáltatások
          </a>
          <a href="#referencia" className="hover:text-foreground transition">
            Referencia
          </a>
          <a href="#kapcsolat" className="hover:text-foreground transition">
            Kapcsolat
          </a>
        </nav>
        <a
          href="#kapcsolat"
          className="text-xs md:text-sm px-4 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition"
        >
          Konzultáció
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
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
            Független műszaki és szakmai támogatás vásárlás, felújítás és értékesítés előtt — több
            mint három évtized tapasztalattal, kizárólag az Ön érdekében.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#kapcsolat"
              className="px-6 py-3 rounded-full text-primary-foreground font-medium"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}
            >
              Kérek konzultációt
            </a>
            <a
              href="#szolgaltatasok"
              className="px-6 py-3 rounded-full border border-border hover:border-primary/60 transition"
            >
              Szolgáltatások
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm">
            <div>
              <div className="font-display text-3xl text-gold">30+</div>
              <div className="text-muted-foreground">év tapasztalat</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-gold">100%</div>
              <div className="text-muted-foreground">független</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-gold">5–20M</div>
              <div className="text-muted-foreground">Ft megtakarítás</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-2xl opacity-40 blur-3xl"
            style={{ background: "var(--gradient-gold)" }}
          />
          <img
            src={service3Url}
            alt="Sikeresen lezárt ingatlanprojekt"
            className="relative rounded-2xl border border-border/60"
            style={{ boxShadow: "var(--shadow-elegant)" }}
            loading="eager"
          />
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
            Nem ingatlanközvetítőként, nem értékesítőként és nem az üzlet létrejöttében érdekelt
            szereplőként dolgozunk. Kizárólag ügyfeleink érdekeit képviselve nyújtunk műszaki,
            szakmai és gyakorlati támogatást.
          </p>
        </div>
        <div className="md:col-span-7 space-y-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-card/60 border border-border/60 hover:border-primary/40 transition"
            >
              <span className="font-display text-gold text-xl shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
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
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">Szolgáltatások</p>
          <h2 className="text-3xl md:text-5xl leading-tight mb-6">
            Miben segítünk <span className="text-gold italic">Önnek?</span>
          </h2>
          <div className="hairline mb-6" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            Az ingatlanvásárlás, felújítás vagy értékesítés során egy rossz döntés komoly anyagi
            veszteséget okozhat. Független szakértőként segítünk feltárni a kockázatokat, átlátni a
            lehetőségeket és biztonságos döntést hozni.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-7">
          {services.map((s, i) => (
            <article
              key={i}
              className="group relative rounded-2xl bg-background/70 border border-border/60 hover:border-primary/60 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col animate-fade-in"
              style={{
                animationDelay: `${i * 80}ms`,
                boxShadow: "0 20px 60px -30px rgba(0,0,0,0.6)",
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 left-4 font-display text-gold text-2xl tracking-wide">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-6 md:p-7 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div
                className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "var(--gradient-gold)" }}
              />
            </article>
          ))}
        </div>
        <figure className="mt-20 md:mt-24 max-w-4xl mx-auto text-center">
          <div className="hairline mb-10" />
          <blockquote className="font-display text-2xl md:text-4xl italic leading-snug">
            „Az <span className="text-gold not-italic">IngatlanKockázat</span> célja, hogy Ön minden
            fontos ingatlandöntést biztonságban, megfelelő információk birtokában és felesleges
            kockázatok nélkül hozhassa meg."
          </blockquote>
          <div className="hairline mt-10" />
        </figure>
      </div>
    </section>
  );
}


function References() {
  const items = [
    {
      t: "Belvárosi lakás vásárlás",
      d: "12M Ft becsült rejtett költséget tártunk fel — az ügyfél tudatosan tárgyalt árcsökkentést.",
      tag: "Vásárlás",
    },
    {
      t: "Családi ház felújítás",
      d: "Teljes körű műszaki koordináció, határidőre, a tervezett kereten belül.",
      tag: "Felújítás",
    },
    {
      t: "Befektetési ingatlan",
      d: "Értékesítés előtti felkészítés — 18%-kal magasabb eladási ár.",
      tag: "Értékesítés",
    },
    {
      t: "Társasházi korszerűsítés",
      d: "Energetikai és gépészeti tanácsadás, hosszú távú üzemeltetési terv.",
      tag: "Üzemeltetés",
    },
  ];
  return (
    <section id="referencia" className="py-24 md:py-32 bg-card/30 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">Referencia</p>
          <h2 className="text-3xl md:text-5xl leading-tight">
            Projektek, ahol a <span className="text-gold italic">tények</span> döntöttek.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-background/80 border border-border/60 hover:border-primary/40 transition"
            >
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
          <figcaption className="mt-4 text-sm text-muted-foreground tracking-wider uppercase">
            — Küldetésünk
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kapcsolat" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <div
        className="rounded-3xl p-10 md:p-16 border border-border/60 relative overflow-hidden"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elegant)" }}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">Kapcsolat</p>
            <h2 className="text-3xl md:text-5xl leading-tight mb-5">
              Beszéljünk a <span className="text-gold italic">döntéséről.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Egy rövid konzultáció során feltérképezzük a helyzetet és megmutatjuk, hol tudunk
              Önnek a leginkább értéket adni.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+36309039630"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <span className="text-primary">→</span> +36 30 903 96 30
              </a>
              <a
                href="mailto:info@ingatlankockazat.hu"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <span className="text-primary">→</span> info@ingatlankockazat.hu
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="text-primary">→</span> Budapest és környéke
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary outline-none transition"
              placeholder="Név"
            />
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary outline-none transition"
              placeholder="E-mail"
            />
            <input
              className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary outline-none transition"
              placeholder="Telefon"
            />
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary outline-none transition resize-none"
              placeholder="Miben segíthetünk?"
            />
            <button
              className="w-full py-3 rounded-lg text-primary-foreground font-medium"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-glow)" }}
            >
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
        <div className="font-display text-lg">
          <span className="text-gold">Kockázatmentes</span> Ingatlan
        </div>
        <p>© {new Date().getFullYear()} Minden jog fenntartva. Független műszaki tanácsadás.</p>
      </div>
    </footer>
  );
}
