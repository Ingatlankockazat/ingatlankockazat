# Érdeklődő űrlap a Kapcsolat oldalon, félbehagyott kitöltések mentésével

## Jogi keret (GDPR) – röviden
Ez a módszer létezik: „félbehagyott űrlapok visszanyerése”. Az EU-ban viszont csak **előzetes, kifejezett hozzájárulással** szabad használni. Enélkül a beírt, de el nem küldött adat mentése jogsértő lenne: nincs jogalap, és a látogató nem számít rá.

Ezért így építjük fel:
1. **Az űrlap mezői zárolva vannak**, amíg a látogató nem pipálja be ezt: „Hozzájárulok, hogy a megadott elérhetőségeimet az űrlap elküldése nélkül is tárolják, és ezzel kapcsolatban felkeressenek.” A pipa nem lehet előre bejelölve.
2. **Külön, nem kötelező pipa** a marketing-hírlevélhez vagy későbbi megkereséshez. A GDPR tiltja a hozzájárulások összevonását.
3. Mellette egy rövid tájékoztató és link az Adatkezelés oldalra: mit tárolunk, miért, meddig (javaslat: 12 hónap), és hogy bármikor kérhető a törlés.
4. Az Adatkezelés oldal kiegészül egy új bekezdéssel erről az adatkezelésről, magyarul és angolul.
5. Minden rekordnál mentjük a hozzájárulás idejét és a hozzájárulás szövegének változatát. Ha vita lenne, ez igazolja a hozzájárulást.

Megjegyzés: ez gyakorlati javaslat, nem jogi tanácsadás. A végleges szöveget érdemes adatvédelmi szakemberrel átnézetni.

## Marketing szempont
- Az űrlap rövid: név, telefon, e-mail, téma (vásárlás / eladás / bérlés / bérbeadás / egyéb), üzenet.
- A félbehagyott kitöltéseket „meleg lead” címkével látod, így tudod, hogy őket is érdemes visszahívni.
- Ha valaki később elküldi az űrlapot, a már mentett sor „elküldött” állapotra vált, nem jön létre két külön sor.

## Mit látsz majd
- Minden érdeklődő egy listában jelenik meg, legfrissebb elöl: név, elérhetőség, téma, üzenet, állapot (félbehagyott / elküldött), hozzájárulások, időpont.
- Elsőre a Lovable Cloud adatkezelő felületén nézheted meg a listát. Később kérésre kaphatsz egy saját, jelszóval védett belső oldalt is.
- E-mail értesítés új érdeklődőről csak akkor lehetséges, ha lesz hitelesített e-mail domain. Addig a lista a megbízható forrás.

## Lépések
1. Lovable Cloud bekapcsolása (adattárolás).
2. Új „Érdeklődöm” szekció a Kapcsolat oldalon, a névjegy-blokk alatt, a jelenlegi sötét, üveges stílusban, magyarul és angolul, mobilra igazítva.
3. Hozzájárulási pipák, zárolt mezők, tájékoztató szöveg.
4. Automatikus mentés gépelés közben: egy mező elhagyásakor, vagy pár másodperc gépelési szünet után. Csak akkor, ha van hozzájárulás és legalább egy telefonszám vagy egy e-mail cím.
5. Elküldéskor ugyanaz a sor „elküldött” állapotra vált, és megjelenik egy köszönő üzenet.
6. Az Adatkezelés oldal kiegészítése.
7. Próbakitöltés félbehagyva és elküldve is, majd a próbasorok törlése.

## Technikai részletek
- Tábla: `contact_leads` (id, name, phone, email, topic, message, status `partial|submitted`, consent_partial bool, consent_marketing bool, consent_text_version, consent_at, language, created_at, updated_at).
- A böngésző egy `lead_id`-t (uuid) tárol a sessionStorage-ban. A mentést egy edge function végzi zod-validálással, upsert-tel `lead_id` alapján, és csak `consent_partial=true` mellett ment. RLS bekapcsolva, a böngésző semmit nem olvashat a táblából.
- A GitHub Pages-es statikus build is működik, mert a hívás a Cloud függvény nyilvános URL-jére megy.
- Visszaélés ellen: mezőnkénti hosszkorlát és egyszerű ütemkorlátozás.
