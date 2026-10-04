# Ingatlankockazat.hu teljes redesign

## Cél
A jelenlegi egyoldalas webhely teljes átalakítása a feltöltött brief alapján egy modern, meleg tónusú, sötét editorial weboldallá. A megadott magyar szövegek változtatás nélkül kerülnek be, a feltöltött képek pedig a briefben kijelölt helyeken jelennek meg.

## Oldalak és navigáció
- Hat külön útvonal készül: Kezdőlap, Szolgáltatások, Rólunk, Kapcsolat, Adatkezelés és Impresszum.
- Közös, görgetésre hátteret kapó fejléc készül aktív menüponttal, mobil hamburger menüvel és „Beszéljünk” gombbal.
- Minden oldalváltáskor a nézet az oldal tetejére ugrik.
- Közös lábléc készül jogi hivatkozásokkal és a négy főoldal oldalszámozásával.
- A meglévő React Router és GitHub Pages kompatibilis felépítés megmarad.

## Kezdőlap
- Teljes képernyős, filmes nyitókép a `hero.jpg` fotóval, olvasható sötét maszkkal, lassú képmozgással és olvasási folyamatjelzővel.
- „Mielőtt döntesz” bemutatkozó blokk és négy témacímke.
- „A probléma” rész kilenc elemes, egyenként nyitható listával.
- Nagyméretű idézetblokk a `quote.jpg` képpel.
- Animált „Mit csinálunk?” igesor és magyarázó szöveg.
- Hatlépéses, 6,4 másodpercenként automatikusan váltó folyamatblokk a most már teljes `step-01`–`step-06` képsorozattal; kézi választás után az automatikus váltás leáll.
- Vevői, eladói és bérlői szolgáltatások váltható nézetben.
- Automatikus és kézzel is lapozható előtte–utána galéria a négy `ba-*` képpel.
- Függetlenségi blokk statisztikákkal és záró felhívás a `cta.jpg` háttérrel.

## Szolgáltatások oldal
- Lakás / családi ház árkapcsolóval működő, hat kártyás csomaglista.
- A brief szerinti árak, egységek, leírások, tartalmi listák és kapcsolatfelvételi gombok.
- Kiegészítő szolgáltatások külön, áttekinthető blokkban.

## Rólunk, Kapcsolat és jogi oldalak
- A Rólunk oldal a megadott bemutatkozással, címkékkel és függetlenségi állásfoglalással készül.
- A Kapcsolat oldal osztott elrendezést kap a `contact.jpg` képpel, email/telefon/WhatsApp lehetőségekkel és lenyitható űrlappal.
- Az űrlap ellenőrzi a kötelező nevet és telefonszámot. Mivel jelenleg nincs üzenetküldő háttér bekötve, a briefben megadott előre kitöltött emailes megoldás lesz az üzembiztos küldési mód.
- Az Adatkezelés és Impresszum oldal a megadott teljes jogi szöveget, tagolt címsorokat, adatpárokat és olvasható, sorkizárt törzsszöveget kapja.

## Megjelenés és mozgás
- A brief pontos színvilága: meleg fekete és barna felületek, krémszínű szöveg, terrakotta kiemelések.
- Josefin Sans címbetűk és Schibsted Grotesk törzsszöveg.
- Nagy, levegős tipográfia, finom hajszálvonalak, kapszula alakú gombok és visszafogott képmaszkok.
- Görgetésre megjelenő elemek, finom lebegések és áttűnések; a csökkentett mozgást kérő eszközökön az animációk kikapcsolnak.

## Képek
- A 14 feltöltött képet CDN-es projektassetként használjuk, így Lovable-ben, GitHub Pages-en és a saját domainen is stabilan betöltődnek.
- Minden kép magyar, tartalmilag pontos alternatív leírást kap.
- A képek mobilon és asztali nézetben is megfelelő kivágással, fix arányokkal jelennek meg.

## Technikai részletek
- Újrafelhasználható közös keret, fejléc, lábléc, gombok, szekciócímek és animációs segédelemek készülnek.
- Az összetettebb kezdőlapi részek külön komponensekbe kerülnek a könnyebb karbantarthatóságért.
- A meta title, description, Open Graph és Twitter adatok a brief SEO-szövegére frissülnek.
- A végén ellenőrzöm az összes útvonalat, menüt, kapcsolót, harmonikát, galériát és kapcsolatfelvételi lehetőséget 1440 px-es asztali és 375 px-es mobil nézetben, valamint a build állapotát.
