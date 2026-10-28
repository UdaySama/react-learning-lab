import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";

import menuData from "./registry";
import DayPage from "./DayPage";

const totalApps = menuData.reduce((sum, d) => sum + d.apps.length, 0);
const isMobile = () => window.innerWidth <= 800;

export default function App() {
  const { pathname } = useLocation();

  const [openDays, setOpenDays] = useState({ "day-1": true });
  const [sidebarOpen, setSidebarOpen] = useState(() => !isMobile());
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const current = menuData.find(
      (d) => pathname === d.path || pathname.startsWith(d.path + "/")
    );
    if (current) setOpenDays((prev) => ({ ...prev, [current.id]: true }));
    if (isMobile()) setSidebarOpen(false);
  }, [pathname]);

  const toggleDay = (id) =>
    setOpenDays((prev) => ({ ...prev, [id]: !prev[id] }));

  const expandAll = () =>
    setOpenDays(Object.fromEntries(menuData.map((d) => [d.id, true])));
  const collapseAll = () => setOpenDays({});

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="navbar-left">
          <button
            className="icon-btn"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          <NavLink to="/" className="brand">
            <span className="brand-logo">⚛</span>
            <span className="brand-text">React Learning Tracker</span>
          </NavLink>
        </div>

        <div className="navbar-right">
          <span className="badge">{menuData.length} Days</span>
          <span className="badge">{totalApps} Apps</span>
          <button
            className="icon-btn"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            aria-label="Toggle theme"
            title="Toggle light / dark"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </header>

      <div className="layout-body">
        {sidebarOpen && (
          <>
            <aside className="sidebar">
              <div className="sidebar-top">
                <h2>Days Overview</h2>
                <div className="sidebar-actions">
                  <button onClick={expandAll}>Open all</button>
                  <button onClick={collapseAll}>Close all</button>
                </div>
              </div>

              {menuData.map((day) => {
                const isOpen = !!openDays[day.id];
                return (
                  <div key={day.id} className="sidebar-section">
                    <div className="sidebar-day-header">
                      <NavLink
                        to={day.path}
                        end
                        className={({ isActive }) =>
                          `sidebar-day-link ${isActive ? "active" : ""}`
                        }
                      >
                        <span>{isOpen ? "📂" : "📁"}</span>
                        {day.title}
                        <span className="count">{day.apps.length}</span>
                      </NavLink>
                      <button
                        className={`arrow-btn ${isOpen ? "open" : ""}`}
                        onClick={() => toggleDay(day.id)}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Close" : "Open"} ${day.title}`}
                      >
                        ▼
                      </button>
                    </div>

                    <div className={`sidebar-sub-menu ${isOpen ? "show" : ""}`}>
                      {day.apps.map((app) => (
                        <NavLink
                          key={app.path}
                          to={`${day.path}/${app.path}`}
                          className={({ isActive }) =>
                            `sidebar-app-link ${isActive ? "active" : ""}`
                          }
                        >
                          <span>📄</span>
                          {app.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              })}
            </aside>
            <div
              className="sidebar-overlay"
              onClick={() => setSidebarOpen(false)}
            />
          </>
        )}

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="card welcome">
                  <h2>Welcome 👋</h2>
                  <p>Pick a day from the sidebar, then open an app.</p>
                </div>
              }
            />
            {menuData.map((day) => (
              <Route
                key={day.id}
                path={day.path}
                element={<DayPage day={day} />}
              >
                {day.apps.map((app) => (
                  <Route key={app.path} path={app.path} element={<app.comp />} />
                ))}
              </Route>
            ))}
            <Route
              path="*"
              element={
                <div className="card welcome">
                  <h2>Page not found</h2>
                  <p>That route doesn't exist.</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} React Learning Tracker</p>
      </footer>
    </div>
  );
}