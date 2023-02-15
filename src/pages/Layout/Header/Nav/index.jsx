import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Language from "../Language";
import {withI18n} from 'react-i18next'

const Nav = ({ content, direction, location, active, setActive, t }) => {
  return (
    <nav
      className={`nav${
        direction === "down" ? " down" : direction === "up" ? " up" : ""
      }${direction === "top" ? " top" : ""}${active ? " nav--active" : ""}`}
    >
      <ul className="nav__list">
        {content &&
          content.map((el, i) => {
            return (
              <li key={i} className="nav__item">
                <Link
                  to={el.link}
                  className={`nav__link${
                    location.pathname === el.link ? " nav__link--active" : ""
                  }`}
                  onClick={() => setActive(false)}
                >
                  {t(el.text)}
                </Link>
              </li>
            );
          })}
        <li className="nav__item">
          <Language direction={direction} />
        </li>
      </ul>
    </nav>
  );
};

export default withI18n()(Nav);
