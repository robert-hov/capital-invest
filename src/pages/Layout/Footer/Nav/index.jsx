import React from "react";
import { Link } from "react-router-dom";
import { footerNav } from "../../../../dev-data";
import "./style.scss";

const FooterNav = (props) => {
  return (
    <ul className="footer__nav">
      {footerNav.map((el, i) => {
        return (
          <li key={i} className="footer__nav-item">
            <Link to={el.link} className="footer__nav-link">
              {el.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterNav;
