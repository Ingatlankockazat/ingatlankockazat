<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

- Keep the public site as a React Router SPA with shared layout and route-level pages because GitHub Pages must serve every public route from one static Vite build.
- Keep user-supplied website imagery bundled under `src/assets/redesign` because the same build must render without Lovable-only asset infrastructure on GitHub Pages.

- Scope homepage proportion rules under `.home-page` and service proportion rules under `.services-page` so other route layouts remain independent.
- Keep localisation in a shared language context and bundled dictionaries, selected by the `lang` query parameter and preserved in internal links; this keeps every language compatible with the same static SPA routes without duplicating page layouts.
- Convert service prices centrally during localisation using the public ECB-based Frankfurter rate and retaining a dated verified fallback; this keeps all public prices consistent without a server or changing their HUF source amounts.
- Store contact-form enquiries only through the lead-capture backend function (service role, no browser table access) because the static build must stay keyless and visitors must never read enquiries.
- Keep campaign landing pages as unlinked SPA routes that set their own head tags and use the minimal header, so ads and Google can reach them without them appearing in site navigation.
- Scope Hungarian campaign presentation under `.lp-hu` and keep the English branch independent; reuse the unchanged LeadForm so campaign copy changes cannot alter lead capture or Telegram delivery.
- Keep inspection guides as public bilingual editorial routes with scoped styles, self-referencing head tags, a services-page link and a sitemap entry so search visitors can reach the relevant enquiry flow without changing campaign navigation.
- Load Google Analytics with Consent Mode defaulting to denied and grant analytics only from the shared cookie banner, because the privacy notice promises analytics cookies only after consent.
