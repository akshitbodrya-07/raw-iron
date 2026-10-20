# RAW:IRON

A one-page website for a gym and supplements brand, built with **React, Vite and Tailwind CSS**.

This is version 2 of my RAW:IRON project. Version 1 was plain HTML and CSS. For this assignment I rebuilt the same design as React components, with the content in data files and two interactive features made with `useState`.

**Live site:** https://raw-iron-git-main-akshitbodrya-07s-projects.vercel.app/

<img width="1440" height="900" alt="hero" src="https://github.com/user-attachments/assets/a6a825ae-fe40-4a44-a6bb-56e538a4567f" />


## Features

- **Class filter:** buttons above the weekly schedule (ALL, STRENGTH, CARDIO, COMBAT, MOBILITY) show only the classes of that type. Built with `useState`.
- **Save a class:** every class has a star. Click it to save the class, click again to unsave it. The star is a reusable controlled component.
- **Data-driven sections:** classes, coaches and plans come from arrays of objects in `src/data/`, and the components use `.map()` to render them.
- **Mobile first:** designed for phones first, then adjusted for tablet (`md:`) and desktop (`lg:`). No horizontal scroll at any screen size.
- **Working navigation:** the sticky header links jump to each section.
- **Hover effects** on schedule slots, coach cards, buttons and links.

- <img width="1376" height="460" alt="schedule-filter" src="https://github.com/user-attachments/assets/27d8d569-cb61-443a-b945-8c279e655d2e" />


## Built with

- React (components, props, `useState`)
- Vite (development server and build)
- Tailwind CSS v4 (all styling, no separate CSS file)
- Google Fonts: Oswald (headings) and Inter (text)
- Git and GitHub, deployed on Vercel

## Components

| Component | What it shows |
| --- | --- |
| `Header` | Logo, navigation links and JOIN US button (sticky) |
| `Hero` | Main heading, intro text, button, stats and photo |
| `Schedule` | Weekly class timetable with the filter buttons |
| `SaveToggle` | The star button on each class (controlled component) |
| `SectionTitle` | Reusable section heading with a small side label |
| `Crew` | Coach cards |
| `Promo` | Supplements highlight block |
| `Plans` | Three membership plans, with the popular one highlighted |
| `Stats` | Three key numbers about the products |
| `StackBanner` | The PRIME / PERFORM / RECOVER banner |
| `Footer` | Links, address, newsletter field and social links |

## How the React parts work

**useState (class filter)**

`Schedule` keeps the selected filter in state:

```jsx
const [currentFilter, setCurrentFilter] = useState('ALL')
```

Clicking a button calls `setCurrentFilter('COMBAT')`. React re-renders `Schedule`, and the list is filtered again so only matching classes show.

**Controlled component (SaveToggle)**

`SaveToggle` has no state of its own. The parent `Schedule` keeps a list of saved class ids and passes two props down:

```jsx
<SaveToggle saved={savedIds.includes(item.id)} onToggle={() => toggleSaved(item.id)} />
```

- `saved` tells the star what to show (filled or empty).
- `onToggle` lets the star tell the parent it was clicked.

Data goes down as props, events go up as functions. Because the state lives in `Schedule`, saved classes stay saved when you change the filter.

## Project structure

```
raw-iron/
├── public/
│   └── assets/          images and favicon
├── src/
│   ├── components/      one file per component
│   ├── data/
│   │   ├── classes.js   weekly classes
│   │   ├── crew.js      coaches
│   │   └── plans.js     membership plans
│   ├── App.jsx          puts all the components together
│   ├── index.css        Tailwind import, colors and fonts
│   └── main.jsx         starts the React app
├── index.html
└── vite.config.js
```

## How to run it

1. Clone the repository:
   ```
   git clone https://github.com/akshitbodrya-07/raw-iron.git
   cd raw-iron
   ```
2. Install the packages:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open the link it shows (usually http://localhost:5173).

To make the final build, run `npm run build`. The finished site goes into the `dist` folder.

## Screenshots

<img width="1440" height="4631" alt="desktop-full" src="https://github.com/user-attachments/assets/a9772ff3-1cc9-45fc-a37d-c8f70813895d" />


## What I learned

- Splitting a page into small components that each do one job
- Passing data into components with props, and reusing one component many times
- Keeping content in data files and rendering it with `.map()` and a `key`
- How `useState` remembers a value and re-renders the component when it changes
- Lifting state up to the parent and making a controlled component
- Writing mobile-first styles with Tailwind's `md:` and `lg:` prefixes

## Author

**Akshit Bodra**
GitHub: [akshitbodrya-07](https://github.com/akshitbodrya-07)
