import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink class="index-link" to="/">
            Index Page
          </NavLink>
        </li>

        <li>
          <NavLink class="home-link" to="/home">
            Home Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
