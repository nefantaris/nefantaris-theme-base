# nefantaris-theme-base

## Mission

The default theme every new Nefantaris site starts with, and the recommended parent for anyone building their own theme. Its second job is bigger than its first: whatever this theme exports _defines the theme contract_ for the whole ecosystem.

## v1 scope

- Pages: home, blog index, post, generic content page, 404, link page
- Layout primitives: header/nav, footer, content column
- Design tokens (colors, type scale, spacing) expressed so a child theme can override tokens without touching components
- At least one directive component (e.g. `::gallery`) to prove the directive pipeline
- A declared contract: `theme.json` names the layout, every template, every directive, and the plugins the theme requires
- Preview: none of its own. `nef theme dev` renders this theme against nefantaris-core's fixture corpus, which is the same content core builds itself against

## Non-goals (v1)

- Multiple visual variants or dark mode
- Commerce, comments, or anything dynamic

## Open questions

- How tokens are expressed (Tailwind theme extension vs CSS custom properties vs both)
- How much page structure is theme-owned vs frontmatter-driven

## References

Design taste baseline: the design system in `~/Projects/CLAUDE.md`. Visual bar: clean defaults a small business would happily ship unmodified.
