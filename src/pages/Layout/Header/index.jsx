import React from "react";
import Language from "./Language";
import Nav from "./Nav";
import "./style.scss";
import { nav } from "../../../dev-data";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { Link } from "react-router-dom";

const Header = ({location}) => {
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
            <Link to="/" className="header__logo-container">
              <div className="img-container">
                <svg className="icon">
                  <use xlinkHref="#logo" />
                </svg>
              </div>
            </Link>
            <Nav location={location} down={scrollDirection} content={nav} />
            <Language down={scrollDirection} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
