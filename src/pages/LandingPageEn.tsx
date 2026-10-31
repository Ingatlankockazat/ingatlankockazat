import { Check, Phone, ShieldCheck, MessageCircle, MapPin, Search, Video, Handshake } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";
import { images } from "@/assets/redesign";
import portrait from "@/assets/redesign/about-portrait.jpg";

const PHONE = "+36309039630";
const PHONE_LABEL = "+36 30 903 9630";
const WHATSAPP = "https://wa.me/36309039630";

export default function LandingPageEn() {
  const toForm = () => document.getElementById("erdeklodom")?.scrollIntoView({ behavior: "smooth" });

  const onCall = [
    "Your goals, budget and the areas of Budapest worth considering",
    "How buying property in Hungary works, and the requirements for foreign buyers",
    "A first reality check on any listing you're already looking at",
    "How we can represent you on the ground if you can't be here in person",
  ];
  const pillars = [
    [MapPin, "Your expert on the ground", "When you can't be in Budapest, we attend viewings for you and report back honestly, with photos and video."],
    [Search, "Shortlisting that saves flights", "We filter out problem properties early, so you only travel for the ones genuinely worth seeing."],
    [Handshake, "Only on your side", "We don't work for sellers or agents and take no commission from them. Our only interest is yours."],
  ] as const;
  const fears = [
    ["Agents work for the seller", "In Hungary the agent's fee usually depends on the sale going through, not on you getting a good deal."],
    ["Photos hide the building", "Damp, outdated wiring, roof problems and building-wide repair costs rarely appear in a listing."],
    ["Paperwork you can't read", "Floor plans, condominium rules and permits are in Hungarian, and mismatches can cost you later."],
    ["Deciding from abroad", "Committing to a property you've only seen on a screen is the biggest risk of all."],
  ];
  const steps = [
    ["Leave your details", "Fill in the short form below or message us on WhatsApp. It takes under a minute."],
    ["Have a 15-minute call", "We listen to your plans, answer your questions and give you an honest first view."],
    ["Decide your next step", "If you'd like our help on the ground, we'll explain how. If not, you leave with clear advice."],
  ];
  const faq = [
    ["Is the call really free?", "Yes. The 15-minute call is free and comes with no obligation to book anything afterwards."],
    ["Do I need to have chosen a property already?", "No. Many clients start before they have a shortlist. We can talk about areas, budget and how the process works."],
    ["I live abroad. Can you still help?", "Yes, that's exactly what we do. We represent your interests in Budapest and keep you informed at every step."],
    ["Is everything in English?", "Yes. The call and all our communication are in English, and we explain any Hungarian documents in plain terms."],
    ["Phone or WhatsApp?", "Whichever suits you. Leave your number in the form or message us directly on WhatsApp."],
    ["Where do you work?", "In Budapest and Pest County."],
  ];

  return (
    <div className="landing-page lp-en">
      <section className="lp-hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="site-container lp-hero-inner">
          <p className="kicker">Independent buyer advisory · Budapest</p>
          <h1>Buying property in Budapest? Don't do it blindfolded.</h1>
          <p className="lead">We guide you through the property-buying process in Hungary, explain the requirements, and help you identify and shortlist properties that fit your goals.</p>
          <p className="lead lp-en-lead2">We represent your interests when you can't be here in person and guide you through every step, from the first questions to the final details, when you are.</p>
          <div className="lp-cta-row">
            <button className="button-primary" onClick={toForm}>Book a free 15-minute call <span>→</span></button>
            <a className="lp-phone" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp</a>
            <a className="lp-phone" href={`tel:${PHONE}`}><Phone size={18} /> {PHONE_LABEL}</a>
          </div>
          <ul className="lp-trust">
            {["100% buyer-side", "30 years in property", "English-speaking", "Free, no obligation"].map(x => <li key={x}><ShieldCheck size={16} />{x}</li>)}
          </ul>
        </div>
      </section>

      <section className="lp-section">
        <div className="site-container">
          <p className="kicker">How we help</p>
          <h2>A trusted person in Budapest, working only for you.</h2>
          <div className="lp-steps">{pillars.map(([Icon, h, p]) => <article className="lp-step" key={h}><Icon className="lp-icon" /><h3>{h}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="lp-section lp-surface">
        <div className="site-container">
          <p className="kicker">Why foreign buyers get caught out</p>
          <h2>The market wasn't built with you in mind.</h2>
          <div className="lp-risks">{fears.map(([h, p]) => <article key={h}><h3>{h}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="lp-section">
        <div className="site-container lp-about">
          <img src={portrait} alt="Attila Pádár" loading="lazy" />
          <div>
            <p className="kicker">Who you'll speak to</p>
            <h2>Attila Pádár</h2>
            <p className="lp-role">Owner</p>
            <p className="lead">Over the past 30 years I've been a seller, a buyer, an investor and a builder. I've faced problems that challenged even me as a professional, and solving them taught me how property deals really work here.</p>
            <p>I'd like to put that experience to work for you, whether you lack the time, the local knowledge or someone you can trust. From your first questions to the final details, I look after your interests only.</p>
          </div>
        </div>
      </section>

      <section className="lp-section lp-surface">
        <div className="site-container lp-split">
          <div>
            <p className="kicker">Your free 15-minute call</p>
            <h2>Fifteen minutes. Clear answers.</h2>
            <ul className="lp-checks">{onCall.map(g => <li key={g}><Check size={18} />{g}</li>)}</ul>
          </div>
          <div className="lp-prices">
            <div><span>Length</span><strong>15 minutes</strong></div>
            <div><span>By</span><strong>Phone or WhatsApp</strong></div>
            <div><span>Cost</span><strong>Free</strong></div>
            <p>No sales pitch and no obligation – just honest, independent advice before you commit to anything.</p>
            <button className="button-primary" onClick={toForm}>Book my call <span>→</span></button>
          </div>
        </div>
      </section>

      <section className="lp-section">
        <div className="site-container">
          <p className="kicker">How it works</p>
          <h2>Three simple steps.</h2>
          <div className="lp-steps">{steps.map(([h, p], i) => <article className="lp-step" key={h}><span className="lp-num">0{i + 1}</span><Video className="lp-icon" style={{ display: "none" }} /><h3>{h}</h3><p>{p}</p></article>)}</div>
        </div>
      </section>

      <section className="lp-section lp-surface">
        <div className="site-container narrow">
          <p className="kicker">Questions</p>
          <h2>Before you get in touch</h2>
          <div className="lp-faq">{faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <LeadForm />

      <section className="lp-final">
        <div className="site-container">
          <h2>Before you commit, let's talk for 15 minutes.</h2>
          <button className="button-primary" onClick={toForm}>Book a free 15-minute call <span>→</span></button>
        </div>
      </section>

      <div className="lp-sticky"><button className="button-primary" onClick={toForm}>Book free call →</button><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a><a href={`tel:${PHONE}`} aria-label="Call"><Phone size={20} /></a></div>
    </div>
  );
}
