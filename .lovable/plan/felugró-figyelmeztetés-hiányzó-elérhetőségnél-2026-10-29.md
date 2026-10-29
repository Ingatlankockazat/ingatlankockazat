# Felugró figyelmeztetés hiányzó elérhetőségnél

Ma a "Kérem, hogy keressenek" gomb csak egy kis piros sort mutat, ha nincs telefonszám vagy e-mail-cím. Ehelyett egy felugró ablak jelenik meg.

## Mit lát a látogató
- Ha sem telefonszámot, sem e-mail-címet nem adott meg, és a "Kérem, hogy keressenek" gombra kattint, felugrik egy kis ablak:
  - Cím: "Hogyan érhetünk el?"
  - Szöveg: "Add meg a telefonszámod vagy az e-mail-címed."
  - Gomb: "Rendben" – bezárja az ablakot, és a telefon mezőbe ugrik a kurzor.
- Angolul: "How can we reach you?" / "Please add your phone number or email address." / "OK".
- Az ablak az oldal sötét, üveges stílusát követi, számítógépen és telefonon is.
- Hiányzó név vagy hibás e-mail-cím esetén továbbra is a mostani kis hibaüzenet marad.

## Technikai rész
- `LeadForm.tsx`: a 3. lépés ellenőrzését szétválasztom: ha nincs elérhetőség, a meglévő shadcn `AlertDialog` nyílik meg, mentés nem történik; bezáráskor a telefon mezőre fókuszál.
- Új szövegek az `en.ts`-be.
- Ellenőrzés Playwright-tal mindkét nyelven, desktop és mobil méretben.
