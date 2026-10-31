# Google Analytics 4 bekötése a teljes weboldalra

## Mit kapsz
- Minden oldal mérve lesz, magyarul és angolul is: Kezdőlap, Szolgáltatások, Rólunk, Kapcsolat, Adatkezelés, Impresszum, a rejtett kampány landing (`/ingatlan-atvilagitas`) és a műszaki útmutató.
- Oldalváltáskor is külön oldalmegtekintés megy a Google-nek. (A weboldal kattintáskor nem tölt be újra, ezért ezt külön kell küldeni.)
- A kampányok forrásadatai (UTM, gclid) is megérkeznek a GA4-be.
- Plusz események: elküldött űrlap („generate_lead”), telefon- és WhatsApp-kattintás, hogy lásd, honnan jönnek az érdeklődők.
- Az űrlap és a Telegram-értesítések nem változnak.

## Amire szükségem van tőled
A mérési azonosítót (`G-XXXXXXXXXX`) titkos kulcsként mentetted el. Ezt a látogató böngészője viszont nem tudja kiolvasni, mert ez az oldal kiszolgáló nélküli. Az azonosító nyilvános adat, minden oldal forráskódjában látható, ezért nyugodtan beírhatod ide a chatbe. Az elmentett titkos kulcs nem kell ehhez, később törölhető.

## Technikai részletek
- A gtag.js kód egyszer kerül be az `index.html` `<head>` elejére, a megadott azonosítóval. Minden útvonal ugyanazt a HTML-t használja, így a rejtett oldalakra is rákerül.
- A beépített automatikus oldalmegtekintést kikapcsolom (`send_page_view: false`). Helyette a router figyeli az útvonalváltást, és egyszer küld `page_view` eseményt, benne `page_path` + `lang` adattal.
- `src/lib/analytics.ts` segédfüggvények: `trackEvent`. A LeadForm-ban csak a sikeres elküldés után hívódik meg egy esemény, a beküldési folyamat nem változik.
- Opcionális (külön kérésre): GDPR-süti hozzájárulási sáv Consent Mode v2-vel. EU-s látogatóknál ez jogilag javasolt.
