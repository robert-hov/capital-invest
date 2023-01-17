import React from "react";
import { footerNav } from "../../../../dev-data";
import "./style.scss";

const FooterNav = (props) => {
  return (
    <ul className="footer__nav">
      {footerNav.map((el, i) => {
        return (
          <li key={i} className="footer__nav-item">
            <a href={el.link} className="footer__nav-link">
              {el.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterNav;
