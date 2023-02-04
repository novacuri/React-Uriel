import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./navbar.css";

function Navbar() {
  let activeStyle = {
    color: "black",
    fontWeight: "bolder",
  };

  return (
    <nav className="nav-menu">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        Inicio
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/MTB"
      >
        MTB
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/Ruta"
      >
        Ruta
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/category/Triatlon"
      >
        Triatlon
      </NavLink>
      <NavLink to="/cart">
      <CartWidget />
      </NavLink>
      
    </nav>
  );
}

export default Navbar;
