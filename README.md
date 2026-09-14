# nefantaris-theme-base

Default theme for Nefantaris sites, and the recommended parent for anyone
building their own.

See [BRIEF.md](./BRIEF.md) for the mission.

## What is in here

A Nefantaris theme is a group of components and a manifest, not a React
project. There is no `package.json`, no bundler config, and no test suite —
[nefantaris-core](https://github.com/nefantaris/nefantaris-core) reads
`theme.json`, copies these files into a generated React project, and wires them
together.

| Path            | What it is                                        |
| --------------- | ------------------------------------------------- |
| `theme.json`    | The manifest: layout, templates, directives, deps |
| `theme.css`     | Design tokens, light and dark, and the font faces |
| `Layout.tsx`    | Header, nav, content column, footer               |
| `templates/`    | One component per template named in the manifest  |
| `directives/`   | Components markdown block directives render as    |
| `components/`   | Shared pieces the templates build from            |
| `classNames.ts` | Conditional class helper                          |
| `fonts/`        | Open Sans, subset and self-hosted                 |

## Templates

| Name        | Component                         | Renders                     |
| ----------- | --------------------------------- | --------------------------- |
| `page`      | `templates/PageTemplate.tsx`      | A generic content page      |
| `notFound`  | `templates/NotFoundTemplate.tsx`  | The 404 page                |
| `home`      | `templates/HomeTemplate.tsx`      | The site's home page        |
| `post`      | `templates/PostTemplate.tsx`      | A single blog post          |
| `blogIndex` | `templates/BlogIndexTemplate.tsx` | The year-grouped blog index |
| `linkPage`  | `templates/LinkPageTemplate.tsx`  | A "link in bio" style page  |

A page opts into `linkPage` with `template: linkPage` in its frontmatter.
The body then follows a few conventions: a first paragraph holding a single
image becomes a round avatar, `## ` headings become small centered section
labels, and a top-level `- [label](url)` list renders as full-width buttons.
External links — which core renders with `target="_blank"` — get an ↗
marker.

### The home page

`home` renders the page's `title` as a large headline and its `description` as
the lead paragraph, so on the home page the frontmatter title is the hero
copy rather than a label — the browser tab shows the site name there anyway.
Below the hero, every `## ` heading in the body starts a section: on large
screens the heading sits in a narrow left column and the content that follows
it fills the right, and on small screens they stack. A `:::buttons` block
placed first in the body becomes the hero's call to action.

## Directives

| Name      | Component                | Renders                              |
| --------- | ------------------------ | ------------------------------------ |
| `gallery` | `directives/Gallery.tsx` | Images in a responsive grid          |
| `buttons` | `directives/Buttons.tsx` | A list of links as a row of buttons  |
| `command` | `directives/Command.tsx` | A command to run, with a copy button |

```md
:::buttons

- [Read the blog](/blog)
- [About](/about)
  :::
```

The first link in a `buttons` block is the filled primary button; the rest are
outlined. External links get the same ↗ marker as on a link page.

````md
:::command

```sh
npx create-nef my-site
```

:::
````

A `command` block renders whatever is inside it on one scrolling line beside a
copy button, so it suits a single command rather than a listing. The button
copies the block's text and reads "Copied" for two seconds; copying needs
JavaScript and a secure context, and the command stays selectable either way.

## Modes

The theme ships two modes, `light` and `dark`. A site follows the visitor's
system setting by default and shows a switch in the header; the choice is
remembered per visitor. Core applies the mode to `<html data-mode>` before
first paint, so there is no flash and nothing for a page to do.

A site sets the default or turns a mode off in `nefantaris.json`:

```json
"modes": { "default": "dark", "exclude": ["light"] }
```

With one mode left the switch disappears.

Every color in the components is one of the tokens below.

| Token                | Use                                    |
| -------------------- | -------------------------------------- |
| `brand-primary`      | Links, the primary button, focus rings |
| `brand-primaryHover` | Hover state of the above               |
| `brand-onPrimary`    | Text on a `brand-primary` background   |
| `brand-text`         | Body text and headings                 |
| `brand-muted`        | Secondary text, dates, labels          |
| `brand-background`   | The page                               |
| `brand-surface`      | Code blocks, menus, hover fills        |
| `brand-border`       | Hairlines                              |

A child theme changes the palette by shadowing `theme.css` and redefining the
`--brand-*` custom properties on `:root` and `:root[data-mode="dark"]`.

## Commands

Everything runs through the `nef` CLI, from anywhere:

| Command                      | Purpose                                  |
| ---------------------------- | ---------------------------------------- |
| `nef theme dev <themeDir>`   | Preview against core's fixture corpus    |
| `nef theme check <themeDir>` | Manifest, types, lint, and format checks |

Both commands generate `.nefantaris/`, `tsconfig.json`, and a `node_modules`
symlink inside this repo. All three are gitignored; nothing else is written.

## Requirements

`theme.json` requires
[nefantaris-plugin-date-fns](https://github.com/nefantaris/nefantaris-plugin-date-fns),
which is how `date-fns` becomes importable here. A site using this theme
enables it with `nef plugins add nefantaris-plugin-date-fns`.

## Extending it

A site can shadow any file in this repo by path from the theme root — drop
`child-theme/theme.css` in the site repo to override the tokens without
touching a component.

`components/Prose.tsx` styles markdown through `:where()` selectors, so its
rules carry no class specificity. A directive or template that wraps markdown
can restyle any element inside it with an ordinary `[&>ul]:flex`-style
variant and win without `!important`; `directives/Buttons.tsx` is the
example.

## License

MIT — see [LICENSE](./LICENSE).
