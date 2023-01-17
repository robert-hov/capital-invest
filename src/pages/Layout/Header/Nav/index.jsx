import React from "react";
import "./style.scss";

const Nav = ({ content, down }) => {
  return (
    <nav className={`nav ${down === "down" ? "down" : "up"} ${
      down === "top" ? "top" : null
    }`}>
      <ul className="nav__list">
        {content &&
          content.map((el, i) => {
            return (
              <li key={i} className="nav__item">
                <a href={el.link} className="nav__link">
                  {el.text}
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Nav;
