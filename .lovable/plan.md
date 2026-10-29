# Érdeklődő űrlap a Kapcsolat oldalon, félbehagyott kitöltések mentésével

## Mit csinál a bluemarketing.hu
- Többlépéses űrlapot használnak („Lépés 1 / 4”) egy WordPress-űrlapkezelővel: először kérdéseket tesznek fel, az elérhetőséget a végén kérik.
- Nem zárolják a mezőket, és külön hozzájárulási pipát sem láttam náluk. Csak egy süti-ablakuk van.
- A nyilvános oldalukon nem láttam jelét annak, hogy a félbehagyott kitöltéseket mentenék.

## Az űrlap felépítése (4 lépés, profi hangnemben)
1. **Miben segíthetünk?** Vásárlás, eladás, bérlés, bérbeadás, felújítás vagy egyéb. Nagy, kattintható kártyák.
2. **Néhány gyors kérdés a választott témához.** Kattintható válaszok, mindegyiknél „Egyéb” lehetőséggel:
   - Vásárlás: hol tartasz (még keresek / kinéztem egyet / ajánlatot tettem / szerződés előtt), mi a célod (saját otthon / befektetés / kiadás), mekkora a kereted (sávok), mikorra tervezed.
   - Eladás: hol tartasz, milyen áron hirdetnéd (sávok), mi a célod (gyors eladás / legjobb ár / felkészítés az eladásra).
   - Bérlés és bérbeadás: hol tartasz, mekkora a havi díj (sávok), mi okoz gondot.
   - Felújítás: milyen fázisban vagy, mekkora a keret, mi a cél.
   - Minden témánál: az ingatlan típusa (lakás / ház / egyéb) és helye (Budapest / Pest megye / máshol).
3. **Hol érünk el?** Név, telefon, e-mail. Ide nem kerül hosszú jogi szöveg:
   - Gomb: **„Kérem, hogy keressenek →”**
   - Alatta egy apró, halvány sor: *„Elérhetőségeidet kizárólag az ingatlanoddal kapcsolatos megkereséshez használjuk. Adatkezelési tájékoztató”*
   - A gomb megnyomása számít hozzájárulásnak, a pontos jogi megfogalmazás az Adatkezelési tájékoztatóba kerül. Ekkor rögzítjük az érdeklődőt az eddigi válaszaival együtt, akkor is, ha a 4. lépést már nem fejezi be.
4. **Mesélj röviden.** Szabadszavas mező („Mi foglalkoztat leginkább az ingatlannal kapcsolatban?”). Alatta egy nem kötelező, előre be nem jelölt pipa kér hozzájárulást a hasznos tippekhez és ajánlatokhoz. Gomb: **„Elküldöm”**, utána köszönő üzenet.

A keret- és ársávokat én javaslom. A végleges sávokat megadhatod, vagy jóváhagyás után átírom őket. Az Adatkezelési tájékoztató egy új bekezdést kap, magyarul és angolul: mit, miért és meddig tárolunk (javasolt megőrzési idő: 12 hónap), és hogyan kérhető a törlés. Ez gyakorlati javaslat, nem jogi tanácsadás.

## Megjelenés
- Új „Érdeklődöm” szekció a Kapcsolat oldalon, a névjegy-blokk alatt, **számítógépen és telefonon is**, magyarul és angolul, a meglévő sötét, üveges stílusban, lépésjelzővel (1/4 – 4/4).

## E-mail értesítés az info@ingatlankockazat.hu címre
- **Félbehagyott érdeklődés:** e-mail a 3. lépés gombjának megnyomásakor, a névvel, az elérhetőséggel és az eddigi válaszokkal.
- **Elküldött érdeklődés:** második e-mail a teljes tartalommal.
- Az e-mail küldéséhez fizetős csomag és az ingatlankockazat.hu domain egyszeri hitelesítése kell. A domain beállításaiban hozzá kell adni néhány bejegyzést, a beállító ablakot a beépítés közben megnyitom. Amíg a hitelesítés nincs kész, az érdeklődők mentődnek, csak e-mail nem megy róluk.
- Az érdeklődők teljes listáját a Lovable Cloud adatkezelő felületén is látod, a legfrissebb elöl.

## Lépések
1. Lovable Cloud bekapcsolása.
2. A négylépéses űrlap elkészítése (számítógép és telefon, magyar és angol).
3. Mentés a 3. lépés gombjánál, frissítés küldéskor.
4. Az e-mail domain beállítása, majd a két értesítő e-mail bekötése.
5. Az Adatkezelési tájékoztató kiegészítése.
6. Próbakitöltés félbehagyva és elküldve is, a mentett adatok és az e-mailek ellenőrzése, végül a próbaadatok törlése.

## Technikai részletek
- Tábla: `contact_leads` (id, topic, answers jsonb, name, phone, email, message, status `partial|submitted`, consent_contact, consent_marketing, consent_text_version, consent_at, language, created_at, updated_at). GRANT csak a service_role-nak, RLS bekapcsolva.
- Edge function `lead-capture`: zod-validálás, upsert a kliens által generált uuid alapján, ütemkorlátozás, honeypot mező a botok ellen. Az e-maileket a `send-transactional-email` küldi a `lead-started` és a `lead-submitted` sablonnal, fix címzettel, `lead-started-{id}` és `lead-submitted-{id}` idempotencia-kulccsal.
- A GitHub Pages-es statikus build is működik, mert a hívás a függvény nyilvános URL-jére megy.
