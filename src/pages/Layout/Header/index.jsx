import React from "react";
import Nav from "./Nav";
import "./style.scss";
import { nav } from "../../../dev-data";
import { useScrollDirection } from "../../../hooks/useScrollDirection";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useScrollBlock from "../../../hooks/useScrollDisable";

const Header = ({ location }) => {
  const scrollDirection = useScrollDirection();
  const [menuOpened, setMenuOpened] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();
  useEffect(() => {
    if (menuOpened) blockScroll();
    else allowScroll();
  }, [menuOpened, allowScroll, blockScroll]);
  return (
    <>
      <header
        className={`header${
          scrollDirection === "down"
            ? " down"
            : scrollDirection === "up"
            ? " up"
            : ""
        }${scrollDirection === "top" ? " top" : ""}${
          menuOpened ? " header--active" : ""
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
            <Nav
              location={location}
              direction={scrollDirection}
              content={nav}
              active={menuOpened}
              setActive={setMenuOpened}
            />
            <button
              onClick={() => setMenuOpened(!menuOpened)}
              className={`hamburger-icon${menuOpened ? " active" : ""}`}
            >
              <span className="line"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
