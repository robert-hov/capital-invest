import React from "react";
import FooterNav from "./Nav";
import Smm from "./Smm";
import "./style.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="page-container">
        <div className="footer__container">
          <div className="footer__left">
            <FooterNav />
          </div>
          <div className="footer__logo-container">

          <a href="/" className="footer__logo">
            <span className="img-container">
              <svg className="icon">
                <use xlinkHref="#footer-logo" />
              </svg>
            </span>
          </a>
          </div>
          <div className="footer__right">
            <span className="footer__right-text footer__right-text--address">
              Nairi ZarYan st. 17/1
            </span>
            <span className="footer__right-text footer__right-text--tel">
              +374098888888
            </span>
            <Smm />
          </div>
        </div>
        <div className="footer__copyright">
          <span className="footer__copyright-text">
          © Copyright Capital Invest Group LLC 2023
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
