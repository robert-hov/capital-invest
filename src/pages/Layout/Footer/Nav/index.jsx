import React from "react";
import { Link } from "react-router-dom";
import { footerNav } from "../../../../dev-data";
import "./style.scss";
import {withI18n} from 'react-i18next'

const FooterNav = ({t}) => {
  return (
    <ul className="footer__nav">
      {footerNav.map((el, i) => {
        return (
          <li key={i} className="footer__nav-item">
            <Link to={el.link} className="footer__nav-link">
              {t(el.text)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withI18n()(FooterNav);
