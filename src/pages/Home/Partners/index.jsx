import React from "react";
import abb from "../../../assets/img/partners/abb.png";
import shin from "../../../assets/img/partners/projectShin.png";
import legal from "../../../assets/img/partners/legal.png";
import tsaghkadzorLogo from "../../../assets/img/partners/tsaghkadzorLogo.png";
import dilijanLogo from "../../../assets/img/partners/dilijanLogo.png";
import './style.scss';

const Partners = (props) => {
  return (
    <section className="partners">
      <h2 className="partners__title">
        <span>partners</span>
        <div />
      </h2>
      <div className="partners__container">
      <div className="partners__icons">
        <a href="/" className="partners__icon partners__icon--abb">
          <span className="img-container">
            <img src={abb} alt="Armenian Bussiness Bank" />
          </span>
        </a>
        <a href="/" className="partners__icon partners__icon--shin">
          <span className="img-container">
            <img src={shin} alt="Project Shin" />
          </span>
        </a>
        <a href="/" className="partners__icon partners__icon--legal">
          <span className="img-container">
            <img src={legal} alt="Legal" />
          </span>
        </a>
        <a href="/" className="partners__icon partners__icon--tsaghkadzor">
          <span className="img-container">
            <img src={tsaghkadzorLogo} alt="Tsaghkadzor Hills" />
          </span>
        </a>
        <a href="/" className="partners__icon partners__icon--dilijan">
          <span className="img-container">
            <img src={dilijanLogo} alt="Dilijan Hills" />
          </span>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Partners;
