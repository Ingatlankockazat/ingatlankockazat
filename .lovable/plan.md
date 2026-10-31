# Google Tag Manager (GTM-KS64N2JL) bekötése

## Mit csinálok
- A Tag Manager tárolót minden oldalra beteszem (főoldal, szolgáltatások, rólunk, kapcsolat, jogi oldalak, útmutató, mindkét rejtett kampányoldal, HU és EN), egyszer, a `<head>` elejére.
- A sütisáv továbbra is érvényes: a Tag Manager is csak akkor mér, ha a látogató az „Elfogadom” gombra kattint (a hozzájárulás alapból tiltva van, ezt még a Tag Manager előtt beállítjuk).
- Az oldalváltásokat, az űrlapküldést, a telefon- és WhatsApp-kattintásokat a Tag Manager is megkapja, így ott is használhatod őket triggerként.

## Mindkét kód működik
- A Google Analytics (G-01M3MMHG3F) már be van építve és mér, ez változatlanul marad.
- Mellé kerül a Tag Manager (GTM-KS64N2JL), egy közös adatsorral, hogy ne akadjanak össze.
- Fontos: a Tag Managerben ne hozz létre GA4 címkét ugyanezzel az azonosítóval, mert akkor minden látogatás kétszer számolódna. A Tag Managert más címkékre használd (pl. Google Ads konverzió, Meta pixel).

## Technikai részletek
- `index.html`: a megadott kódrészlet helyett a hivatalos GTM betöltőt használom (`gtm.start` esemény + `gtm.js?id=GTM-KS64N2JL`), mert a beküldött változat (gtm.js + gtag('js')) nem indítja el megbízhatóan a tárolót. A meglévő `gtag('consent','default',…)` hívás elé kerül, így a GTM is az alapból tiltott hozzájárulást látja.
- `<noscript>` iframe a `<body>` elejére (nem a head-be).
- Ugyanaz a `dataLayer`, így a meglévő `page_view`, `generate_lead`, `phone_click`, `whatsapp_click` események GTM-ben is látszanak.
- Ellenőrzés böngészőben: a gtm.js betöltődik, oldalanként egyszer.
- AGENTS.md szabály frissítése.
