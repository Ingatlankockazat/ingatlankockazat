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
- Convert service prices centrally during localisation using the public ECB-based Frankfurter rate, retaining a dated verified fallback and disclosing the rate on the services page; this keeps all public prices consistent without a server or changing their HUF source amounts.
