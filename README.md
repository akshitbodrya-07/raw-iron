# RAW:IRON

A one-page website for a gym and fitness studio, built with plain **HTML5 and CSS3**. No frameworks, no JavaScript.

**Live site:** raw-iron-beryl.vercel.app

## About the project

RAW:IRON is my final project for the web development course. I rebuilt a Figma design in code, one section at a time. The page shows the gym's classes, trainers and membership plans, and works on desktop, tablet and phone.

## Sections

- **Header**: logo, navigation menu and a JOIN US button. The header is sticky.
- **Hero**: main heading, short intro text, call-to-action button and photo.
- **Class schedule**: weekly training times. Slots turn orange on hover.
- **Crew**: trainer cards with photo, name and specialty.
- **Supplements promo**: a highlight block for the supplements line.
- **Pricing plans**: three membership options, with the popular plan highlighted.
- **Stats**: three key numbers about the products.
- **Build your stack**: a banner with three steps (Prime, Perform, Recover).
- **Footer**: links, contact details and a newsletter form.

## Built with

- HTML5 (semantic tags: `header`, `nav`, `main`, `section`, `footer`)
- CSS3 (Flexbox, Grid, CSS variables, media queries, transitions)
- Google Fonts: Oswald (headings) and Inter (text)
- Git and GitHub, published with GitHub Pages

## Features

- **Semantic HTML** with one `h1` and an `h2` for every section title
- **Working navigation**: menu links jump to sections with `#id` links
- **CSS variables** in `:root` for colors (`--ink`, `--paper`, `--orange`)
- **`box-sizing: border-box`** on all elements
- **Flexbox** for one-direction layouts (header, buttons, banner steps)
- **Grid** for rows and columns (crew cards, plans, stats, footer)
- **Responsive design** with two breakpoints:
  - `max-width: 900px` for tablets (grids become 2 columns)
  - `max-width: 600px` for phones (everything becomes 1 column)
- **No horizontal scroll** at any screen size
- Hover effects with smooth transitions
- `clamp()` for headings that scale with the screen

## Project structure

```
raw-iron/
├── index.html      page content
├── style.css       all styles
└── assets/         images and favicon
```

## How to run it

1. Clone the repository:
   ```
   git clone https://github.com/akshitbodrya-07/raw-iron.git
   ```
2. Open `index.html` in your browser, or use the Live Server extension in VS Code.

## What I learned

- When to use Flexbox (one direction) and when to use Grid (two directions)
- Media query order matters: the later rule wins, so the 900px block goes before the 600px block
- How to find and fix elements that cause horizontal scrolling on small screens
- Keeping CSS clean and reusable with variables

## Future improvements

- An online supplements shop with product filters
- A mobile menu for small screens

## Author

**Akshit Bodra**
GitHub: [akshitbodrya-07](https://github.com/akshitbodrya-07)
