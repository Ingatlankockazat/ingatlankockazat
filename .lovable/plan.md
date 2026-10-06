# A kezdőlap pontos igazítása a 11 képernyőképhez

A tartalom és a szövegek nagyrészt már egyeznek; a különbség főleg az elrendezésben és a hangsúlyokban van. Szakaszonként:

1. **Fejléc** – bal oldalon narancs pötty + "INGATLANKOCKÁZAT" ritkított nagybetűvel; jobb oldalon a menüpontok, az aktív aláhúzva narancs vonallal; világos "Beszéljünk" gomb sötét, kerek nyíl ikonnal.
2. **Nyitókép** – narancs ritkított "INGATLANKOCKÁZAT.HU" felirat; a cím két részre bontva: első mondat vékony, kisbetűs fehér; a második ("AZONBAN AZ ELSŐ BENYOMÁS…") félkövér, nagybetűs, narancs. Alatta a szürke mondat, majd a narancs "Felülvizsgáltatom az ingatlant →" gomb.
3. **Mielőtt döntesz** – két oszlop függőleges elválasztóval: bal oldalon narancs felirat + nagy szöveg, a végén "milyen lehetőségek vannak benne." narancsban; jobb oldalon a leírás és a négy körvonalas címke. Jobbra halvány meleg barna színátmenet.
4. **01 A probléma** – két oszlop: bal oldalon "01" narancs szám + felirat, nagybetűs cím, leírás, "MI SEGÍTÜNK FELTÁRNI", majd a harmonika számozás nélkül (a nyitott elem kiemelt háttérrel, "−" jel; a többi "+" narancs jellel); alatta a narancs záró mondat a bal oszlopban. Jobb oldalon nagy, sötét enteriőrkép (lámpa, kanapé), balra elhalványítva.
5. **Idézet** – nagy narancs idézőjel bal oldalon; az idézet első fele fehér, "kevesebb információval… vásárlásakor." narancs; vékony elválasztó vonal; narancs nagybetűs "EZÉRT VAGYUNK MI…" cím, majd a szöveg. Háttérkép nélküli, sima sötét felület.
6. **02 Mit csinálunk?** – az igék egy sorban, folyamatosan tördelve (az utolsó narancs); alatta két egyenlő szövegoszlop, a második vége narancs.
7. **03 A folyamat** – bal oldali lépéssor (az aktív kiemelt háttérrel); jobb oldalon lekerekített keretes kártya: bal fele szöveg, jobb fele a lépés képe tisztán (nem háttérként elsötétítve), a végén narancs dőlt mondat.
8. **04 Szolgáltatások** – a cím mellett jobbra a Vevői / Eladói / Bérlői váltó; alatta keretes kártya: bal oldalon felirat, nagybetűs cím, narancs gomb; jobb oldalon vonalakkal elválasztott lista.
9. **05 Értéknövelés** – két oszlop: bal oldalon cím, leírás és a kiemelt mondat (második fele narancs); jobb oldalon "ELŐTTE / UTÁNA" felirat, jobbra fent vonalkás lapozó, alatta a lekerekített előtte/utána kép a címkékkel.
10. **06 Függetlenség** – két egyforma blokk: bal oldalon teli narancs tömb fehér címmel és szöveggel; jobb oldalon sötét háttéren narancs nagybetűs "AZ A CÉLUNK…" cím, alcím, és a három szám keretes, vonalakkal elválasztott cellákban.
11. **Záró ajánlat** – fent narancs sáv a bal felén; két oszlop: bal oldalon sötét háttéren "MIELŐTT DÖNTESZ, NÉZZÜK MEG EGYÜTT." cím, a négy szó ritkított sorban, világos gomb; jobb oldalon a tanácsadós kép, balra elhalványítva.
12. **Lábléc** – egy sor: © 2026 Ingatlankockázat · Adatkezelés · Impresszum, jobbra "01 / 04".

Mobilon minden kétoszlopos rész egy oszlopba rendeződik, a képek a szöveg alá kerülnek.

## Technikai részletek
- Szerkesztett fájlok: `src/pages/Home.tsx`, `src/styles.css`, valamint a fejléc/lábléc a `src/components/site/SiteLayout.tsx` fájlban.
- A meglévő képek (`src/assets/redesign`) maradnak; a problémarész képéhez a jelenlegi `quote` kép kerül át (az idézetrész háttérkép nélküli lesz).
- A szín- és betűbeállítások változatlanok; az aloldalak nem változnak.
