import React from "react";
import "./style.scss";

const Smm = (props) => {
  return (
    <ul className="footer__smm">
      <li className="footer__smm-item">
        <a href="/" className="footer__smm-link">
          <div className="img-container">
            <svg className="icon">
              <use xlinkHref="#facebook" />
            </svg>
          </div>
        </a>
      </li>
      <li className="footer__smm-item">
        <a href="/" className="footer__smm-link">
          <span className="img-container">
            <svg className="icon">
              <use xlinkHref="#insta" />
            </svg>
          </span>
        </a>
      </li>
      <li className="footer__smm-item">
        <a href="/" className="footer__smm-link">
          <span className="img-container">
            <svg className="icon">
              <use xlinkHref="#whatsapp" />
            </svg>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Smm;
