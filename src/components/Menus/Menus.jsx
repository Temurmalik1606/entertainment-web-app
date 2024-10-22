import React from "react";
import "./Menus.css";
import { Nav } from "./Nav/Nav";
import { NavLink } from "react-router-dom";

export function Menus() {
  return (
    <div className="side-bar">
      <div className="container">
        <div className="menus">
          <div className="logo">
            <NavLink to="/">
              <img src="/public/assets/logo.svg" alt="logo" />
            </NavLink>
          </div>
          <Nav />
          <div className="profile">
            <img src="/public/assets/image-avatar.png" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
