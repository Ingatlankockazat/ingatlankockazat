# Telegram-értesítés minden érdeklődőről

## Mit kapsz
Minden alkalommal Telegram-üzenet érkezik, amikor valaki kitölti az „Érdeklődöm” űrlapot:
- a magyar és az angol Kapcsolat oldalon,
- a rejtett kampányoldalon magyarul és angolul.

Kétféle üzenet jön:
- **Félbehagyott:** „Új érdeklődő (még nem küldte el)”: név, telefon, e-mail, téma, oldal, nyelv.
- **Elküldött:** „Elküldött érdeklődés”: ugyanezek, plusz a válaszok, az üzenet és a kampányforrás.

Egy érdeklődőről a félbehagyott és az elküldött üzenet is csak egyszer jön.

## Hol tartunk
1. A bot elkészült, a kulcsa el van mentve.
2. **Még hiányzik:** a másik telefonon keresd meg a botot a nevéről, és küldj neki egy „Szia” üzenetet. Utána szólj nekem, és összekötöm a két telefont. Ha ez megvan, egy próbaüzenetet is küldök.
- Addig minden lead ugyanúgy mentődik, csak üzenet nem megy ki.
- Ha később több telefonra is kéred az üzeneteket, hozz létre egy Telegram-csoportot, és tedd bele a botot.

## Technical details
- Use the saved `TELEGRAM_BOT_TOKEN` secret and call the Bot API directly (`https://api.telegram.org/bot<token>/sendMessage`) from the `lead-capture` function. No connector is needed.
- Store the recipient chat id as the `TELEGRAM_CHAT_ID` secret. Read it with `getUpdates` after the "Szia" message, using a one-off call from the sandbox.
- After a successful upsert, send the message (HTML, escaped values) when the status first becomes partial, or when it changes to submitted (based on the existing status read). If `TELEGRAM_CHAT_ID` is missing or the send fails, log it and still save the lead.
- Add an optional `source` field (contact / campaign), and UTM data where available, from both forms.
- Deploy, then test one partial lead and one submitted lead.
