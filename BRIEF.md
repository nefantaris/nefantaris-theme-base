# nefantaris-theme-base

## Mission

The default theme every new Nefantaris site starts with, and the recommended parent for anyone building their own theme. Its second job is bigger than its first: whatever this theme exports _defines the theme contract_ for the whole ecosystem.

## v1 scope

- Pages: home, blog index, post, generic content page, 404
- Layout primitives: header/nav, footer, content column
- Design tokens (colors, type scale, spacing) expressed so a child theme can override tokens without touching components
- At least one directive component (e.g. `::gallery`) to prove the directive pipeline
- A declared contract: which frontmatter fields it understands, which directives it provides, what a child theme may override
- Dev sandbox: the scaffolded app renders the theme against sample content for local development

## Non-goals (v1)

- Multiple visual variants or dark mode
- Commerce, comments, or anything dynamic

## Open questions

- The exact shape of the theme export (this is the important design work — do it deliberately, with nefantaris-core)
- How tokens are expressed (Tailwind theme extension vs CSS custom properties vs both)
- How much page structure is theme-owned vs frontmatter-driven

## References

Design taste baseline: the design system in `~/Projects/CLAUDE.md`. Visual bar: clean defaults a small business would happily ship unmodified.
