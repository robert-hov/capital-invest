import React from "react";
import "./style.scss";

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
            <span className="img-container" />
          </a>
          <a href="/" className="partners__icon partners__icon--shin">
            <span className="img-container" />
          </a>
          <a href="/" className="partners__icon partners__icon--legal">
            <span className="img-container" />
          </a>
          <a href="/" className="partners__icon partners__icon--tsaghkadzor">
            <span className="img-container" />
          </a>
          <a href="/" className="partners__icon partners__icon--dilijan">
            <span className="img-container" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
