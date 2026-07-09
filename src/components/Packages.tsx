import {
  Building2,
  FileText,
  Handshake,
  HardHat,
  Home,
  ListChecks,
  MessageSquare,
  Paintbrush,
  Quote,
  Scale,
  ShieldCheck,
  TrendingUp,
  User,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

const packages = [
  {
    label: "DÍJMENTES",
    title: "Első konzultáció",
    icon: MessageSquare,
    desc: "Mielőtt bármilyen döntést hozna, beszéljük át az ingatlannal kapcsolatos kérdéseit.",
    contents: [
      "30 perces online vagy telefonos konzultáció",
      "helyzetfelmérés",
      "első szakmai iránymutatás",
      "javaslat a következő lépésekre",
    ],
    singlePrice: "Díjmentes",
    cta: "Időpontot kérek",
  },
  {
    title: "Ingatlan Kockázatfelmérés",
    icon: Building2,
    desc: "Helyszíni felmérés, amely feltárja a műszaki, jogi és pénzügyi kockázatokat még a vásárlás előtt.",
    contents: [
      "műszaki állapotfelmérés",
      "rejtett hibák feltárása",
      "jogi háttér áttekintése",
      "pénzügyi kötelezettségek áttekintése",
      "személyes konzultáció",
    ],
    prices: [
      { icon: Building2, label: "LAKÁS", value: "150 000 Ft" },
      { icon: Home, label: "CSALÁDI HÁZ", value: "200 000 Ft" },
    ],
  },
  {
    title: "Felújítási és korszerűsítési tanácsadás",
    icon: Paintbrush,
    desc: "Segítünk megtervezni a felújítást, a korszerűsítést és a várható költségeket.",
    contents: [
      "műszaki tanácsadás",
      "felújítási javaslatok",
      "korszerűsítési lehetőségek",
      "költségbecslés",
      "megvalósítási sorrend",
    ],
    prices: [
      { icon: Building2, label: "LAKÁS", value: "350 000 Ft" },
      { icon: Home, label: "CSALÁDI HÁZ", value: "550 000 Ft" },
    ],
  },
  {
    title: "Felújítási koncepció",
    icon: FileText,
    desc: "Szakmai javaslati terv készítése, amely megmutatja a felújítás legjobb irányát.",
    contents: [
      "felújítási koncepció",
      "műszaki javaslatok",
      "munkafolyamatok sorrendje",
      "költségtervezési irányelvek",
      "megvalósítási ajánlások",
    ],
    singlePriceIcon: FileText,
    singlePrice: "EGYEDI AJÁNLAT ALAPJÁN",
  },
  {
    label: "PRÉMIUM SZOLGÁLTATÁS",
    title: "Projektmenedzsment",
    icon: ListChecks,
    desc: "A teljes beruházás szakmai koordinációja az első egyeztetéstől egészen az átadásig.",
    contents: [
      "kivitelezők kiválasztásának támogatása",
      "ajánlatok szakmai összehasonlítása",
      "műszaki ellenőrzések",
      "helyszíni bejárások",
      "projektkoordináció",
      "folyamatos szakmai képviselet",
    ],
    prices: [
      { icon: Building2, label: "LAKÁS", value: "1 200 000 Ft-tól" },
      { icon: Home, label: "CSALÁDI HÁZ", value: "Egyedi ajánlat" },
    ],
  },
];

const extras = [
  { icon: Wallet, label: "Teljes körű pénzügyi tanácsadás" },
  { icon: Scale, label: "Ingatlan jogi hátterének áttekintése" },
  { icon: TrendingUp, label: "Értékesítés előtti műszaki felkészítés" },
  { icon: Wrench, label: "Karbantartási és üzemeltetési tanácsadás" },
  { icon: Users, label: "Megbízható szakemberek ajánlása" },
  { icon: HardHat, label: "Kivitelezők szakmai koordinációja" },
  { icon: Handshake, label: "Mediáció és vitás helyzetek rendezése" },
  { icon: ShieldCheck, label: "Független szakmai képviselet" },
];

export function Packages() {
  return (
    <section id="csomagok" className="py-24 md:py-32 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">
            Szolgáltatási csomagok
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-4">
            Szolgáltatási <span className="text-gold italic">csomagok</span>
          </h2>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-20 bg-primary/40" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-20 bg-primary/40" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Az első konzultációtól a teljes projektmenedzsmentig.
            <br className="hidden md:block" /> Független szakmai támogatás minden fontos
            ingatlandöntéshez.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-6 md:gap-7">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            const highlighted =
              pkg.label === "DÍJMENTES" || pkg.label === "PRÉMIUM SZOLGÁLTATÁS";
            const isPremium = pkg.label === "PRÉMIUM SZOLGÁLTATÁS";
            return (
              <article
                key={i}
                className={`group relative rounded-2xl p-5 flex flex-col h-full text-center transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-in ${
                  highlighted
                    ? "border-2 border-primary bg-card/50"
                    : "border border-primary/40 bg-card/40 hover:border-primary/80"
                }`}
                style={{
                  animationDelay: `${i * 80}ms`,
                  boxShadow: isPremium ? "0 0 80px -30px oklch(0.82 0.11 82 / 0.35)" : undefined,
                }}
              >
                {pkg.label && (
                  <div
                    className={`absolute top-0 ${
                      isPremium ? "right-0" : "left-0"
                    } px-5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground bg-primary`}
                    style={{
                      clipPath: isPremium
                        ? "polygon(0 0, 100% 0, 100% 100%, 10% 100%)"
                        : "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
                    }}
                  >
                    {pkg.label}
                  </div>
                )}

                <div className="mx-auto w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                <div className="flex items-center justify-center gap-2 text-gold font-display mb-4">
                  <div className="h-px w-8 bg-primary/40" />
                  <span className="text-sm">{i + 1}.</span>
                  <div className="h-px w-8 bg-primary/40" />
                </div>

                <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight break-words">
                  {pkg.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">TARTALMA</p>
                  <div className="h-px w-8 bg-primary/50 mx-auto" />
                </div>

                <ul className="space-y-2 mb-6 text-sm text-foreground/80 text-left list-disc list-inside marker:text-primary">
                  {pkg.contents.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-border/50 pt-5">
                  {pkg.singlePrice ? (
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex items-center gap-2 flex-wrap justify-center">
                        {pkg.singlePriceIcon && (
                          <pkg.singlePriceIcon className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                        )}
                        <span className="font-display text-base md:text-lg text-gold leading-tight text-center">
                          {pkg.singlePrice}
                        </span>
                      </div>
                      {pkg.cta && (
                        <a
                          href="#kapcsolat"
                          className="block w-full py-3 rounded-lg bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider transition hover:bg-primary/90"
                        >
                          {pkg.cta}
                        </a>
                      )}
                    </div>
                  ) : pkg.prices ? (
                    <div className="space-y-3">
                      {pkg.prices.map((p, idx) => {
                        const PriceIcon = p.icon;
                        return (
                          <div
                            key={idx}
                            className="flex flex-col items-center gap-1 text-center"
                          >
                            <div className="flex items-center gap-2">
                              <PriceIcon
                                className="w-4 h-4 text-primary shrink-0"
                                strokeWidth={1.5}
                              />
                              <span className="text-muted-foreground uppercase tracking-wider text-[10px]">
                                {p.label}
                              </span>
                            </div>
                            <span className="font-display text-base md:text-lg text-gold leading-tight">
                              {p.value}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 rounded-2xl border border-primary/60 p-8 md:p-12 bg-card/40">
          <div className="text-center mb-10">
            <h3 className="text-lg md:text-xl uppercase tracking-[0.2em] text-gold mb-3">
              Kiegészítő szolgáltatások
            </h3>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-primary/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-primary" />
              <div className="h-px w-16 bg-primary/40" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-4">
            {extras.map((extra, i) => {
              const ExtraIcon = extra.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full border border-primary/60 flex items-center justify-center mb-3">
                    <ExtraIcon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs md:text-sm text-foreground/90 leading-tight">
                    {extra.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="mt-20 md:mt-24 relative rounded-2xl border border-primary overflow-hidden p-10 md:p-16 text-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <Quote className="w-10 h-10 text-primary mx-auto mb-6" strokeWidth={1.5} />
            <blockquote className="font-display text-2xl md:text-4xl italic leading-snug mb-8">
              „Az <span className="text-gold not-italic">IngatlanKockázat</span> célja, hogy Ön
              minden fontos ingatlandöntést biztonságban, megfelelő információk birtokában és
              felesleges kockázatok nélkül hozhassa meg."
            </blockquote>
            <a
              href="#kapcsolat"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-primary text-primary-foreground font-medium text-xs md:text-sm uppercase tracking-wider whitespace-nowrap transition hover:bg-primary/90"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
              Kérek személyes ajánlatot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
