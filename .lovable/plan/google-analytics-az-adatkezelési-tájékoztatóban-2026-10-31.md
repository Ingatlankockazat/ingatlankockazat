# Google Analytics az Adatkezelési tájékoztatóban

## Fontos észrevétel
A beidézett mondat („Kijelentem, hogy rendelkezem a végfelhasználóktól származó... engedélyekkel") a Google felé tett nyilatkozatod, nem a látogatóknak szóló szöveg. Ezt csak akkor teheted meg jogszerűen, ha a látogatók valóban hozzájárulnak. Jelenleg az oldal Google Analyticset **hozzájárulás nélkül** tölt be, a tájékoztató 5. pontja pedig azt állítja, hogy csak szükséges sütiket használunk. Ez ellentmondás, EU-ban a GA-hoz előzetes hozzájárulás kell.

## Mit változtatok (magyarul és angolul is)
1. **Új alpont a 3. pontban: „Látogatottsági statisztika (Google Analytics 4)"**
   - Kezelt adatok: meglátogatott oldalak, időpont, eszköz és böngésző típusa, hozzávetőleges hely, hivatkozó oldal és kampányadatok (UTM), anonimizált azonosítók, kattintások (űrlap elküldése, telefon, WhatsApp).
   - Cél: a weboldal és a hirdetések hatékonyságának mérése.
   - Jogalap: hozzájárulás (GDPR 6. cikk (1) a), Ektv. 13/A. §), bármikor visszavonható.
   - Adatfeldolgozó: Google Ireland Ltd.; USA-ba továbbítás az EU–USA adatvédelmi keretrendszer alapján.
   - Időtartam: 14 hónap (GA4 beállítás szerint).
2. **4. pont (Adatfeldolgozók):** Google Ireland Ltd. hozzáadása; a „marketing célra nem adjuk át" mondat pontosítása.
3. **5. pont (Sütik) átírása:** felsorolja a GA sütiket (_ga, _ga_*, élettartam max. 2 év), és leírja, hogy csak elfogadás után kerülnek el, a döntés módosítható.
4. **9. pont:** hatály dátuma 2026. október 31.

## Sütisáv (hogy a szöveg igaz legyen)
- Alul egy kis, sötét, az oldal stílusához illő sáv: „Elfogadom" / „Csak a szükségesek", link a tájékoztatóra. HU/EN.
- A Google Analytics csak „Elfogadom" után indul el (Google Consent Mode: alapból tiltva). A választást megjegyzi a böngésző.
- A láblécben „Süti beállítások" link a döntés módosításához.
- Mindkét rejtett kampányoldalon is működik. Az űrlap és a Telegram-értesítés változatlan.

Következmény: aki nem fogad el, azt a GA nem méri, így a statisztika kisebb számokat mutat majd.

## Technikai részletek
- `LegalPages.tsx` PrivacyPage szövegbővítés, új kulcsok `en.ts`-ben.
- `index.html`: `gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',...})` a config előtt; új `CookieConsent` komponens a `SiteLayout`-ban (és campaign layoutban), localStorage-ban tárolt döntés, elfogadáskor `gtag('consent','update',{analytics_storage:'granted'})`.
- Teszt a hozzájárulási logikára (alapból tiltott, elfogadás után engedélyezett).
