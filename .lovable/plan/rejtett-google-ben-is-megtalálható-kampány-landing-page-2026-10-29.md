# Rejtett, Google-ben is megtalálható kampány landing page

## Cél
Egy új oldal: **ingatlankockazat.hu/ingatlan-atvilagitas**. Nincs benne a menüben és a láblécben. A Google viszont megtalálja, és kampányokban (Google, Facebook, Instagram) is megadható. A célja, hogy az érdeklődő kitöltse a meglévő 4 lépéses „Érdeklődöm” űrlapot. Magyarul és angolul is elérhető lesz (`?lang=en`).

## Felépítés (bevált ügyfélszerző minták alapján)
1. **Nyitó rész:** erős, előnyt ígérő cím (pl. „Vásárlás előtt tudd meg, mit rejt az ingatlan.”) és egy rövid alcím. Egy gomb visz le az űrlaphoz, mellette a telefonszám. Kevesebb menü, hogy ne kattintson el a látogató: csak a logó, a telefon és a nyelvváltó marad.
2. **Bizalomsáv:** független szakértő, építőipari háttér, Budapest és Pest megye, ingyenes első konzultáció. Csak olyan állítás kerül ide, ami már szerepel az oldalon.
3. **A probléma:** milyen rejtett hibák (nedvesség, gépészet, szabálytalan átalakítás) okozhatnak milliós kárt. A veszteség elkerülése a legerősebb érv.
4. **A megoldás három lépésben:** konzultáció, helyszíni vizsgálat, írásos összefoglaló és tárgyalási érvek.
5. **Mit kapsz:** pontokba szedett előnyök és a kezdő árak a meglévő árlistából (angolul euróban, felfelé kerekítve).
6. **Bemutatkozás:** portréfotó, név, beosztás, rövid személyes ígéret.
7. **Gyakori kérdések:** a jelentkezés előtti kételyek eloszlatása (ár, időtartam, mit kell előkészíteni, kötelez-e valamire).
8. **Űrlap:** a meglévő „Érdeklődöm” űrlap, a „partial” mentéssel és az adatkezelési hozzájárulással együtt.
9. **Záró felhívás:** még egy rövid, sürgető mondat és gomb („Mielőtt aláírsz, nézzük meg együtt.”). Mobilon alul végig látható „Érdeklődöm” sáv.

Szándékosan **nem** teszek be kitalált véleményeket, számokat, „csak ma” típusú hamis sürgetést vagy garanciákat. Ha vannak valódi ügyfélvéleményeid vagy eredményeid, küldd el, és betesszük őket – ezek a leghatásosabbak.

## Google és kampányok
- Az oldal saját címet, leírást és megosztási adatokat kap, és bekerül egy új sitemapbe, így a Google indexelheti.
- A kampánylinkek paraméterei (utm_source, utm_campaign, gclid, fbclid) eltárolódnak az érdeklődő mellé, így látni fogod, melyik hirdetésből jött.

## Technikai részletek
- Új route: `ingatlan-atvilagitas` → `LandingPage.tsx`. A SiteLayout kap egy `minimal` változatot (navigáció nélkül), a nav és a footer linkjei nem változnak.
- `react-helmet-async` az oldalankénti title/description/canonical/og adatokhoz. Plusz `public/sitemap.xml` és `public/robots.txt` az összes nyilvános útvonallal.
- A GitHub Pages SPA közvetlen URL-jéhez szükség esetén `404.html` fallback (meglévő deploy beállítás alapján ellenőrizve).
- A LeadForm a landingen is újrahasználva. Az UTM/gclid adatok `sessionStorage`-ből az `answers.attribution` mezőbe kerülnek, így nem kell sémát módosítani; a backend függvény csak engedi őket.
- A szövegek bekerülnek az `en.ts`-be, a stílusok a `.landing-page` alá kerülnek.
- Ellenőrzés: Playwright desktopon és 393 px-en, mindkét nyelven, egy tesztbeküldéssel, ami után a tesztsort törlöm.

## Kérdés
Jó az `/ingatlan-atvilagitas` cím, vagy inkább pl. `/ingyenes-konzultacio`?
