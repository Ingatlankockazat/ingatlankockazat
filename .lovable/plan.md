# Redesign of the hidden English landing page

## Scope
- Rebuild the English version of `/ingatlan-atvilagitas?lang=en` following the uploaded brief, section by section, with its exact English copy.
- The Hungarian version of the landing keeps its current content and layout.
- Remove the HU/EN language switch from the landing page header in both languages. The rest of the site keeps its switch.
- The enquiry form, its saved partial leads and the Telegram notifications stay exactly as they are; only its surrounding presentation is restyled.

## English page structure (from the brief)
1. Hero: "Buying property in Budapest? Make the decision with confidence.", supporting text, trust line, "Get in touch" + "Explore our services" buttons.
2. Problem and approach: "Property decisions deserve more than a first impression." with image and highlighted statements.
3. Independence: "An independent expert on your side." with the four principles.
4. Services: six individual cards (Initial Consultation free, First Viewing & Buyer Support, On-site Assessment, Expert Review and Planning, Project Management, Conflict Resolution), each with headline, description, what's included, apartment/house starting price, scope notes and its own button to the form. Followed by the smaller "Additional support" block.
5. Why clients choose us: four value statements, no invented awards or numbers.
6. Meet your expert: large portrait of Attila Pádár with the brief's text. Placeholders for qualifications and projects are left out until you provide real ones.
7. How we work: five numbered steps plus the "no obligation" note.
8. End-to-end support: visual timeline of the property journey.
9. Remaining brief sections, including the FAQ (11 questions).
10. Final call to action, then the existing enquiry form.

## Navigation
- Sticky landing header with logo and anchor links: Home, About Us, Services, How We Work, Contact (scroll within the page; the burger menu on phones shows the same links).
- The phone sticky "Enquire / Call" bar stays.

## Prices on the English landing
The brief gives fixed euro prices, used as written: First Viewing €150 / €200, On-site Assessment €450 / €550, Expert Review €1,000 / €1,550, Project Management €3,300 / custom quote for houses, Conflict Resolution €150/hour. These differ slightly from the live-rate conversion used elsewhere (e.g. house assessment currently shows €600). The rest of the English site keeps the live conversion.

## Look
Existing dark charcoal, copper accents, off-white type, current fonts and logo, existing site photos (no new stock images unless a section has none). Restrained motion, fewer rounded cards, editorial headings.

## SEO
English title "Independent Property Support in Budapest | Ingatlankockázat" and the brief's meta description; Hungarian head tags unchanged.

## Technical details
- `SiteLayout.tsx`: hide `.language-switch` when `minimal` (landing route); add landing anchor nav for English.
- `LandingPage.tsx`: branch to a new `LandingPageEn` component when `language === "en"`; HU render untouched. Reuse `LeadForm` with `id="contact"`.
- New scoped stylesheet (`lp-en-*` classes) so other pages are unaffected.
- Verify with Playwright at desktop and mobile: anchors, all CTAs scroll to the form, form steps still save a partial lead.
