import { useRef, useState, type FormEvent } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLanguage, LanguageLink as Link } from "@/lib/i18n/Language";

const CONSENT_VERSION = "2026-10-29-v1";
const endpoint = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lead-capture`;

type Question = { key: string; label: string; options: string[] };

const topics = ["Vásárlás", "Eladás", "Bérlés", "Bérbeadás", "Felújítás", "Egyéb"];
const common: Question[] = [
  { key: "Ingatlan típusa", label: "Milyen ingatlanról van szó?", options: ["Lakás", "Ház", "Egyéb"] },
  { key: "Helyszín", label: "Hol található?", options: ["Budapest", "Pest megye", "Máshol"] },
];
const byTopic: Record<string, Question[]> = {
  "Vásárlás": [
    { key: "Hol tart", label: "Hol tartasz most?", options: ["Még keresek", "Kinéztem egyet", "Ajánlatot tettem", "Szerződés előtt"] },
    { key: "Cél", label: "Mi a célod?", options: ["Saját otthon", "Befektetés", "Kiadás"] },
    { key: "Keret", label: "Mekkora a kereted?", options: ["50 M Ft alatt", "50–100 M Ft", "100–200 M Ft", "200 M Ft felett"] },
    { key: "Időzítés", label: "Mikorra tervezed?", options: ["1 hónapon belül", "1–3 hónap", "Később"] },
  ],
  "Eladás": [
    { key: "Hol tart", label: "Hol tartasz most?", options: ["Még gondolkodom", "Felkészítem az eladásra", "Már hirdetem", "Van vevőjelölt"] },
    { key: "Irányár", label: "Milyen áron hirdetnéd?", options: ["50 M Ft alatt", "50–100 M Ft", "100–200 M Ft", "200 M Ft felett"] },
    { key: "Cél", label: "Mi a legfontosabb?", options: ["Gyors eladás", "A legjobb ár", "Felkészítés az eladásra"] },
  ],
  "Bérlés": [
    { key: "Hol tart", label: "Hol tartasz most?", options: ["Még keresek", "Kinéztem egyet", "Szerződés előtt", "Már bérlem"] },
    { key: "Havi díj", label: "Mekkora a havi bérleti díj?", options: ["250 E Ft alatt", "250–400 E Ft", "400–600 E Ft", "600 E Ft felett"] },
    { key: "Gond", label: "Mi okoz gondot?", options: ["Szerződés", "Az ingatlan állapota", "Elszámolások", "Kaució"] },
  ],
  "Bérbeadás": [
    { key: "Hol tart", label: "Hol tartasz most?", options: ["Felkészítem a kiadásra", "Bérlőt keresek", "Már kiadtam"] },
    { key: "Havi díj", label: "Mekkora a havi bérleti díj?", options: ["250 E Ft alatt", "250–400 E Ft", "400–600 E Ft", "600 E Ft felett"] },
    { key: "Gond", label: "Mi okoz gondot?", options: ["Bérlő kiválasztása", "Szerződés", "Átadás-átvétel", "Karbantartás, károk"] },
  ],
  "Felújítás": [
    { key: "Fázis", label: "Milyen fázisban vagy?", options: ["Ötletelés", "Tervezés", "Kivitelezőt keresek", "Folyamatban van"] },
    { key: "Keret", label: "Mekkora a keret?", options: ["5 M Ft alatt", "5–15 M Ft", "15–30 M Ft", "30 M Ft felett"] },
    { key: "Cél", label: "Mi a cél?", options: ["Saját használat", "Eladás előtt", "Kiadás előtt"] },
  ],
  "Egyéb": [],
};

export default function LeadForm() {
  const { tr, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [id] = useState(() => crypto.randomUUID());
  const [topic, setTopic] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [marketing, setMarketing] = useState(false);
  const [website, setWebsite] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [contactPrompt, setContactPrompt] = useState(false);
  const phoneRef = useRef<HTMLInputElement>(null);

  const questions = [...(byTopic[topic] ?? []), ...common];

  async function send(stage: "partial" | "submitted") {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
      body: JSON.stringify({ id, stage, topic, answers, name, phone, email, message, consentMarketing: marketing, consentVersion: CONSENT_VERSION, language, website }),
    });
    if (!res.ok) throw new Error(String(res.status));
  }

  async function submitContact(e: FormEvent) {
    e.preventDefault();
    setError("");
    const emailOk = email === "" || /^\S+@\S+\.\S+$/.test(email);
    if (!phone.trim() && !email.trim()) { setContactPrompt(true); return; }
    if (!name.trim() || (phone.replace(/\D/g, "").length < 6 && !email.trim()) || !emailOk) {
      setError(tr("Add meg a neved, és legalább egy telefonszámot vagy e-mail címet.")); return;
    }
    setBusy(true);
    try { await send("partial"); setStep(4); }
    catch { setError(tr("Valami hiba történt. Próbáld újra, vagy hívj minket.")); }
    finally { setBusy(false); }
  }

  async function submitFinal(e: FormEvent) {
    e.preventDefault();
    setError(""); setBusy(true);
    try { await send("submitted"); setDone(true); }
    catch { setError(tr("Valami hiba történt. Próbáld újra, vagy hívj minket.")); }
    finally { setBusy(false); }
  }

  return (
    <section className="lead-section" id="erdeklodom">
      <div className="site-container lead-wrap">
        <div className="lead-intro">
          <p className="display-kicker">{tr("Érdeklődöm")}</p>
          <h2>{tr("Mondd el, hol tartasz.")}</h2>
          <p>{tr("Válaszolj néhány rövid kérdésre, hogy már az első beszélgetésre felkészülten keressünk.")}</p>
        </div>
        <div className="lead-card">
          {done ? (
            <div className="lead-done" role="status">
              <span className="lead-done-icon"><Check /></span>
              <h3>{tr("Köszönjük, megkaptuk.")}</h3>
              <p>{tr("Hamarosan keresünk a megadott elérhetőségeiden.")}</p>
            </div>
          ) : (
            <>
              <div className="lead-progress" aria-label={`${step} / 4`}>
                <span>{String(step).padStart(2, "0")} / 04</span>
                <div><i style={{ width: `${step * 25}%` }} /></div>
              </div>

              {step === 1 && (
                <div className="lead-step">
                  <h3>{tr("Miben segíthetünk?")}</h3>
                  <div className="lead-options lead-options-lg">
                    {topics.map(t => (
                      <button type="button" key={t} aria-pressed={topic === t} onClick={() => { setTopic(t); setAnswers({}); setStep(2); }}>{tr(t)}</button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="lead-step">
                  <h3>{tr("Néhány gyors kérdés")}</h3>
                  {questions.map(q => (
                    <fieldset key={q.key} className="lead-q">
                      <legend>{tr(q.label)}</legend>
                      <div className="lead-options">
                        {q.options.map(o => (
                          <button type="button" key={o} aria-pressed={answers[q.key] === o} onClick={() => setAnswers(a => ({ ...a, [q.key]: o }))}>{tr(o)}</button>
                        ))}
                      </div>
                    </fieldset>
                  ))}
                  <div className="lead-nav">
                    <button type="button" className="lead-back" onClick={() => setStep(1)}><ArrowLeft />{tr("Vissza")}</button>
                    <button type="button" className="button-primary" onClick={() => setStep(3)}>{tr("Tovább")}<ArrowRight /></button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form className="lead-step" onSubmit={submitContact} noValidate>
                  <h3>{tr("Hol érünk el?")}</h3>
                  <label className="lead-field"><span>{tr("Név")}</span><input value={name} onChange={e => setName(e.target.value)} maxLength={100} autoComplete="name" required /></label>
                  <div className="lead-two">
                    <label className="lead-field"><span>{tr("Telefon")}</span><input ref={phoneRef} value={phone} onChange={e => setPhone(e.target.value)} maxLength={40} type="tel" autoComplete="tel" inputMode="tel" /></label>
                    <label className="lead-field"><span>Email</span><input value={email} onChange={e => setEmail(e.target.value)} maxLength={255} type="email" autoComplete="email" /></label>
                  </div>
                  <input className="lead-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={e => setWebsite(e.target.value)} />
                  {error && <p className="lead-error" role="alert">{error}</p>}
                  <div className="lead-nav">
                    <button type="button" className="lead-back" onClick={() => setStep(2)}><ArrowLeft />{tr("Vissza")}</button>
                    <button type="submit" className="button-primary" disabled={busy}>{tr("Kérem, hogy keressenek")}<ArrowRight /></button>
                  </div>
                  <p className="lead-fine">{tr("Elérhetőségeidet kizárólag az ingatlanoddal kapcsolatos megkereséshez használjuk.")} <Link to="/adatkezeles">{tr("Adatkezelési tájékoztató")}</Link></p>
                  <AlertDialog open={contactPrompt} onOpenChange={setContactPrompt}>
                    <AlertDialogContent className="lead-prompt" onCloseAutoFocus={e => { e.preventDefault(); phoneRef.current?.focus(); }}>
                      <AlertDialogHeader>
                        <AlertDialogTitle>{tr("Hogyan érhetünk el?")}</AlertDialogTitle>
                        <AlertDialogDescription>{tr("Add meg a telefonszámod vagy az e-mail-címed.")}</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction className="button-primary">{tr("Rendben")}</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </form>
              )}

              {step === 4 && (
                <form className="lead-step" onSubmit={submitFinal}>
                  <h3>{tr("Mesélj röviden.")}</h3>
                  <label className="lead-field"><span>{tr("Mi foglalkoztat leginkább az ingatlannal kapcsolatban?")}</span><textarea value={message} onChange={e => setMessage(e.target.value)} maxLength={3000} rows={5} /></label>
                  <label className="lead-check"><input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} /><span>{tr("Kérek hasznos tippeket és ajánlatokat e-mailben. Bármikor leiratkozhatok.")}</span></label>
                  {error && <p className="lead-error" role="alert">{error}</p>}
                  <div className="lead-nav">
                    <span />
                    <button type="submit" className="button-primary" disabled={busy}>{tr("Elküldöm")}<ArrowRight /></button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
