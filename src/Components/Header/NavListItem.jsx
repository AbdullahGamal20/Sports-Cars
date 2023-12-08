import React from "react";
import { Link } from "react-router-dom";
import "./navListItem.css";

function NavListItem({ nav, navOnClick }) {
  return (
    <li>
      <Link
        className={nav.active ? "active" : undefined}
        to={nav.link}
        onClick={() => navOnClick(nav._id)}
      >
        {nav.name === "home" ? <i className="bi bi-house-door"></i> : nav.name}
      </Link>
    </li>
  );
}

export default NavListItem;
