import React from "react";
import { FooterLogo } from "../../components/Svg";
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
            <Smm />
          </div>
          <a href="/" className="footer__logo">
            <span className="img-container">
              <FooterLogo color="var(--primary)" />
            </span>
          </a>
          <div className="footer__right">
            <span className="footer__right-text footer__right-text--address">
              Nairi ZarYan st.Yerevan armenia 17/1
            </span>
            <span className="footer__right-text footer__right-text--tel">+374098888888</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
