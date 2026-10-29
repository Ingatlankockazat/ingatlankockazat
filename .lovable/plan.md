# Telegram-értesítés minden érdeklődőről

## Mit kapsz
Minden alkalommal Telegram-üzenet érkezik a telefonodra, amikor valaki kitölti az „Érdeklődöm” űrlapot:
- a magyar és az angol Kapcsolat oldalon,
- a rejtett kampányoldalon magyarul és angolul.

Kétféle üzenet jön:
- **Félbehagyott:** „Új érdeklődő (még nem küldte el)”: név, telefon, e-mail, téma, oldal, nyelv.
- **Elküldött:** „Elküldött érdeklődés”: ugyanezek, plusz a válaszok, az üzenet és a kampányforrás.

Egy érdeklődőről a félbehagyott üzenet csak egyszer jön. Az elküldöttről is csak egy üzenet jön, így nem kapsz ismétlődő értesítéseket.

## Amit neked kell megtenned (kb. 3 perc)
1. **Most, a saját telefonodon:** a Telegramban írj a **@BotFather**-nek, küldd el a `/newbot` parancsot, és adj nevet a botnak. Ezt bárki megcsinálhatja, nem kell hozzá a másik telefon.
2. Amikor a beállító ablak megjelenik, kösd be a botot a Telegram-csatlakozóval (a kapott tokent kéri).
3. **Később, a másik telefonon:** keresd meg a botot a nevéről, és küldj neki egy „Szia” üzenetet. Ebből tudja a rendszer, hova küldje az értesítéseket. Ha szólsz, hogy megvan, bekötöm. Amíg ez nem történik meg, a leadek ugyanúgy mentődnek.
- Ha később több telefonra is kéred az üzeneteket: hozz létre egy Telegram-csoportot, tedd bele a botot, és a csoport minden tagja megkapja az értesítést.

## Technical details
- Connect the Telegram connector (gateway) to the project.
- After step 3, read the chat id with `getUpdates` and store it as the `TELEGRAM_CHAT_ID` secret.
- In `lead-capture`, after a successful upsert, call the gateway `sendMessage` (HTML, escaped values). Send when the status first becomes partial, or when it changes to submitted (based on the existing status read). Notification failures are logged and do not block saving the lead.
- Include the page source (contact vs campaign) and UTM data if the payload already carries them; otherwise add an optional `source` field from the two forms.
- Deploy and test with one real partial and one submitted lead.
