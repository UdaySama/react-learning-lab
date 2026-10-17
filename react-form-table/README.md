# React Learning Tracker

A practice project where I build small React apps day by day and keep them in one place. It is mainly for learning and for revising **React interview questions**.

Each day is a folder. Each folder holds small apps (App 1, App 2, ...) that practice one topic. A sidebar lets me open any day and jump to any app.

---

## Topics I practice

| Topic | What I practice |
| --- | --- |
| **CSS** | Layouts, flexbox, grid, hover/transition effects, responsive design, dark mode |
| **onClick / events** | Click handlers, `onChange`, `onSubmit`, passing arguments to handlers |
| **Buttons** | Toggle buttons, counters, disabled state, conditional styling |
| **State (`useState`)** | Counters, toggles, lists, controlled inputs |
| **Forms** | Controlled inputs, validation, submit handling, select / checkbox / radio |
| **Tables** | Rendering lists with `map`, keys, sorting, filtering, pagination |
| **JSON** | Reading local JSON, `fetch` from an API, displaying data |
| **Files** | File upload, previewing images, reading file contents |
| **Routing** | `react-router-dom`, nested routes, `NavLink`, `Outlet` |
| **Other** | Add more here as I learn (`useEffect`, `useRef`, Context, custom hooks...) |

---

## Folder structure

```
src/
├── App.jsx            # Navbar, sidebar (day folders), routes, footer
├── App.css            # All styles for the project (single CSS file)
├── day-1/
│   ├── Day1Routes.jsx # Day 1 page with tabs for each app
│   ├── App1.jsx
│   ├── App2.jsx
│   └── App3.jsx
└── day-2/
    ├── Day2Routes.jsx
    ├── App1.jsx
    ├── App2.jsx
    └── App3.jsx
```

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start        # Create React App
# or
npm run dev      # Vite
```

Then open the local address shown in the terminal (usually `http://localhost:3000` or `http://localhost:5173`).

---

## How to add a new day

1. Create a folder, for example `src/day-3/`.
2. Add `Day3Routes.jsx` (copy `Day2Routes.jsx` and change the heading and tab links) and the app files `App1.jsx`, `App2.jsx`, ...
3. In `src/App.jsx`, import them and add one object to `menuData`:

```jsx
{
  id: "day-3",
  title: "Day 3",
  path: "/day-3",
  routesComp: <Day3Routes />,
  apps: [
    { name: "App 1", path: "app1", comp: <Day3App1 /> },
  ],
}
```

The sidebar, routes and badges update automatically.

---

## Daily log

Fill this in as I go.

| Day | App | Topic | Done |
| --- | --- | --- | --- |
| 1 | App 1 | | ☐ |
| 1 | App 2 | | ☐ |
| 1 | App 3 | | ☐ |
| 2 | App 1 | | ☐ |
| 2 | App 2 | | ☐ |
| 2 | App 3 | | ☐ |

---

## Interview questions to revise

- What is the difference between props and state?
- What is the virtual DOM, and how does React update the real DOM?
- Controlled vs uncontrolled components?
- Why do list items need a `key`?
- How does `useEffect` work, and what is its dependency array?
- How do you pass data from child to parent?
- What is lifting state up?
- How does React Router's nested routing work (`Outlet`)?

Add my own answers under each question as I learn them.

---

## Tech used

- React
- React Router DOM
- Plain CSS (`App.css`)sss