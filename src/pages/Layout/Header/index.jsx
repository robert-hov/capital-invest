import React from "react";
import Language from "./Language";
import Nav from "./Nav";
import "./style.scss";
import { nav } from "../../../dev-data";
import { useScrollDirection } from "../../../hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <header
        className={`header ${scrollDirection === "down" ? "down" : "up"} ${
          scrollDirection === "top" ? "top" : null
        }`}
      >
        <div className="page-container">
          <div className="header__container">
            <a href="/" className="header__logo-container">
              <div className="img-container">
                <svg class="icon">
                  <use xlinkHref="#logo" />
                </svg>
              </div>
            </a>
            <Nav down={scrollDirection} content={nav} />
            <Language down={scrollDirection === "down"} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
