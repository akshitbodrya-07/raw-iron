# RAW:IRON

A full stack website for a gym and supplements brand: **React + Vite + Tailwind** on the front end, **Node + Express** on the back end, a **Neon Postgres** database, and real sign up / login with **Better Auth**.

This is version 3 of my RAW:IRON project. Version 1 was plain HTML and CSS. Version 2 rebuilt it in React with the data in JavaScript files. In version 3 the data lives in a database, React fetches it from my own JSON API, and visitors can create an account and log in.

**Live site:** https://raw-iron-beryl.vercel.app

<img width="1450" height="802" alt="Screenshot 2026-10-24 at 13 02 36" src="https://github.com/user-attachments/assets/bd60364c-fb21-4739-b307-cc54c1d47bb8" />


## Features

- **Data from a database:** classes, coaches and plans are stored in Postgres (Neon) and sent to React by an Express API.
- **Sign up, sign in, sign out:** made with Better Auth. Passwords are stored hashed, never as plain text.
- **Stays logged in after a refresh:** the session is kept in a cookie, so reloading the page doesn't log you out.
- **Sign in / Sign out in the header:** logged out you see SIGN IN; logged in you see HI, NAME and SIGN OUT.
- **Class filter:** buttons above the weekly schedule (ALL, STRENGTH, CARDIO, COMBAT, MOBILITY), built with `useState`.
- **Save a class:** a star on every class, made as a reusable controlled component.
- **Mobile first:** designed for phones first, then tablet (`md:`) and desktop (`lg:`). No horizontal scroll.

<img width="1376" height="460" alt="schedule-filter" src="https://github.com/user-attachments/assets/874e611f-6d9d-4700-92d9-bfda16b0b333" />


## Built with

| Part | Tools |
| --- | --- |
| Front end | React, Vite, Tailwind CSS v4 |
| Back end | Node.js, Express 5 |
| Database | Neon (free Postgres), `pg` package with plain SQL |
| Auth | Better Auth (email and password) |
| Hosting | Vercel (front end), Render (back end) |

## How it works

```
Browser  →  Vercel (React app)  →  Render (Express API)  →  Neon (Postgres)
```

1. React asks for `/api/classes`.
2. Vercel forwards every `/api/...` request to my Express server on Render (set up in `client/vercel.json`).
3. Express runs a SQL query with `pool.query(...)`.
4. Neon sends back the rows, and Express returns them as JSON.
5. React stores the data with `useState` and shows it.

Because the browser only ever talks to Vercel, the login cookie counts as a normal same-site cookie and works in every browser.

## Project structure

```
raw-iron/
├── client/                  React app (front end)
│   ├── public/assets/       images and favicon
│   ├── src/
│   │   ├── components/      Header, Schedule, Crew, Plans, AuthForm ...
│   │   ├── lib/authClient.js   Better Auth client for React
│   │   ├── data/            Week 2 data files (used by the seed script)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vercel.json          forwards /api requests to the server
│   └── .env                 VITE_API_URL (not committed)
│
└── server/                  Express app (back end)
    ├── index.js             the server and the API routes
    ├── db.js                connection pool to Neon
    ├── auth.js              Better Auth setup
    ├── schema.sql           creates my tables
    ├── seed.js              copies the data files into the database
    └── .env                 secrets (not committed)
```

## Database

| Table | Made by | What it holds |
| --- | --- | --- |
| `classes` | me (`schema.sql`) | day, time, name, type |
| `crew` | me (`schema.sql`) | name, role, bio, image |
| `plans` | me (`schema.sql`) | name, price, features (list), popular |
| `user` | Better Auth | name and email of each user |
| `account` | Better Auth | the hashed password |
| `session` | Better Auth | one row per login |
| `verification` | Better Auth | email verification codes |

## API routes

| Route | What it returns |
| --- | --- |
| `GET /api/health` | `{ "status": "ok" }` |
| `GET /api/classes` | all classes |
| `GET /api/crew` | all coaches |
| `GET /api/plans` | all membership plans |
| `/api/auth/*` | sign up, sign in, sign out and session (handled by Better Auth) |

## How to run it locally

You need Node.js and a free Neon database (neon.tech).

1. Clone the repository:
   ```
   git clone https://github.com/akshitbodrya-07/raw-iron.git
   cd raw-iron
   ```
2. Set up the server:
   ```
   cd server
   npm install
   ```
   Create `server/.env`:
   ```
   DATABASE_URL=your-neon-connection-string
   BETTER_AUTH_SECRET=a-long-random-string
   BETTER_AUTH_URL=http://localhost:3000
   CLIENT_URL=http://localhost:5173
   ```
   (Make a secret with `openssl rand -base64 32`.)
3. Create the tables and add the data:
   - Run `schema.sql` in the Neon SQL Editor.
   - Run `npx auth migrate` to create the Better Auth tables.
   - Run `npm run seed` to fill the tables.
4. Start the server with `npm run dev`. It runs on http://localhost:3000.
5. In a second terminal, set up the client:
   ```
   cd client
   npm install
   ```
   Create `client/.env`:
   ```
   VITE_API_URL=http://localhost:3000
   ```
   Then run `npm run dev` and open http://localhost:5173.

## Security

- `.env` files are in `.gitignore` and have never been committed.
- Passwords are hashed by Better Auth.
- SQL values are passed with placeholders (`$1, $2 ...`), which protects against SQL injection.
- The server only accepts login requests from my own website (`trustedOrigins` and CORS).

## Screenshots

<img width="1440" height="4631" alt="desktop-full" src="https://github.com/user-attachments/assets/059a1aef-3dce-421d-8655-0f172f470751" />


## What I learned

- Splitting a project into a client and a server
- Designing database tables and writing SQL
- Writing a seed script to move data into a database
- Building a JSON API with Express
- Fetching data in React with `useEffect` and `useState`
- How login, sessions and cookies work
- Keeping secrets in `.env` and deploying a front end and back end separately

## Author

**Akshit Bodrya**
GitHub: [akshitbodrya-07](https://github.com/akshitbodrya-07)
