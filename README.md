# Brunel Cyber Security Society — website

A three-page static site. No build tools, no frameworks — just HTML, CSS and a little JavaScript.

## Structure

```
brunel-site/
├── index.html        homepage (hero, about, events preview, join)
├── events.html       full programme + CTF team
├── committee.html    member cards
├── css/
│   └── styles.css    shared styles for every page
└── js/
    └── waves.js      animated wireframe wave hero background
```

## Open it in VS Code

1. Open VS Code → File → Open Folder → choose `brunel-site`
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel
3. Right-click `index.html` → **Open with Live Server**
4. The site opens in your browser and auto-reloads every time you save a file

(You can also just double-click `index.html` to open it in a browser — Live Server is only nicer because of the auto-reload.)

## Things to update before launch

- Event dates, rooms and titles in `index.html` and `events.html`
- Committee names and initials in `committee.html`
- The Discord, Instagram and GitHub links in every footer (currently `#`)
- The Union membership link in `index.html`
- The stats numbers (members, rankings) — keep them honest!

## Design tokens

Everything lives as CSS variables at the top of `css/styles.css`:

| token       | value     | use                              |
|-------------|-----------|----------------------------------|
| `--bg`      | `#0B0B0D` | page background                  |
| `--surface` | `#131316` | cards, raised bands              |
| `--line`    | `#26262B` | borders, dividers                |
| `--text`    | `#E9E6E3` | headings, primary text           |
| `--muted`   | `#8E8B8F` | body copy, secondary text        |
| `--warm`    | `#E08A6D` | accent — ctf tags, glitch effect |
| `--cool`    | `#6FC9D8` | accent — workshop tags, glitch   |

Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (terminal-flavoured accents) — loaded from Google Fonts.

## Free hosting when you're ready

GitHub Pages, Netlify or Cloudflare Pages all host static sites like this for free — drag the folder in and you're live.

## Updating events and blog posts (the easy way)

All events and blog posts live in **`js/data.js`** — one file, plain text lists with instructions at the top. Add, edit, or delete the `{ ... }` blocks and save; the homepage, events page, and blog all update themselves. The homepage always shows the first 3 events, and the first blog post in the list becomes the featured card.
