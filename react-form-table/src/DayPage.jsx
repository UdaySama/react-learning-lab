import React from "react";
import { NavLink, Outlet, useOutlet } from "react-router-dom";

export default function DayPage({ day }) {
  const outlet = useOutlet();

  return (
    <section className="day-page">
      <div className="day-header">
        <h2>{day.title} Tasks</h2>
        <p>Choose an app to see it below.</p>
      </div>

      <div className="tabs">
        {day.apps.map((app) => (
          <NavLink key={app.path} to={app.path} className="tab-link">
            {app.name}
          </NavLink>
        ))}
      </div>

      <div className="card day-content">
        {outlet ? (
          <Outlet />
        ) : (
          <p className="hint">👆 Pick an app above to get started.</p>
        )}
      </div>
    </section>
  );
}