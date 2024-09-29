import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink style={navLinkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyle} to="/about">
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
