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
| `theme.css`     | Tailwind 4 `@theme` tokens and the font faces     |
| `Layout.tsx`    | Header, nav, content column, footer               |
| `templates/`    | One component per template named in the manifest  |
| `directives/`   | Components markdown block directives render as    |
| `components/`   | Shared pieces the templates build from            |
| `classNames.ts` | Conditional class helper                          |
| `fonts/`        | Open Sans, subset and self-hosted                 |

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

## License

MIT — see [LICENSE](./LICENSE).
