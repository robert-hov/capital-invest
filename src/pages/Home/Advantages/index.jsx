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
            <ol className="advantages__text-container">
              <li className="advantages__text">professional team</li>
              <li className="advantages__text">
                Stable position in the market
              </li>
              <li className="advantages__text">Competitive price policy</li>
            </ol>
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
