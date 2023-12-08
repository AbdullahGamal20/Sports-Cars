import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import navListData from "../../data/navListData";
import NavListItem from "./NavListItem";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../App";

function Header() {
  const { library, setLibrary } = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [navList, setNavList] = useState(navListData);
  const location = useLocation();

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleNavOnclick = (id) => {
    const activeNav = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });

    setNavList(activeNav);
  };

  return (
    <header>
      <a
        href="/"
        className="logo"
        style={
          location.pathname === "/" ? { color: "#0eaccc" } : { color: "#fff" }
        }
      >
        Motors
      </a>
      <div>
        <Link to="/library" className="like">
          <i className="bi bi-bag-heart-fill"></i>
          <span className="likeNumbers">{library.length}</span>
        </Link>
        <a href="#" className="menu" onClick={handleToggleMenu}>
          {open ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-menu-app"></i>
          )}
        </a>
      </div>

      <ul className={`nav ${open ? "active" : undefined}`}>
        {navList.map((nav) => {
          return (
            <NavListItem
              key={nav._id}
              nav={nav}
              navOnClick={handleNavOnclick}
            />
          );
        })}
      </ul>
    </header>
  );
}

export default Header;
