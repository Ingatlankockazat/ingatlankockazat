# Érdeklődő űrlap a Kapcsolat oldalon, félbehagyott kitöltések mentésével

## Mit csinál a bluemarketing.hu
- Többlépéses űrlapot használnak („Lépés 1 / 4”) egy népszerű WordPress-űrlapkezelővel. Először kérdéseket tesznek fel, az elérhetőséget csak a végén kérik.
- A mezők nincsenek zárolva, és külön hozzájárulási pipát sem láttam. Csak egy általános süti-ablakuk van.
- A nyilvános oldalukból nem derül ki, hogy mentik-e a félbehagyott kitöltéseket. Ehhez létezik bővítmény, de az oldalukon nem láttam nyomát.
- A süti-ablak a sütikre vonatkozik, a beírt névre és telefonszámra nem. Ha a félbehagyott adatot mentenéd, ahhoz önmagában nem elég.

## A javasolt megoldás (nincs zárolt mező, mégis jogilag tisztább)
Ugyanazt a többlépéses mintát követjük, és a félbehagyott adatot csak egy tudatos kattintás után mentjük:

1. **1. lépés – Miben segíthetünk?** Vásárlás, eladás, bérlés, bérbeadás, felújítás vagy egyéb. Kattintható választás, személyes adat nélkül.
2. **2. lépés – Célzott kérdések a téma szerint.** Kattintható válaszok, mindegyik mellett egy „Egyéb” lehetőség:
   - Vásárlás: hol tartasz (még keresek / kinéztem egyet / ajánlatot tettem / szerződés előtt), mi a célod (saját otthon / befektetés / kiadás), mekkora a kereted (sávok), mikorra tervezed.
   - Eladás: hol tartasz, milyen áron hirdetnéd (sávok), mi a célod (gyors eladás / legjobb ár / felkészítés).
   - Bérlés és bérbeadás: hol tartasz, mekkora a havi díj (sávok), mi okoz gondot.
   - Felújítás: milyen fázisban vagy, mekkora a keret, mi a cél.
   - Minden témánál: ingatlan típusa (lakás / ház / egyéb) és helye (Budapest / Pest megye / máshol).
3. **3. lépés – Név és telefon / e-mail.** A „Tovább” gomb fölött egy rövid sor áll: „A Tovább gombbal hozzájárulsz, hogy a megadott elérhetőségeiden felkeressünk, akkor is, ha az űrlapot nem küldöd el. Részletek: Adatkezelés.” **A mentés a „Tovább” megnyomásakor történik**, gépelés közben nem. A mentés az előző két lépés válaszait is tartalmazza.
4. **4. lépés – Szabadszavas rész és küldés.** „Írd le pár mondatban, mi foglalkoztat” mező. Alatta egy külön, nem kötelező pipa kér hozzájárulást a későbbi marketing-megkereséshez. Küldéskor ugyanaz az érdeklődő „elküldött” állapotra vált.
5. Az Adatkezelés oldal kiegészül egy új bekezdéssel erről, magyarul és angolul. Javasolt megőrzési idő: 12 hónap. Az adatok törlése bármikor kérhető.

A keret- és ársávokat én javaslom. A végleges sávokat megadhatod, vagy jóváhagyás után átírom őket.

Ez gyakorlati javaslat, nem jogi tanácsadás. A végleges szöveget érdemes adatvédelmi szakemberrel átnézetni.

## Megjelenés
- Új „Érdeklődöm” szekció a Kapcsolat oldalon, a névjegy-blokk alatt, **számítógépen és telefonon is**, magyarul és angolul, a meglévő sötét, üveges stílusban, lépésjelzővel (1/3, 2/3, 3/3).

## E-mail értesítés az info@ingatlankockazat.hu címre
- **Elkezdett (félbehagyott) űrlap:** egy e-mail megy, amikor az érdeklődő a 2. lépésben megnyomja a „Tovább” gombot. Ebben benne van a neve, az elérhetősége és a választott téma.
- **Elküldött űrlap:** egy második e-mail megy a teljes üzenettel.
- Ehhez egy hitelesített küldő domain kell, ami fizetős csomagot igényel. Az ingatlankockazat.hu-nál egy egyszeri beállítás kell (a domain beállításainál néhány bejegyzés hozzáadása), amihez a beépítés közben megnyitom a beállító ablakot. Amíg a domain nincs hitelesítve, minden érdeklődő ugyanúgy mentődik, csak e-mail még nem megy róla.
- Az érdeklődők teljes listája a Lovable Cloud adatkezelő felületén is látható, legfrissebb elöl.

## Lépések
1. Lovable Cloud bekapcsolása.
2. A háromlépéses űrlap elkészítése a Kapcsolat oldalon (számítógép és telefon, HU/EN).
3. Mentés a 2. lépés után, frissítés küldéskor.
4. Az e-mail domain beállítása, majd a két értesítő e-mail bekötése az info@ingatlankockazat.hu címre.
5. Az Adatkezelés oldal kiegészítése.
6. Próbakitöltés félbehagyva és elküldve is, a mentett sorok és az elküldött e-mailek ellenőrzése, majd a próbasorok törlése.

## Technikai részletek
- Tábla: `contact_leads` (id, topic, name, phone, email, message, status `partial|submitted`, consent_contact, consent_marketing, consent_text_version, consent_at, language, created_at, updated_at). GRANT csak a service_role-nak. RLS bekapcsolva, a böngésző semmit nem olvashat a táblából.
- Edge function `lead-capture`: zod-validálás, upsert a kliens által generált uuid alapján, ütemkorlátozás, rejtett mező a botok ellen. Az értesítő e-mailt a `send-transactional-email` küldi a `lead-started` és a `lead-submitted` sablonnal, fix címzettel. Az idempotencia-kulcs `lead-started-{id}` és `lead-submitted-{id}`.
- A statikus, GitHub Pages-es build is működik, mert a hívás a függvény nyilvános URL-jére megy.
