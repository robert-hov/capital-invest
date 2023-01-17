import React from "react";
import { FacebookIcon, InstaIcon, WhatsAppIcon } from "../../../components/Svg";
import "./style.scss";

const Smm = (props) => {
  return (
    <ul className="footer__smm">
      <li className="footer__smm-item">
        <a href="/" className="footer__smm-link">
          <span className="img-container">
            <InstaIcon color="var(--primary-50)" />
          </span>
        </a>
      </li>
      <li className="footer__smm-item">
        <a href="/" className="footer__smm-link">
          <span className="img-container">
            <FacebookIcon color="var(--primary-50)" />
          </span>
        </a>
      </li>
      <li className="footer__smm-item">
        <a href="/" className="footer__smm-link">
          <span className="img-container">
            <WhatsAppIcon color="var(--primary-50)" />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Smm;
