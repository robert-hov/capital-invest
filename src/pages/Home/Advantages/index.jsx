import React from "react";
import tsaghkadzor from "../../../assets/img/advantages/tsaghkadzor.png";
import "./style.scss";

const Advantages = (props) => {
  return (
    <section className="advantages">
      <div className="page-container">
        <div className="advantages__container">
          <h2 className="advantages__title">
            <span>OUR ADVANTAGES</span>
            <div />
          </h2>
          <div className="advantages__content">
            <div className="advantages__text-container">
              <span className="advantages__text">professional team</span>
              <span className="advantages__text">
                Stable position in the market
              </span>
              <span className="advantages__text">Competitive price policy</span>
            </div>
            <div className="advantages__img">
              <div className="img-container">
                <img src={tsaghkadzor} alt="advantage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
