import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites ❤️</NavLink>

        </li>
      </ul>
    </nav>
  );
}
