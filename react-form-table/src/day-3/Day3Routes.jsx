import React from "react";
import { NavLink, Outlet, useOutlet } from "react-router-dom";

export default function Day2Routes() {
  const outlet = useOutlet();

  return (
    <section className="day-page">
      <div className="day-header">
        <h2>Day 3 Tasks</h2>
        <p>Choose an app to see it below.</p>
      </div>

      <div className="tabs">
        <NavLink to="app1" className="tab-link">
          App 1
        </NavLink>
        <NavLink to="app2" className="tab-link">
          App 2
        </NavLink>
        <NavLink to="app3" className="tab-link">
          App 3
        </NavLink>
        <NavLink to="app4" className="tab-link">
          App 4
        </NavLink>
        <NavLink to="app5" className="tab-link">
          App 5
        </NavLink>
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
