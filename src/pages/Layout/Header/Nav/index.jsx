import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Nav = ({ content, down, location }) => {
  return (
    <nav className={`nav ${down === "down" ? "down" : "up"} ${
      down === "top" ? "top" : null
    }`}>
      <ul className="nav__list">
        {content &&
          content.map((el, i) => {
            return (
              <li key={i} className="nav__item">
                <Link to={el.link} className={`nav__link${location.pathname === el.link ? ' nav__link--active' : ''}`}>
                  {el.text}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Nav;
