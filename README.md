# Tuneage
Uses Astro SSG to turn structured markdown *.md files into route-navigable links pages with a custom layout. \
The static site pages can then be hosted on GitHub pages (or anywhere else) \
This is intended as a personal link page site, mostly featuring links to old video game music.

### TODO
- Make the image showing the video thumbnail turn into an embedded YT video when the link is clicked, instead of
  navigating to it from a new browser tab.
- Vary theme based on day of the week. E.g: Monday-Solar, Tuesday-Charcoal, Wednesday-Lunar etc.

### Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── astro.svg
│   └── content/
│       └── games/
│           └── example0.md
│           └── example1.md
│           └── example2.md
│   └── pages
│       └── games/
│           └── [slug].astro
└── package.json
```
